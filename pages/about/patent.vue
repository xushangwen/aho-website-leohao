<template>
    <main>
        <EleDefaultCover
            image="/images/about/patent/cover.jpg"
            image-mobile="/images/about/patent/cover-m.jpg"
            :text="$t('patent.coverTitle')"
        ></EleDefaultCover>
        <EleBreadcrumb
            :navigate="breadcrumb"
        />

        <section class="s1">
            <div class="wrap">
                <div class="tab-switcher">
                    <div
                        class="tab-item"
                        :class="{active: activeTab === 'patent'}"
                        @click="switchTab('patent')"
                    >{{ $t('patent.patentTab') }}</div>
                    <div
                        class="tab-item"
                        :class="{active: activeTab === 'cert'}"
                        @click="switchTab('cert')"
                    >{{ $t('patent.certTab') }}</div>
                </div>
                <div class="top" v-if="patentBanner.length > 0">
                    <div class="left">
                        <ClientOnly>
                            <Swiper
                                class="patent-banner-1"
                                :modules="[SwiperAutoplay]"
                                :slides-per-view="1"
                                :space-between="0"
                                :autoplay="{
                                    delay: 6000,
                                    disableOnInteraction: false,
                                    pagination: {
                                    clickable: true,
                                },
                            }"
                                @swiper="onSwiperHandler($event, 1)"
                                @slideChange="slideChangeHandler1($event)"
                            >
                                <SwiperSlide
                                    class="swiper-slide"
                                    v-for="(item, index) in patentBanner"
                                    :key="`slideItem${index}`"
                                >
                                    <div class="bg">
                                        <img src="/images/about/patent/item-bg.jpg" alt="" class="norm">
                                    </div>
                                    <div class="cont">
                                        <img :src="item.image?.[0] || ''" alt="">
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </ClientOnly>

                    </div>
                    <div class="right">
                        <ClientOnly>
                            <Swiper
                                class="patent-banner-2"
                                :slides-per-view="1"
                                :space-between="0"
                                @swiper="onSwiperHandler($event, 2)"
                                @slideChange="slideChangeHandler2($event)"
                            >
                                <SwiperSlide
                                    class="swiper-slide"
                                    v-for="(item, index) in patentBanner"
                                    :key="`slideItem${index}`"
                                >
                                    <div class="year">{{ item.date?.split('-')[0] || '' }}</div>
                                    <div class="label">{{ item.category || '' }}</div>
                                    <div class="t1">{{ item.name || '' }}</div>
                                    <div class="asbt">{{ item.intro || '' }}</div>
                                </SwiperSlide>
                            </Swiper>
                        </ClientOnly>
                        <div class="tools">
                            <div class="num">{{ indexSlide + 1 }} / {{ patentBanner.length }}</div>
                            <div class="btns">
                                <div class="icon prev" @click="slidePrev()">
                                    <i class="ri-arrow-left-line"></i>
                                </div>
                                <div class="icon next" @click="slideNext()">
                                    <i class="ri-arrow-right-line"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="patent-list">
                    <MotionGlareHover
                        class="item-wrapper"
                        v-for="(item, index) in patentList"
                        :key="`item${index}`"
                    >
                        <EleRatioWrapper
                            :ratio="270/420"
                        >
                            <div class="item">
                                <div class="bg">
                                    <img src="/images/about/patent/item-bg.jpg" alt="">
                                </div>
                                <div class="cont">
                                    <img :src="item.image?.[0] || ''" alt="">
                                </div>
                            </div>
                        </EleRatioWrapper>
                    </MotionGlareHover>
                    <div class="loading" v-if="loading">{{ $t('common.loading') }}</div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import useEventStore from "@/stores/event";

const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()
const eventStore = useEventStore()
const route = useRoute()
const docScrollTop = computed(() => eventStore.docScrollTop)

const { t } = useI18n()
const breadcrumb = computed(() => [
    { name: t('nav.about'), link: '/about' },
    { name: t('patent.coverTitle'), link: '' }
])

// 推荐数据
const loadingRecommend = ref(false)

// 列表数据
const patentList = ref([])
const loading = ref(false)
const noMore = ref(false)
const page = ref(1)
const pageSize = 12
const totalPage = ref(1)

// 获取推荐数据（随当前 tab 过滤）
async function getRecommendData() {
    loadingRecommend.value = true
    try {
        const res = await $fetch(appConfig.api('/cert/recommend'), {
            params: { category: activeTab.value }
        })
        if (res?.code === 0) {
            return res.list_model || []
        }
        return []
    } catch (error) {
        console.error('获取推荐数据失败:', error)
        return []
    } finally {
        loadingRecommend.value = false
    }
}

// 获取列表数据
async function getListData(pageNum = 1) {
    if (loading.value || noMore.value && pageNum > 1) return null
    
    loading.value = true
    try {
        const params = {
            page_num: pageNum,
            per_page: pageSize,
            category: activeTab.value
        }
        
        const res = await $fetch(appConfig.api('/cert/list'), { params })
        
        if (res?.code === 0) {
            const newList = res.list_model || []
            
            // 更新分页信息
            totalPage.value = res.pagination?.total_page || 1
            
            // 检查是否还有更多数据
            const hasMore = newList.length >= pageSize
            
            return {
                list: newList,
                hasMore,
                totalPage: totalPage.value
            }
        }
        return null
    } catch (error) {
        console.error('获取列表数据失败:', error)
        return null
    } finally {
        loading.value = false
    }
}

const activeTab = ref('patent')

// 使用 useAsyncData 获取推荐数据
const { data: patentBanner, refresh: refreshBanner } = await useAsyncData(
    'patent-recommend',
    () => getRecommendData()
)

// 使用 useAsyncData 获取第一页列表数据
const { data: initialListData, refresh: refreshList } = await useAsyncData(
    'patent-list',
    () => getListData(1)
)

// 初始化列表数据
watch(initialListData, (newData) => {
    if (newData) {
        patentList.value = newData.list || []
        noMore.value = !newData.hasMore
        totalPage.value = newData.totalPage || 1
        page.value = 2
    }
}, { immediate: true })

// 切换 tab，重置并重新加载（banner + list 都跟随 tab 过滤）
async function switchTab(tab: string) {
    if (activeTab.value === tab) return
    activeTab.value = tab
    patentList.value = []
    noMore.value = false
    page.value = 1
    await Promise.all([refreshBanner(), refreshList()])
}

// 加载更多数据
async function loadMore() {
    if (loading.value || noMore.value) return
    
    const result = await getListData(page.value)
    if (result) {
        patentList.value = [...patentList.value, ...result.list]
        noMore.value = !result.hasMore
        totalPage.value = result.totalPage || 1
        if (result.hasMore) {
            page.value++
        }
    }
}

// 滚动加载更多
function handleScroll() {
    const scrollHeight = document.documentElement.scrollHeight
    const scrollTop = document.documentElement.scrollTop
    const clientHeight = document.documentElement.clientHeight
    
    if (scrollTop + clientHeight >= scrollHeight - 1000 && !loading.value && !noMore.value) {
        loadMore()
    }
}

// 监听滚动事件
watch(docScrollTop, () => {
    handleScroll()
})

let instSwiper1 = null
let instSwiper2 = null
function onSwiperHandler(swiper, index) {
    if (index === 1) {
        instSwiper1 = swiper
    }
    if (index === 2) {
        instSwiper2 = swiper
    }
}

const indexSlide = ref(0)
function slideChangeHandler1(e) {
    const { activeIndex } = e
    indexSlide.value = activeIndex
    // 同步slide
    if (instSwiper2 && instSwiper2.activeIndex !== activeIndex) {
        instSwiper2.slideTo(activeIndex)
    }
}
function slideChangeHandler2(e) {
    const { activeIndex } = e
    // 同步slide
    if (instSwiper1 && instSwiper1.activeIndex !== activeIndex) {
        instSwiper1.slideTo(activeIndex)
    }
}

function slidePrev() {
    instSwiper1?.slidePrev()
}
function slideNext() {
    instSwiper1?.slideNext()
}
</script>


<style lang="scss">
.patent-banner-1 {
    border-radius: 10px;
    overflow: hidden;
    .swiper-slide {
        .bg{
            width: 100%;
            height: auto;
            img {
                width: 100%;
                height: auto;
            }
        }
        .cont {
            position: absolute;
            inset: 0;
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            img {
                height: 90%;
                width: auto;
            }
        }
    }
}
</style>
<style scoped lang="scss">
.s1 {
    padding: fluid(100px, 40px) 0;
    .wrap {
    }
    .top {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: stretch;
        gap: fluid(48px);
        margin-top: fluid(48px);
        .left {
            width: 60%;
            height: auto;
            flex: none;
        }
        .right {
            width: calc(40% - 48px);
            flex: auto;
            .swiper-slide {
                display: flex;
                flex-flow: column nowrap;
                justify-content: flex-start;
                align-items: flex-start;
                padding-bottom: fluid(80px);
                .year {
                    align-self: flex-end;
                    color: #F4F4F4;
                    leading-trim: both;
                    text-edge: cap;
                    //font-family: "TTFors";
                    font-size: fluid(126.222px);
                    font-style: normal;
                    font-weight: bolder;
                }
                .label {
                    margin-top: fluid(65px, 24px);
                    width: 140px;
                    padding: 6px 0;
                    border-radius: 40px;
                    background-color: var(--main-blue);
                    color: white;
                    text-align: center;
                }
                .t1 {
                    margin-top: 8px;
                    color: var(--main-dark-gray, #3C3C3C);
                    font-size: fluid(24px);
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                }
                .asbt {
                    margin-top: 8px;
                    color: var(--main-dark-gray, #3C3C3C);
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 130%; /* 20.8px */
                }
            }
        }
        .tools {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            .num {
                color: var(--main-blue, #1E3296);
                leading-trim: both;
                text-edge: cap;
                font-family: "SpaceGrotesk";
                font-size: 18px;
                font-style: normal;
                font-weight: 700;
                line-height: 46px;
            }
            .btns {
                display: flex;
                flex-flow: row nowrap;
                justify-content: flex-end;
                align-items: center;
                gap: 12px;
            }
            .prev,
            .next {
                width: 46px;
                height: 46px;
                border-radius: 46px;
                border: 1px solid var(--main-blue);
                @include flex-c();
                @include flex-center;
                cursor: pointer;
                transition: all .3s;
                &:hover {
                    background-color: var(--main-blue);
                    i {
                        color: white;
                    }
                }
                i {
                    font-size: fluid(24px);
                    color: var(--main-blue);
                    transition: all .3s;
                }
            }
        }
    }

    .tab-switcher {
        display: flex;
        justify-content: center;
        gap: 0;
        margin-top: 0;
        position: relative;
        // 灰色底线（伪元素）
        &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: var(--main-light-gray);
        }
        .tab-item {
            padding: 16px fluid(80px);
            font-size: fluid(28px);
            font-weight: 500;
            color: var(--main-dark-gray);
            cursor: pointer;
            position: relative;
            transition: color .2s;
            text-align: center;
            @include mo {
                padding: 12px 24px;
            }
            // 橙色选中线（3px，垂直居中在灰线上）
            &::after {
                content: '';
                position: absolute;
                bottom: -1px;
                left: 0;
                width: 100%;
                height: 1px;
                background: var(--main-orange);
                transform: scaleX(0);
                transition: transform .2s;
            }
            &.active {
                color: var(--main-blue);
                font-weight: 700;
                &::after { transform: scaleX(1); }
            }
        }
    }
    .patent-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: fluid(48px, 24px);
        margin-top: fluid(48px);
        @include lap {
            grid-template-columns: repeat(2, 1fr);
        }
        @include mo {
            grid-template-columns: 1fr;
            gap: 24px;
        }
        .item-wrapper {
            border-radius: 10px;
            overflow: hidden;
            border: 1px solid var(--main-light-gray, #DCDCDC);
            transition: box-shadow .3s;
            &:hover {
                box-shadow: 0 5px 50px -3px rgba(0, 0, 0, 0.15);
            }
        }
        .item {
            position: relative;
            width: 100%;
            height: 100%;
            .bg {
                position: absolute;
                inset: 0;
            }
            .bg>img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .cont {
                width: 100%;
                height: 100%;
                @include flex-c();
                @include flex-center;
                img {
                    height: 90%;
                    width: auto;
                }
            }
        }
    }
    .tool {
        width: 100%;
        margin-top: fluid(120px, 48px);
        text-align: center;
    }
    .loading,
    .no-more {
        grid-column: 1 / -1;
        text-align: center;
        padding: fluid(40px) 0;
        color: var(--main-gray, #666);
        font-size: 14px;
    }
}
</style>
