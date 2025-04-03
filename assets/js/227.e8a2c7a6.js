(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{599:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("Nest 内置了很多装饰器，大多数功能都是通过装饰器来使用的。")]),t._v(" "),s("p",[t._v("但当这些装饰器都不满足需求的时候，能不能自己开发呢？")]),t._v(" "),s("p",[t._v("装饰器比较多的时候，能不能把多个装饰器合并成一个呢？")]),t._v(" "),s("p",[t._v("自然是可以的。")]),t._v(" "),s("p",[t._v("很多内置装饰器我们都可以自己实现。")]),t._v(" "),s("p",[t._v("我们来试试看：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("nest new custom-decorator -p npm\n")])])]),s("p",[t._v("创建个 nest 项目。")]),t._v(" "),s("p",[t._v("执行")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("nest g decorator aaa --flat\n")])])]),s("p",[t._v("创建个 decorator。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2025/03/19/wt1x9vM32Lz6Qkd.png",alt:""}})]),t._v(" "),s("p",[t._v("这个装饰器就是自定义的装饰器。")]),t._v(" "),s("p",[t._v("之前我们是这样用的 @SetMetadata")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2025/03/19/DCKzuSAyETp5gJi.png",alt:""}})]),t._v(" "),s("p",[t._v("然后加个 Guard 取出来做一些判断：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("nest g guard aaa --flat --no-spec\n")])])]),s("h2",{attrs:{id:"示例-设置-metadata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-设置-metadata"}},[t._v("#")]),t._v(" 示例：设置 metadata")]),t._v(" "),s("p",[t._v("guard 里使用 reflector 来取 metadata：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CanActivate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ExecutionContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Inject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Injectable "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nestjs/common'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Reflector "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nestjs/core'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Observable "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rxjs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Injectable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AaaGuard")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CanActivate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  @"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Inject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Reflector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("reflector")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Reflector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("canActivate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("context")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ExecutionContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" boolean "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Promise"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("boolean"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Observable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("boolean"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reflector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aaa'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])]),s("p",[t._v("加到路由上：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2025/03/19/HvaGLtB9lFn7bAi.png",alt:""}})]),t._v(" "),s("p",[t._v("把服务跑起来：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm run start:dev\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("然后访问 http://localhost:3000 可以看到打印的 metadata")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2025/03/19/fgDWAxsLJGMIblY.png",alt:""}})]),t._v(" "),s("p",[t._v("但是不同 metadata 有不同的业务场景，有的是用于权限的，有的是用于其他场景的。")]),t._v(" "),s("p",[t._v("但现在都用 @SetMetadata 来设置太原始了。")]),t._v(" "),s("p",[t._v("这时候就可以这样封装一层：")]),t._v(" "),s("h2",{attrs:{id:"封装-metadata-装饰器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#封装-metadata-装饰器"}},[t._v("#")]),t._v(" 封装 metadata 装饰器")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2025/03/19/LOrNTfEyxaMX97K.png",alt:""}})]),t._v(" "),s("p",[t._v("装饰器就可以简化成这样：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2025/03/19/kuEnB7sKrGyamhA.png",alt:""}})]),t._v(" "),s("p",[t._v("还有，有没有觉得现在装饰器太多了，能不能合并成一个呢？")]),t._v(" "),s("p",[t._v("当然也是可以的。")]),t._v(" "),s("p",[t._v("这样写：")]),t._v(" "),s("h2",{attrs:{id:"合并多个装饰器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合并多个装饰器"}},[t._v("#")]),t._v(" 合并多个装饰器")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" applyDecorators"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" UseGuards "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nestjs/common'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Aaa "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./aaa.decorator'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" AaaGuard "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./aaa.guard'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Bbb")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" role")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("applyDecorators")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Aaa")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("role"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseGuards")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AaaGuard"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("p",[t._v("在自定义装饰器里通过 "),s("code",[t._v("applyDecorators")]),t._v(" 调用其他装饰器。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2025/03/19/ClhMyi3vIoLXmK7.png",alt:""}})]),t._v(" "),s("p",[t._v("这三个 handler 的装饰器都是一样的效果。")]),t._v(" "),s("p",[t._v("这就是自定义方法装饰器。")]),t._v(" "),s("h2",{attrs:{id:"自定义参数装饰器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义参数装饰器"}},[t._v("#")]),t._v(" 自定义参数装饰器")]),t._v(" "),s("p",[t._v("此外，也可以自定义参数装饰器：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createParamDecorator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ExecutionContext "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nestjs/common'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Ccc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createParamDecorator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ctx")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ExecutionContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ccc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("先用用看：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2025/03/19/YVnj3UidDATbfR5.png",alt:""}})]),t._v(" "),s("p",[t._v("大家猜这个 c 参数的值是啥？")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2025/03/19/eqGWhfvXzNnH8AP.png",alt:""}})]),t._v(" "),s("p",[t._v("没错，就是 ccc，也就是说参数装饰器的返回值就是参数的值。")]),t._v(" "),s("p",[t._v("回过头来看看这个装饰器：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2025/03/19/Zc2IJWugsAym46k.png",alt:""}})]),t._v(" "),s("p",[t._v("data 很明显就是传入的参数，而 ExecutionContext 前面用过，可以取出 request、response 对象。")]),t._v(" "),s("p",[t._v("这样那些内置的 @Param、@Query、@Ip、@Headers 等装饰器，我们是不是能自己实现了呢？")]),t._v(" "),s("p",[t._v("我们来试试看：")]),t._v(" "),s("h2",{attrs:{id:"实现-headers-装饰器获取请求头"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现-headers-装饰器获取请求头"}},[t._v("#")]),t._v(" 实现 "),s("code",[t._v("@Headers")]),t._v(" 装饰器获取请求头")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createParamDecorator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ExecutionContext "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nestjs/common'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Request "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'express'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MyHeaders "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createParamDecorator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ctx")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ExecutionContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("request")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Request "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("switchToHttp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" key "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLowerCase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("通过 "),s("code",[t._v("ExecutionContext")]),t._v(" 取出 request 对象，然后调用 "),s("code",[t._v("getHeader")]),t._v(" 方法取到 key 对应的请求头返回。")]),t._v(" "),s("p",[t._v("效果如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2025/03/19/Z2BdaAsKP8HGctr.png",alt:""}})]),t._v(" "),s("p",[t._v("分别通过内置的 @Headers 装饰器和我们自己实现的 @MyHeaders 装饰器来取请求头，结果是一样的。")]),t._v(" "),s("h2",{attrs:{id:"实现-query-装饰器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现-query-装饰器"}},[t._v("#")]),t._v(" 实现 @Query 装饰器")]),t._v(" "),s("p",[t._v("再来实现下 @Query 装饰器：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MyQuery "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createParamDecorator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ctx")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ExecutionContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("request")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Request "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("switchToHttp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("用一下试试看：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2025/03/19/wfezorXMyb7AuKQ.png",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2025/03/19/4OPHpyM2mthY9fB.png",alt:""}})]),t._v(" "),s("p",[t._v("和内置的 Query 用起来一毛一样！")]),t._v(" "),s("p",[t._v("同理，其他内置参数装饰器我们也能自己实现。")]),t._v(" "),s("p",[t._v("而且这些装饰器和内置装饰器一样，可以使用 Pipe 做参数验证和转换：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2025/03/19/1dQWnfimY6kvgKC.png",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2025/03/19/NjbHrGfKQVW5Upc.png",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2025/03/19/c7X49xFMWPYqu2m.png",alt:""}})]),t._v(" "),s("p",[t._v("知道了如何自定义方法和参数的装饰器，那 class 的装饰器呢？")]),t._v(" "),s("p",[t._v("其实这个和方法装饰器的定义方式一样：")]),t._v(" "),s("h2",{attrs:{id:"实现-class-装饰器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现-class-装饰器"}},[t._v("#")]),t._v(" 实现 @Class 装饰器")]),t._v(" "),s("p",[t._v("比如单个装饰器：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2025/03/19/oeniHNLpAh4Oc2G.png",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2025/03/19/zlwu8TM6jpvQfVy.png",alt:""}})]),t._v(" "),s("p",[t._v("可以看到自定义装饰器生效了：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2025/03/19/A9GwUrxd1ylbZSf.png",alt:""}})]),t._v(" "),s("p",[t._v("也可以通过 applyDecorators 组合多个装饰器：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2025/03/19/lxnSgcJqD67Z4I5.png",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2025/03/19/DU67dsyl4ZqNoXB.png",alt:""}})]),t._v(" "),s("p",[t._v("在 guard 里加一条打印：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2025/03/19/ZgDBd2VijqTwWkM.png",alt:""}})]),t._v(" "),s("p",[t._v("浏览器访问下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2025/03/19/h8nzHiN5l1BFpts.png",alt:""}})]),t._v(" "),s("p",[t._v("可以看到 metadata 也设置成功了：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2025/03/19/2KNCZIFLgVvzlYc.png",alt:""}})]),t._v(" "),s("p",[t._v("案例代码在"),s("a",{attrs:{href:"https://github.com/QuarkGluonPlasma/nestjs-course-code/tree/main/custom-decorator",target:"_blank",rel:"noopener noreferrer"}},[t._v("小册仓库"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("内置装饰器不够用的时候，或者想把多个装饰器合并成一个的时候，都可以自定义装饰器。")]),t._v(" "),s("p",[t._v("方法的装饰器就是传入参数，调用下别的装饰器就好了，比如对 "),s("code",[t._v("@SetMetadata")]),t._v(" 的封装。")]),t._v(" "),s("p",[t._v("如果组合多个方法装饰器，可以使用 "),s("code",[t._v("applyDecorators api")]),t._v("。")]),t._v(" "),s("p",[t._v("class 装饰器和方法装饰器一样。")]),t._v(" "),s("p",[t._v("还可以通过 "),s("code",[t._v("createParamDecorator")]),t._v(" 来创建参数装饰器，它能拿到 "),s("code",[t._v("ExecutionContext")]),t._v("，进而拿到 "),s("code",[t._v("reqeust")]),t._v("、"),s("code",[t._v("response")]),t._v("，可以实现很多内置装饰器的功能，比如 "),s("code",[t._v("@Query")]),t._v("、"),s("code",[t._v("@Headers")]),t._v(" 等装饰器。")]),t._v(" "),s("p",[t._v("通过自定义方法和参数的装饰器，可以让 Nest 代码更加的灵活。")])])}),[],!1,null,null,null);s.default=e.exports}}]);