import axios from "axios";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: 'https://b712-summer-camp-server-side.vercel.app/',
});

const useUserSecure = () => {

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const code = localStorage.getItem('secret-code');
            if (code) {
                config.headers.Authorization = `Bearer ${code}`;
            }
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                return Promise.reject(error);
            }
        );
    }, []);

    return [axiosSecure];
};

export default useUserSecure;