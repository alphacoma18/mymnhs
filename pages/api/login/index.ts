import { serialize } from "cookie";
import connection from "../../../_operations/db/db";
import {
	generateAccessToken,
	generateRefreshToken,
} from "../../../_operations/jwt/jwt";
/**
 * Flow of the code
 * 1. Get incoming data from the request
 * 2. Check if the account exists using given email and password
 * 3. If the account exists, generate access token and refresh token
 */
export default async function (req: any, res: any) {
	try {
		const { email, password }: { email: string; password: string } =
			req.body;
		let sql: string = `SELECT account_id, account_first_name, account_last_name, account_section_id FROM account_table WHERE account_email = ? AND account_password = ?`;
		let [user] = await connection.execute(sql, [email, password]);
		
		const accessToken: string = await generateAccessToken(user);
		const refreshToken: string = await generateRefreshToken(user);
		
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
			.json({ user });
	} catch (error: any) {
		return res.status(error.status).json({ message: error.message });
	}
}
