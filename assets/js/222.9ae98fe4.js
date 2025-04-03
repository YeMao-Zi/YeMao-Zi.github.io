(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{594:function(s,t,a){"use strict";a.r(t);var n=a(5),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("不少同学都是用 "),t("code",[s._v("console.log")]),s._v(" 调试的，哪怕工作很多年依然是这样，这样有个致命的缺点：")]),s._v(" "),t("p",[s._v("你只能看到某个点的变量值，而看不到代码的整个执行路线。")]),s._v(" "),t("p",[s._v("对于复杂的项目来说，会用断点调试是必须的，因为这样可以看到作用域、调用栈，也就是代码的执行路线，然后单步运行来看变量的变化。")]),s._v(" "),t("p",[s._v("一般我们都在 "),t("code",[s._v("VSCode")]),s._v(" 里写代码，因此调试的时候最好也是在"),t("code",[s._v("VSCode")]),s._v("编辑器里面调试，下面介绍一种最优雅的方式。")]),s._v(" "),t("p",[s._v("一般我们启动 "),t("code",[s._v("nestjs")]),s._v(" 服务都是通过"),t("code",[s._v("package.json")]),s._v("的命令行"),t("code",[s._v("npm run start:dev")]),s._v("来启动的")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"start"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nest start"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"start:dev"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nest start --watch"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"start:debug"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nest start --debug --watch"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("因此，调试的时候我们需要也要启动这个命令，如何做呢？")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2025/03/14/53hn2m7iRdGIXCF.webp",alt:"image.png"}})]),s._v(" "),t("h2",{attrs:{id:"方式一"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方式一"}},[s._v("#")]),s._v(" 方式一")]),s._v(" "),t("p",[s._v("通过配置 "),t("code",[s._v("launch.json")]),s._v(" 文件进行调试。")]),s._v(" "),t("p",[s._v("点击调试面板的 "),t("code",[s._v("eate launch.json file")]),s._v("，选择"),t("code",[s._v("nodejs")]),s._v("，会创建 "),t("code",[s._v(".vscode/launch.json")]),s._v(" 的调试配置文件，删除原有的配置文件，然后选择"),t("code",[s._v("nodejs:Launch via npm")]),s._v(":")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2025/03/14/6zb1M34GJfAedQO.webp",alt:"image.png"}})]),s._v(" "),t("p",[s._v("修改"),t("code",[s._v("runtimeArgs")]),s._v("、"),t("code",[s._v("runtimeExecutable")]),s._v("，如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.2.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"configurations"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"debug nestjs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"request"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"launch"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"runtimeArgs"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"run"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start:dev"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"runtimeExecutable"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"skipFiles"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<node_internals>/**"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("这里的 "),t("code",[s._v("runtimeExecutable")]),s._v(" 代表执行什么命令，"),t("code",[s._v("runtimeArgs")]),s._v(" 传参数，拼接起来就是"),t("code",[s._v("npm run start:dev")]),s._v("，这样就和"),t("code",[s._v("package.json")]),s._v("里面的"),t("code",[s._v("npm run start:dev")]),s._v("是一样的。")]),s._v(" "),t("p",[s._v("在需要断点处打上断点，然后点击右上角的按钮，启动调试：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2025/03/14/cfjlOE7Q8ad12vz.webp",alt:"image.png"}})]),s._v(" "),t("blockquote",[t("p",[s._v("注意，这时候我们并不需要在控制台用命令行启动"),t("code",[s._v("npm run start:dev")]),s._v("，当点击调试按钮时，就相当于已经执行了"),t("code",[s._v("npm run start:dev")]),s._v("。")])]),s._v(" "),t("p",[s._v("在浏览器输入"),t("code",[s._v("localhost:3000")]),s._v("，可以发现已经停在了断点处。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2025/03/14/cbdwIsvHiWDT7Rp.webp",alt:"image.png"}})]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("lauch.json")]),s._v("中还有一个配置：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"console"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"integratedTerminal"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果不加这个配置，调试展示的信息是在 "),t("code",[s._v("DEBUG CONSOLE")]),s._v("中，这里面没有打印的信息没有颜色。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2025/03/14/lVinz94pvhGA6Nt.webp",alt:"image.png"}})]),s._v(" "),t("p",[s._v("我们也可以指定打印的信息在"),t("code",[s._v("vscode")]),s._v("自带的终端中显示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2025/03/14/7QiuXbOnqCftYE6.webp",alt:"image.png"}})]),s._v(" "),t("h2",{attrs:{id:"方式二"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方式二"}},[s._v("#")]),s._v(" 方式二")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"start"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nest start"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"start:dev"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nest start --watch"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"start:debug"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nest start --debug --watch"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("直接通过命令 "),t("code",[s._v("npm run start:debug")]),s._v(" 启动")]),s._v(" "),t("p",[s._v("不过这种方法需要配置 Attach 调试为总是。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2025/03/14/qkbcJfuoQ65sxnm.png",alt:"image-20250314182700947"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);