<template>
    <div class="_news-list" :class="{ '--carousel': carousel }">
        <NuxtLink class="item animate-show-delay"
            :class="{ 'show': carousel }"
            v-for="(item, index) in newsList"
            :key="index"
            :to="localePath(`/news/detail/${item.uuid}`)"
            v-fade-in="{ mode: 'delay' }"
        >

            <EleRatioWrapper
                class="cover"
                :ratio="260 / 413"
            >
                <img :src="item.cover_list?.[0] || ''" class="norm" alt="">
                <div class="category-name">{{ getCategoryName(item.type) }}</div>
                <div class="mask">
                    <div class="rect-1"></div>
                    <div class="rect-2"></div>
                </div>
            </EleRatioWrapper>
            <div class="info">
                <div class="meta">
                    <div class="date">{{ item.pub_time }}</div>
                    <div class="title">{{ locale === 'en' ? (item.title_en || item.title) : item.title }}</div>
                    <div class="abst" v-if="item.abst_en || item.abst">{{ locale === 'en' ? (item.abst_en || item.abst) : item.abst }}</div>
                </div>
                <div class="more">
                    <span>{{ $t('news.readMore') }}</span>
                    <i class="icon ri-arrow-right-line"></i>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
import useAppStore from "@/stores/app";

defineProps({
    newsList: Array,
    carousel: {
        type: Boolean,
        default: false
    }
})

const appStore = useAppStore()
const { locale } = useI18n()
const localePath = useLocalePath()

// 分类名称跟随语言切换：postCate 含 cn / en 字段
function getCategoryName(type) {
    const category = appStore.postCate?.find(cate => cate.link.includes(type))
    return locale.value === 'en'
        ? (category?.en || category?.cn || '')
        : (category?.cn || '')
}
</script>

<style>
._news-list {

}
</style>

<style scoped lang="scss">
._news-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: fluid(60px, 16px);
    @include mo {
        grid-template-columns: 1fr;
        gap: 24px;
    }
    .item {
        display: flex;
        flex-direction: column;
        position: relative;
        background: #F8F8F8;
        border-radius: 10px;
        border: 1px solid var(--main-light-gray, #DCDCDC);
        overflow: hidden;
        transition: all .3s ease-in-out;
    }
    .cover {
        width: 100%;
        position: relative;
        overflow: hidden;
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
        padding: 20px 24px 24px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .meta {
            .date {
                font-family: 'Google Sans', SpaceGrotesk, sans-serif;
                color: var(--main-orange, #FF6400);
                font-size: 13px;
                font-weight: 400;
                line-height: 1.5;
            }
            .title {
                margin-top: 8px;
                // 标题稍窄于摘要/按钮，形成视觉层次
                max-width: 85%;
                // 锁定 2 行高度：确保卡片间内容对齐（1 行标题也占两行空间）
                min-height: calc(2 * 1.4em);
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                align-self: stretch;
                overflow: hidden;
                color: var(--main-dark-gray, #3C3C3C);
                text-overflow: ellipsis;
                // pretty: 只防尾行孤字，不强制等行宽，换行更自然
                text-wrap: pretty;
                font-size: 18px;
                font-weight: 600;
                line-height: 1.4;
                @include mo {
                    font-size: 15px;
                }
            }
            .abst {
                margin-top: 10px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 14px;
                line-height: 1.6;
                // 中间灰：比 #C8C9C7 深、比 #5C5C5C 浅，可读且不抢眼
                color: #888;
            }
        }
        .more {
            align-self: flex-end;
            margin-top: 24px;
            // 宽度跟随内容自适应（英文 "Read More" 比中文长），不强制 76px
            flex: none;
            padding-bottom: 8px;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            white-space: nowrap;
            border-bottom: 1px solid var(--main-orange);
            color: var(--main-dark-gray);
            .icon {
                font-size: 16px;
                color: var(--main-orange);
            }
        }
    }
    // 移动端横划走马灯（首页使用，:carousel="true"）
    @include mo {
        &.--carousel {
            // 突破父级 .wrap 的 24px 侧边距，实现全宽横滚
            margin-left: -24px;
            margin-right: -24px;
            // scroll-padding-left 告知 snap 引擎，快照锚点从 24px 处开始
            scroll-padding-left: 24px;
            // 覆盖 grid 为横向 flex
            display: flex;
            flex-direction: row;
            gap: 14px;
            overflow-x: auto;
            overflow-y: visible;
            overscroll-behavior-x: contain;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
            &::-webkit-scrollbar { display: none; }
            // ::before 伪元素作为固定 24px 占位符（比 padding-left 在 scroll container 中更可靠）
            &::before {
                content: '';
                flex: none;
                min-width: 24px;
            }
            // ::after 给末尾留出少量空白，防止最后一张卡贴右边
            &::after {
                content: '';
                flex: none;
                min-width: 10px;
            }
            .item {
                flex: none;
                // 露出约 10vw 的下一张提示用户可继续滑动
                width: 82vw;
                scroll-snap-align: start;
            }
        }
    }
    .item:hover {
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
</style>
