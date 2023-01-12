<template>
    <div class="login-phone">
        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field v-model="form.mobile" name="mobile" placeholder="前输入手机号"
                    :rules="[{ required: true, message: '请正确输入手机号' }]" />
                <van-field v-model="form.password" name="password" placeholder="前输入密码" type="password"
                    :rules="[{ required: true, message: '请填写密码' }]" />
            </van-cell-group>
            <div class="register">
                <span @click="phoneRegister">手机注册</span>
                <span>忘记密码</span>
            </div>
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit">
                    确定
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import { FormInt } from '~/login';
import { phoneLogin } from '@/api/login';
import { useRouter } from 'vue-router';

import { useUserStore } from '@/store/user-store';
import { storeToRefs } from 'pinia'

const store = useUserStore()
const router = useRouter()

let form = reactive<FormInt>({
    mobile: '',
    password: ''
})

// 手机号验证规则
const reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
const validator = (val: string) => reg.test(val)

// 保存到仓库
const { setUserInfo, increment } = store

// 登录
const onSubmit = async (form: FormInt): Promise<void> => {
    let res = await phoneLogin(form)
    if (res.code === 1) return
    // 存token和个人信息
    localStorage.setItem('token', res.token)
    localStorage.setItem('info', JSON.stringify(res.info))
    setUserInfo(res.info)
    router.push('/mine')
}

// 点击手机注册
const phoneRegister = (): void => {
    router.push('/login/register1')
}

</script>

<style scoped lang="scss">
.login-phone {
    width: 100%;
    height: 100%;
    padding-top: 50px;

    .register {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 18px;
        color: blue;
    }
}
</style>