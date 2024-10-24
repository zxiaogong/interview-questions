# vue

## 说一下mvvm
- 

## props data 优先级
- props>methods>data>computed>watch （源码）

## computed、watch 区别
- computed是计算属性，支持缓存，当依赖的属性改变时会重新进行计算并返回
- watch是监听属性，不支持缓存，指定的数据或者路由改变了才会执行

## computed、methods 区别
- computed 是计算属性，支持缓存，并且是响应式的，定义的成员可以像访问属性一样进行访问
- methods 没有缓存，methods不是响应式，methods定义的成员必须以函数形式调用

## refs
- 获取dom节点

## vue-router实现思路
- 1. 每个组件都能够使用 this.$router this.$route (利用minx混入)
- 2. 初始化路由模式 hash history,并监听变化
- 3. 创建路由表

## router常用路由模式
- hash
    不会向服务端发送请求，支持在所有浏览器中运行，前端打包自测时hash能看到内容，不利于爬虫识别，所以不利于seo优化。
- hishtory
    会向服务端发送请求，前端打包自测看不到内容，url更加美观。

## 说说你对slot的理解？slot使用场景有哪些？
- slot是vue框架中的插槽，可以理解为占位符，vue2.1.0 以上版本才支持
- slot能让更好的拓展组件，复用组件和对组件做一些定制化的处理
- 插槽有三种类型： 默认插槽 （只允许有一个插入位置）
                具名插槽（可以有多个插入位置，通过名字来识别对应的插槽）
                作用域插槽（子组件提供数据，父组件使用）
- 特点：父组件决定结构和数据（默认插槽、具名插槽）。 子组件决定数据，父组件决定结构（作用域插槽）。
- 场景：布局、表格列表、下拉框、弹窗等等

## vue生命周期
- vue2
    - beforeCreate
    - created
    - beforeMount
    - mounted
    - beforeUpdated
    - update
    - beforeDestroy
    - destroyed
- vue3 
    - 
- 如果有加keep组件的话，会多加两个生命周期
    activated
    deactivated

## 请求应该放在哪个生命周期
- 主要看业务需求
    当页面渲染时，父组件会先执行vue前三个生命周期，然后子组件执行前四个生命周期，然后再执行父组件第四个生命周期
    如果需要控制父组件内容优先显示的话，则可以把请求放在父组件的created中，子组件请求放在mounted中。
    如果需要子组件优先显示的话，则反之

## 为什么请求不能放在beforeCreate
- 此时dom和data都没有初始化

## 说一说生命周期的使用场景
- 

## 组件通讯方式
- props
- emit
- 依赖注入 provide/inject
- vuex

## vuex的作用
- vuex是专门为vue应用开发的一个全局状态管理的一个插件。它解决了不同组件对于同一状态的共享问题。
- 它有以下属性：state,getter,mutaction,action,modules

## mutaction与action的区别
- mutacion是修改数据用的，必须是同步。action是异步的，用来提交mutacion

## 路由守卫
- 全局守卫，路由独享守卫、组件内守卫
- 一般来说，组件内守卫用的比较少，因为后续更新维护的成本比较大

## router与route的区别
- route包含整个路由的属性和方法，router仅包含当前路由

## computed的结果值可以修改吗？
- 可以的，通过set进行修改

## vue2和vue3的区别
- vue2使用object.defineProperty重新定义data中的数据，通过getter、setter来达到监听数据的目的
- vue3使用Proxy替代了object.defineProperty,Proxy可以直接监听对象和数组的变化，并且有多达13种的拦截方式。
- vue2是选项式api，vue3是组合式api，新增setup语法糖
- v-if和v-for优先级不同
- vue2核心diff算法是采用双端比较， vuew3除了双端比较的算法还了借鉴ivi算法和inferno算法

## vue3使用setup的写法如何获取this
- 通过 getCurrentInstance

## ref和reactive区别
- ref：创建一个基本数据类型的响应式引用
- reactive：创建一个复杂对象的响应式引用

## teleport组件
- 这个组件是一个传送门，假如自己写一个弹出框，需要再页面居中显示，不受当前组件限制，可以把盒子传送到body

## v-if和v-for优先级
- vue2中v-for优先级要比v-if高
- vue3中v-for优先级比v-if低

## vue2如何监听数组变化
- vue2对数组原型链进行重写，自定义了原型方法。当调用数组方法时，可以调用依赖监听。


## vue模板编译原理
- 分成三个步骤：解析、优化、生成
- 解析器：将模板字符串解析成AST（抽象语法树）树
- 优化器：优化AST树
- 代码生成器：将优化后的ATS树编译成可执行的代码

## keep-alive了解吗
- keep-alive可以实现组件缓存，当组件切换时不会对当前组件进行卸载。
- 常用的两个属性 include/exclude
- 两个生命周期 deativated/ativated


## 路由传参
- params传参
- query传参
- props传参


## 路由几种模式
- hash
- history
- abstract

## 几种路由模式的区别
- 表现形式不同，hash会带个#号，history则不会
- 跳转请求不同：hash不会发送请求，history会发送一个http请求
- hash不利于seo优化
- 前端打包自测时使用hash能看到内容

## 封装一个组件的要素
- 单一职责
- 复用性
- 通过数据驱动/事件驱动

## 组件样式模块化
- scode


## $refs在通讯时有什么弊端
- 破坏了单向数据流的原则
- 导致组件复用困难
- 


## vue常见修饰符
- v-if v-for v-show v-model


## 父子组件嵌套下生命周期顺序
- 


## vuex持久化
- 使用localStorage
- vuex-persistedstate插件