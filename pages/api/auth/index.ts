import { NextApiRequest, NextApiResponse } from "next";
import { ITokenValue } from "../../../interface/_token/index";
import { verifyAccessToken } from "../../../_operations/jwt/jwt";
export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		const { access_token_extreme } = req.cookies;
		const data: ITokenValue = await verifyAccessToken(access_token_extreme);
		const { user } = data;
		return res.json({ user });
	} catch (error: unknown) {
		console.log(error);
		return res.status(500).json({ message: "Internal Server Error" });
	}
}
