---
title: Js 超大整数相加
date: 2019-05-05 18:24:48
tags:
  - js
---

# 前言

学弟问我一道题，觉得不错，记录下来。

# 题目

具体的文字记得不太清了，总之就是 js 的整数运算是有范围的，应该是-2^53 ------ 2^53 ，所以如果超过了 53 位，你该怎么运算?
这里贴一张图，供大家理解。
![js-number](http://pic.davontt.com/picGo/js-intsum.png)

<center style="color:#AAAAAA">js Number</center>

# 答案

菜鸡答案：

```
function computing(str1,str2){
    let strArry1=str1.split('');
    let strArry2=str2.split('');
    let maxLength=strArry1.length>strArry2.length?strArry1.length:strArry2.length;
    let length1=strArry1.length;
    let length2=strArry2.length;
    let flag=0;
    let sum='';
    for(i=0;i<maxLength-length1;i++){

        strArry1.unshift('0');
    }
    for( i=0;i<maxLength-length2;i++){
        strArry2.unshift('0');
    }
    for(i=maxLength-1;i>=0;i--){
        let arraySum=parseInt(strArry1[i])+parseInt(strArry2[i])+flag;
        if(arraySum>9){
            sum=(arraySum)%10+sum;
            flag=parseInt(arraySum/10);
        }
        else{
            flag=0;
            sum=(arraySum)%10+sum;
        }
    }
    console.log(sum)
}
```

大佬答案：

```
function sumStrings(a,b){
  var res='', c=0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c){
      c += ~~a.pop() + ~~b.pop();
      res = c % 10 + res;
      c = c>9;
  }
  return res.replace(/^0+/,'');

}
```

## 解释

- 首先我们用字符串的形势来保存大数，就保证了其在数学表示上不会发生变化
- 初始化 res, temp 变量来保存中间计算的结果，在将两个字符串 split 为数组，以便我们进行每一位的运算
- 循环的第一次就是进行 "个位" 的运算，将二者最末尾的两个数相加，由于每一位数字是 0 - 9，所以需要进行进位，在进过取余数操作后，将结果保留在个位。
- 判断 temp 是否大于 10，若是则将 temp 赋值为 true，等等，为什么要赋值成布尔值，不要着急，魔法即将发生。
- 在两个大数中的一个还有数字没有参与运算，或者前一次运算发生进位后，进行下一次循环。
- 接着除了对新的两个数字相加还要加上 temp，若上次发生了进位，则此时 temp 为 true，Js 因为存在隐式转换，所以 true 转换为 1，我们借用 Js 的类型转换，完成了逻辑上的逢 10 进 1 操作。Amazing
- 接下来就是重复上述的操作，直到计算结束。

# 按位非～及其他几种字符串转数字方法

**parseInt**

```
parseInt('012')      ----    12
parseInt('12')       ----    12
parseInt('12abc')    ----    12
parseInt('12.4')     ----    12
```

**parseFloat**

```
parseFloat('1.4')    ----    1.4
parseFloat('14')     ----    14
parseFloat('1.4ab')  ----    1.4
```

**~~**

```
~~1.23               ----    1
~~'1.23'             ----    1
~~'abc'              ----    0
```

**Number**

```
Number("023")        ----    23
Number("02.3")       ----    2.3
Number("avx")        ----    NaN
```

根据 JsPerf.com 的基准测试 Number 是 JsPerf 中最慢的之一 大多数浏览器对 parseInt 的响应最佳。
各种方法各有利弊，在不确定参数的形式的时候，应该要谨慎使用，做好类型判断，防止程序报错
