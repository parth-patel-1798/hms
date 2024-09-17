import axios from 'axios';
import config from './config';
import { store } from 'src/store';
import { logout } from 'src/store/authSlice';

const axiosClient = axios.create({
    baseURL: `${config.apiBaseURL}`,
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

axiosClient.interceptors.request.use(
    (req) => {
        return req;
    },
    (error) => {
        console.error('Axios Interceptors Request is Failed. ', error);
        return Promise.reject(error);
    },
);

axiosClient.interceptors.response.use(
    (res) => {
        return res;
    },
    (error) => {
        if (error.response && error.responses.status === 401) {
            store.dispatch(logout);
        }
    },
);

export default axiosClient;
