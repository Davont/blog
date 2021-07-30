---
title: 在centOS7通过yum安装nginx
date: 2018-10-03 18:46:11
tags: [Nginx, linux]
---

之前小白在服务器上安装 nginx 配置，费了老半天，第一是不懂服务器操作，主要是 linux 相关命令，没有本地 ubantu 图形化，也不太懂 yum，systemctl 命令。不过身为前端开发，不能局限于前端，要有爱折腾的心。

## 下载阿里源

```
wget -O CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo	# 下载阿里源的文件
```

## 安装 Nginx

> 通过 yum search nginx 可以知道是否已经添加源成功。

```
sudo yum install -y nginx
```

## 启动 Nginx 并设置开机自动运行

```
sudo systemctl start nginx.service
sudo systemctl enable nginx.service
```

## 在浏览器上查看效果

![nginx](http://pic.davontt.com/picGo/website.png)

<center style="color:#AAAAAA">在浏览器输入你的地址</center>

## Nginx 配置信息和相关命令

### 网站文件存放默认目录

```
/usr/share/nginx/html
```

### 网站默认站点配置

```
/etc/nginx/conf.d/default.conf
```

### 自定义 Nginx 站点配置文件存放目录

```
/etc/nginx/conf.d/
```

### Nginx 全局配置

```
/etc/nginx/nginx.conf
```

### Nginx 启动

```
systemctl start nginx
```

### Nginx 停止

```
systemctl stop nginx
```

### Nginx 重启

```
systemctl restart nginx
```

### Nginx 查看状态

```
systemctl status nginx.service
```

### Nginx 检查配置文件

```
nginx -t
```
