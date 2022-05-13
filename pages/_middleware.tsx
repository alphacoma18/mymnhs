import { NextResponse } from "next/server";
import {
	generateAccessToken,
	verifyRefreshToken,
} from "../_operations/jwt/jwt";
export default async function (
	req: {
		url?: any;
		cookies?: any;
	},
	res: any
): Promise<NextResponse | void> {
	const { cookies } = req;
	const url: string = req.url;
	const refreshToken: string | undefined = cookies?.refresh_token_extreme;
	const accessToken: string | undefined = cookies?.access_token_extreme;
	const baseUrl: string = "http://localhost:3000";

	// vercel.svg is used in /login
	const unprotectedPaths: string[] = [
		`${baseUrl}/login`,
		`${baseUrl}/signup`,
		`${baseUrl}/favicon.ico`,
		`${baseUrl}/vercel.svg`,
		`${baseUrl}/_next/webpack-hmr`,
		`${baseUrl}/attachables/campus-images/image1.jpg`,
		`${baseUrl}/attachables/mnhs-images/logos/login_logo.png`,
		`${baseUrl}/attachables/mnhs-images/logos/mnhs_favicon_og.ico`,
	];

	if (unprotectedPaths.includes(url)) return void 0;
	if (!refreshToken && url === `${baseUrl}/api/login`)
		return NextResponse.next();
	if (!accessToken && !refreshToken)
		return NextResponse.redirect(`${baseUrl}/login`);
	if (!accessToken && refreshToken) {
		const verifiedToken = await verifyRefreshToken(refreshToken);
		const newToken = await generateAccessToken(verifiedToken as any);
		return NextResponse.next().cookie("access_token_extreme", newToken, {
			httpOnly: true,
			secure: true,
			sameSite: "strict",
			path: "/",
			expires: new Date(Date.now() + 60 * 1000 * 10), // 10 minutes
		});
	}
	return NextResponse.next();
}
