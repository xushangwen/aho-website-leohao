<template>
    <header>
        <nav
            :class="['norm', {transparent: transparentStatus && !keepSolid}]"
            @mouseenter="navEnter()"
            @mouseleave="navLeave()"
        >
            <div class="header-wrap">
                <NuxtLink class="logo" :to="`/`">
                    <svg width="266" height="34" viewBox="0 0 266 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2107_42513)">
                            <path d="M219.843 30.4943C219.608 30.4943 219.418 30.3436 219.418 30.1531V27.247H231.317V10.9487H219.418V8.27295H215.528V10.9487H203.633V27.2514H215.528V31.2208C215.528 32.5277 216.844 33.5865 218.47 33.5865H233.306V30.4987H219.839L219.843 30.4943ZM219.422 13.4251H227.432V17.6957H219.422V13.4251ZM219.422 20.1766H227.432V24.7662H219.422V20.1766ZM215.533 24.7706H207.523V20.181H215.533V24.7706ZM215.533 17.7002H207.523V13.4296H215.533V17.7002Z" fill="#3C3C3C"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M181.926 33.582H199.637V30.8176L195.881 19.2507H192.155L195.912 30.8176H185.651L192.979 8.27295H189.253L181.926 30.8176V33.582ZM169.366 11.4227H177.19V15.7687H169.366V24.5092H177.19V28.8241C177.19 30.4056 173.154 30.4367 172.118 30.4367V33.9807C175.555 33.9807 180.734 33.3162 180.734 28.8285V22.0328H172.911V18.2495H180.734V8.94632H169.366V11.4272V11.4227Z" fill="#3C3C3C"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M235.729 22.2276H248.922V28.6513C248.922 30.0822 244.864 30.091 244.022 30.091V33.9807C247.571 33.9807 252.812 33.2674 252.812 28.6557V22.2321H266V19.4677H252.812V18.8298L263.617 12.5922V8.95068H237.989V11.7151H257.361L248.922 16.5881V19.4721H235.729V22.2365V22.2276Z" fill="#3C3C3C"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M152.395 22.6486H155.939V19.0779H160.48V16.9515H155.939V13.3808H152.395V16.9515H147.854V19.0779H152.395V22.6486ZM150.906 27.2249C149.187 29.05 146.184 30.2772 142.502 30.636V33.9763C147.77 33.5377 151.974 31.553 154.162 28.4963C156.351 31.553 160.555 33.5377 165.822 33.9763V30.636C162.141 30.2772 159.137 29.05 157.419 27.2249H165.822V24.744H155.934V23.2023H152.39V24.744H142.502V27.2249H150.906ZM160.214 13.3808L159.434 16.2958H157.02L157.8 13.3808H160.214ZM139.805 16.9603H136.136L137.643 22.5777H141.311L139.805 16.9603ZM161.127 23.4859V12.291H147.198V23.4859H143.654V9.81019H152.39V8.27295H155.934V9.81019H164.671V23.4859H161.127ZM139.805 8.94189H136.136L137.709 14.8029H141.377L139.809 8.94189H139.805ZM150.61 13.3808L151.389 16.2958H148.975L148.195 13.3808H150.61ZM151.465 19.7336L150.685 22.6486H148.27L149.05 19.7336H151.465ZM141.111 24.744H137.443L135.078 33.582H138.746L141.111 24.744ZM159.514 19.7336L160.294 22.6486H157.879L157.1 19.7336H159.514Z" fill="#3C3C3C"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 33.582L18.2342 2.00439H38.6038V33.582H29.4379V20.2652C28.9728 20.2652 28.543 20.5133 28.3127 20.9164L24.8882 26.8483H14.4687L10.5835 33.582H0ZM34.9977 10.2532H24.0509L18.6994 19.5209H29.4335V12.0961L35.0375 10.5943C35.2325 10.5412 35.197 10.2532 34.9932 10.2532H34.9977Z" fill="#1E3296"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M121.805 33.5818H112.639V16.5216H96.6998V33.5818H87.5339V0.0239258H96.6998V15.7729C97.1649 15.7729 97.5947 15.5248 97.825 15.1217L101.781 8.27274H117.224C119.754 8.27274 121.805 10.3239 121.805 12.8535V33.5818Z" fill="#FF6400"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M45.9355 29.0013V8.27295H75.6215C78.1511 8.27295 80.2022 10.3241 80.2022 12.8537V33.582H50.5163C47.9867 33.582 45.9355 31.5309 45.9355 29.0013ZM55.1014 25.3332H71.0408V16.5218H55.1014V25.3332Z" fill="#1E3296"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_2107_42513">
                                <rect width="266" height="33.9522" fill="white" transform="translate(0 0.0239258)"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <div class="l"></div>
                    <div class="stock-code">
                        <div class="code">605058</div>
                        <div class="label">{{ locale === 'en' ? 'Stock Code' : '股票代码' }}</div>
                    </div>
                </NuxtLink>
                <div class="top-menu">
                    <NuxtLink
                        :to="localePath('/')"
                        class="item home"
                    >
                        <span class="cn">{{ $t('nav.home') }}</span>
                    </NuxtLink>
                    <NuxtLink
                        :class="['item', { 'active': index === indexNav }]"
                        v-for="(item, index) in menuDisplay"
                        :key="`top-fi-${index}`"
                        :to="localePath(item.link)"
                        @mouseenter="activeNav(index)" @mouseleave="closeSubNav()"
                    >
                        <span class="cn" :data-text="locale === 'en' ? item.en : item.cn">{{ locale === 'en' ? item.en : item.cn }}</span>
                        <i class="icon ri-arrow-down-s-line"></i>
                    </NuxtLink>
                    <NuxtLink
                        :to="localePath('/contact')"
                        class="item contact"
                    >
                        <span class="cn">{{ $t('nav.contact') }}</span>
                        <i class="icon ri-arrow-right-line"></i>
                    </NuxtLink>
                </div>
                <div class="tools">
                    <div class="btn lang">
                        <i class="icon ri-global-line"></i>
                        <span>{{ locale === 'zh' ? '中文' : 'EN' }}</span>
                        <div class="subc">
                            <div class="sub">
                                <NuxtLink class="item" :class="{ active: locale === 'zh' }" :to="switchLocalePath('zh')">中文</NuxtLink>
                                <NuxtLink class="item" :class="{ active: locale === 'en' }" :to="switchLocalePath('en')">EN</NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="btn search">
                        <i class="icon ri-search-2-line"></i>
                    </div>
                </div>
            </div>
            <div class="mask"></div>
            <div :class="['sub-container', { 'active': statusSubNav }]" @mouseenter="openSubNav()"
                 @mouseleave="closeSubNav()">
                <div :class="['list', { 'active': indexNav === index, 'leave': indexNavPrev === index }]"
                     v-for="(item, index) in menuDisplay" :key="`sub-${index}`">
                    <div class="left">
                        <div class="cn">{{ locale === 'en' ? item.en : item.cn }}</div>
                        <div class="en" v-if="locale !== 'en'">{{item.en}}</div>
                    </div>
                    <div class="mid">
                        <NuxtLink class="item" v-for="(subItem, subIndex) in item.children" :key="`subItem-${subIndex}`"
                                  :to="localePath(subItem.link)" :target="subItem.target ? subItem.target : '_self'"
                                  @click="closeSubNav()">
                            <i class="icon ri-arrow-right-long-line"></i>
                            <span>{{ locale === 'en' ? (subItem.en || subItem.cn) : subItem.cn }}</span>
                            <div class="dot"></div>
                        </NuxtLink>
                    </div>
                    <div class="right">
                        <img v-if="item.cover" :src="item.cover[0]" alt="" class="cover">
                    </div>

                </div>
            </div>
        </nav>
        <nav :class="['mobi', { transparent: transparentStatus && !keepSolid }]">
            <div class="menu-container">
                <div class="wrap">
                    <NuxtLink class="logo" :to="`/`">
                        <svg style="width: 140px;" width="266" height="34" viewBox="0 0 266 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2107_42513)">
                                <path d="M219.843 30.4943C219.608 30.4943 219.418 30.3436 219.418 30.1531V27.247H231.317V10.9487H219.418V8.27295H215.528V10.9487H203.633V27.2514H215.528V31.2208C215.528 32.5277 216.844 33.5865 218.47 33.5865H233.306V30.4987H219.839L219.843 30.4943ZM219.422 13.4251H227.432V17.6957H219.422V13.4251ZM219.422 20.1766H227.432V24.7662H219.422V20.1766ZM215.533 24.7706H207.523V20.181H215.533V24.7706ZM215.533 17.7002H207.523V13.4296H215.533V17.7002Z" fill="#3C3C3C"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M181.926 33.582H199.637V30.8176L195.881 19.2507H192.155L195.912 30.8176H185.651L192.979 8.27295H189.253L181.926 30.8176V33.582ZM169.366 11.4227H177.19V15.7687H169.366V24.5092H177.19V28.8241C177.19 30.4056 173.154 30.4367 172.118 30.4367V33.9807C175.555 33.9807 180.734 33.3162 180.734 28.8285V22.0328H172.911V18.2495H180.734V8.94632H169.366V11.4272V11.4227Z" fill="#3C3C3C"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M235.729 22.2276H248.922V28.6513C248.922 30.0822 244.864 30.091 244.022 30.091V33.9807C247.571 33.9807 252.812 33.2674 252.812 28.6557V22.2321H266V19.4677H252.812V18.8298L263.617 12.5922V8.95068H237.989V11.7151H257.361L248.922 16.5881V19.4721H235.729V22.2365V22.2276Z" fill="#3C3C3C"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M152.395 22.6486H155.939V19.0779H160.48V16.9515H155.939V13.3808H152.395V16.9515H147.854V19.0779H152.395V22.6486ZM150.906 27.2249C149.187 29.05 146.184 30.2772 142.502 30.636V33.9763C147.77 33.5377 151.974 31.553 154.162 28.4963C156.351 31.553 160.555 33.5377 165.822 33.9763V30.636C162.141 30.2772 159.137 29.05 157.419 27.2249H165.822V24.744H155.934V23.2023H152.39V24.744H142.502V27.2249H150.906ZM160.214 13.3808L159.434 16.2958H157.02L157.8 13.3808H160.214ZM139.805 16.9603H136.136L137.643 22.5777H141.311L139.805 16.9603ZM161.127 23.4859V12.291H147.198V23.4859H143.654V9.81019H152.39V8.27295H155.934V9.81019H164.671V23.4859H161.127ZM139.805 8.94189H136.136L137.709 14.8029H141.377L139.809 8.94189H139.805ZM150.61 13.3808L151.389 16.2958H148.975L148.195 13.3808H150.61ZM151.465 19.7336L150.685 22.6486H148.27L149.05 19.7336H151.465ZM141.111 24.744H137.443L135.078 33.582H138.746L141.111 24.744ZM159.514 19.7336L160.294 22.6486H157.879L157.1 19.7336H159.514Z" fill="#3C3C3C"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 33.582L18.2342 2.00439H38.6038V33.582H29.4379V20.2652C28.9728 20.2652 28.543 20.5133 28.3127 20.9164L24.8882 26.8483H14.4687L10.5835 33.582H0ZM34.9977 10.2532H24.0509L18.6994 19.5209H29.4335V12.0961L35.0375 10.5943C35.2325 10.5412 35.197 10.2532 34.9932 10.2532H34.9977Z" fill="#1E3296"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M121.805 33.5818H112.639V16.5216H96.6998V33.5818H87.5339V0.0239258H96.6998V15.7729C97.1649 15.7729 97.5947 15.5248 97.825 15.1217L101.781 8.27274H117.224C119.754 8.27274 121.805 10.3239 121.805 12.8535V33.5818Z" fill="#FF6400"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M45.9355 29.0013V8.27295H75.6215C78.1511 8.27295 80.2022 10.3241 80.2022 12.8537V33.582H50.5163C47.9867 33.582 45.9355 31.5309 45.9355 29.0013ZM55.1014 25.3332H71.0408V16.5218H55.1014V25.3332Z" fill="#1E3296"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_2107_42513">
                                    <rect width="266" height="33.9522" fill="white" transform="translate(0 0.0239258)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div class="m-divider"></div>
                        <div class="m-stock-code">
                            <div class="code">605058</div>
                            <div class="label">{{ locale === 'en' ? 'Stock Code' : '股票代码' }}</div>
                        </div>
                    </NuxtLink>
                    <div class="tools">
                        <div class="btn search">
                            <i class="icon ri-search-2-line"></i>
                        </div>
                        <div class="btn" @click="toggleSubMenu()">
                            <i :class="['icon', statusSubMenu ? 'ri-close-line' : 'ri-menu-fill']"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mask" :class="{ 'active': statusSubMenu }" @click="closeSubMenu()"></div>
            <div class="sub-menu-container" :class="{ 'active': statusSubMenu }">
                <div class="wrap">
                    <div class="sub-menu" :class="{ 'active': indexMenu === index }" :key="`sub-menu-${index}`"
                         v-for="(item, index) in menu">
                        <NuxtLink class="name" @click="toggleSubMenuItem(index)" :to="item.children.length === 0 ? localePath('/contact') : 'javascript:;'"><span>{{ locale === 'en' ? item.en : item.cn }}</span> <i
                            class="icon ri-arrow-down-s-line"></i></NuxtLink>
                        <div class="list" v-if="item.children.length > 0">
                            <NuxtLink class="item" v-for="(subItem, subIndex) in item.children"
                                      :key="`sub-menu-item-${subIndex}`"
                                      :to="localePath(subItem.link)"
                                      @click="closeSubMenu()">{{ locale === 'en' ? (subItem.en || subItem.cn) : subItem.cn }}</NuxtLink>
                        </div>
                    </div>
                    <div class="lang">
                        <i class="icon ri-global-line"></i>
                        <div class="switcher">
                            <NuxtLink class="link" :class="{ active: locale === 'zh' }" :to="switchLocalePath('zh')" @click="closeSubMenu()">中文</NuxtLink>
                            &nbsp;&nbsp;/&nbsp;&nbsp;
                            <NuxtLink class="link" :class="{ active: locale === 'en' }" :to="switchLocalePath('en')" @click="closeSubMenu()">English</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import useEventStore from "@/stores/event";
import useLayoutStore from "@/stores/layout";
const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()
const layoutStore = useLayoutStore()
const eventStore = useEventStore()
const {throttle} = useCommon()

const { keepSolid } = defineProps({
    keepSolid: {
        type: Boolean,
        default: false
    }
})

const menu = computed(() => layoutStore.nav)

/**
 * nav透明度处理
 **/
const docScrollTop = computed(() => eventStore.docScrollTop)
const windowHeight = computed(() => eventStore.windowHeight)
/**
 *监听scrollTop变化并进行处理
 */
const transparentStatus = ref(!keepSolid)
const isNavHovered = ref(false)

const scrollTopHandler = throttle((scrollTop) => {
    // 保持不透明
    if (keepSolid) {
        transparentStatus.value = false
        return
    }
    // 鼠标悬停在导航上时不干预，避免覆盖 hover 状态
    if (isNavHovered.value) return
    // 抽屉打开时保持不透明
    if (statusSubMenu.value) return
    // 滚动距离超过页面高度则取消透明
    transparentStatus.value = !(scrollTop > 0)
}, 200)
watch(docScrollTop, (newScrollTop) => {
    scrollTopHandler(newScrollTop)
})
function navEnter() {
    isNavHovered.value = true
    transparentStatus.value = false
}
function navLeave() {
    isNavHovered.value = false
    // 保持不透明
    if (keepSolid) {
        transparentStatus.value = false
        return
    }
    if (docScrollTop.value <= 0) {
        transparentStatus.value = true
    }
}

/**
 * 对contact进行特殊处理
 **/

const menuDisplay = computed(() => {
    // return menu.value
    return menu.value.filter((item) => {
        return item.link !== '/contact'
    })
})

/***PC部分开始***/
const statusSubNav = ref(false)
let timerCloseSubNav = null
function openSubNav() {
    clearTimeout(timerCloseSubNav)
    statusSubNav.value = true
}
function closeSubNav() {
    timerCloseSubNav = setTimeout(() => {
        statusSubNav.value = false
        indexNav.value = -1
    }, 200)
}

let timerRemoveLeave = null
const indexNav = ref(-1)
const indexNavPrev = ref(-1)
function activeNav(index) {
    if (menu.value[index]?.children.length === 0) {
        return
    }
    // 如果仍是当前目录则不错处理
    if (indexNav.value === index) return;
    indexNavPrev.value = indexNav.value
    timerRemoveLeave = setTimeout(() => {
        indexNavPrev.value = -1
    }, 300)
    indexNav.value = index
    openSubNav()
}
/***PC部分结束***/

/***mobile部分开始***/
const indexMenu = ref(-1)
const statusSubMenu = ref(false)
function closeSubMenu() {
    statusSubMenu.value = false
    if (process.client) {
        document.body.style.overflow = ''
        // 恢复透明状态（如果页面在顶部）
        if (window.scrollY <= 0 && !keepSolid) {
            transparentStatus.value = true
        }
    }
}
function toggleSubMenu() {
    statusSubMenu.value = !statusSubMenu.value
    if (process.client) {
        document.body.style.overflow = statusSubMenu.value ? 'hidden' : ''
        if (statusSubMenu.value) {
            // 打开抽屉：强制白底
            transparentStatus.value = false
        } else {
            // 关闭抽屉：根据滚动位置恢复
            if (window.scrollY <= 0 && !keepSolid) {
                transparentStatus.value = true
            }
        }
    }
}
function toggleSubMenuItem(index) {
    indexMenu.value = indexMenu.value === index ? -1 : index
}
/***mobile部分结束***/

onMounted(() => {})
onUnmounted(() => {
    clearTimeout(timerRemoveLeave)
    clearTimeout(timerCloseSubNav)
})
</script>

<style scoped lang="scss">
nav.norm {
    position: fixed;
    top: 0;
    z-index: 999;
    background-color: white;
    height: var(--HEADER_HEIGHT);
    width: 100%;
    box-sizing: border-box;
    @include flex-c(nowrap);
    justify-content: center;
    transition: all .3s;
    // 1280px 以下切换到移动导航（1024-1280px 区间桌面导航内容溢出）
    @media screen and (max-width: 1280px) {
        top: -100px;
    }

    > .header-wrap {
        @include flex-r(nowrap);
        justify-content: space-between;
        align-items: center;
        height: 100%;
        position: relative;
        z-index: 3;
    }

    .logo {
        height: 100%;
        @include flex-r(nowrap);
        align-items: center;
        gap: 12px;
        svg {
            width: 200px;
            height: auto;
            path {
                transition: all .3s;
            }
        }
        .l {
            height: 28px;
            width: 0.5px;
            background-color: var(--main-dark-gray);
            transition: all .3s;
        }
        .stock-code {
            display: flex;
            flex-flow: column nowrap;
            align-items: stretch;
            color: var(--main-black, #000);
            transition: all .3s;
        }
        .code {
            font-size: 14px;
            leading-trim: both;
            text-edge: cap;
            font-style: normal;
            font-weight: 700;
            line-height: 130%;
            text-align: justify;
        }
        .label {
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 130%;
            text-align: justify;
        }
    }

    .top-menu {
        @include flex-r(nowrap);
        align-items: center;
        gap: fluid(12px, 4px);
        height: 100%;
        .item {
            height: 100%;
            padding: 0 8px;
            @include lap {
                font-size: 15px;
            }
            @include flex-r(nowrap);
            align-items: center;
            color: #000;
            font-feature-settings: 'liga' off, 'clig' off;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            position: relative;
            transition: all .3s;
            .cn {
                transition: color .3s;
                white-space: nowrap;
                position: relative;
                // 预留粗体宽度，防止 font-weight 切换时引起布局移位
                &::after {
                    content: attr(data-text);
                    font-weight: 700;
                    height: 0;
                    overflow: hidden;
                    visibility: hidden;
                    display: block;
                    pointer-events: none;
                }
            }

            //.line {
            //    margin: 0 .5em;
            //}
            .icon {
                font-size: fluid(24px);
                color: var(--BC);
                line-height: 24px;
                margin-left: 6px;
                transition: all .3s;
            }

            &.active {
                .cn {
                    color: var(--main-blue, #196BB6);
                    font-feature-settings: 'liga' off, 'clig' off;
                    font-size: 16px;
                    font-weight: 700;
                }

                .icon {
                    transform: rotate(180deg);
                    color: var(--main-orange);
                }
            }

            &.contact {
                box-sizing: border-box;
                height: 34px;
                border-radius: 6px;
                background: var(--main-orange, #FF6400);
                padding: 9px 8px 9px 16px;
                color: white;
                font-size: 14px;
                .icon {
                    color: white;
                    transition: transform .3s;
                    font-size: 18px;
                }
                &:hover {
                    .icon {
                        transform: translateX(5px);
                    }
                }
            }
        }
    }

    .tools {
        @include flex-r(nowrap);
        justify-content: flex-end;
        text-transform: uppercase;
        gap: 2px;
        .btn {
            @include flex-r(nowrap);
            align-items: center;
            justify-content: center;
            border-radius: 30px;
            height: 40px;
            min-width: 40px;
            padding: 5px;
            color: #000;
            cursor: pointer;
            transition: all .3s;
            .icon {
                font-size: fluid(24px);
                transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
            }

            &:hover {
                background-color: var(--BC);
                color: white;
            }

        }

        .lang {
            width: 75px;
            &:hover {
                .subc {
                    visibility: visible;
                    opacity: 1;
                    transform: translateY(0);
                }
                .icon {
                    transform: rotate(360deg);
                }
            }
            > span {
                font-size: 16px;
                margin-left: 4px;
                font-weight: 400;

            }
            .subc {
                position: absolute;
                padding-top: 10px;
                top: 38px;
                left: 50%;
                margin-left: -50px;
                transform: translateY(10px);
                opacity: 0;
                visibility: hidden;
                transition: opacity .3s, transform .3s;
            }
            .sub {
                width: 100px;
                background-color: white;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                border-radius: 4px;
                padding: 16px 0;
                .item {
                    width: 100%;
                    height: 40px;
                    display: flex;
                    flex-flow: column;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    color: black;
                    transition: all .3s;
                    &:hover {
                        color: var(--main-blue);
                        background-color: rgba(0, 0, 0, 0.05);
                    }
                }
            }
        }

        .search {
            &:hover {
                .icon {
                    transform: rotate(90deg);
                }
            }
        }
    }

    .mask {
        background-color: white;
        position: absolute;
        border-bottom: 0.5px solid var(--main-light-gray, #DCDCDC);
        inset: 0;
        z-index: 2;
        // 必须单独列出 border-bottom-color，shorthand 在部分浏览器不触发 color 过渡
        transition: background-color .3s, border-bottom-color .3s;
    }

    &.transparent {
        background-color: transparent;
        transition: background-color .3s .1s ease-in-out;
        .logo {
            svg {
                path {
                    fill: #FFFFFF;
                }
            }
            .l {
                background-color: white;
            }
            .stock-code {
                color: white;
            }
        }
        .top-menu {
            .item {
                color: white;
                .icon {
                    color: white;
                }
            }
        }
        .tools {
            .btn {
                color: white;
            }
        }
        .mask {
            background-color: transparent;
            border-bottom-color: transparent;
        }
    }

    .sub-container {
        z-index: 0;
        position: absolute;
        top: var(--HEADER_HEIGHT);
        transform: translateY(-50px);
        visibility: hidden;
        opacity: 0;
        width: 100%;
        height: 360px;
        background: #FAFAFA;
        border-top: 1px solid #F4F4F4;
        overflow: hidden;
        transition: opacity .3s, transform .3s ease-in-out;
        .list {
            margin: 0 160px;
            padding: 40px 0 80px;
            position: absolute;
            inset: 0;
            transform: translateY(-100%);
            transition: none;
            opacity: 0.5;
            @include flex-r();
            justify-content: space-between;
            align-items: flex-start;

            // ≤1439px：收窄子菜单面板边距
            @include lap {
                margin: 0 fluid(120px, 60px);
                .mid {
                    width: 400px;
                    .item { width: 185px; }
                }
                .right img {
                    width: 260px;
                }
            }

            .left {
                width: 170px;
                padding-top: 16px;
                .cn {
                    color: var(--main-blue, #1E3296);
                    font-size: fluid(24px);
                    font-style: normal;
                    font-weight: 400;
                    line-height: 27px; /* 112.5% */
                }
                .en {
                    margin-top: 12px;
                    color: var(--main-light-gray, #DCDCDC);
                    leading-trim: both;
                    text-edge: cap;
                    font-family: "TT Fors";
                    font-size: 20px; // 控制在 170px 容器内，不溢出到相邻列
                    font-style: normal;
                    font-weight: 100;
                    line-height: 1.2;
                    text-transform: capitalize;
                }
            }
            .mid {
                width: 530px;
                height: 200px;
                display: flex;
                flex-flow: column wrap;
                justify-content: flex-start;
                align-content: space-between;
                .item {
                    width: 248px;
                    height: 48px;
                    border-bottom: 0.5px solid var(--main-light-gray, #DCDCDC);
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: flex-start;
                    align-items: center;
                    position: relative;
                    .icon {
                        font-size: fluid(20px);
                        color: var(--main-blue);
                        transform: scale(0) translateX(-50px);
                        transition: transform .3s;
                    }
                    span {
                        transform: translateX(-20px);
                        transition: transform .3s;
                    }
                    .dot {
                        width: 6px;
                        height: 6px;
                        border-radius: 50%;
                        background-color: var(--main-blue);
                        position: absolute;
                        right: 0;
                        top: 50%;
                        margin-top: -3px;
                        transition: transform .3s;
                    }
                    &:hover {
                        .icon {
                            transform: scale(1) translateX(0px);
                        }
                        span {
                            transform: translateX(14px);
                        }
                        .dot {
                            transform: scale(0);
                        }
                    }
                }

            }
            .right {
                img {
                    width: 400px;
                    height: auto;
                    border-radius: 10px;
                }
            }

            .left, .mid, .right {
                transform: translateY(50px);
                opacity: 0;
                transition: all .5s;
            }
            &.active {
                transform: translateY(0);
                opacity: 1;
                transition: all .3s;
                .left, .mid, .right {
                    transform: translateY(0px);
                    opacity: 1;
                }
            }

            &.leave {
                transform: translateY(100%);
                //opacity: 0;
                transition: all .3s;
            }
        }

        &.active {
            visibility: visible;
            opacity: 1;
            transform: translateY(0px);
        }
    }

}

nav.mobi {
    width: 100%;
    height: var(--HEADER_HEIGHT_MOB);
    z-index: 999;
    background-color: white;
    position: fixed;
    top: -100px;
    transition: background-color .3s, top .3s;

    // 1280px 以下显示移动导航
    @media screen and (max-width: 1280px) {
        top: 0;
    }

    // 透明态（首页顶部）— 所有子选择器嵌套在 .menu-container 内，确保特异性高于默认规则
    &.transparent {
        background-color: transparent;
        .menu-container {
            background-color: transparent;
            border-bottom-color: transparent;
            .m-divider {
                background-color: rgba(255, 255, 255, 0.4);
            }
            .m-stock-code {
                color: rgba(255, 255, 255, 0.9);
            }
            .logo svg path {
                fill: white;
            }
            .tools .btn .icon {
                color: white;
            }
        }
    }

    .menu-container {
        position: relative;
        z-index: 999;
        height: inherit;
        background-color: white;
        border-bottom: 0.5px solid var(--main-light-gray, #DCDCDC);
        transition: background-color .3s, border-bottom-color .3s;

        >.wrap {
            height: inherit;
            @include flex-r();
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            gap: 10px;
        }

        .m-divider {
            width: 1px;
            height: 20px;
            background-color: var(--main-light-gray, #DCDCDC);
            transition: background-color .3s;
        }

        .m-stock-code {
            display: flex;
            flex-flow: column nowrap;
            color: var(--main-black, #000);
            transition: color .3s;
            .code {
                font-size: 12px;
                font-weight: 700;
                line-height: 130%;
            }
            .label {
                font-size: 10px;
                font-weight: 400;
                line-height: 130%;
            }
        }

        .tools {
            @include flex-r();
            justify-content: space-between;
            align-items: center;
            gap: 8px;

            // 补偿 .btn 内部 padding，使汉堡包 icon 与 logo 左侧对齐
            @media screen and (max-width: 1280px) {
                margin-right: -6px;
            }

            .btn {
                width: 36px;
                height: 36px;
                @include flex-c();
                justify-content: center;
                align-items: center;
                cursor: pointer;
                .icon {
                    font-size: 24px;
                    line-height: 1;
                    transition: color .3s;
                }
            }
        }
    }

    .mask {
        position: fixed;
        inset: 0;
        opacity: 0;
        background-color: rgba(0, 0, 0, .5);
        backdrop-filter: blur(1px);
        z-index: -1;
        transition: opacity .3s;
        transform: scale(0);
        &.active {
            z-index: 19;
            opacity: 1;
            transform: scale(1);
        }
    }

    .sub-menu-container {
        position: fixed;
        right: -100%;
        top: 0;
        width: 85%;
        max-width: 380px;
        z-index: 199;
        background-color: #fff;
        height: 100vh;
        height: 100dvh;
        opacity: 0;
        overflow-y: auto;
        overflow-x: hidden;
        transition: right .35s cubic-bezier(.4, 0, .2, 1), opacity .3s;
        padding: calc(var(--HEADER_HEIGHT_MOB) + 32px) 32px 40px;
        box-sizing: border-box;
        box-shadow: -8px 0 32px rgba(0, 0, 0, .08);

        // 手机端侧边栏全宽
        @include mo {
            width: 100%;
            max-width: none;
            border-radius: 0;
        }

        &.active {
            opacity: 1;
            right: 0;
        }

        .sub-menu {
            height: auto;
            margin-bottom: 0;
            border-bottom: 0.5px solid #E8E8E8;

            .name {
                width: 100%;
                height: 52px;
                position: relative;
                font-size: 16px;
                font-weight: 500;
                letter-spacing: 0.02em;
                padding: 0;
                @include flex-r();
                align-items: center;
                justify-content: space-between;
                color: #1a1a1a;
                transition: color .3s;

                .icon {
                    font-size: 18px;
                    color: #999;
                    transition: all .3s;
                }
            }

            .list {
                margin-top: 0;
                padding-bottom: 0;
                transition: padding .3s;

                .item {
                    display: block;
                    height: 0;
                    width: 100%;
                    padding: 0 0 0 12px;
                    font-size: 14px;
                    color: #666;
                    transition: height .3s, padding .25s, color .3s;
                    overflow: hidden;
                    box-sizing: border-box;

                    &:hover, &:active {
                        color: var(--main-blue);
                    }
                }
            }

            &.active {
                .name {
                    color: var(--main-blue);
                    font-weight: 600;

                    .icon {
                        color: var(--main-blue);
                        transform: rotate(180deg);
                    }
                }

                .list {
                    padding-bottom: 12px;

                    .item {
                        height: 36px;
                        line-height: 36px;
                        padding-top: 0;
                        padding-bottom: 0;
                    }
                }
            }
        }

        .lang {
            margin-top: 32px;
            padding-top: 24px;
            @include flex-r();
            justify-content: space-between;
            align-items: center;

            .icon {
                font-size: 22px;
                color: #666;
            }

            .switcher {
                display: flex;
                gap: 16px;
                .link {
                    font-size: 15px;
                    color: #999;
                    letter-spacing: 0.02em;
                    transition: color .3s;

                    &.active {
                        color: var(--main-blue);
                        font-weight: 600;
                    }
                }
            }
        }
    }
}

._nav_blank {
    height: var(--HEADER_HEIGHT);
    transition: height .3s;

    @media screen and (max-width: 1280px) {
        height: var(--HEADER_HEIGHT_MOB);
    }
}
</style>
