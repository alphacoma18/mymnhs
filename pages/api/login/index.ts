import { serialize } from "cookie";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import dbExecute from "../../../utils/db/db";
import {
	generateAccessToken,
	generateRefreshToken,
} from "../../../utils/jwt/jwt";
interface InData {
	account_id: number;
	account_first_name: string;
	account_last_name: string;
	account_email: string;
	account_password: string;
	account_section_id: number;
	section_grade: string;
	section_strand: string;
	section_name: string;
}
type ObjData = InData[];
/**
 * Flow of the code
 * 1. Get incoming data from the request
 * 2. Check if the account exists using given email
 * 3. If the account exists, check if the password is correct
 * 4. Generate the access token and refresh token
 * 5. Set the cookie with the access token and refresh token
 */
export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		const { email, password }: { email: string; password: string } =
			req.body;
		const sql = `
			SELECT account_id, account_first_name, account_last_name, account_section_id, account_password, section_grade, section_strand, section_name
			FROM account_table
			JOIN section_table
			ON account_table.account_section_id = section_table.section_id
			WHERE account_email = $1
			LIMIT 1;
		`;
		const objData: ObjData = await dbExecute(sql, [email]);
		if (objData.length === 0)
			return res.status(401).json({ message: "Account not found" });
		const {
			account_id,
			account_first_name,
			account_last_name,
			account_section_id,
			account_password,
			section_grade,
			section_strand,
			section_name,
		} = objData[0];
		const userData = {
			account_id,
			account_first_name,
			account_last_name,
			account_section_id,
			section_grade,
			section_strand,
			section_name,
		};
		const isPasswordCorrect = await bcrypt.compare(
			password,
			account_password
		);
		if (!isPasswordCorrect)
			return res
				.status(401)
				.json({ message: "Email or password is incorrect" });

		const accessToken = await generateAccessToken(userData);
		const refreshToken = await generateRefreshToken(userData);
		return res
			.setHeader("Set-Cookie", [
				serialize("refresh_token_extreme", refreshToken, {
					httpOnly: true,
					secure: true,
					sameSite: "lax",
					path: "/",
					expires: new Date(Date.now() + 60 * 1000 * 60 * 24 * 7), // 7 days
				}),
				serialize("access_token_extreme", accessToken, {
					httpOnly: true,
					secure: true,
					sameSite: "lax",
					path: "/",
					expires: new Date(Date.now() + 60 * 1000 * 10), // 10 minutes
				}),
			])
			.send("");
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Internal Server Error" });
	}
}
