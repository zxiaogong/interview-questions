<template><div><h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> vue</h1>
<h2 id="props-data-优先级" tabindex="-1"><a class="header-anchor" href="#props-data-优先级" aria-hidden="true">#</a> props data 优先级</h2>
<ul>
<li>props ===&gt; methods ===&gt; data ===&gt; computep (源码)</li>
</ul>
<h2 id="computed、watch-区别" tabindex="-1"><a class="header-anchor" href="#computed、watch-区别" aria-hidden="true">#</a> computed、watch 区别</h2>
<ul>
<li>computed是计算属性，支持缓存，当依赖的属性改变时会重新进行计算并返回</li>
<li>watch是监听属性，不支持缓存，指定的数据或者路由改变了才会执行</li>
</ul>
<h2 id="computed、methods-区别" tabindex="-1"><a class="header-anchor" href="#computed、methods-区别" aria-hidden="true">#</a> computed、methods 区别</h2>
<ul>
<li>computed 定义的成员可以像访问属性一样进行访问</li>
<li>methods 没有缓存，computed是响应式，methods不是响应式，methods定义的成员必须以函数形式调用</li>
</ul>
<h2 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> ref</h2>
<ul>
<li>获取dom</li>
</ul>
<h2 id="vue-router实现思路" tabindex="-1"><a class="header-anchor" href="#vue-router实现思路" aria-hidden="true">#</a> vue-router实现思路</h2>
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
<h2 id="router常用路由模式" tabindex="-1"><a class="header-anchor" href="#router常用路由模式" aria-hidden="true">#</a> router常用路由模式</h2>
<ul>
<li>hash</li>
<li>hishtory</li>
</ul>
<h2 id="说说你对slot的理解-slot使用场景有哪些" tabindex="-1"><a class="header-anchor" href="#说说你对slot的理解-slot使用场景有哪些" aria-hidden="true">#</a> 说说你对slot的理解？slot使用场景有哪些？</h2>
<ul>
<li>slot是vue框架中的插槽，可以理解为占位符，vue2.1.0 以上版本才支持</li>
<li>slot能让用户更好的拓展组件，复用组件和对组件做一些定制化的处理</li>
<li>插槽有三种类型： 默认插槽 （只允许有一个插入位置）
具名插槽（可以有多个插入位置，通过名字来识别对应的插槽）
作用域插槽（子组件提供数据，父组件使用）</li>
<li>特点：父组件决定结构和数据（默认插槽、具名插槽的）。 子组件决定数据，父组件决定结构（作用域插槽）。</li>
<li>场景：布局、表格列表、下拉框、弹窗等等</li>
</ul>
</div></template>


