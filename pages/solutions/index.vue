<script setup lang="ts">
const solutions = [
  {
    id: 'energy',
    title: '可再生能源',
    desc: '光伏储能、风电与微电网，1200V SolidGaN 模块助力逆变效率 99.1%。',
    testimonial: '系统效率提升 2.8%，水冷系统可减半。',
    customer: '国网储能平台'
  },
  {
    id: 'datacenter',
    title: 'AI 数据中心',
    desc: '与英伟达共建 800V 直流架构，面向兆瓦级算力集群。',
    testimonial: 'GaN 高压器件让 PUE 降至 1.12。',
    customer: '英伟达 · 中国联合实验室'
  },
  {
    id: 'automotive',
    title: '汽车电子',
    desc: '车载 OBC、DC/DC、激光雷达，器件满足 AEC-Q102 与 ISO 26262。',
    testimonial: '整车续航提升 7%，功率密度提升 40%。',
    customer: '联合电子'
  }
]
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-12 space-y-12">
    <header>
      <p class="tag">解决方案</p>
      <h1 class="text-4xl font-bold">行业解决方案与客户见证</h1>
      <p class="text-slate-600 mt-4">围绕新能源、工业、消费电子、AI 数据中心、汽车电子构建场景化方案。</p>
    </header>

    <div class="space-y-6">
      <article v-for="solution in solutions" :key="solution.id" :id="solution.id" class="card">
        <div class="flex flex-col gap-2">
          <p class="text-sm text-primary uppercase">{{ solution.customer }}</p>
          <h2 class="text-2xl font-semibold">{{ solution.title }}</h2>
          <p class="text-slate-600">{{ solution.desc }}</p>
          <blockquote class="mt-4 border-l-4 border-primary pl-4 text-slate-600 text-sm">
            “{{ solution.testimonial }}”
          </blockquote>
        </div>
      </article>
    </div>
  </div>
</template>
