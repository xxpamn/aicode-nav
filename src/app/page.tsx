'use client';

import { useState } from 'react';
import { tools, categories, pricingLabels } from '@/data/tools';
import { 
  Code2, Bot, Globe, Wand2, LayoutGrid, ExternalLink, 
  Check, X, Sparkles, Star, Users, Zap, TrendingUp, Award,
  ArrowRight, Play, BookOpen, Lightbulb, Target
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutGrid,
  Code2,
  Bot,
  Globe,
  Wand2
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedTool, setSelectedTool] = useState<typeof tools[0] | null>(null);

  const filteredTools = activeCategory === 'all' 
    ? tools 
    : tools.filter(t => t.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="relative overflow-hidden bg-slate-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-slate-300">2025年最新AI编程工具精选</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            用 AI 加速你的
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              编程学习之旅
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
            精选 10+ 款最适合初学者的 AI 编程工具，从入门到进阶，
            实测对比，帮你找到最适合自己的学习伙伴。
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#tools" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full font-medium hover:bg-slate-100 transition-colors">
              浏览工具
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#guide" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20">
              <Play className="w-4 h-4" />
              新手指南
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
            <div>
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-sm text-slate-400">精选工具</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">5</div>
              <div className="text-sm text-slate-400">分类覆盖</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-slate-400">实测推荐</div>
            </div>
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <div id="tools" className="sticky top-0 bg-white/80 backdrop-blur-md border-b z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-800">工具分类</h2>
            <span className="text-sm text-slate-500">共 {filteredTools.length} 款工具</span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map(cat => {
              const Icon = iconMap[cat.icon];
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/25'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, index) => (
            <div
              key={tool.id}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => setSelectedTool(tool)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl flex items-center justify-center text-slate-700 font-bold text-xl border border-slate-200 group-hover:scale-105 transition-transform">
                      {tool.name[0]}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">{tool.name}</h3>
                      <span className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-medium mt-1 ${
                        tool.pricing === 'free' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                        tool.pricing === 'freemium' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                        'bg-purple-50 text-purple-700 border border-purple-200'
                      }`}>
                        {tool.pricing === 'free' && <Zap className="w-3 h-3" />}
                        {pricingLabels[tool.pricing]}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-5 line-clamp-2 leading-relaxed">
                  {tool.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {tool.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs bg-slate-50 text-slate-600 px-3 py-1.5 rounded-lg border border-slate-100">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                  <span className="text-sm text-slate-500 font-medium group-hover:text-slate-700 transition-colors">查看详情 →</span>
                  <a
                    href={tool.affiliateUrl || tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-slate-900 hover:text-blue-600 text-sm font-semibold transition-colors"
                    onClick={e => e.stopPropagation()}
                  >
                    访问网站
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Path Guide */}
        <div id="guide" className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4">
              <Target className="w-4 h-4" />
              新手路线
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">三步开启AI编程之旅</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">根据你的基础，选择最适合的起点，用AI工具加速学习</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">1</div>
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">零基础入门</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">无需配置环境，打开浏览器就能编程。适合完全没接触过代码的新手。</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-bold text-slate-700 text-sm">R</div>
                  <div>
                    <div className="font-medium text-slate-900">Replit</div>
                    <div className="text-xs text-slate-500">在线编程环境</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-bold text-slate-700 text-sm">B</div>
                  <div>
                    <div className="font-medium text-slate-900">Bolt.new</div>
                    <div className="text-xs text-slate-500">AI生成完整项目</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all group">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">2</div>
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">提升效率</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">用AI辅助写代码，学习最佳实践。适合有一定基础想提速的开发者。</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-bold text-slate-700 text-sm">C</div>
                  <div>
                    <div className="font-medium text-slate-900">Cursor</div>
                    <div className="text-xs text-slate-500">AI代码编辑器</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-bold text-slate-700 text-sm">T</div>
                  <div>
                    <div className="font-medium text-slate-900">Trae</div>
                    <div className="text-xs text-slate-500">免费AI编程助手</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all group">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">3</div>
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">快速开发</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">文字描述直接生成应用。适合想快速验证想法或做原型的开发者。</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-bold text-slate-700 text-sm">L</div>
                  <div>
                    <div className="font-medium text-slate-900">Lovable</div>
                    <div className="text-xs text-slate-500">AI生成完整应用</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-bold text-slate-700 text-sm">v</div>
                  <div>
                    <div className="font-medium text-slate-900">v0.dev</div>
                    <div className="text-xs text-slate-500">AI生成UI组件</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-blue-400" />
                <span className="text-white font-bold text-lg">AI编程教育导航</span>
              </div>
              <p className="text-sm leading-relaxed mb-4 max-w-md">
                精选AI编程教育工具，帮助初学者和开发者快速找到适合自己的AI辅助编程学习平台。
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">工具分类</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">AI编辑器</a></li>
                <li><a href="#" className="hover:text-white transition-colors">编程助手</a></li>
                <li><a href="#" className="hover:text-white transition-colors">在线平台</a></li>
                <li><a href="#" className="hover:text-white transition-colors">代码生成器</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">关于</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">关于我们</a></li>
                <li><a href="#" className="hover:text-white transition-colors">提交工具</a></li>
                <li><a href="#" className="hover:text-white transition-colors">联系方式</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2025 AI编程教育导航. All rights reserved.</p>
            <p className="text-xs text-slate-500">本站部分链接为联盟链接，通过本站购买可能获得佣金，但不影响你的购买价格</p>
          </div>
        </div>
      </footer>

      {/* Tool Detail Modal */}
      {selectedTool && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedTool(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 font-bold text-2xl">
                    {selectedTool.name[0]}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{selectedTool.name}</h2>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      selectedTool.pricing === 'free' ? 'bg-green-100 text-green-700' :
                      selectedTool.pricing === 'freemium' ? 'bg-blue-100 text-blue-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {pricingLabels[selectedTool.pricing]}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedTool(null)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <p className="text-gray-600 mb-6">{selectedTool.description}</p>

              <div className="mb-6">
                <h3 className="font-bold mb-3">✨ 核心功能</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedTool.features.map(f => (
                    <span key={f} className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-bold mb-3 text-green-700">👍 优点</h3>
                  <ul className="space-y-2">
                    {selectedTool.pros.map(p => (
                      <li key={p} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-3 text-red-700">👎 缺点</h3>
                  <ul className="space-y-2">
                    {selectedTool.cons.map(c => (
                      <li key={c} className="flex items-start gap-2">
                        <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                        <span className="text-sm">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold mb-3">🎯 最适合</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedTool.bestFor.map(b => (
                    <span key={b} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={selectedTool.affiliateUrl || selectedTool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-primary-600 text-white py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors"
              >
                访问 {selectedTool.name} 官网
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
