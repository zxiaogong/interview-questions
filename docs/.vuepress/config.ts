import { defineUserConfig, defaultTheme } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'
// const __dirname = getDirname(import.meta.url)


export default defineUserConfig({
  plugins: [
   
  ],
  base:"/interview-questions/", //访问路径
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
        children:[
          {
            text:"javascript",
            link: '/javascript/',
          },
          {
            text:"react",
            link: '/react/',
          },
        ],
      },
    ],
    
  }),
  
})