# AI编程教育导航站 - 部署指南

## 项目结构
```
aicode-nav/
├── src/
│   ├── app/
│   │   ├── layout.tsx    # 根布局
│   │   ├── page.tsx      # 首页
│   │   └── globals.css   # 全局样式
│   ├── components/       # 组件目录
│   └── data/
│       └── tools.ts      # 工具数据
├── public/               # 静态资源
├── next.config.js        # Next.js配置
├── tailwind.config.ts    # Tailwind配置
├── tsconfig.json         # TypeScript配置
└── package.json          # 依赖
```

## 部署步骤

### 1. 安装依赖
```bash
cd projects/aicode-nav
npm install
```

### 2. 本地预览
```bash
npm run dev
# 访问 http://localhost:3000
```

### 3. 构建
```bash
npm run build
# 输出到 dist/ 目录
```

### 4. 部署到Vercel（推荐）
1. 访问 https://vercel.com
2. 用GitHub账号登录
3. 导入项目
4. 自动部署，获得 `.vercel.app` 域名
5. 绑定你的域名 `aicode-nav.com`

### 5. 绑定域名
1. 在域名服务商（阿里云/腾讯云/Cloudflare）添加DNS记录：
   - 类型: CNAME
   - 主机: @
   - 值: cname.vercel-dns.com
2. 在Vercel控制台添加自定义域名

## 后续优化清单

### 内容优化
- [ ] 添加工具logo图标
- [ ] 添加工具截图/演示图
- [ ] 写3-5篇深度评测文章
- [ ] 添加用户评价/评分系统
- [ ] 添加"本周热门"、"编辑推荐"板块

### SEO优化
- [ ] 添加sitemap.xml
- [ ] 添加robots.txt
- [ ] 优化每个工具的meta description
- [ ] 添加结构化数据(JSON-LD)
- [ ] 添加Open Graph标签

### 功能扩展
- [ ] 搜索功能
- [ ] 用户收藏功能
- [ ] 工具对比功能
- [ ] 邮件订阅（新工具通知）
- [ ] 深色模式

### 变现准备
- [ ] 申请Cursor联盟计划
- [ ] 申请GitHub Copilot联盟
- [ ] 申请Replit联盟
- [ ] 添加Google AdSense
- [ ] 设置付费收录页面

## 推广计划

### 第一阶段（1-2周）
1. 在以下平台发布：
   - V2EX（程序员社区）
   - 知乎（回答相关问题）
   - Twitter/X（英文推广）
   - Reddit r/webdev, r/programming

2. 内容方向：
   - "2025年最适合初学者的AI编程工具"
   - "Cursor vs GitHub Copilot 深度对比"
   - "零基础如何用AI学习编程"

### 第二阶段（3-4周）
1. SEO内容营销
2. 联系工具厂商合作
3. 收集用户反馈优化

## 预期里程碑

| 时间 | 目标 | 关键指标 |
|-----|------|---------|
| Week 1 | 网站上线 | 完成基础功能 |
| Week 2 | 内容填充 | 10+工具详细页 |
| Week 3 | 流量起步 | 日UV 50+ |
| Week 4 | 联盟申请 | 3+联盟通过 |
| Month 2 | 稳定增长 | 日UV 200+ |
| Month 3 | 开始变现 | 首笔佣金 |
| Month 6 | 稳定收入 | 月入3000+ |
| Month 12 | 目标达成 | 月入10000+ |

## 注意事项

1. **联盟链接合规**：必须声明联盟关系
2. **内容原创**：评测必须基于真实使用
3. **持续更新**：AI工具迭代快，及时更新信息
4. **用户反馈**：重视用户建议，快速迭代

## 需要帮助？

随时告诉我你需要：
- 添加新工具
- 修改页面样式
- 写评测文章
- 优化SEO
- 分析数据
