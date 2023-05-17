# vue


## props data 优先级
- props ===> methods ===> data ===> computep (源码)

## computed、watch 区别
- computed是计算属性，支持缓存，当依赖的属性改变时会重新进行计算并返回
- watch是监听属性，不支持缓存，指定的数据或者路由改变了才会执行

## computed、methods 区别
- computed 定义的成员可以像访问属性一样进行访问
- methods 没有缓存，computed是响应式，methods不是响应式，methods定义的成员必须以函数形式调用

## ref
- 获取dom

## vue-router实现思路
- 1. 每个组件都能够使用 this.$router this.$route (利用minx混入)
- 2. 初始化路由模式 hash history,并监听变化
- 3. 创建路由表

## router常用路由模式
- hash
- hishtory

## 说说你对slot的理解？slot使用场景有哪些？
- slot是vue框架中的插槽，可以理解为占位符，vue2.1.0 以上版本才支持
- slot能让用户更好的拓展组件，复用组件和对组件做一些定制化的处理
- 插槽有三种类型： 默认插槽 （只允许有一个插入位置）
                具名插槽（可以有多个插入位置，通过名字来识别对应的插槽）
                作用域插槽（子组件提供数据，父组件使用）
- 特点：父组件决定结构和数据（默认插槽、具名插槽的）。 子组件决定数据，父组件决定结构（作用域插槽）。
- 场景：布局、表格列表、下拉框、弹窗等等

