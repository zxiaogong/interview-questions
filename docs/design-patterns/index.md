# 设计模式

## MVC、MVP、MVVM区别
- MVC
```
全称为 model-view-controller，即模型、视图、控制器。
Model 负责数据的处理
View 负责终端界面的展示
controller 负责视图的更新以及业务逻辑的处理
坏处：在mvc架构中，controller不仅要负责业务处理，还要负责页面更新。遇到多处页面节点的更新，这是很不友好的。
好处：低耦合，信息单向传递
```

- MVVM
```
全称为 model-view-viewModel ，即模型、视图、视图模型
用viewModel代替了controller，viewModel会自动处理更新页面，能让使用者更加专注业务逻辑的开发。
```

- MVP 
```
全称为 model-view-presenter, 即模型、视图、管理层
MVP在MVC的基础上增加了限定，model和view不能直接通信，都需要通过presenter进行通信
```