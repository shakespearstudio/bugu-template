# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> 晓蓓，这是小蚂蚁所有新项目的标准起点。不要改技术栈，不要自己发挥。

---

## 这个模板是什么

bugu-template — A 轻量版标准框架。每次新项目从这里生成，不从零搭。
使用前：把 `bugu-template` 改成项目名，填 `.env.local`，就能跑。

---

## 技术栈（固定，不换）

| 层 | 选型 |
|----|------|
| 框架 | Next.js 15 (App Router + TypeScript) |
| 样式 | Tailwind CSS |
| 组件 | Shadcn UI（用 `npx shadcn@latest add` 按需加组件） |
| 动效 | Framer Motion（按需加 Aceternity 单组件） |
| 数据库 | Supabase（含 Auth + pgvector） |
| AI | Anthropic SDK（直接调，不过 LangChain） |
| Embedding | Voyage AI（需要 RAG 时才用） |
| 部署 | Docker + 阿里云新加坡 1Panel |

---

## 本地启动

```bash
# 复制环境变量
cp .env.example .env.local
# 填入 SUPABASE_URL、SUPABASE_ANON_KEY、ANTHROPIC_API_KEY

# 安装依赖并启动
npm install
npm run dev
```

开发时直接 `npm run dev`，不用 Docker。Docker 只在准备部署时用。

---

## 目录说明

```
app/
  layout.tsx          # 全局布局，改标题和字体
  page.tsx            # 首页，从这里开始写
  globals.css         # 全局样式
  api/chat/route.ts   # AI 对话接口（流式），已接好 Anthropic SDK

lib/
  anthropic.ts        # Anthropic 客户端（服务端专用）
  supabase.ts         # Supabase 客户端（浏览器端）
  supabase.server.ts  # Supabase 客户端（服务端/API Route）
  utils.ts            # cn() 工具函数，Shadcn 必须

components/ui/        # Shadcn 组件放这里
```

---

## 加 Shadcn 组件

```bash
npx shadcn@latest init      # 第一次初始化
npx shadcn@latest add button
npx shadcn@latest add input
```

---

## 部署到新加坡

```bash
# 本地验证
docker compose up --build

# 服务器上
docker compose up -d
```

新网站必须通过 1Panel 创建站点，绑域名、开 HTTPS，不要直接写 nginx 配置。

部署后健康检查：
```bash
curl -s -o /dev/null -w "%{http_code}" https://你的域名
```

---

## Key 安全

- `ANTHROPIC_API_KEY`、`VOYAGE_API_KEY`：只在服务端用，绝不加 `NEXT_PUBLIC_` 前缀
- `NEXT_PUBLIC_SUPABASE_*`：前端可读，但 Supabase 的 RLS 策略保证安全
- `.env.local` 已在 `.gitignore`，不会提交

---

*bugu-template · 最后更新：2026-04-26 晓蓓*
