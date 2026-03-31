<template>
    <div v-cloak>
        <CommonNewsHeader></CommonNewsHeader>
        <slot />
        <CommonFooter></CommonFooter>
    </div>
</template>

<script setup>
import CommonNewsHeader from "@/components/common/NewsHeader.vue";
import CommonFooter from "@/components/common/Footer.vue";
</script>

<style scoped>

</style>
