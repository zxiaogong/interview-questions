<template><div><h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> vue</h1>
<h4 id="props-data-优先级" tabindex="-1"><a class="header-anchor" href="#props-data-优先级" aria-hidden="true">#</a> props data 优先级</h4>
<ul>
<li>props ===&gt; methods ===&gt; data ===&gt; computep (源码)</li>
</ul>
<h4 id="computed、watch-区别" tabindex="-1"><a class="header-anchor" href="#computed、watch-区别" aria-hidden="true">#</a> computed、watch 区别</h4>
<ul>
<li>computed是计算属性，支持缓存，当依赖的属性改变时会重新进行计算并返回</li>
<li>watch是监听属性，不支持缓存，指定的数据或者路由改变了才会执行</li>
</ul>
<h4 id="computed、methods-区别" tabindex="-1"><a class="header-anchor" href="#computed、methods-区别" aria-hidden="true">#</a> computed、methods 区别</h4>
<ul>
<li>computed 定义的成员可以像访问属性一样进行访问</li>
<li>methods 没有缓存，computed是响应式，methods不是响应式，methods定义的成员必须以函数形式调用</li>
</ul>
<h4 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> ref</h4>
<ul>
<li>获取dom</li>
</ul>
<h4 id="vue-router实现思路" tabindex="-1"><a class="header-anchor" href="#vue-router实现思路" aria-hidden="true">#</a> vue-router实现思路</h4>
<ul>
<li>
<ol>
<li>每个组件都能够使用 this.$router this.$route (利用minx混入)</li>
</ol>
</li>
<li>
<ol start="2">
<li>初始化路由模式 hash history,并监听变化</li>
</ol>
</li>
<li>
<ol start="3">
<li>创建路由表</li>
</ol>
</li>
</ul>
<h4 id="router常用路由模式" tabindex="-1"><a class="header-anchor" href="#router常用路由模式" aria-hidden="true">#</a> router常用路由模式</h4>
<ul>
<li>hash</li>
<li>hishtory</li>
</ul>
<h4 id="说说你对slot的理解" tabindex="-1"><a class="header-anchor" href="#说说你对slot的理解" aria-hidden="true">#</a> ：说说你对slot的理解？</h4>
<ul>
<li>插槽可以理解为占位符，vue2.1.0 以上版本才支持</li>
<li>插槽有三种类型： 默认插槽、具名插槽（指定插槽名）、作用域插槽（子组件提供数据，父组件使用）</li>
</ul>
<h4 id="slot使用场景有哪些" tabindex="-1"><a class="header-anchor" href="#slot使用场景有哪些" aria-hidden="true">#</a> slot使用场景有哪些？</h4>
<ul>
<li>可以更好的拓展组件，更好的复用组件，并进行定制化处理</li>
<li>场景：布局组件、列表组件、下拉组件、弹窗</li>
</ul>
</div></template>


