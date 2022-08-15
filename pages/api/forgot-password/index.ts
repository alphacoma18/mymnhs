import { NextApiRequest, NextApiResponse } from "next";
import NodeMailer69 from "../../../utils/nodeMailer";
import dbExecute from "../../../utils/db/db";
import NewDate from "../../../utils/currentDate";
import { generateResetPasswordToken } from "../../../utils/jwt/jwt";
interface InData {
	account_id: number;
	account_email: string;
}
type ObjData = InData[];
/**
 * Flow of the code
 * 1. Get incoming email from the request
 * 2. Check if the account exists using given email in the database
 * 3. If the account exists, generate the reset password token
 * 4. Send the reset password token to the email with the reset password link
 */
export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		const { email }: { email: string } = req.body;
		const sql = `
            SELECT account_id, account_email
            FROM account_table
            WHERE account_email = $1
        `;
		const objData: ObjData = await dbExecute(sql, [email]);
		if (objData.length === 0)
			return res.status(401).json({ message: "Account not found" });
		const sql2 = `
            INSERT INTO reset_password_table(reset_email, reset_timestamp, reset_account_id)
            VALUES ($1, $2, $3)
        `;
		await dbExecute(sql2, [email, NewDate(), objData[0].account_id]);
		const resetPasswordToken = await generateResetPasswordToken({
			email,
		});
		const URL = `${process.env.CLIENT_URL}/forgot-password/${resetPasswordToken}`;
		const subject =
			"<No-Reply> MNHS-SHS: Password reset request for school platform account.";
		const html = `
<div style="background-color: lightgoldenrodyellow; border: 3px solid black; width: 90%; max-width: 520px; padding: 20px; margin: auto; line-height: 1.6em; border-radius: 20px">
<h1 style="text-align: center;">Meycauayan National High School</h1>
<h2 style="text-align: center;">-- The Unofficial Platform --</h2>
<h3 style="text-align: center;">"Be the best, Choose MNHS"</h3>

<hr style="margin: 10px; background: darkgreen; color: darkgreen; height: 3px; border: 2px solid whitesmoke; border-radius: 10px;">

<p>Please click the link below to verify your account and be redirected to the login page!</p>
<p style="text-align: center;"><a href="${URL}">Reset Password</a></p>
<p>Important Note: This link will expire <b>1 day from now</b></p>
<p>With regards,</p>
<p>The MNHS-SHS ICT Team</p>
</div>
        `;

		await NodeMailer69(email, subject, html);
		return res.status(200).send("");
	} catch (error) {
		return res.status(500).json({ message: "Internal Server Error" });
	}
}
