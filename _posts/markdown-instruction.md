---
title: Markdown的基本用法
date: 2017-09-02 21:47:39
tags:
  - markdown
---

这个时候，我就特别想买个 MAC，因为有个特别好看的 Markdown 编辑器：Mou

![markdown](http://pic.davontt.com/picGo/markdown.png)

<center style="color:#AAAAAA">Mou</center>

> Markdown 是一种轻量级的「标记语言」，它的优点很多，目前也被越来越多的写作爱好者，撰稿者广泛使用。看到这里请不要被「标记」、「语言」所迷惑，Markdown 的语法十分简单。常用的标记符号也不超过十个，这种相对于更为复杂的 HTML 标记语言来说，Markdown 可谓是十分轻量的，学习成本也不需要太多，且一旦熟悉这种语法规则，会有一劳永逸的效果。
> ————摘自简书

**简单的说就是如果你要写文章而且要发表到网站的话，那势必要注重排版（谁都不想看你的文章就像看小说一样密密麻麻），而排版这个东西是很麻烦的，这个时候就用到了 Markdown，只需加几个符号，轻松出现分割线，标题，加粗，超链接等。**（你看，我现在就把前面那句话加粗了）

### Markdown 官方文档

[创始人写的文档](https://daringfireball.net/projects/markdown/syntax)

[中文文档](http://wowubuntu.com/markdown/)

不过写了官方文档好像你们就会仔细看似的

### Markdown 优点

- 写作中添加简单符号即完成排版，所见即所得。让你专注于文字而不是排版。
- 格式转换方便，Markdown 的文本你可以轻松转换为 html、pdf 等。
- 可以保存称纯文本
- 轻松的导出 HTML、PDF 和本身的 .md 文件。

（其实我觉得是这个排版很漂亮，很舒服）

### 基本操作规则

其实对于写写博客文章的我来说，记住几个就够用了

### 标题字体大小

![markdown](http://pic.davontt.com/picGo/markdown-title.png)

<center style="color:#AAAAAA">原谅我用MAC的图</center>

标题是每篇文章都需要也是最常用的格式，在 Markdown 中，如果一段文字被定义为标题，只要在这段文字前加 # 号即可。

`# 一级标题`

`## 二级标题`

`### 三级标题`

以此类推，总共六级标题，建议在井号后加一个空格，这是最标准的 Markdown 语法。

### 列表

![markdown](http://pic.davontt.com/picGo/markdown-list.png)

<center style="color:#AAAAAA">有序列表和无序列表</center>

主要有两个，就是有序列表与无序列表的区别，在 Markdown 下，列表的显示只需要在文字前加上 - 或\* 即可变为无序列表，有序列表则直接在文字前加 1. 2. 3. 符号要和文字之间加上一个字符的空格。

### 引用

![markdown](http://pic.davontt.com/picGo/markdown-q.png)

<center style="color:#AAAAAA">引用</center>

如果你需要引用一小段别处的句子，那么就要用引用的格式。有的时候最好空一个格

> 例如这样

### 图片与链接

![markdown](http://pic.davontt.com/picGo/markdwon-img.png)

<center style="color:#AAAAAA">图片与链接</center>

插入链接与插入图片的语法很像，区别在一个!号
这里需要图片地址，那么图片地址怎么获得呢？
其实获得图片地址有很多方法，比如：

- 在浏览器上在图片处右键有选项

  > 在浏览器上在图片处右键有选项

- 如果是你的本地图片呢？怎么知道它的地址呢 ？这时候就用到图床啦，我比较推荐七牛云图床，就是那个名字叫“极简图床”的 Chrome 插件，很方便

### 粗体与斜体

Markdown 的粗体和斜体也非常简单

用两个 ` 包含一段文本就是粗体的语法

用一个 ` 包含一段文本就是斜体的语法。

例如：这里是粗体 这里是斜体

### 代码框

对于写一些技术贴的时候，代码框总是必不可少的
在 Markdown 下实现也非常简单，只需要用两个 `

把中间的代码包裹起来，如 code。图例：

![markdown](http://pic.davontt.com/picGo/markdown-code.png)

<center style="color:#AAAAAA">代码框</center>

使用 `tab` 键即可缩进。

### 分割线

分割线的语法只需要另起一行，连续输入三个星号 \*\*\* 即可。
