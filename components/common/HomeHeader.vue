<template>
<Header class="home-header"></Header>
</template>

<script setup>
import Header  from "./Header.vue";
</script>

<style scoped lang="scss">
.home-header {
    :deep(nav.norm) {
        .mask {
            border-bottom: 0.5px solid var(--main-light-gray, #DCDCDC);
        }
        &.transparent {
            .mask {
                border-bottom-color: transparent;
            }
        }
    }
}
</style>
