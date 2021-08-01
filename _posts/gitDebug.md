---
title: “ERROR Deployer not found:git”的解决方案
date: 2017-08-27 21:17:09
tags:
  - git
---

## git 部署出现的问题

搭建博客 Hexo 时候，在写好文章进行\$ hexo d -g 的时候，发现失败，上面显示:

> ERROR Deployer not found:git

## 解决方案

### 可能的解决方法一

hexo 已升级 3.0
命令 hexo g -d 没有办法成功 deploy，
文档说 hexo3.0 后需要在 \_config.yml 中设置 deploy 中的 type 为 git（过去是 github）
然后在终端输入：

```
npm install hexo-deployer-git –save
```

### 可能的解决方法二

你所在的 blog 的初始文件夹名称改为为 github 上的仓库名称（形如 Davont.github.io）
