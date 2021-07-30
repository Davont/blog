---
title: 域名绑定以及Hexo的NexT主题相关参数配置
date: 2017-07-30 20:04:44
tags: 博客搭建
---
## 域名

### 购买域名（未收商家广告费一分一毛）

*   域名的话，确实有免费的，不过比较麻烦而且并不是永久免费。如果你想在以后搞个大新闻的话，还是建议买个域名，而且一般第一年买的域名也比较便宜。在此我列两个个比较有名的域名注册公司：[新网](http://www.xinnet.com/)、[万网](https://wanwang.aliyun.com/)。

*   其实你也可以通过其他平台来购买，比如腾讯云、阿里云。其他的诸如京东云，坚果云，我没了解过，不过大差不差吧。
> 备注:腾讯云服务器学生机真的便宜，一个月一块钱，而且域名后缀为cn的享有学生价1块钱一年（仅限第一年）。阿里云服务器一个月10块，但速度比腾讯云块，而且自我感觉逼格更高。（万网就是阿里旗下的）

*   至于怎么购买的话，构思一个自己喜欢的域名，然后后缀选择恰当的就行了。别忘了购买之后要解析域名，别忘了解析后要等一段时间才会更新。
> 最好选择国外的域名后缀，国内的要备案，忒麻烦。国外例如用.me就挺好。

### 域名绑定

在你hexo文件的中找到source文件，在文件中创建一个CNAME文件，不要加后缀，然后用编辑器打开CNAME文件，里面添加你的域名即可（不要加http://）

> 如果没有编辑器（最好还是下一个例如vscode，vim，notepad++，Sublime Text），可以创建一个txt文档，里面加上你的域名，然后把txt后缀给去掉。

![domain](http://pic.davontt.com/picGo/domain.png)
<center style="color:#AAAAAA">新建文件CNAME</center>

例如我的域名是 davont.com , 以后就不用输入 davont.github.io

![domain](http://pic.davontt.com/picGo/domain2.png)
<center style="color:#AAAAAA">写上自己的域名</center>

填写完了之后再重新部署到github pages上（部署简写命令hexo d -g)

> 如果输入你的域名后，打不开界面，可能是你的域名没有解析，这个要到你购买域名的网站上去域名解析，网站若不提供去DNSpod.如果解析完成仍打不开的话，得需要等一段时间,一天左右，国际DNS更新要24小时。

## NexT主题配置

### 参考文档

首先，我推荐两个官方参考文档。

[Hexo (我是传送门)](https://hexo.io/zh-cn/)

[Next (我是传送门)](http://theme-next.iissnan.com/)

其实这两个文档已解决基本问题，有什么要求直接按照文档去改。

*   如果改博客整体框架例如博客名称、作者、网址、目录等等，那么直接在你的博客文件家目录找到_config.yml文件（中文名叫做站点配置文件），编辑即可。（当然需要编辑器打开啦）


如果想在NexT主题里更改，在theme中找到next，然后在next找到_config.yml文件，编辑即可。


### 基本操作

blog目录下的_config.yml里有很多配置项，先解释几个初学者最在意的：

*   title: 博客主页标题
*   url: 你的博客网址，例如[http://yoursite.com](http://yoursite.com)
*   permalink: 每篇文章的URL链接格式，例如:year/:month/:title/，注意不要漏掉最后的/
*   date_format: 每篇文章日期的格式，如YYYY-MM-DD会显示2014-01-01，具体格式设置方法参考
*   moment.js
*   per_page: 每页显示的文章数量

修改_config.yml要格外注意，每项冒号后面都加一个空格，另外不要出现tab。

### 语言设置
> language: zh-Hans

### NexT 主题更换

NexT 主题目前提供了3中风格类似，但是又有点不同的主题风格，可以通过修改 主题配置文件 中的 Scheme 值来启用其中一种风格，例如我的博客用的是 Pisces 分栏风格，只要把另外两个用#注释掉即可

```
#Schemes

#scheme: Muse

#scheme: Mist
scheme: Pisces

```

### 发布新文章

在终端输入:

```
$ hexo new &quot;文章名称&quot;
```

之后在source/_posts目录下面，多了一个以md后缀的文件，文件名就是你刚刚设置的文章名称

打开之后我们会看到：

```
---

title: new article

date: 2014-11-01 20:10:33

tags:

---
```

文件的开头是属性，采用统一的yaml格式，用三条短横线分隔。下面是文章正文。

文章的正文支持markdown格式，建议你先学习一下它的语法。markdown不像html似的一大堆标签，很简单，只有几个符号。

新建、删除或修改文章后，不需要重启hexo server，刷新一下即可预览。