'use client';

import { useState } from 'react';
import { tools, categories, pricingLabels } from '@/data/tools';
import { 
  Code2, Bot, Globe, Wand2, LayoutGrid, ExternalLink, 
  Check, X, Sparkles, Star, Users 
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
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6" />
            <span className="text-primary-100 font-medium">AI编程教育导航</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            找到最适合你的<br />
            <span className="text-primary-100">AI编程学习工具</span>
          </h1>
          <p className="text-lg text-primary-100 max-w-2xl">
            精选10+款AI编程教育工具，从入门到进阶，帮助你用AI辅助学习编程，
            提升开发效率。每款工具都经过实测，附详细评测和使用建议。
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Star className="w-4 h-4" />
              <span className="text-sm">精选工具</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Users className="w-4 h-4" />
              <span className="text-sm">适合初学者</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Check className="w-4 h-4" />
              <span className="text-sm">实测推荐</span>
            </div>
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <div className="sticky top-0 bg-white border-b z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map(cat => {
              const Icon = iconMap[cat.icon];
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    activeCategory === cat.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map(tool => (
            <div
              key={tool.id}
              className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedTool(tool)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 font-bold text-lg">
                      {tool.name[0]}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{tool.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        tool.pricing === 'free' ? 'bg-green-100 text-green-700' :
                        tool.pricing === 'freemium' ? 'bg-blue-100 text-blue-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {pricingLabels[tool.pricing]}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {tool.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {tool.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-sm text-gray-500">查看详情 →</span>
                  <a
                    href={tool.affiliateUrl || tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary-600 hover:text-primary-700 text-sm font-medium"
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

        {/* Quick Guide */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">🎯 新手推荐路线</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl mb-3">1️⃣</div>
              <h3 className="font-bold mb-2">零基础入门</h3>
              <p className="text-gray-300 text-sm">推荐：Replit 或 Bolt.new<br />无需配置环境，浏览器直接编程</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl mb-3">2️⃣</div>
              <h3 className="font-bold mb-2">提升效率</h3>
              <p className="text-gray-300 text-sm">推荐：Cursor 或 Trae<br />AI辅助写代码，学习最佳实践</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl mb-3">3️⃣</div>
              <h3 className="font-bold mb-2">快速开发</h3>
              <p className="text-gray-300 text-sm">推荐：Lovable 或 v0.dev<br />文字描述直接生成应用</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2025 AI编程教育导航 | 帮助开发者找到最适合的AI工具</p>
          <p className="text-sm mt-2">本站部分链接为联盟链接，通过本站购买可能获得佣金，但不影响你的购买价格</p>
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
