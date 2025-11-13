# 镓宏半导体公司官方网站（Nuxt 3 + Vue 3）

本项目使用 **Vue 3 + Nuxt 3（SSR/SSG 混合）** 构建“镓宏半导体公司官方网站”，覆盖首页、关于我们、产品中心、核心技术、新闻资讯、设计服务、解决方案、投资者关系、人才招聘、联系我们、下载中心、客户服务等栏目，并满足多语言、响应式、SEO、安全与性能优化等需求。

## 亮点特性

- **SSR + SSG 混合渲染**：
  - `/news` 页面使用 SSR + `server/api/news` 实时接口，保障 SEO 与动态数据；
  - `/about`、`/products`、`/design-services`、`/downloads` 等信息型页面采用 SSG 预渲染，提高访问性能。
- **二级导航与多语言**：`components/SiteHeader.vue` 注入 `data/navigation.ts` 中定义的多级菜单，提供中/英文切换（可扩展 i18n）。
- **丰富的业务模块**：
  - 首页汇聚公司简介、核心技术、产品亮点、最新动态、宣传视频；
  - 关于我们、产品中心、核心技术页面包含发展历程、产品对比、工艺流程、白皮书下载等；
  - 新闻资讯页具备分类筛选、结构化数据标记；
  - 设计服务、解决方案、投资者关系、人才招聘、联系我们、下载中心、客户服务等页面覆盖应用指南、案例、财务报告、职位发布、在线表单、下载资源与 FAQ。
- **安全与性能**：README 中提供 ASP.NET Core + SQL Server 后台建议，前端强调 HTTPS、SQL 注入/XSS 防护、CDN、缓存、图片压缩等策略。
- **响应式设计**：Tailwind CSS +自定义样式，针对桌面与移动端优化交互体验。

## 目录结构

```
.
├── app.vue                      # 全局骨架，包含头部/页脚
├── assets/css/main.css          # Tailwind + 自定义样式
├── components/
│   ├── SiteFooter.vue
│   └── SiteHeader.vue
├── data/navigation.ts           # 顶部菜单与二级导航配置
├── nuxt.config.ts               # SSR/SSG、SEO 元信息、路由规则、运行时配置
├── pages/
│   ├── index.vue                # 首页：简介、技术、产品、新闻
│   ├── about.vue                # 关于我们（SSG）
│   ├── products.vue             # 产品中心（SSG）
│   ├── technology.vue           # 核心技术
│   ├── news/index.vue           # 新闻资讯（SSR + 分类 + Schema）
│   ├── design-services/index.vue
│   ├── solutions/index.vue
│   ├── investors/index.vue
│   ├── careers/index.vue
│   ├── contact/index.vue
│   ├── downloads/index.vue
│   └── support/index.vue
├── server/api/news.get.ts       # SSR 数据接口
├── package.json                 # Nuxt 3 + Tailwind 依赖与脚本
├── tailwind.config.ts
└── tsconfig.json
```

## 运行方式

```bash
# 安装依赖
yarn install  # 或 npm install / pnpm install

# 开发模式（SSR）
yarn dev

# 生产构建
yarn build

# 预渲染静态内容（About/Products 等 SSG 页面）
yarn generate
```

## 后端与基础设施建议

- **内容管理 / API**：ASP.NET Core + SQL Server，提供内容管理、新闻/产品/文件/留言等后台接口，并实现多语言、SEO、权限控制。
- **安全**：全站 HTTPS、WAF、防 SQL 注入与 XSS、内容签名、日志审计。
- **性能优化**：CDN、图片压缩、HTTP 缓存、Nuxt 组件级懒加载、移动端轻量化资源。
- **SEO**：独立页面 title/meta、结构化数据、自动生成 sitemap。

该模板可作为完整官网的起点，可根据实际数据或 API 进一步扩展。 
