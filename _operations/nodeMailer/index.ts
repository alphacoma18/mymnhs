import nodeMailer from "nodemailer";

interface MailOptions {
	from: string | undefined;
	to: string | undefined;
	subject: string;
	html: string;
}
export default async function NodeMailer69(
	reciever: string,
	subject: string,
	html: string
): Promise<void> {
	try {
		const transporter = nodeMailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASSWORD,
			},
		});
		const mailOptions: MailOptions = {
			from: process.env.EMAIL_USER,
			to: reciever,
			subject: subject,
			html: html,
		};
		await transporter.sendMail(mailOptions);
		return void 0;
	} catch (error: unknown) {
		return console.log(error);
	}
}
