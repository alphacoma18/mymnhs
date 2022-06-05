import { NextApiRequest, NextApiResponse } from "next";
import { verifyAccessToken } from "../../../_operations/jwt/jwt";
import dbExecute from "../../../_operations/db/db";
import NewDate from "../../../_operations/_currentDate";
import { ITokenValue } from "../../../interface/_token";
interface ReqData {
	header: string;
	body: string;
	url: string;
}
export default async function (req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "POST") {
		try {
			const { access_token_extreme } = req.cookies;
			const { body, header, url }: ReqData = req.body;

			if (!access_token_extreme)
				return res.status(401).json({ message: "Unauthorized" });
			const verifiedToken: ITokenValue = await verifyAccessToken(
				access_token_extreme
			);
			if (!verifiedToken)
				return res.status(401).json({ message: "Unauthorized" });

			const sql: string = `
                INSERT INTO survey_post_table(survey_header, survey_body, survey_url, survey_poster_id, survey_post_timestamp)
                VALUES (?, ?, ?, ?, ?);`;
			await dbExecute(sql, [
				header,
				body,
				url,
				verifiedToken?.user?.account_id,
				NewDate(),
			]);
			return res.status(200).send("");
		} catch (error: unknown) {
			console.log(error);
			return res.status(500).redirect("https://mymnhs.vercel.app/500");
		}
	}
}
