import ElementPlus from 'unplugin-element-plus/vite';
const clientConfig = require('./public/client.js');
// https://nuxt.com/docs/api/configuration/nuxt-config
//https://nuxt.com/modules
// @ts-ignore
export default defineNuxtConfig({
    ssr: true,
    loading: false,
    devtools: {
      enabled: true,

      timeline: {
        enabled: true
      }
    },
    imports: {
        autoImport: true // 默认已开启，自动导入 composables/
    },

    /**
     * 运行时配置
     * const runtimeConfig = useRuntimeConfig()
     */
    runtimeConfig: {
        public: {
            // apiHost: process.server ? process.env.NUXT_API_HOST_SERVER : process.env.NUXT_API_HOST_CLIENT
        }
    },

    port: process.env.NUXT_PORT,
    server: {},
    nitro: {
        logLevel: 'info',
        routeRules: {
            // 客户端 API 请求走此代理，避免 CORS（服务端直连 127.0.0.1:3100）
            '/api/proxy/**': { proxy: 'http://localhost:8080/api/**' },
            // 新闻详情页正文图片路径为 /upload/，需代理到后端文件服务
            '/upload/**': { proxy: 'http://localhost:8080/upload/**' }
        }
    },

    css: [
        // 'swiper/swiper-bundle.css',
        // 'element-plus/theme-chalk/index.css'
        './public/fonts/remixicon/remixicon.css',
        './public/fonts/Goolge_Sans/GoogleSans.css',
        './public/fonts/HarmonyOS_Sans/HarmonyOS_Sans.css',
        './public/fonts/SpaceGrotesk/SpaceGrotesk.css',
        './public/fonts/TT_Fors/TT_Fors.css',
        'normalize.css',
        'bootstrap/dist/css/bootstrap-grid.css',
    ],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/style/_global.scss" as *;'
                }
            }
        }
    },

    modules: [
        'nuxt-swiper',
        '@pinia/nuxt',
        '@nuxtjs/i18n',
        // "nuxt-security"
        // "./modules/gridjs/gridjs-module",
    ],

    i18n: {
        locales: [
            { code: 'zh', language: 'zh-CN', name: '中文', file: 'zh.json' },
            { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
        ],
        lazy: true,
        langDir: 'locales/',
        defaultLocale: 'zh',
        strategy: 'prefix_except_default',
        vueI18n: './i18n.config.ts',
    },

    // security: {
    //     csp: {
    //         nonce: false,  // 关闭自动生成的 Nonce
    //         directives: {
    //             scriptSrc: [
    //                 "'self'",
    //                 "https:", // 允许所有 HTTPS 域
    //                 "'unsafe-inline'", // 允许内联脚本
    //                 "'unsafe-eval'", // 关键修复：允许动态脚本执行
    //                 "'strict-dynamic'", // 支持动态加载脚本
    //                 "blob:",
    //                 "//*.baidu.com", // 明确添加百度地图域名[1,7](@ref)
    //                 "//*.bdimg.com"
    //             ],
    //             workerSrc: ["'self'", "blob:"]  // 显式定义 worker-src 避免回退
    //         },
    //         reportOnly: false // 生产环境关闭报告模式
    //     }
    // },

    app: {
        head: {
            title: '澳弘',
            meta: [
                {
                    "http-equiv": "Content-Security-Policy",
                    content: "upgrade-insecure-requests"
                },
                {
                    "name": "viewport",
                    "content": "width=device-width, initial-scale=1"
                },
                {
                    "charset": "utf-8"
                },
                {
                    name: 'description',
                    content: '澳弘'
                }
            ],
            script: [
                // {
                //     src: '/js/loadMap.js',
                //     mode: 'client'
                // },
                // 百度地图仅联系页面需要，暂时移出全局加载，避免开发时 "APP被您禁用" 弹窗
                // {
                //     src: 'https://api.map.baidu.com/getscript?v=3.0&ak=P4sdMvuqpV5oELoyWjl5mZh0AMmIUc6b&s=1"',
                //     async: true,
                //     defer: true
                // }
                // <script src="https://myawesome-lib.js"></script>
                // { type: 'text/javascript',src: 'https://unpkg.com/swiper@8/swiper-bundle.js', body: false },
            ],
            link: [
                // <link rel="stylesheet" href="https://myawesome-lib.css">
                // { rel: 'stylesheet', href: 'https://unpkg.com/swiper@8/swiper-bundle.css' },
            ],
        }
    },

    // build: {
    //     // 在开发环境和生产环境对es包使用babel进行语法转换
    //     transpile: ['element-plus/es'],
    // },
    // vite: {
    //     plugins: [ElementPlus({})],
    // },
    swiper: {

    },

    pinia: {
        autoImports: [
            'storeToRefs'
        ]
    },

    // 生产环境复写
    $production: {},

    compatibilityDate: '2024-11-06'
})