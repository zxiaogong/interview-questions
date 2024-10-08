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
- 闭包是指一个函数能访问并操作外部作用域的能力。

## 闭包的优势
- 保护内部数据不被外部访问
- 实现模块化，提高代码复用率

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