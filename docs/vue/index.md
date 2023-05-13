# vue


#### props data 优先级
- props ===> methods ===> data ===> computep (源码)

#### computed、watch 区别
- computed是计算属性，支持缓存，当依赖的属性改变时会重新进行计算并返回
- watch是监听属性，不支持缓存，指定的数据或者路由改变了才会执行

#### computed、methods 区别
- computed 定义的成员可以像访问属性一样进行访问
- methods 没有缓存，computed是响应式，methods不是响应式，methods定义的成员必须以函数形式调用

#### ref
- 获取dom

#### vue-router实现思路
- 1. 每个组件都能够使用 this.$router this.$route (利用minx混入)
- 2. 初始化路由模式 hash history,并监听变化
- 3. 创建路由表

#### router常用路由模式
- hash
- hishtory

#### ：说说你对slot的理解？
- 插槽可以理解为占位符，vue2.1.0 以上版本才支持
- 插槽有三种类型： 默认插槽、具名插槽（指定插槽名）、作用域插槽（子组件提供数据，父组件使用）

#### slot使用场景有哪些？
- 可以更好的拓展组件，更好的复用组件，并进行定制化处理
- 场景：布局组件、列表组件、下拉组件、弹窗