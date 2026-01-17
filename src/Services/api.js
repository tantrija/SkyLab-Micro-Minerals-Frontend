import axios from 'axios';

const axiosClientAuth = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosClientAuth.interceptors.request.use(
    async (config) => {
        const token = process.env.NEXT_PUBLIC_API_TOKEN;
        console.log(token);
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosClientAuth.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.log(error.response);

        const showError = (msg) => {

            // alert("Error", msg);

        };

        if (error.response?.data?.errors?.length > 0) {
            error.response.data.errors.forEach((err) => {
                showError(err.msg);
            });
        }
        else if (error.response?.data?.msg) {
            console.log(error.response.data.msg);

            showError(error.response?.data?.msg);
        }
        else if (error.response?.data?.message) {
            console.log(error.response.data.message);

            showError(error.response?.data?.message);
        } else {
            showError("Something went wrong");
        }

        return Promise.reject(error);
    }
);

export default axiosClientAuth;