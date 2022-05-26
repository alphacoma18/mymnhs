import { verifyAccessToken, verifyRefreshToken } from "../jwt/jwt";
import { ITokenValue } from "../../interface/token/index";
export async function AccessCookieUser(data: any): Promise<number | undefined> {
	const obj: ITokenValue = await verifyAccessToken(data);
	return obj.user?.account_id;
}

export async function RefreshCookieUser(data: any): Promise<{} | undefined> {
	const obj: ITokenValue = await verifyRefreshToken(data);
	return obj.user;
}
