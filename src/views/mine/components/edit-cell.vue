<template>
    <div class="edit-cell">
        <div class="detail-box">
            <van-cell-group inset>
                <van-field v-model="newUserDetail.nickname" label="昵称" :placeholder="newUserDetail.nickname"
                    input-align="right" />
                <van-field v-model="sex" label="性别" :placeholder="sex" input-align="right" />
                <van-cell title="婚姻状况" @click="handleClickItem(InfoOptions.marital, 'marital')"
                    :value="newUserDetail.marital"></van-cell>
                <van-cell title="学历" @click="handleClickItem(InfoOptions.education, 'education')"
                    :value="newUserDetail.education"></van-cell>
                <van-field v-model="newUserDetail.height" label="身高" :placeholder="newUserDetail.height + 'cm'"
                    input-align="right" />
                <van-field v-model="newUserDetail.weight" label="体重" :placeholder="newUserDetail.weight + 'kg'"
                    input-align="right" />
                <van-field v-model="newUserDetail.native_place" label="籍贯" :placeholder="newUserDetail.native_place"
                    input-align="right" />
                <van-cell title="职业" @click="handleClickItem(InfoOptions.profession, 'profession')"
                    :value="newUserDetail.profession"></van-cell>
                <van-cell title="薪酬" @click="handleClickItem(InfoOptions.salary, 'salary')"
                    :value="newUserDetail.salary"></van-cell>
                <van-cell title="住房情况" @click="handleClickItem(InfoOptions.house, 'house')"
                    :value="newUserDetail.house"></van-cell>
                <van-cell title="购车情况" @click="handleClickItem(InfoOptions.car, 'car')"
                    :value="newUserDetail.car"></van-cell>
                <van-cell title="个人资产" @click="handleClickItem(InfoOptions.asset, 'asset')"
                    :value="newUserDetail.asset"></van-cell>
                <van-field v-model="newUserDetail.cur_city" label="现居住地" :placeholder="newUserDetail.cur_city"
                    input-align="right" />
                <van-cell title="属相" @click="handleClickItem(InfoOptions.zodiac, 'zodiac')"
                    :value="newUserDetail.zodiac"></van-cell>
                <van-cell title="星座" @click="handleClickItem(InfoOptions.constellation, 'constellation')"
                    :value="newUserDetail.constellation"></van-cell>
                <van-cell title="是否吸烟" @click="handleClickItem(InfoOptions.smoke, 'smoke')"
                    :value="newUserDetail.smoke"></van-cell>
                <van-cell title="是否喝酒" @click="handleClickItem(InfoOptions.drink, 'drink')"
                    :value="newUserDetail.drink"></van-cell>
            </van-cell-group>

            <van-cell-group inset class="hobby">
                <van-cell title="擅长才艺" @click="clickHobbyItem(newUserDetail.art)">
                    <svg-icon name="bianji" slot="right-icon" color="#007bff" size="middle"></svg-icon>
                </van-cell>
                <van-cell title="休闲娱乐">
                    <svg-icon name="bianji" slot="right-icon" color="#007bff" size="middle"></svg-icon>
                </van-cell>
                <van-cell title="喜欢的书籍">
                    <svg-icon name="bianji" slot="right-icon" color="#007bff" size="middle"></svg-icon>
                </van-cell>
                <van-cell title="欣赏的名人">
                    <svg-icon name="bianji" slot="right-icon" color="#007bff" size="middle"></svg-icon>
                </van-cell>
                <van-cell title="喜爱的音乐">
                    <svg-icon name="bianji" slot="right-icon" color="#007bff" size="middle"></svg-icon>
                </van-cell>
                <van-cell title="喜爱的美食">
                    <svg-icon name="bianji" slot="right-icon" color="#007bff" size="middle"></svg-icon>
                </van-cell>
            </van-cell-group>
        </div>
        <!-- 弹出框 -->
        <van-popup v-model:show="show" closeable position="bottom" :style="{ height: '40%' }" @close="closePopup">
            <van-cell-group inset>
                <van-cell :title="v.val" v-for="(v, i) in popupData" :key="i" @click="handleClickPopupItem(v)" />
            </van-cell-group>
        </van-popup>
        <!-- 爱好弹出框 -->
        <van-popup v-model:show="hobbyPopup" closeable position="bottom" :style="{ height: '40%' }">
            <div class="popup-box">
                <span v-for="(v, i2) in popupHobbyData" :key="i2">
                    {{ v }}
                </span>
                <van-cell>
                    <button @click="btnState ? addHobbyOptions : endAdd">
                        {{ btnState?'添加': '确定' }}
                    </button>
                    <input type="text" v-model="addHobbyText" v-if="inputState">
                    <!-- <button @click="endAdd">确认</button> -->
                </van-cell>
            </div>
        </van-popup>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { getInfoOptions, getUserDetail } from '@/api/mine';

// 获取会员资料选项
let InfoOptions: any = await getInfoOptions()
// console.log(InfoOptions);
// 获取会员详情
const userId: string = JSON.parse(localStorage.getItem('info')).id
let userDetail: any = await getUserDetail(userId)
// 让对象具有相应式
let newUserDetail = reactive(userDetail)
console.log(newUserDetail);

let sex = computed(() => {
    if (newUserDetail.sex == 0) {
        return '未知'
    } else if (newUserDetail.sex == 1) {
        return '男'
    } else {
        return '女'
    }
})

// 弹出框状态
let show = ref<boolean>(false)
// 弹出框
let popupData = reactive([])
// 传过来的对象名
let objStr = ref<string>('')
// 点击显示弹出层
const handleClickItem = (item?: any, str?: any): void => {
    show.value = true
    popupData = item
    objStr.value = str
}
// 弹出层里面的列表点击事件
const handleClickPopupItem = (item: any): void => {
    newUserDetail[objStr.value] = item.val
    show.value = false
}
// 弹出框关闭
const closePopup = () => {

}
newUserDetail.art = '111'

// 爱好弹出框
let hobbyPopup = ref<boolean>(false)
// 弹出框里面渲染的数据
let popupHobbyData = reactive([])
// 点击每一项爱好栏
let hobbyItem = ref(null)
const clickHobbyItem = (item): void => {
    hobbyPopup.value = true
    hobbyItem.value = item
    popupHobbyData.push(item)

}
// 输入框状态
let inputState = ref<boolean>(false)
// 输入的内容
let addHobbyText = ref<string>('')
// 按钮状态
let btnState = ref<boolean>(true)
// 谈价爱好选项
const addHobbyOptions = () => {
    inputState.value = true
    btnState.value = false
    console.log(111);

}
// 确认添加
const endAdd = () => {
    btnState.value = true
    console.log(addHobbyText);

}
</script>

<style scoped lang="scss">
.hobby {
    margin-top: 20px;
}

.popup-box {
    width: 100%;
    height: 100%;
    // display: flex;
}
</style>