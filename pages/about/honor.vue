<template>
    <main>
        <EleDefaultCover
            image="/images/about/honor/cover.jpg"
            image-mobile="/images/about/honor/cover-m.jpg"
            :text="$t('honor.coverTitle')"
        ></EleDefaultCover>
        <EleBreadcrumb
            :navigate="breadcrumb"
        />

        <section class="s1">
            <div class="wrap">
                <div class="t">{{ $t('honor.title') }}</div>
                <div class="patent-list">
                    <MotionGlareHover
                        class="item-wrapper"
                        v-for="(item, index) in honorList"
                        :key="`item${index}`"
                    >
                        <EleRatioWrapper
                            :ratio="270/420"
                        >
                            <div class="item">
                                <div class="bg">
                                    <img src="/images/about/honor/item-bg.jpg" alt="">
                                </div>
                                <div class="cont">
                                    <img :src="item.image?.[0] || ''" alt="">
                                </div>
                                <div class="year-tag" v-if="item.year">{{ item.year }}</div>
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
const docScrollTop = computed(() => eventStore.docScrollTop)

const { t } = useI18n()
const breadcrumb = computed(() => [
    { name: t('nav.about'), link: '/about' },
    { name: t('honor.coverTitle'), link: '' }
])

// 列表数据
const honorList = ref([])
const loading = ref(false)
const noMore = ref(false)
const page = ref(1)
const pageSize = 12
const totalPage = ref(1)

// 获取列表数据
async function getListData(pageNum = 1) {
    if (loading.value || noMore.value && pageNum > 1) return null
    
    loading.value = true
    try {
        const params = {
            page_num: pageNum,
            per_page: pageSize
        }
        
        const res = await $fetch(appConfig.api('/honor/list'), { params })
        
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
        console.error('获取荣誉数据失败:', error)
        return null
    } finally {
        loading.value = false
    }
}

// 使用 useAsyncData 获取第一页列表数据
const { data: initialListData, refresh: refreshList } = await useAsyncData(
    'honor-list',
    () => getListData(1)
)

// 初始化列表数据
watch(initialListData, (newData) => {
    if (newData) {
        honorList.value = newData.list || []
        noMore.value = !newData.hasMore
        totalPage.value = newData.totalPage || 1
        page.value = 2
    }
}, { immediate: true })

// 加载更多数据
async function loadMore() {
    if (loading.value || noMore.value) return
    
    const result = await getListData(page.value)
    if (result) {
        honorList.value = [...honorList.value, ...result.list]
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
</script>

<style scoped lang="scss">
.s1 {
    padding: fluid(100px, 40px) 0;
    @include tab { padding: 56px 0; }
    @include mo { padding: 36px 0; }
    .wrap {
        > .t {
            color: #000;
            font-size: fluid(38px);
            font-weight: 700;
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
            .year-tag {
                position: absolute;
                top: 12px;
                left: 12px;
                background: rgba(0,0,0,0.55);
                color: #fff;
                font-size: 12px;
                font-family: var(--font-num);
                padding: 3px 10px;
                border-radius: 100px;
                backdrop-filter: blur(4px);
            }
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
}
</style>
