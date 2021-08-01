---
title: 使用Git-Hooks将博客部署到VPS
date: 2018-10-15 03:04:17
tags:
  - git
---

# 前言

使用 github pages 搭建博客太慢了了呀，而且我已经买了 3 年的阿里云 vps 服务器，不用白不用。所以我最近又开始折腾着把博客搬到自己的 VPS 上。在 VPS 部署时还因为权限问题一直 403...弄了很久才弄好...菜是原罪...

# Git Hooks 自动部署

## 部署原理

通过在本地编辑文本，然后使用 Git 远程部署到 VPS 的 Git 仓库。hexo d 命令实际上只 deploy 了本地的 public 文件夹，Git Hooks 实际上就是当 Git 仓库收到最新的 push 时，将 Git 仓库接受到的内容复制到 VPS 上的网站目录内。相当于完成了手动将 public 文件夹复制到 VPS 的网站根目录里。

## VPS 操作

### 安装配置 Git

- 安装 Git
  通过 SSH 连接 VPS，执行：apt-get install git，完成后通过 git --version 查看 Git 版本，若显示版本信息则说明安装成功。

![gitversion](http://pic.davontt.com/picGo/git-version.png)

<center style="color:#AAAAAA">查看Git版本</center>

- 初始化 git 仓库

```
cd /home/git                //切换到git用户目录
mkdir blog.git              //创建git仓库文件夹，以blog.git为例
cd blog.git             //进入仓库目录
git init --bare             //使用--bare参数初始化为裸仓库，这样创建的仓库不包含工作区
```

- 创建网站目录

```
cd /var/www/                //切换目录
mkdir blog              //创建网站目录，以blog为例
```

- 配置 SSH

```
cd /home/git                //切换到git用户目录
mkdir .ssh              //创建.ssh目录
cd .ssh
vim authorized_keys
```

然后将本地的公钥复制到 authorized_keys 文件里(公钥即上文中本地执行 cat ~/.ssh/id_rsa.pub 查看的内容)

- 用户组管理
  执行

```
ll /home/git/
ll /var/www/
```

### 安装配置 nginx

具体可以看我以前的文章
安装成功后，记得保存退出
启动 nginx：systemctl start nginx
设置开机自动启动：systemctl enable nginx
查看运行状态：systemctl status nginx,显示 running 表示成功运行。

![nginx](http://pic.davontt.com/picGo/git-nginx.png)

<center style="color:#AAAAAA">查看Nginx状态</center>

### 配置 Git Hooks

- 创建 post-receive 文件
  git 用户下执行：

```
cd /home/git/blog.git/hooks     //切换到hooks目录下
vim post-receive            //创建文件
```

复制下面的内容到 post-receive 文件中：

```
#!/bin/bash
GIT_REPO=/home/git/blog.git
TMP_GIT_CLONE=/tmp/blog
PUBLIC_WWW=/var/www/blog
rm -rf ${TMP_GIT_CLONE}
git clone $GIT_REPO $TMP_GIT_CLONE
rm -rf ${PUBLIC_WWW}/*
cp -rf ${TMP_GIT_CLONE}/* ${PUBLIC_WWW}
```

保存退出后，执行：chmod +x post-receive 赋予可执行权限。

## 本地操作

### 配置 Hexo

打开本地博客根目录下的\_config.yml 文件，找到最后的 deploy 配置，修改为：

```
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
    type: git
    repo: git@VPS的IP:blog.git
    branch: master
```

### 本地部署

```
hexo clean      //清理缓存
hexo s          //本地预览
hexo server     //本地预览
```

一般来说，写文章时一般先使用 hexo s 打开本地预览，一边写一边预览修改，完成之后再通过 hexo g -d 生成上传。
