<template>
    <main>
        <EleDefaultCover
            image="/images/news/cover.jpg"
            image-mobile="/images/news/cover-m.jpg"
            text="新闻中心"
        ></EleDefaultCover>
        <EleBreadcrumb
            :navigate="breadcrumb"
        />

        <section class="s1">
            <div class="wrap">
                <div class="label-list">
                    <div 
                        class="item" 
                        :class="{active: !route.query.type}"
                        @click="switchCate('')"
                    >
                        <span>所有新闻</span>
                        <div class="num">{{ totalCount }}</div>
                    </div>
                    <div 
                        v-for="(item, index) in postCate" 
                        :key="index"
                        class="item"
                        :class="{active: route.query.type === item.link.split('=')[1]}"
                        @click="switchCate(item.link.split('=')[1])"
                    >
                        <span>{{ item.cn }}</span>
                        <div class="num">{{ cateStats[item.link.split('=')[1]] || 0 }}</div>
                    </div>
                </div>

                <NuxtLink
                    v-if="recommendPost.uuid"
                    class="recommend"
                    :href="`/news/detail/${recommendPost.uuid}`"
                >
                    <div class="cover">
                        <img :src="recommendPost.cover_list?.[0] || ''" class="norm" alt="">
                        <div class="category-name">
                            {{ postCate.find(cate => cate.link.includes(recommendPost.type))?.cn || '' }}
                        </div>
                        <div class="mask">
                            <div class="rect-1"></div>
                            <div class="rect-2"></div>
                        </div>
                    </div>
                    <div class="info">
                        <div class="date">{{ recommendPost.pub_time }}</div>
                        <div class="t1">智导世界，互联未来</div>
                        <div class="t2">{{ recommendPost.title }}</div>
                        <div class="abst">{{ recommendPost.abst }}</div>
                        <div class="_btn">
                            <div class="_str">查看更多</div>
                            <div class="_icon ri-arrow-right-line"></div>
                        </div>
                    </div>
                </NuxtLink>

                <div v-if="loading" class="loading">加载中...</div>
                <EleNewsList v-else class="news-list" :news-list="postList"></EleNewsList>
                <ElePagination
                    v-if="!loading"
                    class="pagi"
                    :total="totalCount"
                    :page-size="perPage"
                    :page-num="pageNum"
                    @page-change="handlePageChange"
                ></ElePagination>
            </div>
        </section>
    </main>
</template>

<script setup>
import useAppStore from "@/stores/app";
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const router = useRouter()
const appStore = useAppStore()

const breadcrumb = ref([
    {
        name: '新闻中心',
        link: '/news'
    }
])

// 分类统计数据
const cateStats = ref({})
// 新闻数据
const newsList = ref([])
const recommendNews = ref({})
// 分页数据
const totalCount = ref(0)
const pageNum = ref(1)
const perPage = ref(12)
const loading = ref(false)

// 初始化数据
async function initData() {
    // 获取分类统计数据
    await getCateStats()
    // 获取新闻数据
    await getNewsList()
}

// 获取分类统计数据
async function getCateStats() {
    try {
        const { data } = await useFetch(appConfig.api('/post/cate-statistic'))
        if (data.value?.code === 0) {
            cateStats.value = data.value.categories || {}
        }
    } catch (error) {
        console.error('获取分类统计数据失败:', error)
    }
}

// 获取新闻数据
async function getNewsList() {
    loading.value = true
    try {
        const params = {
            type: route.query.type || '',
            per_page: perPage.value,
            page_num: pageNum.value
        }
        
        const { data } = await useFetch(appConfig.api('/post/list'), {
            params
        })
        
        if (data.value?.code === 0) {
            newsList.value = data.value.list || []
            recommendNews.value = data.value.recommend || {}
            totalCount.value = parseInt(data.value.total_count) || 0
        }
    } catch (error) {
        console.error('获取新闻数据失败:', error)
    } finally {
        loading.value = false
    }
}

// 切换分类
function switchCate(type) {
    if (type === '') {
        router.push('/news')
    } else {
        router.push(`/news?type=${type}`)
    }
}

// 分页变化
function handlePageChange(page) {
    pageNum.value = page
    getNewsList()
}

// 监听路由变化
watch(() => route.query.type, () => {
    pageNum.value = 1
    getNewsList()
}, { immediate: true })

// 初始化
onMounted(() => {
    initData()
})

// 使用 appStore 中的 postCate 数据
const postCate = computed(() => {
    return appStore.postCate || []
})

// 推荐新闻
const recommendPost = computed(() => {
    return recommendNews.value
})

// 新闻列表
const postList = computed(() => {
    return newsList.value
})
</script>

<style scoped lang="scss">
.s1 {
    padding: 100px 0;
    .wrap {

    }
    .label-list {
        @include flex-r();
        align-items: flex-start;
        gap: 24px;
        .item {
            padding: 4px 10px;
            color: #000;
            font-size: 12px;
            line-height: 1;
            border: 1px solid var(--main-orange);
            border-radius: 40px;
            @include flex-r(nowrap);
            align-items: flex-start;
            transition: all .3s;
            cursor: pointer;
            &:hover {
                background-color: rgba(255, 100, 0, .5);
                color: white;
            }
            &.active {
                color: white;
                background-color: var(--main-orange);
            }
            .num {
                transition: all .3s;
                color: inherit;
                font-feature-settings: 'sups' on;
                transform: scale(.6) translateY(-3px);
            }
        }
    }

    .recommend {
        margin-top: 60px;
        border-radius: 10px;
        border: 1px solid var(--main-light-gray, #DCDCDC);
        @include flex-r(nowrap);
        transition: all .3s;
        overflow: hidden;
        .cover {
            width: 50%;
            flex: none;
            position: relative;
            overflow: hidden;
            img {
                width: 100%;
                height: auto;
            }
        }
        .category-name {
            padding: 4px 11px;
            border-radius: 20px;
            background-color: var(--main-orange);
            color: var(--main-white, #FFF);
            font-size: 12px;
            font-style: normal;
            line-height: 1.5;
            position: absolute;
            left: 32px;
            top: 32px;
        }
        .mask {
            position: absolute;
            inset: 0;
            background-color: rgba(0, 0, 0, .2);
            .rect-1,
            .rect-2 {
                opacity: 1;
                position: absolute;
                transition: all .3s ease-in-out;
            }
            .rect-1 {
                left: 0;
                top: 0;
                width: 80%;
                height: 80%;
                border-right: 1px solid rgba(255, 255, 255, .8);
                border-bottom: 1px solid rgba(255, 255, 255, .8);
                border-radius: 0 0 20px 0;
            }
            .rect-2 {
                right: 0;
                bottom: 0;
                width: 20%;
                height: 20%;
                border-left: 1px solid rgba(255, 255, 255, .8);
                border-top: 1px solid rgba(255, 255, 255, .8);
                border-radius: 20px 0 0 0;
            }
        }
        .norm {
            //position: relative;
            //inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform .3s ease-in-out;
        }
        .info {
            padding: 32px 60px;
            @include flex-c(nowrap);
            justify-content: center;
            align-items: flex-start;
            color: var(--main-dark-gray);
            .date {
                font-size: 14px;
                color: var(--main-orange);
            }
            .t1,
            .t2 {
                font-size: 22px;
            }
            .t1 {
                margin-top: 12px;
            }
            .t2 {
                font-weight: 700;
                margin-top: 5px;
            }
            .abst {
                height: 40px;
                overflow: hidden;
                font-size: 16px;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                margin-top: 12px;
            }
            ._btn {
                margin-top: tovw(60px);

            }
        }
        &:hover {
            transform: translateY(-10px);
            box-shadow: 0 4px 20px -2px rgba(0, 0, 0, .2);
            .mask {
                .rect-1,
                .rect-2 {
                    opacity: 0;
                }
                .rect-1 {
                    transform: translateX(-20px) translateY(-20px);
                }
                .rect-2 {
                    transform: translateX(20px) translateY(20px);
                }
            }
            .norm {
                transform: scale(1.1);
            }
        }
    }

    .news-list {
        margin-top: 60px;
    }

    .pagi {
        margin-top: 60px;
    }
    .loading {
        text-align: center;
        padding: 60px 0;
        color: var(--main-gray, #666);
        font-size: 14px;
    }
}
</style>
