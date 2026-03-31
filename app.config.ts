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
    apiHost: process.server ? 'http://127.0.0.1:3100/api' : 'https://aohong.dist.ink/api',
    api: function(route: string) {
        return this.apiHost + route
    },
    clientConfig
})
