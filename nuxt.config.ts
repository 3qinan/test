export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      titleTemplate: (titleChunk?: string) =>
        titleChunk ? `${titleChunk} · 镓宏半导体` : '镓宏半导体公司官方网站',
      meta: [
        { name: 'description', content: '镓宏半导体公司官方网站，展示GaN技术、产品、解决方案与投资者关系。' },
        { name: 'keywords', content: '半导体, 氮化镓, GaN, 功率器件, 芯片技术' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  routeRules: {
    '/about': { prerender: true },
    '/products': { prerender: true },
    '/design-services': { prerender: true },
    '/downloads': { prerender: true },
    '/news/**': { ssr: true },
    '/products/**': { ssr: true }
  },
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },
  runtimeConfig: {
    public: {
      defaultLocale: 'zh-CN',
      supportedLocales: ['zh-CN', 'en-US']
    }
  }
})
