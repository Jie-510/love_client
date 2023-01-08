import { LocationQuery } from 'vue-router';

// 手机号登录
export interface FormInt {
    mobile: string,
    password: string
}
// 手机号注册
export interface PhoneRegisterInt {
    mobile: string,
    code: string
}

// 密码名字设置
export interface PsdNameInt {
    nickname: string,
    password: string,
    purpose?: string,
    mobile: any,
    code: any
}

// 全部资料手机号注册
export interface PhoneInt extends PsdNameInt {
    purpose: string,
}