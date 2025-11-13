<template>
  <footer class="bg-secondary text-white mt-16">
    <div class="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
      <div>
        <p class="text-lg font-semibold">镓宏半导体</p>
        <p class="text-sm text-slate-300 mt-3">
          全球领先的 8 英寸硅基氮化镓 IDM，提供从芯片设计、外延到封测的全产业链解决方案。
        </p>
      </div>
      <div>
        <p class="font-semibold mb-3">联系方式</p>
        <ul class="space-y-2 text-sm text-slate-300">
          <li>总部：苏州工业园区科创路 88 号</li>
          <li>电话：400-800-6600</li>
          <li>邮箱：service@gahonsemi.com</li>
        </ul>
      </div>
      <div>
        <p class="font-semibold mb-3">快速导航</p>
        <div class="grid grid-cols-2 gap-2 text-sm text-slate-300">
          <NuxtLink to="/solutions">解决方案</NuxtLink>
          <NuxtLink to="/investors">投资者关系</NuxtLink>
          <NuxtLink to="/downloads">下载中心</NuxtLink>
          <NuxtLink to="/support">客户服务</NuxtLink>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-3">合规与安全</p>
        <p class="text-sm text-slate-300">网站已启用 HTTPS、WAF、SQL 注入与 XSS 防护，并通过 ISO/IEC 27001 认证。</p>
      </div>
    </div>
    <div class="border-t border-slate-700 text-center text-xs py-4 text-slate-400">
      © 2025 镓宏半导体股份有限公司 · 保留一切权利
    </div>
  </footer>
</template>
