import type { RouterConfig } from '@nuxt/schema'

// 全站路由滚动行为配置
// - hash 路由（锚点跳转）：平滑滚动到目标元素，自动尊重元素的 scroll-margin-top
// - 普通路由跳转：直接置顶
// - 浏览器前进/后退（savedPosition）：恢复原位置
export default <RouterConfig>{
    scrollBehavior(to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
        return { top: 0 }
    },
}
