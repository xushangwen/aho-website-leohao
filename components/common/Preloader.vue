<template>
    <Transition name="pl-fade" @after-leave="onAfterLeave">
        <div v-if="visible" class="pl-overlay" aria-hidden="true">
            <div class="pl-body">
                <!-- 仅展示 Aoh 品牌标志部分（A=蓝，o=蓝，h=橙），三个字母依次入场 -->
                <svg class="pl-svg" width="180" viewBox="0 0 122 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        class="pl-path pl-path-a"
                        fill-rule="evenodd" clip-rule="evenodd"
                        d="M0 33.582L18.2342 2.00439H38.6038V33.582H29.4379V20.2652C28.9728 20.2652 28.543 20.5133 28.3127 20.9164L24.8882 26.8483H14.4687L10.5835 33.582H0ZM34.9977 10.2532H24.0509L18.6994 19.5209H29.4335V12.0961L35.0375 10.5943C35.2325 10.5412 35.197 10.2532 34.9932 10.2532H34.9977Z"
                        fill="#1E3296"
                    />
                    <path
                        class="pl-path pl-path-o"
                        fill-rule="evenodd" clip-rule="evenodd"
                        d="M45.9355 29.0013V8.27295H75.6215C78.1511 8.27295 80.2022 10.3241 80.2022 12.8537V33.582H50.5163C47.9867 33.582 45.9355 31.5309 45.9355 29.0013ZM55.1014 25.3332H71.0408V16.5218H55.1014V25.3332Z"
                        fill="#1E3296"
                    />
                    <path
                        class="pl-path pl-path-h"
                        fill-rule="evenodd" clip-rule="evenodd"
                        d="M121.805 33.5818H112.639V16.5216H96.6998V33.5818H87.5339V0.0239258H96.6998V15.7729C97.1649 15.7729 97.5947 15.5248 97.825 15.1217L101.781 8.27274H117.224C119.754 8.27274 121.805 10.3239 121.805 12.8535V33.5818Z"
                        fill="#FF6400"
                    />
                </svg>

                <!-- 进度条：渐变蓝→橙，宽度由 JS rAF 驱动，完成时加 CSS transition 平滑到100% -->
                <div class="pl-bar">
                    <div
                        class="pl-bar-fill"
                        :class="{ 'pl-bar-complete': barComplete }"
                        :style="{ width: barWidth + '%' }"
                    ></div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
const emit = defineEmits(['finished'])

const visible = ref(true)
const barWidth = ref(0)
const barComplete = ref(false)

let raf = null

onMounted(() => {
    // rAF 驱动进度条从 0 → 82%，时长 1.5s，ease-out 缓动
    const startTime = Date.now()
    const animDuration = 1500

    const animateBar = () => {
        const t = Math.min((Date.now() - startTime) / animDuration, 1)
        // ease-out cubic
        const eased = 1 - Math.pow(1 - t, 3)
        barWidth.value = parseFloat((eased * 82).toFixed(2))
        if (t < 1) {
            raf = requestAnimationFrame(animateBar)
        }
    }
    raf = requestAnimationFrame(animateBar)

    const finish = () => {
        if (raf) cancelAnimationFrame(raf)
        // 先启用 CSS transition，再跳到 100%，产生平滑完成动画
        barComplete.value = true
        barWidth.value = 100
        // 等进度条走完 + 短暂停留后，淡出整个 overlay
        setTimeout(() => {
            visible.value = false
        }, 450)
    }

    // 最短展示 1.6s + 等 window.onload 都满足后才收起
    const minWait = new Promise(r => setTimeout(r, 1600))
    const pageLoaded = new Promise(r => {
        if (document.readyState === 'complete') r()
        else window.addEventListener('load', r, { once: true })
    })

    Promise.all([minWait, pageLoaded]).then(finish)
})

onUnmounted(() => {
    if (raf) cancelAnimationFrame(raf)
})

const onAfterLeave = () => {
    emit('finished')
}
</script>

<style lang="scss">
.pl-overlay {
    position: fixed;
    inset: 0;
    z-index: 99999;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
}

.pl-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
}

/* 三个字母依次淡入上移 */
.pl-svg {
    overflow: visible;

    .pl-path {
        opacity: 0;
        animation: pl-letter-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    .pl-path-a { animation-delay: 0.1s; }
    .pl-path-o { animation-delay: 0.28s; }
    .pl-path-h { animation-delay: 0.46s; }
}

@keyframes pl-letter-in {
    from {
        opacity: 0;
        transform: translateY(12px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* 进度条 */
.pl-bar {
    width: 180px;
    height: 2px;
    background: rgba(0, 0, 0, 0.08);
    overflow: hidden;

    .pl-bar-fill {
        height: 100%;
        width: 0;
        background: linear-gradient(90deg, #1E3296 0%, #FF6400 100%);

        /* 完成时才开启 transition，避免 rAF 动画被 transition 拖慢 */
        &.pl-bar-complete {
            transition: width 0.4s ease-out;
        }
    }
}

/* overlay 淡出 */
.pl-fade-leave-active {
    transition: opacity 0.55s ease-in-out;
}
.pl-fade-leave-to {
    opacity: 0;
}
</style>
