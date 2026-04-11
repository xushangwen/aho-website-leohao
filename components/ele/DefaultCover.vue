<template>
<div class="cover" :class="{'image-loaded': imageLoadStatus}">
    <div
        class="bg norm"
        :style="{
            backgroundImage: `url(${image})`
        }"
        ref="refBg"
    ></div>
    <div
        class="bg mobi"
        :style="{
            backgroundImage: `url(${imageMobile})`
        }"
        ref="refBgMob"
    ></div>
    <div class="wrap">
        <div class="text" v-html="text"></div>
    </div>
</div>
</template>

<script setup>
const props = defineProps({
    text: String,
    image: String,
    imageMobile: String,
})

const { image, imageMobile } = toRefs(props)

const imageLoadStatus = ref(false)
const refBg = ref(null)
const refBgMob = ref(null)

onMounted(() => {
    if (import.meta.client) {
        const bgStyle = window.getComputedStyle(refBg.value)
        const imageUrl = bgStyle.visibility === 'visible' ? image.value : imageMobile.value
        const imageInst = new Image()
        imageInst.src = imageUrl
        imageInst.onload = () => {
            imageLoadStatus.value = true
        }
    }


})

</script>

<style scoped lang="scss">
    $max_height: 550px;
    .cover {
        width: 100%;
        height: 100vh;
        max-height: clamp(300px, 28.646vw, $max_height);
        display: flex;
        justify-content: center;
        align-items: center;
        &.image-loaded:hover {
            .bg {
                transition: transform 10s linear;
                transform: scale(1.04);
            }
        }
        &.image-loaded {
            .bg {
                transform: scale(1);
                transition: all 2.5s;
            }
            .wrap {
                .text {
                    --opacity: 1;
                    text-shadow: 0 0 0px rgba(255, 255, 255, var(--opacity));
                    //color: rgba(255, 255, 255, 1);
                    transition: all 2s;
                }
            }
        }
        .bg {
            position: absolute;
            inset: 0;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            visibility: hidden;
            transform: scale(1.2);
            &.norm {
                visibility: visible;
            }
        }
        .wrap {
            height: inherit;
            max-height: clamp(300px, 28.646vw, $max_height);
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-end;
            align-items: flex-start;
            .text {
                color: rgba(255, 255, 255, 0);
                font-size: fluid(36px, 24px);
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                position: relative;
                bottom: fluid(100px, 40px);
                text-shadow: 0 0 50px rgba(255, 255, 255, .5);
            }
        }
        @include mo {
            height: 240px;
            .bg {
                visibility: hidden;
                &.mobi {
                    visibility: visible;
                }
            }
            .wrap {
                height: 240px;
                max-height: 240px;
                .text {
                    font-size: 24px;
                    bottom: 24px;
                }
            }
        }
    }
</style>
