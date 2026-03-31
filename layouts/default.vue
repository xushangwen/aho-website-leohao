<template>
    <div v-cloak>
        <CommonHeader></CommonHeader>
        <slot />
        <CommonFooter></CommonFooter>
    </div>
</template>

<script setup>
import CommonHeader from "@/components/common/Header.vue";
import CommonFooter from "@/components/common/Footer.vue";


</script>

<style scoped>

</style>
