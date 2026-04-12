import type { RouterConfig } from '@nuxt/schema'

// scrollBehavior 只负责"非 hash 导航时重置到顶部"
// hash 锚点的平滑滚动由 plugins/smooth-scroll.client.ts 处理：
//   scrollBehavior 是同步的，跨页时 DOM 尚未渲染，在此处理 hash 不可靠；
//   router.afterEach + rAF 轮询才是正确时机。
export default <RouterConfig>{
    scrollBehavior(to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        // hash 导航：先瞬间归顶，再由插件平滑滚动到目标元素
        // 普通导航：同样归顶
        return { top: 0 }
    },
}
