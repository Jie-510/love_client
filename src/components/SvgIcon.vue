<template>
    <svg :style="{ color: color }" aria-hidden="true" class="icon" :class="iconSize">
        <use :xlink:href="'#' + name" :fill="color"></use>
    </svg>

</template>

<script setup lang="ts">
import { computed } from 'vue';
interface Props {
    name: string,
    color: string,
    size: string
}

const props = withDefaults(defineProps<Props>(), {
    name: 'test',
    color: '#6c757d',
    size: 'small'
})

const iconSize = computed(() => 'icon-' + props.size)
console.log(iconSize);

</script>

<style scoped lang="scss">
.icon {
    vertical-align: -0.15em;
    overflow: hidden;
    fill: currentColor;
    // width: 1em;
    // height: 1em;

    &-small {
        width: 1em;
        height: 1em;
    }

    &-middle {
        width: 1.5em;
        height: 1.5em;
    }

    &-large {
        width: 2em;
        height: 2em;
    }
}
</style>