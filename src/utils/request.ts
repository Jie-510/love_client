import axios from 'axios';
import type { AxiosResponse, AxiosRequestConfig, AxiosInstance, myRequest } from 'axios';
import { showNotify, NotifyType } from 'vant'
enum codeMsg {
    '请求成功' = 0,
    '请求报错' = 1,
    '请从新登录' = 2
}
enum msgType {
    'success' = 0,
    'danger' = 1,
    'warning' = 2
}

const request: AxiosInstance = axios.create({
    baseURL: 'http://h5.itsource.cn:9999/',
    timeout: 5000
})
// 請求攔截器


request.interceptors.request.use((config: myRequest) => {
    // 携带token
    const token = localStorage.getItem('token')
    if (!config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (err: any) => {
    return Promise.reject(err)
})

// 响应拦截器
request.interceptors.response.use((response: AxiosResponse) => {
    const res: any = response.data
    showNotify({
        message: codeMsg[res.code],
        type: msgType[res.code]
    })
    if (res.code === 1) {
        showNotify({
            message: res.errors[0],
            type: 'danger'
        })
    }
    if (res.code === 0) {
        return res.data
    }
    return res
}, (err: any) => {
    return Promise.reject(err)
})

export default request