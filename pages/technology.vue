<script setup lang="ts">
const steps = [
  '8" GaN-on-Si 外延生长',
  '离子注入与沟道工程',
  'BEOL 金属互连与高压封装',
  '可靠性测试与失效分析'
]
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-12 space-y-12">
    <header>
      <p class="tag">核心技术</p>
      <h1 class="text-4xl font-bold">技术优势与研发实力</h1>
      <p class="text-slate-600 mt-4">开放 VGaN™ 生态，提供白皮书下载、工艺流程展示与技术服务。</p>
    </header>

    <section id="advantages">
      <h2 class="section-title">技术优势</h2>
      <div class="card-grid">
        <div class="card">
          <p class="text-xl font-semibold">8" GaN-on-Si</p>
          <p class="text-sm text-slate-600 mt-2">全球最大 8" GaN 晶圆平台，兼容现有 CMOS 工艺线。</p>
        </div>
        <div class="card">
          <p class="text-xl font-semibold">高压器件</p>
          <p class="text-sm text-slate-600 mt-2">650V-1200V 固态结构，实现 30% 能效增益。</p>
        </div>
        <div class="card">
          <p class="text-xl font-semibold">安全与可靠性</p>
          <p class="text-sm text-slate-600 mt-2">支持 HTTPS、SQL 注入/XSS 防护与自动化监控。</p>
        </div>
      </div>
    </section>

    <section id="process">
      <h2 class="section-title">工艺流程展示</h2>
      <ol class="list-decimal list-inside space-y-3 text-slate-600">
        <li v-for="step in steps" :key="step">{{ step }}</li>
      </ol>
    </section>

    <section id="whitepaper">
      <h2 class="section-title">技术白皮书下载</h2>
      <div class="card flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p class="text-xl font-semibold">《GaN-on-Si 高压器件可靠性白皮书》</p>
          <p class="text-sm text-slate-600 mt-2">涵盖外延、工艺、封装与可靠性数据，支持结构化数据标记。</p>
        </div>
        <button class="px-6 py-3 bg-primary text-white rounded-full font-semibold">下载 PDF</button>
      </div>
    </section>
  </div>
</template>
