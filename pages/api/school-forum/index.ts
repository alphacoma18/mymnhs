import { NextApiRequest, NextApiResponse } from "next";
import { verifyAccessToken } from "../../../utils/jwt/jwt";
import dbExecute from "../../../utils/db/db";
import NewDate from "../../../utils/currentDate";
import { ITokenValue } from "../../../interface/_token";
interface ReqData {
	header: string;
	body: string;
}
export default async function (req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "POST") {
		try {
			const { access_token_extreme } = req.cookies;
			const { header, body }: ReqData = req.body;
			if (!access_token_extreme)
				return res.status(401).json({ message: "Unauthorized" });
			const verifiedToken: ITokenValue = await verifyAccessToken(
				access_token_extreme
			);
			if (!verifiedToken)
				return res.status(401).json({ message: "Unauthorized" });
			const sql = `
                INSERT INTO forum_question_table(question_header, question_body, question_asker_id, question_timestamp)
                VALUES ($1, $2, $3, $4);`;
			await dbExecute(sql, [
				header,
				body,
				verifiedToken?.user?.account_id,
				NewDate(),
			]);
			return res.status(200).send("");
		} catch (error) {
			console.log(error);
			return res.status(500).redirect("http://localhost:3000/500");
		}
	}
}
