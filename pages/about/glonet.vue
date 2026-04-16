<template>
    <main>
        <EleDefaultCover
            image="/images/about/glonet/cover.jpg"
            image-mobile="/images/about/glonet/cover-m.jpg"
            :text="$t('glonet.coverTitle')"
        ></EleDefaultCover>
        <EleBreadcrumb :navigate="breadcrumb" />
        <nav class="plate-switcher">
            <div
                class="item"
                :class="{ active: indexPlate === 0 }"
                @click="changePlateIndex(0)"
            >
                {{ $t("glonet.switchGlobal") }}
            </div>
            <div
                class="item"
                :class="{ active: indexPlate === 1 }"
                @click="changePlateIndex(1)"
            >
                {{ $t("glonet.switchDomestic") }}
            </div>
        </nav>
        <section
            class="plate-container"
            ref="elPlateContainer"
            :style="{
                height: `${plateHeight}px`,
            }"
        >
            <div ref="elGlo" class="glo" :class="{ active: indexPlate === 0 }">
                <div class="map-scroll-wrap" ref="elGloMapScroll">
                    <!-- map-inner 作为整体缩放单元：img + 标记点层同步扩宽，彻底避免错位 -->
                    <div class="map-inner">
                        <img src="/images/about/glonet/glo.jpg" alt="" />
                        <div class="point-layer">
                            <div
                                class="item"
                                ref="elGloPoints"
                                :class="[
                                    item.type,
                                    {
                                        active:
                                            gloActiveCard !== -1 &&
                                            gloFactoryCards[gloActiveCard]
                                                ?.pointIndex === index,
                                    },
                                ]"
                                v-for="(item, index) in gloPoints"
                                :key="index"
                                :style="{
                                    left: item.position?.left || 0,
                                    top: item.position?.top || 0,
                                }"
                            >
                                <div class="dot"></div>
                                <div class="cont-container">
                                    <div class="name">
                                        {{
                                            locale === "en"
                                                ? item.nameEn || item.name
                                                : item.name
                                        }}
                                    </div>
                                    <svg
                                        width="25"
                                        height="24"
                                        viewBox="0 0 25 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M19.284 17.3647L12.9131 23.7256L6.54222 17.3547C3.02173 13.8342 3.02173 8.1334 6.54222 4.62291C10.0527 1.10242 15.7535 1.10242 19.264 4.62191C22.7745 8.1324 22.7745 13.8332 19.264 17.3437L19.284 17.3647ZM11.913 9.99366H8.91255V11.9939H11.913V14.9944H13.9132V11.9939H16.9137V9.99366H13.9132V6.99324H11.913V9.99366Z"
                                            fill="#FF6400"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /map-inner -->
                    <div class="legend">
                        <div class="item">
                            <div class="circle customer"></div>
                            <div class="type-name">
                                {{ $t("glonet.legendCustomer") }}
                            </div>
                        </div>
                        <div class="item">
                            <div class="circle sale"></div>
                            <div class="type-name">
                                {{ $t("glonet.legendSales") }}
                            </div>
                        </div>
                        <div class="item">
                            <div class="circle base"></div>
                            <div class="type-name">
                                {{ $t("glonet.legendBase") }}
                            </div>
                        </div>
                    </div>
                    <!-- 工厂线条 -->
                    <div class="glo-line-group">
                        <svg
                            :width="gloLineGroupWidth"
                            :height="gloLineGroupHeight"
                        >
                            <path
                                class="line-path"
                                :class="{ active: gloActiveCard === index }"
                                v-for="(path, index) in gloLineGroup"
                                :key="`glo-line-${index}`"
                                :d="path"
                                fill="none"
                            />
                            <circle
                                class="line-dot"
                                :class="{ active: gloActiveCard === index }"
                                v-for="(dot, index) in gloLineDots"
                                :key="`glo-dot-${index}`"
                                :cx="dot.x"
                                :cy="dot.y"
                                r="4"
                            />
                        </svg>
                    </div>
                </div>
                <!-- 移动端滑动提示 -->
                <div class="map-scroll-hint">
                    <i class="ri-arrow-left-s-line"></i>
                    <span>{{ $t("common.swipeHint") }}</span>
                    <i class="ri-arrow-right-s-line"></i>
                </div>
                <div class="profile">
                    <div class="cont">
                        <div class="item" style="color: var(--main-yellow)">
                            <div class="t1">{{ $t("glonet.baseTitle") }}</div>
                            <div class="num">3</div>
                            <div class="t2">{{ $t("glonet.baseCount") }}</div>
                            <div class="t3">{{ $t("glonet.baseNames") }}</div>
                            <i class="icon ri-hotel-line"></i>
                        </div>
                        <div class="item" style="color: var(--main-blue)">
                            <div class="t1">{{ $t("glonet.centerTitle") }}</div>
                            <div class="num">5</div>
                            <div class="t2">{{ $t("glonet.centerCount") }}</div>
                            <div class="t3">{{ $t("glonet.centerNames") }}</div>
                            <i class="icon ri-global-line"></i>
                        </div>
                        <div class="item" style="color: var(--main-orange)">
                            <div class="t1">
                                {{ $t("glonet.customerTitle") }}
                            </div>
                            <div class="num">20<span>+</span></div>
                            <div class="t2">
                                {{ $t("glonet.customerCount") }}
                            </div>
                            <div class="t3">
                                {{ $t("glonet.customerRegions") }}
                            </div>
                            <i class="icon ri-user-location-line"></i>
                        </div>
                    </div>
                </div>
                <!-- 工厂卡片 -->
                <div class="glo-factory-cards">
                    <div
                        class="glo-card"
                        ref="elGloCards"
                        v-for="(card, index) in gloFactoryCards"
                        :key="`glo-card-${index}`"
                        :class="{ active: gloActiveCard === index }"
                        @mouseenter="gloCardEnter(index)"
                        @mouseleave="gloCardLeave()"
                    >
                        <div class="card-body">
                            <div class="card-header">
                                <i class="ri-building-line card-icon"></i>
                            </div>
                            <div class="card-type">
                                {{
                                    locale === "en"
                                        ? card.typeEn || card.type
                                        : card.type
                                }}
                            </div>
                            <div class="card-name">
                                {{
                                    locale === "en"
                                        ? card.nameEn || card.name
                                        : card.name
                                }}
                            </div>
                        </div>
                        <div class="card-img">
                            <img :src="card.image" :alt="card.name" />
                        </div>
                    </div>
                </div>
            </div>
            <div
                ref="elChina"
                class="china"
                :class="{ active: indexPlate === 1 }"
            >
                <div class="map-scroll-wrap" ref="elChinaMapScroll">
                    <!-- map-inner 作为整体缩放单元：img + 标记点层同步偏移，避免错位 -->
                    <div class="map-inner">
                        <img src="/images/about/glonet/china.jpg" alt="" />
                        <div class="line-group">
                            <svg
                                :width="lineGroupWidth"
                                :height="lineGroupHeight"
                            >
                                <path
                                    class="line-path"
                                    :class="{
                                        active: activeItemIndex === index,
                                    }"
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
                                :class="{
                                    'large-item': item.largeItem,
                                    active: activeItemIndex === index,
                                }"
                                v-for="(item, index) in chinaPointsList"
                                :key="`item${index}`"
                                :style="{
                                    left: item.position?.left || 0,
                                    top: item.position?.top || 0,
                                }"
                            >
                                <div class="dot"></div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="34"
                                    viewBox="0 0 28 34"
                                    fill="none"
                                >
                                    <path
                                        d="M23.5461 24.046L13.9911 33.586L4.43607 24.031C-0.843926 18.751 -0.843926 10.201 4.43607 4.93602C9.70107 -0.343982 18.2511 -0.343982 23.5161 4.93452C28.7811 10.1995 28.7811 18.7495 23.5161 24.0145L23.5461 24.046ZM12.4911 12.991H7.99107V15.991H12.4911V20.491H15.4911V15.991H19.9911V12.991H15.4911V8.49102H12.4911V12.991Z"
                                        fill="#FF6400"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <!-- /map-inner -->
                </div>
                <!-- /map-scroll-wrap -->
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
                            :class="{ 'large-item': detailItem.largeItem }"
                            v-for="(detailItem, detailIndex) in list"
                            :key="`detailItem${detailIndex}`"
                            @mouseenter="
                                itemMouseEnterHandler(
                                    $event,
                                    index,
                                    detailIndex,
                                )
                            "
                            @mouseleave="
                                itemMouseLeaveHandler(
                                    $event,
                                    index,
                                    detailIndex,
                                )
                            "
                        >
                            <div class="name">
                                {{
                                    locale === "en"
                                        ? detailItem.nameEn || detailItem.name
                                        : detailItem.name
                                }}
                            </div>
                            <div class="cus" v-if="detailItem.cus.length > 0">
                                <div
                                    class="cus-name"
                                    v-for="(cusItem, cusIndex) in locale ===
                                    'en'
                                        ? detailItem.cusEn || detailItem.cus
                                        : detailItem.cus"
                                >
                                    {{ cusItem }}
                                </div>
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
const runtimeConfig = useRuntimeConfig();
const appConfig = useAppConfig();
const chinaPoints = ref(appConfig.clientConfig.chinaPoints);
const gloPoints = ref(appConfig.clientConfig.gloPoints);

// 工厂卡片数据（pointIndex 对应 gloPoints 中的索引：23=常州, 24=泰国）
const gloFactoryCards = [
    {
        name: "常州澳弘电子股份有限公司",
        nameEn: "Changzhou Aohong\u200B Electronics Co., Ltd.",
        type: "双面 / 多层 / HDI板",
        typeEn: "Double-sided /\u200B Multi-layer / HDI PCB",
        image: "/images/home/about-bg.jpg",
        pointIndex: 23,
    },
    {
        name: "常州海弘电子有限公司",
        nameEn: "Changzhou Haihong\u200B Electronics Co., Ltd.",
        type: "单面PCB",
        typeEn: "Single-sided PCB",
        image: "/images/contact/haihong.png",
        pointIndex: 23,
    },
    {
        name: "澳弘（泰国）电子有限公司",
        nameEn: "Aohong Electronics\u200B (Thailand) Co., Ltd.",
        type: "单面 / 双面 / 多层 / HDI",
        typeEn: "Single-sided / Double-sided /\u200B Multi-layer\u00A0/\u00A0HDI",
        image: "/images/contact/thailand.png",
        pointIndex: 24,
    },
];
const gloLineGroup = ref<string[]>([]);
const gloLineDots = ref<{ x: number; y: number }[]>([]);
const gloLineGroupWidth = ref(0);
const gloLineGroupHeight = ref(0);
const gloActiveCard = ref(-1);
const elGloCards = ref<HTMLElement[] | null>(null);
const elGloPoints = ref<HTMLElement[] | null>(null);
const eventStore = useEventStore();

const windowWidth = computed(() => eventStore.windowWidth);

const chinaPointsList = computed(() => {
    const res = [];
    for (let i = 0; i < chinaPoints.value.length; i++) {
        for (let j = 0; j < chinaPoints.value[i].length; j++) {
            const item = chinaPoints.value[i][j];
            item.i = i;
            item.j = j;
            res.push(item);
        }
    }
    return res;
});
const { t, locale } = useI18n();
const breadcrumb = computed(() => [
    { name: t("nav.about"), link: "/about" },
    { name: t("glonet.coverTitle"), link: "" },
]);

const indexPlate = ref(0);
const elGlo = ref(null);
const elChina = ref(null);
const elPlateContainer = ref(null);
const elGloMapScroll = ref<HTMLElement | null>(null);
const elChinaMapScroll = ref<HTMLElement | null>(null);
const plateHeight = ref(0);
function changePlateIndex(index: number) {
    indexPlate.value = index;
    // 测量高度
    if (index === 0) {
        // 0时为世界
        const { height } = elGlo.value.getBoundingClientRect();
        plateHeight.value = height;
        nextTick(() => {
            calcGloLines();
        });
    }
    if (index === 1) {
        const { width, height } = elChina.value.getBoundingClientRect();
        plateHeight.value = height;
        lineGroupWidth.value = width;
        lineGroupHeight.value = height;
        changeChinaLine();
    }
}
// watch(() => windowWidth.value, () => {
//     changeChinaLine(indexPlate.value)
// })

const lineGroupWidth = ref(0);
const lineGroupHeight = ref(0);
// 初始化和resize时重新计算line

const lineGroup = ref([]);
const elChinaItem = ref(null);
const elChinaPoints = ref(null);
function changeChinaLine() {
    if (!elChinaItem.value?.length) return;
    const lines = [];
    elChinaItem.value.forEach((item, index) => {
        const { col, row } = item.dataset;
        const pointEle = findPointEle(col, row);
        if (!pointEle) return;
        const {
            left: pointLeft,
            top: pointTop,
            width: pointWidth,
            height: pointHeight,
        } = pointEle.getBoundingClientRect();
        const {
            left: itemLeft,
            top: itemTop,
            width: itemWidth,
            height: itemHeight,
        } = item.getBoundingClientRect();
        const { left: plateLeft, top: plateTop } =
            elChina.value.getBoundingClientRect();
        // 连接点在item中间
        // 起点，起点是点
        const start = {
            x: pointLeft - plateLeft,
            y: pointTop - plateTop,
        };
        // 终点，终点是item
        const end = {
            x: itemLeft - plateLeft + itemWidth / 2,
            y: itemTop - plateTop + itemHeight / 2,
        };
        let line = [];
        if (Math.abs(start.x - end.x) > Math.abs(start.y - end.y)) {
            // 水平, 找竖线的x坐标
            let x = 0;
            if (start.x > end.x) {
                // 起点在右边
                x = end.x + (itemWidth / 2 + 5 + 10 * ((index % 3) + 1));
            } else {
                // 起点在左边
                x = end.x - (itemWidth / 2 + 5 + 10 * ((index % 3) + 1));
            }
            line = [start, { x, y: start.y }, { x, y: end.y }, end];
        } else {
            // 垂直，找横线的y坐标
            let y = 0;
            if (start.y > end.y) {
                // 起点在下面
                y = end.y + (itemHeight / 2 + 10);
            } else {
                // 起点在上面
                y = end.y - (itemHeight / 2 + 10);
            }
            line = [start, { x: start.x, y }, { x: end.x, y }, end];
        }
        // 生成路径
        lines.push(
            `M${line[0].x},${line[0].y} L${line[1].x},${line[1].y} L${line[2].x},${line[2].y} L${line[3].x},${line[3].y}`,
        );
    });
    lineGroup.value = lines;
}
function findPointEle(col: number, row: number) {
    // 通过chinaPointsList查询points的index，通过index查询HTML元素
    const index = chinaPointsList.value.findIndex(
        (item) => item.i === Number(col) && item.j === Number(row),
    );
    if (index === -1) return;
    return elChinaPoints.value[index];
}

function calcGloLines() {
    if (!elGloCards.value?.length || !elGloPoints.value?.length || !elGlo.value)
        return;
    const gloEl = elGlo.value as unknown as HTMLElement;
    const {
        left: baseLeft,
        top: baseTop,
        width,
        height,
    } = gloEl.getBoundingClientRect();
    gloLineGroupWidth.value = width;
    gloLineGroupHeight.value = height;
    const lines: string[] = [];
    const dots: { x: number; y: number }[] = [];
    elGloCards.value.forEach((cardEl: HTMLElement, index: number) => {
        const card = gloFactoryCards[index];
        const pointEl = elGloPoints.value![card.pointIndex];
        if (!pointEl) return;
        const dotEl = (pointEl.querySelector(".dot") as HTMLElement) || pointEl;
        const {
            left: dL,
            top: dT,
            width: dW,
            height: dH,
        } = dotEl.getBoundingClientRect();
        const {
            left: cL,
            top: cT,
            width: cW,
            height: cH,
        } = cardEl.getBoundingClientRect();
        const start = { x: dL - baseLeft + dW / 2, y: dT - baseTop + dH / 2 };
        const end = { x: cL - baseLeft + cW / 2, y: cT - baseTop + cH };

        // 只有第一张卡片(index=0)用横→竖拐法，其他都用竖→横→竖
        if (index === 0) {
            const midX = end.x;
            const midY1 = start.y;
            const midY2 = end.y;
            lines.push(
                `M${start.x.toFixed(1)},${start.y.toFixed(1)} L${midX.toFixed(1)},${midY1.toFixed(1)} L${midX.toFixed(1)},${midY2.toFixed(1)}`,
            );
        } else {
            const midY = start.y + (end.y - start.y) * 0.6;
            lines.push(
                `M${start.x.toFixed(1)},${start.y.toFixed(1)} L${start.x.toFixed(1)},${midY.toFixed(1)} L${end.x.toFixed(1)},${midY.toFixed(1)} L${end.x.toFixed(1)},${end.y.toFixed(1)}`,
            );
        }
        dots.push({ x: end.x, y: end.y });
    });
    gloLineGroup.value = lines;
    gloLineDots.value = dots;
}
function gloCardEnter(index: number) {
    gloActiveCard.value = index;
}
function gloCardLeave() {
    gloActiveCard.value = -1;
}

function plateHeightInit() {
    changePlateIndex(0);
}

/*********china start********/
let currentIndex = [-1, -1]; // [col ,row]
const activeItemIndex = ref(-1);
function itemMouseEnterHandler(event: Event, col: number, row: number) {
    if (col === currentIndex[0] && row === currentIndex[1]) return;
    currentIndex = [col, row];
    activeItemIndex.value = chinaPointsList.value.findIndex(
        (item) => item.i === Number(col) && item.j === Number(row),
    );
}

function itemMouseLeaveHandler(event: Event, col: number, row: number) {
    currentIndex = [-1, -1];
    activeItemIndex.value = -1;
}
/*********china end********/
let timerInitPlateHeight = null;
let lineResizeObserver = null;
onMounted(() => {
    // 手机端地图初始居中
    if (window.innerWidth <= 992) {
        nextTick(() => {
            for (const el of [elGloMapScroll.value, elChinaMapScroll.value]) {
                if (el) el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
            }
        });
    }
    // 页面加载结束后初始化高度
    timerInitPlateHeight = setTimeout(() => {
        plateHeightInit();
    }, 1000);
    lineResizeObserver = new ResizeObserver((entries) => {
        window.requestAnimationFrame(() => {
            for (const entry of entries) {
                if (entry.target === elChina.value) {
                    const { width, height } = entry.contentRect;
                    lineGroupWidth.value = width;
                    lineGroupHeight.value = height;
                    // 同步更新容器高度（CSS Grid 使 china 高度 = max(地图,卡片)，需实时反映）
                    if (indexPlate.value === 1) plateHeight.value = height;
                    changeChinaLine();
                }
                if (entry.target === elGlo.value) {
                    calcGloLines();
                    if (indexPlate.value === 0) {
                        const { height } = (elGlo.value as HTMLElement).getBoundingClientRect();
                        plateHeight.value = height;
                    }
                }
            }
        });
    });
    lineResizeObserver.observe(elChina.value);
    lineResizeObserver.observe(elGlo.value);
});
onUnmounted(() => {
    clearTimeout(timerInitPlateHeight);
    lineResizeObserver?.disconnect();
});
</script>

<style scoped lang="scss">
.plate-switcher {
    height: 85px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: fluid(80px, 24px);
    padding: 0 24px;
    @include tab {
        margin-top: 28px;
    }
    @include mo {
        height: 60px;
        gap: 16px;
        padding: 0 16px;
        margin-top: 20px;
    }
    .item {
        flex: 1 1 280px;
        max-width: 400px;
        min-width: 0;
        height: inherit;
        color: var(--main-light-gray, #dcdcdc);
        font-size: fluid(28px);
        line-height: 85px;
        text-align: center;
        transition: all 0.3s;
        border-bottom: 1px solid transparent;
        cursor: pointer;
        @include mo {
            flex: 1 1 0;
            max-width: none;
            line-height: 60px;
            font-size: 16px;
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
    transition: all 0.3s;
    overflow: hidden;
    // 移动端：覆盖 JS 内联高度，让容器自适应内容
    @include mo {
        height: auto !important;
        overflow: visible;
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
        transition: all 0.3s;
        z-index: 1;
        &.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
            z-index: 9;
        }
        .map-scroll-wrap > img,
        .map-scroll-wrap .map-inner > img {
            width: 100%;
            height: auto;
        }
        // map-inner：图片 + 标记层的整体容器，作为 point-layer 的 containing block
        .map-inner {
            position: relative;
            width: 100%;
        }
        .point-layer {
            position: absolute;
            inset: 0;
        }
        // 移动端：改为文档流，用 display 切换，彻底绕开 JS 高度系统
        @include mo {
            position: relative;
            opacity: 1;
            visibility: visible;
            transform: none;
            transition: none;
            &:not(.active) {
                display: none;
            }
        }
    }
    // 地图滚动容器：移动端水平滑动查看完整地图点位
    .map-scroll-wrap {
        position: relative;
        @include tab {
            margin-top: 12px;
        }
        @include mo {
            margin-top: 20px;
            overflow-x: auto;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none; // Firefox
            &::-webkit-scrollbar {
                display: none;
            } // Chrome/Safari
            // GLO 和 China 地图均用 map-inner 包裹 img + point-layer
            // map-inner 整体扩宽，point-layer 以 map-inner 为 containing block，百分比坐标精确对齐
            .map-inner {
                width: 280vw;
                max-width: none;
                min-width: 840px;
            }
        }
        // iPad 竖屏后置覆盖：必须在 @include mo 之后
        @media screen and (min-width: 768px) and (max-width: 992px) {
            margin-top: 0;
        }
    }
    // 移动端滑动提示 pill（仅 .glo 使用）
    .map-scroll-hint {
        display: none;
        @include mo {
            display: flex;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10;
            align-items: center;
            gap: 4px;
            background: rgba(0, 0, 0, 0.32);
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
                opacity: 0.9;
                // 左箭头向左 nudge
                &.ri-arrow-left-s-line {
                    animation: hint-nudge-left 1.8s ease-in-out infinite;
                }
                // 右箭头向右 nudge
                &.ri-arrow-right-s-line {
                    animation: hint-nudge-right 1.8s ease-in-out infinite;
                }
            }
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
                    transition: all 0.3s 0.05s * $i;
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
                background-color: rgba(255, 255, 255, 0.4);
                backdrop-filter: blur(3px);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s;
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
        top: fluid(100px, 40px);
        .cont {
            width: 100%;
            max-width: 1000px;
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
            background-color: rgba(255, 255, 255, 0.3);
            &::before {
                content: "";
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
        // iPad：1×3 紧凑横排
        @include tab {
            height: 180px;
            top: 20px;
            .cont {
                gap: 10px;
                padding: 0 20px;
                max-width: 100%;
            }
            .item {
                padding: 16px 14px;
                &::before {
                    top: 28px;
                    height: 60px;
                }
            }
            .t1 {
                font-size: 15px;
            }
            .num {
                font-size: 44px;
                margin-top: 8px;
            }
            .t2 {
                font-size: 13px;
                margin-top: 8px;
            }
            .t3 {
                font-size: 13px;
            }
            .icon {
                font-size: 20px;
                bottom: 14px;
                left: 14px;
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
                margin-right: 5px;
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
                transition: all 0.3s;
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
                transition: all 0.3s;
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
        max-width: 1000px;
        top: calc(#{fluid(100px, 40px)} + 260px);
        display: flex;
        flex-direction: row;
        gap: 16px;
        z-index: 10;
        // iPad：profile 高度改为 180px top:20px，同步下移
        @include tab {
            top: calc(20px + 200px);
            max-width: calc(100% - 40px);
            gap: 10px;
        }
    }
    .glo-card {
        flex: 1;
        display: flex;
        flex-direction: row;
        background: rgba(255, 255, 255, 0.92);
        backdrop-filter: blur(6px);
        border-right: 3px solid var(--main-yellow);
        cursor: pointer;
        transition: all 0.3s;
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
                transition: transform 0.4s;
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

    // iPad 横屏精确范围（993-1024px）：不影响手机端（@include tab ≤1024 会包含手机，故用 min-width 锁定）
    @media screen and (min-width: 993px) and (max-width: 1024px) {
        .map-scroll-wrap {
            max-height: 340px;
            overflow: hidden;
        }
    }

    // ============================================================
    // Mobile 响应式（≤992px）
    // 模板已将 .profile / .glo-factory-cards 移到 .map-scroll-wrap 外部
    // 两组卡片 position:absolute 在 .glo 上，不跟随地图横滑
    // 地图 min-width:1100px 放大，容器 ~760px 高度
    // ============================================================
    @include mo {
        overflow: visible;
        // 上下各延伸：顶部给数据卡片留位，底部给工厂卡片留位
        // 数据卡3张垂直叠放约 3×(10+32+4+12+4+12+10) = ~252px + gap
        padding-top: 10px;
        padding-bottom: 280px;
        background-color: #e6eaed; // 匹配 glo.jpg 边缘灰色（像素取样值）

        .legend {
            display: none;
        }
        .glo-line-group {
            display: none;
        }

        // ── 统计卡片：全宽 · 顶部 · 不随地图滚动 ──
        .profile {
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
            z-index: 6;
            pointer-events: none;

            .cont {
                width: 100%;
                max-width: 100%;
                height: auto;
                flex-direction: column;
                gap: 4px;
                padding: 6px 16px;
                margin: 0;
            }

            .item {
                pointer-events: auto;
                position: relative;
                flex: none;
                height: auto;
                min-height: 0;
                width: 100%;
                background-color: rgba(255, 255, 255, 0.3);
                backdrop-filter: blur(8px);
                -webkit-backdrop-filter: blur(8px);
                padding: 7px 15px 7px 16px;
                display: grid;
                grid-template-columns: 1fr auto;
                grid-template-rows: auto auto auto auto;

                &::before {
                    top: 31px;
                    height: 32px;
                    width: 3px;
                }

                .t1 {
                    grid-column: 1;
                    grid-row: 1;
                    font-size: 13px;
                    line-height: 1.3;
                }
                .num {
                    grid-column: 1;
                    grid-row: 2;
                    font-size: 32px;
                    line-height: 1;
                    margin-top: 4px;
                    letter-spacing: -0.6px;
                }
                .t2 {
                    grid-column: 1;
                    grid-row: 3;
                    font-size: 12px;
                    line-height: 1.3;
                    margin-top: 4px;
                }
                .t3 {
                    grid-column: 1;
                    grid-row: 4;
                    font-size: 12px;
                    line-height: 1.3;
                }

                .icon {
                    grid-column: 2;
                    grid-row: 1 / span 4;
                    position: static;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    align-self: center;
                    font-size: 24px;
                    margin-left: 10px;
                }
            }
        }

        // ── 工厂卡片：全宽 · 绝对定位底部 · 叠在延伸区上 ──
        .glo-factory-cards {
            position: absolute;
            top: auto;
            bottom: 0;
            left: 0;
            width: 100%;
            transform: none;
            flex-direction: column;
            gap: 6px;
            padding: 10px 16px 24px;
            max-width: 100%;
            z-index: 6;
            pointer-events: none;
        }

        .glo-card {
            pointer-events: auto;
            width: 100%;
            flex: none;

            .card-img {
                width: 80px;
            }
            .card-body {
                padding: 8px 12px;
                gap: 4px;
            }
            .card-header {
                margin-bottom: 2px;
            }
            .card-icon {
                font-size: 16px;
            }
            .card-type {
                font-size: 11px;
            }
            .card-name {
                font-size: 13px;
                margin-top: 0;
                text-wrap: balance;
            }
        }

        // 滑动提示定位：factory cards 上方留足够空间
        .map-scroll-hint {
            bottom: calc(280px + 40px);
        }
    }

    // ============================================================
    // iPad 竖屏专属（768px-992px）
    // 必须位于 @include mo 之后，确保在级联中后置覆盖
    // 768px iPad mini / 820px iPad Air / 834px iPad Pro 11" 竖屏均覆盖
    // ============================================================
    @media screen and (min-width: 768px) and (max-width: 992px) {
        padding-top: 0;
        padding-bottom: 120px;
        background-color: #e6eaed; // 与手机端一致，为工厂卡片区域提供同色背景

        // 地图完整显示：覆盖 @include mo 的 360vw 放大，回到 100% fit 屏宽，不横滑
        .map-scroll-wrap {
            overflow: hidden;
            .map-inner {
                width: 100%;
                max-width: 100%;
                min-width: 0;
            }
        }

        // ── 统计卡：1×3 横排，叠在地图顶部 ──
        .profile {
            .cont {
                flex-direction: row;
                align-items: stretch;
                gap: 8px;
                padding: 8px 12px;
            }
            .item {
                flex: 1;
                width: auto;
                min-height: 80px;
            }
            .num {
                font-size: 28px;
                margin-top: 4px;
            }
            .t1 {
                font-size: 11px;
            }
            .t2 {
                font-size: 10px;
                margin-top: 4px;
            }
            .t3 {
                font-size: 10px;
            }
        }

        // ── 工厂卡：1×3 横排，底部 padding 区域内（背景色继承 .glo 的 #e6eaed）──
        .glo-factory-cards {
            flex-direction: row;
            gap: 6px;
            padding: 8px 12px 20px;
        }
        .glo-card {
            flex: 1; // 覆盖 flex:none
            width: auto; // 覆盖 width:100%
            .card-img {
                width: 60px;
            }
            .card-body {
                padding: 6px 8px;
                gap: 2px;
            }
            .card-name {
                font-size: 11px;
                text-wrap: balance;
            }
            .card-type {
                font-size: 9px;
            }
            .card-icon {
                font-size: 14px;
            }
        }

        .map-scroll-hint {
            display: none;
        }
    }
}

.china {
    // Grid 叠层：map-scroll-wrap 与 detail-group 共享同一 grid cell
    // china 高度 = max(地图高度, 卡片高度)，窗口缩窄时容器自动撑高
    display: grid;
    overflow: hidden;
    // 填充地图下方空白区域（当卡片高度 > 地图时，#e6e9ec 覆盖白色背景）
    background-color: #e6e9ec;
    .map-scroll-wrap {
        grid-area: 1 / 1;
        align-self: start; // 地图贴顶对齐，不拉伸；下方空白由 background-color 填充
    }
    .point-layer,
    .line-group {
        position: absolute;
        inset: 0;
        overflow: hidden;
    }
    .detail-group {
        grid-area: 1 / 1;
        align-self: end;
        z-index: 2;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: flex-end;
        // padding-top：防止顶部卡片贴顶；中等宽度下 padding-bottom 由后置断点缩减
        padding: fluid(60px, 30px) fluid(60px, 24px) fluid(140px, 48px);
        gap: fluid(30px);
        .detail-list {
            width: 100%;
            max-width: 300px;
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-end;
            align-items: center;
            gap: fluid(25px);
        }
        .item {
            width: 100%;
            max-width: 300px;
            background-color: white;
            border-top: 2px solid var(--main-blue);
            padding: 12px 18px;
            cursor: pointer;
            transition: all 0.3s;
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
                content: "";
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
            transition: all 0.3s;
        }
        svg {
            transform: translateY(-20px);
            opacity: 0;
            transition: all 0.3s;
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
                transition: all 0.3s;
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

    // 中等桌面（993–1280px）：地图变矮时缩减底部 padding，避免空白区域过大
    @media screen and (min-width: 993px) and (max-width: 1280px) {
        .detail-group {
            padding-bottom: 60px;
        }
    }

    // ============================================================
    // Mobile 响应式（≤992px）
    // .map-inner（img + 标记点）作为整体缩放单元，彻底避免错位
    // ============================================================
    @include mo {
        display: block; // 重置桌面端的 display:grid，回到正常文档流
        overflow: visible;
        background-color: #e6e9ec;

        .line-group {
            display: none;
        }
        .map-scroll-hint {
            display: none !important;
        }

        // map-scroll-wrap：重置 grid-area，恢复文档流；overflow:hidden 裁剪；清除 margin-top:20px
        .map-scroll-wrap {
            grid-area: auto;
            overflow: hidden;
            margin-top: 0;

            // map-inner 整体 2× 放大，左移使中国居中
            // offset = -(57% × 2 - 50%) = -64%
            .map-inner {
                width: 200%;
                margin-left: -50%;
                // img 和 point-layer 都在 map-inner 内部，百分比坐标自动对齐
                > img {
                    width: 100%;
                    height: auto;
                    min-width: 0;
                }
                .point-layer {
                    inset: 0;
                    min-width: 0;
                    width: 100%;
                    left: 0;
                    right: 0;
                }
            }
        }

        // detail-group：流式布局，负 margin 上移覆盖地图底部区域
        .detail-group {
            position: relative;
            top: auto;
            right: auto;
            bottom: auto;
            left: auto;
            width: 100%;
            height: auto;
            overflow: visible;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 5px;
            padding: 10px 14px;
            margin-top: -48px;
            z-index: 2;
            background: none;
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
            align-items: stretch;

            .detail-list {
                display: contents;
            }

            .item {
                max-width: none;
                padding: 6px 8px;
                background-color: rgba(255, 255, 255, 0.5);
                border-top: 1.5px solid var(--main-blue);
            }

            .name {
                font-size: 12px;
                line-height: 1.4;
                color: #231815;
            }
            .cus {
                display: none;
            }
        }

        // iPad 竖屏（768–992px）：卡片文字放大
        @media screen and (min-width: 768px) and (max-width: 992px) {
            .detail-group {
                gap: 8px;
                padding: 12px 16px;
                margin-top: -160px;
                .item {
                    padding: 8px 10px;
                }
                .name {
                    font-size: 15px;
                }
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
@keyframes hint-nudge-left {
    0%,
    100% {
        transform: translateX(0);
        opacity: 0.75;
    }
    50% {
        transform: translateX(-4px);
        opacity: 1;
    }
}
@keyframes hint-nudge-right {
    0%,
    100% {
        transform: translateX(0);
        opacity: 0.75;
    }
    50% {
        transform: translateX(4px);
        opacity: 1;
    }
}
</style>
