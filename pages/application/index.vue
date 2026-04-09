<template>
    <main>
        <EleDefaultCover
            image="/images/prod/cover.jpg"
            image-mobile="/images/prod/cover-m.jpg"
            :text="$t('application.coverTitle')"
        ></EleDefaultCover>
        <EleBreadcrumb
            :navigate="breadcrumb"
        />
        <section class="s1">
            <div class="wrap">
                <div class="list">
                    <div
                        class="item"
                        v-for="(item, index) in application"
                        :key="`item-${index}`"
                    >
                        <img :src="item.contentBg" alt="" class="bg">
                        <div class="c">
                            <div class="icon" v-html="item.contentIcon"></div>
                            <div class="cont">
                                <div class="name">{{ locale === 'en' ? item.nameEn : item.name }}</div>
                                <div class="region">
                                    <div class="leb">{{ $t('application.regionLabel') }}</div>
                                    <div class="c">{{ locale === 'en' ? item.regionEn : item.region }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()

const application = ref(appConfig.clientConfig.indexApplication)
// 注意cover图片需要替换
const { t, locale } = useI18n()
const breadcrumb = computed(() => [
    { name: t('application.coverTitle'), link: '/application' }
])
</script>

<style scoped lang="scss">
.s1 {
    .list {
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        gap: fluid(24px);
    }
    .item {
        width: 100%;
        height: 400px;
        position: relative;
        @include mo {
            height: 260px;
        }
        > .bg,
        > .c {
            position: absolute;
            inset: 0;
        }
        .bg {
            z-index: 0;
            width: 100%;
            height: 100%;
        }
        > .c {
            z-index: 2;
            padding: fluid(60px, 24px);
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: flex-end;
            gap: fluid(110px, 16px);
            @include mo {
                padding: 24px;
                gap: 16px;
                align-items: flex-end;
            }
            .icon {
                width: 40px;
                height: 40px;
                flex: none;
                @include mo {
                    width: 28px;
                    height: 28px;
                }
            }
            .cont {
                width: 100%;
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: flex-end;
                gap: fluid(91px, 8px);
                @include mo {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 8px;
                }
                .name {
                    font-size: fluid(32px, 22px);
                    color: white;
                    font-weight: bold;
                    width: 225px;
                    flex: none;
                    @include mo {
                        font-size: 22px;
                        width: auto;
                    }
                }
                .region {
                    width: 100%;
                    color: white;
                    font-size: 18px;
                    line-height: 1.5;
                    @include mo {
                        font-size: 13px;
                    }
                }
            }
        }
    }
}
</style>
