<template>
    <div class="edit-data">
        <div class="bar">

        </div>
        <div class="content">
            <van-tabs v-model:active="active" background="#007bff" color="#fff" title-active-color="#fff"
                title-inactive-color="#343a40">
                <van-tab title="基本资料">
                    <Suspense>
                        <edit-cell></edit-cell>
                    </Suspense>
                </van-tab>
                <van-tab title="理想对象">内容 2</van-tab>
            </van-tabs>

        </div>
        <div class="btn-warp">
            <van-button type="success" size="small">保存</van-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import EditCell from './components/edit-cell.vue';
let active = ref('基本资料')


// const changeItem = (obj) => {
//     basicData[obj.index.value].value = obj.val
//     console.log(basicData[obj.index.value]);
// }

// onMounted(async () => {
//     let InfoOptions = await getInfoOptions()
//     console.log(InfoOptions);

// })
</script>

<style scoped lang="scss">
.edit-data {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #e7e7d8;
    padding-top: 10.6667vw;

    .bar {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 36.6667vw;
        background-color: #007bff;
    }

    .content {
        width: 100%;
        flex: 1;
        overflow: scroll;
        margin-bottom: 20px;
        z-index: 1;

        // padding: 20px;
        &::-webkit-scrollbar {
            display: none;
        }
    }

    .btn-warp {
        width: 100%;
        height: 15.6667vw;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;

        .van-button {
            width: 32.3333vw;
        }
    }
}
</style>