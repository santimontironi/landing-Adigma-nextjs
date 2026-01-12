import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL

const servicesApi = axios.create({
    baseURL: `${API_URL}`,
    headers: {
        "Content-Type": "application/json",
    },
});

export const messageContactAxios = async (data) => {
    return await servicesApi.post("/messageContact", data);
}