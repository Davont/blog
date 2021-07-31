---
title: 变量提升(函数提升)与let、const
date: 2019-02-21 17:19:45
tags: [js,es6]
---
## 前言
在ES6之前，JavaScript没有块级作用域的说法（一对花括号{}为一个块级作用域），只有全局作用域和函数作用域。变量提升即将变量声明提升到它所在作用域的最开始的部分。

按照正常的编程逻辑来说，变量或者函数，都应该先声明，再调用。

就像这样：

```js
var a;
a = 1;
console.log(a)
```
但是JavaScript再处理程序时，会将当前作用域内所有的变量声明提升到程序的顶部，所以如果程序长成这样，也是可以运行的。
```js
a = 1;
console.log(a);
var a;
```
因为在执行上面程序之前，变量a的声明被提升到了程序的顶部。

因此，在JavaScript中，可以先使用变量，再声明变量。

按照runoob给的定义：
*变量提升：函数声明和变量声明总是会被解释器悄悄地被"提升"到方法体的最顶部。*

> 只有声明的变量才会有变量提升，初始化的不会有。
## 变量声明
这里要复习一下变量声明的基础知识。

==变量声明==
```js
var a;
a = 1;
```
==变量初始化==
```js
var a = 1;
```
所以以下两端代码，是完全不同的两个输出结果。

```js
var a = 1;
b = 2;
console.log(a + b)
var b;
```
输出3，变量a经过了初始化，变量b被提升了，所以输出1 + 2。

```js
var a = 1;
console.log(a + b)
var b = 2
```
输出NaN，变量a经过了初始化，输出 1 + b，变量b也经过了初始化，所以不存在变量提升，所以在执行1+b的时候，b的值是undefined，1 + undefined = NaN，因此输出NaN。

## let
ES6中的let命令用于替代ES5中的var命令，因为变量提升会使整个代码看上去很奇怪。

从2018年中旬开始，我已经在项目中逐渐使用let来代替var了，并且最新版本的webStorm中，当你使用var来声明一个变量的时候，编辑器都会报warnings，并提示你要使用let来代替var。

按照[ 阮一峰ES6教程]( 阮一峰ES6教程)的话说，let命令改变了语法的行为，它所声明的变量一定要在声明后使用，否则报错。

来看一段代码：
```js
a = 1;
console.log(a)
let a;
```
报错：Uncaught ReferenceError: Cannot access 'a' before initialization

意思为：在a未初始化之前无法调用。

所以我们需要这么写：
```js
let a = 1;
console.log(a) // 1
```
故 let命令不存在变量提升。
题外话： 有心的读者可以看看这篇文章：https://www.jianshu.com/p/0f49c88cf169
作者对let const的变量提升产生了质疑。

**let不可以重复声明，会提示我们:**
```js
let x = 10;let x = 20; 
// Uncaught SyntaxError: Identifier 'x' has already been declared
```
当我们在全局声明var的时候，我们可以通过window来获取这个变量，但是let不可以，
你可以将let变量看其处在一个无形的作用域内。
我觉得在大部分时候都应该优先使用let,<不敢说任何时候，总怕来个例外..>。

## const
刚才同样的代码，用const输出如下：

```js
a = 1;
console.log(a)
const a;
```
报错：Uncaught SyntaxError: Missing initializer in const declaration

意思为： 语法错误，在const声明时未进行初始化。

按照[阮一峰ES6教程](http://es6.ruanyifeng.com/#docs/let)的话说， const在声明时就一定要渲染，

上面的代码有几个错误，首先const生成的是常量，不能被修改，所以函数第一行就是错误的。其次const必须在声明时就初始化，所以第三行也是错误的。

换一下写法

```js
console.log(a)
const a = 1;
```
报错：Uncaught ReferenceError: Cannot access 'a' before initialization

和let报错一样，这说明const同样不存在变量提升。

## 暂时性死区
只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。

```js
var tmp = 123;

if (true) {
    tmp = 'abc'; // Uncaught ReferenceError: Cannot access 'tmp' before initialization
    let tmp;
}
```
上面代码中，存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp，导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错。

ES6明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。

总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称TDZ）。

引用：https://www.cnblogs.com/ricoliu/p/6149912.html

## 暂时性死区

只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。

> ES6明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。


## 函数提升

js中创建函数有两种方式：函数声明式和函数字面量式。只有函数声明才存在函数提升。
```js
a()
var a = function() {
    console.log(1)
}
```

报错，因为是字面量式，所以不存在函数提升。

```js
a();
function a() {
    console.log(1)
}
```
输出1，因为是函数声明式，所以存在函数提升。
根据刚才的文章，这里应该非常容易理解。

## 函数提升和变量提升的优先级

根据官方书籍《你不知道的javascript》（上卷）中写道：
“函数会首先被提升，然后才是变量”。

所以我们看看下面的代码。


```js
console.log(a);    
console.log(a());    
var a = 3;

function a() {
        console.log(10) 
}
console.log(a)   
a = 6;
console.log(a());  
```

由此可见，该函数的执行过程是：
1、 提升函数a()
2、提升变量a = 6
3、输出a 因为a为函数声明未被变量声明替代，所以输出了a的代码
4、输出a()，因为a是个函数，所以执行了a()
5、重新声明a = 3 ， a被覆盖。
6、输出a 因为a = 3，所以输出3。
7、输出a()，因为a已经被3覆盖，已经不是一个函数，所以输出a is not a function.

由此可见函数提升要比变量提升的优先级要高一些，且不会被变量声明覆盖，但是会被变量赋值之后覆盖。

引用：https://www.cnblogs.com/oxiaojiano/p/7918967.html

## 练习

**代码1**

```
console.log(foo);
function foo(){
    console.log("函数声明");
}
var foo = "变量";
```

输出为

```
function foo(){
    console.log("函数声明");
}
```

代码实际为:
```
function foo(){
    console.log("函数声明");
}
var foo;
console.log(foo);   
foo = "变量";
```
**函数提升优先级比变量提升要高，且不会被变量声明覆盖，但是会被变量赋值覆盖。
在最后再加上打印就能看到函数已经被覆盖了。**

**代码2**

```js
方式一

var a = 4;

function a(){

return 6

}

console.log(a) // 4

console.log(a()) // a is not a function

方式二

function a(){

return 6

}

var a =4;

console.log(a) // 4

console.log(a()) // a is not a function
```
同一个标识符的情况下，变量声明与函数声明都会提升；函数声明会覆盖变量声明，但不会覆盖变量赋值，即：如果声明变量的同时初始化或赋值那么变量优先级高于函数。

**代码3**
```js
var x = 1,   // 全局window
  y = 0,
  z = 0;
function add(x) {
  return (x = x + 1);
}
y = add(x); // 同名函数调用最后一个，覆盖之前
function add(x) {
  return (x = x + 3);
}
z = add(x);
//运行结果   x:1 y:4 z:4
**代码4**
```js
      function a(a) {
        console.log(a);
        a = 2;
        console.log(b);
        var b = 3;
        console.log(a);
      }
      a(1);
      console.log(a);
```
结果：
![代码4结果](http://pic.davontt.com/picGo/es6-变量提升.png)

**代码5**
```js
var a=1;
function test(){
    console.log(a);
    var a=1;
}
test();
```
根据变量声明提升和变量搜索机制，函数test（）应为

```js
function test(){
    var a;
    console.log(a);//此时由于a并咩有被赋值，所以也就是undefined
        a=1;
 
}
```
**代码6
**


```js
var b=2;
function test2(){
    window.b=3;
    console.log(b);//值为3
}
test2();
```
任何通过附加在window上的变量都相当于声明一个全局变量，或者是给全局变量赋值

**代码7**

```js
c=5; 
function test3(){
    window.c=3;
    console.log(c);
    var c;
    console.log(window.c);
}
test3();
```
根据变量声明提升和变量搜索机制：
```js
c=5;//声明一个全局变量c 
function test3(){
        var c;//变量声明提升，声明一个局部变量
    window.c=3;//改变全局变量c的值
    console.log(c);//由于此时的c是一个局部变量c，并且没有被赋值 c就是undefined    
    console.log(window.c);//此时的c就是一个全局变量c，也就是值为3
}
test3();
```
**代码8**
```js
function hah(number){

        var a="show";

        while(number!=0){

            alert(a);//show

            var a=4;

            alert(a);//4

            number--;

        }

    }

   hah(1);   
```
为什么这里的a 弹出的是show?

因为在ES6之前，JavaScript没有块级作用域，只有全局作用域和函数作用域。

变量提升的本质是将变量声明提升到它所在作用域的最开始的部分。

浏览器环境 window 是全局作用域，函数 function 包裹的是函数作用域。

while 不是函数，它没有作用域。所以，在条件为 true 的时候相当于：


```js
function hah(number){

        var a="show";

        alert(a);//show

        var a=4;

        alert(a);//4

        number--;

    }

 hah(1);  

```

再进一步分解，就是：


```js
function hah(number){

    var a;

    var a;

    a = "show";

    alert(a);//show

    a=4;

    alert(a);//4

    number--;

}

hah(1);  

```
代码9
```js
var a=[];
for(var i=0;i<6;i++){
   a[i]=function (){
	console.log(i)
}
}
a[3]();//6
```
解释：上面的代码中，变量i是var声明的，在全局范围内都有效。所以每一次循环，新的i值都会覆盖旧值，导致最后输出的是最后一轮的i值。
如果使用let，声明的变量仅在块级作用域内有效，最后将输出3.
**for循环,其实是一系列从上到下的块级区域组成的代码最终的简化实现.**
实际可由下组成：
```js
      var a = [];
      {
        var i = 0;
        a[i] = function() {
          console.log(i);
        };
      }
      {
        var i = 1;
        a[i] = function() {
          console.log(i);
        };
      }
      {
        var i = 2;
        a[i] = function() {
          console.log(i);
        };
      }
      {
        var i = 3;
        a[i] = function() {
          console.log(i);
        };
      }
      {
        var i = 4;
        a[i] = function() {
          console.log(i);
        };
      }
      {
        var i = 5;
        a[i] = function() {
          console.log(i);
        };
      }
      var i = 6;
      a[3]();
```
