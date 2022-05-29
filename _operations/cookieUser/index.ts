import { verifyAccessToken } from "../jwt/jwt";
import { ITokenValue } from "../../interface/_token/index";
export async function AccessCookieUser(data: any): Promise<number | undefined> {
	const obj: ITokenValue = await verifyAccessToken(data);
	return obj.user?.account_id;
}
