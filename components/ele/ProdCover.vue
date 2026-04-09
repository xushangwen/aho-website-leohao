<template>
<div class="cover">
    <div
        class="bg norm"
        :style="{
            backgroundImage: `url(${image})`
        }"
    ></div>
    <div
        class="bg mobi"
        :style="{
            backgroundImage: `url(${imageMobile})`
        }"
    ></div>
    <div class="wrap">
        <div class="text" v-html="text"></div>
    </div>
</div>
</template>

<script setup>
defineProps({
    text: String,
    image: String,
    imageMobile: String,
})


</script>

<style scoped lang="scss">
    .cover {
        width: 100%;
        height: calc(100vh - var(--HEADER_HEIGHT));
        .bg {
            position: absolute;
            inset: 0;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            display: none;
            &.norm {
                display: block;
                background-position: center top;
            }
        }
        .wrap {
            height: inherit;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .text {
            width: 100%;
            color: #000;
            text-align: left;
            font-size: fluid(52px, 32px);
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: -0.96px;
        }
        @include mo {
            height: 240px;
            .wrap {
                flex-direction: column;
                justify-content: flex-end;
            }
            .text {
                font-size: 24px;
                margin-bottom: 32px;
            }
            .bg {
                display: none;
                &.mobi {
                    display: block;
                }
            }
        }
    }
</style>
