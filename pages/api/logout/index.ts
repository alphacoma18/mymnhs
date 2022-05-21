import { serialize } from "cookie";
export default async function (req: any, res: any) {
	try {
		return res
			.setHeader("Set-Cookie", [
				serialize("refresh_token_extreme", "false", {
					httpOnly: true,
					secure: true,
					sameSite: "strict",
					path: "/",
					expires: new Date(Date.now() - 60),
				}),
				serialize("access_token_extreme", "false", {
					httpOnly: true,
					secure: true,
					sameSite: "strict",
					path: "/",
					expires: new Date(Date.now() - 60),
				}),
			])
			.json({ message: "Logged out" });
	} catch (error) {
		return console.log(error);
	}
}
