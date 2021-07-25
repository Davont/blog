---
title: 用githubPages+Hexo零基础搭建个人博客
date: 2017-7-16 21:28:02
tags: 博客搭建
description: '在如今的后博客时代，写博客的人越来越少，搭建自己博客的人也越来越少，我看的一些教程也都是好几年以前的。而我搭建博客，写这个教程也有诸多原因。所以如果你要想建立一个博客，你首先得问自己：你为什么要建立一个博客？
大家可以看看我之前写的一篇文章 [个人博客正式上线]()。
等你想好了之后，以后的目标也就更明确了。'
---

# 行动前的准备工作

## 一个想法

在如今的后博客时代，写博客的人越来越少，搭建自己博客的人也越来越少，我看的一些教程也都是好几年以前的。而我搭建博客，写这个教程也有诸多原因。所以如果你要想建立一个博客，你首先得问自己：你为什么要建立一个博客？
大家可以看看我之前写的一篇文章 [个人博客正式上线]()。
等你想好了之后，以后的目标也就更明确了。

## 搭建博客基本介绍以及相关名词的解释

事实上，搭建博客有很多方法，也有很多框架。

### 最简单粗暴的

你完全可以自己买个服务器和域名，在服务器里放置你的博客文件，然后再关联到你的域名（当然，域名要解析过，国内域名还要备案）。然后等上一段时间，重新访问就可以了。但这种对新手特别不友好，写网页即你的博客页面需要前端知识，服务器操作需要你的后端知识，完成之后还需要你的运行和维护，如果你每次维护都是把文件拖拖拽拽到你服务器中，想必是极不好的。如果刚好你用的服务器是 Linux，那么恭喜你，你又点进了 Linux 的大坑中，你得学各种命令语言……所以这种看起来是最简单的，实则是最麻烦的。（还好当时我用的是 Windows 服务器，虽然卡但有界面啊！）

### WordPress 博客平台

这是一种傻瓜部署，也是许多人都追捧的一种框架，操作性好，支持手机端更改，动态部署，有 PHP 后端支持，有 SQL 数据库。只需输入账户密码等等，完全不需要懂代码。想了解多这里有传送门 wordpress 官网。（好像写 WordPress 更适合这篇文章的标题诶）

### Github Pages

GitHub Pages 是啥？讲道理标准的说法我也不会说。它是 github 发布的一个工具,便于创建自己的主页。（什么？github 是什么？它是世界上最大的同性程序员社交网站）这里有 github pages 发布时候的一篇文章。

[_（我是传送门）_](https://blog.github.com/2008-12-18-github-pages/)。

如果真要用我自己的话来说，相当于它既给了你一个小服务器，又给了你一个二级域名，而且这些都是免费的，还无限流量。就好像你把页面托管在 github 上，让更多的人来看。这也是为什么叫 github pages。

因此……….

- 如果你有妹子，可以做一个狂炫酷霸拽的静态页面来讨好妹子。
- 如果你想分享东西但不要求特别多的空间（github 对一个项空间有要求,肯定没有百度云之类的大啦），而且觉得 QQ 空间，新浪微博等等社交平台太 Low 或不适合，那就用 Github Pages
- 想学前端技术，并且学了前端技术之后还想练练手，那么选 github pages 欢迎入坑。
- github pages 能玩出更多花样。[http://wiki.hotoo.me/](http://wiki.hotoo.me/)
  这是搭建在 GH-pages 上的个人知识管理的网站，丰富程度令人叹为观止。

      ## 如果你想好用github pages了，那么请继续阅读下面的文章。

### Hexo 和 jekyll

好了， 既然已经选好用 github pages 了，那么下面又要面临一些选择了（人生总要面临诸多选择），那就是关于使用静态部署的方式，方式有很多，这里举两个最常用的 Hexo 和 jekyll。
Hexo 等会再说，我先介绍一下 jekyll，实际上它是一种模板转化引擎，
jekyll 本身基于 Ruby，它实际上也可以看成是一种模板引擎 liquid 的扩展。jekyll 对 liquid 的主要扩展在于两点：

- 内建专用于博客网站的对象，可以在模板中引用这些对象：page、site 等。
- 对 liquid 进行了扩展，方便构建博客网站
  恩…… jekyll 确实好，可我还是不喜欢。因为它不怎么优雅，而且里面的主题也确实不怎么好看。你可以到 jekyll 的主题页面上看看。 [http://jekyllthemes.org/](http://jekyllthemes.org/)
  下面介绍一下我选用的 Hexo 了。用我学长的话说，Hexo 的逼格更高一些。（恩，比较适合我）

而 Hexo 当然还有其他的优点啦：

- Jeky 基于 Ruby 实现，安装 Jeky 需要搭建 Ruby 环境，在 Windows 搭建 Ruby 环境并不是被推荐的，而 Hexo 基于 NodeJs 实现，在 Windows 上安装 NodeJs 开发环境简单。
- 比较直接的另一个原因是在网上查找了很多博客的主题，发现 Jekyll 官网提供的主题都不怎么好看(可能是个人原因)，而 Hexo 的主题看的比较顺眼。
- 两者都支持 Markdown 语法，这点我非常喜欢。

# Hexo 部署过程

## 安装 Git Bush

有人说过 Git 是版本管理的未来，它的优点我不在赘述，相关资料也很多，大家可以上网查。
要想使用 Git，首先需要安装它的客户端，推荐在 Linux 下使用 Git，这样会更方便。Windows 下安装地址在这，直接点击右边的“Download for Windows”即可。[下载地址](https://git-scm.com/)

![git](http://pic.davontt.com/picGo/gitDownload.png)

<center style="color:#AAAAAA">Git官网下载地址</center>

## 安装 Node.js

到 Node.js 官网下载相应平台的最新版本，一路安装即可。

![nodejs](http://pic.davontt.com/picGo/nodejsDownload.png)

<center style="color:#AAAAAA">node.js官网</center>

## 注册 GitHub 账户

这个无需多说

## 检查 SSH keys

打开 Git bush

![git bush](http://pic.davontt.com/picGo/gitbush.png)

<center style="color:#AAAAAA">git bush 终端</center>

首先我们需要检查你电脑上现有的 ssh key

输入：

```
$ cd ~/.ssh
```

如果显示“No such file or directory”，直接略过下面一步，否则继续。

### 备份和移除原来的 ssh key 设置：

```
$ ls
config	id_rsa	id_rsa.pub	known_hosts
$ mkdir key_backup
$ cp id_rsa* key_backup
$ rm id_rsa*
```

### 生成新的 SSH Key：

```
$ ssh-keygen -t rsa -C "邮件地址@youremail.com"
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/your_user_directory/.ssh/id_rsa):<回车就好>
```

> 注：这里的邮件地址最好是你的 github 上注册的邮件地址。

然后系统会要你输入加密串（Passphrase）：

```
Enter passphrase (empty for no passphrase):<输入加密串>
Enter same passphrase again:<再次输入加密串>
```

> 注：当你输入密码的时候，你是看不到密码显示的，无需担心，直接输就是了。

最后看到这样的界面：

![](http://pic.davontt.com/picGo/ssh.png)

<center style="color:#AAAAAA">git bush 终端</center>

### 添加 SSH Key 到 GitHub：

在本机设置 SSH Key 之后，需要添加到 GitHub 上，以完成 SSH 链接的设置。

用文本编辑工具打开 id_rsa.pub 文件，如果看不到这个文件，你需要设置显示隐藏文件。准确的复制这个文件的内容，才能保证设置的成功。

在 GitHub 的主页上点击设置按钮：

![github](http://pic.davontt.com/picGo/github-setting.png)

<center style="color:#AAAAAA">github 主页</center>

然后点左边的“SSH and GPG keys”

在 title 和 key 输入相应的内容（title 随便起个有意义的名字即可）

![ssh](http://pic.davontt.com/picGo/ssh2.png)

<center style="color:#AAAAAA">在github中设置ssh</center>

完成后我们来验证一下是否成功，在命令行上输入：

```text
$ ssh -T git@github.com
```

然后在输入你之前设置的密码 回车一下，看到如下图:

![ssh check](http://pic.davontt.com/picGo/ssh-check.png)

<center style="color:#AAAAAA">验证ssh是否成功</center>

如果不是这张图，而是出现了这些文字：

```
The authenticity of host 'github.com (207.97.227.239)' can't be established.
RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
Are you sure you want to continue connecting (yes/no)?
```

不要紧张，输入 yes 就好，然后会看到：

```
Hi <em>username</em>! You've successfully authenticated, but GitHub does not provide shell access.
```

> 注：你的名字是你的 github 账户的 name

成功了

现在你已经成功连接到 github 账户上了。

## 正式安装 Hexo

- 先创建一个文件夹，名字必须为 github 上的仓库名称，（形如 davont.github.io）这个文件夹是用来存放所有关于博客的内容，包括博客主题啦，用的图片，设置更改等等，现在假设这个文件夹叫做 A 。
- git 上命令

```
$ cd A
```

> 注：你创建 A 的位置要正确，如果这个文件 A 的位置在“我的文档”（WIn10 改成用户名命名的文件），可以直接 cd A,一般“我的文档”位置在 c 盘/用户/&lt;你的用户名&gt;。如果 A 的位置不在“我的文档” ，则需要输入完整路径，即 cd 文件路径 。

- 接着继续输入命令来安装 hexo：

```
$ npm install hexo -g
```

安装后你可以输入:

```
$ hexo
```

来查看所有的 hexo 命令

![instruction](http://pic.davontt.com/picGo/instruction.png)

<center style="color:#AAAAAA">hexo 指令</center>

### 初始化博客

输入命令：

```
$ hexo init
```

于是出现了如下的界面：

![files](http://pic.davontt.com/picGo/files.png)

<center style="color:#AAAAAA">hexo init安装目录</center>

解释一下：

- node_modules：是依赖包
- public：存放的是生成的页面
- scaffolds：命令生成文章等的模板
- source：用命令创建的各种文章
- themes：主题
- \_config.yml：整个博客的配置
- db.json：source 解析所得到的
- package.json：项目所需模块项目的配置信息

做好这些前置工作之后接下来的就是各种配配配置了。

### 配置博客主题等其他设置

其实这个时候你的博客已经弄好了（毕竟初始化了嘛）。你要不信这时候可以在刚才的 git 终端输入：

```
$ hexo s
```

![hexo](http://pic.davontt.com/picGo/hexo-s.png)

<center style="color:#AAAAAA">hexo s 指令</center>

然后在浏览器上输入网址：

```
http://localhost:4000/
```

打开即可看到你的初始化后的博客。

这个本地地址是留给你调试测试用的，别忘了当你不想测试的时候用 Ctrl + C 来结束掉哦。

是不是很兴奋？嗯哼？

但这个还是最简陋的博客，名字，内容，装饰什么都没有。

这时候我们可以给 hexo 添加点主题
作者用的是 Next 主题，读者可以在下面链接挑选自己喜欢的主题：

[hexo 主题](https://hexo.io/themes/)

找到喜欢的下载下来，记住放到 theme 文件中哦！
如果想要简洁点，一行代码就 ok 了，把你要下载主题的地址复制下来，在 git 终端输入:

```
git clone https://github.com/iissnan/hexo-theme-next themes/next
```

（当然我这个网址是 Next 主题的下载地址）

### 下面更换主题

首先我们要修改博客的配置文件（注意，是整个博客的配置文件，也就是博客最底层目录下的`_config.yml`，因为之后还会用到，所以我们在此约定一下，将这个配置文件叫做`站点配置文件`，（这是从 next 的官方文档里学来的名称），找到`theme`选项，把主题切换为你刚刚下载的主题名称 .如下图,将原来的`landscape`删掉，改为`next`,然后保存即可。

![theme](http://pic.davontt.com/picGo/theme.png)

<center style="color:#AAAAAA">更换主题 next</center>

完成之后主题即可使用。

### 调试

之前在第一步之前我们已经用过调试，说是调试，也就相当于部署。

```
$ hexo s
```

然后在浏览器上输入网址：

```
http://localhost:4000/
```

即可看到刚刚部署的主题。
(别忘了不用的时候 Ctrl + C)

### 部署提交

如果你对你的博客修改完毕，想发布到网上，这时候需要部署和提交。

每当你有新的部署的时候，最后要清空一下之前的部署。

```
$ hexo clean
```

清理完毕后在进行部署提交

```
$ hexo g
```

```
$ hexo d
```

期间可能会让你输入 SSH，按照之前你设置的输入即可

这时候打开你的网址域名

(你的域名目前是由 github 提供的二级域名，这也是为什么之前要绑定 github 账号)

这个二级域名的格式是这样的：

你的 id.github.io

试试看，当你打开的时候，出现的界面会和你在本地服务器浏览的界面一样的！

# 结语

github pages 虽然免费，但毕竟是国外的服务器，国内访问可以稍微缓慢，如果是土豪，可去买一个支持 Node.js 的国内云空间即可。总之 github pages + hexo 搭建博客还是挺能折腾人的。但毕竟免费，而且身为技术人员不就是该具备折腾的精神吗？
