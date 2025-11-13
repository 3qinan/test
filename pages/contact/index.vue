<template>
  <div class="max-w-6xl mx-auto px-4 py-12 space-y-12">
    <header>
      <p class="tag">联系我们</p>
      <h1 class="text-4xl font-bold">全球销售网络与在线咨询</h1>
      <p class="text-slate-600 mt-4">提供总部地址、联系方式、在线表单、销售网络分布。</p>
    </header>

    <section id="map">
      <h2 class="section-title">公司地址</h2>
      <div class="card">
        <p class="text-sm text-slate-500">总部</p>
        <p class="text-xl font-semibold">苏州工业园区科创路 88 号</p>
        <p class="text-sm text-slate-600 mt-2">上海、深圳、硅谷设有商务与技术支持中心。</p>
      </div>
    </section>

    <section id="form">
      <h2 class="section-title">在线咨询</h2>
      <form class="card grid gap-4">
        <div class="grid md:grid-cols-2 gap-4">
          <label class="text-sm font-semibold">
            姓名
            <input class="mt-1 border rounded-lg px-3 py-2 w-full" placeholder="请输入姓名" />
          </label>
          <label class="text-sm font-semibold">
            邮箱
            <input class="mt-1 border rounded-lg px-3 py-2 w-full" type="email" placeholder="example@company.com" />
          </label>
        </div>
        <label class="text-sm font-semibold">
          咨询内容
          <textarea class="mt-1 border rounded-lg px-3 py-2 w-full" rows="4" placeholder="请输入应用场景"></textarea>
        </label>
        <button class="px-6 py-3 bg-primary text-white rounded-full font-semibold w-full md:w-auto">提交</button>
      </form>
    </section>

    <section id="sales">
      <h2 class="section-title">销售网络</h2>
      <div class="card-grid">
        <div class="card">
          <p class="text-xl font-semibold">华东 & 华南</p>
          <p class="text-sm text-slate-600 mt-2">新能源、消费电子客户经理团队。</p>
        </div>
        <div class="card">
          <p class="text-xl font-semibold">欧美</p>
          <p class="text-sm text-slate-600 mt-2">硅谷办事处负责 AI 数据中心与车规客户。</p>
        </div>
      </div>
    </section>
  </div>
</template>
