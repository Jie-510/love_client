import axios, { AxiosRequestConfig } from 'axios';
import vant, { NotifyType } from 'vant';
declare module 'axios' {
    interface myRequest extends AxiosRequestConfig {
        headers?: any
    }
}
