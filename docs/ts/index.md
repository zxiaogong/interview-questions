# TypeScript

## 泛型
- 泛型指的是在定义函数/接口/类型时，不预先指定具体的类型，而是在使用的时候在指定类型限制的一种特性。
``` ts
//函数中使用泛型
function test <T> (arg:T):T{
  console.log(arg);
  return arg;
}
test<number>(111);// 返回值是number类型的 111
test<string | boolean>('hahaha')//返回值是string类型的 hahaha
test<string | boolean>(true);//返回值是布尔类型的 true

// 接口使用
interface Search {
  <T,Y>(name:T,age:Y):T
}

let fn:Search = function <T, Y>(name: T, id:Y):T {
  console.log(name, id)
  return name;
}
fn('li',11);//编译器会自动识别传入的参数，将传入的参数的类型认为是泛型指定的类型

//类中使用
class Animal<T> {
 name:T;
 constructor(name: T){
  this.name = name;
 }
 action<T>(say:T) {
   console.log(say)
 }
}
let cat = new Animal('cat');
cat.action('mimi')

```