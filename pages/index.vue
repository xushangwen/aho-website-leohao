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
                    <template v-if="item.cover[0] && videoTester(item.cover[0])">
                        <video class="cover" muted loop autoplay playsinline>
                            <source
                                v-for="(videoItem, videoIndex) in item.cover"
                                :key="`videoIndex${videoIndex}`"
                                :src="videoItem"
                            ></source>
                        </video>
                    </template>
                    <template v-else>
                        <div class="cover" :style="{backgroundImage: `url(${item.cover[0]})`}"></div>
                        <div class="cover-m" :style="{backgroundImage: `url(${item.cover[1]})`}"></div>
                    </template>
                    <div class="mask">
                        <div class="rect-1"></div>
                        <div class="rect-2"></div>
                    </div>
                    <div :class="`info wrap ${item.styleClass}`">
                        <div class="cont">
                            <div class="t1" v-if="locale !== 'en' && item.t1 && item.t1.length > 0">
                                <span
                                    v-for="(nameItem, nameIndex) in item.t1"
                                    :key="`t1-${nameIndex}`"
                                >{{nameItem}}</span>
                            </div>
                            <div :class="['t2', { 'en-hero': locale === 'en' }]" v-if="locale === 'en' ? (item.t2En && item.t2En.length > 0) : (item.t2 && item.t2.length > 0)">
                                <span
                                    v-for="(nameItem, nameIndex) in (locale === 'en' ? item.t2En : item.t2)"
                                    :key="`t2-${nameIndex}`"
                                >{{nameItem}}</span>
                            </div>
                            <div class="t2m" v-if="item.t2m && item.t2m.length > 0">
                                <span
                                    v-for="(nameItem, nameIndex) in item.t2m"
                                    :key="`t2m-${nameIndex}`"
                                >{{nameItem}}</span>
                            </div>
                            <div class="prd-abst" v-if="item.abst && item.abst.length > 0 && locale !== 'en'">
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
                        {{ $t('home.aboutTitle') }}
                    </div>
                    <div class="t2">{{ $t('home.aboutDesc') }}</div>
                    <div class="abst">
                        <p class="s-a">{{ $t('home.aboutContent1') }}</p>
                        <p class="s-a">{{ $t('home.aboutContent2') }}</p>
                    </div>
                    <NuxtLink class="_btn" :to="aboutPath">
                        <div class="_str">{{ $t('home.aboutBtn') }}</div>
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
                <div class="s-t">{{ $t('home.applicationTitle') }}</div>
                <div class="s-a">
                    <span>{{ $t('home.applicationDesc') }}</span>
                </div>
                <div class="sc">
                    <span class="sc-for">{{ $t('home.applicationFor') }}</span>
                    <div class="sc-slot">
                        <Transition name="sc-slide" mode="out-in">
                            <div class="sc-pair" :key="'subject-' + currentScIndex">
                                <div class="sc-icon-wrap"><i :class="scItems[currentScIndex].subjectIcon"></i></div>
                                <b>{{ scItems[currentScIndex].subject }}</b>
                            </div>
                        </Transition>
                    </div>
                    <span class="sc-provide">{{ $t('home.applicationProvide') }}</span>
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
                            <div class="name">{{ locale === 'en' ? (item.nameEn || item.name) : item.name }}</div>
                            <div class="region">
                                <div class="leb">{{ $t('application.regionLabel') }}</div>
                                <div class="c">{{ locale === 'en' ? (item.regionEn || item.region) : item.region }}</div>
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
                <div class="s-t">{{ $t('home.newsTitle') }}</div>
                <div class="s-a">
                    <span>{{ $t('home.newsDesc') }}</span>
                </div>
                <div class="loading" v-if="loadingNews">{{ $t('common.loading') }}</div>
                <EleNewsList v-else class="news-list" :news-list="newsList"></EleNewsList>
                <div class="tools">
                    <NuxtLink class="_btn" :to="newsPath">
                        <div class="_str">{{ $t('home.newsBtn') }}</div>
                        <div class="_icon ri-arrow-right-line"></div>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <section class="s5" ref="elS5Section">
            <div class="s5-bg"></div>
            <div class="s5-header">
                <div class="s-t">{{ $t('home.serviceTitle') }}</div>
                <div class="s-a">{{ $t('home.serviceDesc') }}</div>
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
                    <!-- 全区域事件捕获层，点击空白处清除tooltip -->
                    <rect x="0" y="0" width="800" height="450" fill="transparent" style="pointer-events:all" @click="clearMapSelection" />
                    <template v-for="(marker, idx) in filteredMarkers" :key="marker.name + marker.type">
                        <g
                            class="s5-marker-g"
                            @mouseenter="onMarkerEnter(marker)"
                            @mouseleave="onMarkerLeave"
                            @click.stop="onMarkerClick(marker)"
                        >
                            <!-- 移动端扩大触摸响应区域 -->
                            <circle
                                :cx="marker.x" :cy="marker.y"
                                r="14"
                                fill="transparent"
                                style="cursor:pointer"
                            />
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
                    :class="{ 'fixed-mobile': windowWidth <= 1024 }"
                    :style="{ left: tooltipScreenPos.x + 'px', top: tooltipScreenPos.y + 'px' }"
                >{{ hoveredMarker.name }}</div>
            </div>
            <div class="s5-bottom">
                <div class="s5-filters">
                    <button class="s5-fbtn" :class="{ active: activeFilter === 'all' }" @click="activeFilter = 'all'">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z"/></svg>
                        <span class="s5-flabel">{{ $t('home.serviceAllLabel') }}</span>
                        <span class="s5-fcount">34</span>
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
const { t, locale } = useI18n()
const localePath = useLocalePath()
const aboutPath = computed(() => localePath('/about'))
const newsPath = computed(() => localePath('/news'))

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

const scIcons = [
    { subjectIcon: 'ri-lightbulb-flash-line', wayIcon: 'ri-timer-flash-line' },
    { subjectIcon: 'ri-route-line', wayIcon: 'ri-shield-keyhole-line' },
    { subjectIcon: 'ri-battery-2-charge-line', wayIcon: 'ri-pulse-ai-line' },
    { subjectIcon: 'ri-settings-5-line', wayIcon: 'ri-fingerprint-line' },
    { subjectIcon: 'ri-cpu-line', wayIcon: 'ri-link-m' },
]
const scItems = computed(() => scIcons.map((icon, i) => ({
    ...icon,
    subject: t('home.sc' + i + 'Subject'),
    way: t('home.sc' + i + 'Way'),
})))
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

// 初始化前必须先重置所有 class，确保 getBoundingClientRect 读到正确的自然高度
function initApplicationItem() {
    elApplication.value?.forEach(item => {
        item.classList.remove('fixed-sticky', 'absolute-sticky')
    })
    // 使用正确的 header 高度（tab/mo 用移动导航高度 70px）
    headerHeight = windowWidth.value <= 1024 ? 70 : 72
    const { height } = elS3.value.getBoundingClientRect()
    itemLength = elApplication.value.length
    lastChildHeight = elApplication.value[itemLength - 1].getBoundingClientRect().height
    // 与 CSS --s3-step 的 max() 兜底值对齐：桌面 90px，移动 80px
    const minStep = windowWidth.value <= 1024 ? 80 : 90
    step = Math.max(minStep, (windowHeight.value - headerHeight - lastChildHeight) / (itemLength - 1))
    elS3.value.style.height = `${height}px`
    updateApplicationItem()
}

function updateApplicationItem() {
    const { top: s3Top, bottom: s3Bottom } = elS3.value.getBoundingClientRect()
    const delta = headerHeight - s3Top

    // 无缝切换临界点：当最后一张卡片 fixed 底边 = 视口底边时切换 absolute
    // 公式推导：card_i fixed_bottom = header + (n-1)*step + cardHeight
    // 当此值 = s3Bottom 时，fixed 与 absolute 坐标完全一致，无跳跃
    const transitionThreshold = headerHeight + (itemLength - 1) * step + lastChildHeight

    if (s3Bottom < transitionThreshold) {
        // S3 底部已滚过临界点 → 全部切换 absolute，与 fixed 位置无缝对接
        elApplication.value.forEach((item) => {
            item.classList.remove('fixed-sticky')
            item.classList.add('absolute-sticky')
        })
    } else if (delta < 0) {
        // S3 还未进入视口 → 全部恢复自然流
        elApplication.value.forEach((item) => {
            item.classList.remove('fixed-sticky')
            item.classList.remove('absolute-sticky')
        })
    } else {
        // 滚动进行中 → 逐张卡片 fixed
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

// 窗口尺寸变化时重新初始化（防止高度/间距错位）
watch(windowHeight, initApplicationItem)
watch(windowWidth, initApplicationItem)

/***application end*****/

/******全球服务 — 数据 & 投影******/
const elS5Section = ref(null)
const statusS5 = ref(false)
const activeFilter = ref('all')

const markerColors = { customer: '#FF6400', business: '#1E3296', rd: '#FFB432' }
const filterCategories = computed(() => [
    { type: 'customer', color: '#FF6400', label: t('home.catCustomer'), count: 27 },
    { type: 'business', color: '#1E3296', label: t('home.catBusiness'), count: 5 },
    { type: 'rd', color: '#FFB432', label: t('home.catRd'), count: 3 },
])
const statsCards = computed(() => [
    { value: '27+', color: '#FF6400', label: t('home.statRegions') },
    { value: '5', color: '#1E3296', label: t('home.catBusiness') },
    { value: '3', color: '#FFB432', label: t('home.catRd') },
])

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
    // 移动端标记点适当放大以便触摸操作，与地图同比缩放
    const mobile = windowWidth.value <= 992
    const base = type === 'rd' ? 5 : type === 'business' ? 4.5 : 4
    return mobile ? base * 1.5 : base
}

const allLocations = [
    { name: '英国', nameEn: 'UK', coords: [-1.5, 52.5], type: 'customer' },
    { name: '法国', nameEn: 'France', coords: [2.3, 46.6], type: 'customer' },
    { name: '德国', nameEn: 'Germany', coords: [10.5, 51.2], type: 'customer' },
    { name: '奥地利', nameEn: 'Austria', coords: [14.5, 47.5], type: 'customer' },
    { name: '波兰', nameEn: 'Poland', coords: [19.4, 52], type: 'customer' },
    { name: '西班牙', nameEn: 'Spain', coords: [-3.7, 40.4], type: 'customer' },
    { name: '斯洛文尼亚', nameEn: 'Slovenia', coords: [14.8, 46.1], type: 'customer' },
    { name: '斯洛伐克', nameEn: 'Slovakia', coords: [19.7, 48.7], type: 'customer' },
    { name: '意大利', nameEn: 'Italy', coords: [12.5, 42.5], type: 'customer' },
    { name: '罗马尼亚', nameEn: 'Romania', coords: [25, 44.4], type: 'customer' },
    { name: '土耳其', nameEn: 'Turkey', coords: [32.9, 39.9], type: 'customer' },
    { name: '突尼斯', nameEn: 'Tunisia', coords: [9.5, 34], type: 'customer' },
    { name: '埃及', nameEn: 'Egypt', coords: [30.8, 26.8], type: 'customer' },
    { name: '迪拜', nameEn: 'Dubai', coords: [55.3, 25.3], type: 'customer' },
    { name: '印度', nameEn: 'India', coords: [78.9, 22], type: 'customer' },
    { name: '中国', nameEn: 'China', coords: [104, 35], type: 'customer' },
    { name: '日本', nameEn: 'Japan', coords: [138.3, 36.2], type: 'customer' },
    { name: '韩国', nameEn: 'South Korea', coords: [128, 36.5], type: 'customer' },
    { name: '越南', nameEn: 'Vietnam', coords: [108.3, 16], type: 'customer' },
    { name: '马来西亚', nameEn: 'Malaysia', coords: [101.7, 3.1], type: 'customer' },
    { name: '印度尼西亚', nameEn: 'Indonesia', coords: [117, -2.5], type: 'customer' },
    { name: '菲律宾', nameEn: 'Philippines', coords: [120.9, 14.6], type: 'customer' },
    { name: '台湾', nameEn: 'Taiwan', coords: [121.5, 25], type: 'customer' },
    { name: '美国', nameEn: 'USA', coords: [-95.7, 37.1], type: 'customer' },
    { name: '墨西哥', nameEn: 'Mexico', coords: [-102.5, 23.6], type: 'customer' },
    { name: '巴西', nameEn: 'Brazil', coords: [-47.9, -2.0], type: 'customer' },
    { name: '澳大利亚', nameEn: 'Australia', coords: [145, -37.8], type: 'customer' },
    { name: '匈牙利', nameEn: 'Hungary', coords: [19, 47.5], type: 'business' },
    { name: '新加坡', nameEn: 'Singapore', coords: [103.8, 1.35], type: 'business' },
    { name: '墨西哥', nameEn: 'Mexico', coords: [-99.1, 19.4], type: 'business' },
    { name: '韩国', nameEn: 'South Korea', coords: [127, 37.5], type: 'business' },
    { name: '香港', nameEn: 'Hong Kong', coords: [114.2, 22.3], type: 'business' },
    { name: '中国', nameEn: 'China', coords: [116.4, 31.2], type: 'rd' },
    { name: '泰国', nameEn: 'Thailand', coords: [100.5, 13.8], type: 'rd' },
]

const projectedMarkers = computed(() =>
    allLocations.map(loc => ({
        ...projectNE(loc.coords[0], loc.coords[1]),
        name: locale.value === 'en' ? (loc.nameEn || loc.name) : loc.name,
        type: loc.type
    }))
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
let wasJustClicked = false  // 防止 touch 点击后 mouseleave 立即清除 tooltip

function computeTooltipPos(marker) {
    const mapWrap = elS5Section.value?.querySelector('.s5-map-wrap')
    if (!mapWrap) return

    if (windowWidth.value <= 1024) {
        // 移动端：使用 SVG 实际渲染位置 → 视口坐标（配合 position: fixed tooltip）
        const svgEl = mapWrap.querySelector('.s5-markers-svg')
        if (!svgEl) return
        const svgRect = svgEl.getBoundingClientRect()
        const scaleX = svgRect.width / 800
        const scaleY = svgRect.height / 450
        tooltipScreenPos.value = {
            x: svgRect.left + marker.x * scaleX,
            y: svgRect.top + marker.y * scaleY,
        }
    } else {
        // 桌面端：原有逻辑（container 内绝对定位）
        const { width, height } = mapWrap.getBoundingClientRect()
        const scale = Math.min(width / 800, height / 450)
        const ox = (width - 800 * scale) / 2
        const oy = (height - 450 * scale) / 2
        const ux = ox + marker.x * scale
        const uy = oy + marker.y * scale
        const cx = width / 2
        const cy = height / 2
        tooltipScreenPos.value = {
            x: cx + (ux - cx) * MAP_ZOOM,
            y: cy + (uy - cy) * MAP_ZOOM,
        }
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
    // touch 点击后 wasJustClicked 为 true，阻止 hover 事件立即清除 tooltip
    if (wasJustClicked) return
    hoverClearTimer = setTimeout(() => { hoveredMarker.value = null }, 60)
}
function onMarkerClick(marker) {
    const key = `${marker.name}-${marker.type}`
    // 标记点击，阻止 mouseleave 在 400ms 内清除 tooltip
    wasJustClicked = true
    clearTimeout(markerClickTimer)
    markerClickTimer = setTimeout(() => { wasJustClicked = false }, 400)
    // 再次点击同一标记 → 关闭 tooltip（toggle）
    if (clickedKey.value === key) {
        clickedKey.value = null
        hoveredMarker.value = null
        return
    }
    clickedKey.value = key
    hoveredMarker.value = { key, ...marker }
    computeTooltipPos(marker)
}
function clearMapSelection() {
    if (!wasJustClicked) {
        hoveredMarker.value = null
        clickedKey.value = null
    }
}

getRecommendNews()

let s3ScrollCleanup = null
let mapScrollCleanup = null
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
            // 页面滚动时关闭点击锁定的 tooltip，避免 tooltip 随容器漂移
            if (clickedKey.value) {
                clickedKey.value = null
                hoveredMarker.value = null
            }
        })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    s3ScrollCleanup = () => {
        window.removeEventListener('scroll', onScroll)
        if (rafId) cancelAnimationFrame(rafId)
    }
    initS5Observer()
    scTimer = setInterval(() => {
        currentScIndex.value = (currentScIndex.value + 1) % scItems.value.length
    }, 1800)

    // 移动端/tablet 地图初始居中显示（避免停留在最左端）
    const mapWrap = document.querySelector('.s5-map-wrap')
    if (windowWidth.value <= 1024 && mapWrap) {
        mapWrap.scrollLeft = (mapWrap.scrollWidth - mapWrap.clientWidth) / 2
    }

    // 地图横向滚动时同步更新 tooltip 位置（移动端/tablet tooltip 为 fixed 定位，需随地图滚动重算坐标）
    if (mapWrap) {
        let mapScrollRafId = null
        const onMapScroll = () => {
            if (!hoveredMarker.value) return
            if (mapScrollRafId) return
            mapScrollRafId = requestAnimationFrame(() => {
                mapScrollRafId = null
                if (hoveredMarker.value) computeTooltipPos(hoveredMarker.value)
            })
        }
        mapWrap.addEventListener('scroll', onMapScroll, { passive: true })
        mapScrollCleanup = () => {
            mapWrap.removeEventListener('scroll', onMapScroll)
            if (mapScrollRafId) cancelAnimationFrame(mapScrollRafId)
        }
    }
})
onUnmounted(() => {
    s3ScrollCleanup?.()
    mapScrollCleanup?.()
    if (elS5Section.value) s5Observer?.unobserve(elS5Section.value)
    if (scTimer) clearInterval(scTimer)
})

</script>

<style lang="scss">
/* sc-slide Transition：<Transition> 动态 class 不能在 scoped 中嵌套使用，放在全局块确保正确应用 */
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

.swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
    width: calc(100% - #{fluid(80px, 24px)} * 2);
    left: fluid(80px, 24px);
    bottom: 65px;
    height: 6px;
    text-align: left;
    @include mo {
        bottom: 62px;
        width: calc(100% - 24px * 2);
        left: 24px;
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
            animation: banner-proc-fill 12s linear forwards;
        }
    }
}
@keyframes banner-proc-fill {
    from { width: 0; }
    to   { width: 100%; }
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
                font-size: fluid(38px, 28px);
                font-weight: 900;
                margin-right: 3px;
                @include mo {
                    font-size: 28px;
                }
            }
        }
        .blur-text {
            font-size: fluid(38px, 25px);
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
                // 移动端不加右侧白色 border（会产生多余白线）
                @include mo {
                    border-right: none !important;
                }
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
            // 移动端竖线+圆点也变白
            .wrap::before {
                background-color: rgba(255, 255, 255, 0.5) !important;
            }
            .wrap::after {
                background-color: white !important;
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
            font-size: fluid(36px, 24px);
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
        left: fluid(75px, 24px);
    }
    .banner-next {
        right: fluid(75px, 24px);
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
                display: block;
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
            background: 
                radial-gradient(circle, rgba(255,255,255,.08) 1px, transparent 1px),
                rgba(0,0,0,.4);
            background-size: 4px 4px, 100% 100%;
            background-position: 0 0, 0 0;
            .rect-1 {
                width: calc(100vw - 14vw);
                height: calc(100% - 170px);
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
                width: 14vw;
                height: 170px;
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
                width: calc(100% - 160px);
            }
            // tablet 断点单独覆盖，避免内容离左侧过远
            @include tab {
                width: calc(100% - 60px);
            }
            @include mo {
                // 移动端内容居中，保留 .wrap 的内边距
                justify-content: center;
                padding-top: var(--HEADER_HEIGHT_MOB);
            }
            .cont {
                height: auto;
                padding: 30px 0;
                @include flex-c();
                transform: translateY(-20px);
                opacity: 0;
                transition: all .5s 1s ease-in-out;
                @include mo {
                    max-width: calc(100% - 40px);
                }
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
                    line-height: 1.3;
                    color: white;
                }
                .t1 {
                    font-size: fluid(36px, 26px);
                    font-weight: 300;
                    margin-bottom: 16px;
                    @include mo {
                        font-size: 24px;
                        font-weight: 300;
                        margin-bottom: 10px;
                        span { display: block; }
                    }
                }
                .t2,
                .t2m {
                    font-size: fluid(36px, 24px);
                    font-weight: 700;
                    @include mo {
                        font-size: 24px;
                        span { display: block; }
                    }
                }
                .t2.en-hero {
                    font-family: 'Google Sans', sans-serif;
                    font-size: fluid(50px, 30px);
                    line-height: 1.2;
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
                    max-width: min(560px, 85vw);
                    span {
                        font-size: fluid(30px, 20px);
                        font-family: TTFors;
                        font-weight: 400;
                    }
                }
                @include mo {
                    padding: 0;
                    .prd-abst {
                        margin-top: 10px;
                        max-width: 85vw;
                        span { font-size: 15px; }
                    }
                }

            }
            .more {
                margin-top: fluid(30px, 20px);
                @include mo {
                    margin-bottom: 60px;
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
                            font-size: 22px;
                        }
                        .t2 {
                            display: none;
                        }
                        .t2m {
                            display: block;
                            font-size: 22px;
                        }
                    }
                }
            }
            &.heavy {
                .cont {
                    .t1 {
                        font-size: fluid(60px, 32px);
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
        min-height: fluid(514px);
    }
    .left {
        width: 575px;
        padding: fluid(83px, 36px) 0 35px 0;
    }
    .t2 {
        color: var(--main-blue, #1E3296);
        font-size: fluid(28px, 20px);
        font-style: normal;
        font-weight: 700;
        line-height: 130%;
        margin-top: fluid(48px, 20px);
    }
    .abst {
        p {
            margin-top: fluid(32px, 16px);
        }
    }
    ._btn {
        margin-top: fluid(48px, 20px);
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
            border-radius: 0 0 0 40px;
            overflow: hidden;
        }
    }
    // laptop (≤1439px)：左侧内容与右侧图片按比例压缩
    @include lap {
        .left {
            width: 48%;
        }
        .right {
            min-width: 0;
            width: 48%;
        }
    }
    // mobile (≤992px)：图片沉底，文字全宽
    @include mo {
        .wrap {
            min-height: unset;
        }
        .left {
            width: 100%;
            padding: 36px 0 340px;
        }
        .t2 {
            font-size: 20px;
            margin-top: 20px;
        }
        .abst p {
            margin-top: 16px;
            text-wrap: balance;
        }
        ._btn {
            margin-top: 28px;
        }
        .right {
            position: absolute;
            bottom: 0;
            top: unset;
            height: 280px;
            width: 100%;
            min-width: 0;
            .bg {
                border-radius: 0;
            }
        }
    }
}

.el-profile-data {
    margin: fluid(120px, 48px) 0 0;
    @include mo {
        margin: 48px 0 0;
    }
}

.s2 {
    margin-top: fluid(100px, 40px);
    padding: fluid(120px, 40px) 0;
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
        margin-top: fluid(32px, 24px);
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        .sc-for,
        .sc-provide {
            font-size: fluid(30px, 18px);
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
            font-size: fluid(28px, 22px);
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
            font-size: fluid(32px, 22px);
            font-weight: 700;
            color: var(--main-blue);
        }
    }
    // laptop (≤1439px)
    @include lap {
        .sc {
            .sc-icon-wrap { width: 38px; height: 38px; }
        }
    }
    // mobile (≤992px)：紧凑布局，保持行内排列
    @include mo {
        margin-top: 40px;
        padding: 40px 0;
        .s-a { margin-top: 10px; }
        .sc {
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 20px;
            .sc-for,
            .sc-provide {
                font-size: 16px;
                flex-shrink: 0;
            }
            .sc-provide { margin-left: 4px; }
            .sc-slot {
                margin-left: 6px;
                min-width: unset;
            }
            .sc-pair { gap: 6px; }
            .sc-icon-wrap {
                width: 30px;
                height: 30px;
                font-size: 18px;
                border-radius: 8px;
            }
            b { font-size: 18px; }
        }
    }
}

.s3 {
    position: relative;
    $itemHeight: 320px;
    // 最小露出 = padding-top(40px) + icon/name行高(~40px) + 10px余量 = 90px
    // 刚好看到标题，不多不少
    --s3-step: max(90px, calc((100vh - var(--HEADER_HEIGHT) - 320px) / 6));
    @include tab {
        // 移动端 padding-top(22px) + icon(26px) + name(16px) + 余量 = 80px
        --s3-step: max(80px, calc((100vh - var(--HEADER_HEIGHT_MOB) - 340px) / 6));
    }
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    .item {
        height: $itemHeight;
        width: 100%;
        padding: fluid(40px, 26px) 0;
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
                font-size: fluid(40px, 26px);
                color: var(--main-orange);
                transition: color .4s cubic-bezier(.4, 0, .2, 1);
                line-height: 1;
                flex-shrink: 0;
                margin-top: -4px;
            }
            .cont {
                width: 460px;
                height: inherit;
                margin-left: fluid(20px, 13px);
                display: flex;
                flex-flow: column nowrap;
                justify-content: space-between;
                .name {
                    color: var(--main-blue, #1E3296);
                    font-size: fluid(28px, 20px);
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
            // 显式高度 = 卡片高度(320px) - 上下 padding(各40px)，确保图片始终铺满
            width: 440px;
            height: 240px;
            border-radius: 10px;
            overflow: hidden;
            flex-shrink: 0;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: left center;
                display: block;
            }
        }
        @for $i from 1 through 7 {
            $idx: $i - 1;
            $idx_end: 7 - $i;
            position: relative;
            &.fixed-sticky:nth-child(#{$i}) {
                background-color: lighten(#1E3296, 5% * ($i - 1));
                position: fixed;
                left: 0;
                // 使用 --s3-step (带 max() 兜底) 保证标题始终可见
                top: calc(var(--HEADER_HEIGHT) + #{$idx} * var(--s3-step));
                @include tab {
                    top: calc(var(--HEADER_HEIGHT_MOB) + #{$idx} * var(--s3-step));
                }
            }
            &.absolute-sticky:nth-child(#{$i}) {
                background-color: lighten(#1E3296, 5% * ($i - 1));
                position: absolute;
                left: 0;
                top: unset;
                bottom: calc(#{$idx_end} * var(--s3-step));
            }
        }
        // laptop 断点：固定像素宽度超出容器，改用百分比
        @include lap {
            .wrap {
                align-items: center;
            }
            .left {
                width: 55%;
                .cont {
                    width: calc(100% - 60px);
                }
            }
            .right {
                width: 30vw;
                max-width: 400px;
                height: 240px;
                img { width: 100%; height: 100%; object-fit: cover; object-position: left center; }
            }
        }
        // tablet 断点（993-1024px）：切换为纵向布局，图片居左对齐
        @include tab {
            padding: 16px 0;
            .wrap {
                flex-direction: column;
                align-items: flex-start;
            }
            .left {
                width: 100%;
                height: auto;
                flex-direction: row;
                align-items: center;
                border-right: none;
                flex-shrink: 0;
                &::after { display: none; }
                .cont {
                    width: calc(100% - 60px);
                    height: auto;
                    justify-content: flex-start;
                    gap: 4px;
                }
            }
            .right {
                width: 100%;
                height: 160px;
                margin-top: 8px;
                img { width: 100%; height: 100%; object-fit: cover; object-position: left center; }
            }
        }
        @include mo {
            height: 340px !important;
            overflow: hidden;
            padding-top: 22px;
            .wrap {
                display: flex;
                flex-direction: column;
                height: 100%;
                padding-right: 36px;  // 右侧留出竖线+圆点区域，增加右边距缩小内容宽度
                overflow: visible;
                position: relative;
            }
            .left {
                width: 100%;
                height: auto;
                border-right: none;
                border-bottom: none;
                flex-direction: column;
                align-items: flex-start;
                padding-bottom: 0;
                flex-shrink: 0;
                &::after {
                    display: none;
                }
                .icon {
                    font-size: 26px;
                    margin-top: 0;
                    margin-bottom: 6px;
                }
                .cont {
                    width: 100%;
                    flex: none;
                    height: auto;
                    margin-left: 0;
                    justify-content: flex-start;
                    gap: 4px;
                    .name { font-size: 16px; }
                    .region { font-size: 12px; line-height: 1.4;
                        .c { margin-top: 3px; }
                    }
                }
            }
            // 右侧竖线（绝对定位，精确居中于 24px padding 区域）
            .wrap::before {
                content: '';
                position: absolute;
                right: 11.5px;
                top: 0;
                bottom: 0;
                width: 1px;
                background-color: var(--main-orange);
                transition: background-color .4s;
            }
            // 顶部圆点（绝对定位，水平居中于竖线）
            .wrap::after {
                content: '';
                position: absolute;
                right: 9.5px;
                top: -3px;
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background-color: var(--main-orange);
                transition: background-color .4s;
            }
            .right {
                width: 100%;
                height: auto; // 覆盖 @include tab 的 160px，移动端高度由 flex: 1 撑开
                flex: 1;
                overflow: hidden;
                border-radius: 10px;
                margin-top: 16px;
                img { width: 100%; height: 100%; object-fit: cover; object-position: left center; }
            }
        }
    }
    @include mo {
        // 移动端保留 sticky 叠加效果，高度由 JS 控制
    }
}

.s4 {
    padding: fluid(80px, 48px) 0 fluid(160px, 64px);
    .wrap {

    }
    .s-t,
    .s-a {
        text-align: center;
    }
    .s-a {
        text-wrap: balance;
    }
    .news-list {
        margin-top: fluid(80px, 32px);
        padding-top: 1px;
    }
    .tools {
        margin-top: fluid(80px, 32px);
        text-align: center;
    }
    @include mo {
        padding: 48px 0 64px;
        .news-list {
            margin-top: 32px;
        }
        .tools {
            margin-top: 32px;
        }
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
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(20px) saturate(180%);
            border: 1px solid rgba(200, 210, 220, 0.6);
            color: #374151;
            padding: 6px 14px;
            border-radius: 4px;
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
            // 移动端使用 fixed 定位避免 overflow:hidden 裁切
            &.fixed-mobile {
                position: fixed;
                z-index: 9999;
            }
        }
    }

    .s5-header {
        position: relative;
        z-index: 10;
        padding-top: calc(var(--HEADER_HEIGHT) + 8px);
        padding-bottom: fluid(12px, 6px);
        text-align: center;
        flex-shrink: 0;
        // tab (≤1024px)：移动导航高度更小
        @include tab {
            padding-top: calc(var(--HEADER_HEIGHT_MOB) + 6px);
        }
        .s-t {
            margin-bottom: 8px;
        }
        .s-a {
            font-size: 18px;
            max-width: min(560px, 90vw);
            margin: 0 auto;
        }
    }

    .s5-bottom {
        position: absolute;
        bottom: fluid(100px, 40px);
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
        padding: 16px fluid(32px, 16px);
        background: $glass-bg;
        border-radius: 16px;
        border: 1px solid $glass-border;
        backdrop-filter: $glass-blur;
        -webkit-backdrop-filter: $glass-blur;
        transition: all 0.3s;
        &:hover {
            background: rgba(255, 255, 255, 0.5);
        }
    }
    .s5-stat-num {
        font-size: fluid(42px, 28px);
        font-weight: 600;
        font-family: SpaceGrotesk, sans-serif;
        line-height: 1.1;
    }
    .s5-stat-txt {
        font-size: 15px;
        color: #475569;
        margin-top: 4px;
    }

    @include lap {
        .s5-header {
            .s5-desc { font-size: 16px; }
        }
        .s5-stat {
            padding: 12px 24px;
        }
    }
    @include mo {
        height: auto;
        min-height: 70vh;
        .s5-header {
            padding-top: calc(var(--HEADER_HEIGHT_MOB) + 8px);
            padding-bottom: 8px;
            .s-a {
                font-size: 15px;
                padding: 0 24px;
                text-wrap: balance;
            }
        }
        .s5-map-wrap {
            overflow-x: scroll;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
            flex: none;
            // 隐藏滚动条但保留滚动能力
            scrollbar-width: none;
            -ms-overflow-style: none;
            &::-webkit-scrollbar { display: none; }
            // 高度由内容驱动，避免固定 vw 值与 aspect-ratio 产生裁切

            .s5-map-zoom {
                position: relative;
                // min(280% viewport, 800px SVG原始宽度)：
                // 手机端 ≈ 280% 缩放（可横划），tablet 宽时不超 800px 避免过高
                width: min(280%, 800px);
                aspect-ratio: 800 / 450;
                height: auto;   // 高度 = width × 450/800，完全由宽度推导，不裁切
                display: block;
            }
            .s5-map-img {
                position: absolute;
                inset: 0;
                width: 100%;
                height: 100%;
                object-fit: fill;
                object-position: center;
            }
            .s5-markers-svg {
                position: absolute;
                inset: 0;
                width: 100%;
                height: 100%;
            }
        }
        .s5-bottom {
            position: relative;
            left: 0;
            transform: none;
            width: 100%;
            padding: 12px 16px 28px;
        }
        // 全部按钮独占一行（fit-content居中），其余三个筛选按钮一行（3列）
        .s5-filters {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 8px;
            .s5-fbtn:first-child {
                grid-column: 1 / -1;
                width: fit-content;
                margin: 0 auto;
            }
        }
        .s5-stats {
            gap: 8px;
            padding: 0;
        }
        .s5-stat {
            flex: 1;
            min-width: 0;
            padding: 10px 12px;
        }
        .s5-stat-num {
            font-size: 26px;
        }
        .s5-stat-txt {
            font-size: 11px;
            text-wrap: balance;
            line-height: 1.4;
        }
        .s5-fbtn {
            padding: 8px 10px;
            gap: 5px;
        }
        .s5-flabel { font-size: 11px; }
        .s5-fcount { font-size: 10px; }
        .s5-fdot { width: 10px; height: 10px; }
    }
}


</style>


