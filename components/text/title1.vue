<template>
  <div class="title">
      <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "title1"
  }
</script>

<style scoped lang="scss">
    .title {
        width: 100%;
        max-width: 1000px;
        :deep(.t1) {
            color: #000;
            font-size: fluid(36px, 24px);
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: -0.72px;
        }
        :deep(.t2) {
            color: var(--BASE_COLOR_RED);
            font-size: fluid(18px, 14px);
            font-style: normal;
            font-weight: 500;
            line-height: 140%; /* 25.2px */
            letter-spacing: -0.36px;
        }
    }
</style>
