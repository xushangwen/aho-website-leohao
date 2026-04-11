<template>
    <div class="_load-animate-item" ref="el">
        <slot></slot>
    </div>
</template>

<script setup>
const { ratio, md, sm } = defineProps({
    ratio: String,
    md: String,
    sm: String,
    innerClass: String
})
const el = ref(null)
let observer = null

onMounted(() => {
    if (import.meta.client) {
        observer = new IntersectionObserver((entries) => {
            // 占位：后续在此添加入场动画逻辑
        }, {
            threshold: 0.1
        })
        observer.observe(el.value)
    }
})

onUnmounted(() => {
    observer?.disconnect()
})
</script>

<style scoped lang="scss">

</style>
