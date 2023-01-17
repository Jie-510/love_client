<template>
    <div class="cell">
        <van-cell-group>
            <van-cell :title="v.title" :is-link="props.is_link" v-for="v in props.data" :key="v.title"
                :to="props.is_link && v.path" :value="v.value">
                <template #icon v-if="props.is_icon">
                    <svg-icon :name="v.icon" size="middle" class="svg" color="#007bff"></svg-icon>
                </template>
            </van-cell>
        </van-cell-group>
    </div>
</template>

<script setup lang="ts">
interface Props {
    data: Array<dataItem>,
    is_link?: boolean,
    is_icon: boolean
}

interface dataItem {
    title: string,
    path?: string,
    value?: string,
    icon?: string
}
const props = withDefaults(defineProps<Props>(), {
    data: () => [],
    is_link: false,
    is_icon: false
})

</script>

<style scoped lang="scss">
.van-cell__title,
.van-cell__value {
    padding-left: 2.6667vw;
}

.svg {
    margin-right: 10px;
}
</style>