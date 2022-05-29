import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { generateVerificationToken } from "../../../_operations/jwt/jwt";
import dbExecute from "../../../_operations/db/db";
import sectionIdGetter from "../../../_operations/sectionIdGetter/index";
import NodeMailer69 from "../../../_operations/nodeMailer/index";
interface IUser {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	grade: string;
	strand: string;
	section: string;
}

/**
 * Flow of the code
 * 1. Get incoming data from the request
 * 2. Hash both password
 * 3. Insert into the verify_user_table
 * 4. Generate a verification token
 * 5. Send the verification token to the user's email
 */
export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		const { firstName, lastName, email, password, section }: IUser =
			req.body;
		const sectionId: number | void = await sectionIdGetter(section);
		const hashedPass: string = await bcrypt.hash(password, 10);

		const sql: string = `
			INSERT INTO verify_user_table (verify_first_name, verify_last_name, verify_email, verify_password, verify_section_id)
	        VALUES (?, ?, ?, ?, ?)
		`;

		await dbExecute(sql, [
			firstName,
			lastName,
			email,
			hashedPass,
			sectionId,
		]);

		const verificationToken: string = await generateVerificationToken({
			email,
		});
		const URL: string = `${process.env.CLIENT_URL}/api/verification/${verificationToken}`;
		const subject: string =
			"<No-Reply> MNHS-SHS: Click to verify your email and access the platform!";
		const html: string = `
<div style="background-color: lightgoldenrodyellow; border: 3px solid black; width: 90%; max-width: 520px; padding: 20px; margin: auto; line-height: 1.6em; border-radius: 20px">
<h1 style="text-align: center;">Meycauayan National High School</h1>
<h2 style="text-align: center;">-- The Unofficial Platform --</h2>
<h3 style="text-align: center;">"Be the best, Choose MNHS"</h3>

<hr style="margin: 10px; background: darkgreen; color: darkgreen; height: 3px; border: 2px solid whitesmoke; border-radius: 10px;">

<p><b>Good day Mr. ${lastName}!</b></p>
<p>Please click the link below to verify your account and be redirected to the login page!</p>
<p style="text-align: center;"><a href="${URL}">Verify and Login</a></p>
<p>Important Note: This link will expire <b>1 day from now</b></p>
<p>With regards,</p>
<p>The MNHS-SHS ICT team</p>
</div>
`;

		await NodeMailer69(email, subject, html);
		return res.status(200).send("");
	} catch (error: unknown) {
		console.log(error);
		res.status(500).redirect("https://mymnhs.vercel.app/500");
	}
}
