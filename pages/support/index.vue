<script setup lang="ts">
const faqs = [
  { q: '如何申请技术支持？', a: '通过设计服务或客户服务页面提交需求，24 小时内响应。' },
  { q: '产品质保多久？', a: '标准 3 年质保，可根据项目签署延长协议。' }
]
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-12 space-y-12">
    <header>
      <p class="tag">客户服务</p>
      <h1 class="text-4xl font-bold">技术支持 · 售后服务 · FAQ</h1>
      <p class="text-slate-600 mt-4">建立客户咨询处理、反馈跟踪与售后服务机制。</p>
    </header>

    <section id="tech">
      <h2 class="section-title">技术支持</h2>
      <div class="card">
        <p class="text-xl font-semibold">24/7 技术热线</p>
        <p class="text-sm text-slate-600 mt-2">400-800-6600 · 支持多语言</p>
      </div>
    </section>

    <section id="warranty">
      <h2 class="section-title">售后政策</h2>
      <p class="text-slate-600">提供远程诊断、RMA 管理、固件升级及现场支持服务。</p>
    </section>

    <section id="faq">
      <h2 class="section-title">常见问题</h2>
      <div class="space-y-3">
        <div v-for="item in faqs" :key="item.q" class="card">
          <p class="font-semibold">{{ item.q }}</p>
          <p class="text-sm text-slate-600 mt-2">{{ item.a }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
