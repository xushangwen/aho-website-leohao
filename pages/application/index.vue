<template>
    <main>
        <EleDefaultCover
            image="/images/prod/cover.jpg"
            image-mobile="/images/prod/cover-m.jpg"
            text="行业应用"
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
                                <div class="name">{{item.name}}</div>
                                <div class="region">
                                    <div class="leb">产品应用于：</div>
                                    <div class="c">{{item.region}}</div>
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
const breadcrumb = ref([
    {
        name: '行业应用',
        link: '/application'
    }
])
</script>

<style scoped lang="scss">
.s1 {
    .list {
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        gap: 24px;
    }
    .item {
        width: 100%;
        height: 400px;
        position: relative;
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
            padding: 60px;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: flex-end;
            gap: 110px;
            .icon {
                width: 40px;
                height: 40px;
                flex: none;
            }
            .cont {
                width: 100%;
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: flex-end;
                gap: 91px;
                .name {
                    font-size: 32px;
                    color: white;
                    font-weight: bold;
                    width: 225px;
                    flex: none;
                }
                .region {
                    width: 100%;
                    color: white;
                    font-size: 18px;
                    line-height: 1.5;
                }
            }
        }
    }
}
</style>
