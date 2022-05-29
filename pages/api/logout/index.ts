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
					expires: new Date(Date.now() - 60),
				}),
				serialize("access_token_extreme", "false", {
					httpOnly: true,
					secure: true,
					sameSite: "none",
					path: "/",
					expires: new Date(Date.now() - 60),
				}),
			])
			.json({ message: "Logged out" });
	} catch (error: unknown) {
		console.log(error);
		res.status(500).redirect("https://mymnhs.vercel.app/500");
	}
}
