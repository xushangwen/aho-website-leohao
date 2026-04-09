<template>
<div class="_pagi">
    <div class="item tohead" v-if="pageNum > 1">
        <i class="icon ri-arrow-left-double-fill"></i>
    </div>
    <div class="item prev" v-if="pageNum > 1">
        <i class="icon ri-arrow-left-s-line"></i>
    </div>
    <div
        class="item"
        :class="{active: index === pageNum}"
        v-for="index in totalPages"
        :key="index"
    ><span>{{index}}</span></div>
    <div class="item next" v-if="pageNum < totalPages">
        <i class="icon ri-arrow-right-s-line"></i>
    </div>
    <div class="item toend" v-if="pageNum < totalPages">
        <i class="icon ri-arrow-right-double-fill"></i>
    </div>
</div>
</template>

<script setup>
/**
 * 全局css中定义了.pagination，注意样式覆盖
 * @type {Prettify<Readonly<ExtractPropTypes<{total: {default: number, type: NumberConstructor}, pageSize: {default: number, type: NumberConstructor}, pageNum: {default: number, type: NumberConstructor}}>>>}
 */
const props = defineProps({
    total: {
        type: Number,
        default: 38
    },
    pageSize: {
        type: Number,
        default: 12
    },
    pageNum: {
        type: Number,
        default: 1
    }
})

const { total, pageSize, pageNum } = props
const totalPages = computed(() => Math.ceil(Number(total) / Number(pageSize)))

defineEmits(['navigate'])


</script>

<style scoped lang="scss">
._pagi {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    .item {
        width: fluid(34px, 30px);
        height: fluid(34px, 30px);
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--main-light-gray);
        border-radius: 6px;
        color: var(--main-dark-gray);
        font-size: fluid(16px, 14px);
        font-family: 'TTFors';
        cursor: pointer;
        transition: all .3s;
        &:hover {
            background-color: rgba(255, 100, 0, .7);
        }
        &.active {
            color: white;
            background-color: var(--main-orange);
        }
        .icon {
            color: inherit;
            font-size: fluid(18px, 16px);
        }
    }
}
</style>
