# myBlog
blog for vuepress

一个基于VuePress的 知识管理兼博客 主题。
# 前端学习知识栈

## 文件结构

```
.
├── .github   (可选，GitHub 相关文件)
│   ├── workflows
│   │   ├── baiduPush.yml (可选，百度定时自动推送)
│   │   └── ci.yml (可选，自动部署)
├── docs (必须，不要修改文件夹名称)
│   ├── .vuepress （同官方，查看：https://vuepress.vuejs.org/zh/guide/directory-structure.html#目录结构）
│   ├── @pages (可选，自动生成的文件夹，存放分类页、标签页、归档页)
│   ├── _posts (可选，专门存放碎片化博客文章的文件夹)
│   ├── <结构化目录>
│   └── index.md (首页)
├── myBlog (可选，本地主题)
├── utils  (可选，主题使用的node工具)
│   ├── modules
│   ├── config.yml (可选，批量操作front matter配置)
│   ├── editFrontmatter.js (可选，批量操作front matter工具)
├── baiduPush.sh (可选，百度推送命令脚本)
├── deploy.sh (可选，部署命令脚本)
│
└── package.json
```

## 结构化配置约定
遵循“约定优于配置”原则，如果你想构建一个结构化的站点，需要遵循下面这些约定，约定可以为你省去很多配置，轻松拥有一个结构清晰的站点。

你需要在config.js中有如下配置：
```
// config.js
module.exports = {
  themeConfig: {
     sidebar: 'structuring' //  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义
  }
}

```

目录结构例子

```
.
├── docs
│   │  (不参与数据生成)
│   ├── .vuepress
│   ├── @pages
│   ├── _posts
│   ├── index.md
│   │
│   │ (以下部分参与数据生成)
│   ├── 《JavaScript教程》专栏 (一级目录)
│   │   ├── 01.章节1 (二级目录)
│   │   |   ├── 01.js1.md (三级目录-文件)
│   │   |   ├── 02.js2.md
│   │   |   └── 03.js3.md
│   │   └── 02.章节2 (二级目录)
│   │   |   ├── 01.jsa.md
│   │   |   ├── 02.小节 (三级目录)
│   │   |   |   └── 01.jsxx.md (四级目录-文件)
│   ├── 01.前端
│   │   ├── 01.JavaScript
│   │   |   ├── 01.js1.md
│   │   |   ├── 02.js2.md
│   │   |   └── 03.js3.md
│   │   └── 02.vue
│   │   |   ├── 01.vue1.md
│   │   |   └── 02.vue2.md
│   ├── 02.其他
│   │   ├── 01.学习
│   │   |   ├── 01.xxa.md
│   │   |   └── 02.xxb.md
│   │   ├── 02.学习笔记
│   │   |   ├── 01.xxa.md
│   │   |   └── 02.xxb.md
│   │   ├── 03.文件x.md
│   │   └── 04.文件xx.md
│   └── 03.关于我
│   │   └── 01.关于我.md
```

## front matter


front matter 用于标识当前文件信息（如：类型，标题，作者，时间，分类，文字链接，唯一标识符，标签等等），主题会处理这些信息生成对应的结构或样式。

主题会默认生成一个基本的 front matter，当然你也可以手动添加

示例
---
title: 标题
date: 2020-02-21 14:40:19
permalink: /pages/a1bc87
categories:
  - 分类1
  - 分类2
tags:
  - 标签1
titleTag: 原创
sidebar: false
article: false
comment: false
editLink: false
author:
 name: 作者
 link: https://xxx.com
sticky: 1
---

### title
类型: string
默认：.md文件的名称
当前页面的标题

### date
类型: string
格式：YYYY-MM-DD HH:MM:SS
默认：.md文件在系统中创建的时间
当前页面的创建时间，如需手动添加或修改该字段时请按照格式添加或修改

### permalink
类型: string
默认：/pages/+ 6位字母加数字的随机码
当前页面的永久链接

Q：自动生成front matter为什么要包含永久链接？

A：使用永久链接是出于以下几点考虑:

在config.js配置nav时使用永久链接，就不会因为文件的路径或名称的改变而改变。
对于博客而言，当别人收藏了你的文章，在未来的时间里都可以通过永久链接来访问到。
主题中的目录页需要通过永久链接来访问文章。

### categories
类型: array
默认：
.md所在的文件夹名称。
如果.md文件所在的目录是三级目录，则会有两个分类值，分别是二级目录和一级目录的文件夹名称。如果在四级目录，则再多一个三级目录的文件夹名称分类。（级别说明）
如果.md文件所在的目录是_posts，则默认值是随笔，这个默认值可以在config.js中修改。

如果在 config.js配置 设置了category: false 将不会自动生成该字段

### tags
类型: array
默认：空数组
如果在 config.js配置 设置了tag: false 将不会自动生成该字段
当前页面的标签，默认值是空数组，自动生成该字段只是为了方便后面添加标签值

### titleTag
用于给标题添加 原创、转载 、优质、推荐 等自定义标记。
添加了标题标记的文章，在文章页和文章列表、最近更新栏、归档页的文章标题都会显示此标记。

### sidebar
false 不显示侧边栏
auto 显示自动侧边栏（只包含本文标题和子标题）

### article
false 判定当前页面为非文章页
对于非文章页，如目录页、关于、友情链接等自定义页面，需要设置此项。设置之后这个页面将被认定为非文章页，不显示面包屑和作者、时间，不显示最近更新栏，不会参与到最近更新文章的数据计算中。

### comment
false 不显示评论区，这是评论插件 (opens new window)的一个配置

### editLink
false 不显示编辑链接

### sticky (置顶)
类型： number
排序：允许有多个置顶文章，按照 1, 2, 3, ... 来降低置顶文章的排列优先级
文章置顶，设置了此项将在首页详细版文章列表中处于置顶位置

### pageComponent 使用页面组件
pageComponent: # 使用页面组件
  name: Catalogue # 组件名：Catalogue => 目录页组件
  data: # 组件所需数据
    path:  01.学习笔记/01.前端 # 设置为`docs/`下面的某个文件夹相对路径，如‘01.学习笔记/01.前端’ 或 ’01.学习笔记‘ (有序号的要带序号)
    imgUrl: /img/web.png # 目录页内的图片
    description: JavaScript、ES6、Vue框架等前端技术 # 目录描述（可加入a标签）

#### pageComponent.name
组件名，必需
使用目录页时 必须 设置为Catalogue

#### pageComponent.data
组件所需数据，必需

#### pageComponent.data.path
要为其生成目录页的文件夹的相对路径，必需
必须是在docs目录底下的文件夹相对路径
示例：01.学习笔记或01.学习笔记/01.前端(有序号的要带序号)

#### pageComponent.data.description
目录描述，必需
可加a标签（如需加入a标签时，标签内部的引号请使用单引号

#### pageComponent.data.imgUrl
目录页内的图片，可选。
图片尺寸在页面中显示为80px*80px



## [markdown技巧](https://yemao-zi.github.io/pages/7683ce/#%E6%B7%BB%E5%8A%A0%E6%91%98%E8%A6%81)

