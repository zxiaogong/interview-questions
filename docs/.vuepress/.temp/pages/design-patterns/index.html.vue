<template><div><h1 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h1>
<h4 id="mvc与mvvm区别" tabindex="-1"><a class="header-anchor" href="#mvc与mvvm区别" aria-hidden="true">#</a> MVC与MVVM区别</h4>
<p>MVVM即Model-View-ViewModel的简写。即模型-视图-视图模型。
模型（Model）指的是后端传递的数据。
视图(View)指的是所看到的页面。
视图模型(ViewModel)是mvvm模式的核心，它是连接view和model的桥梁。
它有两个方向：
一是将模型（Model）转化成视图(View)，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定。
二是将视图(View)转化成模型(Model)，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听。
这两个方向都实现的，我们称之为数据的双向绑定。</p>
<p>MVC是Model-View- Controller的简写。即模型-视图-控制器。
M和V指的意思和MVVM中的M和V意思一样。
C即Controller指的是页面业务逻辑。
使用MVC的目的就是将M和V的代码分离。
MVC是单向通信。也就是View跟Model，必须通过Controller来承上启下。
MVC和MVVM的区别并不是VM完全取代了C，只
是在MVC的基础上增加了一层VM，只不过是弱化了C的概念，ViewModel存在目的在于抽离Controller中展示的业务逻辑，而不是替代Controller，其它视图操作业务等还是应该放在Controller中实现。也就是说MVVM实现的是业务逻辑组件的重用，
使开发更高效，结构更清晰，增加代码的复用性。</p>
</div></template>


