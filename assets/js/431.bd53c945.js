(window.webpackJsonp=window.webpackJsonp||[]).push([[431],{796:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"ref-原始类型包装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ref-原始类型包装"}},[s._v("#")]),s._v(" ref() 原始类型包装")]),s._v(" "),t("p",[s._v("使通过值传递的 "),t("code",[s._v("string")]),s._v(" 和 "),t("code",[s._v("number")]),s._v(" 等原始类型也能变得响应式。")]),s._v(" "),t("div",{staticClass:"language-ts line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script setup"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ref")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" obj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reactive")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" count "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ref 会被解包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("console")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("console")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"解析-ref"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解析-ref"}},[s._v("#")]),s._v(" 解析"),t("code",[s._v("$ref")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//html")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div ref"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'divRef'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    myDiv\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script setup"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" divRef"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ref")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("divRef"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("innerHtml"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//'myDiv'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"isref"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#isref"}},[s._v("#")]),s._v(" isRef()")]),s._v(" "),t("p",[s._v("检查某个值是否为 ref。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" unknown\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isRef")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// foo 的类型被收窄为了 Ref<unknown>")]),s._v("\n  foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"unref"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unref"}},[s._v("#")]),s._v(" unref()")]),s._v(" "),t("p",[s._v("如果参数是 ref，则返回内部值，否则返回参数本身。")]),s._v(" "),t("p",[s._v("这是 "),t("code",[s._v("val = isRef(val) ? val.value : val")]),s._v(" 计算的一个语法糖。")]),s._v(" "),t("div",{staticClass:"language-tsx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-tsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("useFoo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Ref"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" unwrapped "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("unref")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// unwrapped 现在保证为 number 类型")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"toref"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#toref"}},[s._v("#")]),s._v(" toRef()")]),s._v(" "),t("p",[s._v("基于一个响应式数据，创建新的 ref ,并与原响应式属性保持双向数据同步。")]),s._v(" "),t("p",[s._v("使用场景：将 Props 转化为 ref ,然后传递给一个组合式函数。")]),s._v(" "),t("div",{staticClass:"language-tsx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-tsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" state "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reactive")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  foo"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  bar"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" fooRef "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("toRef")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("state"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 更改该 ref 会更新源属性")]),s._v("\nfooRef"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("console")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("state"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 更改源属性也会更新该 ref")]),s._v("\nstate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foo"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("console")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fooRef"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h2",{attrs:{id:"reactive-对象类型包装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reactive-对象类型包装"}},[s._v("#")]),s._v(" reactive() 对象类型包装")]),s._v(" "),t("ul",[t("li",[s._v("reactive 只能用于对象包装（数组也是对象）。")]),s._v(" "),t("li",[s._v("响应式是深层次的。")]),s._v(" "),t("li",[s._v("直接替换掉响应式对象或使用解构赋值将会失去响应式。")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script setup"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" reactive "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" state "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reactive")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("count")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nstate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"torefs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#torefs"}},[s._v("#")]),s._v(" toRefs()")]),s._v(" "),t("p",[s._v("将一个响应式对象转换为一个普通对象，这个普通对象的每个属性都是指向源对象相应属性的 ref（使用解构也不会失去响应式了）。")]),s._v(" "),t("p",[s._v("使用场景：当从组合式函数中返回响应式对象时，使用"),t("code",[s._v("toRefs")]),s._v(" 进行包装，可以防止使用解构/展开返回对失去响应性。")]),s._v(" "),t("div",{staticClass:"language-tsx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-tsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" state "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reactive")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  foo"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  bar"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" stateAsRefs "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("toRefs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("state"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\nstateAsRefs 的类型：{\n  foo: Ref<number>,\n  bar: Ref<number>\n}\n*/")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这个 ref 和源属性已经“链接上了”")]),s._v("\nstate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foo"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("console")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("stateAsRefs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2")]),s._v("\n\nstateAsRefs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("console")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("state"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("h3",{attrs:{id:"isreactive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#isreactive"}},[s._v("#")]),s._v(" isReactive()")]),s._v(" "),t("p",[s._v("检查一个对象是否是由 "),t("a",{attrs:{href:"https://cn.vuejs.org/api/reactivity-core.html#reactive",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("reactive()")]),t("OutboundLink")],1),s._v(" 或 "),t("a",{attrs:{href:"https://cn.vuejs.org/api/reactivity-advanced.html#shallowreactive",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("shallowReactive()")]),t("OutboundLink")],1),s._v(" 创建的代理。")]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("类型")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("function isReactive(value: unknown): boolean\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"readonly-返回只读数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#readonly-返回只读数据"}},[s._v("#")]),s._v(" readonly() 返回只读数据")]),s._v(" "),t("p",[s._v("接受一个对象 (不论是响应式还是普通的) 或是一个 "),t("a",{attrs:{href:"https://cn.vuejs.org/api/reactivity-core.html#ref",target:"_blank",rel:"noopener noreferrer"}},[s._v("ref"),t("OutboundLink")],1),s._v("，返回一个原值的只读代理。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" original "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reactive")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("count")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" copy "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("readonly")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("original"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("watchEffect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 用来做响应性追踪")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("copy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 更改源属性会触发其依赖的侦听器")]),s._v("\noriginal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 更改该只读副本将会失败，并会得到s一个警告")]),s._v("\ncopy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// warning!")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h3",{attrs:{id:"isreadonly"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#isreadonly"}},[s._v("#")]),s._v(" isReadonly()")]),s._v(" "),t("p",[s._v("检查一个对象是否是由 "),t("a",{attrs:{href:"https://cn.vuejs.org/api/reactivity-core.html#readonly",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("readonly()")]),t("OutboundLink")],1),s._v(" 或 "),t("a",{attrs:{href:"https://cn.vuejs.org/api/reactivity-advanced.html#shallowreadonly",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("shallowReadonly()")]),t("OutboundLink")],1),s._v(" 创建的代理。")]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("类型")])]),s._v(" "),t("div",{staticClass:"language-tsx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-tsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isReadonly")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("unknown")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"isproxy-判断是否是响应式代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#isproxy-判断是否是响应式代理"}},[s._v("#")]),s._v(" isProxy() 判断是否是响应式代理")]),s._v(" "),t("p",[s._v("检查一个对象是否是由 "),t("a",{attrs:{href:"https://cn.vuejs.org/api/reactivity-core.html#reactive",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("reactive()")]),t("OutboundLink")],1),s._v("、"),t("a",{attrs:{href:"https://cn.vuejs.org/api/reactivity-core.html#readonly",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("readonly()")]),t("OutboundLink")],1),s._v("、"),t("a",{attrs:{href:"https://cn.vuejs.org/api/reactivity-advanced.html#shallowreactive",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("shallowReactive()")]),t("OutboundLink")],1),s._v(" 或 "),t("a",{attrs:{href:"https://cn.vuejs.org/api/reactivity-advanced.html#shallowreadonly",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("shallowReadonly()")]),t("OutboundLink")],1),s._v(" 创建的代理。")]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("类型")])]),s._v(" "),t("div",{staticClass:"language-tsx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-tsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isProxy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("unknown")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);