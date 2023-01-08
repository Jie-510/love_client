<template>
    <div class="login-home">
        <div class="text">
            <p style="color:pink;font-size: 20px;">您好，请先登录或注册，谢谢！</p>
            <p>
                <van-checkbox v-model="checked" shape="square" icon-size="16px">我完全同意
                    <span style="color:blue" @click="showPopup">《知心港湾登录注册协议》</span>
                </van-checkbox>
            </p>
            <van-popup v-model:show="show" closeable position="bottom" :style="{ height: '50%' }">
                <p>《知心港湾登录注册协议》</p>
                <div class="agreement">
                    1231237621835821382138721478217486219642891648921689462189462819648219648219642891648921649126849216
                </div>
            </van-popup>
        </div>
        <van-divider />
        <div class="login-option">
            <div class="option-box">
                <div class="option-item" v-for="v in loginOption" :key="v.title" @click="handleLoginOption(v)">
                    <svg-icon :name="v.icon" size="big"></svg-icon>
                    <span>{{ v.title }}</span>
                </div>
            </div>
            <p class="register" @click="registerMechanism">注册机构账号</p>
        </div>
        <van-notify v-model:show="msgShow" type="warning">
            <van-icon name="bell" style="margin-right: 4px;" />
            <span>暂未开通</span>
        </van-notify>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, } from 'vue';
import { useRouter } from 'vue-router';
import { showNotify } from 'vant';
// 路由实例
const router = useRouter()
// 复选框
let checked = ref<boolean>(false)

// 协议弹出
let show = ref<boolean>(false)
const showPopup = (): void => {
    show.value = true
}

// 登陆方式选择
interface LoginOptionInt {
    icon: string,
    title: string,
    path: string
}
const loginOption: Array<LoginOptionInt> = reactive([
    {
        icon: 'wchat',
        title: '微信登录',
        path: '/mine'
    },
    {
        icon: 'qq',
        title: 'QQ登录',
        path: '/mine'
    },
    {
        icon: 'xinlang',
        title: '新浪登录',
        path: '/mine'
    },
    {
        icon: 'phone',
        title: '手机登录',
        path: '/login/phone'
    },
])
// 点击登录
const handleLoginOption = (item: LoginOptionInt): void => {
    if (!checked.value) {
        showNotify({
            message: '请同意协议',
            type: 'warning'
        })
        return
    }
    router.push(item.path)
}
// 注册机构账号
let msgShow = ref<boolean>(false)
const registerMechanism = (): void => {
    // showNotify({ type: 'warning', message: '暂未开通' });
    // showNotify('通知内容');
    msgShow.value = true
    let times: any = null
    times ? times : times = setTimeout(() => {
        console.log(1);

        msgShow.value = false
    }, 3000)
}
</script>

<style scoped lang="scss">
.login-home {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .text {
        width: 100%;
        height: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .agreement {
            word-break: break-all;
        }
    }

    .login-option {
        width: 100%;
        height: 58%;

        .option-box {
            display: flex;
            align-items: center;
            height: 80px;
            justify-content: center;

            .option-item {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
        }

        .register {
            margin-top: 100px;
            width: 100%;
            text-align: center;
            color: rgb(0, 106, 255);

            .van-notify--warning {
                background: var(--van-notify-warning-background) !important;
            }
        }
    }
}
</style>