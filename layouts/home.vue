<template>
    <div v-cloak>
        <CommonHomeHeader></CommonHomeHeader>
        <slot />
        <CommonFooter></CommonFooter>
    </div>
</template>

<script setup>
import CommonHomeHeader from "@/components/common/HomeHeader.vue";
import CommonFooter from "@/components/common/Footer.vue";
</script>

<style scoped>

</style>
