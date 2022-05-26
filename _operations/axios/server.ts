import Axios from "axios";

export const nodeServer = Axios.create({
	baseURL: "http://localhost:9000/api",
});
