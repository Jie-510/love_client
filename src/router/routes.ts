import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/Layout.vue';
const routes: Array<RouteRecordRaw> = [
    // 重定向
    {
        path: '',
        redirect: '/login'
    },
    // 登录
    {
        path: '/login',
        component: () => import('@/views/login/login.vue'),
        redirect: '/login/login2',
        children: [
            {
                path: 'login2',
                component: () => import('@/views/login/login2.vue')
            },
            {
                path: 'phone',
                component: () => import('@/views/login/login-phone.vue')
            },
            {
                path: 'register1',
                component: () => import('@/views/login/register1.vue')
            },
            {
                path: 'register2',
                component: () => import('@/views/login/register2.vue')
            },
            {
                path: 'register3',
                component: () => import('@/views/login/register3.vue')
            },
            {
                path: 'register4',
                component: () => import('@/views/login/register4.vue')
            },
        ]
    },
    // 我的
    {
        path: '/mine',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('@/views/mine/mine.vue')
            }
        ]
    },
    // 导师
    {
        path: '/tutor',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('@/views/tutor/tutor.vue')
            }
        ]
    },

    // 征婚
    {
        path: '/marriage',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('@/views/marriage/marriage.vue')
            }
        ]
    },
    // 聊天
    {
        path: '/chat',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('@/views/chat/chat.vue')
            }
        ]
    },

    // 404
    {
        path: '/404',
        component: () => import('@/views/error/404.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    }
]

export default routes