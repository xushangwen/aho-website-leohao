// https://nuxt.com/docs/api/configuration/nuxt-config
import clientConfig from '@/public/client.js'
// const clientConfig = require('./public/client.js');
/**
 * <script setup lang="ts">
 * const appConfig = useAppConfig()
 * </script>
 */
export default defineAppConfig({
    title: '澳弘',
    theme: {
        color: {
            primary: "#ff0000"
        }
    },
    // 服务端（SSR）直连后端；客户端走同源代理 /api/proxy 避免 CORS
    // 后端地址通过 NUXT_BACKEND_URL 环境变量配置，默认本地 Docker 端口
    apiHost: process.server
        ? `${process.env.NUXT_BACKEND_URL || 'http://localhost:8080'}/api`
        : '/api/proxy',
    api: function(route: string) {
        return this.apiHost + route
    },
    clientConfig
})
