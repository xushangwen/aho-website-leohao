<template>
    <main>
        <EleDefaultCover
            image="/images/about/glonet/cover.jpg"
            image-mobile="/images/about/glonet/cover-m.jpg"
            :text="$t('glonet.coverTitle')"
        ></EleDefaultCover>
        <EleBreadcrumb
            :navigate="breadcrumb"
        />
        <nav class="plate-switcher">
            <div
                class="item"
                :class="{'active': indexPlate === 0}"
                @mouseenter="changePlateIndex(0)"
            >{{ $t('glonet.switchGlobal') }}</div>
            <div
                class="item"
                :class="{'active': indexPlate === 1}"
                @mouseenter="changePlateIndex(1)"
            >{{ $t('glonet.switchDomestic') }}</div>
        </nav>
        <section
            class="plate-container"
            ref="elPlateContainer"
            :style="{
                height: `${plateHeight}px`
            }"
        >
            <div
                ref="elGlo"
                class="glo"
                :class="{active: indexPlate === 0}"
            >
                <img src="/images/about/glonet/glo.jpg" alt="">
                <div class="point-layer">
                    <div
                        class="item"
                        ref="elGloPoints"
                        :class="[item.type, {active: gloActiveCard !== -1 && gloFactoryCards[gloActiveCard]?.pointIndex === index}]"
                        v-for="(item, index) in gloPoints"
                        :key="index"
                        :style="{
                            left: item.position?.left || 0,
                            top: item.position?.top || 0
                        }"
                    >
                        <div class="dot"></div>
                        <div class="cont-container">
                            <div class="name">{{ locale === 'en' ? (item.nameEn || item.name) : item.name }}</div>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.284 17.3647L12.9131 23.7256L6.54222 17.3547C3.02173 13.8342 3.02173 8.1334 6.54222 4.62291C10.0527 1.10242 15.7535 1.10242 19.264 4.62191C22.7745 8.1324 22.7745 13.8332 19.264 17.3437L19.284 17.3647ZM11.913 9.99366H8.91255V11.9939H11.913V14.9944H13.9132V11.9939H16.9137V9.99366H13.9132V6.99324H11.913V9.99366Z" fill="#FF6400"/>
                            </svg>
                        </div>

                    </div>
                </div>
                <div class="profile">
                    <div class="cont">
                        <div class="item" style="color: var(--main-yellow)">
                            <div class="t1">{{ $t('glonet.baseTitle') }}</div>
                            <div class="num">3</div>
                            <div class="t2">{{ $t('glonet.baseCount') }}</div>
                            <div class="t3">{{ $t('glonet.baseNames') }}</div>
                            <i class="icon ri-hotel-line"></i>
                        </div>
                        <div class="item" style="color: var(--main-blue)">
                            <div class="t1">{{ $t('glonet.centerTitle') }}</div>
                            <div class="num">5</div>
                            <div class="t2">{{ $t('glonet.centerCount') }}</div>
                            <div class="t3">{{ $t('glonet.centerNames') }}</div>
                            <i class="icon ri-global-line"></i>
                        </div>
                        <div class="item" style="color: var(--main-orange)">
                            <div class="t1">{{ $t('glonet.customerTitle') }}</div>
                            <div class="num">20<span>+</span></div>
                            <div class="t2">{{ $t('glonet.customerCount') }}</div>
                            <div class="t3">{{ $t('glonet.customerRegions') }}</div>
                            <i class="icon ri-user-location-line"></i>
                        </div>
                    </div>

                </div>
                <div class="legend">
                <div class="item">
                    <div class="circle customer"></div>
                    <div class="type-name">{{ $t('glonet.legendCustomer') }}</div>
                </div>
                <div class="item">
                    <div class="circle sale"></div>
                    <div class="type-name">{{ $t('glonet.legendSales') }}</div>
                </div>
                <div class="item">
                    <div class="circle base"></div>
                    <div class="type-name">{{ $t('glonet.legendBase') }}</div>
            </div>
        </div>
            <!-- 工厂线条 -->
            <div class="glo-line-group">
                <svg :width="gloLineGroupWidth" :height="gloLineGroupHeight">
                    <path
                        class="line-path"
                        :class="{active: gloActiveCard === index}"
                        v-for="(path, index) in gloLineGroup"
                        :key="`glo-line-${index}`"
                        :d="path"
                        fill="none"
                    />
                    <circle
                        class="line-dot"
                        :class="{active: gloActiveCard === index}"
                        v-for="(dot, index) in gloLineDots"
                        :key="`glo-dot-${index}`"
                        :cx="dot.x"
                        :cy="dot.y"
                        r="4"
                    />
                </svg>
            </div>
            <!-- 工厂卡片 -->
            <div class="glo-factory-cards">
                <div
                    class="glo-card"
                    ref="elGloCards"
                    v-for="(card, index) in gloFactoryCards"
                    :key="`glo-card-${index}`"
                    :class="{active: gloActiveCard === index}"
                    @mouseenter="gloCardEnter(index)"
                    @mouseleave="gloCardLeave()"
                >
                    <div class="card-body">
                        <div class="card-header">
                            <i class="ri-building-line card-icon"></i>
                        </div>
                        <div class="card-type">{{ locale === 'en' ? (card.typeEn || card.type) : card.type }}</div>
                        <div class="card-name">{{ locale === 'en' ? (card.nameEn || card.name) : card.name }}</div>
                    </div>
                    <div class="card-img">
                        <img :src="card.image" :alt="card.name">
                    </div>
                </div>
            </div>
        </div>
        <div
            ref="elChina"
                class="china"
                :class="{active: indexPlate === 1}"
            >
                <img src="/images/about/glonet/china.jpg" alt="">
                <div class="line-group">
                    <svg
                        :width="lineGroupWidth"
                        :height="lineGroupHeight"
                    >
                        <path
                            class="line-path"
                            :class="{active: activeItemIndex === index}"
                            v-for="(item, index) in lineGroup"
                            :key="`line${index}`"
                            :d="item"
                            fill="none"
                        ></path>
                    </svg>
                </div>
                <div class="point-layer">
                    <div
                        class="item"
                        ref="elChinaPoints"
                        :class="{'large-item': item.largeItem, 'active': activeItemIndex === index}"
                        v-for="(item, index) in chinaPointsList"
                        :key="`item${index}`"
                        :style="{
                            left: item.position?.left || 0,
                            top: item.position?.top || 0
                        }"
                    >
                        <div class="dot"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="34" viewBox="0 0 28 34" fill="none">
                            <path d="M23.5461 24.046L13.9911 33.586L4.43607 24.031C-0.843926 18.751 -0.843926 10.201 4.43607 4.93602C9.70107 -0.343982 18.2511 -0.343982 23.5161 4.93452C28.7811 10.1995 28.7811 18.7495 23.5161 24.0145L23.5461 24.046ZM12.4911 12.991H7.99107V15.991H12.4911V20.491H15.4911V15.991H19.9911V12.991H15.4911V8.49102H12.4911V12.991Z" fill="#FF6400"/>
                        </svg>
                    </div>
                </div>
                <div class="detail-group">
                    <div
                        class="detail-list"
                        v-for="(list, index) in chinaPoints"
                        :key="`detaillist${index}`"
                    >
                        <div
                            class="item"
                            ref="elChinaItem"
                            :data-col="index"
                            :data-row="detailIndex"
                            :class="{'large-item': detailItem.largeItem}"
                            v-for="(detailItem, detailIndex) in list"
                            :key="`detailItem${detailIndex}`"
                            @mouseenter="itemMouseEnterHandler($event, index, detailIndex)"
                            @mouseleave="itemMouseLeaveHandler($event, index, detailIndex)"

                        >
                            <div class="name">{{ locale === 'en' ? (detailItem.nameEn || detailItem.name) : detailItem.name }}</div>
                            <div class="cus" v-if="detailItem.cus.length > 0">
                                <div
                                    class="cus-name"
                                    v-for="(cusItem, cusIndex) in (locale === 'en' ? (detailItem.cusEn || detailItem.cus) : detailItem.cus)"
                                >{{cusItem}}</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
<!--    <EleMapMarker-->
<!--        map-image="/images/about/glonet/glo.jpg"-->
<!--        :enable-click="true"-->
<!--    ></EleMapMarker>-->
    </main>
</template>

<script setup lang="ts">
import useEventStore from "@/stores/event";
const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()
const chinaPoints = ref(appConfig.clientConfig.chinaPoints)
const gloPoints = ref(appConfig.clientConfig.gloPoints)

// 工厂卡片数据（pointIndex 对应 gloPoints 中的索引：23=常州, 24=泰国）
const gloFactoryCards = [
    { name: '常州澳弘电子股份有限公司', nameEn: 'Changzhou Aohong Electronics Co., Ltd.', type: '双面 / 多层 / HDI板', typeEn: 'Double-sided / Multi-layer / HDI PCB', image: '/images/home/about-bg.jpg', pointIndex: 23 },
    { name: '常州海弘电子有限公司', nameEn: 'Changzhou Haihong Electronics Co., Ltd.', type: '单面PCB', typeEn: 'Single-sided PCB', image: '/images/contact/haihong.png', pointIndex: 23 },
    { name: '澳弘（泰国）电子有限公司', nameEn: 'Aohong Electronics (Thailand) Co., Ltd.', type: '单面 / 双面 / 多层 / HDI', typeEn: 'Single-sided / Double-sided / Multi-layer / HDI', image: '/images/contact/thailand.png', pointIndex: 24 },
]
const gloLineGroup = ref<string[]>([])
const gloLineDots = ref<{x: number, y: number}[]>([])
const gloLineGroupWidth = ref(0)
const gloLineGroupHeight = ref(0)
const gloActiveCard = ref(-1)
const elGloCards = ref<HTMLElement[] | null>(null)
const elGloPoints = ref<HTMLElement[] | null>(null)
const eventStore = useEventStore()

const windowWidth = computed(() => eventStore.windowWidth)

const chinaPointsList = computed(() => {
    const res = []
    for (let i = 0; i < chinaPoints.value.length; i++) {
        for (let j = 0; j < chinaPoints.value[i].length; j++) {
            const item = chinaPoints.value[i][j]
            item.i = i
            item.j = j
            res.push(item)
        }
    }
    return res
})
const { t, locale } = useI18n()
const breadcrumb = computed(() => [
    { name: t('nav.about'), link: '/about' },
    { name: t('glonet.coverTitle'), link: '' }
])

const indexPlate = ref(0)
const elGlo = ref(null)
const elChina = ref(null)
const elPlateContainer = ref(null)
const plateHeight = ref(0)
function changePlateIndex(index: number) {
    indexPlate.value = index
    // 测量高度
    if (index === 0) {
        // 0时为世界
        const { height } = elGlo.value.getBoundingClientRect()
        plateHeight.value = height
        nextTick(() => {
            calcGloLines()
        })
    }
    if (index === 1) {
        const { width, height } = elChina.value.getBoundingClientRect()
        plateHeight.value = height
        lineGroupWidth.value = width
        lineGroupHeight.value = height
        changeChinaLine()
    }
}
// watch(() => windowWidth.value, () => {
//     changeChinaLine(indexPlate.value)
// })

const lineGroupWidth = ref(0)
const lineGroupHeight = ref(0)
// 初始化和resize时重新计算line

const lineGroup = ref([])
const elChinaItem = ref(null)
const elChinaPoints = ref(null)
function changeChinaLine() {
    const lines = []
    elChinaItem.value.forEach((item, index) => {
        const { col, row } = item.dataset
        const pointEle = findPointEle(col, row)
        const { left: pointLeft, top: pointTop, width: pointWidth, height: pointHeight } = pointEle.getBoundingClientRect()
        const { left: itemLeft, top: itemTop, width: itemWidth, height: itemHeight } = item.getBoundingClientRect()
        const { left: plateLeft, top:plateTop } = elChina.value.getBoundingClientRect()
        // 连接点在item中间
        // 起点，起点是点
        const start = {
            x: pointLeft - plateLeft,
            y: pointTop - plateTop,
        }
        // 终点，终点是item
        const end = {
            x: itemLeft - plateLeft + itemWidth / 2,
            y: itemTop - plateTop + itemHeight / 2,
        }
        let line = []
        if (Math.abs(start.x - end.x) > Math.abs(start.y - end.y)) {
            // 水平, 找竖线的x坐标
            let x = 0
            if (start.x > end.x) {
                // 起点在右边
                x = end.x + (itemWidth / 2 + 5 + 10 * (index % 3 + 1))
            } else {
                // 起点在左边
                x = end.x - (itemWidth / 2 + 5 + 10 * (index % 3 + 1))
            }
            line = [
                start,
                {x, y: start.y},
                {x, y: end.y},
                end
            ]
        } else {
            // 垂直，找横线的y坐标
            let y = 0
            if (start.y > end.y) {
                // 起点在下面
                y = end.y + (itemHeight / 2 + 10)
            } else {
                // 起点在上面
                y = end.y - (itemHeight / 2 + 10)
            }
            line = [
                start,
                {x: start.x, y},
                {x: end.x, y},
                end
            ]
        }
        // 生成路径
        lines.push(`M${line[0].x},${line[0].y} L${line[1].x},${line[1].y} L${line[2].x},${line[2].y} L${line[3].x},${line[3].y}`)
    })
    lineGroup.value = lines
}
function findPointEle(col: number, row: number) {
    // 通过chinaPointsList查询points的index，通过index查询HTML元素
    const index = chinaPointsList.value.findIndex(item => item.i === Number(col) && item.j === Number(row))
    if (index === -1) return
    return elChinaPoints.value[index]
}

function calcGloLines() {
    if (!elGloCards.value?.length || !elGloPoints.value?.length || !elGlo.value) return
    const gloEl = elGlo.value as unknown as HTMLElement
    const { left: baseLeft, top: baseTop, width, height } = gloEl.getBoundingClientRect()
    gloLineGroupWidth.value = width
    gloLineGroupHeight.value = height
    const lines: string[] = []
    const dots: {x: number, y: number}[] = []
    elGloCards.value.forEach((cardEl: HTMLElement, index: number) => {
        const card = gloFactoryCards[index]
        const pointEl = elGloPoints.value![card.pointIndex]
        if (!pointEl) return
        const dotEl = pointEl.querySelector('.dot') as HTMLElement || pointEl
        const { left: dL, top: dT, width: dW, height: dH } = dotEl.getBoundingClientRect()
        const { left: cL, top: cT, width: cW, height: cH } = cardEl.getBoundingClientRect()
        const start = { x: dL - baseLeft + dW / 2, y: dT - baseTop + dH / 2 }
        const end = { x: cL - baseLeft + cW / 2, y: cT - baseTop + cH }
        
        // 只有第一张卡片(index=0)用横→竖拐法，其他都用竖→横→竖
        if (index === 0) {
            const midX = end.x
            const midY1 = start.y
            const midY2 = end.y
            lines.push(`M${start.x.toFixed(1)},${start.y.toFixed(1)} L${midX.toFixed(1)},${midY1.toFixed(1)} L${midX.toFixed(1)},${midY2.toFixed(1)}`)
        } else {
            const midY = start.y + (end.y - start.y) * 0.6
            lines.push(`M${start.x.toFixed(1)},${start.y.toFixed(1)} L${start.x.toFixed(1)},${midY.toFixed(1)} L${end.x.toFixed(1)},${midY.toFixed(1)} L${end.x.toFixed(1)},${end.y.toFixed(1)}`)
        }
        dots.push({ x: end.x, y: end.y })
    })
    gloLineGroup.value = lines
    gloLineDots.value = dots
}
function gloCardEnter(index: number) {
    gloActiveCard.value = index
}
function gloCardLeave() {
    gloActiveCard.value = -1
}

function plateHeightInit() {
    changePlateIndex(0)
}

/*********china start********/
let currentIndex = [-1, -1] // [col ,row]
const activeItemIndex = ref(-1)
function itemMouseEnterHandler(event: Event, col: number, row: number) {
    if (col === currentIndex[0] && row === currentIndex[1]) return
    currentIndex = [col, row]
    activeItemIndex.value = chinaPointsList.value.findIndex(item => item.i === Number(col) && item.j === Number(row))
}

function itemMouseLeaveHandler(event: Event, col: number, row: number) {
    currentIndex = [-1, -1]
    activeItemIndex.value = -1
}
/*********china end********/
let timerInitPlateHeight = null
onMounted(() => {
    // 页面加载结束后初始化高度
    timerInitPlateHeight = setTimeout(() => {
        plateHeightInit()
    }, 1000)
    const lineResizeObserver = new ResizeObserver(entries => {
        window.requestAnimationFrame(() => {
            for (const entry of entries) {
                if (entry.target === elChina.value) {
                    const { width, height } = entry.contentRect
                    lineGroupWidth.value = width
                    lineGroupHeight.value = height
                    changeChinaLine()
                }
                if (entry.target === elGlo.value) {
                    calcGloLines()
                }
            }
        })
    })
    lineResizeObserver.observe(elChina.value)
    lineResizeObserver.observe(elGlo.value)
})
onUnmounted(() => {
    clearTimeout(timerInitPlateHeight)
})
</script>

<style scoped lang="scss">
    .plate-switcher {
        height: 85px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        gap: tovw(80px);
        @include mo {
            height: 60px;
            gap: 24px;
        }
        .item {
            width: 400px;
            height: inherit;
            color: var(--main-light-gray, #DCDCDC);
            font-size: fluid(38px, 18px);
            line-height: 85px;
            text-align: center;
            transition: all .3s;
            border-bottom: 1px solid transparent;
            cursor: pointer;
            @include mo {
                width: auto;
                font-size: 18px;
                line-height: 60px;
            }
            //&:hover {
            //    color: #656565;
            //}
            &.active {
                color: #000;
                border-bottom: 1px solid var(--main-orange);
                font-weight: bold;
            }
        }
    }

    .plate-container {
        position: relative;
        transition: all .3s;
        overflow: hidden;
        @include mo {
            overflow-x: auto;
            min-width: 320px;
        }
        .glo,
        .china {
            width: 100%;
            height: auto;
            position: absolute;
            left: 0;
            top: 0;
            visibility: hidden;
            opacity: 0;
            transform: translateY(20px);
            transition: all .3s;
            z-index: 1;
            &.active {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
                z-index: 9;
            }
            > img {
                width: 100%;
                height: auto;
            }
            .point-layer {
                position: absolute;
                inset: 0;
            }
        }
    }

    .glo {
        overflow: hidden;
        .point-layer {
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
        .profile {
            width: 100%;
            height: 240px;
            position: absolute;
            left: 0;
            top: tovw(100px);
            .cont {
                width: 100%;
                max-width: min(1000px, 90vw);
                height: inherit;
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                margin: 0 auto;
                gap: 16px;
            }
            .item {
                padding: 20px;
                height: inherit;
                flex: 1;
                background-color: rgba(255, 255, 255, .3);
                &::before {
                    content: '';
                    position: absolute;
                    left: -1px;
                    top: 40px;
                    width: 3px;
                    height: 85px;
                    background-color: currentColor;
                }
                .t1 {
                    color: var(--main-black, #000);
                    font-size: 18px;
                    line-height: 1;
                }
                .num {
                    color: inherit;
                    leading-trim: both;
                    text-edge: cap;
                    font-family: "SpaceGrotesk";
                    font-size: fluid(60px);
                    font-weight: 700;
                    line-height: 1;
                    letter-spacing: -1.2px;
                    margin-top: 14px;
                }
                .t2,
                .t3 {
                    color: inherit;
                    font-size: 14px;
                    line-height: 1.3;
                }
                .t2 {
                    margin-top: 14px;
                }
                .t3 {
                    font-weight: bold;
                }
                .icon {
                    font-size: fluid(24px);
                    position: absolute;
                    left: 20px;
                    bottom: 20px;
                }
            }
        }
        &.active {
            .point-layer {
                .item {
                    .dot {
                        transform: scale(1);
                    }
                    .cont-container {
                        transform: translateY(0);
                    }
                }
            }
        }
        .legend {
        position: absolute;
        left: 100px;
        bottom: 30px;
        z-index: 10;
        display: flex;
        flex-flow: column nowrap;
        gap: 15px;
        .item {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .circle {
                width: 18px;
                height: 18px;
                border-radius: 50%;
                border: 2px solid currentColor;
                margin-right: 5px;;
                &.customer {
                    color: var(--main-orange);
                }
                &.sale {
                    color: var(--main-blue);
                }
                &.base {
                    color: var(--main-yellow);
                }
            }
            .type-name {
                font-size: fluid(20px);
                color: var(--main-dark-gray);
            }
        }
    }
        // 线条SVG层
        .glo-line-group {
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: 5;
            svg {
                path {
                    stroke-dasharray: 3 3;
                    stroke-width: 1;
                    stroke: #b5b5b5;
                    transition: all .3s;
                }
                path.active {
                    stroke-dasharray: 5 3;
                    stroke-width: 1.5;
                    stroke: var(--main-yellow);
                    animation: stroke-animate 10s linear infinite;
                }
                circle {
                    fill: var(--main-yellow);
                    stroke: #fff;
                    stroke-width: 2;
                    transition: all .3s;
                }
                circle.active {
                    fill: var(--main-orange);
                    r: 5;
                }
            }
        }
        // 工厂卡片组 — 与上方 profile 数据区等宽居中
        .glo-factory-cards {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            max-width: min(1000px, 90vw);
            top: calc(#{tovw(100px)} + 260px);
            display: flex;
            flex-direction: row;
            gap: 16px;
            z-index: 10;
        }
        .glo-card {
            flex: 1;
            display: flex;
            flex-direction: row;
            background: rgba(255, 255, 255, 0.92);
            backdrop-filter: blur(6px);
            border-right: 3px solid var(--main-yellow);
            cursor: pointer;
            transition: all .3s;
            position: relative;
            &:hover,
            &.active {
                border-right-color: var(--main-orange);
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.18);
                transform: translateX(-4px);
            }
            .card-img {
                width: 150px;
                flex: none;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    transition: transform .4s;
                }
            }
            &:hover .card-img img,
            &.active .card-img img {
                transform: scale(1.06);
            }
            .card-body {
                padding: 12px 18px;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 6px;
            }
            .card-header {
                display: flex;
                align-items: center;
                margin-bottom: 4px;
            }
            .card-icon {
                font-size: fluid(20px);
                color: var(--main-yellow);
            }
            .card-type {
                font-size: 11px;
                color: var(--main-yellow);
                font-weight: 600;
                letter-spacing: 0.02em;
                line-height: 1.4;
            }
            .card-name {
                font-size: 15px;
                font-weight: 700;
                color: var(--main-blue);
                line-height: 1.3;
                margin-top: 2px;
            }
        }
        // 悬停卡片时高亮对应地图点位
        .point-layer .item.active .dot {
            transform: scale(2.5) !important;
            background-color: var(--main-orange) !important;
        }
    }

    .china {
        overflow: hidden;
        .point-layer,
        .line-group,
        .detail-group {
            position: absolute;
            inset: 0;
            overflow: hidden;
        }
        .detail-group {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: flex-end;
            padding: 0 tovw(60px) tovw(140px);
            gap: fluid(30px);
            .detail-list {
                width: 100%;
                max-width: min(300px, 90vw);
                display: flex;
                flex-flow: column nowrap;
                justify-content: flex-end;
                align-items: center;
                gap: fluid(25px);
            }
            .item {
                width: 100%;
                max-width: min(300px, 90vw);
                background-color: white;
                border-top: 2px solid var(--main-blue);
                padding: 12px 18px;
                cursor: pointer;
                transition: all .3s;
                &.large-item {
                    .cus-name {
                        font-size: fluid(20px);
                        &::before {
                            display: none;
                        }
                    }
                }
                &:hover {
                    background-color: #f5f5f5;
                }
            }
            .name {
                color: #231815;
                font-size: fluid(24px);
            }
            .cus {
                margin-top: 12px;
            }
            .cus-name {
                display: flex;
                flex-flow: row nowrap;
                justify-content: flex-start;
                align-items: flex-start;
                margin-bottom: 6px;
                color: #231815;
                font-size: 12px;
                line-height: 1.5;
                white-space: normal;
                word-break: break-all;
                &::before {
                    content: '';
                    display: block;
                    flex: none;
                    width: 4px;
                    height: 4px;
                    border-radius: 50%;
                    background-color: var(--main-orange);
                    margin-right: 6px;
                    margin-top: 5px;
                }
            }
        }
        .point-layer {
            .item {
                width: 1px;
                height: 1px;
                position: absolute;
            }
            .dot {
                width: 14px;
                height: 14px;
                border-radius: 14px;
                background-color: var(--main-blue);
                border: #fff 2px solid;
                position: absolute;
                left: -7px;
                top: -7px;
                transition: all .3s;
            }
            svg {
                transform: translateY(-20px);
                opacity: 0;
                transition: all .3s;
                position: absolute;
                top: -34px;
                left: -14px;
            }
            .item.active {
                z-index: 9;
                .dot {
                    transform: scale(0);
                }
                svg {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
        }
        .line-group {
            svg {
                path {
                    stroke-dashoffset: 0;
                    stroke-dasharray: 2 2;
                    stroke-width: 1;
                    stroke-linecap: round;
                    transition: all .3s;
                    stroke: #989898;
                }
                path.active {
                    stroke-dasharray: 4 4;
                    stroke-width: 2;
                    stroke: var(--main-orange);
                    animation: stroke-animate 50s linear infinite;
                }
            }
        }
    }
</style>
<style>
@keyframes stroke-animate {
    0% {
        stroke-dashoffset: 0;
    }
    100% {
        stroke-dashoffset: 100%;
    }
}
</style>
