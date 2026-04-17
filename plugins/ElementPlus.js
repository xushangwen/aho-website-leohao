import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(async nuxtApp => {
    if (import.meta.server) return

    const { default: ElementPlus } = await import('element-plus')
    nuxtApp.vueApp.use(ElementPlus)
})
