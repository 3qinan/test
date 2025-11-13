<script setup lang="ts">
const files = [
  { category: '产品手册', name: 'GaN Power Device Catalog 2025', size: '8.2MB', id: 'catalogs' },
  { category: '技术文档', name: 'GaN Reliability Report', size: '5.4MB', id: 'docs' },
  { category: '软件工具', name: 'Thermal Simulation Toolkit', size: '120MB', id: 'software' }
]
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-12 space-y-12">
    <header>
      <p class="tag">下载中心</p>
      <h1 class="text-4xl font-bold">产品手册 · 技术文档 · 软件工具</h1>
      <p class="text-slate-600 mt-4">文档上传、分类管理、下载统计可通过 ASP.NET Core 后台完成。</p>
    </header>

    <section id="catalogs">
      <h2 class="section-title">资源列表</h2>
      <div class="space-y-4">
        <div v-for="file in files" :key="file.name" class="card">
          <p class="text-sm text-slate-500">{{ file.category }}</p>
          <p class="text-xl font-semibold">{{ file.name }}</p>
          <p class="text-xs text-slate-400">{{ file.size }}</p>
          <button class="mt-3 px-4 py-2 rounded-full border border-primary text-primary text-sm font-semibold">下载</button>
        </div>
      </div>
    </section>
  </div>
</template>
