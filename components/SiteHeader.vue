<script setup lang="ts">
import { navigation } from '~/data/navigation'

const locale = useState<'zh-CN' | 'en-US'>('locale', () => 'zh-CN')
const switchLocale = () => {
  locale.value = locale.value === 'zh-CN' ? 'en-US' : 'zh-CN'
}
</script>

<template>
  <header class="bg-white shadow sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-6">
      <div>
        <NuxtLink to="/" class="text-xl font-bold text-primary">
          镓宏半导体
        </NuxtLink>
        <p class="text-sm text-slate-500">GaN-on-Si Global IDM</p>
      </div>
      <nav class="hidden lg:flex gap-6 text-sm">
        <div v-for="item in navigation" :key="item.label" class="group relative">
          <NuxtLink :to="item.to" class="font-semibold text-slate-800">
            {{ item.label }}
          </NuxtLink>
          <div class="absolute left-0 mt-3 hidden group-hover:block bg-white border rounded-xl shadow-xl w-64 p-4 space-y-3">
            <p class="text-xs text-slate-400">{{ item.description }}</p>
            <NuxtLink
              v-for="sub in item.secondary"
              :key="sub.label"
              :to="sub.to"
              class="flex flex-col rounded-lg border px-3 py-2 hover:border-primary"
            >
              <span class="text-sm font-semibold">{{ sub.label }}</span>
              <span class="text-xs text-slate-500">{{ sub.description }}</span>
            </NuxtLink>
          </div>
        </div>
      </nav>
      <div class="flex items-center gap-3">
        <button class="text-sm border px-3 py-1 rounded-full" @click="switchLocale">
          {{ locale === 'zh-CN' ? '中文' : 'English' }}
        </button>
        <NuxtLink to="/contact#form" class="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
          在线咨询
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
