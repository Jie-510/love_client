<template>
    <div class="mine">
        <div class="top-box">
            <top-bar :data="topbarData"></top-bar>
        </div>
        <div class="info">
            <div class="info-img-box">
                <img :src="userInfo.header" alt="">
            </div>
            <div class="info-text">
                <p>
                    <span>{{ userInfo.nickname }}</span>
                    <span>ID:{{ userInfo.id }}</span>
                </p>
                <p>
                    内心独白：<span></span>
                </p>
            </div>
        </div>
        <div class="bar-box">
            <Cell :data="cellData" :is_link="true" :is_icon="true"></Cell>
        </div>
    </div>
</template>

<script setup lang="ts">
import TopBar from './components/topbar.vue';
import Cell from '@/components/cell.vue';
// 头部导航啦数据
const topbarData = [
    { title: '高富帅', path: '', icon: 'user__easyico' },
    { title: '白富美', path: '', icon: 'user__easyico1' },
    { title: '才俊', path: '', icon: 'nan' },
    { title: '动态', path: '', icon: 'dongtai' },
    { title: '编辑资料', path: '', icon: 'bianji' },
]

// 个人基本资料
interface UserInfoInt {
    birth: string,
    header: string,
    id: number,
    integral: number,
    mobile: string
    nickname: string,
    sex: number
}
let userInfo: UserInfoInt = JSON.parse(localStorage.getItem('info'))


// 单元格数据
const cellData = [
    { title: '签到', path: '', icon: 'qiandao' },
    { title: '编辑资料', path: '/edit-data', icon: 'bianji' },
    { title: '关注我的', path: '', icon: 'guanzhu' },
    { title: '我的相册', path: '', icon: 'xiangce' },
    { title: '鲜花礼物', path: '', icon: 'xianhua-' },
    { title: '我要分享', path: '', icon: 'fenxiang' },
]

</script>

<style scoped lang="scss">
.mine {
    width: 100%;
    height: 100%;
    padding: 2.6667vw;
    background-color: rgb(233, 230, 230);

    &>div {
        width: 100%;
        padding: 2.6667vw;
        background-color: #fff;
        border-radius: 1.6667vw;
        margin-bottom: 2.6667vw;
    }

    .info {
        display: flex;

        .info-img-box {
            width: 21.3333vw;
            height: 21.3333vw;
            margin-right: 2.6667vw;

            &img {
                width: 100%;
                height: 100%;
            }
        }

        .info-text {
            display: flex;
            flex-direction: column;
            flex: 1;
        }
    }
}
</style>