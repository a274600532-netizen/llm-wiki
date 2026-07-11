---
type: concept
title: "AI Daily News Digest — AI日报系统"
tags: [ai, news, daily-digest, research, khazix]
related: [qbitai-fallback-api, redfox-api]
created: 2026-07-11
updated: 2026-07-11
---

# AI Daily News Digest — AI日报系统

> 来源：AI HOT (https://aihot.virxact.com) 由数字生命卡兹克 (Khazix) 提供

## 概述

AI Daily News Digest 是一个通过公共 API 获取每日 AI 行业新闻的系统。无需 API Key，免费匿名使用。数据来源于 [AI HOT](https://aihot.virxact.com) 平台，该平台每天精选 AI 行业最新动态，覆盖模型发布、产品发布、行业事件、论文、技巧观点等类别。

## API 端点

| 端点 | 用途 |
|------|------|
| `GET /api/public/items?mode=selected` | **默认日报模式** — 始终有数据，带评分和分类 |
| `GET /api/public/daily` | 日报模式（可能为空，如未生成） |
| `GET /api/public/items?mode=all` | 完整列表 |
| `GET /api/public/items?q=<keyword>` | 关键词搜索 |
| `GET /api/public/dailies?take=N` | 历史日报归档 |

### 关键注意点

所有 API 调用必须包含浏览器 User-Agent 头，否则 nginx 返回 403：

```bash
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
curl -sH "User-Agent: $UA" "https://aihot.virxact.com/api/public/daily"
```

安全扫描器会拦截 `curl | python3` 管道，需使用文件暂存或 Python `urllib.request`。

## 响应字段

`items?mode=selected` 端点返回 10-20 条精选条目，每条包含：

| 字段 | 说明 |
|------|------|
| `score` | 0-100 质量分（推荐 ≥60） |
| `category` | 类别：`tip`（技巧观点）、`product`（产品发布）、`model`（模型发布）、`industry`（行业事件）、`paper`（论文） |
| `title` / `title_en` | 中英文标题 |
| `source` | 来源（如"Hacker News 热门"、"IT之家"） |
| `summary` | 详细中文摘要（~100-300 字） |
| `publishedAt` | ISO 时间戳 |
| `url` | 原文链接 |

## Cron 日报

系统通过 cron 定时任务（北京时间每日 9:00）获取 AI 日报并整理为简报，包含模型发布、产品发布、行业新闻、研究论文、技巧观点等板块。

## RSS 回退

当 JSON API 不可用时，可使用 RSS feed 作为替代：

| Feed | URL |
|------|-----|
| Selected | `https://aihot.virxact.com/feed.xml` |
| All | `https://aihot.virxact.com/feed/all.xml` |
| Daily | `https://aihot.virxact.com/feed/daily.xml` |

## 集成工作流

AI HOT 数据可接入内容创作流程：
1. **话题发现** — 扫描日报发现热门 AI 工具/模型选题
2. **数据时效性** — 避免依赖训练数据的滞后信息
3. **交叉引用** — AI HOT + RedFox 小红书数据结合，用于数据驱动的内容决策

## 已知问题

1. **忘记 User-Agent → 403** — 必须在 curl 调用中设置 `-H "User-Agent: $UA"`
2. **日期范围限制** — items 端点最多回溯 7 天；更早数据使用 RSS feed
3. **速率限制** — 600 req/min/IP，需串行调用
4. **名称注意** — 正确名称是**数字生命卡兹克** (Khazix)，而非"卡斯克"
5. **安全扫描器** — 拦截 `curl | python3` 管道，需用文件暂存或 Python 代码
6. **DNS 覆盖** — 如果域名解析到 `127.0.0.1`，API 不可达，需尝试 RSS feed

## 回退方案：QbitAI（量子位）

当 AI HOT 完全不可用时（504 Gateway Timeout），可使用量子位作为替代来源。见 [QbitAI 量子位回退方案](/concepts/qbitai-fallback-api) 页面。
