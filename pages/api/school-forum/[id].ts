import { NextApiRequest, NextApiResponse } from "next";
import dbExecute from "../../../_operations/db/db";
import NewDate from "../../../_operations/_currentDate";
import { AccessCookieUser } from "../../../_operations/cookieUser";
interface Request {
	body: string;
	currentId: string;
}
export default async function (
	req: NextApiRequest,
	res: NextApiResponse
): Promise<void> {
	try {
		const { body, currentId }: Request = req.body;
		const userId: number | undefined = await AccessCookieUser(
			req.cookies.access_token_extreme
		);
		const sql: string = `
            INSERT INTO forum_answer_table(forum_id, answerer_id, answer_content, answer_timestamp)
            VALUES (?, ?, ?, ?)`;
		await dbExecute(sql, [currentId, userId, body, NewDate()]);
		return res.status(200).send("");
	} catch (error: unknown) {
		console.log(error);
		res.status(500).redirect("https://mymnhs.vercel.app/500");
	}
}
