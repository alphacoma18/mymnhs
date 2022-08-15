import { NextApiRequest, NextApiResponse } from "next";
import dbExecute from "../../../utils/db/db";
import NewDate from "../../../utils/currentDate";
import { AccessCookieUser } from "../../../utils/cookieUser";
interface Request {
	body: string;
	currentId: string;
}
export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		const { body, currentId }: Request = req.body;
		const userId = await AccessCookieUser(req.cookies.access_token_extreme);
		const sql = `
            INSERT INTO forum_answer_table(forum_id, answerer_id, answer_content, answer_timestamp)
            VALUES ($1, $2, $3, $4)`;
		await dbExecute(sql, [currentId, userId, body, NewDate()]);
		return res.status(200).send("");
	} catch (error) {
		console.log(error);
		res.status(500).redirect("https://mymnhs.vercel.app/500");
		return void 0;
	}
}
