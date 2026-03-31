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

onMounted(() => {
    if (import.meta.client) {
        const observer = new IntersectionObserver((entries) => {
            console.log(entries[0])
        }, {
            threshold: 0.1
        })
        observer.observe(el.value)
    }
})


</script>

<style scoped lang="scss">

</style>
