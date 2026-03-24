export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <title>AI编程教育导航 - 找到最适合你的AI编程学习工具</title>
        <meta name="description" content="精选AI编程教育工具，帮助初学者和开发者快速找到适合自己的AI辅助编程学习平台。Cursor、GitHub Copilot、Codeium等工具评测与推荐。" />
      </head>
      <body className="bg-gray-50">{children}</body>
    </html>
  )
}
