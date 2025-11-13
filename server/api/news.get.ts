import { defineEventHandler, getQuery } from 'h3'

const newsList = [
  {
    id: 1,
    title: '镓宏发布 1200V SolidGaN 平台，面向新能源储能',
    category: 'industry',
    date: '2025-02-15',
    summary: '第三代半导体在储能领域规模化应用，系统效率提升 2.8%。'
  },
  {
    id: 2,
    title: '与英伟达共建 AI 数据中心 800V 直流供电架构',
    category: 'company',
    date: '2025-03-21',
    summary: '镓宏 GaN HEMT 支撑兆瓦级算力集群，实现 30% 能效增益。'
  },
  {
    id: 3,
    title: 'GaN 高压晶圆良率突破 98.7%，工艺白皮书上线',
    category: 'tech',
    date: '2025-04-10',
    summary: '8 英寸 GaN-on-Si 制程持续优化，开放工艺白皮书下载。'
  },
  {
    id: 4,
    title: '与头部车企联合打造 900V 车载 OBC 方案',
    category: 'company',
    date: '2025-05-02',
    summary: 'VGaN™ 器件通过车规认证，支持 L3 自动驾驶电源架构。'
  }
]

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const category = query.category as string | undefined
  if (!category) {
    return newsList
  }
  return newsList.filter((item) => item.category === category)
})
