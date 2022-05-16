import nodeMailer from "nodemailer";
import bycrypt from "bcrypt";
import { generateVerificationToken } from "../../../_operations/jwt/jwt";
import connection from "../../../_operations/db/db";
import sectionIdGetter from "../../../_operations/sectionIdGetter/index";

interface IUser {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	grade: string;
	strand: string;
	section: string;
}

interface MailOptions {
	from: string | undefined;
	to: string | undefined;
	subject: string;
	html: string;
}
/**
 * Flow of the code
 * 1. Get incoming data from the request
 * 2. Hash both password
 * 3. Insert into the verify_user_table
 * 4. Generate a verification token
 * 5. Send the verification token to the user's email
 */
export default async function (req: any, res: any) {
	try {
		const { firstName, lastName, email, password, section }: IUser =
			req.body;
		const sectionId: number | void = sectionIdGetter(section);
		const hashedPass: string = await bycrypt.hash(password, 10);

		const sql: string = `
			INSERT INTO verify_user_table (verify_first_name, verify_last_name, verify_email, verify_password, verify_section_id)
	        VALUES (?, ?, ?, ?, ?)
		`;
		await connection.execute(sql, [
			firstName,
			lastName,
			email,
			hashedPass,
			sectionId,
		]);

		const verificationToken: string = await generateVerificationToken({
			email,
		});
		const transporter: any = nodeMailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASSWORD,
			},
		});

		const URL: string = `${process.env.CLIENT_URL}/api/verification/${verificationToken}`;
		const mailOptions: MailOptions = {
			from: process.env.EMAIL_USER,
			to: email,
			subject:
				"<No-Reply> MNHS-SHS: Click to cerify your email and access the platform!",
			html: `
<div style="background-color: lightgoldenrodyellow; border: 3px solid black; width: 90%; max-width: 520px; padding: 20px; margin: auto; line-height: 1.6em">
<h1 style="text-align: center;">Meycauayan National High School</h1>
<h2 style="text-align: center;">-- The Unofficial Website --</h2>
<h3 style="text-align: center;">"Be the best, Choose MNHS"</h3>

<hr style="margin: 10px; background: darkgreen; color: darkgreen; height: 3px; border: 2px solid black; border-radius: 10px;">

<p><b>Good day Mr. ${lastName}!</b></p>
<p>Please click the link below to verify your account and be redirected to the login page!</p>
<p><a href="${URL}">${URL}</a></p>
<p>Important Note: This link will expire <b>1 day from now</b></p>
</div>
`,
		};
		await transporter.sendMail(mailOptions);
		return res.status(200).send();
	} catch (error) {
		// show error page
		return res.status(500).send();
	}
}
