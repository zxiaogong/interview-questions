<template><div><h1 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h1>
<h2 id="mvc、mvp、mvvm区别" tabindex="-1"><a class="header-anchor" href="#mvc、mvp、mvvm区别" aria-hidden="true">#</a> MVC、MVP、MVVM区别</h2>
<ul>
<li>MVC</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>全称为 model-view-controller，即模型、视图、控制器。
Model 负责数据的处理
View 负责终端界面的展示
controller 负责视图的更新以及业务逻辑的处理
坏处：在mvc架构中，controller不仅要负责业务处理，还要负责页面更新。遇到多处页面节点的更新，这是很不友好的。
好处：低耦合，信息单向传递
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>MVVM</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>全称为 model-view-viewModel ，即模型、视图、视图模型
用viewModel代替了controller，viewModel会自动处理更新页面，能让使用者更加专注业务逻辑的开发。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>MVP</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>全称为 model-view-presenter, 即模型、视图、管理层
MVP在MVC的基础上增加了限定，model和view不能直接通信，都需要通过presenter进行通信
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


