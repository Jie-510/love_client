import request from '@/utils/request';
import { FormInt } from '~/login';
import { PhoneRegisterInt, PhoneInt } from '~/login';
import qs from 'qs';

// 手机登录
export const phoneLogin = (data: FormInt): Promise<any> => {
    return request({
        url: 'login',
        method: 'post',
        data
    })
}

// 发送注册验证码
export const sendCodeReq = (mobile: string): Promise<any> => {
    return request({
        url: `code?mobile=${mobile}`,
        method: 'post',
    })
}

// 校验验证码
export const verifyReq = (data: PhoneRegisterInt): Promise<any> => {
    return request({
        url: 'verify',
        method: 'post',
        data
    })
}

// 手机注册
export const registerReq = (data: any): Promise<any> => {
    // console.log(data);

    return request({
        url: `register?mobile=${data.mobile}&code=${data.code}&nickname=${data.nickname}&password=${data.password}&purpose=${data.purpose}`,
        method: 'post',
        // headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        // },
        // data
    })
}