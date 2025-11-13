<script setup lang="ts">
const milestones = [
  { year: '2015', event: '公司成立，聚焦 8" GaN-on-Si 技术路线。' },
  { year: '2018', event: '建成首条 GaN 晶圆生产线，并通过 ISO9001。' },
  { year: '2022', event: '发布 650V-1200V 系列产品，布局新能源车。' },
  { year: '2024', event: '与英伟达、联合电子成立联合实验室，产能突破 25K wpm。' }
]

const team = [
  { name: '罗巍巍', role: '董事长/CEO', expertise: '半导体产业战略与资本运作' },
  { name: '张秋衡', role: 'CTO', expertise: 'GaN 外延与工艺专家，50+ 专利' },
  { name: '陈卓', role: 'COO', expertise: 'IDM 制造与供应链' },
  { name: 'Sophia Lee', role: 'VP Sales', expertise: '全球行业解决方案' }
]
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-12 space-y-12">
    <header>
      <p class="tag">关于我们</p>
      <h1 class="text-4xl font-bold">镓宏半导体</h1>
      <p class="text-slate-600 mt-4">
        高新技术企业、专精特新“小巨人”，聚焦第三代半导体硅基氮化镓功率器件的研发与产业化。
      </p>
    </header>

    <section id="history">
      <h2 class="section-title">发展历程</h2>
      <div class="space-y-4">
        <div v-for="item in milestones" :key="item.year" class="card flex items-center gap-6">
          <div class="text-3xl font-bold text-primary">{{ item.year }}</div>
          <p class="text-slate-600">{{ item.event }}</p>
        </div>
      </div>
    </section>

    <section id="culture">
      <h2 class="section-title">企业文化</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="card">
          <p class="font-semibold">使命</p>
          <p class="text-sm text-slate-600 mt-2">让 GaN 能源效率普惠所有行业。</p>
        </div>
        <div class="card">
          <p class="font-semibold">愿景</p>
          <p class="text-sm text-slate-600 mt-2">成为全球最值得信赖的 GaN IDM。</p>
        </div>
        <div class="card">
          <p class="font-semibold">价值观</p>
          <p class="text-sm text-slate-600 mt-2">客户成功、协同创新、极致质量。</p>
        </div>
      </div>
    </section>

    <section id="team">
      <h2 class="section-title">团队展示</h2>
      <div class="card-grid">
        <div v-for="member in team" :key="member.name" class="card">
          <p class="text-xl font-semibold">{{ member.name }}</p>
          <p class="text-sm text-slate-500">{{ member.role }}</p>
          <p class="text-sm text-slate-600 mt-2">{{ member.expertise }}</p>
        </div>
      </div>
    </section>

    <section id="certs">
      <h2 class="section-title">资质认证</h2>
      <ul class="list-disc list-inside text-slate-600 space-y-2">
        <li>ISO 9001、IATF 16949、ISO 14001 管理体系。</li>
        <li>信息安全 ISO/IEC 27001、产品安全 IEC 62368 认证。</li>
        <li>国家级专精特新“小巨人”、高新技术企业认定。</li>
      </ul>
    </section>
  </div>
</template>
