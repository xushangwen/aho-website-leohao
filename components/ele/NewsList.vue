<template>
    <div class="_news-list">
        <NuxtLink class="item animate-show-delay"
            v-for="(item, index) in newsList"
            :key="index"
            :href="`/news/detail/${item.uuid}`"
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
                <div class="left">
                    <div class="date">{{ item.pub_time }}</div>
                    <div class="title">{{ item.title }}</div>
                </div>
                <div class="right">
                    <div class="more">
                        <span>{{ $t('common.learnMore') }}</span>
                        <i class="icon ri-arrow-right-line"></i>
                    </div>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
import useAppStore from "@/stores/app";

defineProps({
    newsList: Array
})

const appStore = useAppStore()

// 获取分类名称
function getCategoryName(type) {
    const category = appStore.postCate?.find(cate => cate.link.includes(type))
    return category?.cn || ''
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
        padding: 32px;
        height: 180px;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: stretch;
        .left {
            flex: auto;
            .date {
                color: var(--main-orange, #FF6400);
                font-family: "TT Fors";
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%; /* 21px */
            }
            .title {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                align-self: stretch;
                overflow: hidden;
                color: var(--main-dark-gray, #3C3C3C);
                text-overflow: ellipsis;
                font-size: 18px;
                font-style: normal;
                line-height: 130%; /* 23.4px */
            }
        }
        .right {
            width: 80px;
            flex: none;
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-end;
            align-items: flex-end;
            .more {
                width: 76px;
                padding-bottom: 8px;
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: center;
                font-size: 12px;
                border-bottom: 1px solid var(--main-orange);
                .icon {
                    font-size: 16px;
                }
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
