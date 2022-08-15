import { NextApiRequest, NextApiResponse } from "next";
import { verifyResetPasswordToken } from "../../../utils/jwt/jwt";
import dbExecute from "../../../utils/db/db";
import bcrypt from "bcrypt";
interface VerifiedToken {
	user?: {
		email: string;
	};
	exp?: number;
}
interface InData {
	reset_email: string;
	reset_account_id: number;
}
/**
 * Flow of the code
 * 1. Get incoming token from the request query
 * 2. Get new password from the request
 * 3. Verify the token
 * 4. Check if the account exists using given email in the database
 * 5. If the account exists, update the password
 */
type ObjData = InData[];
export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		const { token } = req.query;
		const { newPassword }: { newPassword: string } = req.body;
		const verifiedToken: VerifiedToken = await verifyResetPasswordToken(
			token as string
		);
		if (!verifiedToken.user)
			return res.status(401).json({ message: "Invalid token" });
		const { email } = verifiedToken.user;
		const sql = `
            SELECT reset_email, reset_account_id
            FROM reset_password_table
            WHERE reset_email = $1
        `;
		const objData: ObjData = await dbExecute(sql, [email]);
		if (objData.length === 0)
			return res.status(401).json({ message: "Invalid token" });
		const { reset_email, reset_account_id } = objData[0];
		if (reset_email !== email)
			return res.status(401).json({ message: "Invalid token" });
		const hashedPass = await bcrypt.hash(newPassword, 10);
		const sql2 = `
            UPDATE account_table
            SET account_password = $1
            WHERE account_id = $2
        `;
		await dbExecute(sql2, [hashedPass, reset_account_id]);
		return res.status(200).send("");
	} catch (error) {
		return res.status(500).json({ message: "Internal Server Error" });
	}
}
