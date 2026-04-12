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
                        :id="item.anchorId"
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
// ============================================================
// 断点策略（与全站断点合同一致）
//   断点 1 @include tab  ≤1024px：平板/窄笔记本
//     → 所有布局收紧：padding / gap / icon / 字体 / flex 方向
//     → 卡片高度：400px → 300px
//   断点 2 @include mo   ≤992px：手机
//     → 仅追加卡片高度二次收缩：300px × ⅔ = 200px
//     → 区域文字再降一级保证内容可见
// ============================================================
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
        /* 锚点跳转时预留固定 Header 的高度 */
        scroll-margin-top: calc(var(--HEADER_HEIGHT) + 20px);

        // 断点 1：≤1024px，高度首次收缩
        @include tab {
            height: 300px;
            scroll-margin-top: calc(var(--HEADER_HEIGHT_MOB) + 20px);
        }
        // 断点 2：≤992px，高度再缩 1/3（300 × ⅔ = 200）
        @include mo {
            height: 200px;
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
            object-fit: cover;
        }
        > .c {
            z-index: 2;
            padding: fluid(60px, 24px);
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: flex-end;
            gap: fluid(110px, 16px);

            // 断点 1：布局收紧 — 固定 padding/gap，为内容释放空间
            @include tab {
                padding: 24px;
                gap: 16px;
            }

            .icon {
                width: 40px;
                height: 40px;
                flex: none;
                // 断点 1：icon 缩小，margin-bottom 在贴底基础上稍微上移
                @include tab {
                    width: 28px;
                    height: 28px;
                    margin-bottom: 20px;
                }
                /* SVG 有硬编码 width/height="40"，:deep 强制跟随容器缩放 */
                :deep(svg) {
                    width: 100%;
                    height: 100%;
                    display: block;
                }
            }

            .cont {
                width: 100%;
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: flex-end;
                gap: fluid(91px, 8px);

                // 断点 1：横排 → 纵向堆叠，宽屏双列在窄屏挤压严重
                @include tab {
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
                    // 断点 1：固定宽度释放，字号收至最小值
                    @include tab {
                        font-size: 22px;
                        width: auto;
                    }
                }

                .region {
                    width: 100%;
                    color: white;
                    font-size: 18px;
                    line-height: 1.5;
                    // 断点 1：区域文字紧凑化
                    @include tab {
                        font-size: 13px;
                    }
                    // 断点 2：手机最窄，卡片仅 200px，文字再缩一级保证名称可见
                    @include mo {
                        font-size: 12px;
                        line-height: 1.4;
                    }
                }
            }
        }
    }
}
</style>
