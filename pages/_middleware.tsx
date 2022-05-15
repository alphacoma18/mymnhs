import { NextResponse } from "next/server";
import {
	generateAccessToken,
	verifyRefreshToken,
} from "../_operations/jwt/jwt";
export default async function (req: {
	url?: any;
	cookies?: any;
}): Promise<NextResponse | void> {
	const { cookies } = req;
	const url: string = req.url;
	const refreshToken: string | undefined = cookies?.refresh_token_extreme;
	const accessToken: string | undefined = cookies?.access_token_extreme;
	const baseUrl: string = "http://localhost:3000";

	// unprotected routes are used for login and signup
	const unprotectedPaths: string[] = [
		`${baseUrl}/login`,
		`${baseUrl}/signup`,
		`${baseUrl}/favicon.ico`,
		`${baseUrl}/vercel.svg`,
		`${baseUrl}/_next/webpack-hmr`,
		`${baseUrl}/attachables/campus-images/image1.jpg`,
		`${baseUrl}/attachables/campus-images/image10.jpg`,
		`${baseUrl}/attachables/mnhs-images/logos/login_logo.png`,
		`${baseUrl}/attachables/mnhs-images/logos/mnhs_favicon_og.ico`,
	];
	if (url === `${baseUrl}/api/login` || url === `${baseUrl}/api/signup`) 
		return NextResponse.next();

	if (!refreshToken && unprotectedPaths.includes(url)) return void 0;
	if (!accessToken && !refreshToken)
		return NextResponse.redirect(`${baseUrl}/login`);
	if (!accessToken && refreshToken && unprotectedPaths.includes(url)) {
		const verifiedToken: any = await verifyRefreshToken(refreshToken);
		const newToken: string = await generateAccessToken(verifiedToken);
		return NextResponse.redirect(`${baseUrl}`).cookie("access_token_extreme", newToken, {
			httpOnly: true,
			secure: true,
			sameSite: "strict",
			path: "/",
			expires: new Date(Date.now() + 60 * 1000 * 10), // 10 minutes
		});
	}
	if (!accessToken && refreshToken) {
		const verifiedToken: any = await verifyRefreshToken(refreshToken);
		const newToken: string = await generateAccessToken(verifiedToken);
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
