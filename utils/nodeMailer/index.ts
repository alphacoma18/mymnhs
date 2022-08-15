import nodeMailer from "nodemailer";

export default async function NodeMailer69(
	receiver: string,
	subject: string,
	html: string
) {
	try {
		const transporter = nodeMailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASSWORD,
			},
		});
		const mailOptions = {
			from: process.env.EMAIL_USER,
			to: receiver,
			subject: subject,
			html: html,
		};
		await transporter.sendMail(mailOptions);
		return;
	} catch (error) {
		console.log(error);
		return;
	}
}
