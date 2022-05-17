import { verifyResetPasswordToken } from "../../../_operations/jwt/jwt";
interface VerifiedToken {
    user?: {
        email?: string;
    },
    exp?: number;
}
export default async function (req: any, res: any) {
	try {     
		const { token }: {token: string} = req.query;
        const verifiedToken: VerifiedToken = await verifyResetPasswordToken(token);
        return res.status(200).redirect(`/forgotPassword/reset/${verifiedToken.user?.email}`);
	} catch (error) {
		console.log(error);
	}
}
