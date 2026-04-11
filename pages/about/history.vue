<template>
    <main>
        <EleDefaultCover
            image="/images/about/history/cover.jpg"
            image-mobile="/images/about/history/cover-m.jpg"
            :text="$t('history.coverTitle')"
        ></EleDefaultCover>
        <EleBreadcrumb
            :navigate="breadcrumb"
        />

        <section class="s1">
            <div class="bg">
                <img src="/images/about/history/bg.jpg" alt="">
            </div>
            <div class="wrap">
                <div class="nav">
                    <div
                        v-for="(item, index) in history"
                        :class="['item', {'active': indexSection === index}]"
                        :key="`nav-${item.sectionName}`"
                        @click="indexSection = index"
                    >
                        <div class="slogan">{{ locale === 'en' ? item.sectionSloganEn : item.sectionSlogan }}</div>
                        <div class="name">{{item.sectionName}}</div>
                    </div>
                </div>
                <div class="content">
                    <div
                        :class="['list']"
                    >
                        <div class="item" v-for="item in historyDisplay" :key="`item-${item.t1}`">
                            <div class="year">{{item.year}}</div>
                            <div class="t1">
                                <div
                                    v-if="typeof (locale === 'en' ? item.t1En : item.t1) === 'object'"
                                    class="li"
                                >
                                    <div v-for="(t1Item, t1Index) in (locale === 'en' ? item.t1En : item.t1)" :key="`t1Index${t1Index}`"> {{ t1Item }}</div>
                                </div>
                                <span v-else> {{ locale === 'en' ? item.t1En : item.t1 }}</span>
                            </div>
                            <div class="t2">
                                <div
                                    v-if="typeof (locale === 'en' ? item.t2En : item.t2) === 'object'"
                                    class="li"
                                >
                                    <div v-for="(t2Item, t2Index) in (locale === 'en' ? item.t2En : item.t2)" :key="`t2Index${t2Index}`"> {{ t2Item }}</div>
                                </div>
                                <span v-else> {{ locale === 'en' ? item.t2En : item.t2 }}</span>
                            </div>
                            <div class="images">
                                <img :src="item.images" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 窄屏：pager 在 flex 行内居中展示 -->
                <div class="pager-btns">
                    <div class="prev" @click="prevPage" v-if="statusPrev">
                        <i class="icon ri-arrow-left-s-line"></i>
                    </div>
                    <div class="next" @click="nextPage" v-if="statusNext">
                        <i class="icon ri-arrow-right-s-line"></i>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()

const history = ref(appConfig.clientConfig.history)
const indexSection = ref(0)
const indexPage = ref(0)
const statusPrev = ref(false)
const statusNext = ref(false)

// 窄屏标志：≤1200px 时展示当前 section 全量数据，不分页
const isNarrow = ref(false)
const NARROW_BP = 1200

const { t, locale } = useI18n()
const breadcrumb = computed(() => [
    { name: t('nav.about'), link: '/about' },
    { name: t('history.coverTitle'), link: '' }
])

const historyDisplay = ref([])
const currentSection = ref([])
let len = 0

function updateHistoryDisplay() {
    currentSection.value = history.value[indexSection.value].list
    len = currentSection.value.length

    if (isNarrow.value) {
        // 窄屏：直接平铺全部，不需要切换按钮
        historyDisplay.value = [...currentSection.value]
        statusPrev.value = false
        statusNext.value = false
    } else {
        const start = indexPage.value * 3
        historyDisplay.value = currentSection.value.slice(start, start + 3)
        statusPrev.value = start > 0
        statusNext.value = len > start + 3
    }
}

// 切换阶段：重置页码再刷新（之前未重置是 bug）
watch(indexSection, () => {
    indexPage.value = 0
    updateHistoryDisplay()
})

// 翻页或窄屏状态变化时刷新
watch([indexPage, isNarrow], () => {
    updateHistoryDisplay()
})

// 初始渲染（SSR 阶段 isNarrow=false，客户端 onMounted 后校正）
updateHistoryDisplay()

const prevPage = () => { if (indexPage.value > 0) indexPage.value-- }
const nextPage = () => { indexPage.value++ }

onMounted(() => {
    const checkWidth = () => {
        isNarrow.value = window.innerWidth <= NARROW_BP
    }
    window.addEventListener('resize', checkWidth)
    checkWidth() // 立即校正初始值
    onUnmounted(() => {
        window.removeEventListener('resize', checkWidth)
    })
})
</script>

<style scoped lang="scss">
// 窄屏内容布局切换断点（PC→竖向）
$NARROW: 1200px;

.s1 {
    padding: fluid(100px) 0;
    position: relative;

    background-color: #fff; // 窄屏上方露出区域的底色

    .bg {
        position: absolute;
        inset: 0;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        // 窄屏：内容竖排后 section 变高，图片强制拉伸模糊
        // 改为贴底自然比例 + 顶部渐变遮罩，彻底消除拼接感
        @media screen and (max-width: $NARROW) {
            inset: auto 0 0 0; // 仅锚定底部，高度随图片自然比例

            img {
                display: block;
                height: auto;        // 自然比例，不拉伸
                object-fit: initial; // 取消 cover 裁切
            }

            // 顶部渐变遮罩：白→透明，图片与上方白色区域无缝融合
            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 40%;
                background: linear-gradient(to bottom, #fff 0%, transparent 100%);
                pointer-events: none;
            }
        }
    }

    .wrap {
        position: relative;

        // ─── 阶段 Tab 导航 ────────────────────────────────────────
        .nav {
            margin: 0 auto;
            width: 100%;
            max-width: min(940px, 90vw);
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            // stretch：让每个 item 撑满 nav 高度，border-bottom 才能始终贴底
            align-items: stretch;
            height: fluid(108px, 72px);

            // 移动端：三个 tab 等宽自适应，不再横滚
            @include mo {
                overflow-x: visible;
            }

            .item {
                // 等比弹性宽度，替代固定 277px（固定宽在 1024-1200px 会溢出）
                flex: 1;
                min-width: 0;
                margin: 0 fluid(12px, 6px);

                // display:flex 之前缺失 → flex-flow/justify/align 全部无效，border-bottom 定位失准
                display: flex;
                flex-direction: column;
                // 文字靠底部排列，border-bottom 永远在 item 最底部 = nav 最底部
                justify-content: flex-end;
                padding-bottom: 14px;

                border-bottom: 1.5px solid var(--main-light-gray, #DCDCDC);
                color: #A7A7A7;
                font-family: "TTFors";
                transition: border-color .3s;
                cursor: pointer;

                &.active {
                    border-bottom-color: var(--main-orange, #FF6400);
                    .slogan {
                        color: #000000;
                        font-weight: 700;
                    }
                    .name {
                        // 原 fluid(48px) 在 1200px 仍约 44px，太大；压缩最大值至 38px
                        font-size: fluid(38px, 22px);
                        font-weight: bolder;
                        letter-spacing: -0.96px;
                        color: var(--main-blue);
                    }
                }

                .slogan,
                .name {
                    line-height: 1.1;
                    transition: all .15s;
                }

                .slogan {
                    font-weight: 300;
                    // 原 fluid(24px)，窄屏收缩更积极
                    font-size: fluid(20px, 13px);
                }

                .name {
                    // 移除 height:50px 固定高度（在小屏会撑穿容器）
                    margin-top: 8px;
                    // 原 fluid(36px)，最大值降低，防止 1100px 处还有 33px
                    font-size: fluid(30px, 18px);
                    font-weight: 400;
                    letter-spacing: -0.6px;
                    white-space: nowrap; // 年份区间不换行
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                // 移动端：
                // - 去掉 min-width/flex-shrink:0，允许三项真正等宽填满容器
                // - 隐藏 slogan，只保留年份区间（信息足够，且能节省宽度）
                // - 统一字号避免 active 状态撑宽超出 flex 等分空间
                @include mo {
                    min-width: 0;    // 允许收缩到 flex 等宽分配值
                    flex-shrink: 1;
                    margin: 0 4px;
                    padding-bottom: 10px;

                    .name {
                        font-size: 15px; // 固定小字号，三项等宽不溢出
                        letter-spacing: -0.3px;
                    }
                    &.active .name {
                        font-size: 16px;
                    }
                }
            }
        }

        // ─── 历程卡片内容区 ───────────────────────────────────────
        .content {
            width: 92%;
            max-width: min(1150px, 90vw);
            margin: fluid(120px, 40px) auto 0;
            position: relative;

            // PC 大屏：固定高度 + 绝对定位错位布局
            height: fluid(610px);

            @include lap {
                width: 88%;
            }

            // ≤1200px：切换为自然流竖向布局
            @media screen and (max-width: $NARROW) {
                height: auto;
                width: 100%;
                max-width: 600px;
                overflow-x: visible; // 覆盖之前可能的 auto
            }

            @include mo {
                height: auto;
                overflow-x: visible;
                max-width: 100%;
            }

            .list {
                width: 100%;
                height: fluid(600px);
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: flex-start;
                // PC：绝对定位实现错位效果
                position: absolute;
                left: 0;
                top: 0;

                // ≤1200px：回到正常流，竖向堆叠
                @media screen and (max-width: $NARROW) {
                    position: relative;
                    flex-direction: column;
                    height: auto;
                    gap: fluid(40px, 28px);
                    align-items: stretch;
                }

                @include mo {
                    position: relative;
                    flex-direction: column;
                    height: auto;
                    gap: 28px;
                    align-items: stretch;
                }
            }

            .item {
                width: 100%;
                max-width: min(288px, 90vw);
                height: fluid(450px);
                padding: 0 0 0 20px;
                display: flex;
                flex-flow: column nowrap;
                justify-content: flex-start;
                line-height: 1;
                position: relative;

                // PC 错位：左竖线装饰
                &:before {
                    display: block;
                    content: '';
                    width: 1px;
                    height: 100%;
                    background: linear-gradient(to bottom, var(--main-blue) 0%, transparent 100%);
                    position: absolute;
                    top: 0;
                    left: 1px;
                }
                &:after {
                    display: block;
                    content: '';
                    width: 3px;
                    height: 50px;
                    background: var(--main-orange);
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 9;
                }

                // ≤1200px：全宽、自然高度、取消错位 margin
                @media screen and (max-width: $NARROW) {
                    max-width: 100%;
                    height: auto;
                    padding-bottom: fluid(32px, 20px);
                    // 覆盖下方 @for 生成的 margin-top
                    margin-top: 0 !important;
                }

                @include mo {
                    max-width: 100%;
                    height: auto;
                    padding-bottom: 20px;
                    margin-top: 0 !important;
                }

                .year {
                    color: var(--main-blue, #1E3296);
                    font-family: "TTFors";
                    font-size: fluid(32px, 22px);
                    font-weight: bold;
                    letter-spacing: -0.64px;
                }
                .t1 {
                    margin-top: 7px;
                    color: var(--main-dark-gray, #3C3C3C);
                    font-size: fluid(20px, 16px);
                    font-weight: 700;
                    line-height: 1.3;
                }
                .t2 {
                    margin-top: 16px;
                    color: var(--main-dark-gray, #3C3C3C);
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 1.4;
                    .li {
                        > div {
                            position: relative;
                            padding-left: 2px;
                            &::after {
                                content: '●';
                                position: absolute;
                                left: -12px;
                                top: 6px;
                                font-size: 6px;
                            }
                        }
                    }
                }
                .images {
                    margin-top: 16px;
                    width: 100%;
                    overflow: hidden;
                    border-radius: 10px;
                    border: 3px solid var(--main-white, #FFF);
                    img {
                        display: block;
                        width: 100%;
                        height: auto;
                    }
                }
            }

            // PC 错位：第 1 张卡最高，第 3 张最低（视差感）
            @for $i from 1 through 3 {
                .item:nth-child(#{$i}) {
                    margin-top: calc((3 - #{$i}) * #{fluid(80px)});
                }
            }
        }

        // ─── 翻页按钮 ────────────────────────────────────────────
        .pager-btns {
            // 关键：覆盖全局 div{position:relative}
            // position:static 不作为定位祖先，子元素 position:absolute 会跳过此容器
            // 继续向上锚定到 .wrap，确保 top:50% 相对 .wrap 计算
            position: static;

            // 窄屏：JS 已平铺全量数据，无需分页按钮
            @media screen and (max-width: $NARROW) {
                display: none;
            }
        }

        .prev,
        .next {
            // 缩小：64px → 更精致
            width: fluid(64px, 48px);
            height: fluid(64px, 48px);
            border-radius: 100px;

            // 毛玻璃质感（替代纯白 #fff）
            background: rgba(255, 255, 255, 0.18);
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            border: 1px solid rgba(255, 255, 255, 0.35);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);

            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: all .3s;

            &:hover {
                background: var(--main-blue);
                border-color: var(--main-blue);
                box-shadow: 0 6px 24px rgba(30, 50, 150, 0.3);
                .icon { color: white; }
            }
            .icon {
                font-size: fluid(32px, 22px);
                color: var(--main-blue);
                transition: all .3s;
            }

            // PC：绝对定位，锚定到 .wrap（.pager-btns 已设 position:static 不拦截）
            position: absolute;
            top: 50%;
            // transform 替代 margin-top，自动适配按钮尺寸变化
            transform: translateY(-50%);
        }

        .prev {
            left: -40px;
            @include lap { left: 0; }
        }
        .next {
            right: -40px;
            @include lap { right: 0; }
        }
    }
}
</style>
