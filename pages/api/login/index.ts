import { serialize } from "cookie";
import connection from "../../../_operations/db/db";
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
import bcrypt from "bcrypt";
/**
 * Flow of the code
 * 1. Get incoming data from the request
 * 2. Check if the account exists using given email
 * 3. If the account exists, check if the password is correct
 * 4. Generate the access token and refresh token
 * 5. Set the cookie with the access token and refresh token
 */
export default async function (req: any, res: any) {
	try {
		const { email, password }: { email: string; password: string } =
			req.body;
		const sql: string = `
			SELECT account_id, account_first_name, account_last_name, account_section_id, account_password
			FROM account_table
			WHERE account_email = ?
			LIMIT 1
		`;
		const [sqlData] = await connection.execute(sql, [email]);
		const objData: ObjData = JSON.parse(JSON.stringify(sqlData));
		if (objData.length === 0) return res.status(401).json({message: "Account not found"});
		const { account_password } = objData[0];
		const isPasswordCorrect: boolean = await bcrypt.compare(
			password,
			account_password
		);
		if (!isPasswordCorrect)
			return res
				.status(401)
				.json({ message: "Email or password is incorrect" });

		const accessToken: string = await generateAccessToken(objData);
		const refreshToken: string = await generateRefreshToken(objData);

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
	} catch (error: any) {
		return res.status(500).json({ message: "Internal Server Error" });
	}
}
