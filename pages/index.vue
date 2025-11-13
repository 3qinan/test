<script setup lang="ts">
const highlights = [
  { title: '8 英寸 GaN-on-Si 量产', description: '全球最大 8" GaN 晶圆平台，产能可扩展至 35K wpm。' },
  { title: 'IDM 全链路', description: '覆盖设计、外延、制造、测试和失效分析，交付更可靠。' },
  { title: '多行业解决方案', description: '新能源、AI 数据中心、车载、消费电子全覆盖。' }
]

const productHighlights = [
  { title: '1200V SolidGaN', metrics: '效率 99.1%', use: '储能、工业变换器' },
  { title: '650V GaN HEMT', metrics: '开关频率 2MHz', use: 'AI 数据中心' },
  { title: '100V VGaN™ IC', metrics: '集成驱动控制', use: '快充、笔记本适配器' }
]
</script>

<template>
  <div>
    <section class="bg-gradient-to-br from-primary to-blue-900 text-white">
      <div class="max-w-6xl mx-auto px-4 py-16 lg:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p class="uppercase tracking-widest text-slate-200">Gahon Semiconductor</p>
          <h1 class="text-4xl lg:text-5xl font-bold leading-tight mt-4">
            镓宏半导体公司官方网站
          </h1>
          <p class="mt-6 text-lg text-slate-200">
            专注第三代半导体硅基氮化镓（GaN）技术，为可再生能源、AI 数据中心、汽车电子及消费电子提供高效率功率器件与系统级解决方案。
          </p>
          <div class="mt-8 flex flex-wrap gap-4">
            <NuxtLink to="/solutions" class="px-6 py-3 bg-white text-primary rounded-full font-semibold">行业解决方案</NuxtLink>
            <NuxtLink to="/investors" class="px-6 py-3 border border-white rounded-full font-semibold">投资者关系</NuxtLink>
          </div>
        </div>
        <div class="bg-white/10 backdrop-blur rounded-2xl p-6">
          <div class="grid gap-4">
            <div v-for="item in highlights" :key="item.title" class="bg-white/10 rounded-xl p-4">
              <p class="text-sm text-slate-200">{{ item.title }}</p>
              <p class="text-lg font-semibold">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="company" class="section">
      <div class="max-w-6xl mx-auto px-4">
        <p class="tag">公司简介</p>
        <h2 class="section-title">全球领先的 GaN IDM</h2>
        <p class="text-slate-600 max-w-3xl">
          镓宏半导体成立于 2015 年，注册资本 36.4 亿元，拥有 437 名员工。公司以 8 英寸硅基氮化镓工艺为核心，构建了涵盖芯片设计、外延生长、晶圆制造、测试与失效分析的 IDM 体系，产品覆盖 15V-1200V，全方位满足新能源与 AI 时代的功率需求。
        </p>
        <div class="card-grid mt-8">
          <div class="card">
            <p class="text-3xl font-bold text-primary">35K</p>
            <p class="text-sm text-slate-500">8" GaN 月产能（wpm）</p>
          </div>
          <div class="card">
            <p class="text-3xl font-bold text-primary">274+</p>
            <p class="text-sm text-slate-500">全球专利与软件著作权</p>
          </div>
          <div class="card">
            <p class="text-3xl font-bold text-primary">11</p>
            <p class="text-sm text-slate-500">重点行业合作实验室</p>
          </div>
        </div>
      </div>
    </section>

    <section id="technology" class="section bg-white">
      <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p class="tag">核心技术</p>
          <h2 class="section-title">8" GaN-on-Si + 智能制造</h2>
          <ul class="space-y-4 text-slate-600">
            <li>高压 GaN（650V-1200V）器件量产，效率提升 30%。</li>
            <li>与 ASML、英伟达、联合电子共建联合创新实验室。</li>
            <li>智能工厂 + 数字孪生，提高良率至 98.7%。</li>
            <li>支持 HTTPS、WAF、SQL 注入 / XSS 防护与多重备份。</li>
          </ul>
        </div>
        <div class="bg-slate-50 rounded-2xl p-6 border">
          <h3 class="text-xl font-semibold mb-4">宣传视频</h3>
          <div class="aspect-video bg-slate-200 rounded-xl flex items-center justify-center text-slate-500">
            视频位：GaN 智能制造纪录短片
          </div>
        </div>
      </div>
    </section>

    <section id="products" class="section">
      <div class="max-w-6xl mx-auto px-4">
        <p class="tag">产品亮点</p>
        <h2 class="section-title">15V-1200V 全覆盖</h2>
        <div class="card-grid">
          <div v-for="product in productHighlights" :key="product.title" class="card">
            <p class="text-xl font-semibold">{{ product.title }}</p>
            <p class="text-2xl font-bold text-primary">{{ product.metrics }}</p>
            <p class="text-sm text-slate-500">应用：{{ product.use }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="news" class="section bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex items-center justify-between">
          <div>
            <p class="tag">最新动态</p>
            <h2 class="section-title">行业与公司新闻</h2>
          </div>
          <NuxtLink to="/news" class="text-primary font-semibold">查看更多</NuxtLink>
        </div>
        <div class="grid md:grid-cols-3 gap-6 mt-8">
          <article v-for="product in productHighlights" :key="product.title" class="card">
            <p class="text-sm text-slate-500">2025-05-01</p>
            <h3 class="text-lg font-semibold mt-2">{{ product.title }}</h3>
            <p class="text-sm text-slate-600 mt-2">持续更新新能源、AI 数据中心与汽车电子的 GaN 方案进展。</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
