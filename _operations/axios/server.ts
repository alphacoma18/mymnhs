import Axios from "axios";

export const nodeServer = Axios.create({
	baseURL: "https://localhost:9000/api",
});
