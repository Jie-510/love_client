<template>
    <div class="topbar">
        <div class="topbar-item" v-for="v in props.data" :key="v.title">
            <svg-icon :name="v.icon" size="big" color="#007bff"></svg-icon>
            <span>{{ v.title }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, withDefaults } from 'vue';

interface Props {
    data: Array<dataItem>
}

interface dataItem {
    title: string,
    path?: string,
    icon: string
}

const props = withDefaults(defineProps<Props>(), {
    data: () => []
})

</script>

<style scoped lang="scss">
.topbar {
    width: 100%;
    height: 26.6667vw;
    display: flex;

    &>.topbar-item {
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
}
</style>