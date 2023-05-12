<template><div><h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> vue</h1>
<h4 id="props-data-优先级" tabindex="-1"><a class="header-anchor" href="#props-data-优先级" aria-hidden="true">#</a> props data 优先级</h4>
<ul>
<li>props ===&gt; methods ===&gt; data ===&gt; computep (源码)</li>
</ul>
<h4 id="computed、watch-区别" tabindex="-1"><a class="header-anchor" href="#computed、watch-区别" aria-hidden="true">#</a> computed、watch 区别</h4>
<ul>
<li>computed是计算某个属性的改变，如果一个值变了，计算属性会监听到并进行返回</li>
<li>watch是监听，指定的数据或者路由改变了才会执行</li>
</ul>
<h4 id="computed、methods-区别" tabindex="-1"><a class="header-anchor" href="#computed、methods-区别" aria-hidden="true">#</a> computed、methods 区别</h4>
<ul>
<li>computed是计算属性，有缓存</li>
<li>methods 没有缓存</li>
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
</div></template>


