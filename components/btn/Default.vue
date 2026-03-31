<template>
    <button
        class="btn"
        :class="{
            line: !!line
        }"
    >
        <NuxtLink :to="link" v-if="link">
            <slot></slot>
        </NuxtLink>
        <slot v-else></slot>
    </button>
</template>

<script setup>
  defineProps({
      link: String,
      line: Boolean
  })
</script>

<style scoped lang="scss">
.btn {
    border: var(--BASE_COLOR_RED) 1px solid;
    outline-style: none;
    height: 32px;
    padding: 0 18px;
    border-radius: 100px;
    background-color: var(--BASE_COLOR_RED);
    color: #ffffff;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -0.28px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
    &.line {
        background-color: transparent;
        color: var(--BASE_COLOR_RED);
        &:hover {

        }
    }
    :deep(.icon:first-child) {
        margin-right: 6px;
    }
    :deep(.icon:last-child) {
        margin-left: 6px;
    }
    transition: all .3s;
    &:hover {
        /* Shadow/md */
        box-shadow: 0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10);
    }
}
</style>
