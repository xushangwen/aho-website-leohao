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
                <div class="right">
                    <div class="bg"></div>
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
                <EleNewsList v-else class="news-list" :news-list="newsList" :carousel="true"></EleNewsList>
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
            <div class="s5-map-wrap" ref="elS5MapWrap">
                <div class="s5-map-zoom" ref="elS5MapZoom">
                <img src="/images/home/world-map.svg" class="s5-map-img" alt="world map" />
                <svg
                    class="s5-markers-svg"
                    viewBox="0 0 800 450"
                    preserveAspectRatio="xMidYMid meet"
                    role="img"
                    :aria-label="$t('home.serviceTitle')"
                    @mouseleave="onMarkerLeave"
                >
                    <!-- 全区域事件捕获层，点击空白处清除tooltip -->
                    <rect x="0" y="0" width="800" height="450" fill="transparent" style="pointer-events:all" @click="clearMapSelection" />
                    <template v-for="(marker, idx) in filteredMarkers" :key="marker.name + marker.type">
                        <g
                            class="s5-marker-g"
                            :ref="el => setMarkerAnchor(marker, el)"
                            role="button"
                            tabindex="0"
                            :aria-label="marker.name"
                            :aria-pressed="isMarkerActive(marker)"
                            @mouseenter="onMarkerEnter(marker, $event)"
                            @mouseleave="onMarkerLeave"
                            @click.stop="onMarkerClick(marker, $event)"
                            @keydown.enter.space.prevent="onMarkerClick(marker, $event)"
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
                    :style="{ left: tooltipScreenPos.x + 'px', top: tooltipScreenPos.y + 'px' }"
                >{{ hoveredMarker.name }}</div>
            </div>
            <!-- 移动端滑动提示（仅窄屏显示） -->
            <div class="s5-scroll-hint">
                <i class="ri-arrow-left-s-line"></i>
                <span>{{ $t('common.swipeHint') }}</span>
                <i class="ri-arrow-right-s-line"></i>
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

const bannerConfig = ref({
    clickable: true,
    renderBullet: function (index, className) {
        return `<div class="${className} banner-pagination"><div class="proc"></div></div>`;
    },
})

// 顶层 useAsyncData：SSR 等待数据渲染，避免 loadingNews=true 的 hydration mismatch
const { data: recommendNewsData } = await useAsyncData('home-recommend-news', async () => {
    try {
        const res = await $fetch(appConfig.api('/post/recommend'), { params: { num: 3 } })
        return res?.code === 0 ? (res.recommend || []) : []
    } catch {
        return []
    }
})
const newsList = computed(() => recommendNewsData.value || [])
const loadingNews = ref(false)

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
    if (!elS3.value || !elApplication.value?.length) return
    elApplication.value?.forEach(item => {
        item.classList.remove('fixed-sticky', 'absolute-sticky')
    })
    // 使用正确的 header 高度（tab/mo 用移动导航高度 70px）
    headerHeight = windowWidth.value <= 1024 ? 70 : 72
    const { height } = elS3.value.getBoundingClientRect()
    itemLength = elApplication.value.length
    lastChildHeight = elApplication.value[itemLength - 1].getBoundingClientRect().height
    // 与 CSS --s3-step 的 max() 兜底值对齐：桌面 90px，平板 80px，手机 96px
    const minStep = windowWidth.value <= 767 ? 96 : windowWidth.value <= 1024 ? 80 : 90
    step = Math.max(minStep, (windowHeight.value - headerHeight - lastChildHeight) / (itemLength - 1))
    elS3.value.style.setProperty('--s3-step', `${step}px`)
    elS3.value.style.height = `${height}px`
    updateApplicationItem()
}

function updateApplicationItem() {
    if (!elS3.value || !elApplication.value?.length) return
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
watch(windowWidth, async () => {
    await nextTick()
    scheduleS5MapCenter()
})

/***application end*****/

/******全球服务 — 数据 & 投影******/
const elS5Section = ref(null)
const elS5MapWrap = ref(null)
const elS5MapZoom = ref(null)
const statusS5 = ref(false)
const activeFilter = ref('all')
const S5_TOUCH_BREAKPOINT = 1024

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

// Pacific-centered Miller cylindrical
// 通过“无缝窗口”展开经度，把西半球整体平移到右侧，避免左右边缘切开国家。
const MILLER_WEST_SHIFT_THRESHOLD = -30
const MILLER_SCALE = 91.6732472209317
const MILLER_TX = 112
const MILLER_TY = 266.23891367978445

function _millerRaw(lng, lat) {
    const lam = lng * Math.PI / 180
    const phi = lat * Math.PI / 180
    return [
        lam,
        1.25 * Math.log(Math.tan(Math.PI / 4 + 0.4 * phi)),
    ]
}

function projectPacificMiller(lng, lat) {
    const unwrappedLng = lng < MILLER_WEST_SHIFT_THRESHOLD ? lng + 360 : lng
    const [x, y] = _millerRaw(unwrappedLng, lat)
    return {
        x: +(MILLER_TX + MILLER_SCALE * x).toFixed(2),
        y: +(MILLER_TY - MILLER_SCALE * y).toFixed(2),
    }
}
const s5ChinaFocusPoint = projectPacificMiller(104, 35)

function isS5TouchLayout() {
    return windowWidth.value <= S5_TOUCH_BREAKPOINT
}

function isS5TabletLayout() {
    return windowWidth.value >= 768 && windowWidth.value <= S5_TOUCH_BREAKPOINT
}

function isS5PhoneLayout() {
    return windowWidth.value > 0 && windowWidth.value < 768
}

function getMarkerSize(type) {
    const base = type === 'rd' ? 5 : type === 'business' ? 4.5 : 4
    if (isS5PhoneLayout()) {
        return base * 1.15
    }
    if (isS5TabletLayout()) {
        return base * 0.82
    }
    if (isS5TouchLayout()) {
        return base * 0.95
    }
    return base
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
        ...projectPacificMiller(loc.coords[0], loc.coords[1]),
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
let wasJustClicked = false  // 防止 touch 点击后 mouseleave 立即清除 tooltip
const markerAnchorEls = new Map()

function getMarkerKey(marker) {
    return marker?.key || `${marker.name}-${marker.type}`
}

function setMarkerAnchor(marker, el) {
    const key = getMarkerKey(marker)
    if (!key) return
    if (el) {
        markerAnchorEls.set(key, el)
    } else {
        markerAnchorEls.delete(key)
    }
}

function computeTooltipPos(marker, anchorEl = null) {
    const mapWrap = elS5MapWrap.value
    if (!mapWrap) return

    const markerGroup = anchorEl || markerAnchorEls.get(getMarkerKey(marker))
    const markerDot = markerGroup?.querySelector?.('.marker-dot')
    if (markerDot) {
        const dotRect = markerDot.getBoundingClientRect()
        tooltipScreenPos.value = {
            x: dotRect.left + dotRect.width / 2,
            y: dotRect.top + dotRect.height / 2,
        }
        return
    }

    const svgEl = mapWrap.querySelector('.s5-markers-svg')
    if (!svgEl) return
    if (typeof svgEl.createSVGPoint === 'function') {
        const point = svgEl.createSVGPoint()
        const matrix = svgEl.getScreenCTM()
        if (matrix) {
            point.x = marker.x
            point.y = marker.y
            const screenPoint = point.matrixTransform(matrix)
            tooltipScreenPos.value = {
                x: screenPoint.x,
                y: screenPoint.y,
            }
            return
        }
    }

    const svgRect = svgEl.getBoundingClientRect()
    const scaleX = svgRect.width / 800
    const scaleY = svgRect.height / 450
    tooltipScreenPos.value = {
        x: svgRect.left + marker.x * scaleX,
        y: svgRect.top + marker.y * scaleY,
    }
}

let s5MapCenterRafId = null
function centerS5MapOnChina() {
    const mapWrap = elS5MapWrap.value
    const mapZoom = elS5MapZoom.value
    if (!mapWrap || !mapZoom) return

    if (!isS5TouchLayout()) {
        mapWrap.scrollLeft = 0
        if (hoveredMarker.value) computeTooltipPos(hoveredMarker.value)
        return
    }

    const contentWidth = mapZoom.scrollWidth || mapZoom.clientWidth || mapWrap.scrollWidth
    if (!contentWidth) return

    const targetCenterX = (contentWidth * s5ChinaFocusPoint.x) / 800
    const maxScrollLeft = Math.max(0, contentWidth - mapWrap.clientWidth)
    mapWrap.scrollLeft = Math.min(
        maxScrollLeft,
        Math.max(0, targetCenterX - mapWrap.clientWidth / 2)
    )

    if (hoveredMarker.value) computeTooltipPos(hoveredMarker.value)
}

function scheduleS5MapCenter() {
    if (!process.client) return
    if (s5MapCenterRafId) cancelAnimationFrame(s5MapCenterRafId)
    s5MapCenterRafId = requestAnimationFrame(() => {
        s5MapCenterRafId = null
        centerS5MapOnChina()
    })
}

function isMarkerActive(marker) {
    const key = getMarkerKey(marker)
    return hoveredMarker.value?.key === key || clickedKey.value === key
}
function onMarkerEnter(marker, event) {
    clearTimeout(hoverClearTimer)
    const key = getMarkerKey(marker)
    if (hoveredMarker.value?.key === key) return
    hoveredMarker.value = { key, ...marker }
    computeTooltipPos(marker, event?.currentTarget || null)
}
let hoverClearTimer = null
function onMarkerLeave() {
    // touch 点击后 wasJustClicked 为 true，阻止 hover 事件立即清除 tooltip
    if (wasJustClicked) return
    hoverClearTimer = setTimeout(() => { hoveredMarker.value = null }, 60)
}
function onMarkerClick(marker, event) {
    const key = getMarkerKey(marker)
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
    computeTooltipPos(marker, event?.currentTarget || null)
}
function clearMapSelection() {
    if (!wasJustClicked) {
        hoveredMarker.value = null
        clickedKey.value = null
    }
}


let s3ScrollCleanup = null
let mapScrollCleanup = null
let s5MapResizeObserver = null
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

    scheduleS5MapCenter()

    if (typeof ResizeObserver !== 'undefined') {
        s5MapResizeObserver = new ResizeObserver(() => {
            scheduleS5MapCenter()
            if (hoveredMarker.value) computeTooltipPos(hoveredMarker.value)
        })
        if (elS5MapWrap.value) s5MapResizeObserver.observe(elS5MapWrap.value)
        if (elS5MapZoom.value) s5MapResizeObserver.observe(elS5MapZoom.value)
    }

    // 地图横向滚动时同步更新 tooltip 位置（移动端/tablet tooltip 为 fixed 定位，需随地图滚动重算坐标）
    const mapWrap = elS5MapWrap.value
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
    s5MapResizeObserver?.disconnect()
    s5MapResizeObserver = null
    if (s5MapCenterRafId) cancelAnimationFrame(s5MapCenterRafId)
    s5Observer?.disconnect()
    s5Observer = null
    clearTimeout(hoverClearTimer)
    clearTimeout(markerClickTimer)
    wasJustClicked = false
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
    left: fluid(80px, 24px);
    right: fluid(80px, 24px);
    width: auto;
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
                // iPad：border-right 已被 ::before 代替，同步变白
                @media screen and (max-width: 1024px) and (min-width: 768px) {
                    border-right: none !important;
                    &::before {
                        background-color: white !important;
                    }
                }
                // 手机端不加右侧白色 border（会产生多余白线）
                @media screen and (max-width: 767px) {
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
                    // t1+t2 同属一个语义整体，去掉块间额外间距，
                    // 用自然行高(1.3)拉近为连续文字感
                    margin-bottom: 0;
                    @include mo {
                        font-size: 24px;
                        font-weight: 300;
                        margin-bottom: 4px;
                        // keep-all：只在标点/空格处断行，"PCB产品"不会被拆分；
                        // 全角逗号"，"是合法断点，宽度不够时整体在逗号后换行
                        word-break: keep-all;
                    }
                }
                .t2,
                .t2m {
                    font-size: fluid(36px, 24px);
                    font-weight: 700;
                    @include mo {
                        font-size: 24px;
                        // display: block 只在极窄屏（≤460px）生效：
                        // slide4 t2 最宽=14字×24px=336px，
                        // 容器=viewport-88，424px时恰好容纳，460px留安全余量
                    }
                    @media screen and (max-width: 460px) {
                        span { display: block; }
                    }
                }
                .t2.en-hero {
                    font-family: 'Google Sans', sans-serif;
                    font-size: fluid(50px, 30px);
                    line-height: 1.2;
                    text-wrap: balance;
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
                    // 不限制宽度，让英文自然比中文标题宽；
                    // 90vw 兜底防止超长文本溢出容器
                    max-width: 900px;
                    text-wrap: balance;
                    span {
                        font-size: fluid(30px, 20px);
                        font-family: TTFors;
                        font-weight: 400;
                    }
                }
                @include tab {
                    .prd-abst {
                        span { font-size: 20px; }
                    }
                }
                @include mo {
                    padding: 0;
                    .prd-abst {
                        margin-top: 10px;
                        max-width: 85vw;
                        span { font-size: 18px; }
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
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(320px, 44%);
        column-gap: fluid(72px, 28px);
        align-items: stretch;
    }
    .left {
        width: auto;
        max-width: 640px;
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
        min-width: 0;
        position: relative;
        margin-right: calc(50% - 50vw);
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
        .wrap {
            grid-template-columns: minmax(0, 1fr) minmax(280px, 42%);
            column-gap: 24px;
        }
        .left {
            max-width: none;
        }
    }
    // mobile (≤992px)：纵向堆叠，图片回到正常文档流
    @include mo {
        .wrap {
            min-height: unset;
            display: block;
        }
        .left {
            width: 100%;
            max-width: none;
            padding: 36px 0 0;
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
            margin-top: 24px;
            height: 280px;
            width: 100vw;
            margin-left: calc(50% - 50vw);
            margin-right: calc(50% - 50vw);
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
    --s3-step: 90px;
    @include tab {
        --s3-step: 80px;
    }
    @media screen and (max-width: 767px) {
        --s3-step: 96px;
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
            align-items: stretch;
            height: 100%;
        }
        .left {
            flex: 0 0 52%;
            width: 52%;
            max-width: 650px;
            min-width: 0;
            height: 100%;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: flex-start;
            gap: fluid(20px, 13px);
            padding-right: fluid(26px, 18px);
            border-right: 1px solid var(--main-orange);
            transition: border-color .4s cubic-bezier(.4, 0, .2, 1);
            position: relative;
            .icon {
                font-size: fluid(40px, 26px);
                color: var(--main-orange);
                transition: color .4s cubic-bezier(.4, 0, .2, 1);
                line-height: 1;
                flex-shrink: 0;
                margin-top: -4px;
            }
            .cont {
                flex: 1 1 auto;
                min-width: 0;
                width: auto;
                max-width: 420px;
                height: 100%;
                margin-left: 0;
                display: flex;
                flex-flow: column nowrap;
                justify-content: flex-start;
                gap: 28px;
                padding-top: 2px;
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
                    margin-top: 32px;
                    margin-bottom: 0;
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
            flex: 0 0 31%;
            width: 31%;
            max-width: 400px;
            min-width: 0;
            height: 100%;
            border-radius: 10px;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: left center;
                display: block;
            }
        }
        @for $i from 1 through 6 {
            $idx: $i - 1;
            $idx_end: 6 - $i;
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
            .left {
                flex-basis: 54%;
                width: 54%;
                max-width: none;
                padding-right: 20px;
                .cont {
                    max-width: 390px;
                    gap: 24px;
                }
            }
            .right {
                flex-basis: 29%;
                width: 29%;
                max-width: 360px;
            }
        }
        @media screen and (max-width: 1024px) and (min-width: 768px) {
            padding: 36px 0 24px;
            .left {
                flex-basis: 46%;
                width: 46%;
                max-width: none;
                gap: 14px;
                padding-right: 16px;
                border-right: none; // 由 ::before 代替，可控制高度
                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 1px;
                    height: 170px; // 与右侧图片高度一致，从底部缩短
                    background-color: var(--main-orange);
                    transition: background-color .4s cubic-bezier(.4, 0, .2, 1);
                }
                &::after {
                    right: -2px; // 圆点中心（right:-2px + width:5px → 中心在 right_edge-0.5px）与线中心对齐
                }
                .icon {
                    font-size: 32px;
                    margin-top: -2px;
                }
                .cont {
                    max-width: none;
                    gap: 18px;
                    padding-top: 0;
                    .name {
                        font-size: 22px;
                    }
                    .region {
                        font-size: 14px;
                        line-height: 1.45;
                        word-break: keep-all; // 在顿号/逗号处回行，不在字间随意断
                        margin-top: 20px;
                    }
                }
            }
            .right {
                flex-basis: 42%;
                width: 42%;
                max-width: none;
                height: 170px;
                align-self: flex-start; // 图片顶部与橙色线条顶部齐平
            }
        }
        @media screen and (max-width: 767px) {
            height: 408px !important;
            overflow: hidden;
            // 手机端卡片改为标准纵向内容流：icon → 标题 → 正文 → 图片
            padding: 28px 0 0 0;
            .wrap {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                // height: auto 让 wrap 收缩到内容高度（文字 + 图片），
                // 使 ::before 线条的 bottom: 0 精确对齐图片底部，而非卡片底部
                height: auto;
                padding-right: 36px;  // 右侧留出竖线+圆点区域
                overflow: visible;
                position: relative;
                gap: 20px;
            }
            .left {
                width: 100%;
                height: auto;
                border-right: none;
                border-bottom: none;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: 12px;
                padding-right: 0;
                padding-bottom: 0;
                flex-shrink: 0;
                &::after {
                    display: none;
                }
                .icon {
                    font-size: 26px;
                    line-height: 1;
                    margin-top: 0;
                    margin-bottom: 0;
                    flex-shrink: 0;
                }
                .cont {
                    width: 100%;
                    flex: none;
                    min-width: 0;
                    height: auto;
                    margin-left: 0;
                    justify-content: flex-start;
                    gap: 14px;
                    padding-top: 0;
                    .name {
                        font-size: 20px;
                        font-weight: 700;
                        line-height: 1.25;
                    }
                    .region { font-size: 14px; line-height: 1.45;
                        margin-top: -6px;
                        margin-bottom: 0;
                        .c { margin-top: 5px; }
                    }
                }
            }
            // 右侧竖线（绝对定位，精确居中于 padding-right 区域）
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
                height: 175px;
                flex: none;
                overflow: hidden;
                border-radius: 10px;
                margin-top: 0;
                background: #eef3ff;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center top;
                    display: block;
                }
            }
        }
    }
    @media screen and (max-width: 767px) {
        // 移动端保留 sticky 叠加效果，高度由 JS 控制
    }
}

.s4 {
    padding: fluid(80px, 48px) 0 fluid(100px, 48px);
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
        padding: 48px 0 48px;
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
    overflow: visible;
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
        overflow: visible;
        z-index: 1;

        .s5-map-zoom {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            transform: translate3d(88px, -96px, 0) scale(1.34);
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
                &:focus-visible circle.marker-dot {
                    filter: drop-shadow(0 0 6px rgba(255,255,255,0.8)) !important;
                }
            }
            .s5-pulse-circle {
                animation: s5-pulse-ring 1.2s ease-out infinite;
            }
        }
        .s5-tooltip-div {
            position: fixed;
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
            z-index: 9999;
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
            max-width: 560px;
            margin: 0 auto;
        }
    }

    .s5-bottom {
        position: absolute;
        bottom: fluid(72px, 28px);
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
    @include tab {
        height: auto;
        min-height: 0;
        overflow: hidden;

        .s5-header {
            padding-top: calc(var(--HEADER_HEIGHT_MOB) + 6px);
            padding-bottom: 4px;
            .s-a {
                font-size: 15px;
                padding: 0 28px;
                text-wrap: balance;
            }
        }
        .s5-map-wrap {
            display: flex;
            align-items: center;
            overflow-x: auto;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
            overscroll-behavior-x: contain;
            flex: none;
            height: 430px;
            margin-top: 10px;
            padding: 0;
            scrollbar-width: none;
            -ms-overflow-style: none;
            &::-webkit-scrollbar { display: none; }

            .s5-map-zoom {
                position: relative;
                inset: auto;
                flex: 0 0 auto;
                width: 150vw;
                min-width: 1100px;
                max-width: none;
                aspect-ratio: 800 / 450;
                height: auto;
                display: block;
                margin: 0 auto;
                transform: none;
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
            bottom: auto;
            left: 0;
            transform: none;
            width: 100%;
            padding: 12px 20px 22px;
        }
        .s5-scroll-hint {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            width: fit-content;
            margin: 8px auto 0;
            background: rgba(0, 0, 0, 0.28);
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
            color: #fff;
            font-size: 12px;
            padding: 6px 12px 6px 8px;
            border-radius: 100px;
            pointer-events: none;
            white-space: nowrap;
            i {
                font-size: 15px;
                opacity: 0.8;
                &.ri-arrow-left-s-line  { animation: s5-hint-left  1.8s ease-in-out infinite; }
                &.ri-arrow-right-s-line { animation: s5-hint-right 1.8s ease-in-out infinite; }
            }
        }
    }
    @include mo {
        height: auto;
        min-height: 0;
        overflow: hidden;
        .s5-header {
            padding-top: calc(var(--HEADER_HEIGHT_MOB) + 4px);
            padding-bottom: 2px;
            .s-a {
                font-size: 14px;
                padding: 0 20px;
                text-wrap: balance;
            }
        }
        .s5-map-wrap {
            height: clamp(359px, calc(105.6vw + 20px), 570px);
            overflow-y: hidden;
            margin-top: 6px;

            .s5-map-zoom {
                width: 300vw;
                min-width: 960px;
            }
        }
        .s5-bottom {
            position: relative;
            bottom: auto;
            left: 0;
            transform: none;
            width: 100%;
            padding: 8px 14px 14px;
        }
        // 全部按钮独占一行（fit-content居中），其余三个筛选按钮一行（3列）
        .s5-filters {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 6px;
            .s5-fbtn:first-child {
                grid-column: 1 / -1;
                width: fit-content;
                margin: 0 auto;
            }
        }
        .s5-stats {
            gap: 6px;
            padding: 0;
            margin-top: 8px;
        }
        .s5-stat {
            flex: 1;
            min-width: 0;
            padding: 8px 8px;
            border-radius: 14px;
        }
        .s5-stat-num {
            font-size: 22px;
        }
        .s5-stat-txt {
            font-size: 10px;
            white-space: nowrap;
            line-height: 1.35;
        }
        .s5-fbtn {
            padding: 6px 6px;
            gap: 4px;
            border-radius: 10px;
        }
        .s5-flabel { font-size: 10px; white-space: nowrap; }
        .s5-fcount { font-size: 10px; }
        .s5-fdot { width: 9px; height: 9px; }
        .s5-scroll-hint {
            margin: 4px auto 0;
            padding: 5px 10px 5px 7px;
            font-size: 11px;
            i {
                font-size: 14px;
            }
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        min-height: auto;

        .s5-header {
            padding-top: calc(var(--HEADER_HEIGHT_MOB) + 2px);
            padding-bottom: 0;
            .s-a {
                font-size: 14px;
                padding: 0 24px;
            }
        }
        .s5-map-wrap {
            height: clamp(443px, calc(58.1vw + 20px), 680px);
            margin-top: 6px;

            .s5-map-zoom {
                width: 165vw;
                min-width: 1200px;
            }
        }
        .s5-scroll-hint {
            margin-top: 4px;
        }
        .s5-bottom {
            padding: 6px 18px 10px;
        }
        .s5-filters {
            gap: 6px;
        }
        .s5-fbtn {
            padding: 6px 8px;
            gap: 5px;
            border-radius: 10px;
        }
        .s5-flabel {
            font-size: 11px;
        }
        .s5-fcount {
            font-size: 10px;
        }
        .s5-fdot {
            width: 8px;
            height: 8px;
        }
        .s5-stats {
            gap: 6px;
            margin-top: 8px;
        }
        .s5-stat {
            padding: 8px 12px;
            border-radius: 14px;
        }
        .s5-stat-num {
            font-size: 22px;
        }
        .s5-stat-txt {
            font-size: 10px;
        }
    }
}
.s5-scroll-hint { display: none; }

@keyframes s5-hint-left {
    0%, 100% { transform: translateX(0);   opacity: 0.7; }
    50%       { transform: translateX(-4px); opacity: 1; }
}
@keyframes s5-hint-right {
    0%, 100% { transform: translateX(0);  opacity: 0.7; }
    50%       { transform: translateX(4px); opacity: 1; }
}


</style>
