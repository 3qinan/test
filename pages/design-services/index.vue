<template>
  <div class="max-w-6xl mx-auto px-4 py-12 space-y-12">
    <header>
      <p class="tag">设计服务</p>
      <h1 class="text-4xl font-bold">应用指南与在线支持</h1>
      <p class="text-slate-600 mt-4">为客户提供应用指南、器件仿真模型、演示板、培训文档与在线技术支持。</p>
    </header>

    <section id="guides">
      <h2 class="section-title">应用指南</h2>
      <div class="card-grid">
        <div class="card">
          <p class="font-semibold">AI 服务器 800V 供电</p>
          <p class="text-sm text-slate-600 mt-2">提供参考设计、BOM 与热仿真指南。</p>
        </div>
        <div class="card">
          <p class="font-semibold">1200V 储能逆变</p>
          <p class="text-sm text-slate-600 mt-2">SolidGaN 模块布局建议与 EMI 控制。</p>
        </div>
      </div>
    </section>

    <section id="boards">
      <h2 class="section-title">演示板</h2>
      <div class="card">
        <p class="text-xl font-semibold">VGaN™ EVK-1200</p>
        <p class="text-sm text-slate-600 mt-2">集成驱动、电流采样与 CAN 通讯，支持云端远程调试。</p>
      </div>
    </section>

    <section id="support">
      <h2 class="section-title">在线技术支持</h2>
      <form class="card grid gap-4">
        <label class="text-sm font-semibold">
          公司/机构
          <input class="mt-1 w-full border rounded-lg px-3 py-2" placeholder="请输入公司名称" />
        </label>
        <label class="text-sm font-semibold">
          需求描述
          <textarea class="mt-1 w-full border rounded-lg px-3 py-2" rows="4" placeholder="描述应用、功率等级等"></textarea>
        </label>
        <button class="px-6 py-3 bg-primary text-white rounded-full font-semibold w-full md:w-auto">提交需求</button>
      </form>
    </section>
  </div>
</template>
