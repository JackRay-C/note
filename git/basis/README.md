---
title: Git简明教程
---

# Git简明教程

都是一些简单的入门使用指南，不会有太高深的内容。

## Git的安装

首先检查你的系统有没有安装git，在你的系统上执行`git version`查看是否安装了git。如果出现如下版本号，则说明安装过了。

```bash
➜  ~ git version 
git version 2.24.2 (Apple Git-127)
```

如果没有安装，参照Git官方网站进行安装：[Git官方网站](https://git-scm.com/downloads)

## 创建Git仓库

1、创建并打开新文件夹。

2、执行`git init`。

3、新的本地仓库就已经创建好了。

## 检出仓库

1、使用如下命令创建一个本地仓库的克隆版本

```bash
git clone /path/to/reponsitory
```

2、如果使用的是远程服务器上的仓库，可以使用如下命令

```bash
git clone username@host:/path/to/repository
```

## 工作流

你的本地仓库是由git维护的三个空间组成的。第一个是你的`工作目录`，它是你本地真正存在的文件；第二个是`暂存区(Index)`，它就像个缓存区，临时保存你的更改；最后是`HEAD`，它指向你最后一次提交的结果。


