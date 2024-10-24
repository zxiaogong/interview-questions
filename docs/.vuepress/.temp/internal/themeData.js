export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"前端面试题\",\"link\":\"/\"}],\"sidebar\":[{\"text\":\"前端面试题\",\"link\":\"/\",\"children\":[{\"text\":\"javascript\",\"link\":\"/javascript/\",\"children\":[{\"text\":\"算法题\",\"link\":\"/javascript/algorithm/\"}]},{\"text\":\"ts\",\"link\":\"/ts/\"},{\"text\":\"vue\",\"link\":\"/vue/\"},{\"text\":\"uniapp\",\"link\":\"/uniapp/\"},{\"text\":\"react\",\"link\":\"/react/\"},{\"text\":\"node\",\"link\":\"/node/\"},{\"text\":\"typescript\",\"link\":\"/typescript/\"},{\"text\":\"webpack\",\"link\":\"/webpack/\"},{\"text\":\"vite\",\"link\":\"/vite/\"},{\"text\":\"http\",\"link\":\"/http/\"},{\"text\":\"设计模式\",\"link\":\"/design-patterns/\"},{\"text\":\"工程化\",\"link\":\"/engineering/\"},{\"text\":\"其他\",\"link\":\"/other/\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
