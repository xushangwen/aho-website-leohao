// 全站锚点平滑滚动插件（仅客户端）
//
// 为什么不用 router.options.ts scrollBehavior 处理 hash：
//   scrollBehavior 在导航提交时同步执行，跨页面时 DOM 尚未渲染，
//   el: to.hash 找不到元素，浏览器回退为瞬移。
//
// 正确方案：router.afterEach + requestAnimationFrame 轮询
//   afterEach 在导航提交后触发，rAF 逐帧检测目标元素，
//   元素出现即执行 scrollIntoView({ behavior: 'smooth' })，
//   scroll-margin-top 由各页面 CSS 负责，无需手动补 header 偏移。
//
// 执行时序：
//   1. 导航提交 → scrollBehavior 瞬间归顶 → afterEach 启动 rAF 轮询
//   2. 页面渲染完成（同页 <1 帧，跨页数帧）
//   3. rAF 找到元素 → scrollIntoView smooth 启动
//   4. 浏览器平滑滚动动画

export default defineNuxtPlugin(() => {
    const router = useRouter()

    router.afterEach((to) => {
        if (!to.hash) return

        const deadline = Date.now() + 1500 // 1.5s 超时保护

        const tryScroll = () => {
            const el = document.querySelector(to.hash)
            if (el) {
                // scroll-margin-top 已在各页面 CSS 设置，浏览器自动计入偏移
                el.scrollIntoView({ behavior: 'smooth' })
            } else if (Date.now() < deadline) {
                requestAnimationFrame(tryScroll)
            }
            // 超时后静默退出，不做 fallback 跳转
        }

        requestAnimationFrame(tryScroll)
    })
})
