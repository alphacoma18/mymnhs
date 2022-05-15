import { verifyVerificationToken } from "../../../_operations/jwt/jwt";
import connection from "../../../_operations/db/db";

interface VerifiedToken {
	user?: {
		hashedEmail?: string | undefined;
		exp?: number | undefined;
	};
}
interface InData {
	verify_id: number;
	verify_first_name: string;
	verify_last_name: string;
	verify_email: string;
	verify_password: string;
	verify_section_id: number;
}
type Data = InData[];
/**
 * Flow of the code
 * 1. Get the encrypted token from the request
 * 2. Both the token in db and req are encrypted so just compare
 * 3. Parse the token to an object
 * 4. Delete the token from the verify_user_table
 * 5. Add the user to the user_table
 * 6. redirect user to the login page
 */

export default async function (req: any, res: any) {
	try {
		const { token }: { token: string } = req.query;
		const verifiedToken: VerifiedToken = await verifyVerificationToken(
			token
		);
        console.log(token);
        
		const { hashedEmail } = verifiedToken.user || {};
		let sql: string = `
            SELECT * FROM verify_user_table
            WHERE verify_email = ?
            LIMIT 1
        `;
		let [jsonData] = await connection.execute(sql, [hashedEmail]);
		let objData: Data = JSON.parse(JSON.stringify(jsonData));
		const {
			verify_id,
			verify_first_name,
			verify_last_name,
			verify_email,
			verify_password,
			verify_section_id,
		} = objData[0];

		let sql2: string = `
            DELETE FROM verify_user_table
            WHERE verify_id = ?
        `;
		await connection.query(sql2, [verify_id]);
		let sql3: string = `
            INSERT INTO account_table (account_first_name, account_last_name, account_email, account_password, account_section_id)
            VALUES (?, ?, ?, ?, ?)`;
		await connection.query(sql3, [
			verify_first_name,
			verify_last_name,
			verify_email,
			verify_password,
			verify_section_id,
		]);
		return res.status(200).redirect("http://localhost:3000/login");
	} catch (error: any) {
		console.log(error);

		// redirect to error page
		return res.status(401).redirect("http://localhost:3000/login");
	}
}
