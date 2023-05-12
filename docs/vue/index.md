# vue


#### props data 优先级
- props ===> methods ===> data ===> computep (源码)

#### computed、watch 区别
- computed是计算某个属性的改变，如果一个值变了，计算属性会监听到并进行返回
- watch是监听，指定的数据或者路由改变了才会执行

#### computed、methods 区别
- computed是计算属性，有缓存
- methods 没有缓存

#### ref
- 获取dom

#### vue-router实现思路
- 1. 每个组件都能够使用 this.$router this.$route (利用minx混入)
- 2. 初始化路由模式 hash history,并监听变化
- 3. 创建路由表

#### router常用路由模式
- hash
- hishtory