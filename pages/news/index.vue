<script setup lang="ts">
const route = useRoute()
const category = computed(() => route.query.category as string | undefined)

const { data, pending, error } = await useAsyncData('news', () =>
  $fetch('/api/news', { params: { category: category.value } })
)

watch(category, () => refreshNuxtData('news'))

useHead({
  title: '新闻资讯',
  meta: [
    { name: 'description', content: '行业动态、公司新闻、技术文章、媒体报道的实时更新页面。' }
  ]
})
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-12">
    <header class="mb-8">
      <p class="tag">新闻资讯</p>
      <h1 class="text-4xl font-bold">实时新闻 + SEO</h1>
      <p class="text-slate-600 mt-4">页面使用 SSR，支持结构化数据与 SEO 优化，默认展示全部新闻，可按类别筛选。</p>
      <div class="flex flex-wrap gap-3 mt-6">
        <NuxtLink
          v-for="item in [
            { key: undefined, label: '全部' },
            { key: 'industry', label: '行业动态' },
            { key: 'company', label: '公司新闻' },
            { key: 'tech', label: '技术文章' }
          ]"
          :key="item.label"
          :to="{ path: '/news', query: item.key ? { category: item.key } : undefined }"
          class="px-4 py-2 rounded-full border"
          :class="route.query.category === item.key ? 'bg-primary text-white border-primary' : 'text-slate-600'"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
    </header>

    <div v-if="pending" class="text-slate-500">加载中…</div>
    <div v-else-if="error" class="text-red-500">加载失败：{{ error.message }}</div>
    <div v-else class="space-y-6">
      <article
        v-for="item in data"
        :key="item.id"
        class="card"
        itemprop="newsArticle"
        itemscope
        itemtype="https://schema.org/NewsArticle"
      >
        <p class="text-sm text-slate-500" itemprop="datePublished">{{ item.date }}</p>
        <h2 class="text-2xl font-semibold" itemprop="headline">{{ item.title }}</h2>
        <p class="text-sm text-slate-600 mt-3" itemprop="description">{{ item.summary }}</p>
        <p class="text-xs uppercase tracking-widest text-primary mt-4">分类：{{ item.category }}</p>
      </article>
    </div>
  </div>
</template>
