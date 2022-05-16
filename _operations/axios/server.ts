import Axios from "axios";

export const nodeServer: any = Axios.create({
	baseURL: "http://localhost:9000/api",
});
