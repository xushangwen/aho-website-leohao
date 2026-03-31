<template>
    <div class="swiper-indexbanner" :class="className">
        <div class="swiper-wrapper">
            <div
                class="swiper-slide"
                style="background-image: url(/img/index/banner-ph-1.jpg)"
            ></div>
            <div
                class="swiper-slide"
                style="background-image: url(/img/index/banner-ph-1.jpg)"
            ></div>
        </div>
        <!-- 分页器 -->
        <!--<div class="swiper-pagination"></div>-->
        <!--&lt;!&ndash; 前进后退按钮 &ndash;&gt;-->
        <!--<div class="swiper-button-prev"></div>-->
        <!--<div class="swiper-button-next"></div>-->
    </div>
</template>

<script setup>
    const className = ref(`swiper-${Math.floor(Math.random() * 9999)}`)

    onMounted(() => {
        let swiper = new Swiper(`.${className.value}`, {
            slidesPerView: 1, // 轮播区域展示的数量
            spaceBetween: 0,
            loop: true, // 循环播放
            speed: 1000,
            autoplay: {
                // 自动播放
                delay: 4000,
                disableOnInteraction: false,
            },
            // // 前进后退按钮
            // navigation: {
            //     prevEl: ".swiper-button-prev",
            //     nextEl: ".swiper-button-next",
            // },
            // // 分页器
            // pagination: {
            //     el: ".swiper-pagination",
            //     clickable: true,
            // },
        });
    })

</script>

<style scoped lang="scss">
    .swiper-indexbanner {
        width: 100vw;
        height: calc(100vh - 120px);

        --swiper-theme-color: #ff6600; /* 设置Swiper风格 */
        --swiper-navigation-color: #00ff33; /* 单独设置按钮颜色 */
        --swiper-navigation-size: 30px; /* 设置按钮大小 */
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background-color: #0051d1;
        display: flex;
        justify-content: center;
        align-items: center;
        background-position: center center;
        background-size: cover;
    }
</style>
