export interface Tool {
  id: string;
  name: string;
  description: string;
  category: 'editor' | 'assistant' | 'platform' | 'generator';
  tags: string[];
  pricing: 'free' | 'freemium' | 'paid';
  url: string;
  affiliateUrl?: string;
  features: string[];
  pros: string[];
  cons: string[];
  bestFor: string[];
  logo?: string;
}

export const tools: Tool[] = [
  {
    id: 'cursor',
    name: 'Cursor',
    description: '基于VS Code的AI代码编辑器，内置GPT-4，支持代码生成、重构、解释',
    category: 'editor',
    tags: ['AI编辑器', '代码生成', 'GPT-4', '适合初学者'],
    pricing: 'freemium',
    url: 'https://cursor.com',
    affiliateUrl: 'https://cursor.com',
    features: ['AI代码补全', '自然语言生成代码', '代码解释', 'Bug修复', '代码重构'],
    pros: ['界面熟悉(VS Code基础)', 'AI能力强大', '中文支持好', '有免费额度'],
    cons: ['高级功能需付费', '需要一定编程基础'],
    bestFor: ['有一定基础的初学者', '想提升效率的开发者', '全栈开发者']
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'GitHub推出的AI编程助手，集成在主流IDE中，实时提供代码建议',
    category: 'assistant',
    tags: ['代码补全', 'IDE插件', '业界标准', '学生免费'],
    pricing: 'paid',
    url: 'https://github.com/features/copilot',
    affiliateUrl: 'https://github.com/features/copilot',
    features: ['实时代码建议', '整函数生成', '注释生成代码', '多语言支持', '测试生成'],
    pros: ['与IDE深度集成', '代码质量高', '学生认证免费', '支持多种语言'],
    cons: ['需要付费订阅', '偶尔有隐私顾虑', '对中文注释支持一般'],
    bestFor: ['专业开发者', '计算机专业学生', '团队开发']
  },
  {
    id: 'codeium',
    name: 'Codeium',
    description: '免费的AI代码补全工具，Copilot的开源替代品，个人使用完全免费',
    category: 'assistant',
    tags: ['免费', '代码补全', '开源', '轻量级'],
    pricing: 'free',
    url: 'https://codeium.com',
    affiliateUrl: 'https://codeium.com',
    features: ['无限代码补全', '70+语言支持', 'IDE插件', '聊天功能', '代码解释'],
    pros: ['完全免费', '速度快', '隐私保护好', '支持中文'],
    cons: ['功能比Copilot简单', '企业版才收费'],
    bestFor: ['预算有限的初学者', '个人开发者', '学生']
  },
  {
    id: 'replit',
    name: 'Replit',
    description: '在线编程平台，内置AI助手Ghostwriter，无需配置环境即可编程',
    category: 'platform',
    tags: ['在线IDE', '零配置', '协作编程', '教育友好'],
    pricing: 'freemium',
    url: 'https://replit.com',
    affiliateUrl: 'https://replit.com',
    features: ['在线运行代码', 'AI代码生成', '实时协作', '一键部署', '50+语言支持'],
    pros: ['无需安装', '适合教学', '社区活跃', '免费版够用'],
    cons: ['高级功能贵', '国内访问慢', '大项目性能有限'],
    bestFor: ['纯初学者', '编程教学', '快速原型', '协作开发']
  },
  {
    id: 'trae',
    name: 'Trae',
    description: '字节跳动推出的AI编程工具，支持Claude和GPT模型，免费使用',
    category: 'editor',
    tags: ['国产', '免费', 'Claude', '字节跳动'],
    pricing: 'free',
    url: 'https://trae.ai',
    affiliateUrl: 'https://trae.ai',
    features: ['多模型支持', 'Builder模式', '中文优化', '免费Claude', '代码生成'],
    pros: ['完全免费', '支持Claude 3.5', '中文体验好', 'Builder模式强大'],
    cons: ['相对较新', '生态不如Cursor'],
    bestFor: ['中文用户', '想用Claude的开发者', '预算有限的用户']
  },
  {
    id: 'codegeex',
    name: 'CodeGeeX',
    description: '智谱AI推出的代码生成模型，中文编程助手，开源免费',
    category: 'assistant',
    tags: ['国产', '开源', '中文优化', '免费'],
    pricing: 'free',
    url: 'https://codegeex.cn',
    affiliateUrl: 'https://codegeex.cn',
    features: ['代码生成', '代码翻译', '注释生成', '代码补全', '多语言'],
    pros: ['中文支持极佳', '开源免费', '国内访问快', '代码解释清晰'],
    cons: ['功能相对简单', '模型能力不如GPT-4'],
    bestFor: ['中文开发者', '初学者', '国内用户']
  },
  {
    id: 'tongyi-lingma',
    name: '通义灵码',
    description: '阿里云推出的AI编程助手，基于通义大模型，国内访问快',
    category: 'assistant',
    tags: ['国产', '阿里云', '中文优化', '企业友好'],
    pricing: 'free',
    url: 'https://tongyi.aliyun.com/lingma',
    affiliateUrl: 'https://tongyi.aliyun.com/lingma',
    features: ['代码补全', '自然语言生成', '代码解释', '单元测试', '代码评审'],
    pros: ['国内访问快', '中文理解好', '企业版功能全', '免费使用'],
    cons: ['个人版功能有限', '生态相对封闭'],
    bestFor: ['国内开发者', '使用阿里云的用户', '企业团队']
  },
  {
    id: 'lovable',
    name: 'Lovable',
    description: 'AI生成完整应用程序，从设计到代码一键生成，无需编程基础',
    category: 'generator',
    tags: ['无代码', '全栈生成', '设计到代码', '新手友好'],
    pricing: 'freemium',
    url: 'https://lovable.dev',
    affiliateUrl: 'https://lovable.dev',
    features: ['文字生成应用', '自动设计UI', '生成React代码', '一键部署', '迭代修改'],
    pros: ['无需编程基础', '生成完整应用', '可视化编辑', '快速原型'],
    cons: ['复杂逻辑有限制', '定制性不如手写代码', '需要付费解锁高级功能'],
    bestFor: ['非程序员', '产品经理', '快速验证想法', '前端初学者']
  },
  {
    id: 'v0',
    name: 'v0.dev',
    description: 'Vercel推出的AI生成UI组件工具，基于Shadcn UI，生成React代码',
    category: 'generator',
    tags: ['UI生成', 'React', 'Vercel', '组件库'],
    pricing: 'freemium',
    url: 'https://v0.dev',
    affiliateUrl: 'https://v0.dev',
    features: ['文字生成UI', '生成React代码', '基于Tailwind', '可编辑调整', '一键复制'],
    pros: ['生成质量高', '代码规范', '免费额度充足', '与Next.js配合好'],
    cons: ['主要生成UI', '复杂交互需手动', '需要React基础'],
    bestFor: ['前端开发者', 'React用户', '需要快速UI原型']
  },
  {
    id: 'bolt',
    name: 'Bolt.new',
    description: 'StackBlitz推出的AI全栈开发工具，浏览器中完成从开发到部署',
    category: 'platform',
    tags: ['全栈开发', '浏览器IDE', '一键部署', '零配置'],
    pricing: 'freemium',
    url: 'https://bolt.new',
    affiliateUrl: 'https://bolt.new',
    features: ['AI生成项目', '浏览器运行Node.js', '一键部署', '支持多种框架', '实时预览'],
    pros: ['无需本地环境', 'AI生成完整项目', '部署简单', '支持主流框架'],
    cons: ['高级功能付费', '大项目性能受限', '依赖网络'],
    bestFor: ['快速原型', '学习新技术', '演示项目', '无服务器开发']
  }
];

export const categories = [
  { id: 'all', name: '全部工具', icon: 'LayoutGrid' },
  { id: 'editor', name: 'AI编辑器', icon: 'Code2' },
  { id: 'assistant', name: '编程助手', icon: 'Bot' },
  { id: 'platform', name: '在线平台', icon: 'Globe' },
  { id: 'generator', name: '代码生成器', icon: 'Wand2' }
];

export const pricingLabels: Record<string, string> = {
  free: '完全免费',
  freemium: '免费增值',
  paid: '付费订阅'
};
