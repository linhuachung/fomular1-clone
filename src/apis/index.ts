import {LocalStore} from '../utils/helpers/local.ts';
import axios from 'axios';
import {apiData} from './product.ts';

const {get} = LocalStore
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_KEY,
    headers: {
        'Content-Type': 'text/html, application/json; charset=utf-8',
        // // 'Access-Control-Allow-Origin': '*',
        // // 'Access-Control-Allow-Methods': 'HEAD, GET, POST, PUT, PATCH, DELETE',
        // // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        // 'Access-Control-Allow-Headers': 'content-type,content-length,server,date,x-xss-protection,x-download-options,x-frame-options,last-modified,etag,accept-ranges,content-encoding,x-content-type-options,cache-control,vary,x-cache,via,x-amz-cf-pop,x-amz-cf-id,age',
        // 'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH',
        // 'Access-Control-Allow-Origin': '*'
        // crossDomain: true
        // withCredentials: true,
        // credentials: 'same-origin',
    },
})

axiosInstance.interceptors.request.use((config) => {
        const accessToken = get('access_token', true)
        if (accessToken) {
            // const xhr = new XMLHttpRequest();
            config.headers.Authorization = `Bearer ${accessToken}`

            // xhr.setRequestHeader("X-Requested-With:", "XMLHttpRequest");
        }
        return config
    },
    (error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use((response) => response.data, (error) => Promise.reject(error))

export const API_URL_APP = {
    data: apiData
}
export default axiosInstance
