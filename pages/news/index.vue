<template>
    <main>
        <EleDefaultCover
            image="/images/news/cover.jpg"
            image-mobile="/images/news/cover-m.jpg"
            :text="$t('news.coverTitle')"
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
                        <span>{{ $t('news.allNews') }}</span>
                        <div class="num">{{ totalCount }}</div>
                    </div>
                    <div 
                        v-for="(item, index) in postCate" 
                        :key="index"
                        class="item"
                        :class="{active: route.query.type === item.link.split('=')[1]}"
                        @click="switchCate(item.link.split('=')[1])"
                    >
                        <span>{{ locale === 'en' ? (item.en || item.cn) : item.cn }}</span>
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
                            {{ locale === 'en'
                                ? (postCate.find(cate => cate.link.includes(recommendPost.type))?.en || postCate.find(cate => cate.link.includes(recommendPost.type))?.cn || '')
                                : (postCate.find(cate => cate.link.includes(recommendPost.type))?.cn || '')
                            }}
                        </div>
                        <div class="mask">
                            <div class="rect-1"></div>
                            <div class="rect-2"></div>
                        </div>
                    </div>
                    <div class="info">
                        <div class="date">{{ recommendPost.pub_time }}</div>
                        <div class="t2">{{ recommendPost.title }}</div>
                        <div class="abst">{{ recommendPost.abst }}</div>
                        <div class="_btn">
                            <div class="_str">{{ $t('news.readMore') }}</div>
                            <div class="_icon ri-arrow-right-line"></div>
                        </div>
                    </div>
                </NuxtLink>

                <div v-if="loading" class="loading">{{ $t('common.loading') }}</div>
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
const route = useRoute()
const router = useRouter()
const appStore = useAppStore()
const { t, locale } = useI18n()

const breadcrumb = computed(() => [{ name: t('news.coverTitle'), link: '/news' }])

const pageNum = ref(1)
const perPage = ref(12)
const loading = ref(false)

// 顶层 useAsyncData：SSR 端等待数据后再渲染，客户端从序列化状态水合
// 避免「server 已渲染列表 / client loading=true」的 hydration mismatch
const { data: cateStatsData } = await useAsyncData('post-cate-statistic', async () => {
    try {
        const res = await $fetch(appConfig.api('/post/cate-statistic'))
        return res?.code === 0 ? (res.categories || {}) : {}
    } catch {
        return {}
    }
})

const { data: newsPageData, refresh: refreshNews } = await useAsyncData(
    'news-list',
    async () => {
        try {
            const res = await $fetch(appConfig.api('/post/list'), {
                params: {
                    type: route.query.type || '',
                    per_page: perPage.value,
                    page_num: pageNum.value
                }
            })
            return res?.code === 0 ? res : null
        } catch {
            return null
        }
    }
)

const cateStats = computed(() => cateStatsData.value || {})
const newsList = computed(() => newsPageData.value?.list || [])
const recommendNews = computed(() => newsPageData.value?.recommend || {})
const totalCount = computed(() => parseInt(newsPageData.value?.total_count) || 0)
const postCate = computed(() => appStore.postCate || [])
const recommendPost = computed(() => recommendNews.value)
const postList = computed(() => {
    const recommend = recommendPost.value
    // 推荐文章已在顶部大卡展示，从列表中排除避免重复
    if (!recommend?.uuid) return newsList.value
    return newsList.value.filter(item => item.uuid !== recommend.uuid)
})

// 切换分类
function switchCate(type) {
    router.push(type ? `/news?type=${type}` : '/news')
}

// 分页变化（仅客户端触发，有 loading 状态）
async function handlePageChange(page) {
    pageNum.value = page
    loading.value = true
    await refreshNews()
    loading.value = false
}

// 监听分类变化重新拉取（不含 immediate，初始加载由 useAsyncData 承担）
watch(() => route.query.type, async () => {
    pageNum.value = 1
    loading.value = true
    await refreshNews()
    loading.value = false
})
</script>

<style scoped lang="scss">
.s1 {
    padding: fluid(100px) 0;
    @include mo {
        padding: 40px 0 60px;
    }
    .wrap {

    }
    .label-list {
        @include flex-r();
        align-items: flex-start;
        gap: fluid(24px, 12px);
        @include mo {
            // 禁止回行，改用横向滚动兜底
            flex-wrap: nowrap;
            gap: 10px;
            overflow-x: auto;
            scrollbar-width: none;
            &::-webkit-scrollbar { display: none; }
            // 防止外层 wrap 裁切滚动内容
            padding-bottom: 4px;
        }
        .item {
            padding: 8px 18px;
            color: #000;
            font-size: 15px;
            line-height: 1;
            border: 1px solid var(--main-orange);
            border-radius: 40px;
            @include flex-r(nowrap);
            align-items: center;
            gap: 5px;
            // 防止单个 tag 内部文字折行
            white-space: nowrap;
            flex-shrink: 0;
            transition: all .3s;
            cursor: pointer;
            @include mo {
                // 按比例随视口缩小：320px→11px / 390px→14px / 428px→15px
                font-size: clamp(11px, 3.6vw, 15px);
                padding: clamp(5px, 1.4vw, 8px) clamp(12px, 4vw, 18px);
            }
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
                font-size: 11px;
                font-family: 'Google Sans', SpaceGrotesk, sans-serif;
                opacity: 0.8;
                align-self: flex-start;
                margin-top: 1px;
            }
        }
    }

    .recommend {
        margin-top: fluid(60px);
        border-radius: 10px;
        border: 1px solid var(--main-light-gray, #DCDCDC);
        @include flex-r(nowrap);
        transition: all .3s;
        overflow: hidden;
        @include mo {
            flex-direction: column;
        }
        .cover {
            width: 50%;
            flex: none;
            position: relative;
            overflow: hidden;
            @include mo {
                width: 100%;
            }
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
            left: 16px;
            top: 16px;
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
            padding: 32px fluid(60px, 24px);
            @include flex-c(nowrap);
            justify-content: center;
            align-items: flex-start;
            @include mo {
                padding: 24px;
            }
            color: var(--main-dark-gray);
            .date {
                font-size: 18px;
                font-family: 'Google Sans', SpaceGrotesk, sans-serif;
                color: var(--main-orange);
            }
            .t2 {
                font-size: fluid(22px);
                font-weight: 700;
                margin-top: 12px;
            }
            .abst {
                // 多行截断需要 -webkit-box + line-clamp 配合
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 16px;
                line-height: 1.6;
                color: #888;
                margin-top: 10px;
            }
            ._btn {
                margin-top: fluid(60px, 24px);

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
        margin-top: fluid(60px);
    }

    .pagi {
        margin-top: fluid(60px);
    }
    .loading {
        text-align: center;
        padding: fluid(60px) 0;
        color: var(--main-gray, #666);
        font-size: 14px;
    }
}
</style>
