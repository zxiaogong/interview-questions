# js

## js中的数据类型
- Number
- String
- Boolean
- Objeac
- symbol
- null
- undifend
- bigint

## 什么是闭包
- 闭包是指一个函数能访问并操作外部作用域变量的能力。
- 优缺点
    - 优点：私有化数据、模块化提高代码复用率
    - 缺点：滥用闭包可能会导致内存泄漏
- 用途：防抖节流


## 判断是否为数组
- Array.isArray()
- instanceof
- Objcet.proptotype.toString
- Array.proptotype.isPrototypeOf
- Array.constructor.toString.indexOf

## 什么是原型链
- 原型链是js一种委托和继承的机制，它允许对象访问和基础其原型上的方法。

## 对象查找属性的方法
- 对象本身找>构造函数中找>对象原型中找>构造函数原型中找>对象的上一层原型找

## null和undefined的区别
- 在js中null和undefined都是代表没有值。
- null隐式转换会变成0，不容易发现错误，undefined转换数值的时候会变成NaN
- undefined是为了填补null这个坑设计出来的


## Promise作用及原理
- Promise作用是解决回调地狱的问题
- Promise有三种状态 pengding、fulfilled、rejected



## webwoker
- 

## for in 和 for of 区别


## 防抖节流
- 