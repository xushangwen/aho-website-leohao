import type { RouterConfig } from '@nuxt/schema'

// 全站路由滚动行为
// 问题：scrollBehavior 同步执行时，跨页面导航的 DOM 尚未渲染，
//       el: to.hash 找不到元素会直接回退到瞬移。
// 方案：返回 Promise，用 requestAnimationFrame 轮询等目标元素出现后再平滑滚动，
//       1s 超时保护避免死循环。
export default <RouterConfig>{
    scrollBehavior(to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }

        if (to.hash) {
            return new Promise((resolve) => {
                // scrollBehavior 仅在客户端执行，但做一下保护
                if (!import.meta.client) {
                    resolve({ top: 0 })
                    return
                }

                const deadline = Date.now() + 1000 // 1s 超时保护

                const poll = () => {
                    const el = document.querySelector(to.hash)
                    if (el) {
                        // 元素就绪，执行丝滑滚动
                        // scroll-margin-top 由各页面 CSS 负责，无需在此补偏移
                        resolve({ el: to.hash, behavior: 'smooth' })
                    } else if (Date.now() < deadline) {
                        requestAnimationFrame(poll)
                    } else {
                        // 超时兜底：回到顶部
                        resolve({ top: 0 })
                    }
                }

                requestAnimationFrame(poll)
            })
        }

        return { top: 0 }
    },
}
