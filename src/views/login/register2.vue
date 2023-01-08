<template>
    <div class="set-psd">
        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field v-model="form.nickname" name="nickname" placeholder="请输入名字"
                    :rules="[{ required: true, message: '请正确输入名字' }]" />
                <van-field v-model="form.password" name="password" placeholder="请输入密码" type="password"
                    :rules="[{ required: true, message: '请填写密码' }]">
                </van-field>
                <van-field v-model="repeatPsd" name="repeatPsd" placeholder="请重新输入密码" type="password"
                    :rules="[{ required: true, message: '请重新输入密码' }]">
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
import { useRoute, useRouter, LocationQuery } from 'vue-router';
import { reactive, ref } from 'vue';
import { PsdNameInt, PhoneRegisterInt } from '~/login';
import { showNotify } from 'vant';
import { type } from 'os';

const route = useRoute()
const router = useRouter()

let repeatPsd = ref<string>('')

let form = reactive<PsdNameInt>({
    nickname: '',
    password: '',
    mobile: route.query.mobile,
    code: route.query.code
})

const onSubmit = () => {
    if (repeatPsd.value !== form.password) {
        showNotify({
            message: '密码不一致',
            type: 'danger'
        })
        return
    }

    router.push({
        path: '/login/register3',
        query: form
    })
}

</script>

<style scoped lang="scss">
.set-psd {
    width: 100%;
    height: 100%;
    padding-top: 50px;
}
</style>