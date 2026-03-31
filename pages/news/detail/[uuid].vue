<template>
<main>
    <div class="_blank"></div>
    <EleBreadcrumb
        :navigate="breadcrumb"
    />
    <div class="wrap" v-if="newsDetail.uuid">
        <div class="arti">
            <div class="date">{{ newsDetail.pub_time }}</div>
            <div class="title">{{ newsDetail.title }}</div>
            <div class="cont" v-html="newsDetail.content"></div>
        </div>
    </div>
    <div class="wrap" v-else-if="loading">
        <div class="loading">加载中...</div>
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
const appStore = useAppStore()
const router = useRouter()

const notFound = ref(false)

const breadcrumb = computed(() => {
    if (newsDetail.value?.title) {
        return [
            {
                name: '新闻中心',
                link: '/news'
            },
            {
                name: newsDetail.value.title,
                link: ''
            },
        ]
    }
    return [
        {
            name: '新闻中心',
            link: '/news'
        }
    ]
})

async function getNewsDetail() {
    const uuid = route.params.uuid
    
    if (!uuid) {
        notFound.value = true
        return null
    }
    
    try {
        const { data } = await useFetch(appConfig.api('/post/detail'), {
            params: { uuid }
        })
        
        if (data.value?.code === 0 && data.value.model) {
            notFound.value = false
            return data.value.model
        } else {
            notFound.value = true
            return null
        }
    } catch (error) {
        console.error('获取新闻详情失败:', error)
        notFound.value = true
        return null
    }
}

const { data: newsDetail, pending: loading, refresh } = await useAsyncData(
    'news-detail',
    () => getNewsDetail(),
    {
        watch: [() => route.params.uuid]
    }
)
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
    padding: 64px 0 200px;
    .date {
        color: var(--main-orange, #FF6400);
        font-family: "TT Fors";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px; /* 162.5% */
    }
    .title {
        color: var(--main-black, #000);
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 130%; /* 36.4px */
        margin-top: 24px;
    }
}
.cont {
    margin-top: 50px;
}
.loading,
.not-found {
    text-align: center;
    padding: 100px 0;
    color: var(--main-gray, #666);
    font-size: 18px;
}
</style>
