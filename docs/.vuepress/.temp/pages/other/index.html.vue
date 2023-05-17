<template><div><h1 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h1>
<h2 id="对spa-单页应用-的理解" tabindex="-1"><a class="header-anchor" href="#对spa-单页应用-的理解" aria-hidden="true">#</a> 对spa（单页应用）的理解</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>spa是一种通过js动态加载内容的web应用设计模式，在多页mpa中每次用户请求一个新页面时，都需要重新加载并刷新所有资源。
在spa中，只有在用户第一次访问时需要加载整个页面和资源，之后用户与应用程序交互时，只需要局部更新页面内容即可。

优点： 具有桌面应用的即时性、网站可移植性、可访问性
      良好的用户体体验，内容改变不需要加载整个页面
      良好的前后端分离

缺点： 不利于搜索引擎抓取
      首屏渲染较慢
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何给spa做seo" tabindex="-1"><a class="header-anchor" href="#如何给spa做seo" aria-hidden="true">#</a> 如何给spa做seo</h2>
<ul>
<li>ssr服务端渲染</li>
<li>静态化：
1.通过程序将动态页面抓取保存为静态
2. 通过 URL Rewrite（通过web服务器内部模块按照一定规则将外部的url请求转化为内部的文件地址）</li>
<li>使用 Pthantomjs针对爬虫做处理，配置nginx判断访问来源是否为爬虫。若是，则转发到一个node server，再通过phantom解析完整html返回给爬虫</li>
</ul>
</div></template>


