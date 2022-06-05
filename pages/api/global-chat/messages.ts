import { NextApiRequest, NextApiResponse } from "next";
import dbExecute from "../../../_operations/db/db";
export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		const sql: string = `
                SELECT message_id, message_content, message_timestamp, account_first_name, account_last_name, section_grade, section_strand, section_name
                FROM global_chat_table 
                JOIN account_table
                ON global_chat_table.message_sender_id = account_table.account_id
                JOIN section_table
                ON account_table.account_section_id = section_table.section_id
                ORDER BY message_id DESC LIMIT 10;`;
		let result: any[] = await dbExecute(sql);
		result = result.reverse();
		return res.json({ result });
	} catch (error: unknown) {
		console.log(error);
		return res.status(500).redirect("https://mymnhs.vercel.app/500");
	}
}
