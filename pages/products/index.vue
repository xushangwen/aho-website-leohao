<template>
    <main>
        <EleDefaultCover
            image="/images/prod/cover.jpg"
            image-mobile="/images/prod/cover-m.jpg"
            :text="$t('products.coverTitle')"
        ></EleDefaultCover>
        <EleBreadcrumb
            :navigate="breadcrumb"
        />

        <section class="s1">
            <div class="wrap">
                <aside
                    class="aside"
                    ref="elAside"
                >
                    <div
                        class="aside-wrapper"
                        :class="{fixed: statusAsideFixed}"
                    >
                        <div class="cate-name">{{ $t('products.categoryLabel') }}</div>
                        <NuxtLink
                            class="item"
                            :class="{active: `${indexCate}` === `${index}`}"
                            v-for="(item, index) in prodNav"
                            :key="`${index}-${item.cn}`"
                            @click="openCate(index)"
                        >
                            <span>{{ locale === 'en' ? (item.en || item.cn) : item.cn }}</span>
                            <i class="icon ri-arrow-right-line"></i>
                        </NuxtLink>
                    </div>
                </aside>
                <div class="list">
                    <div
                        class="item"
                        v-for="(item, index) in prod"
                        :key="`${index}-${item.name}`"
                    >
                        <EleRatioWrapper
                            :ratio="275/340"
                        >
                            <div class="cover">
                                <img :src="item.image" alt="">
                            </div>
                        </EleRatioWrapper>
                        <div class="info">
                            <div class="name">{{ locale === 'en' ? (item.name_en || item.name) : item.name }}</div>
                            <template v-if="locale === 'en'">
                                <p class="intro" v-if="item.feature_en || item.feature">
                                    <span class="label">Features</span>：{{ item.feature_en || item.feature }}
                                </p>
                                <p class="intro" v-if="item.scene_en || item.scene">
                                    <span class="label">Applications</span>：{{ item.scene_en || item.scene }}
                                </p>
                            </template>
                            <template v-else>
                                <p
                                    class="intro"
                                    v-for="(pItem, pIndex) in item.p"
                                    :key="`${pIndex}-${pItem.label}`"
                                >
                                    <span class="label">{{pItem.label}}</span>：{{pItem.content}}
                                </p>
                            </template>
                        </div>
                    </div>
                    <!-- 加载状态 -->
                    <div class="loading" v-if="loading">
                        {{ $t('common.loading') }}
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import useEventStore from "@/stores/event";
import useAppStore from "@/stores/app";
const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()
const eventStore = useEventStore()
const appStore = useAppStore()
const route = useRoute()
const router = useRouter()
const docScrollTop = computed(() => eventStore.docScrollTop)
const localePath = useLocalePath()
const { locale } = useI18n()

// 使用 appStore 中的 prodCate 数据
const prodNav = computed(() => {
    return appStore.prodCate || []
})

const { t } = useI18n()
const breadcrumb = computed(() => [
    { name: t('products.coverTitle'), link: '/products' }
])

const indexCate = ref(-1)
const currentCate = ref('')
const prod = ref([])
const loading = ref(false)
const noMore = ref(false)
const page = ref(1)
const pageSize = 12

// 初始化分类状态
function initCate() {
    const cate = route.query.cate
    if (cate) {
        currentCate.value = cate
        const index = prodNav.value.findIndex(item => item.link.includes(cate))
        indexCate.value = index
    } else {
        // 默认选择第一个分类
        if (prodNav.value.length > 0) {
            const firstCate = prodNav.value[0]
            currentCate.value = firstCate.link.split('=')[1]
            indexCate.value = 0
            // 重定向到第一个分类（保持当前语言前缀）
            router.push(`${localePath('/products')}?cate=${currentCate.value}`)
        } else {
            currentCate.value = ''
            indexCate.value = -1
        }
    }
    console.log('indexCate.value', indexCate.value)
}

// 打开分类
function openCate(index) {
    indexCate.value = index
    const cate = prodNav.value[index]
    if (cate) {
        currentCate.value = cate.link.split('=')[1]
        router.push(`${localePath('/products')}?cate=${currentCate.value}`)
    }
    // 滚动到顶部（仅客户端，SSR 无 window）
    if (process.client) window.scrollTo({ top: 400, behavior: 'smooth' })
    // 重置分页
    page.value = 1
    noMore.value = false
    // 重置数据
    prod.value = []
    // 加载产品数据
    loadProducts()
}

// 加载产品数据
async function loadProducts() {
    if (loading.value || noMore.value) return
    
    loading.value = true
    try {
        const params = {
            page_num: page.value,
            per_page: pageSize
        }
        if (currentCate.value) {
            params.ca = currentCate.value
        }
        
        const data = await $fetch(appConfig.api('/products/list'), {
            params
        })

        const { code, list_model, pagination } = data || {}
        if (code !== 0 || !list_model || !pagination) return
        
        if (data) {
            if (page.value === 1) {
                prod.value = list_model || []
            } else {
                prod.value = [...prod.value, ...(list_model || [])]
            }
            
            // 检查是否还有更多数据
            if ((list_model || []).length < pageSize) {
                noMore.value = true
            } else {
                page.value++
            }
        }
    } catch (error) {
        console.error('加载产品数据失败:', error)
    } finally {
        loading.value = false
    }
}

// 监听路由变化（immediate:true 会在 SSR 阶段触发，需守卫 window）
watch(() => route.query.cate, () => {
    initCate()
    // 滚动到顶部（仅客户端）
    if (process.client) window.scrollTo({ top: 400, behavior: 'smooth' })
    // 重置分页
    page.value = 1
    noMore.value = false
    // 加载产品数据
    loadProducts()
}, { immediate: true })

const statusAsideFixed = ref(false)
const elAside = ref(null)
let statusAside = false
function updateAsideFixed() {
    requestAnimationFrame(() => {
        const { top } = elAside.value.getBoundingClientRect()
        if (elAside.value) {
            if (statusAside === top < 100) return
            statusAside = top < 100
            statusAsideFixed.value = statusAside
        }
    })
}

// 滚动加载更多
function handleScroll() {
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = document.documentElement.clientHeight

    if (docScrollTop.value + clientHeight >= scrollHeight - 1000 && !loading.value && !noMore.value) {
        loadProducts()
    }
}

watch(docScrollTop, (newScrollTop) => {
    updateAsideFixed()
    handleScroll()
})

onMounted(() => {
    initCate()
    loadProducts()
    updateAsideFixed()
})

</script>

<style scoped lang="scss">
.s1 {
    padding: fluid(100px, 40px) 0;
    background-color: #F8F8F8;
    @include mo {
        padding: 40px 0 60px;
    }
    .wrap {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: flex-start;
        gap: fluid(60px, 24px);
        @include mo {
            flex-direction: column;
            gap: 24px;
        }
    }
    aside {
        width: 216px;
        flex: none;
        height: auto;
        min-height: 1px;
        @include mo {
            width: 100%;
            .cate-name { display: none; }
        }
        .aside-wrapper {
            width: inherit;
            height: auto;
            position: relative;
            &.fixed {
                position: fixed;
                top: 100px;
            }
            @include mo {
                &.fixed { position: relative; top: 0; }
                display: grid;
                grid-template-columns: 1fr;
                gap: 8px;
            }
        }
        .cate-name {
            color: var(--main-orange, #FF6400);
            font-size: 12px;
            margin-bottom: 12px;
        }
        .item:first-child {
            border-top: 1px solid var(--main-light-gray, #DCDCDC);
            @include mo { border-top: none; }
        }
        .item {
            padding: 14px 0;
            font-size: 16px;
            font-weight: 400;
            border-bottom: 1px solid var(--main-light-gray, #DCDCDC);
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            transition: color .2s;
            @include mo {
                padding: 14px 16px;
                font-size: 15px;
                background: rgba(255, 255, 255, 0.5);
                border-top: none;
                border-right: none;
                border-bottom: 1px solid var(--main-orange);
                position: relative;
                // 橙色下划线用伪元素做 scaleX 动画
                &::after {
                    content: '';
                    position: absolute;
                    bottom: -1px;
                    left: 0;
                    width: 100%;
                    height: 1px;
                    background: var(--main-orange);
                    transform: scaleX(0);
                    transform-origin: left center;
                    transition: transform .25s ease;
                }
                &.active {
                    background: var(--main-blue);
                    color: white;
                    font-weight: 700;
                    border-bottom-color: var(--main-blue);
                    .icon { color: white; }
                    &::after { display: none; }
                }
            }
            &.active {
                font-weight: 700;
            }
            &.active,
            &:hover {
                font-weight: 700;
                .icon {
                    font-weight: normal;
                    transform: scale(1) translateX(0px);
                }
            }
            .icon {
                font-size: fluid(22px);
                color: var(--main-blue);
                transform: scale(0) translateX(-50px);
                transition: transform .3s;
                font-weight: normal;
            }
        }
    }
    .list {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: fluid(30px);
        @include lap {
            grid-template-columns: repeat(2, 1fr);
        }
        @include mo {
            grid-template-columns: 1fr;
        }
        .item {
            background-color: white;
            border: 1px solid var(--main-light-gray, #DCDCDC);
            border-radius: 10px;
            overflow: hidden;
            transition: all .3s;
            border-radius: 10px;
            &:hover {
                border-color: var(--main-blue, #1E3296);
                box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.10);
            }
            .cover {
                width: 100%;
                height: 100%;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .info {
                padding: 24px 32px;
                border-top: 1px solid var(--main-light-gray, #DCDCDC);
                font-size: 14px;
                .name {
                    font-size: fluid(20px);
                    font-weight: 700;
                }
                .intro {
                    font-weight: bold;
                    text-wrap: pretty;
                    .label {
                       font-weight: normal;
                    }
                }
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
<style lang="scss"></style>
