import { defineNuxtPlugin } from "#app"

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.directive('lock-aspect', {
        /**
         * binding中定义了基线和另一个基于基线的比例
         * 基线默认为宽，会随着宽度变化
         * @param el
         * @param binding
         */
        mounted(el, binding) {
            const { width, height } = window.getComputedStyle(el)
            if (!width || !height || !binding.value) {
                return
            }

            let base = 'width', ratio
            if (typeof binding.value === 'object') {
                base = binding.value.base
                ratio = binding.value.ratio
            } else {
                const base = 'width'
                ratio = binding.value
            }

            if (!ratio) {
                return
            }

            if (base === 'width') {
                const widthNum = parseInt(width)
                const unit = width.match(/[a-zA-Z]+/)
                const widthUnit = unit ? unit[0] : ''
                el.style.height = `${widthNum * ratio}${widthUnit}`
                return
            }

            if (base === 'height') {
                const heightNum = parseInt(height)
                const unit = height.match(/[a-zA-Z]+/)
                const heightUnit = unit ? unit[0] : ''
                el.style.width = `${heightNum * ratio}${heightUnit}`
            }
        }
    });
})
