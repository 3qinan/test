export type SecondaryItem = {
  label: string
  to: string
  description: string
}

export type NavItem = {
  label: string
  to: string
  description: string
  secondary: SecondaryItem[]
}

export const navigation: NavItem[] = [
  {
    label: '首页',
    to: '/',
    description: '公司概览与品牌传播',
    secondary: [
      { label: '公司简介', to: '/#company', description: '镓宏发展概况' },
      { label: '核心技术', to: '/#technology', description: '8 英寸 GaN-on-Si 能力' },
      { label: '产品亮点', to: '/#products', description: '旗舰器件展示' },
      { label: '最新动态', to: '/#news', description: '重点新闻资讯' }
    ]
  },
  {
    label: '关于我们',
    to: '/about',
    description: '企业介绍与资质',
    secondary: [
      { label: '发展历程', to: '/about#history', description: '重要里程碑' },
      { label: '企业文化', to: '/about#culture', description: '使命愿景' },
      { label: '团队展示', to: '/about#team', description: '核心团队' },
      { label: '资质认证', to: '/about#certs', description: '荣誉资质' }
    ]
  },
  {
    label: '产品中心',
    to: '/products',
    description: 'GaN 产品组合',
    secondary: [
      { label: '功率器件', to: '/products#lv', description: '15-120V 快充芯片' },
      { label: '高压系列', to: '/products#hv', description: '650-1200V 高功率' },
      { label: '产品对比', to: '/products#compare', description: '多维指标对比' },
      { label: '应用领域', to: '/products#applications', description: '新能源/车载' }
    ]
  },
  {
    label: '核心技术',
    to: '/technology',
    description: '研发实力与白皮书',
    secondary: [
      { label: '技术优势', to: '/technology#advantages', description: '制程优势' },
      { label: '工艺流程', to: '/technology#process', description: '从外延到封装' },
      { label: '白皮书', to: '/technology#whitepaper', description: 'PDF 下载' }
    ]
  },
  {
    label: '新闻资讯',
    to: '/news',
    description: '实时新闻与SEO',
    secondary: [
      { label: '行业动态', to: '/news?category=industry', description: '第三代半导体' },
      { label: '公司新闻', to: '/news?category=company', description: '企业发布' },
      { label: '技术文章', to: '/news?category=tech', description: '研发洞察' }
    ]
  },
  {
    label: '设计服务',
    to: '/design-services',
    description: '仿真模型与培训',
    secondary: [
      { label: '应用指南', to: '/design-services#guides', description: '设计最佳实践' },
      { label: '演示板', to: '/design-services#boards', description: '评估板信息' },
      { label: '在线支持', to: '/design-services#support', description: '提交需求' }
    ]
  },
  {
    label: '解决方案',
    to: '/solutions',
    description: '行业案例与客户见证',
    secondary: [
      { label: '新能源', to: '/solutions#energy', description: '储能与光伏' },
      { label: '数据中心', to: '/solutions#datacenter', description: 'AI 算力供电' },
      { label: '汽车电子', to: '/solutions#automotive', description: '车载 OBC 与驱动' }
    ]
  },
  {
    label: '投资者关系',
    to: '/investors',
    description: '财务与公告',
    secondary: [
      { label: '财务报告', to: '/investors#reports', description: '年度/季度' },
      { label: '公司公告', to: '/investors#announcements', description: '重大事件' },
      { label: '投资者活动', to: '/investors#events', description: '路演日程' }
    ]
  },
  {
    label: '人才招聘',
    to: '/careers',
    description: '加入镓宏',
    secondary: [
      { label: '职位发布', to: '/careers#jobs', description: '热招岗位' },
      { label: '文化展示', to: '/careers#culture', description: '氛围与福利' }
    ]
  },
  {
    label: '联系我们',
    to: '/contact',
    description: '全球销售网络',
    secondary: [
      { label: '地址与交通', to: '/contact#map', description: '总部/分支' },
      { label: '在线咨询', to: '/contact#form', description: '快速留言' },
      { label: '销售网络', to: '/contact#sales', description: '区域渠道' }
    ]
  },
  {
    label: '下载中心',
    to: '/downloads',
    description: '资料下载与工具',
    secondary: [
      { label: '产品手册', to: '/downloads#catalogs', description: 'PDF 目录' },
      { label: '软件工具', to: '/downloads#software', description: '驱动/固件' }
    ]
  },
  {
    label: '客户服务',
    to: '/support',
    description: '售后与FAQ',
    secondary: [
      { label: '技术支持', to: '/support#tech', description: '案例知识库' },
      { label: '售后政策', to: '/support#warranty', description: '质保说明' },
      { label: '常见问题', to: '/support#faq', description: 'FAQ' }
    ]
  }
]
