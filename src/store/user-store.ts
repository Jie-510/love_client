import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';

export const useUserStore = defineStore('user', () => {
    let count = ref<number>(0)
    let userInfo = reactive({})
    function increment() {
        count.value++
    }
    function setUserInfo(data: any) {
        userInfo = data
    }
    return {
        count,
        increment,
        setUserInfo,
        userInfo
    }
})