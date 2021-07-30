---
title: 使用Git-Hooks将博客部署到VPS
date: 2018-10-15 03:04:17
tags: [git,linux]
---
# 前言
使用github pages 搭建博客太慢了了呀，而且我已经买了3年的阿里云vps服务器，不用白不用。所以我最近又开始折腾着把博客搬到自己的VPS上。在VPS部署时还因为权限问题一直403...弄了很久才弄好...菜是原罪...

# Git Hooks自动部署

## 部署原理
通过在本地编辑文本，然后使用Git远程部署到VPS的Git仓库。hexo d命令实际上只deploy了本地的public文件夹，Git Hooks实际上就是当Git仓库收到最新的push时，将Git仓库接受到的内容复制到VPS上的网站目录内。相当于完成了手动将public文件夹复制到VPS的网站根目录里。

## VPS操作
### 安装配置Git
- 安装Git
通过SSH连接VPS，执行：apt-get install git，完成后通过git --version查看Git版本，若显示版本信息则说明安装成功。

![gitversion](http://pic.davontt.com/picGo/git-version.png)
<center style="color:#AAAAAA">查看Git版本</center>

- 初始化git仓库
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

- 配置SSH

```
cd /home/git                //切换到git用户目录
mkdir .ssh              //创建.ssh目录
cd .ssh
vim authorized_keys
```
然后将本地的公钥复制到authorized_keys文件里(公钥即上文中本地执行cat ~/.ssh/id_rsa.pub查看的内容)

- 用户组管理
执行
```
ll /home/git/
ll /var/www/
```
### 安装配置nginx

具体可以看我以前的文章
安装成功后，记得保存退出
启动nginx：systemctl start nginx
设置开机自动启动：systemctl enable nginx
查看运行状态：systemctl status nginx,显示running表示成功运行。

![nginx](http://pic.davontt.com/picGo/git-nginx.png)
<center style="color:#AAAAAA">查看Nginx状态</center>

### 配置Git Hooks
- 创建post-receive文件
git用户下执行：
```
cd /home/git/blog.git/hooks     //切换到hooks目录下
vim post-receive            //创建文件
```
复制下面的内容到post-receive文件中：
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

保存退出后，执行：chmod +x post-receive赋予可执行权限。


## 本地操作
### 配置Hexo
打开本地博客根目录下的_config.yml文件，找到最后的deploy配置，修改为：
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

一般来说，写文章时一般先使用hexo s打开本地预览，一边写一边预览修改，完成之后再通过hexo g -d生成上传。
