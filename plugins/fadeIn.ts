import type { Directive, DirectiveBinding } from 'vue'


// 指令配置类型
interface FadeInConfig {
    mode?: 'delay' | 'delay-fast' | null
}

// 全局共享的 IntersectionObserver 实例
let globalObserver: IntersectionObserver | null = null

function isElementInViewport(el: HTMLElement, threshold: number) {
    const { top, bottom, height} = el.getBoundingClientRect()
    const windowHeight = window.innerHeight || document.documentElement.clientHeight
    if (top < 0 && bottom < 0 || top > windowHeight && bottom > windowHeight) {
        return false
    }
    // 计算可视高度
    const deltaHeight = Math.min(bottom, windowHeight) - Math.max(0, top)
    // 可视高度大于等于阈值高度，认为是可见的
    return deltaHeight >= threshold * height
}

// 定义 Vue 指令类型
const fadeInDirective: Directive<HTMLElement, FadeInConfig | undefined> = {
    mounted(el, binding) {
        // 获取配置，支持 v-fade-in="{ mode: 'delay' }"
        const { mode = null } = binding.value || {}
        const config: FadeInConfig = {
            mode: null,
            ...(binding.value || {}),
        }

        // 存储配置到元素上，供回调使用
        // el._fade_in_config = config

        // 如果全局 Observer 还未创建，则创建它
        if (!globalObserver) {
            globalObserver = new IntersectionObserver(
                (entries) => {
                    let delayNum = 0
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const el = entry.target as HTMLElement
                            // 从元素自身读取 mode，避免 closure 捕获问题
                            const elementMode = el.dataset.fadeInMode || ''
                            if (elementMode === 'delay') {
                                setTimeout(() => {
                                    el.classList.add('show')
                                }, 200 * delayNum)
                                delayNum += 1
                            } else if (elementMode === 'delay-fast') {
                                setTimeout(() => {
                                    el.classList.add('show')
                                }, 50 * delayNum)
                                delayNum += 1
                            } else {
                                el.classList.add('show')
                            }
                            // 动画只触发一次，之后取消观察该元素
                            globalObserver?.unobserve(el)
                        }
                    })
                },
                {
                    // 注意：threshold 是 Observer 级别的，无法为每个元素单独设置
                    // 默认 0.1，如需支持不同 threshold，需要多个 Observer 或其它方案
                    threshold: .7,
                }
            )

            // 保存到全局（或挂载到 app 上更规范，这里简单挂 window）
            // 如果你想更规范，可以挂载到 Nuxt app context，但需要 provide/inject
            globalThis.__global_fade_in_observer__ = globalObserver
        }

        // 将 mode 存储到元素上，供 Observer 回调读取
        el.dataset.fadeInMode = mode || ''
        // 开始观察当前元素
        globalObserver?.observe(el)

        // 手动检查并播放初始化结束已经在视口中的元素
        setTimeout(() => {
            const els:NodeListOf<HTMLElement> = document.querySelectorAll('.animate-show, .animate-show-delay, .animate-show-delay-fast')
            els.forEach((elItem:HTMLElement ) => {
                if (isElementInViewport(elItem, 0.7)) {
                    elItem.classList.add('show')
                }
            })
        }, 300)
    },
    unmounted(el) {
        // 元素销毁时取消观察，防止无效监听
        globalObserver?.unobserve(el)
    }
}

// 导出指令定义
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('fade-in', fadeInDirective)
})
