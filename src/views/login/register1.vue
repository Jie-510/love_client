<template>
    <div class="phone-register">
        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field v-model="form.mobile" name="mobile" placeholder="请输入手机号"
                    :rules="[{ required: true, message: '请正确输入手机号' }]" />
                <van-field v-model="form.code" name="code" placeholder="请填写验证码"
                    :rules="[{ required: true, message: '请填写验证码' }]">
                    <template #button>
                        <van-button size="small" type="primary" @click="sendCode">发送验证码</van-button>
                    </template>
                </van-field>
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit">
                    确定
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { sendCodeReq, verifyReq } from '@/api/login';
import { PhoneRegisterInt } from '~/login';
import { useRouter } from 'vue-router';
const router = useRouter()
// 手机号
let form = reactive<PhoneRegisterInt>({
    code: '',
    mobile: ''
})
// 手机号验证规则
const reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
// const validator = (val: string) => reg.test(val)

// 发送验证码
const sendCode = async (): Promise<void> => {
    let res = await sendCodeReq(form.mobile)
    console.log(res);
}
const onSubmit = async (): Promise<void> => {
    let res = await verifyReq(form)
    // 验证通过
    if (res === '') {
        router.push({
            path: '/login/register2',
            query: form
        })
    }

}
</script>

<style scoped lang="scss">
.phone-register {
    width: 100%;
    height: 100%;
    padding-top: 50px;
}
</style>