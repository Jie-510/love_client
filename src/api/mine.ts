
import request from '@/utils/request';

export const getUserInfo = (id: string) => {
    return request({
        url: ''
    })
}

// 城市查询

// 获取选项内容
export const getInfoOptions = () => {
    return request({
        url: `base_info_option`,
        method: 'get'
    })
}

// 获取会员详情

export const getUserDetail = (id: string) => {
    return request({
        url: `user_detail?id=${id}`,
        method: 'get'
    })
}