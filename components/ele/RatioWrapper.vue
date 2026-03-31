<template>
    <div class="_ratio-item">
        <div class="_ratio-wrapper">
            <div :class="['_ratio-cont', innerClass]">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
const { ratio, md, sm } = defineProps({
    ratio: String | Number,
    md: String | Number,
    sm: String | Number,
    innerClass: String
})
const lgRatio = computed(() => {
    return `${ratio * 100}%`
})
const mdRatio = computed(() => {
    const realRatio = md ? md : ratio
    return `${realRatio * 100}%`
})
const smRatio = computed(() => {
    const realRatio = sm ? sm : ratio
    return `${realRatio * 100}%`
})
// console.log(realRatio.value)
</script>

<style scoped lang="scss">
._ratio-wrapper {
    width: 100%;
    padding-top: v-bind(lgRatio);
    @include lap {
        padding-top: v-bind(mdRatio);
    }
    @include mo {
        padding-top: v-bind(smRatio);
    }
    ._ratio-cont {
        position: absolute;
        inset: 0;
    }
}
</style>
