import {LocalStore} from '../utils/helpers/local.ts';
import axios from 'axios';
import {apiData} from './product.ts';

const { get } = LocalStore

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_KEY,
    headers: {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
    },
    // proxy:{
    //     host: "http://localhost:3000",
    //     port: 3000
    // }
})

axiosInstance.interceptors.request.use((config) => {
        const accessToken = get('access_token', true)
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use((response) => response.data, (error) => Promise.reject(error))

export const API_URL_APP = {
    data:apiData
}
export default axiosInstance
