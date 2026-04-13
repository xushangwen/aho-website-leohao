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
    // apiHost: process.server ? 'http://localhost:5000/api/api' : 'http://localhost:5000/api/api',
    // 服务端（SSR）直连本地后端；客户端走同源代理 /api/proxy 避免 CORS
    apiHost: process.server ? 'http://localhost:8080/api' : '/api/proxy',
    api: function(route: string) {
        return this.apiHost + route
    },
    clientConfig
})
