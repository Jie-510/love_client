<template>
    <div class="register3">
        <van-radio-group v-model="checked">
            <van-cell-group inset>
                <template v-for="(v, i) in list" :key="v.title">
                    <van-cell :title="v.title" clickable @click="v.isChecked = true" v-if="!v.isSelf">
                        <template #right-icon>
                            <van-radio :name="v.title" />
                        </template>
                    </van-cell>
                    <van-cell clickable @click="v.isChecked = true" v-if="v.isSelf">
                        <template #right-icon>
                            <van-radio :name="v.title" />
                        </template>
                        <van-field v-model="v.content" placeholder="以上都不对，我自己写" />
                    </van-cell>
                </template>
            </van-cell-group>
        </van-radio-group>

        <van-button round block type="primary" native-type="submit" @click="submit">
            确定
        </van-button>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { registerReq } from '@/api/login';
import { useRoute, useRouter } from 'vue-router';
import { PhoneInt } from '~/login';
const route = useRoute()
const router = useRouter()


let checked = ref<string>('')

let list = reactive<any>([
    { title: '征婚', isChecked: false },
    { title: '学习', isChecked: false },
    { title: '谈心', isChecked: false },
    { title: '解惑', isChecked: false },
    { isChecked: false, isSelf: true, content: '' },
])
let formData: any = reactive({
    ...route.query,
})

const submit = async () => {
    let item = list.filter((v: any) => v.isChecked)
    formData.purpose = item.content ? item.content : item.title
    console.log(formData);

    let res = registerReq(formData)
}
</script>

<style scoped>

</style>