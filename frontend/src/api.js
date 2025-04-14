import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl = "https://ebc7c567-3255-4ecb-8a38-fd55f5fb6284-dev.e1-us-east-azure.choreoapis.dev/django-react/backend/v1"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api