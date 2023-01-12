<template>
    <div class="tabbar">
        <van-tabbar router active-color="#007bff" inactive-color="#6c757d" v-model="active">
            <van-tabbar-item replace v-for="(v, i) in props.data" :key="v.path" :to="v.path">
                <span>{{ v.title }}</span>
                <template #icon="props">
                    <svg-icon :name="v.icon"></svg-icon>
                </template>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, ref } from 'vue';


interface DataItem {
    title: string,
    path: string,
    icon: string
}

interface Props {
    data: Array<DataItem>
}

const props = withDefaults(defineProps<Props>(), {
    data: () => []
})

let active = ref('')
</script>

<style scoped lang="scss">
.tabbar {
    width: 100%;
    height: 100%;

    .van-tabbar {
        height: 13.3333vw;
    }
}
</style>