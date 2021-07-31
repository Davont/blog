---
title: NPM的基本设置
date: 2018-07-20 09:34:37
tags: [npm,node.js]
---
# 前言
NPM的一些基本设置及更换一些淘宝源
# 查看源

```
npm config get registry

```

或者

```
npm config list
```

# 修改源
```
# 默认源

npm config set registry https://registry.npmjs.org

# https -> http，这样网速就会好很多

npm config set registry http://registry.npmjs.org

# 如果还不能下载，就切换成淘宝源

npm config set registry https://registry.npm.taobao.org

```

# 使用cnpm命令代替npm

```
// 安装cnpm命令,不会改变npm的源
npm install -g cnpm --registry=https://registry.npm.taobao.org

//使用
cnpm install
```
