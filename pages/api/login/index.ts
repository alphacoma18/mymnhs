import { serialize } from "cookie";
export default async function(req: any, res: any) {
    const { username, password } = req.body;
    console.log(username, password);
    res.setHeader('Set-Cookie', serialize('token', 'token_cookie_value', { path: '/' }));
}