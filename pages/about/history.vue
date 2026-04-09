<template>
    <main>
        <EleDefaultCover
            image="/images/about/history/cover.jpg"
            image-mobile="/images/about/history/cover-m.jpg"
            :text="$t('history.coverTitle')"
        ></EleDefaultCover>
        <EleBreadcrumb
            :navigate="breadcrumb"
        />

        <section class="s1">
            <div class="bg">
                <img src="/images/about/history/bg.jpg" alt="">
            </div>
            <div class="wrap">
                <div class="nav">
                    <div
                        v-for="(item, index) in history"
                        :class="['item', {'active': indexSection === index}]"
                        :key="`nav-${item.sectionName}`"
                        @click="indexSection = index"
                    >
                        <div class="slogan">{{ locale === 'en' ? item.sectionSloganEn : item.sectionSlogan }}</div>
                        <div class="name">{{item.sectionName}}</div>
                    </div>
                </div>
                <div class="content">
                    <div
                        :class="['list']"
                    >
                        <div class="item" v-for="item in historyDisplay" :key="`item-${item.t1}`">
                            <div class="year">{{item.year}}</div>
                            <div class="t1">
                                <div
                                    v-if="typeof (locale === 'en' ? item.t1En : item.t1) === 'object'"
                                    class="li"
                                >
                                    <div v-for="(t1Item, t1Index) in (locale === 'en' ? item.t1En : item.t1)" :key="`t1Index${t1Index}`"> {{ t1Item }}</div>
                                </div>
                                <span v-else> {{ locale === 'en' ? item.t1En : item.t1 }}</span>
                            </div>
                            <div class="t2">
                                <div
                                    v-if="typeof (locale === 'en' ? item.t2En : item.t2) === 'object'"
                                    class="li"
                                >
                                    <div v-for="(t2Item, t2Index) in (locale === 'en' ? item.t2En : item.t2)" :key="`t2Index${t2Index}`"> {{ t2Item }}</div>
                                </div>
                                <span v-else> {{ locale === 'en' ? item.t2En : item.t2 }}</span>
                            </div>
                            <div class="images">
                                <img :src="item.images" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="prev" @click="prevPage" v-if="statusPrev">
                    <i class="icon ri-arrow-left-s-line"></i>
                </div>
                <div class="next" @click="nextPage" v-if="statusNext">
                    <i class="icon ri-arrow-right-s-line"></i>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()

const history = ref(appConfig.clientConfig.history)
const indexSection = ref(0)
const indexPage = ref(0)
const statusPrev = ref(false)
const statusNext = ref(false)

const { t, locale } = useI18n()
const breadcrumb = computed(() => [
    { name: t('nav.about'), link: '/about' },
    { name: t('history.coverTitle'), link: '' }
])

const historyDisplay = ref([])
const currentSection = ref([])
let len
function updateHistoryDisplay() {
    const start = indexPage.value * 3
    currentSection.value = history.value[indexSection.value].list
    len = currentSection.value.length
    // console.log('currentSection.value', currentSection.value.list)
    historyDisplay.value = currentSection.value.slice(start, start + 3)
    statusPrev.value = start > 0
    console.log(len)
    statusNext.value = len > start + 3
}
updateHistoryDisplay()
watchEffect((indexSection) => {
    updateHistoryDisplay()
})

watchEffect((indexPage) => {
    updateHistoryDisplay()
})

const prevPage = () => {
    indexPage.value = (indexPage.value - 1 + len) % len
}

const nextPage = () => {
    indexPage.value = (indexPage.value + 1) % len
}

onMounted(() => {
})
</script>

<style scoped lang="scss">
.s1 {
    padding: fluid(100px) 0;
    position: relative;
    .bg {
        position: absolute;
        inset: 0;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .wrap {
        position: relative;
        .nav {
            margin: 0 auto;
            width: 100%;
            max-width: min(940px, 90vw);
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: flex-start;
            height: fluid(108px);
            @include mo {
                overflow-x: auto;
                &::-webkit-scrollbar { display: none; }
            }
            .item {
                width: 277px;
                @include mo {
                    width: 160px;
                    flex-shrink: 0;
                    margin: 0 8px;
                }
                margin: 0 12px;
                flex-flow: column nowrap;
                justify-content: flex-start;
                align-items: flex-start;
                border-bottom: 1px solid var(--main-light-gray, #DCDCDC);
                color: #A7A7A7;
                leading-trim: both;
                text-edge: cap;
                font-family: "TTFors";
                transition: all .3s;
                cursor: pointer;
                &.active {
                    border-bottom: 1px solid var(--main-orange, #FF6400);
                    .slogan {
                        color: #000000;
                        font-weight: 700;
                    }
                    .name {
                        font-size: fluid(48px);
                        font-weight: bolder;
                        letter-spacing: -0.96px;
                        color: var(--main-blue);
                    }
                }
                .slogan,
                .name {
                    line-height: 1;
                    transition: all .15s;
                }
                .slogan {
                    font-weight: 300;
                    font-size: fluid(24px);
                }
                .name {
                    height: 50px;
                    margin-top: 12px;
                    font-size: fluid(36px);
                    font-weight: 400;
                    letter-spacing: -0.72px;
                }
            }
        }
        .content {
            width: 92%;
            height: fluid(610px);
            max-width: min(1150px, 90vw);
            margin: tovw(120px) auto 0;
            @include mo {
                height: auto;
                overflow-x: auto;
                &::-webkit-scrollbar { display: none; }
            }
            position: relative;
            @include lap {
                width: 88%;
            }
            .list {
                width: 100%;
                height: fluid(600px);
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: flex-start;
                position: absolute;
                left: 0;
                top: 0;
                .item {
                    //transform: translateY(60px);
                    //opacity: 0;
                }
                //@for $i from 1 through 3 {
                //    &:nth-child(#{$i}) {
                //        transition: all .3s .1s * (3 - $i);
                //    }
                //}
                //&.active {
                //    .item {
                //        transform: translateY(0);
                //        opacity: 1;
                //    }
                //    @for $i from 1 through 3 {
                //        .item:nth-child(#{$i}) {
                //            transition: all .4s .2s * ($i - 1);
                //        }
                //    }
                //}
            }
            .item {
                width: 100%;
                max-width: min(288px, 90vw);
                height: fluid(450px);
                padding: 0 0 0 20px;
                display: flex;
                flex-flow: column nowrap;
                justify-content: flex-start;
                line-height: 1;
                position: relative;
                &:before {
                    display: block;
                    content: '';
                    width: 1px;
                    height: 100%;
                    background: linear-gradient(to bottom, var(--main-blue) 0%, transparent 100%);
                    position: absolute;
                    top: 0;
                    left: 1px;
                }
                &:after {
                    display: block;
                    content: '';
                    width: 3px;
                    height: 50px;
                    background: var(--main-orange);
                    position: absolute;
                    top: 0;
                    left: 0px;
                    z-index: 9;
                }
                .year {
                    color: var(--main-blue, #1E3296);
                    leading-trim: both;
                    text-edge: cap;
                    font-family: "TTFors";
                    font-size: fluid(32px);
                    font-weight: bold;
                    letter-spacing: -0.64px;
                }
                .t1 {
                    margin-top: 7px;
                    color: var(--main-dark-gray, #3C3C3C);
                    font-size: fluid(20px);
                    font-weight: 700;
                }
                .t2 {
                    margin-top: 16px;
                    color: var(--main-dark-gray, #3C3C3C);
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 1.3;
                    .li {
                        > div {
                            position: relative;
                            &::after {
                                content: '●';
                                position: absolute;
                                left: -12px;
                                top: 6px;
                                font-size: 6px;
                            }
                        }
                    }
                }
                .images {
                    margin-top: 16px;
                    width: 100%;
                    overflow: hidden;
                    border-radius: 10px;
                    border: 3px solid var(--main-white, #FFF);
                    img {
                        width: 100%;
                        height: auto;
                    }
                }
            }
            @for $i from 1 through 3 {
                .item:nth-child(#{$i}) {
                    margin-top: calc((3 - #{$i}) * #{fluid(80px)});
                }
            }
        }
        .prev,
        .next {
            width: tovw(100px);
            height: tovw(100px);
            border-radius: 100px;
            background-color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 50%;
            margin-top: -50px;
            cursor: pointer;
            transition: all .3s;
            &:hover {
                background-color: var(--main-blue);
                .icon {
                    color: white;
                }
            }
            .icon {
                font-size: fluid(48px);
                color: var(--main-blue);
                transition: all .3s;
            }
        }
        .prev {
            left: -50px;
            @include lap {
                left: 0px;
            }
        }
        .next {
            right: -50px;
            @include lap {
                right: 0px;
            }
        }
    }
}

</style>
