<script setup lang="ts">
const lvProducts = [
  { name: 'VGaN™ FastCharge', voltage: '15V-120V', features: '内置驱动控制、2MHz 高频', app: '消费电子快充、移动电源' },
  { name: 'SolidGaN Controller', voltage: '48V-100V', features: 'GaN IC + 数字控制', app: '服务器、通信电源' }
]

const hvProducts = [
  { name: 'GaN HEMT 650V', voltage: '650V', features: '氮化镓增强型结构、低 Rds(on)', app: 'AI 数据中心、工业驱动' },
  { name: 'GaN HEMT 1200V', voltage: '1200V', features: '固态外延叠层、98.7% 良率', app: '新能源储能、车载 OBC' }
]

const comparison = [
  { metric: '效率', solid: '99.1%', hemt: '98.5%' },
  { metric: '开关频率', solid: '2MHz', hemt: '1MHz' },
  { metric: '功率密度', solid: '35W/cc', hemt: '28W/cc' },
  { metric: '热阻', solid: '0.12℃/W', hemt: '0.18℃/W' }
]
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-12 space-y-12">
    <header>
      <p class="tag">产品中心</p>
      <h1 class="text-4xl font-bold">15V-1200V GaN 功率器件</h1>
      <p class="text-slate-600 mt-4">低压（LV）与高压（HV）系列覆盖可再生能源、工业、消费电子、数据中心与汽车电子。</p>
    </header>

    <section id="lv">
      <h2 class="section-title">低压系列</h2>
      <div class="card-grid">
        <div v-for="product in lvProducts" :key="product.name" class="card">
          <p class="text-xl font-semibold">{{ product.name }}</p>
          <p class="text-sm text-slate-500">电压：{{ product.voltage }}</p>
          <p class="text-sm text-slate-600 mt-2">特性：{{ product.features }}</p>
          <p class="text-sm text-slate-600 mt-2">应用：{{ product.app }}</p>
        </div>
      </div>
    </section>

    <section id="hv">
      <h2 class="section-title">高压系列</h2>
      <div class="card-grid">
        <div v-for="product in hvProducts" :key="product.name" class="card">
          <p class="text-xl font-semibold">{{ product.name }}</p>
          <p class="text-sm text-slate-500">电压：{{ product.voltage }}</p>
          <p class="text-sm text-slate-600 mt-2">特性：{{ product.features }}</p>
          <p class="text-sm text-slate-600 mt-2">应用：{{ product.app }}</p>
        </div>
      </div>
    </section>

    <section id="compare">
      <h2 class="section-title">产品对比</h2>
      <div class="overflow-auto bg-white rounded-2xl shadow">
        <table class="min-w-full text-left text-sm">
          <thead class="bg-slate-50 text-slate-500">
            <tr>
              <th class="px-4 py-3">指标</th>
              <th class="px-4 py-3">SolidGaN</th>
              <th class="px-4 py-3">GaN HEMT</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in comparison" :key="row.metric" class="border-t">
              <td class="px-4 py-3 font-semibold">{{ row.metric }}</td>
              <td class="px-4 py-3">{{ row.solid }}</td>
              <td class="px-4 py-3">{{ row.hemt }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section id="applications">
      <h2 class="section-title">应用领域</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="card">
          <p class="text-xl font-semibold">可再生能源 & 工业</p>
          <p class="text-sm text-slate-600 mt-3">储能逆变、风光互补、工业电机驱动，通过 1200V SolidGaN 提升效率 3%。</p>
        </div>
        <div class="card">
          <p class="text-xl font-semibold">AI 数据中心</p>
          <p class="text-sm text-slate-600 mt-3">800V 直流供电架构 + GaN HEMT，支持兆瓦级算力集群。</p>
        </div>
      </div>
    </section>
  </div>
</template>
