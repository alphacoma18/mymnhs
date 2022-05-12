import Axios from "axios";

export const axios: any = Axios.create({
    baseURL: "http://localhost:3000/api",
})