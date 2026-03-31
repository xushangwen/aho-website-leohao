# API 接口契约文档
> **重要：前端大改期间，此文件中的所有字段名称绝对不能修改，否则会破坏与后端数据的对接。**
>
> Base URL（客户端）：`https://aohong.dist.ink/api`
> Base URL（SSR服务端）：`http://127.0.0.1:3100/api`
> 配置位置：`app.config.ts` → `apiHost`

---

## 通用响应结构

所有接口成功时返回 `code: 0`，前端统一用 `data.value?.code === 0` 判断。

```json
{ "code": 0, ...其他字段 }
```

---

## 1. `/layout/enterprise-info` — 企业基本信息

- **方式**：GET
- **调用位置**：`app.vue`（全局，SSR）
- **存储**：`layoutStore.orgInfo`
- **使用位置**：`components/common/Footer.vue`

### 响应字段（直接对象，无嵌套）

| 字段 | 类型 | 用途 | 展示位置 |
|------|------|------|---------|
| `telephone` | String | 客服电话 | Footer 联系区域 |
| `email` | String | 邮箱 | Footer 联系区域 |
| `address` | String | 公司地址 | Footer 联系区域 |
| `beian` | String | ICP备案号 | Footer 版权栏 |
| `name` | String | 公司全称 | Footer 版权栏 `© 2025 {name} All Rights Reserved.` |

```json
{
  "telephone": "0519-69887878",
  "email": "xxx@czaohong.com",
  "address": "江苏省常州市...",
  "beian": "苏ICP备XXXXXXXX号",
  "name": "常州澳弘电子股份有限公司"
}
```

---

## 2. `/layout/nav` — 动态导航分类

- **方式**：GET
- **调用位置**：`app.vue`（全局，SSR）
- **存储**：`appStore.prodCate` / `appStore.postCate`

### 响应字段

| 字段 | 类型 | 用途 |
|------|------|------|
| `prod` | Array | 产品分类列表 → 存入 `prodCate` |
| `post` | Array | 新闻分类列表 → 存入 `postCate` |

每个分类对象：

| 字段 | 类型 | 用途 |
|------|------|------|
| `cn` | String | 分类中文名称（显示用） |
| `link` | String | 链接（如 `/products?cate=double`），前端用 `link.split('=')[1]` 取分类值 |

```json
{
  "prod": [
    { "cn": "双面板", "link": "/products?cate=double" },
    { "cn": "多层板", "link": "/products?cate=multi" }
  ],
  "post": [
    { "cn": "行业新闻", "link": "/news?type=industry" },
    { "cn": "企业动态", "link": "/news?type=company" }
  ]
}
```

---

## 3. `/post/list` — 新闻列表

- **方式**：GET
- **调用位置**：`pages/news/index.vue`

### 请求参数

| 参数 | 类型 | 说明 |
|------|------|------|
| `type` | String | 分类标识（为空则查全部） |
| `per_page` | Number | 每页数量（默认 12） |
| `page_num` | Number | 页码（默认 1） |

### 响应字段

| 字段 | 类型 | 用途 |
|------|------|------|
| `code` | Number | 0 = 成功 |
| `list` | Array | 新闻列表 |
| `recommend` | Object | 推荐新闻（置顶展示，同 list item 结构） |
| `total_count` | String | 总条数（字符串，前端 `parseInt` 转换） |

每条新闻 `list[i]` 字段：

| 字段 | 类型 | 用途 | 展示位置 |
|------|------|------|---------|
| `uuid` | String | 唯一ID | 路由 `/news/detail/{uuid}` |
| `cover_list` | Array\<String\> | 封面图URL数组，取 `[0]` | 新闻卡片封面图 |
| `pub_time` | String | 发布时间 | 新闻卡片日期 |
| `title` | String | 新闻标题 | 新闻卡片标题 |
| `type` | String | 分类标识（匹配 postCate 的 link） | 分类标签 |
| `abst` | String | 摘要 | 推荐新闻摘要展示 |

```json
{
  "code": 0,
  "list": [
    {
      "uuid": "abc-123",
      "cover_list": ["https://cdn.xxx.com/news/1.jpg"],
      "pub_time": "2025-03-01",
      "title": "新闻标题",
      "type": "industry",
      "abst": "新闻摘要..."
    }
  ],
  "recommend": { "uuid": "...", "cover_list": [...], "pub_time": "...", "title": "...", "type": "...", "abst": "..." },
  "total_count": "38"
}
```

---

## 4. `/post/recommend` — 推荐新闻

- **方式**：GET
- **调用位置**：`pages/index.vue`（首页新闻区块）

### 请求参数

| 参数 | 类型 | 说明 |
|------|------|------|
| `num` | Number | 获取数量（首页传 3） |

### 响应字段

| 字段 | 类型 | 用途 |
|------|------|------|
| `code` | Number | 0 = 成功 |
| `recommend` | Array | 推荐新闻数组，传给 `EleNewsList` 组件 |

每条字段同 `/post/list` 中 `list[i]`：`uuid`、`cover_list`、`pub_time`、`title`、`type`

---

## 5. `/post/detail` — 新闻详情

- **方式**：GET
- **调用位置**：`pages/news/detail/[uuid].vue`

### 请求参数

| 参数 | 类型 | 说明 |
|------|------|------|
| `uuid` | String | 新闻唯一ID（从路由参数取） |

### 响应字段

| 字段 | 类型 | 用途 |
|------|------|------|
| `code` | Number | 0 = 成功 |
| `model` | Object | 新闻详情对象 |

`model` 字段：

| 字段 | 类型 | 用途 |
|------|------|------|
| `uuid` | String | 唯一ID（用于判断是否加载成功） |
| `pub_time` | String | 发布时间 |
| `title` | String | 标题（也用于面包屑） |
| `content` | String | 富文本HTML内容（`v-html` 直接渲染） |

```json
{
  "code": 0,
  "model": {
    "uuid": "abc-123",
    "pub_time": "2025-03-01",
    "title": "新闻标题",
    "content": "<p>富文本HTML...</p>"
  }
}
```

---

## 6. `/post/cate-statistic` — 分类数量统计

- **方式**：GET
- **调用位置**：`pages/news/index.vue`

### 响应字段

| 字段 | 类型 | 用途 |
|------|------|------|
| `code` | Number | 0 = 成功 |
| `categories` | Object | `{ [type标识]: count数量 }` |

```json
{
  "code": 0,
  "categories": {
    "industry": 15,
    "company": 23
  }
}
```

---

## 7. `/products/list` — 产品列表

- **方式**：GET
- **调用位置**：`pages/products/index.vue`（无限滚动加载）

### 请求参数

| 参数 | 类型 | 说明 |
|------|------|------|
| `page_num` | Number | 页码 |
| `per_page` | Number | 每页数量（12） |
| `ca` | String | 分类标识（可选，来自 URL `?cate=xxx`） |

### 响应字段

| 字段 | 类型 | 用途 |
|------|------|------|
| `code` | Number | 0 = 成功 |
| `list_model` | Array | 产品列表 |
| `pagination` | Object | 分页信息（前端目前只用来判断是否还有更多） |

每条产品 `list_model[i]` 字段：

| 字段 | 类型 | 用途 | 展示位置 |
|------|------|------|---------|
| `image` | String | 封面图URL | 产品卡片图片 |
| `name` | String | 产品名称 | 产品卡片标题 |
| `p` | Array | 规格参数数组 | 产品卡片规格列表 |

`p` 数组每项结构：`{ label: "层数", content: "2层" }`

```json
{
  "code": 0,
  "list_model": [
    {
      "image": "https://cdn.xxx.com/prod/1.jpg",
      "name": "双面PCB",
      "p": [
        { "label": "层数", "content": "2层" },
        { "label": "板厚", "content": "0.4~3.2mm" }
      ]
    }
  ],
  "pagination": { "total_page": 3, "total_count": 30 }
}
```

---

## 8. `/honor/list` — 荣誉资质列表

- **方式**：GET
- **调用位置**：`pages/about/honor.vue`（无限滚动）

### 请求参数

| 参数 | 类型 | 说明 |
|------|------|------|
| `page_num` | Number | 页码 |
| `per_page` | Number | 每页数量（12） |

### 响应字段

| 字段 | 类型 | 用途 |
|------|------|------|
| `code` | Number | 0 = 成功 |
| `list_model` | Array | 荣誉列表 |
| `pagination.total_page` | Number | 总页数 |

每条 `list_model[i]`：

| 字段 | 类型 | 用途 |
|------|------|------|
| `image` | Array\<String\> | 图片URL数组，取 `image[0]` |

---

## 9. `/cert/recommend` — 推荐专利（Banner轮播）

- **方式**：GET
- **调用位置**：`pages/about/patent.vue`

### 响应字段

| 字段 | 类型 | 用途 |
|------|------|------|
| `code` | Number | 0 = 成功 |
| `list_model` | Array | 推荐专利列表（用于顶部 Swiper 轮播） |

每条 `list_model[i]`：

| 字段 | 类型 | 用途 |
|------|------|------|
| `image` | Array\<String\> | 证书图片，取 `image[0]` |
| `date` | String | 日期（`date.split('-')[0]` 取年份显示） |
| `category` | String | 分类标签文字 |
| `name` | String | 专利/证书名称 |
| `intro` | String | 简介描述 |

---

## 10. `/cert/list` — 专利证书列表

- **方式**：GET
- **调用位置**：`pages/about/patent.vue`（无限滚动，同 `/honor/list` 结构）

### 请求参数 / 响应结构

同 `/honor/list`（`page_num`、`per_page`；`list_model[i].image[0]`）

---

## 11. `/message/feedback` — 联系表单提交

- **方式**：POST
- **调用位置**：`components/ele/contact.vue`

### 请求体（JSON）

| 字段 | 类型 | 说明 |
|------|------|------|
| `first_name` | String | 名 |
| `last_name` | String | 姓 |
| `email` | String | 邮箱 |
| `phone` | String | 电话 |
| `message` | String | 留言内容 |

---

## 静态配置（非API，来自 `public/client.js`）

以下内容**不走后端API**，直接硬编码在 `public/client.js` → `appConfig.clientConfig` 中：

| 配置项 | 用途 |
|--------|------|
| `nav` | 顶部导航菜单树（标题/链接/封面图/子菜单） |
| `profileData` | 首页数据亮点（年份/数量/单位/描述） |
| `salesPoints` | 联系页销售处及海外代表处列表 |
| `bannerSlides` | 首页 Banner 轮播配置（视频/图片/文案） |

**如需修改这些内容，直接编辑 `public/client.js`，不涉及后端。**

---

## 前端大改注意事项

1. **所有字段名不能改**（如 `uuid`、`cover_list`、`pub_time`、`list_model` 等）
2. **`code === 0` 判断逻辑不能删**，这是成功标志
3. **分页参数名固定**：`page_num`（页码）、`per_page`（每页数）、`ca`（产品分类）、`type`（新闻分类）
4. **图片字段规律**：新闻用 `cover_list[0]`；产品用 `image`（字符串）；荣誉/专利用 `image[0]`（数组）
5. **`appConfig.api('/xxx')` 这个调用方式不能改**，它负责自动切换本地/线上API地址
