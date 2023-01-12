<template>
    <div class="layout">
        <div class="content">
            <router-view></router-view>
        </div>
        <div class="tabbar-box">
            <tab-bar :data="tabbarData"></tab-bar>
        </div>
    </div>
</template>

<script setup lang="ts">
import TabBar from '@/components/tabbar.vue';

// 导航栏数据
const tabbarData = [
    { title: '聊天', path: '/chat', icon: 'chat' },
    { title: '征婚', path: '/marriage', icon: 'marriage' },
    { title: '导师', path: '/tutor', icon: 'tutor' },
    { title: '我的', path: '/mine', icon: 'mine' },
]

</script>

<style scoped lang="scss">
.layout {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .content {
        flex: 1;
        width: 100%;
    }

    .tabbar-box {
        width: 100%;
        height: 13.3333vw;
        background-color: antiquewhite;
    }
}
</style>