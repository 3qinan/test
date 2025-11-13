<script setup lang="ts">
const reports = [
  { title: '2024 年年度报告', type: '年度', link: '#', date: '2025-03-15' },
  { title: '2025 年 Q1 财务报告', type: '季度', link: '#', date: '2025-04-30' }
]

const announcements = [
  { title: '关于英伟达合作的公告', date: '2025-03-21' },
  { title: '关于回购股份方案的公告', date: '2025-04-05' }
]
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-12 space-y-12">
    <header>
      <p class="tag">投资者关系</p>
      <h1 class="text-4xl font-bold">财务报告与公司公告</h1>
      <p class="text-slate-600 mt-4">支持多语言、SEO 元信息、投资者活动及下载中心互通。</p>
    </header>

    <section id="reports">
      <h2 class="section-title">财务报告</h2>
      <div class="card-grid">
        <div v-for="report in reports" :key="report.title" class="card">
          <p class="text-sm text-slate-500">{{ report.type }} · {{ report.date }}</p>
          <p class="text-lg font-semibold">{{ report.title }}</p>
          <NuxtLink :href="report.link" class="mt-4 inline-flex text-primary">下载 PDF</NuxtLink>
        </div>
      </div>
    </section>

    <section id="announcements">
      <h2 class="section-title">公司公告</h2>
      <div class="space-y-3">
        <div v-for="item in announcements" :key="item.title" class="card">
          <p class="text-sm text-slate-500">{{ item.date }}</p>
          <p class="text-lg font-semibold">{{ item.title }}</p>
        </div>
      </div>
    </section>

    <section id="events">
      <h2 class="section-title">投资者活动</h2>
      <div class="card">
        <p class="text-xl font-semibold">2025 投资者日 · 上海</p>
        <p class="text-sm text-slate-600 mt-2">主题：AI 与新能源的 GaN 机遇，现场展示 1200V SolidGaN 平台。</p>
      </div>
    </section>
  </div>
</template>
