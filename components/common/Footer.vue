<template>
    <footer>
        <div class="bg">
            <div class="mask"></div>
            <video src="/videos/footer-bg.webm" loop muted autoplay playsinline></video>
        </div>
        <div class="top">
            <div class="wrap">
                <div class="logo">
                    <svg width="181" height="51" viewBox="0 0 181 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2269_785)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 50.4332L27.0957 3.50952H57.3644V50.4332H43.7441V30.6447C43.0529 30.6447 42.4144 31.0134 42.072 31.6124L36.9834 40.4271H21.5001L15.7268 50.4332H0ZM52.0058 15.7671H35.7392L27.7869 29.5388H43.7376V18.5056L52.0651 16.274C52.3547 16.195 52.3021 15.7671 51.9992 15.7671H52.0058Z" fill="#1E3296"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M181 50.4332H167.38V25.082H143.694V50.4332H130.074V0.566895H143.694V23.9695C144.385 23.9695 145.024 23.6009 145.366 23.0018L151.245 12.8245H174.193C177.952 12.8245 181 15.8724 181 19.6313V50.4332Z" fill="#FF6400"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M68.2593 43.6264V12.8245H112.372C116.131 12.8245 119.179 15.8724 119.179 19.6313V50.4332H75.0661C71.3072 50.4332 68.2593 47.3853 68.2593 43.6264ZM81.8795 38.1757H105.565V25.082H81.8795V38.1757Z" fill="#1E3296"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_2269_785">
                                <rect width="181" height="49.8663" fill="white" transform="translate(0 0.566895)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div class="slogan">
                    <div class="cn">{{ $t('footer.slogan') }}</div>
                    <div class="en" v-if="locale !== 'en'">Connect Smart World for Better Future</div>
                </div>
            </div>
        </div>
        <div class="cont">
            <div class="wrap">
                <div class="contact">
                    <i class="icon ri-customer-service-2-line"></i>
                    <div class="item phone">
                        <span>{{ orgInfo.telephone }}</span>
                    </div>
                    <div class="w">
                        <div class="item"><a href="mailto: {{ orgInfo.email }}">{{ $t('footer.emailLabel') }}：{{ orgInfo.email }}</a></div>
                        <div class="item"><span>{{ $t('footer.addressLabel') }}：{{ orgInfo.address }}</span></div>
                    </div>
                </div>
                <div class="sl l2"></div>
                <div class="wm">
                    <div
                        class="cate-item"
                        v-for="(item, index) in menu"
                        :key="item.cn"
                    >
                        <NuxtLink class="name cate-name" :to="localePath(item.link)">{{ locale === 'en' ? item.en : item.cn }}</NuxtLink>
                        <NuxtLink
                            class="item"
                            v-for="(subItem, subIndex) in item.children"
                            :key="subItem.cn"
                            :to="localePath(subItem.link)"
                        >{{ locale === 'en' ? (subItem.en || subItem.cn) : subItem.cn }}</NuxtLink>
                    </div>
                </div>
                <div class="sl l3"></div>
                <div :class="['wc', { 'wc-en': locale === 'en' }]">
                    <div :class="['la', { 'la-en': locale === 'en' }]">
                        <i class="icon ri-wechat-fill"></i>
                        <span>{{ $t('footer.wechatLabel') }}</span>
                    </div>
                    <div class="qr">
                        <img src="/images/wechat.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="copy">
            <div class="wrap">
                <div class="left">
                    <a href="https://beian.miit.gov.cn/" target="_blank">{{ orgInfo.beian }}</a>
                    <span>© {{year}} {{ orgInfo.name }} All Rights Reserved.</span>
                    <!--<a href="javascript:;" class="ga">-->
                    <!--    <img src="/images/ga.png" alt="">-->
                    <!--    <span>苏公网安备32041102001590号</span>-->
                    <!--</a>-->
                </div>
                <div class="right">
                    <div class="backtop" @click="backtop()">
                        <span>{{ $t('footer.backToTop') }}</span>
                        <i class="icon ri-arrow-up-line"></i>
                    </div>
                </div>
            </div>
        </div>
    </footer>

</template>

<script setup>
    import useLayoutStore from "@/stores/layout";
    const { locale } = useI18n()
    const localePath = useLocalePath()
    const date = new Date()
    const year = ref(date.getFullYear())
    const runtimeConfig = useRuntimeConfig()
    const appConfig = useAppConfig()
    const layoutStore = useLayoutStore()

    const orgInfo = computed(() => layoutStore.orgInfo)
    const menu = computed(() => layoutStore.nav)

    function backtop() {
        if (import.meta.client) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // 关键：启用平滑滚动
            })
        }

    }
</script>

<style scoped lang="scss">
footer {
    padding-top: fluid(120px, 60px);
    position: relative;
    overflow: hidden;

    @include mo {
        padding-top: 60px;
    }

    .bg {
        position: absolute;
        inset: 0;
        .mask {
            position: absolute;
            inset: 0;
            background: rgba(255, 255, 255, 0.8);
        }
        video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    // ── 顶部 logo + slogan ──────────────────────────────
    .top {
        .wrap {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 32px;
            border-bottom: 0.5px solid var(--main-blue, #1E3296);
            @include mo {
                flex-direction: column;
                align-items: flex-start;
                gap: 16px;
                padding-bottom: 24px;
            }
        }
        .logo svg {
            @include lap {
                width: 140px;
                height: auto;
            }
            @include mo {
                width: 120px;
                height: auto;
            }
        }
        .slogan {
            font-size: fluid(30px, 18px);
            font-weight: 400;
            text-align: right;
            .en {
                font-family: TTFors;
            }
            @include mo {
                font-size: 18px;
                text-align: left;
            }
        }
    }

    // ── 主内容区：联系方式 + 站点地图 + 微信 ─────────────
    .cont {
        padding: fluid(60px, 36px) 0 fluid(80px, 48px);
        @include mo {
            padding: 36px 0 48px;
        }

        & > .wrap {
            @include flex-r(wrap);
            justify-content: space-between;
            align-items: flex-start;
            gap: 32px;
            .sl { display: none; }

            @include mo {
                @include flex-c(nowrap);
                gap: 32px;
            }
        }

        .contact {
            @include flex-c();
            justify-content: flex-start;
            gap: 11px;
            flex-shrink: 0;

            .icon {
                font-size: fluid(36px, 24px);
                color: var(--main-orange);
                @include mo {
                    font-size: 28px;
                }
            }
            .item {
                color: #000;
                font-size: 16px;
                line-height: 1.4;
                font-family: -apple-system, SpaceGrotesk, HarmonyOS_Sans;
                a { color: inherit; }
                &.phone {
                    font-size: fluid(20px);
                    font-weight: 700;
                    @include lap {
                        font-size: 18px;
                    }
                    @include mo {
                        font-size: 16px;
                    }
                }
                @include mo {
                    font-size: 14px;
                }
            }
            .w {
                @include flex-c();
                gap: 6px;
            }
        }

        .wm {
            flex: 1;
            min-width: 0;
            max-width: 800px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px 40px;
            align-content: start;

            @include lap {
                max-width: 560px;
                gap: 20px 24px;
            }
            @include mo {
                // 移动端改为两列展开，节省空间
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 20px 16px;
                max-width: none;
                width: 100%;
            }

            .cate-item {
                @include flex-c();
                gap: 0;

                .cate-name {
                    color: var(--main-orange, #FF6400);
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 1;
                    margin-bottom: 8px;
                    @include mo {
                        font-size: 13px;
                        margin-bottom: 10px;
                    }
                }
                .item {
                    margin-top: 10px;
                    color: var(--main-dark-gray, #3C3C3C);
                    font-size: 15px;
                    line-height: 1.3;
                    @include lap {
                        font-size: 14px;
                    }
                    @include mo {
                        font-size: 13px;
                        margin-top: 7px;
                    }
                }
            }
        }

        .wc {
            flex-shrink: 0;
            @include flex-c();
            align-items: flex-start;

            &.wc-en {
                align-items: center;
            }
            @include mo {
                align-items: center;
            }

            .la {
                @include flex-r();
                align-items: center;
                &.la-en {
                    justify-content: center;
                }
                .icon {
                    font-size: fluid(24px);
                    color: var(--main-orange);
                    margin-right: 8px;
                    flex-shrink: 0;
                }
                span {
                    color: #000;
                    font-size: 14px;
                    line-height: 1.4;
                    white-space: pre-line;
                }
            }
            &.wc-en .la span {
                text-align: center;
            }
            .qr {
                margin-top: 12px;
                width: 110px;
                @include lap {
                    width: 96px;
                }
                @include mo {
                    width: 100px;
                }
                img {
                    width: 100%;
                    height: auto;
                }
            }
        }
    }

    // ── 版权栏 ──────────────────────────────────────────
    .copy {
        .wrap {
            padding: 20px 0 48px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            border-top: 0.5px solid var(--main-blue, #1E3296);

            @include mo {
                flex-direction: column;
                align-items: flex-start;
                gap: 12px;
                padding: 16px 0 40px;
            }
        }
        .left {
            display: flex;
            flex-wrap: wrap;
            gap: 8px 15px;
            font-size: 12px;
            a, span {
                color: #999;
                text-transform: uppercase;
                text-decoration: none;
            }
        }
        .right {
            .backtop {
                display: flex;
                gap: 10px;
                align-items: center;
                cursor: pointer;
            }
            span {
                color: var(--main-dark-gray, #3C3C3C);
                font-size: 15px;
                @include mo {
                    font-size: 14px;
                }
            }
            .icon {
                font-size: fluid(22px);
                color: var(--main-orange);
            }
        }
    }
}
</style>
