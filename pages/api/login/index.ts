import { serialize } from "cookie";
import connection from "../../../_operations/db/db";
import { generateAccessToken, generateRefreshToken } from "../../../_operations/jwt/jwt";
export default async function (req: any, res: any): Promise<void> {
	function getAndCheck(): Promise<{}> {
		return new Promise((resolve, reject) => {
			const { email, password }: { email: string; password: string } =
				req.body;
			let sql = `SELECT * FROM account_table WHERE account_email = ? AND account_password = ?`;
			connection.query(
				sql,
				[email, password],
				(err: any, user: string[]) => {
					if (err)
						return reject({
							status: 500,
							message: "Internal server error",
						});
					if (user.length === 0)
						return reject({
							status: 401,
							message: "Invalid email or password",
						});

					return resolve(user[0]);
				}
			);
		});
	}
	function generateToken(user: {}): Promise<string[]> {
		return new Promise((resolve) => {
			const accessToken: string = generateAccessToken(user);
			const refreshToken: string = generateRefreshToken(user);
			return resolve([accessToken, refreshToken]);
		});
	}

	try {
		let user: {} = await getAndCheck();
		let token: string[] = await generateToken(user);

		return res
			.setHeader(
				"Set-Cookie",
				serialize("refresh_token_extreme", token[1], {
					httpOnly: true,
					secure: true,
					sameSite: "strict",
					expires: new Date(Date.now() + 60 * 60 * 1000 * 24 * 7), // 7 days
					path: "/",
				})
			)
			.json({ user, access_token_extreme: token[0] });
	} catch (error: any) {
		return res.status(error.status).json({ message: error.message });
	}
}
