import { serialize } from "cookie";
export default async function (req: any, res: any): Promise<void> { 
	function getData(): Promise<any> {
		return new Promise((resolve, reject) => {
			const data = {
				email: req.body.email,
				password: req.body.password,
			};
			return resolve(data);
		});
	}
	try {
        if (req.method === "POST") {  
            let data = await getData();
            return res.setHeader(
                "Set-Cookie",
                serialize("refresh_token_extreme", "token_cookie_value", {
                    httpOnly: true,
                    secure: true,
                    sameSite: "strict",
                    expires: new Date(Date.now() + 60 * 60 * 1000), // 1 hour
                    path: "/", 
                })
            ).json({
                message: "Successfully logged in",
                data: data,
            });
        }
	} catch (error: any) {
		return res.status(error.status).json({ error: error.message });
	}
}
