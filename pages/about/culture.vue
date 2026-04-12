<template>
    <main>
        <EleDefaultCover
            image="/images/about/culture/cover.jpg"
            image-mobile="/images/about/culture/cover-m.jpg"
            :text="$t('culture.coverTitle')"
        ></EleDefaultCover>
        <EleBreadcrumb
            :navigate="breadcrumb"
        />
        <section class="s1">
            <div class="cont">
                <!-- 桌面端图片 -->
                <img :src="philosophyImage" :alt="$t('culture.coverTitle')" class="img-desktop">
                <!-- 移动端图片（根据语言切换） -->
                <img :src="philosophyImageMobile" :alt="$t('culture.coverTitle')" class="img-mobile">
            </div>
        </section>
        <section class="s2">
            <div class="wrap">
                <div class="t">{{ $t('culture.coreValuesTitle') }}</div>
                <div class="list">
                    <div
                        class="item"
                        v-for="(item, index) in valueList"
                        :key="index"
                        :class="{active: index === indexValue}"
                        @mouseenter="indexValueUpdate(index)"
                    >
                        <img :src="item.cover" alt="" class="bg">
                        <div class="t1">{{ item.t1 }}</div>
                        <div class="ab">{{ item.abst }}</div>
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <path d="M13.5 13.5V7.5H16.5V13.5H22.5V16.5H16.5V22.5H13.5V16.5H7.5V13.5H13.5ZM15 30C6.705 30 0 23.28 0 15C0 6.705 6.705 0 15 0C23.28 0 30 6.705 30 15C30 23.28 23.28 30 15 30ZM15 27C21.615 27 27 21.615 27 15C27 8.37 21.615 3 15 3C8.37 3 3 8.37 3 15C3 21.615 8.37 27 15 27Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const philosophyImage = computed(() =>
    locale.value === 'en'
        ? '/images/about/culture/s1-content-en.jpg'
        : '/images/about/culture/s1-content.jpg'
)
const philosophyImageMobile = computed(() =>
    locale.value === 'en'
        ? '/images/about/culture/s1-content-en-m.jpg'
        : '/images/about/culture/s1-content-m.jpg'
)
const breadcrumb = computed(() => [
    { name: t('nav.about'), link: '/about' },
    { name: t('culture.coverTitle'), link: '' }
])
const valueCovers = [
    '/images/about/culture/value/1.jpg',
    '/images/about/culture/value/2.jpg',
    '/images/about/culture/value/3.jpg',
    '/images/about/culture/value/4.jpg',
    '/images/about/culture/value/5.jpg',
    '/images/about/culture/value/6.jpg',
]
const valueKeys = ['value1', 'value2', 'value3', 'value4', 'value5', 'value6']
const valueList = computed(() => valueKeys.map((key, i) => ({
    cover: valueCovers[i],
    t1: t(`culture.${key}Title`),
    abst: t(`culture.${key}Desc`),
})))
const indexValue = ref(0)
function indexValueUpdate(index) {
    indexValue.value = index
}
</script>

<style scoped lang="scss">
.s1 {
    width: 100%;
    height: auto;
    > .cont {
        width: 100%;
        height: auto;
    }
    img {
        width: 100%;
        height: auto;
        display: block;
    }
    .img-mobile {
        display: none;
    }
    @include mo {
        .img-desktop {
            display: none;
        }
        .img-mobile {
            display: block;
        }
    }
}
.s2 {
    padding: fluid(100px, 48px) 0;
    @include mo {
        padding: 48px 0;
    }
    .t {
        font-size: fluid(38px, 26px);
        font-weight: bold;
        @include mo {
            font-size: 26px;
        }
    }
    .list {
        height: fluid(523px);
        margin-top: fluid(48px);
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: flex-start;
        border-radius: 10px;
        overflow: hidden;
        @include mo {
            height: auto;
            flex-direction: column;
            gap: 0;
        }
        .item {
            width: 12.6%;
            height: 100%;
            flex: none;
            overflow: hidden;
            transition: all .3s;
            padding: fluid(50px);
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-end;
            align-items: center;
            gap: 14px;
            @include mo {
                width: 100% !important;
                height: 120px;
                padding: 16px 24px;
                justify-content: center;
                align-items: flex-start;
                &.active {
                    height: 280px;
                    justify-content: flex-start;
                    padding-top: 32px;
                }
            }
            .t1 {
                color: white;
                font-size: fluid(24px);
            }
            .ab {
                visibility: hidden;
                opacity: 0;
                height: 0;
                color: white;
            }
            .icon {
                z-index: 9;
                opacity: .5;
            }
            &.active {
                width: 37%;
                justify-content: flex-start;
                align-items: flex-start;
                .t1 {
                    font-size: fluid(36px);
                }
                .ab {
                    visibility: visible;
                    opacity: 1;
                    height: auto;
                }
                .icon {
                    display: none;
                }
            }
            img {
                position: absolute;
                z-index: 0;
                inset: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
</style>
