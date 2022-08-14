import { NextApiRequest, NextApiResponse } from "next";
import dbExecute from "../../../utils/db/db";
import { ChatData } from "../../../components/pages/global-chat";
export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		if (req.method === "POST") {
			const { message, user, timestamp }: ChatData = req.body;

			const sql = `
                INSERT INTO global_chat_table(message_sender_id, message_content, message_timestamp)
                VALUES (?, ?, ?);`;
			await dbExecute(sql, [user.account_id, message, timestamp]);
			return res.status(204).send("");
		}
	} catch (error) {
		console.log(error);
		return res.status(500).redirect("https://mymnhs.vercel.app/500");
	}
}
