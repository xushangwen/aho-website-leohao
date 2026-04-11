import { defineNuxtPlugin } from '#app'
import { useEventStore } from '@/stores/event'
import { useCommon } from '@/composables/useCommon'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.directive('doc-scroll-listener', {
        mounted(el, binding) {
            const { throttle } = useCommon()
            const getScrollTop = () => {
                return document.documentElement.scrollTop || document.body.scrollTop
            }
            const eventStore = useEventStore();
            const scrollTopHandler = throttle(() => {
                eventStore.setScrollTop(getScrollTop())
            }, 100)
            scrollTopHandler() // 初始化
            el._scrollHandler = scrollTopHandler
            document.addEventListener('scroll', scrollTopHandler)
        },
        unmounted(el) {
            document.removeEventListener('scroll', el._scrollHandler)
            el._scrollHandler = null
        }
    })
    /**
     * 监听文档大小变化
     */
    nuxtApp.vueApp.directive('window-size-listener', {
        mounted(el, binding) {
            const { throttle } = useCommon()
            const eventStore = useEventStore();

            // 创建节流函数实例（只创建一次）
            const resizeHandler = throttle(() => {
                eventStore.setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                })
            }, 500); // 调整为更合理的间隔
            resizeHandler() // 初始化
            el._resizeHandler = resizeHandler
            window.addEventListener('resize', resizeHandler)
            window.addEventListener('load', resizeHandler)
        },
        unmounted(el) {
            window.removeEventListener('resize', el._resizeHandler)
            window.removeEventListener('load', el._resizeHandler)
            el._resizeHandler = null
        }
    });
    nuxtApp.vueApp.directive('scroll-listener', {
        mounted(el, binding) {
            const { callback, throttleDelay = 200 } = binding.value;

            // 节流函数（避免频繁触发）
            const throttledHandler = throttle((event) => {
                const scrollTop = el.scrollTop;
                const scrollLeft = el.scrollLeft;
                callback({ scrollTop, scrollLeft });
            }, throttleDelay);

            // 保存引用以便解绑
            el._scrollHandler = throttledHandler;

            // 绑定滚动事件
            el.addEventListener('scroll', (throttledHandler));
        },
        unmounted(el) {
            // 解绑事件，避免内存泄漏
            if (el._scrollHandler) {
                el.removeEventListener('scroll', el._scrollHandler);
                el._scrollHandler.cancel?.(); // 取消节流函数的待执行任务
                delete el._scrollHandler;
            }
        }
    });
})

// 简单的节流函数实现（如果未使用 lodash）
function throttle(fn: Function, delay: number) {
    let lastCall = 0;
    return function (...args: any[]) {
        const now = new Date().getTime();
        if (now - lastCall < delay) return;
        lastCall = now;
        return fn(...args);
    };
}

