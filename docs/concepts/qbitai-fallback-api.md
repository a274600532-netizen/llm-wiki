---
type: concept
title: "QbitAI (量子位) — AI日报回退方案"
tags: [ai, news, qbitai, fallback, research]
related: [ai-daily-news-digest]
created: 2026-07-11
updated: 2026-07-11
---

# QbitAI (量子位) WordPress API

> AI Daily News Digest 回退方案 — 当 AI HOT 不可用时使用

## 概述

QbitAI（量子位）是一个中文 AI 新闻网站，提供免费的 WordPress REST API。当 AI HOT（aihot.virxact.com）返回 504 Gateway Timeout 或空响应时，作为替代的 AI 新闻来源。

**关键区别**：QbitAI 是原始文章流，而非精选日报 — 需手动筛选和整理内容。

## API 端点

```
GET https://www.qbitai.com/wp-json/wp/v2/posts?per_page=N&offset=M
```

无需认证。标准 WordPress REST API。

## 参数

| 参数 | 说明 |
|------|------|
| `per_page` | 每页条目数（最大 100，默认 10） |
| `offset` | 分页偏移量 |
| `search` | 全文搜索 |

## 响应字段

| 字段 | 类型 | 内容 |
|------|------|------|
| `title.rendered` | string | 文章标题（HTML 实体编码） |
| `date_gmt` | ISO 8601 | GMT 发布时间 |
| `excerpt.rendered` | string | 带 HTML 标签的文章摘要 |
| `content.rendered` | string | 完整文章 HTML 正文 |
| `link` | string | 文章永久链接 |

## Python 示例

```python
import json, urllib.request, re

url = "https://www.qbitai.com/wp-json/wp/v2/posts?per_page=10"
req = urllib.request.Request(url, headers={
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
    'Accept': 'application/json'
})

with urllib.request.urlopen(req, timeout=10) as resp:
    data = json.loads(resp.read().decode('utf-8'))

for post in data:
    title = post.get('title', {}).get('rendered', '')
    date_gmt = post.get('date_gmt', '')
    excerpt = re.sub(r'<[^>]+>', '', post.get('excerpt', {}).get('rendered', ''))[:120]
    link = post.get('link', '')
    print(f"• {title}\n  {date_gmt}\n  {excerpt}")
```

## 内容类别（观测到的模式）

QbitAI 覆盖以下类别：
- **模型发布** — 新 LLM/vLM 发布、开源模型
- **AI 融资** — 中国 AI 创业公司投资轮次
- **研究突破** — AI 在科学领域的应用（超导、生物、药物发现）
- **行业产品** — AI 工具、机器人、自动驾驶
- **国际新闻** — OpenAI、Anthropic、Google DeepMind 的中文编译/分析
- **会议报道** — WAIC（世界人工智能大会）等

## 已知文章示例（2026-07-02 ~ 2026-07-04）

1. AI发现4种全新超导体（ElementsClaw by 阿里达摩院）
2. 美团LongCat-2.0：首个纯国产算力万亿参数模型
3. 百曜科技 AURA CellOS：LLM-JEPA世界模型进细胞
4. Claude Fable 5回归差评潮
5. 光象科技数亿元天使轮融资
6. AReaL 2.0开源RL基础设施
7. WorldClaw × 百度智能云合作
8. WAIC 2026算力议题预热

## 注意事项

1. **HTML 内容** — content/excerpt 含 HTML 标签，显示前需去除
2. **无明确分类** — WordPress 分类功能未被充分利用，需手动识别类别
3. **纯中文** — 所有内容均为中文
4. **无速率限制** — 未观察到限制，但建议合理使用（< 10 req/min）
5. **非精选摘要** — 与 AI HOT 不同，需自行筛选和整理
