import { defineNuxtPlugin } from '#app'
// @ts-ignore
import {useStatusStore} from "~/stores/status.mjs";

export default defineNuxtPlugin({
    name: 'loading',
    enforce: 'pre', // or 'post'
    async setup (nuxtApp) {
        // this is the equivalent of a normal functional plugin
    },
    hooks: {
        // You can directly register Nuxt app hooks here
        'app:created'() {
            const nuxtApp = useNuxtApp()

            nuxtApp.provide('injected', () => {
                const statusStore = useStatusStore()
                console.log(statusStore.loadingStatus)
                // 如果不存在document对象，则不显示加载页
                if (typeof window === 'undefined') {
                    statusStore.loadingStatus = 'loaded'
                    return
                }

                let watchDog = 30
                const timerLoadingCheck = setInterval(() => {
                    watchDog -= 1
                    if (typeof window === 'undefined') {
                        clearInterval(timerLoadingCheck)
                        statusStore.loadingStatus = 'loaded'
                        return
                    }
                    if (document.readyState === 'complete' || watchDog < 0) {
                        removeLoading()
                    }
                }, 500)
                function removeLoading() {
                    statusStore.loadingStatus = 'closing'
                    clearInterval(timerLoadingCheck)
                    setTimeout(() => {
                        statusStore.loadingStatus = 'loaded'
                    }, 1000)
                }
            })
        }
    }
})
