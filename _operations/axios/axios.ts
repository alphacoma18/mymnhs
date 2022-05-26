import Axios from "axios";

export const axios = Axios.create({
	baseURL: "http://mymnhs.vercel.app/api",
});
