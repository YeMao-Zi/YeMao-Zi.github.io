(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{877:function(s,t,a){"use strict";a.r(t);var e=a(5),v=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"起因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#起因"}},[s._v("#")]),s._v(" 起因")]),s._v(" "),t("p",[s._v("日常开发过程中，前端同学有的用macos，有的用windows，这两个平台在处理文件换行符的时候，默认会用不同的处理方式。")]),s._v(" "),t("p",[s._v("在windows上，如果你不做一些设置的话，默认将文件换行符设置为"),t("code",[s._v("CRLF")]),s._v("，然而在macos等类unix系统上，则是将文件换行符默认设置为"),t("code",[s._v("LF")]),s._v("这个选项，这样，别人提交的代码是"),t("code",[s._v("LF")]),s._v("格式的换行（macos），你提交的代码是"),t("code",[s._v("CRLF")]),s._v("格式的（windows），就会造成“冲突”啦。")]),s._v(" "),t("p",[s._v("这种冲突的表现就是我明明一行代码都没改，但是整个文件上半部分是红色，下半部分是绿色？其实是因为git认为你的所有换行符改掉了，从而识别出来的。")]),s._v(" "),t("h3",{attrs:{id:"解决方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[s._v("#")]),s._v(" 解决方法")]),s._v(" "),t("p",[s._v("我使用的解决办法就是默认都采用"),t("code",[s._v("LF")]),s._v("格式的代码，无论是本地的代码还是提交到远程的代码。")]),s._v(" "),t("h4",{attrs:{id:"_1-查看文本换行的办法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看文本换行的办法"}},[s._v("#")]),s._v(" （1）查看文本换行的办法")]),s._v(" "),t("p",[s._v("使用vscode开发的同学可以看vscode的右下角有个地方显示了换行的标准。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2023/03/14/uNlJAGyX87wIW1M.webp",alt:"img"}})]),s._v(" "),t("p",[s._v("从这个地方就可以看到文件换行的方法了。 点击这个LF，可以看到一个切换的地方，可以把本文件的换行标准给改掉了。")]),s._v(" "),t("h4",{attrs:{id:"_2-如何改变默认换行标准"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何改变默认换行标准"}},[s._v("#")]),s._v(" （2）如何改变默认换行标准")]),s._v(" "),t("p",[s._v("虽然上面这个方法可以改变一个文件的换行字符，但是windows上默认创建个文件是CRLF的，总不能创建一个再转吧，其实vscode是有这个设置的:")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2023/03/14/4GwJZk2HU97dbNy.webp",alt:"img"}})]),s._v(" "),t("p",[s._v("打开设置选项，添加一行配置：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"files.eol"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这样就可以保证"),t("strong",[s._v("新创建的文件")]),s._v("使用的是"),t("code",[s._v("LF")]),s._v("标准作为换行符。")]),s._v(" "),t("h4",{attrs:{id:"_3-确保git不会帮你转换格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-确保git不会帮你转换格式"}},[s._v("#")]),s._v(" （3）确保git不会帮你转换格式")]),s._v(" "),t("p",[s._v("其实git也知道这两个平台的差别，因此有一套关于这个的配置，就是"),t("code",[s._v("core.autoclrf")]),s._v("这个选项，这个选项有如下配置：")]),s._v(" "),t("ul",[t("li",[s._v("true  提交时转换为LF，检出时转换为CRLF")]),s._v(" "),t("li",[s._v("false 提交检出均不转换")]),s._v(" "),t("li",[s._v("input 提交时转换为LF，检出时不转换")])]),s._v(" "),t("p",[s._v("我们只需要将这个属性设置成下面这样就可以了")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" core.autocrlf "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("共同开发项目的时候遇到一些git上面的冲突其实还是挺让人恼火的，我就因为这个被队友把写的代码都弄没了。知道这个坑以后，下次开发就可以提前配置好环境（一般是windows环境做配置），流畅开发项目。")])])}),[],!1,null,null,null);t.default=v.exports}}]);