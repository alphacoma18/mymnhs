import { NextResponse } from "next/server";
export default function (req: {
	url?: any;
	cookies?: any;
}): void | NextResponse {
	const { cookies } = req;
	const url: string = req.url;
	const refreshToken: string | undefined = cookies?.refresh_token_extreme;
    const baseUrl: string = "http://localhost:3000";

    // vercel.svg is used in /login
    const unprotectedPaths: string[] = [
        `${baseUrl}/login`,
        `${baseUrl}/favicon.ico`,
        `${baseUrl}/vercel.svg`,
        `${baseUrl}/_next/webpack-hmr`,
        `${baseUrl}/attachables/campus-images/image1.jpg`,
        `${baseUrl}/attachables/mnhs-images/logos/login_logo.png`,
        `${baseUrl}/attachables/mnhs-images/logos/mnhs_favicon_og.ico`,
    ]
    if (unprotectedPaths.includes(url)) {
        return void 0;
    } else if (refreshToken) {
        console.log(cookies);
        
        return NextResponse.next();
    } else {
        return NextResponse.redirect(`${baseUrl}/login`);
    }
}
