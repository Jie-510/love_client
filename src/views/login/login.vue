<template>
    <div class="login">
        <div class="banner" v-if="isCloseBanner">
            <p class="banner-p1">登录恋爱吧</p>
            <p class="banner-p2">
                <span>成为之心爱人</span>
                <span>共建心灵港湾</span>
            </p>
            <div class="close" @click="close">
                <svg-icon name="close" color="#ffffff" size="middle"></svg-icon>
            </div>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 关闭banner
let isCloseBanner = ref<boolean>(true)
const close = () => {
    isCloseBanner.value = false
}
</script>

<style scoped lang="scss">
.login {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .banner {
        width: 100%;
        height: 20vh;
        background-color: rgb(57, 57, 244);
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        .close {
            position: absolute;
            top: 20px;
            right: 20px;
        }

        .banner-p1 {
            font-size: 20px;
        }

        .banner-p2 {
            font-size: 16px;
            // display: flex;
            width: 100%;

            &>span {
                width: 50%;
                text-align: center;
            }
        }
    }

    .main {
        flex: 1;
    }
}
</style>