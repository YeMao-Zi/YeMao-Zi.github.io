(window.webpackJsonp=window.webpackJsonp||[]).push([[509],{874:function(s,a,e){"use strict";e.r(a);var n=e(7),r=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"名词解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[s._v("#")]),s._v(" 名词解释")]),s._v(" "),a("h3",{attrs:{id:"monorepo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monorepo"}},[s._v("#")]),s._v(" monorepo")]),s._v(" "),a("blockquote",[a("p",[s._v("利用单一仓库来管理多个 packages 的一种策略，如早期的 lerna")])]),s._v(" "),a("h3",{attrs:{id:"workspace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workspace"}},[s._v("#")]),s._v(" workspace")]),s._v(" "),a("blockquote",[a("p",[s._v("由上述单仓多包催生的管理方式，workspace（工作空间） 是 npm、yarn、pnpm 等包管理工具提供的一种特性，用于管理多个包的依赖关系。\n合理配置 workspace 后，包之间互相依赖不需要使用 npm link，将在 install 时中处理")])]),s._v(" "),a("h2",{attrs:{id:"在-pnpm-中使用-workspace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-pnpm-中使用-workspace"}},[s._v("#")]),s._v(" 在 pnpm 中使用 workspace")]),s._v(" "),a("blockquote",[a("p",[s._v("A workspace must have a pnpm-workspace.yaml file in its root. A workspace also may have an .npmrc in its root.\n如文档描述，启用 pnpm 的 workspace 需要在项目根目录创建 pnpm-workspace.yaml")])]),s._v(" "),a("h3",{attrs:{id:"项目结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目结构"}},[s._v("#")]),s._v(" 项目结构")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("my-monorepo\n├── docs\n├── apps\n│   └── web\n├── packages\n│   ├── ui\n│   ├── eslint-config\n│   └── shared-utils\n├── pnpm-workspace.yaml\n├── .npmrc => optional\n└── sdk\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"根目录-package-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根目录-package-json"}},[s._v("#")]),s._v(" 根目录 package.json")]),s._v(" "),a("blockquote",[a("p",[s._v("private: If you set “private”: true in your package.json, then npm will refuse to publish it.")]),s._v(" "),a("p",[s._v("私有化为 true 时，在 publish 时 npm 将不会处理该 package，你可以在项目的根目录配置，或在不需要被 publish 的 workspace 中配置它")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n  "name": "my-monorepo",\n  "private": true,\n  "script": {\n    "dev": "pnpm -r dev"\n  }\n} \n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"pnpm-workspace-yaml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pnpm-workspace-yaml"}},[s._v("#")]),s._v(" pnpm-workspace.yaml")]),s._v(" "),a("blockquote",[a("p",[s._v("在该项目中指定位于 my-monorepo/apps/ 和 my-monorepo/packages/ 内的直接子目录为工作区如 web、ui 等\n而 docs 本身则为一个工作区，则不需要通配符")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('packages:\n  - "docs"\n  - "apps/*"\n  - "packages/*"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"具体语法-glob-通配符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体语法-glob-通配符"}},[s._v("#")]),s._v(" 具体语法 - glob 通配符")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("packages:\n  # 选择 packages 目录下的所有首层子目录的包\n  - 'packages/*'\n  # 选择 components 目录下所有层级的包\n  - 'components/**'\n  # 排除所有包含 test 的包\n  - '!**/test/**'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"安装依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[s._v("#")]),s._v(" 安装依赖")]),s._v(" "),a("p",[s._v("/my-monorepo/：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pnpm install\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"在根目录中安装依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在根目录中安装依赖"}},[s._v("#")]),s._v(" 在根目录中安装依赖")]),s._v(" "),a("p",[s._v("/my-monorepo/：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pnpm add <package-name> -w\n# or\npnpm add <package-name> --workspace-root\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"给指定-workspace-工作空间-安装依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#给指定-workspace-工作空间-安装依赖"}},[s._v("#")]),s._v(" 给指定 workspace（工作空间） 安装依赖")]),s._v(" "),a("p",[s._v("/my-monorepo/：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pnpm add <package-name> --filter <workspace-name>\n# or\npnpm add lodash --filter docs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"更新依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新依赖"}},[s._v("#")]),s._v(" 更新依赖")]),s._v(" "),a("p",[s._v("更新根目录依赖，看执行路径")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pnpm update <package-name> [-w]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("更新指定 workspace 依赖")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pnpm update <package-name> --filter <workspace-name>\n# or\npnpm update lodash --filter docs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("卸载依赖")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pnpm uninstall <package-name> [-w]\n# or\npnpm uninstall <package-name> --filter <workspace-name>\n# or\npnpm uninstall lodash --filter docs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"执行脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行脚本"}},[s._v("#")]),s._v(" 执行脚本")]),s._v(" "),a("p",[s._v("执行 workspace 中的脚本")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pnpm dev --filter docs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("执行所有 workspace 中脚本")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pnpm -r dev\n# or\n$ pnpm --recursive dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("或者在根目录的 package.json 中配置")]),s._v(" "),a("p",[s._v("/my-monorepo/package.json：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n  "name": "my-monorepo",\n  "script": {\n    "docs:dev": "pnpm dev --filter docs"\n  }\n} \n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("直接执行")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pnpm docs:dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"安装内部-workspace-依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装内部-workspace-依赖"}},[s._v("#")]),s._v(" 安装内部 workspace 依赖")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pnpm add <package-name> --filter <workspace-name>\n# or\npnpm add web --filter docs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[s._v("笔记")]),s._v(" "),a("p",[s._v('请注意你当前的 pnpm 版本，在 9.0 后 pnpm 修改 link-workspace-packages 的默认值为 false。该属性开启后，你在安装依赖时优先在本地链接，而不是从 registry（远程） 中下载。\n所以在这个版本你若需要使用命令安装一个新的 workspace 中的依赖需要在 .npmrc 中启用 link-workspace-packages\n当然主动在 package.json 中声明的依赖不受影响，如 web: "workspace:*"，pnpm 还是会自动处理，这种不确定性的执行结果可能是导致 pnpm 在该版本中禁用了该值出处。')])]),s._v(" "),a("p",[a("strong",[s._v("在 .npmrc 中")])]),s._v(" "),a("p",[s._v(".npmrc：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("link-workspace-packages = true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("或临时启用")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pnpm add <package-name> --filter <workspace-name> --link-workspace-packages=true\n# or\npnpm add web --filter docs --link-workspace-packages=true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("执行结果")])]),s._v(" "),a("p",[s._v("/my-monorepo/packages/docs/package.json：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n  "name": "docs",\n  "dependencies": {\n    "web": "workspace:^"\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"什么是-workspace-semver-版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-workspace-semver-版本"}},[s._v("#")]),s._v(" 什么是 workspace:^ - semver 版本")]),s._v(" "),a("blockquote",[a("p",[s._v("你可能好奇 workspace:^ 是怎么生成的，后面 pnpm 是怎么如何转化的？")])]),s._v(" "),a("p",[s._v("当你将依赖项添加到 package.json 中时，pnpm 根据 .npmrc 或命令行中的 save-workspace-protocol 字段来决定是否使用 workspace: 协议，并根据 save-prefix 字段来决定版本的前缀（semver）")]),s._v(" "),a("p",[s._v('例如，save-prefix 为 "~" ，save-workspace-protocol 为 true 时')]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n  "name": "docs",\n  "dependencies": {\n    "web": "workspace:~1.0.0"\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("转化")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n\t"dependencies": {\n\t\t"foo": "workspace:*",\n\t\t"bar": "workspace:~",\n\t\t"qar": "workspace:^",\n\t\t"zoo": "workspace:^1.5.0"\n\t}\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n\t"dependencies": {\n\t\t"foo": "1.5.0",\n\t\t"bar": "~1.5.0",\n\t\t"qar": "^1.5.0",\n\t\t"zoo": "^1.5.0"\n\t}\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 安装依赖\n$ pnpm install\n\n# 给指定 workspace 安装依赖\n$ pnpm add <package-name> --filter <workspace-name>\n\n# 卸载依赖\n$ pnpm uninstall <package-name> --filter <workspace-name>\n\n# 更新依赖\n$ pnpm update <package-name> --filter <workspace-name>\n\n# 给根目录安装依赖 - -w 为安装 -workspace-root\n$ pnpm add <package-name> -<D>w\n\n# 内部包的互相引用 - 前提 .npmrc 中配置 link-workspace-packages = true\n# 若未配置需手动\n$ pnpm add <package-name> --filter <workspace-name>\n\n# 执行 workspace 中的脚本, 或者在根目录的 package.json 中配置\n$ pnpm dev --filter docs\n# 执行所有 workspace 中的脚本 \n$ pnpm -r dev\n# or\n$ pnpm --recursive dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);