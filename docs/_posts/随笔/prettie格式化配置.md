---
title: prettie格式化配置
date: 2022-09-22 14:50:23
permalink: /pages/ab34a4/
sidebar: auto
categories:
  - 随笔
tags:
  - 
author: 
  name: 夜猫子
  link: https://github.com/yemao-zi
titleTag: 
---
添加.prettierrc.js文件配置

~~~js
module.exports = {
  printWidth: 80, //单行长度
  tabWidth: 2, //缩进长度
  useTabs: false, //使用空格代替tab缩进
  semi: true, //句末使用分号
  singleQuote: false, //使用单引号
  quoteProps: 'as-needed', //仅在必需时为对象的key添加引号
  jsxSingleQuote: true, // jsx中使用单引号
  trailingComma: 'all', //多行时尽可能打印尾随逗号
  bracketSpacing: true, //在对象前后添加空格-eg: { foo: bar }
  jsxBracketSameLine: true, //多属性html标签的‘>’折行放置
  arrowParens: 'always', //单参数箭头函数参数周围使用圆括号-eg: (x) => x
  requirePragma: false, //无需顶部注释即可格式化
  insertPragma: false, //在已被preitter格式化的文件顶部加上标注
  proseWrap: 'preserve', //使用默认的折行标准
  htmlWhitespaceSensitivity: 'ignore', //对HTML全局空白不敏感
  vueIndentScriptAndStyle: false, //不对vue中的script及style标签缩进
  endOfLine: 'lf', //结束行形式
  embeddedLanguageFormatting: 'auto', //对引用代码进行格式化
};
~~~

在package.json中配置或在 .prettierrc.json 中配置

~~~js
  "prettier":{
      "printWidth": 80, 
      "tabWidth": 2, 
      "useTabs": false,
      "semi": true,
      "singleQuote": false, 
      "quoteProps": "as-needed", 
      "jsxSingleQuote": true,
      "trailingComma": "all", 
      "bracketSpacing": true, 
      "jsxBracketSameLine": true,
      "arrowParens": "always", 
      "requirePragma": false,
      "insertPragma": false, 
      "proseWrap": "preserve", 
      "htmlWhitespaceSensitivity": "ignore", 
      "vueIndentScriptAndStyle": false, 
      "endOfLine": "lf",
      "embeddedLanguageFormatting": "auto"
  }
~~~

