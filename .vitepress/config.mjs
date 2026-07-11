import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Anime LLM Wiki',
  description: '二次元知识库 — 番剧、角色、概念深度分析',
  base: '/llm-wiki/',
  srcDir: 'docs',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,

  themeConfig: {
    search: { provider: 'local' },

    nav: [
      { text: '首页', link: '/' },
      { text: '实体', link: '/entities/' },
      { text: '概念', link: '/concepts/' },
      { text: '数据源', link: '/sources/' },
    ],

    sidebar: {
      '/entities/': [
        {
          text: '番剧',
          items: [
            { text: '葬送的芙莉莲', link: '/entities/sousou-no-frieren' },
            { text: 'Re:Zero 第四季', link: '/entities/re-zero-4th-season' },
            { text: '钢之炼金术师', link: '/entities/钢之炼金术师-fullmetal-alchemist' },
            { text: 'Steel Ball Run', link: '/entities/steel-ball-run' },
            { text: 'Steins;Gate', link: '/entities/steins-gate' },
            { text: '电锯人 蕾塞篇', link: '/entities/chainsaw-man-reze-movie' },
            { text: '进击的巨人', link: '/entities/shingeki-no-kyojin' },
            { text: '银魂°', link: '/entities/gintama-银魂' },
            { text: 'Hunter x Hunter', link: '/entities/hunter-x-hunter-2011' },
          ]
        },
        {
          text: '角色',
          items: [
            { text: '芙莉莲', link: '/entities/frieren-芙莉莲' },
            { text: '菜月昴', link: '/entities/菜月昴-subaru-natsuki' },
            { text: '雷姆', link: '/entities/雷姆-rem' },
            { text: '爱德华·艾尔利克', link: '/entities/爱德华艾尔利克' },
            { text: '阿尔冯斯·艾尔利克', link: '/entities/阿尔冯斯艾尔利克' },
            { text: '冈部伦太郎', link: '/entities/rintarou-okabe' },
            { text: 'Denji', link: '/entities/denji' },
            { text: 'Makima', link: '/entities/makima' },
            { text: '艾伦·耶格尔', link: '/entities/eren-yeager-艾伦耶格尔' },
            { text: '坂田银时', link: '/entities/坂田银时-gintoki-sakata' },
            { text: '小杰·富力士', link: '/entities/gon-freecss-小杰富力士' },
          ]
        },
        {
          text: '组织与地点',
          items: [
            { text: '万事屋', link: '/entities/万事屋-yorozuya' },
            { text: '调查兵团', link: '/entities/survey-corps-调查兵团' },
            { text: '贤者之塔', link: '/entities/贤者之塔-pleiades-watchtower' },
            { text: '未来道具研究所', link: '/entities/future-gadget-laboratory' },
          ]
        }
      ],
      '/concepts/': [
        {
          text: '概念',
          items: [
            { text: '等价交换', link: '/concepts/等价交换' },
            { text: '人体炼成', link: '/concepts/人体炼成' },
            { text: '长寿种的时间感知', link: '/concepts/长寿种的时间感知-long-lived-time-perception' },
            { text: '冒险后的叙事', link: '/concepts/冒险后的叙事-post-adventure-narrative' },
            { text: '暴食权能', link: '/concepts/暴食权能-authority-of-gluttony' },
            { text: '恶魔猎人', link: '/concepts/恶魔猎人-devil-hunter' },
            { text: '猎人', link: '/concepts/猎人-hunter' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/a274600532-netizen/llm-wiki' }
    ],

    footer: {
      message: 'Powered by LLM Wiki & VitePress',
      copyright: 'Copyright © 2026 Anime LLM Wiki'
    }
  }
})
