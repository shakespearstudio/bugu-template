const randomTopics = [
  "办公空间中的疗愈感照明设计",
  "新消费品牌总部的沉浸式访客动线",
  "女性友好办公空间的细节革命",
  "高密度城市中的自然共生办公场景",
  "从色彩心理学看品牌办公空间识别",
  "开放办公与专注办公的平衡策略",
  "低碳材料在品牌总部中的叙事价值",
  "国际化团队的跨文化空间体验设计",
  "小型办公室如何打造高级品牌感",
  "未来三年办公空间设计趋势前瞻",
]

const corePipeline = [
  {
    title: "输入选题来源",
    detail:
      "支持人工输入方向或一键随机生成10个办公空间设计选题。人工输入后自动扩展为10个可执行标题。",
  },
  {
    title: "人工审批选题",
    detail:
      "通过多选卡片审批机制，运营负责人点选进入写作环节的标题，保留人工把关权。",
  },
  {
    title: "Claude Sonnet 并行写作",
    detail:
      "对已审批标题并行调用 Claude Sonnet，按固定规范生成1500-2000字中文品牌文案。",
  },
  {
    title: "段中配图注入",
    detail:
      "在文案中部自动插入1-2张 Nano Banana 2 生成图，图像根据上下文段落实时提示词生成。",
  },
  {
    title: "质检与下载",
    detail:
      "文案与图片分别支持下载，同时显示风格一致性、AI味道检测与引用完整性评分。",
  },
]

const advancedFeatures = [
  "品牌知识库：支持上传 PDF / Word / 图片 / Logo，自动向量化并可追溯引用来源。",
  "多级审批流：编辑初审、品牌负责人终审、法务可选审，带批注和版本差异对比。",
  "A/B 版本工厂：同一标题输出两种叙事视角，自动对比完读率预测与品牌词覆盖率。",
  "渠道一键适配：长文可拆解为公众号、视频口播、小红书图文、LinkedIn 长帖。",
  "内容治理中心：统一管理禁用词、竞争品牌词、品牌语调红线、合规声明模板。",
  "绩效闭环：回收发布后的阅读数据，反向优化选题与提示词模板。",
]

const writingRules = [
  "模型固定：Claude Sonnet（不可替换）。",
  "字数：中文 1500-2000 字，段落自然，信息密度高。",
  "语气：知性女性编辑风格，聪明、善良、认真、博学，热爱室内设计与生活美学。",
  "表达：去除 AI 味道，避免套路化连接词，句长自然有呼吸感。",
  "品牌露出：自然提及品牌，不硬植入，不空喊口号。",
  "可信度：结合国内外研究与案例，提高可读性与说服力。",
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#f5f1ea_0%,_#ece6dc_40%,_#d8d3cb_100%)] p-8 text-slate-800">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="glass-card rounded-3xl border border-white/40 p-8 shadow-2xl backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Brand Content Production OS</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight">品牌内容生产线（含人工审批）设计提案</h1>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-700">
            目标是打造一个“AI 批量生产 + 人工精细审校 + 高审美体验”的完整工作流：从选题到出稿、从配图到下载都可追踪，确保质量、效率与品牌一致性同时成立。
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="glass-card rounded-2xl border border-white/40 p-6">
            <h2 className="text-xl font-semibold">1) 选题生成面板</h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
              <li>• 手动输入方向：自动扩展生成10个选题标题。</li>
              <li>• 随机参考：提供办公空间设计方向备选池（10个）。</li>
              <li>• 标题均支持“重写 / 收藏 / 拉黑相似题”。</li>
            </ul>
            <div className="mt-4 rounded-xl bg-white/60 p-4">
              <p className="text-xs uppercase tracking-wider text-slate-500">随机方向参考（10）</p>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-700">
                {randomTopics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ol>
            </div>
          </div>

          <div className="glass-card rounded-2xl border border-white/40 p-6">
            <h2 className="text-xl font-semibold">2) 可配置规范面板（System Prompt）</h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
              <li>• 提供可编辑 System Prompt 窗口，支持模板版本管理。</li>
              <li>• 可上传 PDF、图片、Logo、Word 作为“品牌参考库”。</li>
              <li>• 支持标签化管理：VI、语气、案例、禁用词、法律条款。</li>
              <li>• 每次生成自动记录调用了哪些参考资料与引用片段。</li>
            </ul>
          </div>
        </section>

        <section className="glass-card rounded-2xl border border-white/40 p-6">
          <h2 className="text-2xl font-semibold">3) 全链路生产流程</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-5">
            {corePipeline.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-white/50 bg-white/70 p-4">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Step {index + 1}</p>
                <h3 className="mt-2 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="glass-card rounded-2xl border border-white/40 p-6">
            <h2 className="text-xl font-semibold">4) 写作规范（Claude Sonnet）</h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
              {writingRules.map((rule) => (
                <li key={rule}>• {rule}</li>
              ))}
            </ul>
          </div>

          <div className="glass-card rounded-2xl border border-white/40 p-6">
            <h2 className="text-xl font-semibold">5) 补充的成熟功能（建议纳入）</h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
              {advancedFeatures.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="glass-card rounded-2xl border border-white/40 p-6">
          <h2 className="text-xl font-semibold">6) UI/交互方向（磨砂玻璃 + 精致流程）</h2>
          <ul className="mt-4 grid gap-2 text-sm leading-7 text-slate-700 md:grid-cols-2">
            <li>• 视觉：暖色大底图 + 半透明卡片 + 细线边框 + 小图标体系。</li>
            <li>• 流程：左侧步骤导航，右侧内容工作区，状态清晰（待审/已审/生成中/完成）。</li>
            <li>• 审批：卡片式批注与对比，支持“同屏查看原文/改写稿/配图”。</li>
            <li>• 反馈：并行任务使用时间轴与进度环，减少等待焦虑。</li>
            <li>• 下载：文案导出 Markdown/Docx，图片单独下载并附 alt 文案。</li>
            <li>• 体验：所有关键按钮给二次确认与撤销，保证流程可控且优雅。</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
