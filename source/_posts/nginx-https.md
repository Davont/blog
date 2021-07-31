---
title: 使用nginx配置SSL证书
date: 2018-05-15 16:34:33
tags: [Nginx,ssl,https,linux]
---
# 介绍
最近在阿里云白嫖了一个ssl证书，这下可以通过https访问我的网站了。
# 步骤
## 开放443端口
443端口是专门供https使用的端口。443端口和80端口区别如下：
- 80端口：超文本服务器端口，用于网页浏览。服务于：HTTP
- 443端口：安全服务端口（HTTPS），用于网页浏览端口，能提供加密和通过安全端口传输的另一种 HTTP。服务于：HTTPS
### 阿里云增加安全组
如果你用的是阿里云服务器，你不但得用过服务器本身开启，阿里云中还有安全组的设置，得登录它的控制台操作一下。
![阿里云](http://pic.davontt.com/picGo/nginx1.png)
<center style="color:#AAAAAA">在控制台上找到“安全组”</center>
然后点击实例，在实例中添加安全组规则：

![阿里云](http://pic.davontt.com/picGo/nginx2.png)
<center style="color:#AAAAAA">添加安全组规则</center>

添加443端口，按照途中配置即可：

![阿里云](http://pic.davontt.com/picGo/nginx3.png)
<center style="color:#AAAAAA">添加443端口</center>

一顿操作后安全组增加完成。
### 服务器上开放443端口
*环境：阿里云 centOS 7*

1. 启动httpd服务：
```
systemctl start httpd
```
2. 开放443端口：
```
firewall-cmd --zone=public --add-port=443/tcp --permanent
```
3. 重新加载防火墙：
```
firewall-cmd --reload
```
## 配置nginx

> 本教程是基于centos7 yum安装的nginx，如果有疑问可看我之前写的文章

### 新建文件夹存放ssl证书
centOS安装的nginx 默认安装在** /etc/nginx/ **目录下。
```
cd /etc/nginx
mkdir cert
```
![nginx](http://pic.davontt.com/picGo/nginx4.png)
<center style="color:#AAAAAA">在cert文件夹中添加两个ssl相关文件</center>

### 修改nginx 配置
一般centOS7 用yum安装的nginx 的配置文件是 nginx.conf，打开它会看到默认配置：
```
vi nginx.conf
```
```
# For more information on configuration, see:
#   * Official English Documentation: http://nginx.org/en/docs/
#   * Official Russian Documentation: http://nginx.org/ru/docs/
 
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;
 
# Load dynamic modules. See /usr/share/nginx/README.dynamic.
include /usr/share/nginx/modules/*.conf;
 
events {
    worker_connections 1024;
}
 
http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';
 
    access_log  /var/log/nginx/access.log  main;
 
    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;
    autoindex on; # 显示目录
    autoindex_exact_size on; # 显示文件大小
    autoindex_localtime on; # 显示文件时间
 
    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;
 
    # Load modular configuration files from the /etc/nginx/conf.d directory.
    # See http://nginx.org/en/docs/ngx_core_module.html#include
    # for more information.
    include /etc/nginx/conf.d/*.conf;
 
    #反响代理server 配置，可用于负载均衡
    upstream file {
    least_conn;
    server 192.168.5.222;
    }
 
    server {
        listen       80 default_server;
        listen       [::]:80 default_server;
        server_name  _;
        root         /usr/share/nginx/html;
 
        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;
 
        location / {
        #proxy_pass http://192.168.5.222;
        }
 
        error_page 404 /nginx/404.html;
            location = /nginx/40x.html {
        }
 
        error_page 500 502 503 504 /nginx/50x.html;
            location = /nginx/50x.html {
        }
    }
    # 反向代理server
    server {
        listen 9999;
        server_name _;
        location / {
            proxy_pass http://file;
        }  
    }
 
# Settings for a TLS enabled server.
#
#    server {
#        listen       443 ssl http2 default_server;
#        listen       [::]:443 ssl http2 default_server;
#        server_name  _;
#        root         /usr/share/nginx/html;
#
#        ssl_certificate "/etc/pki/nginx/server.crt";
#        ssl_certificate_key "/etc/pki/nginx/private/server.key";
#        ssl_session_cache shared:SSL:1m;
#        ssl_session_timeout  10m;
#        ssl_ciphers HIGH:!aNULL:!MD5;
#        ssl_prefer_server_ciphers on;
#
#        # Load configuration files for the default server block.
#        include /etc/nginx/default.d/*.conf;
#
#        location / {
#        }
#
#        error_page 404 /404.html;
#            location = /40x.html {
#        }
#
#        error_page 500 502 503 504 /50x.html;
#            location = /50x.html {
#        }
#    }
 
}
```

将“**Settings for a TLS enabled server.**”下面的注释消掉，修改几个重要参数即可：

```
#Settings for a TLS enabled server.
server {
        listen       443 ssl;
        ssl on;
        server_name  www.davontt.com;#你的域名
        root         ***; #你的网站主目录 绝对地址

        ssl_certificate "./cert/www.davontt.com.pem";#你的ssl证书地址（注意后缀）
        ssl_certificate_key "./cert/www.davontt.com.key";#同上你的ssl证书地址（注意后缀）
        ssl_session_cache shared:SSL:1m;
        ssl_session_timeout  10m;
        ssl_ciphers HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers on;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        location / {
              root ****;#你的网站主目录 绝对地址
     	      index index.html index.htm;
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }
```
### 重新启动nginx服务
```
systemctl restart nginx
```
完成，打开浏览器输入https://+你的网址  即可。





