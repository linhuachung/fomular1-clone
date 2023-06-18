import axiosInstance from '../../apis/index.js';
import {verifyDataPost} from '../../utils/helpers/format.ts';
import Toast from '../../components/Toast/index.tsx';
import {ListMessageError, ListMessageSuccess} from '../../utils';
import {TOAST_STATUS} from '../../components/Toast/toast-message.ts';

const methods = {
    get: (url: string) => axiosInstance.get(url),
    post: (url: string, data:object) => axiosInstance.post(url, data),
    put: (url: string, data:object) => axiosInstance.put(url, data),
    delete: (url: string, data:object) => axiosInstance.delete(url, { data }),
}


const callApi = async ({
                           method,
                           data,
                           url,
                           onRequest = (textSuccess: string) => {
                           },
                           onSuccess = (response: any) => {
                           },
                           onFailed = (dataError: any) => {
                           },
                           onFinally = () => {
                           },
                           textSuccess = ''
                       }) => {
    onRequest(textSuccess)
    try {
        const response = await methods[method](
            url,
            method === 'delete' || method === 'postFile' ? data : verifyDataPost(data)
        )
        onSuccess(response)

        textSuccess && Toast(ListMessageSuccess[textSuccess] || 'Success', TOAST_STATUS.success)
        return response
    } catch (error: any) {
        console.log(error)
        if (error.code === 'ERROR_NETWORK') {
            Toast('Network error', TOAST_STATUS.error);
            throw new Error('Network error')
        }
        const dataError = error.response.data
        if (dataError.error[0].code === '401') {
            localStorage.clear()
            window.location.href = '/login'
        }
        onFailed(dataError)
        Toast(ListMessageError[dataError.error[0].code] || dataError.error[0].code, TOAST_STATUS.error)
        throw new Error(dataError.message || 'Unknown error occurred')
    } finally {
        onFinally()
    }
}


export { callApi }
