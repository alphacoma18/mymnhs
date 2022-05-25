import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import dbExecute from "../../../_operations/db/db";
import bcrypt from "bcrypt";
import {
	generateAccessToken,
	generateRefreshToken,
} from "../../../_operations/jwt/jwt";
interface InData {
	account_id: number;
	account_first_name: string;
	account_last_name: string;
	account_email: string;
	account_password: string;
	account_section_id: number;
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
		const sql: string = `
			SELECT account_id, account_first_name, account_last_name, account_section_id, account_password
			FROM account_table
			WHERE account_email = ?
			LIMIT 1
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
		} = objData[0];
		const userData = {
			account_id,
			account_first_name,
			account_last_name,
			account_section_id,
		};
		const isPasswordCorrect: boolean = await bcrypt.compare(
			password,
			account_password
		);
		if (!isPasswordCorrect)
			return res
				.status(401)
				.json({ message: "Email or password is incorrect" });

		const accessToken: string = await generateAccessToken(userData);
		const refreshToken: string = await generateRefreshToken(userData);
		return res
			.setHeader("Set-Cookie", [
				serialize("refresh_token_extreme", refreshToken, {
					httpOnly: true,
					secure: true,
					sameSite: "strict",
					path: "/",
					expires: new Date(Date.now() + 60 * 1000 * 60 * 24 * 7), // 7 days
				}),
				serialize("access_token_extreme", accessToken, {
					httpOnly: true,
					secure: true,
					sameSite: "strict",
					path: "/",
					expires: new Date(Date.now() + 60 * 1000 * 10), // 10 minutes
				}),
			])
			.json({ user: objData });
	} catch (error: unknown) {
		return res.status(500).json({ message: "Internal Server Error" });
	}
}
