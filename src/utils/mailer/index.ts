import { createTransport } from "nodemailer";
interface MailerOptions {
	recipient: string;
	subject: string;
	html?: string;
}
export const serverDetails = {
	host: process.env.EMAIL_SERVER_HOST,
	port: +process.env.EMAIL_SERVER_PORT,
	// DO NOT SET TO TRUE
	// https://nodemailer.com/smtp/ on secure: false,
	secure: false,
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASSWORD,
	},
	from: `MyMNHS Team <${process.env.EMAIL_USER}>`,
	opportunisticTLS: true,
	priority: "high",
	connectionTimeout: 10 * 60 * 1000, // 10 minutes
	greetingTimeout: 5 * 60 * 1000, // 5 minutes
} as const;

export default async function Mailer({
	recipient,
	subject,
	html,
}: MailerOptions) {
	try {
		const transporter = createTransport(serverDetails);
		const info = await transporter.sendMail({
			to: recipient,
			subject,
			html,
		});
		if (info.rejected.length > 0) throw new Error("Email not sent");
	} catch (error) {
		console.error(error);
	}
}
