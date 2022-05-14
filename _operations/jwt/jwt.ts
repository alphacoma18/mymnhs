import * as jose from "jose";

export function generateAccessToken(user: {}): Promise<string> {
	return new Promise(async (resolve) => {
		const accessToken = await new jose.SignJWT({ user })
			.setProtectedHeader({ alg: "HS256" })
			.setExpirationTime("10m")
			.sign(new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET));
		return resolve(accessToken);
	});
}
export function generateRefreshToken(user: {}): Promise<string> {
	return new Promise(async (resolve) => {
		const refreshToken = await new jose.SignJWT({ user })
			.setProtectedHeader({ alg: "HS256" })
			.setExpirationTime("7d")
			.sign(new TextEncoder().encode(process.env.REFRESH_TOKEN_SECRET));
		return resolve(refreshToken);
	});
}

export function verifyRefreshToken(token: string) {
	return new Promise(async (resolve) => {
		const { payload: newToken } = await jose.jwtVerify(
			token,
			new TextEncoder().encode(process.env.REFRESH_TOKEN_SECRET)
		);
		return resolve(newToken);
	});
}
