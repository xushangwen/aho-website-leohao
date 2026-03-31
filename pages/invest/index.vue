<template>
    <main>
        <EleDefaultCover
            image="/images/prod/cover.jpg"
            image-mobile="/images/prod/cover-m.jpg"
            text="投资者关系"
        ></EleDefaultCover>
        <EleBreadcrumb
            :navigate="breadcrumb"
        />

        <section class="s1">
            <div class="wrap">投资者关系直接跳转交易所官方页面</div>
        </section>
    </main>
</template>

<script setup lang="ts">
// 注意cover图片需要替换
const breadcrumb = ref([
    {
        name: '投资者关系',
        link: ''
    }
])
</script>

<style scoped lang="scss">

</style>
