import jwt from "jsonwebtoken";
export function generateAccessToken(user: {}) {
	return jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET as string, {
		expiresIn: "10m",
	});
}
export function generateRefreshToken(user: {}) {
    return jwt.sign({user}, process.env.REFRESH_TOKEN_SECRET as string)
}
