---
title: 七牛云+PicGo 实现图床搭建
date: 2018-07-04 04:20:10
tags: 博客搭建
---
# 前言
在日常的Markdown写作中，使用图片是必不可少的，所以靠谱的图片存储服务和上传工具显得格外重要。图片存储上我一直使用七牛，个人用户拥有10GB的免费存储空间，并且拥有很成熟易用的图片处理引擎，可以说是个人博客的不二之选。而上传工具的选择一直是我比较头痛的地方。手动打开七牛上传对于我这种懒人是不可能的，而基于MD编辑器的内置图片上传接口不够灵活（小书匠、Typora等），而当初多个工具使用下来iPic无意识Mac端用户体验最佳的工具，但是，他月费的模式并不适合我这种低频使用者。所以，当初我折中的使用了一个小网站叫极简图床。然而，最近他也挂掉了。重新搜索，我发现了今天要介绍的一个工具PicGo。其使用electron-vue进行编写，具有全平台的适用性。体验上也跟iPic无二并支持多个图床的配置，甚至支持插件的编写。言归正传，下面介绍七牛云+PicGo的图床解决方案。

# 七牛云存储配置
首先，需要配置七牛的对象存储空间。没有注册的同学首先要注册账号。

进入**管理控制台**，选择**对象存储**。

选择新建存储空间，填写存储空间信息，点击确定创建。

![qiniuyun](http://pic.davontt.com/picGo/qiniuyun.png)
<center style="color:#AAAAAA">新建存储对象</center>

创建成功后，可以看到七牛给了我们一个测试域名用于文件访问`
q3f23y9nq.bkt.clouddn.com`。但是该域名仅可用于测试且会在三十日内失效，所以需要进行个人域名的绑定。

![qiniuyun](http://pic.davontt.com/picGo/qiniuyun2.png)
<center style="color:#AAAAAA">测试域名</center>

点击**绑定域名**，在这里选择普通域名，填入一个已进行公安备案的二级域名作为空间域名。此处已davontt.com为例。其它选项可根据个人需求进行具体调整。

![qiniuyun](http://pic.davontt.com/picGo/qiniuyun3.png)
<center style="color:#AAAAAA">绑定域名</center>

点击创建后，等待五到十分钟待七牛配置完毕，就可以去域名管理复制得到自己的CNAME。最后登录自己的域名运营商，配置域名解析。

![qiniuyun](http://pic.davontt.com/picGo/qinniuyun3.png)
<center style="color:#AAAAAA">域名解析</center>

如图中所示，选择CNAME类型，将二级域名指向我们得到的CNAME。
自此，存储空间配置完毕。

# PicGo配置

PicGo的安装配置相对简单。首先，我们在[picgo](github项目首页)上下载最新版本的安装文件。

安装完成后打开应用，右键点击右上角PicGo的图标选择打开详细窗口，在图床设置中找到七牛图床设置。
 
![qiniuyun](http://pic.davontt.com/picGo/qiniuyun4.png)
<center style="color:#AAAAAA">PicGo配置</center>

- 如图需要我们填入一系列的设置，其中：
- AK与SK在七牛的个人面板密钥管理中可查。
- 存储空间名称即为我们之前所设置的存储空间名称。
- 访问网址即为我们之前所绑定的域名。）
- 可以指定存储路径，将PicGo上传的图片存储到指定目录当中。

上传图片时，一种方式是直接拖拽图片到上传区

![qiniuyun](http://pic.davontt.com/picGo/qiniuyun5.png)
<center style="color:#AAAAAA">图片上传区</center>

上传成功后PicGo会自动将链接格式对应的图片自制放到剪贴板上以供复制。

另一种方式可能更加实用，直接使用微信等自带的截图工具，截图后图片在剪贴板中，此时可使用
```
shift+cmd+p
```
自动上传，同样上传成功后，图片地址会传入剪贴板，可以直接在MarkDown文件中进行复制使用。

至此，基于七牛与PicGo的图床配置完成。