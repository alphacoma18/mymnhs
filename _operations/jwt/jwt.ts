import * as jose from "jose";

export async function generateAccessToken(user: {}): Promise<string> {
	const accessToken = await new jose.SignJWT({ user })
		.setProtectedHeader({ alg: "HS256" })
		.setExpirationTime("10m")
		.sign(new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET));
	return accessToken;
}
export async function generateRefreshToken(user: {}): Promise<string> {
	const refreshToken = await new jose.SignJWT({ user })
		.setProtectedHeader({ alg: "HS256" })
		.setExpirationTime("7d")
		.sign(new TextEncoder().encode(process.env.REFRESH_TOKEN_SECRET));
	return refreshToken;
}

export async function verifyRefreshToken(token: string): Promise<{}> {
	const { payload: verifiedToken } = await jose.jwtVerify(
		token,
		new TextEncoder().encode(process.env.REFRESH_TOKEN_SECRET)
	);
	return verifiedToken;
}

export async function generateVerificationToken(user: {}): Promise<string> {
	const verificationToken = await new jose.SignJWT({ user })
		.setProtectedHeader({ alg: "HS256" })
		.setExpirationTime("1d")
		.sign(new TextEncoder().encode(process.env.VERIFICATION_TOKEN_SECRET));
	return verificationToken;
}
export async function verifyVerificationToken(token: string): Promise<{}> {
	const { payload: verifiedToken } = await jose.jwtVerify(
		token,
		new TextEncoder().encode(process.env.VERIFICATION_TOKEN_SECRET)
	);
	return verifiedToken;
}
