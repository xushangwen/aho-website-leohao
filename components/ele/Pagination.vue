<template>
<div class="_pagi">
    <div class="item tohead" v-if="props.pageNum > 1" @click="emit('page-change', 1)">
        <i class="icon ri-arrow-left-double-fill"></i>
    </div>
    <div class="item prev" v-if="props.pageNum > 1" @click="emit('page-change', props.pageNum - 1)">
        <i class="icon ri-arrow-left-s-line"></i>
    </div>
    <div
        class="item"
        :class="{active: index === props.pageNum}"
        v-for="index in totalPages"
        :key="index"
        @click="emit('page-change', index)"
    ><span>{{index}}</span></div>
    <div class="item next" v-if="props.pageNum < totalPages" @click="emit('page-change', props.pageNum + 1)">
        <i class="icon ri-arrow-right-s-line"></i>
    </div>
    <div class="item toend" v-if="props.pageNum < totalPages" @click="emit('page-change', totalPages)">
        <i class="icon ri-arrow-right-double-fill"></i>
    </div>
</div>
</template>

<script setup>
const props = defineProps({
    total: { type: Number, default: 0 },
    pageSize: { type: Number, default: 12 },
    pageNum: { type: Number, default: 1 }
})

const totalPages = computed(() => Math.ceil(Number(props.total) / Number(props.pageSize)))
const emit = defineEmits(['page-change'])
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
