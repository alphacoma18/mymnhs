import { NextResponse } from "next/server";
import {
	generateAccessToken,
	verifyRefreshToken,
} from "../_operations/jwt/jwt";
interface Cookies {
	cookies?: {
		refresh_token_extreme?: string;
		access_token_extreme?: string;
	};
}
const baseUrl: string = "http://localhost:3000";
const openPaths: Set<string> = new Set([
	`${baseUrl}/login`,
	`${baseUrl}/signup`,
	`${baseUrl}/forgotPassword`,
	`${baseUrl}/favicon.ico`,
	`${baseUrl}/vercel.svg`,
	`${baseUrl}/_next/webpack-hmr`,
	`${baseUrl}/attachables/campus-images/image1.jpg`,
	`${baseUrl}/attachables/campus-images/image10.jpg`,
	`${baseUrl}/attachables/campus-images/image15.jpg`,
	`${baseUrl}/attachables/mnhs-images/logos/login_logo.png`,
	`${baseUrl}/attachables/mnhs-images/logos/mnhs_favicon_og.ico`,
]);
const openApiPaths: Set<string> = new Set([
	`${baseUrl}/api/login`,
	`${baseUrl}/api/signup`,
	`${baseUrl}/api/forgotPassword`,
]);
const openDynamicPaths: string[] = [`${baseUrl}/forgotPassword/`];
const openDynamicApiPaths: string[] = [
	`${baseUrl}/api/verification/`,
	`${baseUrl}/api/forgotPassword/`,
];
export default async function (req: {
	url?: any;
	cookies?: any;
}): Promise<NextResponse | void> {
	const { cookies }: Cookies = req;
	const url: string = req.url;
	const refreshToken: string | undefined = cookies?.refresh_token_extreme;
	const accessToken: string | undefined = cookies?.access_token_extreme;
	
	if (openApiPaths.has(url)) return NextResponse.next();
	if (url.includes(openDynamicApiPaths[0]) || url.includes(openDynamicApiPaths[1])) return NextResponse.next();
	if (url.includes(openDynamicPaths[0])) return NextResponse.next();
	if (!refreshToken && openPaths.has(url)) return void 0;


	if (!accessToken && !refreshToken)
		return NextResponse.redirect(`${baseUrl}/login`);
	if (!accessToken && refreshToken && openPaths.has(url)) {
		const verifiedToken: any = await verifyRefreshToken(refreshToken);
		const newToken: string = await generateAccessToken(verifiedToken);
		return NextResponse.redirect(`${baseUrl}`).cookie(
			"access_token_extreme",
			newToken,
			{
				httpOnly: true,
				secure: true,
				sameSite: "strict",
				path: "/",
				expires: new Date(Date.now() + 60 * 1000 * 10), // 10 minutes
			}
		);
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
