export function useCommon() {
    function throttle(func, limit) {
        let lastFunc;
        let lastRan;
        return function(...args) {
            const context = this;
            if (!lastRan) {
                // 第一次调用，立即执行
                func.apply(context, args);
                lastRan = Date.now();
            } else {
                // 清除之前的定时器
                clearTimeout(lastFunc);
                // 设置新的定时器
                lastFunc = setTimeout(function() {
                    if ((Date.now() - lastRan) >= limit) {
                        func.apply(context, args);
                        lastRan = Date.now();
                    }
                }, limit - (Date.now() - lastRan));
            }
        };
    }
    return {throttle}
}
