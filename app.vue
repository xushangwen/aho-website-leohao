<template>
    <div
        v-doc-scroll-listener
        v-window-size-listener
    >
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
        <!-- Hello -->
    </div>
</template>

<script setup>
import useLayoutStore from "@/stores/layout";
import useAppStore from "@/stores/app";

const appConfig = useAppConfig()
const layoutStore = useLayoutStore()
const appStore = useAppStore()
/**
 * 获取全局数据
 */
// 企业信息
const { data: enterpriseInfo } = useFetch(appConfig.api('/layout/enterprise-info'), {server: true, immediate: true})
layoutStore.setOrgInfo(enterpriseInfo.value || {})
// 监听企业信息变化
// watch(enterpriseInfo, (newInfo) => {
//     console.log('newInfo', newInfo)
//     layoutStore.setOrgInfo(newInfo || {})
// }, { immediate: true })
// 导航
// const menu = []
const originNav = appConfig.clientConfig.nav
layoutStore.setNav(originNav)

const { data: navData } = useFetch(appConfig.api('/layout/nav'), {server: true, immediate: true})
watch(navData, (newNav) => {
    // console.log('newNav', newNav)
    const { prod, post } = newNav || {}
    console.log('prod', prod)
    console.log('post', post)
    appStore.setProdCate(prod)
    appStore.setPostCate(post)
}, { immediate: true })

// const processedNav = computed(() => {
//     return navData.value || {}
// })
// watch(processedNav, (newVal) => {
//     const { prod, post } = newVal || {}
//     appStore.setProdCate(prod || [])
//     appStore.setPostCate(post || [])
// }, { immediate: true })
// const { prod, post } = navData.value || {}
// appStore.setProdCate(prod)
// appStore.setPostCate(post)
// const replaceMap = {
//     '/products': prod,
//     '/news': post,
// }
// appConfig.clientConfig.nav.forEach(item => {
//     const { link } = item
//     if (replaceMap[link]) {
//         item.children = replaceMap[link]
//     }
//     menu.push(item)
// })
// console.log('menu', menu)
// layoutStore.setNav(menu)

    useHead({
        script: [
            // {
            //     type: 'text/javascript',
            //     src: '/js/loading.js',
            //     // body: true
            // },
            // {
            //     type: 'text/javascript',
            //     src: 'https://www.google.com/recaptcha/enterprise.js',
            //     // body: true
            // }
        ]
    })


    // const { $injected } = useNuxtApp()
    // $injected()
</script>

<style lang="scss">
    /*@import '/public/fonts/remixicon/remixicon.css';*/
    /*@import '/public/fonts/HarmonyOS_Sans/HarmonyOS_Sans.css';*/
    /*@import 'normalize.css';*/
    /*@import 'bootstrap/dist/css/bootstrap-grid.css';*/
    /*@import '@/assets/style/_variables.css';*/
    /*@import '@/assets/style/_mixin.scss';*/
    /*@import '@/assets/style/_animate.scss';*/
    /*@import '@/assets/style/_conf.scss';*/
    /*@import '@/assets/style/_construct.scss';*/
    body::-webkit-scrollbar {
        width: 6px;
        background-color: rgba(30, 50, 150, 0.5);
    }
    body::-webkit-scrollbar-thumb {
        //background-color: rgba(167, 30, 63, 0.8);
        background-color: rgba(30, 50, 150, 0.8);
        border-radius: 2px;
    }
    body::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(217, 217, 217, 0.1);
        background-color: #f1f1f1;
    }

</style>

