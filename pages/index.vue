<template>
    <main>
        <ClientOnly>
            <Swiper
                class="main-banner"
                :modules="[SwiperAutoplay, SwiperPagination]"
                :pagination="bannerConfig"
                :slides-per-view="1"
                :space-between="'0'"
                :speed="600"
                :autoplay="{
                      delay: 12000,
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
                    <video class="cover" muted loop autoplay playsinline v-if="item.cover[0] && videoTester(item.cover[0])">
                        <source
                            v-for="(videoItem, videoIndex) in item.cover"
                            :key="`videoIndex${videoIndex}`"
                            :src="videoItem"
                        ></source>
                    </video>
                    <div class="cover" :style="{backgroundImage: `url(${item.cover[0]})`}" v-else></div>
                    <div class="cover-m" :style="{backgroundImage: `url(${item.cover[1]})`}" v-else></div>
                    <div class="mask">
                        <div class="rect-1"></div>
                        <div class="rect-2"></div>
                    </div>
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
                            <div class="t2m" v-if="item.t2m && item.t2m.length > 0">
                                <span
                                    v-for="(nameItem, nameIndex) in item.t2m"
                                    :key="`t2m-${nameIndex}`"
                                >{{nameItem}}</span>
                            </div>
                            <div class="prd-abst" v-if="item.abst && item.abst.length > 0">
                                    <span
                                        v-for="(abstItem, abstIndex) in item.abst"
                                        :key="`asbtItem${abstIndex}`"
                                    >{{abstItem}}</span>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </ClientOnly>

        <section class="s1">
            <div class="right">
                <div class="bg"></div>
            </div>
            <div class="wrap">
                <div class="left">
                    <div class="s-t">
                        关于澳弘
                    </div>
                    <div class="t2">澳弘电子是专业的PCB研发和生产企业，2020年在上交所挂牌上市。</div>
                    <div class="abst">
                        <p class="s-a">产品应用于消费办公、汽车电子、电源能源、工控医疗、AI算力、卫星互联网、通讯安防等领域。服务于全球20多个国家和地区的品牌客户。</p>
                        <p class="s-a">我们的使命是“承载数字科技，赋能智慧生活”。</p>
                    </div>
                    <NuxtLink class="_btn" to="/about">
                        <div class="_str">查看更多</div>
                        <div class="_icon ri-arrow-right-line"></div>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <EleProfileData class="el-profile-data"></EleProfileData>

        <section class="s2">
            <div class="bg">
                <img src="/images/home/application_bg.jpg" alt="">
            </div>
            <div class="wrap">
                <div class="s-t">行业应用</div>
                <div class="s-a">
                    <span>澳弘电子持续创新，我们研发的PCB产品，适用于多领域多场景的应用需求。</span>
                </div>
                <div class="sc">
                    <span class="sc-for">为</span>
                    <div class="sc-slot">
                        <Transition name="sc-slide" mode="out-in">
                            <div class="sc-pair" :key="'subject-' + currentScIndex">
                                <div class="sc-icon-wrap"><i :class="scItems[currentScIndex].subjectIcon"></i></div>
                                <b>{{ scItems[currentScIndex].subject }}</b>
                            </div>
                        </Transition>
                    </div>
                    <span class="sc-provide">提供</span>
                    <div class="sc-slot">
                        <Transition name="sc-slide" mode="out-in">
                            <div class="sc-pair" :key="'way-' + currentScIndex">
                                <div class="sc-icon-wrap"><i :class="scItems[currentScIndex].wayIcon"></i></div>
                                <b>{{ scItems[currentScIndex].way }}</b>
                            </div>
                        </Transition>
                    </div>
                </div>
            </div>
        </section>

        <section class="s3" ref="elS3">
            <div class="item"
                 v-for="(item, index) in indexApplication"
                 :key="`app-${index}`"
                 ref="elApplication"
            >
                <div class="wrap">
                    <div class="left">
                        <i :class="['icon', item.iconClass]"></i>
                        <div class="cont">
                            <div class="name">{{item.name}}</div>
                            <div class="region">
                                <div class="leb">产品应用于：</div>
                                <div class="c">{{item.region}}</div>
                            </div>
                        </div>
                        <div class="l"></div>
                    </div>
                    <div class="right">
                        <img :src="item.cover" alt="">
                    </div>
                </div>
            </div>
        </section>

        <section class="s4">
            <div class="wrap">
                <div class="s-t">新闻中心</div>
                <div class="s-a">
                    <span>跟踪澳弘电子的最新动态，探索科技创新与行业发展新机遇</span>
                </div>
                <div class="loading" v-if="loadingNews">加载中...</div>
                <EleNewsList v-else class="news-list" :news-list="newsList"></EleNewsList>
                <div class="tools">
                    <NuxtLink class="_btn" to="/news">
                        <div class="_str">浏览所有新闻</div>
                        <div class="_icon ri-arrow-right-line"></div>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <section class="s5">
            <div class="bg">
                <img src="/images/home/global-service.jpg" alt="">
            </div>
            <div
                class="point-layer"
                :class="{active: statusPointLayer}"
                ref="elPointsLayer">
                <div
                    class="item"
                    :class="[item.type]"
                    v-for="(item, index) in gloPointsForHome"
                    :key="index"
                    :style="{
                            left: item.position?.left || 0,
                            top: item.position?.top || 0
                        }"
                >
                    <div class="dot"></div>
                    <div class="cont-container">
                        <div class="name">{{ item.name }}</div>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.284 17.3647L12.9131 23.7256L6.54222 17.3547C3.02173 13.8342 3.02173 8.1334 6.54222 4.62291C10.0527 1.10242 15.7535 1.10242 19.264 4.62191C22.7745 8.1324 22.7745 13.8332 19.264 17.3437L19.284 17.3647ZM11.913 9.99366H8.91255V11.9939H11.913V14.9944H13.9132V11.9939H16.9137V9.99366H13.9132V6.99324H11.913V9.99366Z" fill="#FF6400"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="main">
                <div class="s-t">我们的全球服务</div>
                <div class="s-a">澳弘电子与全球领先企业深度合作，推动科技创新与行业发展</div>
            </div>
            <div class="legend">
                <div class="item">
                    <div class="circle customer"></div>
                    <div class="type-name">客户</div>
                </div>
                <div class="item">
                    <div class="circle sale"></div>
                    <div class="type-name">海外销售</div>
                </div>
                <div class="item">
                    <div class="circle base"></div>
                    <div class="type-name">生产基地</div>
                </div>
            </div>
        </section>
    </main>
</template>


<script setup>
import useEventStore from "@/stores/event";

import { useStatusStore} from "@/stores/status";
import { productsCate1} from "@/mock/products";
import BlurText from "@/components/motion/BlurText.vue";
import {setPageLayout} from "#app";

const eventStore = useEventStore()
const {throttle} = useCommon()

definePageMeta({
    layout: 'home',
})
// definePageMeta({
//     layout: 'home'
// })

const handleAnimationComplete = () => {
    console.log('All animations complete!')
}

const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()

const bannerSlides = ref(appConfig.clientConfig.indexBanner)
const indexApplication = ref(appConfig.clientConfig.indexApplication)

const scItems = [
    { subject: '智慧生活', subjectIcon: 'ri-home-3-line', way: '便利的方式', wayIcon: 'ri-lightbulb-line' },
    { subject: '大众出行', subjectIcon: 'ri-car-line', way: '安全的保障', wayIcon: 'ri-shield-line' },
    { subject: '能源管理', subjectIcon: 'ri-flashlight-line', way: '稳定的动力', wayIcon: 'ri-battery-charge-line' },
    { subject: '现代制造', subjectIcon: 'ri-tools-line', way: '可靠的控制', wayIcon: 'ri-settings-line' },
    { subject: '智能科技', subjectIcon: 'ri-cpu-line', way: '智慧的互联', wayIcon: 'ri-global-line' },
]
const currentScIndex = ref(0)
let scTimer = null
const newsList = ref([])
const loadingNews = ref(false)

const bannerConfig = ref({
    clickable: true,
    renderBullet: function (index, className) {
        return `<div class="${className} banner-pagination"><div class="proc"></div></div>`;
    },
})

// 获取推荐新闻数据
async function getRecommendNews() {
    loadingNews.value = true
    try {
        const { data } = await useFetch(appConfig.api('/post/recommend'), {
            params: { num: 3 }
        })
        
        if (data.value?.code === 0) {
            newsList.value = data.value.recommend || []
        }
    } catch (error) {
        console.error('获取推荐新闻失败:', error)
    } finally {
        loadingNews.value = false
    }
}

function videoTester(url) {
    return /.(mp4|webm)$/.test(url)
}

/***application start***/
const docScrollTop = computed(() => eventStore.docScrollTop)
const windowHeight = computed(() => eventStore.windowHeight)
const windowWidth = computed(() => eventStore.windowWidth)
const elApplication = ref(null)
const elS3 = ref(null)
let headerHeight, s3Height, s3Top, s3Bottom, itemLength, lastChildHeight, step
// 这个函数通过s3元素的定位确定各元素的fixed状态，具体样式有css样式表定义
function updateApplicationItem() {
    const { top: s3Top, bottom: s3Bottom } = elS3.value.getBoundingClientRect()
    /**
     * 从top高度为headerHeight开始为0，top-headerHeight为0时为起点
     * 取反-(top-headerHeight) = headerHeight - top
     * 为正时，向上取整则是满足fixed的元素的数量
     */
    const delta = headerHeight - s3Top + 50 // 100是为了提前触发fixed状态,因为scrollTop做了节流，响应较慢
    // console.log('s3Bottom', s3Bottom, 'windowHeight', windowHeight)
    if (s3Bottom <  windowHeight.value) {
        // s3底部已超过窗口底部，所有元素都固定
        elApplication.value.forEach((item, index) => {
            item.classList.remove('fixed-sticky')
            item.classList.add('absolute-sticky')
        })
    } else if(delta < 0) {
        // s3尚未接触到header底部
        elApplication.value.forEach((item, index) => {
            item.classList.remove('fixed-sticky')
            item.classList.remove('absolute-sticky')
        })
    } else {
        const length = Math.floor(delta / (lastChildHeight - step))
        elApplication.value.forEach((item, index) => {
            item.classList.remove('absolute-sticky')
            if (index <= length) {
                item.classList.add('fixed-sticky')
            } else {
                item.classList.remove('fixed-sticky')
            }
        })
    }
}
// 滚动，宽度高度变化时需要进行刷新(这里选择仅仅滚动时刷新）
watch(docScrollTop, (newScrollTop) => {
    updateApplicationItem()
})

// 宽度高度变化时重置参数
watch(windowHeight, (newWindowHeight) => {
    initApplicationItem()
})
watch(windowWidth, (newWindowHeight) => {
    initApplicationItem()
})

// 固定s3高度， 防止子元素设置fixed时布局混乱
function initApplicationItem() {
    headerHeight = windowWidth.value > 992 ? 92 : 70
    const { height: s3Height } = elS3.value.getBoundingClientRect()
    const itemLength = elApplication.value.length
    lastChildHeight = elApplication.value[itemLength - 1].getBoundingClientRect().height
    // 确定步长
    step = (windowHeight.value - headerHeight - lastChildHeight) / (itemLength - 1)
    // console.log('s3Height', s3Height, 'step', step, 'windowHeight', windowHeight.value)
    elS3.value.style.height = `${s3Height}px`
}

/***application end*****/

/******glonet******/
const elPointsLayer = ref(null)
const statusPointLayer = ref(false)
const gloPointsForHome = computed(() => {
    // 进行偏移计算
    const  { gloPoints }  = appConfig.clientConfig || {}
    const res = []
    gloPoints.forEach(item => {
        const copy = JSON.parse(JSON.stringify(item))
        const {left, top} = copy?.position || {}
        // let le = parseFloat(left.replace('%', ''));
        let to = (parseFloat(top.replace('%', ''))-14.5).toFixed(3);
        copy.position.top = `${to}%`
        res.push(copy)
    })
    return res
})
let glonetObserver = null
function initGlonetObserver() {
    // if (glonetObserver) return
    glonetObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const { intersectionRatio, isIntersecting } = entry
            // console.log('statusPointLayer', statusPointLayer.value)
            // console.log('intersectionRatio', intersectionRatio)
            // if (statusPointLayer.value) {
            //     // 已经激活
            //     if (intersectionRatio < 0.3) {
            //         // 小余0.3时，关闭
            //         statusPointLayer.value = false
            //     }
            // } else {
            //     if (intersectionRatio > 0.7) {
            //         // 大于0.7时，激活
            //         statusPointLayer.value = true
            //     }
            // }
            if (isIntersecting) {
                statusPointLayer.value = true
            } else {
                statusPointLayer.value = false
            }
        })
    }, {
        threshold: 0.3
    })
    glonetObserver.observe(elPointsLayer.value)
}
// 全局服务点位置调整
const { gloPoints } = appConfig.clientConfig
function convert() {
    const res = []
    for (let i = 0; i < gloPoints.length; i++) {
        const item = gloPoints[i]
        let top = parseFloat(item.position.top)
        item.position.top = (top - 14.5).toFixed(3) + '%'
        res.push(item)
    }
    console.log(JSON.stringify(res))
    return res;
}

getRecommendNews()

onMounted(() => {
    setTimeout(() => {
        initApplicationItem()
        initGlonetObserver()
        // convert()
    }, 1000)
    scTimer = setInterval(() => {
        currentScIndex.value = (currentScIndex.value + 1) % scItems.length
    }, 1800)
})
onUnmounted(() => {
    if (elPointsLayer.value) {
        glonetObserver?.unobserve(elPointsLayer.value)
    }
    if (scTimer) clearInterval(scTimer)
})

</script>

<style lang="scss">
.swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
    width: calc(100% - 80px * 2);
    left: 80px;
    bottom: 65px;
    height: 6px;
    text-align: left;
    @include full {
        width: calc(100% - 20px * 2);
        left: 20px;
    }
    @include mo {
        bottom: 62px;
        padding-left: 24px;
        text-align: left;
    }
}

.banner-pagination {
    &.swiper-pagination-bullet {
        width: 8px !important;
        height: 8px;
        background-color: white;
        border-radius: 8px;
        margin: 0 10px;
        transition: all .3s;
        opacity: 1;
        overflow: hidden;
        .proc {
            width: 0;
            height: inherit;
            position: absolute;
            left: 0;
            top: 0;
            border-radius: 8px;
            background-color: var(--main-orange);
            transition: all .3s;
        }
    }
    &.swiper-pagination-bullet-active {
        width: 87px !important;
        @include mo {
            width: 120px !important;
        }
        .proc {
            width: 100%;
            transition: 12s all linear;
        }
    }
}
.main-banner {
    .swiper-slide {
        .info .cont {
            .abst {
                span {
                    display: block;
                }
                b {
                    font-weight: 700;
                }
            }
        }
        .prd-abst {
            span {
                font-size: 38px;
                font-weight: 900;
                margin-right: 3px;
                @include mo {
                    font-size: 28px;
                }
            }
        }
        .blur-text {
            font-size: 38px;
            font-weight: 900;
            color: white;
        }

    }

}
.s3 {
    .item {
        &.fixed-sticky,
        &.absolute-sticky {
            .left {
                border-right: 1px solid white !important;
                .icon {
                    color: white !important;
                }
                .cont {
                    .name,
                    .region {
                        color: white !important;
                    }
                }
                &::after {
                    background-color: white !important;
                }
            }
        }
    }
}
</style>

<style scoped lang="scss">
.line-1 {
    width: 100%;
    height: 1px;
}
.main-banner {
    width: 100%;
    height: 100vh;
    background: whitesmoke;
    @include mo {
        height: calc(100vh - var(--HEADER_HEIGHT_MOB));
    }
    .banner-prev, .banner-next {
        width: 72px;
        height: 72px;
        border-radius: 72px;
        border: var(--main-blue) 1px solid;
        background-color: rgba(255, 255, 255, .2);
        transition: all .3s;
        cursor: pointer;
        backdrop-filter: blur(1px);
        position: absolute;
        top: 50%;
        margin-top: -36px;
        z-index: 9;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        .icon {
            font-size: 36px;
            color: var(--main-blue);
        }
        &:hover {
            background-color: rgba(255, 255, 255, .7);
        }
        @include mo {
            display: none;
        }
    }
    .banner-prev {
        left: 75px;
        @include lap {
            left: tovw(48px);
        }
    }
    .banner-next {
        right: 75px;
        @include lap {
            right: tovw(48px);
        }
    }
    .swiper-slide {
        width: 100%;
        height: inherit;
        .cover,
        .cover-m{
            width: 100%;
            height: inherit;
            position: absolute;
            inset: 0;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            object-fit: cover;
        }
        .cover {
            @include mo {
                display: none;
            }
        }
        .cover-m {
            display: none;
            @include mo {
                display: block;
            }
        }
        .mask {
            position: absolute;
            inset: 0;
            background: rgba(0,0,0,.4);
            .rect-1 {
                width: calc(100vw - 170px);
                height: calc(100vh - 170px);
                border-radius: 0 0 40px 0;
                position: absolute;
                left: 0;
                top: 0;
                border-right: 1px solid rgba(255, 255, 255, .5);
                border-bottom: 1px solid rgba(255, 255, 255, .5);
                transform: translate(-50px, -50px);
                opacity: 0;
                transition: transform 2s ease-in-out, opacity .3s ease-in-out;
            }
            .rect-2 {
                width: 150px;
                height: 150px;
                border-radius: 40px 0 0 0;
                position: absolute;
                right: 0;
                bottom: 0;
                border-left: 1px solid rgba(255, 255, 255, .6);
                border-top: 1px solid rgba(255, 255, 255, .6);
                transform: translate(50px, 50px);
                opacity: 0;
                transition: transform 2s ease-in-out, opacity .3s ease-in-out;
            }
        }
        .info {
            height: inherit;
            @include flex-c();
            justify-content: center;
            align-items: flex-start;
            @include lap {
                width: calc(100% - 240px);
            }
            @include mo {
                justify-content: flex-end;
                width: calc(100% - 48px);
            }
            .cont {
                height: auto;
                padding: 30px 0;
                @include flex-c();
                transform: translateY(-20px);
                opacity: 0;
                transition: all .5s 1s ease-in-out;
                .icon1,
                .icon2 {
                    position: absolute;
                }
                .icon1 {
                    left: 0;
                    top: 0;
                }
                .icon2 {
                    right: 0;
                    bottom: 0;
                }
                .t1,
                .t2,
                .t2m {
                    line-height: 1;
                    color: white;
                }
                .t1 {
                    font-size: 36px;
                    font-weight: 300;
                    @include mo {
                        font-size: 26px;
                        font-weight: bold;
                    }
                }
                .t2,
                .t2m {
                    font-size: 36px;
                    font-weight: 700;
                    @include mo {
                        font-size: 20px;
                    }
                }
                .t2m {
                    margin-top: 6px;
                    span {
                        display: block;
                    }
                }
                .prd-abst {
                    margin-top: 12px;
                    color: white;
                    max-width: 740px;
                    span {
                        font-size: 30px;
                        font-family: TTFors;
                        font-weight: 400;
                    }
                }
                @include mo {
                    padding: 0;
                    .prd-abst {
                        margin-top: 0px;
                    }
                }

            }
            .more {
                margin-top: 30px;
                @include mo {
                    margin-bottom: 100px;
                }
                cursor: pointer;
                display: block;
                transform: translateY(-20px);
                opacity: 0;
                transition: all .5s 1.2s ease-in-out;
            }
            &.left {
                align-items: flex-start;
            }
            &.right {
                align-items: flex-end;
                .cont {
                    .t1,
                    .t2,
                    .t2m,
                    .abst {
                        text-align: right;
                    }
                    .t2m {
                        display: none;
                    }
                }
                @include mo {
                    align-items: flex-start;
                    .cont {
                        .t1,
                        .t2,
                        .t2m,
                        .abst {
                            text-align: left;
                        }
                        .t1 {
                            font-size: 26px;
                        }
                        .t2 {
                            display: none;
                        }
                        .t2m {
                            display: block;
                            font-size: 20px;
                        }
                    }
                }
            }
            &.heavy {
                .cont {
                    .t1 {
                        font-size: 60px;
                    }
                }
            }
        }
        &.swiper-slide-active {
            .mask {
                .rect-1,
                .rect-2 {
                    opacity: 1;
                    transform: translate(0px, 0px);
                }
            }
            .info {
                .cont {
                    transform: translateY(0px);
                    opacity: 1;
                }
                .more {
                    transform: translateY(0px);
                    opacity: 1;
                }
            }
        }
    }
}

.s1 {
    position: relative;
    .wrap {
        min-height: 514px;
    }
    .left {
        width: 575px;
        padding: 83px 0 35px 0;
    }
    .t2 {
        color: var(--main-blue, #1E3296);
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 130%;
        margin-top: tovw(48px);
    }
    .abst {
        p {
            margin-top: tovw(32px);
        }
    }
    ._btn {
        margin-top: tovw(48px);
    }
    .right {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 45%;
        min-width: 500px;
        .bg {
            position: absolute;
            inset: 0;
            background: url("/images/home/about-bg.jpg") no-repeat center / cover;
            border-radius:  0 0 0 40px;
            overflow: hidden;
        }
    }
}

.el-profile-data {
    margin: 120px 0 0;
}

.s2 {
    margin-top: 100px;
    padding: tovw(120px) 0;
    position: relative;
    .bg {
        position: absolute;
        inset: 0;
        overflow: hidden;
        img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center bottom;
        }
    }
    .wrap {

    }
    .s-a {
        margin-top: 12px;
    }
    .sc {
        margin-top: 32px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        .sc-for,
        .sc-provide {
            font-size: 30px;
            color: var(--main-dark-gray);
            flex-shrink: 0;
        }
        .sc-slot {
            margin-left: 12px;
            display: inline-flex;
            align-items: center;
            min-width: 210px;
        }
        .sc-provide {
            margin-left: 16px;
        }
        .sc-pair {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            gap: 10px;
        }
        .sc-icon-wrap {
            width: 34px;
            height: 34px;
            background: var(--main-orange);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 18px;
            flex-shrink: 0;
        }
        b {
            font-size: 32px;
            font-weight: 700;
            color: var(--main-blue);
        }
    }
    .sc-slide-enter-active,
    .sc-slide-leave-active {
        transition: all 0.35s ease;
    }
    .sc-slide-enter-from {
        opacity: 0;
        transform: translateY(16px);
    }
    .sc-slide-leave-to {
        opacity: 0;
        transform: translateY(-16px);
    }
    @include mo {
        //background: url("/images/home/solu-bg.jpg") no-repeat center / cover;
    }
}

.s3 {
    position: relative;
    $itemHeight: 320px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    .item {
        height: $itemHeight;
        width: 100%;
        padding: 40px 0;
        background-color: white;
        transition: all .3s;
        .wrap {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: flex-start;
        }
        .left {
            width: 700px;
            height: 180px;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: flex-start;
            border-right: 1px solid var(--main-orange);
            transition: all .3s;
            .icon {
                font-size: 40px;
                color: var(--main-orange);
                transition: color .3s;
                line-height: 1;
                flex-shrink: 0;
            }
            .cont {
                //flex: none;
                width: 460px;
                height: inherit;
                margin-left: 20px;
                display: flex;
                flex-flow: column nowrap;
                justify-content: space-between;
                .name {
                    color: var(--main-blue, #1E3296);
                    font-size: 32px;
                    font-weight: 700;
                    transition: color .3s;
                }
                .region {
                    font-size: 18px;
                    line-height: 1.5;
                    color: #000;
                    transition: color .3s;
                    .c {
                        margin-top: 9px;
                        font-weight: 700;
                    }
                }
            }
            &::after {
                content: '';
                display: block;
                width: 5px;
                height: 5px;
                border-radius: 5px;
                background-color: var(--main-orange);
                position: absolute;
                top: -3px;
                right: -3px;
                transition: background-color .3s;
            }
        }
        .right {
            width: auto;
            height: auto;
            border-radius: 10px;
            overflow: hidden;
            img {
                height: auto;
                width: 440px;
            }
        }
        @for $i from 1 through 7 {
            $header_height: var(--HEADER_HEIGHT);
            position: relative;
            //&:nth-child(#{$i}) {
            //    top: 0;
            //}
            &.fixed-sticky:nth-child(#{$i}) {
                background-color: lighten(#1E3296, 5% * $i);
                position: fixed;
                left: 0;
                top: calc(#{$header_height} + (#{$i} - 1) * (100vh - #{$header_height} - #{$itemHeight}) / 6);
            }
            &.absolute-sticky:nth-child(#{$i}) {
                background-color: lighten(#1E3296, 5% * $i);
                position: absolute;
                left: 0;
                top: unset;
                bottom: calc((7 - #{$i}) * (100vh - #{$header_height} - #{$itemHeight}) / 6);
            }
        }
    }
}

.s4 {
    padding: tovw(80px) 0 tovw(160px);
    .wrap {

    }
    .s-t,
    .s-a {
        text-align: center;
    }
    .news-list {
        margin-top: tovw(80px);
        padding-top: 1px;
    }
    .tools {
        margin-top: tovw(80px);
        text-align: center;
    }
}

.s5 {
    width: 100%;
    height: auto;
    position: relative;
    .bg {
        width: 100%;
        height: auto;
        //max-height: calc(100vh - var(--HEADER_HEIGHT));
        img {
            width: 100%;
            height: auto;
            //max-height: inherit;
            //object-fit: cover;
        }
    }
    .point-layer {
        position: absolute;
        inset: 0;
        .item {
            width: 1px;
            height: 1px;
            position: absolute;
            &:hover {
                z-index: 9;
            }
            &.orange {
                .dot {
                    background-color: var(--main-orange);
                }
                svg {
                    path {
                        fill: var(--main-orange);
                    }
                }

            }
            &.yellow {
                .dot {
                    background-color: var(--main-yellow);
                }
                svg {
                    path {
                        fill: var(--main-yellow);
                    }
                }
            }
            &.blue {
                .dot {
                    background-color: var(--main-blue);
                }
                svg {
                    path {
                        fill: var(--main-blue);
                    }
                }
            }
        }
        &.active {
            .dot {
                transform: scale(1);
            }
            .cont-container {
                opacity: 1;
                transform: translateY(0);
            }
        }
        @for $i from 1 through 30 {
            .item:nth-child(#{$i}) {
                .dot,
                .cont-container {
                    transition: all .3s 0.05s * $i
                }
            }
        }
        .dot {
            width: 4px;
            height: 4px;
            border-radius: 4px;
            position: absolute;
            left: -2px;
            top: -2px;
            transform: scale(0);
        }
        .cont-container {
            position: absolute;
            left: -13px;
            top: -28px;
            opacity: 0;
            transform: translateY(-20px);
            .name {
                position: absolute;
                width: 102px;
                height: 33px;
                border: 1px solid var(--main-light-gray);
                border-radius: 6px;
                text-align: center;
                line-height: 31px;
                font-size: 16px;
                left: 50%;
                transform: translateX(-50%) translateY(-10px);
                top: -35px;
                background-color: rgba(255, 255, 255, .4);
                backdrop-filter: blur(3px);
                opacity: 0;
                visibility: hidden;
                transition: all .3s;
            }
            &:hover {
                cursor: pointer;
                .name {
                    visibility: visible;
                    opacity: 1;
                    transform: translateX(-50%) translateY(0px);
                }
            }
        }

    }
    .main {
        width: 100%;
        height: auto;
        position: absolute;
        top: tovw(100px);
        left: 0;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
    }
    .legend {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 48px;
        z-index: 10;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.18);
        border-radius: 40px;
        padding: 10px 6px;
        .item {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 0 20px;
            border-right: 1px solid rgba(255, 255, 255, 0.15);
            &:last-child {
                border-right: none;
            }
            .circle {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                margin-right: 8px;
                flex-shrink: 0;
                &.customer {
                    background-color: var(--main-orange);
                }
                &.sale {
                    background-color: var(--main-blue);
                }
                &.base {
                    background-color: var(--main-yellow);
                }
            }
            .type-name {
                font-size: 14px;
                color: rgba(255, 255, 255, 0.9);
                font-weight: 500;
                white-space: nowrap;
            }
        }
    }
}


</style>


