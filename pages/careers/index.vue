<script setup lang="ts">
const jobs = [
  { title: 'GaN 外延工程师', location: '苏州', tags: ['硕士', '5 年+'], desc: '负责 8" GaN-on-Si 外延工艺开发与优化。' },
  { title: '功率模块应用工程师', location: '上海', tags: ['本科', '3 年+'], desc: '面向新能源与数据中心客户提供应用支持。' },
  { title: 'ASP.NET Core 全栈工程师', location: '上海', tags: ['本科', '5 年+'], desc: '建设内容管理、文件下载与安全防护平台。' }
]
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-12 space-y-12">
    <header>
      <p class="tag">人才招聘</p>
      <h1 class="text-4xl font-bold">加入镓宏 · 共建 GaN 时代</h1>
      <p class="text-slate-600 mt-4">展示企业文化、福利与热招岗位，支持在线投递。</p>
    </header>

    <section id="culture">
      <h2 class="section-title">文化展示</h2>
      <div class="card-grid">
        <div class="card">
          <p class="text-xl font-semibold">成长</p>
          <p class="text-sm text-slate-600 mt-2">研发培训、海外研修、期权激励。</p>
        </div>
        <div class="card">
          <p class="text-xl font-semibold">协作</p>
          <p class="text-sm text-slate-600 mt-2">跨部门联合攻关，敏捷交付。</p>
        </div>
        <div class="card">
          <p class="text-xl font-semibold">关怀</p>
          <p class="text-sm text-slate-600 mt-2">家庭日、弹性办公、健康保险。</p>
        </div>
      </div>
    </section>

    <section id="jobs">
      <h2 class="section-title">职位发布</h2>
      <div class="space-y-4">
        <div v-for="job in jobs" :key="job.title" class="card">
          <p class="text-2xl font-semibold">{{ job.title }}</p>
          <p class="text-sm text-slate-500">{{ job.location }}</p>
          <div class="mt-3 flex flex-wrap gap-2">
            <span v-for="tag in job.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <p class="text-sm text-slate-600 mt-3">{{ job.desc }}</p>
          <button class="mt-4 px-5 py-2 rounded-full bg-primary text-white text-sm font-semibold">投递简历</button>
        </div>
      </div>
    </section>
  </div>
</template>
