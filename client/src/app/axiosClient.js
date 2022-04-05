import axios from 'axios';
import { getCookie } from '../common/helpers/cookie';

const privateApi = axios.create();
const publicApi = axios.create();

const instanceConfig = (instance) => {
    instance.defaults.baseURL = 'http://localhost:4001';
    // instance.defaults.withCredentials = true;
};

instanceConfig(publicApi); /* public HTTP request */
instanceConfig(privateApi); /* private HTTP request */

privateApi.interceptors.request.use(
    (config) => {
        const accessToken = getCookie('accessToken');

        config.headers = {
            authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        };

        return config;
    },
    (err) => Promise.reject(err)
);

/* Axios Request Interceptors for API calls */
// privateApi.interceptors.request.use(
//     (res) => res,
//     async (err) => {
//         const originalRequest = err.config;
//         if (err.response.status === 403 && !originalRequest._retry) {
//             originalRequest._retry = true;
//             const accessToken = await refreshAccessToken();

//             privateApi.defaults.headers.common[
//                 'authorization'
//             ] = `Bearer ${accessToken}`;

//             return privateApi(originalRequest);
//         }

//         Promise.reject(err);
//     }
// );

export { publicApi, privateApi };
