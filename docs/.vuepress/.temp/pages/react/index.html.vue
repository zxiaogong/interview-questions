<template><div><h1 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> react</h1>
<h2 id="state是同步还是异步" tabindex="-1"><a class="header-anchor" href="#state是同步还是异步" aria-hidden="true">#</a> state是同步还是异步</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>react18中state是异步的，目的是为了实现批处理
react18以下，在合成事件中是异步的，在其他异步操作中是同步的，比如计时器
视图 flushSync 可以更新队列
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react合成事件" tabindex="-1"><a class="header-anchor" href="#react合成事件" aria-hidden="true">#</a> react合成事件</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>react合成事件是基于事件委托处理的，在组件渲染的时候，如果发现jsx种有onClick这样的属性，不会直接给元素做事件绑定，而是只绑定方法给元素
react内部给根节点做了事件绑定处理，当行为触发，会根据原生时间传播机制传播到跟节点，通过e.path分析路径，依次执行对应阶段的合成事件
react18以前是委托给document容器处理，只做了冒泡阶段的委托。react18以后是交给根节点，捕获和冒泡都有做委托
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react-memo与usememo的区别" tabindex="-1"><a class="header-anchor" href="#react-memo与usememo的区别" aria-hidden="true">#</a> react.memo与useMemo的区别</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>useMemo主要用来解决使用React hooks产生的无用渲染的性能问题，用来做缓存用的
React.memo 是一个高阶组件，它能够对新老属性进行前比较，与pureComponent类似。如果需要手动控制对比过程，
可以将比较函数通过第二个传参来实现。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由传参方式有哪些" tabindex="-1"><a class="header-anchor" href="#路由传参方式有哪些" aria-hidden="true">#</a> 路由传参方式有哪些</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>问号传参（看起来比较丑，长度有限）
路由传参
隐式传参（页面刷新参数就会变为空）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react-router的-navlink与link的区别" tabindex="-1"><a class="header-anchor" href="#react-router的-navlink与link的区别" aria-hidden="true">#</a> react-router的 navlink与link的区别</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>语法几乎一样，navlink可以设置相关的选择样式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="usereducer" tabindex="-1"><a class="header-anchor" href="#usereducer" aria-hidden="true">#</a> useReducer</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>是useState的一个升级。当一个组件过于复杂，需要大量的状态时使用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="key优化" tabindex="-1"><a class="header-anchor" href="#key优化" aria-hidden="true">#</a> key优化</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>在循环中不要使用索引做key，最好使用唯一的id。用索引做key，一旦遇到数据挪动、删除、新增，之前的索引都会改变，很难实现“旧地复用”。基本都是用新内容替换老内容，来实现更新
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="react创建组件的方式" tabindex="-1"><a class="header-anchor" href="#react创建组件的方式" aria-hidden="true">#</a> react创建组件的方式</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>函数组件
类组件（react.component）
react创建组件的api （react.createClass）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redux三大核心" tabindex="-1"><a class="header-anchor" href="#redux三大核心" aria-hidden="true">#</a> redux三大核心</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>单一数据源、state只读、纯函数修改
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="componentwillreceiveprops什么时候更新" tabindex="-1"><a class="header-anchor" href="#componentwillreceiveprops什么时候更新" aria-hidden="true">#</a> componentWillReceiveProps什么时候更新</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>componentWillReceiveProps并不是由props更新时触发的，而是由父组件更新时触发的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


