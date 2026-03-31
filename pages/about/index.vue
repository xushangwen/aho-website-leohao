<template>
    <main>
        <EleDefaultCover
            image="/images/about/profile/cover.jpg"
            image-mobile="/images/about/profile/cover-m.jpg"
            text="公司简介"
        ></EleDefaultCover>
        <EleBreadcrumb
            :navigate="breadcrumb"
        />

        <section class="s1">
            <div class="wrap">
                <div class="left">
                    <div class="s-t">
                        关于澳弘
                    </div>
                    <div class="t2">澳弘电子是专业的PCB研发和生产企业，2020年在上交所挂牌上市。</div>
                    <div class="abst">
                        <p class="s-a">产品应用于消费办公、汽车电子、电源能源、工控医疗、AI算力、卫星互联网、通讯安防等领域。服务于全球20多个国家和地区的品牌客户。</p>
                        <p class="s-a">我们的使命是“承载数字科技，赋能智慧生活”。</p>
                    </div>
                </div>
                <div class="right">
                    <img class="bg" src="/images/about/profile/video-bg.jpg" alt="">
                    <div class="mask" @click="openVideo">
                        <img src="/images/layout/icon/video-play.png" alt="">
                        <div class="t">播放完整影片</div>
                    </div>
                </div>
            </div>
        </section>

        <EleProfileData class="el-profile-data"></EleProfileData>

        <section class="s3">
            <div class="wrap">
                <div class="r">
                    <MotionGlareHover>
                        <NuxtLink class="item" to="/about/history">
                            <img src="/images/about/profile/link/1.jpg" alt="" class="bg">
                            <div class="mask">
                                <div class="name">发展历程</div>
                                <div class="icon">
                                    <i class="ri-arrow-right-up-line"></i>
                                </div>
                            </div>
                        </NuxtLink>
                    </MotionGlareHover>
                    <MotionGlareHover>
                        <NuxtLink class="item" to="/about/culture">
                            <img src="/images/about/profile/link/2.jpg" alt="" class="bg">
                            <div class="mask">
                                <div class="name">企业文化</div>
                                <div class="icon">
                                    <i class="ri-arrow-right-up-line"></i>
                                </div>
                            </div>
                        </NuxtLink>
                    </MotionGlareHover>
                </div>
                <div class="r">
                    <MotionGlareHover>
                        <NuxtLink class="item" to="/about/glonet">
                            <img src="/images/about/profile/link/3.jpg" alt="" class="bg">
                            <div class="mask">
                                <div class="name">全球网络布局</div>
                                <div class="icon">
                                    <i class="ri-arrow-right-up-line"></i>
                                </div>
                            </div>
                        </NuxtLink>
                    </MotionGlareHover>
                    <MotionGlareHover>
                        <NuxtLink class="item" to="/about/patent">
                            <img src="/images/about/profile/link/4.jpg" alt="" class="bg">
                            <div class="mask">
                                <div class="name">资质专利</div>
                                <div class="icon">
                                    <i class="ri-arrow-right-up-line"></i>
                                </div>
                            </div>
                        </NuxtLink>
                    </MotionGlareHover>
                    <MotionGlareHover>
                        <NuxtLink class="item" to="/about/honor">
                            <img src="/images/about/profile/link/5.jpg" alt="" class="bg">
                            <div class="mask blue">
                                <div class="name">澳弘荣誉</div>
                                <div class="icon">
                                    <i class="ri-arrow-right-up-line"></i>
                                </div>
                            </div>
                        </NuxtLink>
                    </MotionGlareHover>
                </div>
                <div class="r">
                    <MotionGlareHover>
                        <NuxtLink class="item" to="/about/esg">
                            <img src="/images/about/profile/link/6.jpg" alt="" class="bg">
                            <div class="mask">
                                <div class="name">ESG</div>
                                <div class="icon">
                                    <i class="ri-arrow-right-up-line"></i>
                                </div>
                            </div>
                        </NuxtLink>
                    </MotionGlareHover>
                </div>

            </div>
        </section>

        <div
            class="video-pop"
            :class="{active: statusVideo}"
        >
            <div class="close" @click="closeVideo">
                <i class="icon ri-close-large-line"></i>
            </div>
            <video src="/videos/intro-720p.mp4" controls ref="elVideo"></video>
        </div>
    </main>
</template>

<script setup>
const breadcrumb = ref([{
    name: '关于澳弘',
    link: '/about'
}, {
    name: '公司简介',
    link: ''
}])

const elVideo = ref(null)
const statusVideo = ref(false)
function closeVideo() {
    statusVideo.value = false
    elVideo.value.pause()
}
function openVideo() {
    statusVideo.value = true
    elVideo.value.play()
}

onMounted(() => {
})
</script>

<style scoped lang="scss">
.s1 {
    padding: tovw(100px) 0;
    .wrap {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        gap: tovw(120px);
    }
    .left {
        width: 50%;
    }
    .right {
        width: auto;
        height: auto;
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        &:hover {
            >img {
                transform: scale(1.03);
            }
        }
        img.bg {
            width: 100%;
            max-width: 660px;
            height: 100%;
            transition: all 1s;
        }
        .mask {
            position: absolute;
            inset: 0;
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, .5);
            color: #ffffff;
            cursor: pointer;
            img {
                width: 90px;
            }
        }
    }
    .t2 {
        color: var(--main-blue, #1E3296);
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 130%;
        margin-top: tovw(48px);
    }
    .abst {
        p {
            margin-top: tovw(32px);
        }
    }
}

.s3 {
    margin-top: tovw(100px);
    padding: tovw(100px) 0;
    background: #FAFAFA;
    .wrap {
        .r {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            gap: 20px;
            margin-bottom: 20px;
        }
        .item {
            display: block;
            border-radius: 10px;
            overflow: hidden;
            transition: all .4s ease-in-out;
            &:hover {
                box-shadow: 0 5px 50px -3px rgba(0, 0, 0, .35);
                .mask {
                    .icon {
                        transform: rotate(45deg);
                    }
                }
            }
            > img {
                width: 100%;
                height: auto;
            }
            .mask {
                position: absolute;
                inset: 0;
                color: #ffffff;
                cursor: pointer;
                padding: 48px;
                display: flex;
                flex-flow: column nowrap;
                justify-content: space-between;
                align-items: flex-start;
                &.blue {
                    color: var(--main-blue);
                }
                .name {
                    color: inherit;
                    font-size: 24px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: 1.3;
                }
                .icon {
                    width: 46px;
                    height: 46px;
                    border: 1px solid currentColor;
                    backdrop-filter: blur(5px);
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: center;
                    align-items: center;
                    border-radius: 40px;
                    background-color: rgba(255, 255, 255, .1);
                    transition: all .3s;
                    i {
                        font-size: 24px;
                        color: currentColor;
                    }
                }
            }
        }
    }
}

.video-pop {
    position: fixed;
    z-index: -1;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    transition: all .3s;
    background-color: rgba(0, 0, 0, .7);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    .close {
        position: absolute;
        right: 0;
        top: 0;
        color: white;
        font-size: 100px;
        cursor: pointer;
    }
    &.active {
        opacity: 1;
        visibility: visible;
        z-index: 999;
    }
}
</style>
