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

        <section class="s5" ref="elS5Section">
            <div class="s5-bg"></div>
            <div class="s5-header">
                <div class="s5-title">我们的全球服务</div>
                <div class="s5-desc">澳弘电子与全球领先企业深度合作，推动科技创新与行业发展</div>
            </div>
            <div class="s5-map-wrap">
                <div class="s5-map-zoom">
                <img src="/images/home/world-map.svg" class="s5-map-img" alt="world map" />
                <svg
                    class="s5-markers-svg"
                    viewBox="0 0 800 450"
                    preserveAspectRatio="xMidYMid meet"
                    @mouseleave="onMarkerLeave"
                >
                    <!-- 全区域事件捕获层 -->
                    <rect x="0" y="0" width="800" height="450" fill="transparent" style="pointer-events:all" />
                    <template v-for="(marker, idx) in filteredMarkers" :key="marker.name + marker.type">
                        <g
                            class="s5-marker-g"
                            @mouseenter="onMarkerEnter(marker)"
                            @mouseleave="onMarkerLeave"
                            @click.stop="onMarkerClick(marker)"
                        >
                            <!-- 动态脉冲光晕（空心描边，CSS r动画） — 仅 active 时显示 -->
                            <circle
                                v-if="isMarkerActive(marker)"
                                :cx="marker.x" :cy="marker.y"
                                :r="getMarkerSize(marker.type) * 1.8"
                                fill="none"
                                :stroke="markerColors[marker.type]"
                                stroke-width="2"
                                opacity="0.4"
                                class="s5-pulse-circle"
                            />
                            <!-- 静态次光晕（空心描边，固定大小） — 仅 active 时显示 -->
                            <circle
                                v-if="isMarkerActive(marker)"
                                :cx="marker.x" :cy="marker.y"
                                :r="getMarkerSize(marker.type) * 1.4"
                                fill="none"
                                :stroke="markerColors[marker.type]"
                                stroke-width="1.5"
                                opacity="0.6"
                            />
                            <!-- 主标记点：hover时r放大+strokeWidth增加+glow -->
                            <circle
                                :cx="marker.x" :cy="marker.y"
                                :r="isMarkerActive(marker) ? getMarkerSize(marker.type) * 1.4 : getMarkerSize(marker.type)"
                                :fill="markerColors[marker.type]"
                                stroke="white"
                                :stroke-width="isMarkerActive(marker) ? 2 : 1.5"
                                class="marker-dot"
                                :class="{ 'marker-visible': statusS5 }"
                                :style="{
                                    transitionDelay: isMarkerActive(marker) ? '0ms' : `${idx * 40}ms`,
                                    filter: isMarkerActive(marker)
                                        ? `drop-shadow(0 0 8px ${markerColors[marker.type]})`
                                        : 'drop-shadow(0 1px 2px rgba(0,0,0,0.15))',
                                }"
                            />
                        </g>
                    </template>
                </svg>
                </div><!-- /s5-map-zoom -->
                <!-- HTML tooltip：固定于标记点正上方，带底部三角箭头 -->
                <div
                    v-if="hoveredMarker"
                    class="s5-tooltip-div"
                    :style="{ left: tooltipScreenPos.x + 'px', top: tooltipScreenPos.y + 'px' }"
                >{{ hoveredMarker.name }}</div>
            </div>
            <div class="s5-bottom">
                <div class="s5-filters">
                    <button class="s5-fbtn" :class="{ active: activeFilter === 'all' }" @click="activeFilter = 'all'">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z"/></svg>
                        <span class="s5-flabel">全部</span>
                        <span class="s5-fcount">33</span>
                    </button>
                    <button v-for="cat in filterCategories" :key="cat.type" class="s5-fbtn" :class="{ active: activeFilter === cat.type }" @click="activeFilter = cat.type">
                        <span class="s5-fdot" :style="{ backgroundColor: cat.color, boxShadow: `0 0 8px ${cat.color}50` }"></span>
                        <span class="s5-flabel">{{ cat.label }}</span>
                        <span class="s5-fcount">{{ cat.count }}</span>
                    </button>
                </div>
                <div class="s5-stats">
                    <div class="s5-stat" v-for="stat in statsCards" :key="stat.label">
                        <div class="s5-stat-num" :style="{ color: stat.color }">{{ stat.value }}</div>
                        <div class="s5-stat-txt">{{ stat.label }}</div>
                    </div>
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
    { subject: '智慧生活', subjectIcon: 'ri-lightbulb-flash-line', way: '便利的方式', wayIcon: 'ri-timer-flash-line' },
    { subject: '大众出行', subjectIcon: 'ri-route-line', way: '安全的保障', wayIcon: 'ri-shield-keyhole-line' },
    { subject: '能源管理', subjectIcon: 'ri-battery-2-charge-line', way: '稳定的动力', wayIcon: 'ri-pulse-ai-line' },
    { subject: '现代制造', subjectIcon: 'ri-settings-5-line', way: '可靠的控制', wayIcon: 'ri-fingerprint-line' },
    { subject: '智能科技', subjectIcon: 'ri-cpu-line', way: '智慧的互联', wayIcon: 'ri-link-m' },
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
let headerHeight, s3Height, itemLength, lastChildHeight, step

function updateApplicationItem() {
    const { top: s3Top, bottom: s3Bottom } = elS3.value.getBoundingClientRect()
    const delta = headerHeight - s3Top
    if (s3Bottom < windowHeight.value) {
        elApplication.value.forEach((item) => {
            item.classList.remove('fixed-sticky')
            item.classList.add('absolute-sticky')
        })
    } else if (delta < 0) {
        elApplication.value.forEach((item) => {
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

watch(windowHeight, initApplicationItem)
watch(windowWidth, initApplicationItem)

// 初始化前必须先重置所有 class，确保 getBoundingClientRect 读到正确的自然高度
function initApplicationItem() {
    headerHeight = windowWidth.value > 992 ? 72 : 70
    elApplication.value?.forEach(item => {
        item.classList.remove('fixed-sticky', 'absolute-sticky')
    })
    const { height } = elS3.value.getBoundingClientRect()
    itemLength = elApplication.value.length
    lastChildHeight = elApplication.value[itemLength - 1].getBoundingClientRect().height
    step = (windowHeight.value - headerHeight - lastChildHeight) / (itemLength - 1)
    elS3.value.style.height = `${height}px`
    // 初始化后立即同步当前滚动位置的状态（修复刷新在 s4/s5 时错乱的根因）
    updateApplicationItem()
}

/***application end*****/

/******全球服务 — 数据 & 投影******/
const elS5Section = ref(null)
const statusS5 = ref(false)
const activeFilter = ref('all')

const markerColors = { customer: '#FF6400', business: '#1E3296', rd: '#FFB432' }
const filterCategories = [
    { type: 'customer', color: '#FF6400', label: '全球客户', count: 26 },
    { type: 'business', color: '#1E3296', label: '全球业务中心', count: 5 },
    { type: 'rd', color: '#FFB432', label: '研发制造基地', count: 3 },
]
const statsCards = [
    { value: '26+', color: '#FF6400', label: '服务国家/地区' },
    { value: '5', color: '#1E3296', label: '全球业务中心' },
    { value: '3', color: '#FFB432', label: '研发制造基地' },
]

// Natural Earth 1 (geoNaturalEarth1) — 源码 projection="geoNaturalEarth1" projectionConfig.center=[10,10] scale=160
const NE_A1 = 0.8707, NE_A2 = -0.131979, NE_A3 = -0.013791, NE_A4 = 0.003971
const NE_B1 = 1.007226, NE_B2 = 0.015085, NE_B3 = -0.044475, NE_B4 = 0.028874
function _neRaw(lng, lat) {
    const lam = lng * Math.PI / 180, phi = lat * Math.PI / 180
    const phi2 = phi * phi, phi4 = phi2 * phi2
    return [
        lam * (NE_A1 + phi2 * (NE_A2 + phi2 * (NE_A3 + phi4 * NE_A4))),
        phi * (NE_B1 + phi2 * (NE_B2 + phi2 * (NE_B3 + phi4 * NE_B4))),
    ]
}
// center=[10,10]：使 [10,10] 出现在 translate [400,225] 处，计算偏移量
const [_nc_x, _nc_y] = _neRaw(10, 10)
const NE_TX = 400 - 160 * _nc_x   // ≈ 375.8
const NE_TY = 225 + 160 * _nc_y   // ≈ 253.1
function projectNE(lng, lat) {
    const [x, y] = _neRaw(lng, lat)
    return {
        x: +(NE_TX + 160 * x).toFixed(2),
        y: +(NE_TY - 160 * y).toFixed(2),
    }
}
function getMarkerSize(type) {
    if (type === 'rd') return 5
    if (type === 'business') return 4.5
    return 4
}

const allLocations = [
    { name: '英国', coords: [-1.5, 52.5], type: 'customer' },
    { name: '法国', coords: [2.3, 46.6], type: 'customer' },
    { name: '德国', coords: [10.5, 51.2], type: 'customer' },
    { name: '奥地利', coords: [14.5, 47.5], type: 'customer' },
    { name: '波兰', coords: [19.4, 52], type: 'customer' },
    { name: '西班牙', coords: [-3.7, 40.4], type: 'customer' },
    { name: '斯洛文尼亚', coords: [14.8, 46.1], type: 'customer' },
    { name: '斯洛伐克', coords: [19.7, 48.7], type: 'customer' },
    { name: '意大利', coords: [12.5, 42.5], type: 'customer' },
    { name: '罗马尼亚', coords: [25, 44.4], type: 'customer' },
    { name: '土耳其', coords: [32.9, 39.9], type: 'customer' },
    { name: '突尼斯', coords: [9.5, 34], type: 'customer' },
    { name: '埃及', coords: [30.8, 26.8], type: 'customer' },
    { name: '迪拜', coords: [55.3, 25.3], type: 'customer' },
    { name: '印度', coords: [78.9, 22], type: 'customer' },
    { name: '中国', coords: [104, 35], type: 'customer' },
    { name: '日本', coords: [138.3, 36.2], type: 'customer' },
    { name: '韩国', coords: [128, 36.5], type: 'customer' },
    { name: '越南', coords: [108.3, 16], type: 'customer' },
    { name: '马来西亚', coords: [101.7, 3.1], type: 'customer' },
    { name: '印度尼西亚', coords: [117, -2.5], type: 'customer' },
    { name: '菲律宾', coords: [120.9, 14.6], type: 'customer' },
    { name: '台湾', coords: [121.5, 25], type: 'customer' },
    { name: '美国', coords: [-95.7, 37.1], type: 'customer' },
    { name: '墨西哥', coords: [-102.5, 23.6], type: 'customer' },
    { name: '澳大利亚', coords: [145, -37.8], type: 'customer' },
    { name: '匈牙利', coords: [19, 47.5], type: 'business' },
    { name: '新加坡', coords: [103.8, 1.35], type: 'business' },
    { name: '墨西哥', coords: [-99.1, 19.4], type: 'business' },
    { name: '韩国', coords: [127, 37.5], type: 'business' },
    { name: '香港', coords: [114.2, 22.3], type: 'business' },
    { name: '中国', coords: [116.4, 31.2], type: 'rd' },
    { name: '泰国', coords: [100.5, 13.8], type: 'rd' },
]

const projectedMarkers = computed(() =>
    allLocations.map(loc => ({ ...projectNE(loc.coords[0], loc.coords[1]), name: loc.name, type: loc.type }))
)
const filteredMarkers = computed(() =>
    activeFilter.value === 'all' ? projectedMarkers.value : projectedMarkers.value.filter(m => m.type === activeFilter.value)
)

let s5Observer = null
function initS5Observer() {
    s5Observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { statusS5.value = e.isIntersecting })
    }, { threshold: 0.3 })
    s5Observer.observe(elS5Section.value)
}

// 标记点交互状态
const hoveredMarker = ref(null)
const clickedKey = ref(null)
let markerClickTimer = null
const tooltipScreenPos = ref({ x: 0, y: 0 })
const MAP_ZOOM = 1.2  // 与 CSS .s5-map-zoom scale() 保持同步

function computeTooltipPos(marker) {
    const mapWrap = elS5Section.value?.querySelector('.s5-map-wrap')
    if (!mapWrap) return
    const { width, height } = mapWrap.getBoundingClientRect()
    const scale = Math.min(width / 800, height / 450)
    const ox = (width - 800 * scale) / 2
    const oy = (height - 450 * scale) / 2
    // 未缩放前标记在容器中的位置
    const ux = ox + marker.x * scale
    const uy = oy + marker.y * scale
    // scale(MAP_ZOOM) transform-origin: center center 后的实际坐标
    const cx = width / 2
    const cy = height / 2
    tooltipScreenPos.value = {
        x: cx + (ux - cx) * MAP_ZOOM,
        y: cy + (uy - cy) * MAP_ZOOM,
    }
}

function isMarkerActive(marker) {
    const key = `${marker.name}-${marker.type}`
    return hoveredMarker.value?.key === key || clickedKey.value === key
}
function onMarkerEnter(marker) {
    clearTimeout(hoverClearTimer)
    hoveredMarker.value = { key: `${marker.name}-${marker.type}`, ...marker }
    computeTooltipPos(marker)
}
let hoverClearTimer = null
function onMarkerLeave() {
    hoverClearTimer = setTimeout(() => { hoveredMarker.value = null }, 60)
}
function onMarkerClick(marker) {
    const key = `${marker.name}-${marker.type}`
    clickedKey.value = key
    hoveredMarker.value = { key, ...marker }
    clearTimeout(markerClickTimer)
    markerClickTimer = setTimeout(() => { clickedKey.value = null }, 300)
}

getRecommendNews()

let s3ScrollCleanup = null
onMounted(async () => {
    await nextTick()
    initApplicationItem()
    // 直接绑定 scroll + rAF，绕过 100ms 节流 store，每帧最多执行一次
    let rafId = null
    const onScroll = () => {
        if (rafId) return
        rafId = requestAnimationFrame(() => {
            rafId = null
            updateApplicationItem()
        })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    s3ScrollCleanup = () => {
        window.removeEventListener('scroll', onScroll)
        if (rafId) cancelAnimationFrame(rafId)
    }
    initS5Observer()
    scTimer = setInterval(() => {
        currentScIndex.value = (currentScIndex.value + 1) % scItems.length
    }, 1800)
})
onUnmounted(() => {
    s3ScrollCleanup?.()
    if (elS5Section.value) s5Observer?.unobserve(elS5Section.value)
    if (scTimer) clearInterval(scTimer)
})

</script>

<style lang="scss">
.swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
    width: calc(100% - #{tovw(80px)} * 2);
    left: tovw(80px);
    bottom: 65px;
    height: 6px;
    text-align: left;
    @include full {
        width: calc(100% - 24px * 2);
        left: 24px;
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
                width: calc(100vw - 11vw);
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
                    margin-bottom: 16px;
                    @include mo {
                        font-size: 26px;
                        font-weight: bold;
                        margin-bottom: 10px;
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
            margin-left: 6px;
        }
        .sc-pair {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            gap: 10px;
        }
        .sc-icon-wrap {
            width: 42px;
            height: 42px;
            background: var(--main-orange);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 28px;
            flex-shrink: 0;
            position: relative;
            overflow: hidden;
            &::after {
                content: '';
                position: absolute;
                inset: 0;
                background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%);
                border-radius: inherit;
                pointer-events: none;
            }
        }
        b {
            font-size: 32px;
            font-weight: 700;
            color: var(--main-blue);
        }
    }
    .sc-slide-enter-active {
        transition: opacity 0.45s cubic-bezier(0.4, 0, 0.2, 1), transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .sc-slide-leave-active {
        transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .sc-slide-enter-from {
        opacity: 0;
        transform: translateY(10px);
    }
    .sc-slide-leave-to {
        opacity: 0;
        transform: translateY(-10px);
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
        transition: background-color .4s cubic-bezier(.4, 0, .2, 1);
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
            transition: border-color .4s cubic-bezier(.4, 0, .2, 1);
            .icon {
                font-size: 40px;
                color: var(--main-orange);
                transition: color .4s cubic-bezier(.4, 0, .2, 1);
                line-height: 1;
                flex-shrink: 0;
            }
            .cont {
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
                    transition: color .4s cubic-bezier(.4, 0, .2, 1);
                }
                .region {
                    font-size: 18px;
                    line-height: 1.5;
                    color: #000;
                    transition: color .4s cubic-bezier(.4, 0, .2, 1);
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
                transition: background-color .4s cubic-bezier(.4, 0, .2, 1);
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

@keyframes s5-pulse-ring {
    0%   { r: 4; opacity: 0.8; }
    100% { r: 16; opacity: 0; }
}

.s5 {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    .s5-bg {
        position: absolute;
        inset: 0;
        z-index: 0;
        background: linear-gradient(to bottom, #f8fafc, #e2e8f0);
    }

    .s5-map-wrap {
        position: relative;
        flex: 1;
        overflow: hidden;
        z-index: 1;

        .s5-map-zoom {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            transform: scale(1.2);
            transform-origin: center center;
        }
        .s5-map-img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            opacity: 0.9;
        }
        .s5-markers-svg {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            overflow: visible;
            /* 主标记点：初始不可见，进入视口后淡入 */
            circle.marker-dot {
                opacity: 0;
                transition: opacity 0.5s ease, filter 0.15s ease-out;
                &.marker-visible {
                    opacity: 1;
                }
            }
            .s5-marker-g {
                cursor: pointer;
                outline: none;
                &:focus { outline: none; }
            }
            .s5-pulse-circle {
                animation: s5-pulse-ring 1.2s ease-out infinite;
            }
        }
        .s5-tooltip-div {
            position: absolute;
            transform: translate(-50%, calc(-100% - 18px));
            background: rgba(255, 255, 255, 0.88);
            backdrop-filter: blur(12px) saturate(180%);
            -webkit-backdrop-filter: blur(12px) saturate(180%);
            border: 1px solid rgba(200, 210, 220, 0.6);
            color: #374151;
            padding: 6px 14px;
            border-radius: 6px;
            font-size: 13px;
            font-weight: 500;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
            pointer-events: none;
            white-space: nowrap;
            z-index: 100;
            /* 底部三角箭头（旋转方块） */
            &::after {
                content: '';
                position: absolute;
                bottom: -5px;
                left: 50%;
                transform: translateX(-50%) rotate(45deg);
                width: 9px;
                height: 9px;
                background: rgba(255, 255, 255, 0.88);
                border-right: 1px solid rgba(200, 210, 220, 0.6);
                border-bottom: 1px solid rgba(200, 210, 220, 0.6);
            }
        }
    }

    .s5-header {
        position: relative;
        z-index: 10;
        padding-top: calc(var(--HEADER_HEIGHT) + 20px);
        padding-bottom: tovw(16px);
        text-align: center;
        flex-shrink: 0;
        .s5-title {
            font-size: 36px;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 8px;
        }
        .s5-desc {
            font-size: 18px;
            color: #475569;
            max-width: 560px;
            margin: 0 auto;
        }
    }

    .s5-bottom {
        position: absolute;
        bottom: tovw(100px);
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
        padding-bottom: 0;
        pointer-events: none;
        width: auto;
        max-width: 100%;
        padding-left: 16px;
        padding-right: 16px;
    }

    .s5-filters {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 12px;
        pointer-events: auto;
    }

    $glass-bg: rgba(255, 255, 255, 0.4);
    $glass-border: rgba(255, 255, 255, 0.6);
    $glass-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    $glass-blur: blur(4px) saturate(180%);

    .s5-fbtn {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 18px;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        background: rgba(255, 255, 255, 0.3);
        backdrop-filter: $glass-blur;
        -webkit-backdrop-filter: $glass-blur;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
            background: $glass-bg;
            box-shadow: $glass-shadow;
        }
        &.active {
            background: $glass-bg;
            border-color: $glass-border;
            box-shadow: $glass-shadow;
            transform: scale(1.05);
        }
        svg {
            width: 16px;
            height: 16px;
            color: #475569;
        }
    }
    .s5-fdot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        flex-shrink: 0;
    }
    .s5-flabel {
        font-size: 14px;
        color: #374151;
        font-weight: 500;
    }
    .s5-fcount {
        font-size: 12px;
        color: #6b7280;
    }

    .s5-stats {
        margin-top: 16px;
        display: flex;
        justify-content: center;
        gap: 12px;
        pointer-events: auto;
    }

    .s5-stat {
        text-align: center;
        padding: 16px 32px;
        background: $glass-bg;
        border-radius: 16px;
        border: 1px solid $glass-border;
        box-shadow: $glass-shadow;
        backdrop-filter: $glass-blur;
        -webkit-backdrop-filter: $glass-blur;
        transition: all 0.3s;
        &:hover {
            background: rgba(255, 255, 255, 0.5);
        }
    }
    .s5-stat-num {
        font-size: 42px;
        font-weight: 600;
        font-family: SpaceGrotesk, sans-serif;
        line-height: 1.1;
    }
    .s5-stat-txt {
        font-size: 15px;
        color: #475569;
        margin-top: 4px;
    }

    @include mo {
        height: auto;
        min-height: 80vh;
        .s5-header {
            padding-top: 32px;
            .s5-title { font-size: 24px; }
            .s5-desc { font-size: 14px; padding: 0 24px; }
        }
        .s5-bottom {
            position: relative;
            left: 0;
            transform: none;
            padding-bottom: 24px;
        }
        .s5-stat {
            padding: 10px 16px;
        }
        .s5-stat-num {
            font-size: 28px;
        }
        .s5-stat-txt {
            font-size: 13px;
        }
        .s5-fbtn {
            padding: 8px 12px;
            gap: 6px;
        }
        .s5-flabel { font-size: 12px; }
        .s5-fcount { font-size: 11px; }
        .s5-fdot { width: 10px; height: 10px; }
    }
}


</style>


