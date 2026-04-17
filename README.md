## 异常处理
### 部署到服务端之后，在开启服务端渲染的模式下，无法正常请求接口
原因是在服务端没法正常解析请求地址的ip，可以通过手动修改DNS解决

### 宝塔面板的启动脚本
`;export PORT=3003; node ./server/index.mjs` 注意`;export PORT=3003;`

## 生产部署说明
### 构建产物
本项目为 Nuxt 3 SSR，`yarn build` 后请部署整个 `.output` 目录，不要只上传 `public`、`_nuxt` 或单独的 CSS/JS 文件。

### 推荐发布步骤
1. 本地执行 `yarn build`
2. 将完整 `.output` 打包上传到服务器
3. 服务端先停止旧 Node 进程
4. 备份并整体替换旧 `.output` 目录，不要增量覆盖其中部分文件
5. 在新的 `.output` 目录内启动：`;export PORT=3003; node ./server/index.mjs`
6. 发布后清理浏览器缓存，以及宝塔/Nginx/CDN 的缓存

### 样式错乱排查重点
如果本地 `yarn build` 预览正常、线上样式仍错乱，优先检查以下几项：
1. 是否整包替换了整个 `.output`
2. 是否仍有旧 Node 进程在提供旧版 SSR HTML
3. `/_nuxt/*.css`、`/_nuxt/*.js`、`/_nuxt/*.ttf`、`/_nuxt/*.woff2` 是否全部返回 `200`
4. 首页 HTML 是否已经引用了本次构建生成的新 hash 文件名
5. 浏览器是否命中了旧 HTML 缓存，导致新旧资源混用
