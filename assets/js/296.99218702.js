(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{661:function(t,e,a){"use strict";a.r(e);var s=a(7),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"创建可观测状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建可观测状态"}},[t._v("#")]),t._v(" 创建可观测状态")]),t._v(" "),e("p",[t._v("一共有三种方式创建可观测状态。")]),t._v(" "),e("p",[t._v("1.makeObservable。捕获监听对象并手动映射注解。")]),t._v(" "),e("p",[t._v("2.makeAutoObservable。加强版的 makeObservable ，会自动映射注解（减低心智，推荐使用）。")]),t._v(" "),e("p",[t._v("3.observable。以函数调用的方式进行注解，将整个对象变为可观测状态。")]),t._v(" "),e("h2",{attrs:{id:"makeobservable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#makeobservable"}},[t._v("#")]),t._v(" makeObservable")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("makeObservable(target, annotations?, options?)")])])]),t._v(" "),e("div",{staticClass:"language-tsx line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-tsx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" makeObservable"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" observable"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" computed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" flow "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mobx"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Doubler")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    value\n\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeObservable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            value"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" observable"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            double"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" computed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            increment"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" action"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            fetch"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" flow\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("double")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br")])]),e("h2",{attrs:{id:"makeautoobservable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#makeautoobservable"}},[t._v("#")]),t._v(" makeAutoObservable")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("makeAutoObservable(target, overrides?, options?)")])])]),t._v(" "),e("p",[t._v("自动推断规则：")]),t._v(" "),e("ul",[e("li",[t._v("所有 "),e("em",[t._v("自有")]),t._v(" 属性都成为 "),e("code",[t._v("observable")]),t._v("。")]),t._v(" "),e("li",[t._v("所有 "),e("code",[t._v("get")]),t._v("ters 都成为 "),e("code",[t._v("computed")]),t._v("。")]),t._v(" "),e("li",[t._v("所有 "),e("code",[t._v("set")]),t._v("ters 都成为 "),e("code",[t._v("action")]),t._v("。")]),t._v(" "),e("li",[t._v("所有 "),e("em",[t._v("prototype 中的 functions")]),t._v(" 都成为 "),e("code",[t._v("autoAction")]),t._v("。")]),t._v(" "),e("li",[t._v("所有 "),e("em",[t._v("prototype 中的 generator functions")]),t._v(" 都成为 "),e("code",[t._v("flow")]),t._v("。（需要注意，generators 函数在某些编译器配置中无法被检测到，如果 flow 没有正常运行，请务必明确地指定 "),e("code",[t._v("flow")]),t._v(" 注解。）")]),t._v(" "),e("li",[t._v("在 "),e("code",[t._v("overrides")]),t._v(" 参数中标记为 "),e("code",[t._v("false")]),t._v(" 的成员将不会被添加注解。例如，将其用于像标识符这样的只读字段。")])]),t._v(" "),e("h2",{attrs:{id:"observable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#observable"}},[t._v("#")]),t._v(" observable")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("observable(source, overrides?, options?)")])])]),t._v(" "),e("p",[t._v("使用 proxy 包装对象，并将其变为可观测的。")]),t._v(" "),e("p",[t._v("特性：")]),t._v(" "),e("ul",[e("li",[t._v("之后被添加到这个对象中的属性也将被侦测并使其转化为可观察对象（除非禁用 "),e("a",{attrs:{href:"https://www.mobxjs.com/configuration#proxy-%E9%80%89%E9%A1%B9",target:"_blank",rel:"noopener noreferrer"}},[t._v("proxy"),e("OutboundLink")],1),t._v("）")]),t._v(" "),e("li",[e("code",[t._v("observable")]),t._v(" 方法也可以被像 "),e("a",{attrs:{href:"https://www.mobxjs.com/api#observablearray",target:"_blank",rel:"noopener noreferrer"}},[t._v("arrays"),e("OutboundLink")],1),t._v("，"),e("a",{attrs:{href:"https://www.mobxjs.com/api#observablemap",target:"_blank",rel:"noopener noreferrer"}},[t._v("Maps"),e("OutboundLink")],1),t._v(" 和 "),e("a",{attrs:{href:"https://www.mobxjs.com/api#observableset",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sets"),e("OutboundLink")],1),t._v(" 这样的集合调用。这些集合也将被克隆并转化为可观察对象。")])]),t._v(" "),e("h2",{attrs:{id:"可用的注解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可用的注解"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://www.mobxjs.com/observable-state#%E5%8F%AF%E7%94%A8%E7%9A%84%E6%B3%A8%E8%A7%A3",target:"_blank",rel:"noopener noreferrer"}},[t._v("可用的注解"),e("OutboundLink")],1)]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("注解")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("observable")]),t._v(" "),e("code",[t._v("observable.deep")])]),t._v(" "),e("td",[t._v("定义一个存储 state 的可跟踪字段。如果可能，任何被赋值给 "),e("code",[t._v("observable")]),t._v(" 的字段都会基于它自己的类型被（深度）转化为"),e("code",[t._v("observable")]),t._v("、"),e("code",[t._v("autoAction")]),t._v(" 或 "),e("code",[t._v("flow")]),t._v("。只有 "),e("code",[t._v("plain object")]),t._v("、"),e("code",[t._v("array")]),t._v("、"),e("code",[t._v("Map")]),t._v("、"),e("code",[t._v("Set")]),t._v("、"),e("code",[t._v("function")]),t._v("、"),e("code",[t._v("generator function")]),t._v(" 可以转换，类实例和其他实例不会被影响。")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("observable.ref")])]),t._v(" "),e("td",[t._v("类似于 "),e("code",[t._v("observable")]),t._v("，但只有重新赋值才会被追踪。所赋的值会被完全忽略，并且将不会主动转化为 "),e("code",[t._v("observable")]),t._v("/"),e("code",[t._v("autoAction")]),t._v("/"),e("code",[t._v("flow")]),t._v("。比方说，在你打算将不可变数据存储在可观察字段中时，可以使用这个注解。")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("observable.shallow")])]),t._v(" "),e("td",[t._v("类似于 "),e("code",[t._v("observable.ref")]),t._v(" 但是是用于集合的。任何所赋的集合都会被转化为可观察值，但是其内部的值并不会变为可观察值。")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("observable.struct")])]),t._v(" "),e("td",[t._v("类似于 "),e("code",[t._v("observable")]),t._v("，但是会忽略所赋的值中所有在结构上与当前值相同的值。")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("action")])]),t._v(" "),e("td",[t._v("把一个函数标记为会修改 state 的 action。查看 "),e("a",{attrs:{href:"https://www.mobxjs.com/actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("actions"),e("OutboundLink")],1),t._v(" 获取更多信息。不可写。")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("action.bound")])]),t._v(" "),e("td",[t._v("类似于 action，但是会将 action 绑定到实例，因此将始终设置 "),e("code",[t._v("this")]),t._v("。不可写。")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("computed")])]),t._v(" "),e("td",[t._v("可以用在 "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get",target:"_blank",rel:"noopener noreferrer"}},[t._v("getter"),e("OutboundLink")],1),t._v(" 上，用来将其声明为可缓存的派生值。查看 "),e("a",{attrs:{href:"https://www.mobxjs.com/computeds",target:"_blank",rel:"noopener noreferrer"}},[t._v("computeds"),e("OutboundLink")],1),t._v(" 获取更多信息。")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("computed.struct")])]),t._v(" "),e("td",[t._v("类似于 "),e("code",[t._v("computed")]),t._v("，但如果重新计算后的结果在结构上与之前的结果相等，那么观察者将不会收到通知。")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("推断最佳注解。查看 "),e("a",{attrs:{href:"https://www.mobxjs.com/observable-state#makeautoobservable",target:"_blank",rel:"noopener noreferrer"}},[t._v("makeAutoObservable"),e("OutboundLink")],1),t._v(" 获取更多信息。")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[t._v("刻意不为该属性指定注解。")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("flow")])]),t._v(" "),e("td",[t._v("创建一个 "),e("code",[t._v("flow")]),t._v(" 管理异步进程。查看 "),e("a",{attrs:{href:"https://www.mobxjs.com/actions#%E4%BD%BF%E7%94%A8-flow-%E4%BB%A3%E6%9B%BF-async--await-",target:"_blank",rel:"noopener noreferrer"}},[t._v("flow"),e("OutboundLink")],1),t._v(" 获取更多信息。需要注意的是，推断出来的 TypeScript 返回类型可能会出错。 不可写。")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("flow.bound")])]),t._v(" "),e("td",[t._v("类似于 flow, 但是会将 flow 绑定到实例，因此将始终设置 "),e("code",[t._v("this")]),t._v("。 不可写。")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("override")])]),t._v(" "),e("td",[e("a",{attrs:{href:"https://www.mobxjs.com/subclassing",target:"_blank",rel:"noopener noreferrer"}},[t._v("用于子类覆盖继承的 "),e("code",[t._v("action")]),t._v("，"),e("code",[t._v("flow")]),t._v("，"),e("code",[t._v("computed")]),t._v("，"),e("code",[t._v("action.bound")]),e("OutboundLink")],1),t._v("。")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("autoAction")])]),t._v(" "),e("td",[t._v("不应被显式调用，但 "),e("code",[t._v("makeAutoObservable")]),t._v(" 内部会对其进行调用，以便根据调用上下文将方法标识为 action 或者派生值。")])])])]),t._v(" "),e("h2",{attrs:{id:"局限性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#局限性"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://www.mobxjs.com/observable-state#%E5%B1%80%E9%99%90%E6%80%A7",target:"_blank",rel:"noopener noreferrer"}},[t._v("局限性"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("详细见文档链接。")]),t._v(" "),e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://www.mobxjs.com/observable-state#options-",target:"_blank",rel:"noopener noreferrer"}},[t._v("Options"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("上面的 API 都有一个可选的 "),e("code",[t._v("options")]),t._v(" 参数，该参数是一个对象，支持以下选项：")]),t._v(" "),e("ul",[e("li",[e("strong",[e("code",[t._v("autoBind: true")])]),t._v(" 默认使用 "),e("code",[t._v("action.bound")]),t._v("/"),e("code",[t._v("flow.bound")]),t._v("，而不使用 "),e("code",[t._v("action")]),t._v("/"),e("code",[t._v("flow")]),t._v("。不影响被显式注释过的成员。")]),t._v(" "),e("li",[e("strong",[e("code",[t._v("deep: false")])]),t._v(" 默认使用 "),e("code",[t._v("observable.ref")]),t._v("，而不使用 "),e("code",[t._v("observable")]),t._v("。不影响被显式注释过的成员。")]),t._v(" "),e("li",[e("strong",[e("code",[t._v("name: <string>")])]),t._v(" 为对象提供一个调试名称，该名称将被打印在错误消息和 reflection API 中。")]),t._v(" "),e("li",[e("strong",[e("code",[t._v("proxy: false")])]),t._v(" 迫使 "),e("code",[t._v("observable(thing)")]),t._v(" 使用非 "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy",target:"_blank",rel:"noopener noreferrer"}},[e("strong",[t._v("proxy")]),e("OutboundLink")],1),t._v(" 的实现。如果对象的结构不会随着时间变化，那么这就是一个很好的选择，因为非代理对象更容易调试并且速度更快。请参见 "),e("a",{attrs:{href:"https://www.mobxjs.com/observable-state#avoid-proxies",target:"_blank",rel:"noopener noreferrer"}},[t._v("避免代理"),e("OutboundLink")],1),t._v("。")])]),t._v(" "),e("h2",{attrs:{id:"将-observable-转换回普通的-javascript-集合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将-observable-转换回普通的-javascript-集合"}},[t._v("#")]),t._v(" 将 observable 转换回普通的 JavaScript 集合")]),t._v(" "),e("p",[t._v("有时有必要将可观察的数据结构转换回原生的数据结构。 例如，将可观察对象传入一个无法跟踪可观察对象的 React 组件时，或者想要获取一个不会再被更改的副本时。")]),t._v(" "),e("p",[t._v("要进行浅转换，用常用的 JavaScript 操作就可以做到：")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" plainObject "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("observableObject "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" plainArray "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" observableArray"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" plainMap "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("observableMap"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("要将数据树递归地转换为普通对象，可使用 "),e("a",{attrs:{href:"https://www.mobxjs.com/api#tojs",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("toJS")]),e("OutboundLink")],1),t._v(" 工具函数。 对于类，建议实现一个 "),e("code",[t._v("toJSON()")]),t._v(" 方法，因为这样会被 "),e("code",[t._v("JSON.stringify")]),t._v(" 识别出来。")])])}),[],!1,null,null,null);e.default=r.exports}}]);