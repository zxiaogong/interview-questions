import { defineUserConfig, defaultTheme } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'
// const __dirname = getDirname(import.meta.url)


export default defineUserConfig({
  plugins: [

  ],
  base: "/interview-questions/", //访问路径
  lang: 'zh-CN',
  title: '前端面试题笔记',
  description: '前端面试题笔记',
  pagePatterns: ['**/*.md', 'vuepress', '!node_modules'],
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '前端面试题',
        link: '/',
      },
    ],
    sidebar: [
      // SidebarItem
      {
        text: '前端面试题',
        link: '/',
        children: [
          {
            text: "javascript",
            link: '/javascript/',
            children: [
              // {
              //   text: "简答题",
              //   link: '/javascript/short-answer/',
              // },
              {
                text: "算法题",
                link: '/javascript/algorithm/',
              },
            ]
          },
          {
            text: "ts",
            link: '/ts/',
          },
          {
            text: "vue",
            link: '/vue/',
          },
          {
            text: "uniapp",
            link: '/uniapp/',
          },
          {
            text: "react",
            link: '/react/',
          },
          {
            text: "node",
            link: '/node/',
          },
          {
            text: "typescript",
            link: '/typescript/',
          },
          {
            text: "axios",
            link: '/axios/',
          },
          {
            text: "webpack",
            link: '/webpack/',
          },
          {
            text: "vite",
            link: '/vite/',
          },
          {
            text: "http",
            link: '/http/',
          },
          {
            text: "设计模式",
            link: '/design-patterns/',
          },
          {
            text: "工程化",
            link: '/engineering/',
          },
          {
            text: "其他",
            link: '/other/',
          },
        ],
      },
    ],

  }),

})