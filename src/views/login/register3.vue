<template>
    <div class="register3">
        <van-radio-group v-model="checked">
            <van-cell-group inset>
                <van-cell :title="v.title" clickable @click="checked = v.title" v-for="(v, i) in list" :key="i">
                    <template #right-icon>
                        <van-radio :name="v.title" />
                    </template>
                </van-cell>
                <van-cell clickable @click="checked = isSlef">
                    <template #right-icon>
                        <van-radio :name="isSlef" />
                    </template>
                    <van-field v-model="isSlef" placeholder="以上都不对，我自己输入" />
                </van-cell>
            </van-cell-group>
        </van-radio-group>
        <van-button type="primary" block @click="handleSubmit">确定</van-button>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { registerReq } from '@/api/login';
import { useRoute, useRouter } from 'vue-router';
import { PhoneInt } from '~/login';
const route = useRoute()
const router = useRouter()
let checked = ref<string>('1')
let isSlef = ref<string>('')

let list = reactive([
    { title: '征婚', isChecked: true },
    { title: '学习', isChecked: false },
    { title: '谈心', isChecked: false },
    { title: '解惑', isChecked: false },
])

let formData: any = reactive(route.query)
const handleSubmit = async (): Promise<void> => {
    formData.purpose = checked.value
    formData.mobile = Number(formData.mobile)

    let newFormData = {
        'mobile': formData.mobile,
        'code': formData.code,
        'nickname': formData.nickname,
        'password': formData.password,
        'purpose': formData.purpose
    }

    let res = await registerReq(formData)
    // console.log(formData);

    // console.log(res);

}
</script>

<style scoped>

</style>