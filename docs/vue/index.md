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