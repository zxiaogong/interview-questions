<template><div><h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> vue</h1>
<h2 id="说一下mvvm" tabindex="-1"><a class="header-anchor" href="#说一下mvvm" aria-hidden="true">#</a> 说一下mvvm</h2>
<ul>
<li></li>
</ul>
<h2 id="props-data-优先级" tabindex="-1"><a class="header-anchor" href="#props-data-优先级" aria-hidden="true">#</a> props data 优先级</h2>
<ul>
<li>props&gt;methods&gt;data&gt;computed&gt;watch （源码）</li>
</ul>
<h2 id="computed、watch-区别" tabindex="-1"><a class="header-anchor" href="#computed、watch-区别" aria-hidden="true">#</a> computed、watch 区别</h2>
<ul>
<li>computed是计算属性，支持缓存，当依赖的属性改变时会重新进行计算并返回</li>
<li>watch是监听属性，不支持缓存，指定的数据或者路由改变了才会执行</li>
</ul>
<h2 id="computed、methods-区别" tabindex="-1"><a class="header-anchor" href="#computed、methods-区别" aria-hidden="true">#</a> computed、methods 区别</h2>
<ul>
<li>computed 是计算属性，支持缓存，并且是响应式的，定义的成员可以像访问属性一样进行访问</li>
<li>methods 没有缓存，methods不是响应式，methods定义的成员必须以函数形式调用</li>
</ul>
<h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> refs</h2>
<ul>
<li>获取dom节点</li>
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
<li>hash
不会向服务端发送请求，支持在所有浏览器中运行，前端打包自测时hash能看到内容，不利于爬虫识别，所以不利于seo优化。</li>
<li>hishtory
会向服务端发送请求，前端打包自测看不到内容，url更加美观。</li>
</ul>
<h2 id="说说你对slot的理解-slot使用场景有哪些" tabindex="-1"><a class="header-anchor" href="#说说你对slot的理解-slot使用场景有哪些" aria-hidden="true">#</a> 说说你对slot的理解？slot使用场景有哪些？</h2>
<ul>
<li>slot是vue框架中的插槽，可以理解为占位符，vue2.1.0 以上版本才支持</li>
<li>slot能让更好的拓展组件，复用组件和对组件做一些定制化的处理</li>
<li>插槽有三种类型： 默认插槽 （只允许有一个插入位置）
具名插槽（可以有多个插入位置，通过名字来识别对应的插槽）
作用域插槽（子组件提供数据，父组件使用）</li>
<li>特点：父组件决定结构和数据（默认插槽、具名插槽）。 子组件决定数据，父组件决定结构（作用域插槽）。</li>
<li>场景：布局、表格列表、下拉框、弹窗等等</li>
</ul>
<h2 id="vue生命周期" tabindex="-1"><a class="header-anchor" href="#vue生命周期" aria-hidden="true">#</a> vue生命周期</h2>
<ul>
<li>beforeCreate</li>
<li>created</li>
<li>beforeMount</li>
<li>mounted</li>
<li>beforeUpdated</li>
<li>update</li>
<li>beforeDestroy</li>
<li>destroyed</li>
<li>如果有加keep组件的话，会多加两个生命周期
activated
deactivated</li>
</ul>
<h2 id="请求应该放在哪个生命周期" tabindex="-1"><a class="header-anchor" href="#请求应该放在哪个生命周期" aria-hidden="true">#</a> 请求应该放在哪个生命周期</h2>
<ul>
<li>主要看业务需求
当页面渲染时，父组件会先执行vue前三个生命周期，然后子组件执行前四个生命周期，然后再执行父组件第四个生命周期
如果需要控制父组件内容优先显示的话，则可以把请求放在父组件的created中，子组件请求放在mounted中。
如果需要子组件优先显示的话，则反之</li>
</ul>
<h2 id="为什么请求不能放在beforecreate" tabindex="-1"><a class="header-anchor" href="#为什么请求不能放在beforecreate" aria-hidden="true">#</a> 为什么请求不能放在beforeCreate</h2>
<ul>
<li>此时dom和data都没有初始化</li>
</ul>
<h2 id="说一说生命周期的使用场景" tabindex="-1"><a class="header-anchor" href="#说一说生命周期的使用场景" aria-hidden="true">#</a> 说一说生命周期的使用场景</h2>
<ul>
<li></li>
</ul>
<h2 id="组件通讯方式" tabindex="-1"><a class="header-anchor" href="#组件通讯方式" aria-hidden="true">#</a> 组件通讯方式</h2>
<ul>
<li>props</li>
<li>emit</li>
<li>依赖注入 provide/inject</li>
<li>vuex</li>
</ul>
<h2 id="vuex的作用" tabindex="-1"><a class="header-anchor" href="#vuex的作用" aria-hidden="true">#</a> vuex的作用</h2>
<ul>
<li>vuex是专门为vue应用开发的一个全局状态管理的一个插件。它解决了不同组件对于同一状态的共享问题。</li>
<li>它有以下属性：state,getter,mutaction,action,modules</li>
</ul>
<h2 id="mutaction与action的区别" tabindex="-1"><a class="header-anchor" href="#mutaction与action的区别" aria-hidden="true">#</a> mutaction与action的区别</h2>
<ul>
<li>mutacion是修改数据用的，必须是同步。action是异步的，用来提交mutacion</li>
</ul>
<h2 id="路由守卫" tabindex="-1"><a class="header-anchor" href="#路由守卫" aria-hidden="true">#</a> 路由守卫</h2>
<ul>
<li>全局守卫，路由独享守卫、组件内守卫</li>
<li>一般来说，组件内守卫用的比较少，因为后续更新维护的成本比较大</li>
</ul>
<h2 id="router与route的区别" tabindex="-1"><a class="header-anchor" href="#router与route的区别" aria-hidden="true">#</a> router与route的区别</h2>
<ul>
<li>route包含整个路由的属性和方法，router仅包含当前路由</li>
</ul>
<h2 id="computed的结果值可以修改吗" tabindex="-1"><a class="header-anchor" href="#computed的结果值可以修改吗" aria-hidden="true">#</a> computed的结果值可以修改吗？</h2>
<ul>
<li>可以的，通过set进行修改</li>
</ul>
<h2 id="vue2和vue3的区别" tabindex="-1"><a class="header-anchor" href="#vue2和vue3的区别" aria-hidden="true">#</a> vue2和vue3的区别</h2>
<ul>
<li>vue2使用object.defineProperty重新定义data中的数据，通过getter、setter来达到监听数据的目的</li>
<li>vue3使用Proxy替代了object.defineProperty,Proxy可以直接监听对象和数组的变化，并且有多达13种的拦截方式。</li>
<li>vue2是选项式api，vue3是组合式api，新增setup语法糖</li>
<li>v-if和v-for优先级不同</li>
<li>vue2核心diff算法是采用双端比较， vuew3除了双端比较的算法还了借鉴ivi算法和inferno算法</li>
</ul>
<h2 id="vue3使用setup的写法如何获取this" tabindex="-1"><a class="header-anchor" href="#vue3使用setup的写法如何获取this" aria-hidden="true">#</a> vue3使用setup的写法如何获取this</h2>
<ul>
<li>通过 getCurrentInstance</li>
</ul>
<h2 id="ref和reactive区别" tabindex="-1"><a class="header-anchor" href="#ref和reactive区别" aria-hidden="true">#</a> ref和reactive区别</h2>
<ul>
<li>ref：创建一个基本数据类型的响应式引用</li>
<li>reactive：创建一个复杂对象的响应式引用</li>
</ul>
<h2 id="teleport组件" tabindex="-1"><a class="header-anchor" href="#teleport组件" aria-hidden="true">#</a> teleport组件</h2>
<ul>
<li>这个组件是一个传送门，假如自己写一个弹出框，需要再页面居中显示，不受当前组件限制，可以把盒子传送到body</li>
</ul>
<h2 id="v-if和v-for优先级" tabindex="-1"><a class="header-anchor" href="#v-if和v-for优先级" aria-hidden="true">#</a> v-if和v-for优先级</h2>
<ul>
<li>vue2中v-for优先级要比v-if高</li>
<li>vue3中v-for优先级比v-if低</li>
</ul>
<h2 id="vue2如何监听数组变化" tabindex="-1"><a class="header-anchor" href="#vue2如何监听数组变化" aria-hidden="true">#</a> vue2如何监听数组变化</h2>
<ul>
<li>vue2对数组原型链进行重写，自定义了原型方法。当调用数组方法时，可以调用依赖监听。</li>
</ul>
<h2 id="vue模板编译原理" tabindex="-1"><a class="header-anchor" href="#vue模板编译原理" aria-hidden="true">#</a> vue模板编译原理</h2>
<ul>
<li>解析器：解析成ATS树</li>
<li>优化器：进行优化</li>
<li>代码生成器：将优化后的ATS树编译成可执行的代码</li>
</ul>
<h2 id="keep-alive了解吗" tabindex="-1"><a class="header-anchor" href="#keep-alive了解吗" aria-hidden="true">#</a> keep-alive了解吗</h2>
<ul>
<li>keep-alive可以实现组件缓存，当组件切换时不会对当前组件进行卸载。</li>
<li>常用的两个属性 include/exclude</li>
<li>两个生命周期 deativated/ativated</li>
</ul>
<h2 id="路由传参" tabindex="-1"><a class="header-anchor" href="#路由传参" aria-hidden="true">#</a> 路由传参</h2>
<ul>
<li>params传参</li>
<li>query传参</li>
<li>props传参</li>
</ul>
</div></template>


