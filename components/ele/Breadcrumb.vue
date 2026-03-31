<template>
<div class="_breadcrumb" v-if="navigate && navigate.length > 0">
    <div class="wrap">
        <NuxtLink class="item" :to="'/'">
            <i class="icon ri-home-4-line"></i>
        </NuxtLink>
        <div
            class="itemg"
            v-for="(item, index) in navigate"
            :key="index"
        >
            <i class="arr ri-arrow-drop-right-line"></i>
            <NuxtLink class="item" :to="item.link">
                <span>{{item.name}}</span>
            </NuxtLink>
        </div>
    </div>
</div>
</template>

<script setup>
defineProps({
    navigate: Array
})


</script>

<style scoped lang="scss">
._breadcrumb {
    padding: 32px 0;
    background-color: #ffffff;
    .wrap,
    .itemg{
        @include flex-r();
        justify-content: flex-start;
        align-items: center;
        .item {
            color: var(--main-dark-gray);
        }
    }
    .item {
        .icon {
            font-size: 18px;
            color: var(--main-orange);
        }
    }
    .arr {
        font-size: 18px;
        color: var(--main-light-gray);
        margin: 0 6px;
    }
    @include mo {
        padding: 12px 0;
        .arr {

        }
    }
}
</style>
