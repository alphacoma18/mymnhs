import { verifyResetPasswordToken } from "../../../_operations/jwt/jwt";
import connection from "../../../_operations/db/db";
import bcrypt from "bcrypt";
interface VerifiedToken {
	user?: {
		email?: string;
	};
	exp?: number;
}
interface InData {
	reset_email: string;
	reset_account_id: number;
}
type ObjData = InData[];
export default async function (req: any, res: any) {
	try {
		const { token }: { token: string } = req.query;
        const { newPassword }: { newPassword: string } = req.body;
		const verifiedToken: VerifiedToken = await verifyResetPasswordToken(
			token
		);
		if (!verifiedToken.user)
			return res.status(401).json({ message: "Invalid token" });
		const { email } = verifiedToken.user;
		const sql: string = `
            SELECT reset_email, reset_account_id
            FROM reset_password_table
            WHERE reset_email = ?
        `;
		const [sqlData] = await connection.execute(sql, [email]);
		const objData: ObjData = JSON.parse(JSON.stringify(sqlData));
		if (objData.length === 0)
			return res.status(401).json({ message: "Invalid token" });
		const { reset_email, reset_account_id } = objData[0];
		if (reset_email !== email)
			return res.status(401).json({ message: "Invalid token" });
        const hashedPass = await bcrypt.hash(newPassword, 10)
		const sql2: string = `
            UPDATE account_table
            SET account_password = ?
            WHERE account_id = ?
        `;
        await connection.execute(sql2, [hashedPass, reset_account_id]);
        return res.status(200).send();
	} catch (error) {
		return console.log(error);
	}
}
