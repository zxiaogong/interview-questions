export const data = JSON.parse("{\"key\":\"v-a686174a\",\"path\":\"/webpack/\",\"title\":\"webpack\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1681043666000,\"contributors\":[{\"name\":\"zxiaogong\",\"email\":\"1120197042@qq.com\",\"commits\":1}]},\"filePathRelative\":\"webpack/index.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
