import { resolve } from "path";
import { defineConfig4CustomTheme, UserPlugins } from "vuepress/config";
import type { blogConfig } from "../../myBlog/types/index";
import dayjs from "dayjs";
// import htmlModules from "./config/htmlModules"; // 自定义插入的html块

export default defineConfig4CustomTheme<blogConfig>({
  theme: resolve(__dirname, "../../myBlog"), // 使用本地主题

  locales: {
    "/": {
      lang: "zh-CN",
      title: "夜猫子的知识栈",
      description: "前端学习与总结。",
    },
  },
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  // 主题配置
  themeConfig: {
    // 导航配置
    nav: [
      { text: "首页", link: "/" },
      {
        text: "前端",
        link: "/web/", //目录页链接，此处link是yemao-zi主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
          // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
          {
            text: "前端文章",
            items: [{ text: "JavaScript", link: "/pages/a61298/" }],
          },
          {
            text: "学习笔记",
            items: [
              { text: "《JavaScript教程》", link: "/note/javascript/" },
              { text: "《Web Api》", link: "/note/webapi/" },
              { text: "《ES6教程》", link: "/note/es6/" },
              { text: "《Vue》", link: "/note/vue/" },
              { text: "《React》", link: "/note/react/" },
              {
                text: "《TypeScript》",
                link: "/note/typescript/",
              },
              {
                text: "《Git》",
                link: "/note/git/",
              },
              {
                text: "《Uniapp》",
                link: "/note/uniapp/",
              },
              {
                text: "小程序笔记",
                link: "/note/wx-miniprogram/",
              },
              {
                text: "《Electron》",
                link: "/note/electron/",
              },
              {
                text: "JS设计模式总结",
                link: "/pages/4643cd/",
              },
            ],
          },
          {
            text: "《前端架构》",
            items: [
              { text: "《微前端》", link: "/note/micopreface/" },
              {
                text: "《权限控制》",
                link: "/note/webpermission/",
              },
              { text: "monorepo", link: "/pages/47f4ae/" },
            ],
          },
          {
            text: "全栈项目",
            items: [
              { text: "任务管理日历", link: "/note/todolistserver/" },
              { text: "无代码平台", link: "/note/mallbook/" },
              { text: "图书管理系统", link: "/note/tsglxt/" },
            ],
          },
        ],
      },
      {
        text: "页面",
        link: "/ui/",
        items: [
          { text: "HTML", link: "/pages/7f9d15/" },
          { text: "CSS", link: "/pages/762145/" },
        ],
      },
      {
        text: "服务端",
        link: "/server/",
        items: [
          { text: "Nodejs", link: "/pages/82ce0c/" },
          { text: "Midway", link: "/pages/bba379/" },
          { text: "Nest", link: "/pages/nestkpc/" },
          { text: "MySql", link: "/pages/sqlgrammar/" },
          { text: "其他", link: "/pages/sjjgysf/" },
        ],
      },
      {
        text: "技术",
        link: "/technology/",
        items: [
          { text: "技术文档", link: "/pages/9a7ee40fc232253e/" },
          { text: "GitHub技巧", link: "/pages/4c778760be26d8b3/" },
          { text: "博客搭建", link: "/pages/41f87d890d0a02af/" },
          { text: "Ajax", link: "/pages/e5ac77/" },
          { text: "Vite", link: "/pages/13aa70/" },
          { text: "Vitest", link: "/pages/622646/" },
          { text: "Nuxt", link: "/pages/77e451/" },
          { text: "UI库文章", link: "/pages/iconify/" },
          { text: "Docker", link: "/pages/70f42e/" },
        ],
      },
      {
        text: "更多",
        link: "/more/",
        items: [
          { text: "学习", link: "/pages/f2a556/" },
          { text: "面试", link: "/pages/aea6571b7a8bae86/" },
          { text: "心情杂货", link: "/pages/2d615df9a36a98ed/" },
          { text: "实用技巧", link: "/pages/baaa02/" },
          { text: "友情链接", link: "/friends/" },
        ],
      },
      // { text: "关于", link: "/about/" },
      {
        text: "收藏",
        link: "/pages/beb6c0bd8a66cea6/",
        // items: [
        //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
        //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
        //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
        // ],
      },
      {
        text: "索引",
        link: "/archives/",
        items: [
          { text: "分类", link: "/categories/" },
          { text: "标签", link: "/tags/" },
          { text: "归档", link: "/archives/" },
        ],
      },
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: "/img/heimaoio.webp", // 导航栏logo
    repo: "yemao-zi", // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: "上次更新", // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: "docs", // 编辑的文件夹
    editLinks: true, // 启用编辑
    editLinkText: "编辑",

    // category: false, // 是否打开分类功能，默认true
    // tag: false, // 是否打开标签功能，默认true
    // archive: false, // 是否打开归档功能，默认true
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    // bodyBgImg: [
    //   'xxx.jpeg',
    //   'xxx.jpeg',
    //   'xxx.jpeg'
    // ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
    // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0.1~ 1.0, 默认0.5
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

    // updateBar: { // 最近更新栏
    //   showToArticle: false, // 显示到文章页底部，默认true
    //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    // },
    // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
    // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
    // pageButton: false, // 是否显示快捷翻页按钮，默认true

    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: "structuring",

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: "夜猫子", // 必需
      link: "https://github.com/yemao-zi", // 可选的
    },

    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar: "/img/heimao.webp",
      name: "夜猫子",
      slogan: "前端练习生",
    },

    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.yemao-zi.com/pages/a20ce8/#social)
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: "icon-youjian",
          title: "发邮件",
          link: "mailto:1794541268@qq.com",
        },
        {
          iconClass: "icon-github",
          title: "GitHub",
          link: "https://github.com/yemao-zi",
        },
        {
          iconClass: "icon-erji",
          title: "听音乐",
          link: "https://music.163.com/#/playlist?id=755597173",
        },
      ],
    },
    extendFrontmatter: {
      author: {
        name: "夜猫子",
        link: "https://github.com/yemao-zi",
      },
      titleTag: "",
    },
    // 页脚信息
    footer: {
      createYear: 2019, // 博客创建年份
      copyrightInfo:
        'Study | <a href="https://github.com/yemao-zi.io" target="_blank">MIT License</a>', // 博客版权信息，支持a标签或换行标签</br>
    },

    // 自定义hmtl(广告)模块
    // htmlModules
  },

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ["script", { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" }],
    ["script", { src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" }],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    ["script", { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" }],
    ["link", { rel: "icon", href: "/img/heimaoio.webp" }], //favicons，资源放在public文件夹
    [
      "meta",
      {
        name: "keywords",
        content:
          "前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown",
      },
    ],
    ["meta", { name: "theme-color", content: "#11a8cd" }], // 移动浏览器主题颜色
  ],

  // 插件配置
  plugins: <UserPlugins>[
    // 全文搜索
    // "fulltext-search",// 此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！
    // 可以添加第三方搜索链接的搜索框
    [
      "thirdparty-search",
      {
        thirdparty: [
          {
            title: "在Bing中搜索",
            frontUrl: "https://cn.bing.com/search?q=",
          },
        ],
      },
    ],
    [
      "one-click-copy", // 代码块复制按钮
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: "复制成功", // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],
    [
      "demo-block", // demo演示模块
      {
        settings: {
          jsfiddle: false, // 是否显示 jsfiddle 链接
          codepen: true, // 是否显示 codepen 链接
          horizontal: false, // 是否展示为横向样式
        },
      },
    ],
    [
      "vuepress-plugin-zooming", // 放大图片
      {
        selector: ".theme-content img:not(.no-zoom)", // 排除class是no-zoom的图片
        options: {
          bgColor: "rgba(0,0,0,0.6)",
        },
      },
    ],
    [
      "vuepress-plugin-comment", // 评论
      {
        choosen: "gitalk",
        options: {
          clientID: "5e6eceb12d05bdb71cda",
          clientSecret: "a2f7fa11553dcda70f0f92617ce4eda04a4ee281",
          repo: "blog-gitalk-comment", // GitHub 仓库
          owner: "yemao-zi", // GitHub仓库所有者
          admin: ["yemao-zi"], // 对仓库有写权限的人
          // distractionFreeMode: true,
          pagerDirection: "last", // 'first'正序 | 'last'倒序
          id: "<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>", //  页面的唯一标识,长度不能超过50
          title: "「评论」<%- frontmatter.title %>", // GitHub issue 的标题
          labels: ["Gitalk", "Comment"], // GitHub issue 的标签
          body: "页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>", // GitHub issue 的内容
        },
      },
      //   {
      //     choosen: "valine",
      //     options: {
      //       appId: "uYYVXeOP6qFlqnxydyT45TO4-gzGzoHsz",
      //       appKey: "FOgEh8WLa29SzAZLHztXCsU5",
      //       // distractionFreeMode: true,
      //       pagerDirection: "last", // 'first'正序 | 'last'倒序
      //       path: "<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>", //  页面的唯一标识
      //     },
      //   },
      // ],
      [
        "@vuepress/last-updated", // "上次更新"时间格式
        {
          transformer: (timestamp, lang) => {
            return dayjs(timestamp).format("YYYY/MM/DD, HH:mm:ss");
          },
        },
      ],
    ],
  ],

  markdown: {
    lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4"], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    ".vuepress/config.ts",
    // '.vuepress/config/htmlModules.ts',
  ],
});
