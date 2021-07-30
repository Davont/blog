---
title: “ERROR Deployer not found:git”的解决方案
date: 2017-08-27 21:17:09
tags: debug
---
## git部署出现的问题

搭建博客Hexo时候，在写好文章进行$ hexo d -g的时候，发现失败，上面显示:

> ERROR Deployer not found:git

## 解决方案

### 可能的解决方法一

hexo已升级3.0
命令 hexo g -d 没有办法成功deploy，
文档说hexo3.0后需要在 _config.yml 中设置 deploy中的type为git（过去是github）
然后在终端输入：

```
npm install hexo-deployer-git –save
```

### 可能的解决方法二

你所在的blog的初始文件夹名称改为为github上的仓库名称（形如Davont.github.io）

  