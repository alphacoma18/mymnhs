import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		return res
			.setHeader("Set-Cookie", [
				serialize("refresh_token_extreme", "false", {
					httpOnly: true,
					secure: true,
					sameSite: "none",
					path: "/",
					// domain: "mymnhs.vercel.app",
					expires: new Date(Date.now() - 60),
				}),
				serialize("access_token_extreme", "false", {
					httpOnly: true,
					secure: true,
					sameSite: "none",
					path: "/",
					// domain: "mymnhs.vercel.app",
					expires: new Date(Date.now() - 60),
				}),
			])
			.json({ message: "Logged out" });
	} catch (error: unknown) {
		return console.log(error);
	}
}
