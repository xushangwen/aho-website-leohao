<template>
    <LayoutsDefault>
        <template v-slot:content>
            <Swiper
                :modules="[SwiperAutoplay, SwiperEffectCreative]"
                :slides-per-view="1"
                :space-between="'0'"
                :speed="600"
                :autoplay="{
                  delay: 8000,
                  disableOnInteraction: false,
                  pagination: {
                      clickable: true,
                  },
                }"
            >
                <SwiperSlide
                    class="swiper-slide"
                    v-for="(item, index) in bannerSlides"
                    :key="index"
                >
                    <div class="cover" :style="{backgroundImage: `url(${item.cover[0]})`}"></div>
                    <div :class="`info wrap ${item.styleClass}`">
                        <div class="cont">
                            <div class="t1" v-if="item.t1 && item.t1.length > 0">
                                <span
                                    v-for="(nameItem, nameIndex) in item.t1"
                                    :key="`t1-${nameIndex}`"
                                >{{nameItem}}</span>
                            </div>
                            <div class="t2" v-if="item.t2 && item.t2.length > 0">
                                <span
                                    v-for="(nameItem, nameIndex) in item.t2"
                                    :key="`t2-${nameIndex}`"
                                >{{nameItem}}</span>
                            </div>
                            <div class="abst" v-if="item.abst" v-html="item.abst"></div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <EleBreadcrumb
                :navigate="navi"
            ></EleBreadcrumb>
        </template>
    </LayoutsDefault>
</template>

<script setup>
    import { productsCate1} from "@/mock/products";
    const appConfig = useAppConfig()
    const runtimeConfig = useRuntimeConfig()
    const navi = ref([
        {
            name: '产品',
            link: '/products'
        },
        {
            name: '信号采集模块',
            link: ''
        }
    ])
    const bannerSlides = ref(appConfig.clientConfig.productBanner)
    const route = useRoute()
    const uuid = route.params.uuid
    const cateDetail = ref({})
    const detail = ref({})
    const cover = ref([])



    onMounted(() => {

    })
</script>

<style scoped lang="scss">
    .main {
        padding: fluid(94px) 0 fluid(220px);
        @include tab { padding-top: 56px; }
        @include mo { padding-top: 36px; }
        background: #F4F4F4;;
    }
    .abst {
        width: 100%;
        max-width: 800px;
        margin-top: fluid(24px);
        color: #666;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 25.2px */
        letter-spacing: -0.36px;
    }
    .m1, .m2 {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .left,
        .right {
            width: 47%;

        }
    }
    .m1 {
        margin-top: fluid(100px);
        .left {
            height: 462px;
            position: relative;
            border-radius: 12px;
            border: 1px solid #E2E2E2;
            background: lightgray 119px 127.949px / 61.489% 44.611% no-repeat, #FFF;
            background-blend-mode: multiply, normal;
            overflow: hidden;
            .big {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
            }
            .thumb {
                width: 100%;
                position: absolute;
                bottom: 0;
                left: 0;
                background-color: rgba(255, 255, 255, .3);
                backdrop-filter: blur(10px);
                height: 100px;
                .swiper {
                    width: 100%;
                    height: inherit;
                }
                .swiper-slide {
                    padding: 7px;
                    .cover {
                        width: 100%;
                        height: 100%;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                        border-radius: 12px;
                        border: 1px solid #cccccc;
                        transition: all .3s;
                    }
                    &:hover, &.active {
                        .cover {
                            border: 1px solid var(--BASE_COLOR_RED);
                            box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);
                        }
                    }
                }
            }
        }
        .right {
            .t1 {
                margin-top: fluid(24px);
                color: var(--BASE_COLOR_RED);
                /* Display sm/Semibold */
                font-family: Inter;
                font-size: fluid(30px);
                font-style: normal;
                font-weight: 600;
                line-height: 38px; /* 126.667% */
            }
            .t2 {
                margin-top: 16px;
                color: #666;

                /* Text lg/Normal */
                font-family: Inter;
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: 28px; /* 155.556% */
            }
            .plist {
                margin-top: fluid(32px);
                .item {
                    gap: 12px;
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: flex-start;
                    align-items: center;
                    .icon {
                    }
                }
            }
            .get-quote {
                margin-top: fluid(38px);
            }
        }
        .xp {
            display: flex;
            width: 48px;
            height: 48px;
            /*padding: 12px;*/
            justify-content: center;
            align-items: center;
            border-radius: 28px;
            border: 8px solid var(--gray-50, #F9FAFB);
            background: var(--gray-100, #F2F4F7);
        }
    }

    .m2 {
        margin-top: fluid(110px);
        .left,
        .right {

        }
        .left {
            .tool {
                display: flex;
                justify-content: flex-start;
                gap: fluid(48px);
                .item {
                    cursor: pointer;
                }
            }
            .list {
                margin-top: fluid(40px);
                border-radius: 8px;
                border: 1px solid var(--gray-200, #EAECF0);
                background: var(--base-white, #FFF);
                /* Shadow/sm */
                box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10);
                .row {
                    /*min-height: 50px;*/
                    border-bottom: 1px solid var(--gray-200, #EAECF0);
                    .col {
                        padding: 12px 24px;
                    }
                    .param {
                        color: var(--gray-900, #101828);

                        /* Text sm/Medium */
                        font-family: Inter;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 20px; /* 142.857% */
                        /*display: flex;*/
                        /*align-items: center;*/
                    }

                    .value {
                        color: var(--gray-500, #667085);

                        /* Text sm/Normal */
                        font-family: Inter;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 20px; /* 142.857% */
                    }

                    &.head {
                        .param {
                            color: var(--gray-500, #667085);

                            /* Text xs/Medium */
                            font-family: Inter;
                            font-size: 12px;
                            font-style: normal;
                            font-weight: 500;
                            line-height: 18px; /* 150% */
                        }

                        .value {
                            color: var(--gray-500, #667085);
                            font-family: Inter;
                            font-size: 12px;
                            font-style: normal;
                            font-weight: 500;
                            line-height: normal;
                        }
                    }
                }
            }
        }
    }

    .label-title {
        height: 27px;
        color: var(--BASE_COLOR_RED);
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.36px;
        position: relative;
        display: inline-block;
        transition: all .3s;
        &:hover {
            border-bottom: var(--BASE_COLOR_RED) 1px solid;
        }
        &.active {
            border-bottom: var(--BASE_COLOR_RED) 1px solid;
            &::after {
                content: '';
                height: 3px;
                width: 30px;
                position: absolute;
                bottom: -2px;
                left: 0;
                background-color: var(--BASE_COLOR_RED);
            }
        }
    }

    .cover-enter-active {
        transition: all 0.3s .2s ease;
    }
    .cover-leave-active {
        transition: all 0.3s ease;
    }

    .cover-enter-from {
        opacity: 0;
        transform: translateX(-50px) scale(0.8);
    }
    .cover-leave-to {
        opacity: 0;
        transform: translateX(100px) scale(0.9);
    }
</style>
