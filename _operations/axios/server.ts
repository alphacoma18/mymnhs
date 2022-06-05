import Axios from "axios";

export const nodeServer = Axios.create({
	baseURL: "https://mymnhs.herokuapp.com",
	headers: {
		"Content-Type": "application/json",
		"Access-Control-Allow-Credentials": true,
		"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
		"Access-Control-Allow-Headers": "Content-Type, Authorization",
		"Access-Control-Max-Age": "3600",
		"Access-Control-Expose-Headers":
			"Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Access-Control-Allow-Methods, Access-Control-Allow-Credentials",
	},
});
