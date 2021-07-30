---
title: 阿里云+centOS7 端口设置
date: 2018-10-04 19:41:35
tags: linux
---
# 前言
对于刚买了阿里云服务器的小白，想用它实现自己的页面展示。但在搭建的过程中，难免会有些低级错误，比如“我什么都搭建好了，为什么登陆网址打不开呢”、“怎么又报错，明明按照教程来的？”、“是不是我电脑有什么毛病啊？”等等，今天，又学到了，原来我的端口一直没开放，以及阿里云的安全组没有设置。

# 阿里云安全组设置

## 购买时默认安全组
不知道安全组的用户在新购服务器上部署网站，常常会发现不能正常访问。这是因为在购买阿里云ECS服务器的时候，阿里云默认安全组只放行了ICMP协议、SSH 22端口、RDP 3389端口三个端口，访问网站的80或443端口并没有放行。如果需要网站访问，那么用户在购买ECS服务器的时候需要勾选http80端口和https 443端口

## 购买后配置安全组
首先，需要在阿里云的控制台找到对应的ecs服务器实例。点击这个实例的管理进入实例的详情界面，然后进入本实例的安全组，再点击配置规则。

![aliyun](http://pic.davontt.com/picGo/port.png)
<center style="color:#AAAAAA">配置安全组</center>

点击添加安全组规则。
![aliyun](http://pic.davontt.com/picGo/port2.png)
<center style="color:#AAAAAA">添加安全组规则</center>

现在这台服务器是专用网络的，那这边的网卡类型的话就内网。
- 协议类型，我们选择自定义的TCP；
- 端口范围，这里要求填写的是一个范围，所以我们要写80/80。
- 授权对象，这里我们要让所有人都可以访问，所以我们要写0.0.0.0/0
- 优先级，填一到一百的数字，数字越小，优先级越高好了。

点击确定我们在安全组里的80端口就已经打开了。其实，安全组还用于设置内网互通拦截特定的IP和端口，只允许特定的IP来登录服务器，或者只允许读取访问公网上的某个特定的IP。

## 常见默认端口

- 22：SSH（安全登录）、SCP（文件传输）、端口号重定向
- 21：FTP（文件传输）协议代理服务器常用端口
- 39000/40000：FTP被动模式常用端口
- 80/8080/3128/8081/9098：HTTP协议代理服务器常用端口号
- 1080：SOCKS代理协议服务器常用端口号
- 23：Telnet（不安全的文本传送）
- 69(udp)：TFTP（Trivial File Transfer Protocol）
- 25：SMTP Simple Mail Transfer Protocol（E-mail），默认端口号

# 端口设置

- CentOS 7 默认关闭80端口，永久开启80端口命令如下：

```
firewall-cmd --zone=public --add-port=80/tcp --permanent
```
```
#命令含义
--zone #作用域 
--add-port=80/tcp #添加端口，格式为：端口/通讯协议 
--permanent #永久生效
```
- 重启防火墙
```
systemctl restart firewalld.service
```
- 查看监听(Listen)的端口
```
netstat -lntp
```

- 检查80端口被哪个进程占用
```
netstat -lnp | grep 80
```