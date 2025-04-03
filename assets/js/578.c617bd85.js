(window.webpackJsonp=window.webpackJsonp||[]).push([[578],{947:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"midway-应用迁移"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#midway-应用迁移"}},[s._v("#")]),s._v(" Midway 应用迁移")]),s._v(" "),t("p",[s._v("更多内容，可查阅官方文档 "),t("a",{attrs:{href:"http://www.midwayjs.org/docs/serverless/migrate_midway",target:"_blank",rel:"noopener noreferrer"}},[s._v("Midway Serverless"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("我们在初始 "),t("code",[s._v("Midway")]),s._v(" 项目时, 选用的是纯 "),t("code",[s._v("Node.js")]),s._v(" 这种方式，并以 "),t("code",[s._v("koa")]),s._v(" 作为了项目的 "),t("code",[s._v("context")]),s._v("。")]),s._v(" "),t("p",[s._v("当初选这项方式的原因是，这项方式可以在部署时将 纯 "),t("code",[s._v("Node.js")]),s._v(" 方式创建的项目平滑过渡到 "),t("code",[s._v("Serverless")]),s._v(" 部署，同时这两种方式还都可以保留。")]),s._v(" "),t("p",[s._v("最终在测试环境，将项目通过 "),t("code",[s._v("docker compose")]),s._v(" 的方式进行部署，在生产环境使用 "),t("code",[s._v("Serverless")]),s._v(" 部署。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2023/09/05/VaswbGEkA2PMXxu.png",alt:"img"}}),t("img",{attrs:{src:"https://s2.loli.net/2023/09/05/tBiYkpQJSHA9mlj.png",alt:"img"}})]),s._v(" "),t("h3",{attrs:{id:"创建-f-yml-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-f-yml-文件"}},[s._v("#")]),s._v(" 创建 f.yml 文件")]),s._v(" "),t("p",[s._v("关于什么是 f.yml 文件 和关于此文件的更多配置，请见"),t("a",{attrs:{href:"http://www.midwayjs.org/docs/serverless/serverless_yml",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("在项目的根目录下创建，与 "),t("code",[s._v("package.json")]),s._v(" 同级")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("service")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" tutu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("web"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("provider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" aliyun\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runtime")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nodejs14\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("package")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("exclude")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" package"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("lock.json\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" bootstrap.js\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("deployType")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" koa "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 部署的应用类型")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 3.0.0\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不自动生成域名，最终方式时需要手动配置域名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("custom")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("customDomain")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自动生成域名，但是有时效性，过期该域名就会失效")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# custom:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   customDomain:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     domainName: auto ")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("h3",{attrs:{id:"创建-app-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-app-js"}},[s._v("#")]),s._v(" 创建 app.js")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" WebFramework "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@midwayjs/koa'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Framework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Bootstrap "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@midwayjs/bootstrap'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("exports")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 加载框架并执行")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" Bootstrap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取依赖注入容器")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" container "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Bootstrap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getApplicationContext")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取 koa framework")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" framework "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" container"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("WebFramework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 返回 app 对象")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" framework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getApplication")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h3",{attrs:{id:"修改-package-json-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改-package-json-文件"}},[s._v("#")]),s._v(" 修改 package.json 文件")]),s._v(" "),t("p",[s._v("添加 "),t("code",[s._v("deploy")]),s._v(" 部署命令，并在发布时自动执行 "),t("code",[s._v("npm run build")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"midway-integration"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lifecycle"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"before:package:cleanup"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run build"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"deploy"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"midway-bin deploy"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"执行部署命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行部署命令"}},[s._v("#")]),s._v(" 执行部署命令")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cnpm run deploy\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("强烈大家在  "),t("code",[s._v("midway")]),s._v(" 项目中使用 "),t("code",[s._v("cnpm")]),s._v("，毕竟都是一家子，使用 "),t("code",[s._v("npm")]),s._v(" 在部署 "),t("code",[s._v("Serverless")]),s._v(" 环境的过程中，会"),t("code",[s._v("install")]),s._v(" 一个 "),t("code",[s._v("layers")]),s._v(" (层)，它会很慢很慢，我从来没见到过 "),t("code",[s._v("install")]),s._v(" 完成的样子")]),s._v(" "),t("h4",{attrs:{id:"输入-accesskeyid-和-accesskeysecret"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输入-accesskeyid-和-accesskeysecret"}},[s._v("#")]),s._v(" 输入 AccessKeyID 和 AccessKeySecret")]),s._v(" "),t("p",[s._v("在首次部署时，会让你键入 "),t("code",[s._v("AccessKeyID")]),s._v(" 和 "),t("code",[s._v("AccessKeySecret")]),s._v("，以部署到阿里云为例，"),t("code",[s._v("AccessKey")]),s._v(" 的位置在这；")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2023/09/05/lNV7xKqGCFPpmWf.png",alt:"img"}}),t("img",{attrs:{src:"https://s2.loli.net/2023/09/05/y5uCxSqEAZtTejK.png",alt:"img"}})]),s._v(" "),t("p",[s._v("部署完成后，云厂商会自动创建一个域名，点击此域名就可以进行访问了")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2023/09/05/RsrJTUC9VQY4DGI.png",alt:"img"}})]),s._v(" "),t("h3",{attrs:{id:"添加访问域名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加访问域名"}},[s._v("#")]),s._v(" 添加访问域名")]),s._v(" "),t("p",[s._v("如果你有自己的域名，那么要在 f.yml 中设置  "),t("code",[s._v("customDomain: false")])]),s._v(" "),t("p",[s._v("并且在域名管理中添加自定义域名")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2023/09/05/8GTb97dZPL4qoMn.png",alt:"img"}})]),s._v(" "),t("h4",{attrs:{id:"添加路由配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加路由配置"}},[s._v("#")]),s._v(" 添加路由配置")]),s._v(" "),t("p",[s._v("在域名管理中添加自定义域名，并配置路由，指定哪一个路径由哪一个函数进行处理")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2023/09/05/p7ZqAORTsx8Wg5D.png",alt:"img"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);