// 拦截浏览器/DevTools 对 /.well-known/ 的探测请求
// 在 Nitro 层直接返回 404，防止触发 Vue Router "No match" 警告
// ⚠️ 不能在此拦截图片等静态资源扩展名：Nitro 中间件先于静态文件服务运行
//    对缺失图片的处理应通过实际补充文件来解决，而非在此短路
export default defineEventHandler((event) => {
    if (event.path?.startsWith('/.well-known/')) {
        setResponseStatus(event, 404)
        return null
    }
})
