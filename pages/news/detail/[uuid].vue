<template>
<main>
    <div class="_blank"></div>
    <EleBreadcrumb :navigate="breadcrumb" />

    <div class="wrap" v-if="newsDetail.uuid">
        <div class="arti">
            <div class="date">{{ newsDetail.pub_time }}</div>
            <div class="title">{{ locale === 'en' ? (newsDetail.title_en || newsDetail.title) : newsDetail.title }}</div>
            <div class="cont" v-html="locale === 'en' ? (newsDetail.content_en || newsDetail.content) : newsDetail.content"></div>
        </div>

        <!-- 上一篇 / 下一篇 / 返回列表 -->
        <div class="nav-footer">
            <div class="nav-links">
                <NuxtLink
                    v-if="prev"
                    class="nav-item"
                    :to="localePath(`/news/detail/${prev.uuid}`)"
                >
                    <i class="ri-arrow-left-line"></i>
                    <div class="nav-content">
                        <span class="nav-label">{{ $t('news.prevArticle') }}</span>
                        <span class="nav-title">{{ locale === 'en' ? (prev.title_en || prev.title) : prev.title }}</span>
                    </div>
                </NuxtLink>
                <div v-else class="nav-item --disabled"></div>

                <NuxtLink
                    v-if="next"
                    class="nav-item --right"
                    :to="localePath(`/news/detail/${next.uuid}`)"
                >
                    <div class="nav-content">
                        <span class="nav-label">{{ $t('news.nextArticle') }}</span>
                        <span class="nav-title">{{ locale === 'en' ? (next.title_en || next.title) : next.title }}</span>
                    </div>
                    <i class="ri-arrow-right-line"></i>
                </NuxtLink>
                <div v-else class="nav-item --disabled --right"></div>
            </div>

            <NuxtLink class="_btn" :to="localePath('/news')">
                <div class="_str">{{ $t('news.backToList') }}</div>
                <div class="_icon"><i class="ri-list-check"></i></div>
            </NuxtLink>
        </div>
    </div>

    <div class="wrap" v-else-if="loading">
        <div class="loading">{{ $t('common.loading') }}</div>
    </div>
    <div class="wrap" v-else>
        <div class="not-found">404 - 新闻不存在</div>
    </div>
</main>
</template>

<script setup>
import useAppStore from "@/stores/app";

definePageMeta({ layout: 'news' })

const route = useRoute()
const appConfig = useAppConfig()
const { t, locale } = useI18n()
const localePath = useLocalePath()

const breadcrumb = computed(() => {
    if (newsDetail.value?.title) {
        const articleTitle = locale.value === 'en'
            ? (newsDetail.value.title_en || newsDetail.value.title)
            : newsDetail.value.title
        return [
            { name: t('news.coverTitle'), link: '/news' },
            { name: articleTitle, link: '' },
        ]
    }
    return [{ name: t('news.coverTitle'), link: '/news' }]
})

const { data: detailData, pending: loading } = await useAsyncData(
    `news-detail-${route.params.uuid}`,
    async () => {
        const uuid = route.params.uuid
        if (!uuid) return null
        try {
            const res = await $fetch(appConfig.api('/post/detail'), { params: { uuid } })
            if (res?.code === 0 && res.model) return res
            return null
        } catch (e) {
            console.error('获取新闻详情失败:', e)
            return null
        }
    },
    { watch: [() => route.params.uuid] }
)

const newsDetail = computed(() => detailData.value?.model || {})
const prev = computed(() => detailData.value?.prev || null)
const next = computed(() => detailData.value?.next || null)
</script>

<style scoped lang="scss">
._blank {
    width: 100%;
    height: var(--HEADER_HEIGHT);
}
.wrap {
    max-width: 880px;
}
.arti {
    padding: 64px 0 80px;
    .date {
        color: var(--main-orange);
        // 全局数字字体
        font-family: 'Google Sans', SpaceGrotesk, sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 1.4;
        @include mo {
            font-size: 16px;
        }
    }
    .title {
        color: var(--main-black, #000);
        font-size: fluid(28px, 20px);
        font-weight: 700;
        line-height: 1.4;
        margin-top: 20px;
    }
}
// 正文内容区：放大字号 + 宽松行间距
.cont {
    margin-top: 40px;
    font-size: 16px;
    line-height: 1.9;
    color: var(--main-dark-gray, #3C3C3C);
    @include mo {
        font-size: 15px;
        line-height: 1.8;
    }
    // 兼容 CKEditor 生成的图片标签
    :deep(img) {
        max-width: 100%;
        height: auto;
        border-radius: 6px;
        display: block;
        margin: 24px auto;
    }
    :deep(p) {
        margin-bottom: 1.2em;
    }
    :deep(h2), :deep(h3) {
        font-weight: 700;
        margin: 1.8em 0 0.6em;
        line-height: 1.4;
    }
}

// 上一篇 / 下一篇 / 返回列表
.nav-footer {
    border-top: 1px solid var(--main-light-gray, #DCDCDC);
    padding: fluid(60px, 40px) 0 fluid(100px, 60px);
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: flex-start;

    .nav-links {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 24px;
        @include mo {
            flex-direction: column;
            gap: 16px;
        }
    }

    .nav-item {
        display: flex;
        align-items: center;
        gap: 12px;
        flex: 1;
        padding: 16px 20px;
        border: 1px solid var(--main-light-gray, #DCDCDC);
        border-radius: 8px;
        transition: all .3s;
        color: var(--main-dark-gray);
        text-decoration: none;
        min-width: 0;
        &:not(.--disabled):hover {
            border-color: var(--main-orange);
            box-shadow: 0 2px 12px -4px rgba(255, 100, 0, .25);
            color: var(--main-orange);
        }
        &.--disabled {
            opacity: 0;
            pointer-events: none;
        }
        &.--right {
            justify-content: flex-end;
            text-align: right;
        }
        i {
            font-size: 20px;
            flex-shrink: 0;
            color: var(--main-orange);
        }
        .nav-content {
            display: flex;
            flex-direction: column;
            gap: 4px;
            min-width: 0;
        }
        .nav-label {
            font-size: 12px;
            color: #888;
        }
        .nav-title {
            font-size: 14px;
            font-weight: 500;
            // 单行截断
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
}

.loading,
.not-found {
    text-align: center;
    padding: 100px 0;
    color: var(--main-gray, #666);
    font-size: 18px;
}
</style>
