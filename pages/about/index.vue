<template>
    <main>
        <EleDefaultCover
            image="/images/about/profile/cover.jpg"
            image-mobile="/images/about/profile/cover-m.jpg"
            :text="$t('about.coverTitle')"
        ></EleDefaultCover>
        <EleBreadcrumb
            :navigate="breadcrumb"
        />

        <section class="s1">
            <div class="wrap">
                <div class="left">
                    <div class="s-t">
                        {{ $t('about.profileTitle') }}
                    </div>
                    <div class="t2">{{ $t('about.profileDesc') }}</div>
                    <div class="abst">
                        <p class="s-a">{{ $t('about.profileContent1') }}</p>
                        <p class="s-a">{{ $t('about.profileContent2') }}</p>
                    </div>
                </div>
                <div class="right">
                    <img class="bg" src="/images/about/profile/video-bg.jpg" alt="">
                    <div class="mask" @click="openVideo">
                        <img src="/images/layout/icon/video-play.png" alt="">
                        <div class="t">{{ $t('about.videoPlayBtn') }}</div>
                    </div>
                </div>
            </div>
        </section>

        <EleProfileData class="el-profile-data"></EleProfileData>

        <section class="s3">
            <div class="wrap">
                <div class="r">
                    <MotionGlareHover>
                        <NuxtLink class="item" :to="localePath('/about/history')">
                            <img src="/images/about/profile/link/1.jpg" alt="" class="bg">
                            <div class="mask">
                                <div class="name">{{ $t('about.historyLink') }}</div>
                                <div class="icon">
                                    <i class="ri-arrow-right-up-line"></i>
                                </div>
                            </div>
                        </NuxtLink>
                    </MotionGlareHover>
                    <MotionGlareHover>
                        <NuxtLink class="item" :to="localePath('/about/culture')">
                            <img src="/images/about/profile/link/2.jpg" alt="" class="bg">
                            <div class="mask">
                                <div class="name">{{ $t('about.cultureLink') }}</div>
                                <div class="icon">
                                    <i class="ri-arrow-right-up-line"></i>
                                </div>
                            </div>
                        </NuxtLink>
                    </MotionGlareHover>
                </div>
                <div class="r">
                    <MotionGlareHover>
                        <NuxtLink class="item" :to="localePath('/about/glonet')">
                            <img src="/images/about/profile/link/3.jpg" alt="" class="bg">
                            <div class="mask">
                                <div class="name">{{ $t('about.networkLink') }}</div>
                                <div class="icon">
                                    <i class="ri-arrow-right-up-line"></i>
                                </div>
                            </div>
                        </NuxtLink>
                    </MotionGlareHover>
                    <MotionGlareHover>
                        <NuxtLink class="item" :to="localePath('/about/patent')">
                            <img src="/images/about/profile/link/4.jpg" alt="" class="bg">
                            <div class="mask">
                                <div class="name">{{ $t('about.patentLink') }}</div>
                                <div class="icon">
                                    <i class="ri-arrow-right-up-line"></i>
                                </div>
                            </div>
                        </NuxtLink>
                    </MotionGlareHover>
                    <MotionGlareHover>
                        <NuxtLink class="item" :to="localePath('/about/honor')">
                            <img src="/images/about/profile/link/5.jpg" alt="" class="bg">
                            <div class="mask blue">
                                <div class="name">{{ $t('about.honorLink') }}</div>
                                <div class="icon">
                                    <i class="ri-arrow-right-up-line"></i>
                                </div>
                            </div>
                        </NuxtLink>
                    </MotionGlareHover>
                </div>
                <div class="r">
                    <MotionGlareHover>
                        <NuxtLink class="item" :to="localePath('/about/esg')">
                            <img src="/images/about/profile/link/6.jpg" alt="" class="bg">
                            <div class="mask">
                                <div class="name">{{ $t('nav.aboutEsg') }}</div>
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
            <video src="/videos/intro-720p-optimized.mp4?v=2" controls ref="elVideo"></video>
        </div>
    </main>
</template>

<script setup>
const { t, locale } = useI18n()
const localePath = useLocalePath()

const breadcrumb = computed(() => [{
    name: t('nav.about'),
    link: '/about'
}, {
    name: t('about.coverTitle'),
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

function handleKeydown(e) {
    if (e.key === 'Escape' && statusVideo.value) {
        closeVideo()
    }
}

onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped lang="scss">
.s1 {
    padding: fluid(100px, 40px) 0;
    .wrap {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        gap: fluid(120px, 32px);
        @include mo {
            flex-direction: column;
            gap: 32px;
        }
    }
    .left {
        width: 50%;
        @include mo {
            width: 100%;
        }
        .s-t {
            color: #000;
            font-size: fluid(38px, 28px);
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            @include mo {
                font-size: 28px;
            }
        }
    }
    .right {
        width: auto;
        height: auto;
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        @include mo {
            width: 100%;
        }
        &:hover {
            >img {
                transform: scale(1.03);
            }
        }
        img.bg {
            width: 100%;
            max-width: min(660px, 90vw);
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
        font-size: fluid(28px, 20px);
        font-style: normal;
        font-weight: 700;
        line-height: 130%;
        margin-top: fluid(48px, 20px);
        @include mo {
            font-size: 20px;
        }
    }
    .abst {
        margin-top: fluid(32px, 16px);
        p {
            color: var(--main-dark-gray, #3C3C3C);
            font-size: 18px;
            line-height: 1.75;
            & + p {
                margin-top: fluid(20px, 12px);
            }
            @include mo {
                font-size: 16px;
                & + p {
                    margin-top: 12px;
                }
            }
        }
        .s-a {
            overflow: hidden;
            color: var(--main-dark-gray, #3C3C3C);
            text-overflow: ellipsis;
            font-size: 18px;
            font-style: normal;
            line-height: 150%;
            @include mo {
                font-size: 16px;
            }
        }
    }
    @include mo {
        padding: 40px 0;
    }
}

.s3 {
    margin-top: fluid(100px, 40px);
    padding: fluid(100px, 40px) 0;
    background: #FAFAFA;
    .wrap {
        .r {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            gap: fluid(20px);
            margin-bottom: fluid(20px);
            @include mo {
                flex-direction: column;
            }
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
                padding: fluid(48px);
                display: flex;
                flex-flow: column nowrap;
                justify-content: space-between;
                align-items: flex-start;
                &.blue {
                    color: var(--main-blue);
                }
                .name {
                    color: inherit;
                    font-size: fluid(24px);
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
                        font-size: fluid(24px);
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
        right: 24px;
        top: 24px;
        color: white;
        font-size: fluid(40px);
        cursor: pointer;
        transition: transform 0.2s ease;
        &:hover {
            transform: scale(1.1);
        }
    }
    &.active {
        opacity: 1;
        visibility: visible;
        z-index: 999;
    }
}
</style>
