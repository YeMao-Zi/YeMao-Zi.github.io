(window.webpackJsonp=window.webpackJsonp||[]).push([[475],{844:function(s,t,a){"use strict";a.r(t);var e=a(7),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"request-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-api"}},[s._v("#")]),s._v(" Request API")]),s._v(" "),t("p",[s._v("浏览器原生提供 Request() 构造函数，用来构造发给服务器的 HTTP 请求。它生成的 Response 实例，可以作为"),t("code",[s._v("fetch()")]),s._v("的参数。")]),s._v(" "),t("p",[s._v("注意，构造一个 Request 对象，只是构造出一个数据结构，本身并不会发出 HTTP 请求，只有将它传入"),t("code",[s._v("fetch()")]),s._v("方法才会真的发出请求。")]),s._v(" "),t("h2",{attrs:{id:"构造方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构造方法"}},[s._v("#")]),s._v(" 构造方法")]),s._v(" "),t("p",[s._v("Request 作为构造函数的语法如下，返回一个 Request 实例对象。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Request")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("init"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Object"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Request\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("它的第一个参数是请求的 URL 字符串，第二个参数是一个可选的配置对象，用来构造 HTTP 请求，该对象的类型描述如下。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("body")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Object\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("cache")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("credentials")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("headers")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Object\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("integrity")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("keepalive")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Boolean\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("method")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("mode")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("redirect")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\tString\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("referrer")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\tString\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("referrerPolicy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("requestMode")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("requestCredentials")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("signal")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" AbortSignal\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("第二个参数配置对象的各个属性的含义如下。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("body")]),s._v("：HTTP 请求的数据体，必须是 Blob、BufferSource、FormData、String、URLSearchParams 类型之一。")]),s._v(" "),t("li",[t("code",[s._v("cache")]),s._v("：请求的缓存模式。")]),s._v(" "),t("li",[t("code",[s._v("credentials")]),s._v("：请求所用的凭证，可以设为 omit、same-origini、include。Chrome 47 之前，默认值为 same-origin；Chrome 47 之后，默认值为 include。")]),s._v(" "),t("li",[t("code",[s._v("headers")]),s._v("：一个代表 HTTP 请求数据头的对象，类型为 Headers 对象实例。")]),s._v(" "),t("li",[t("code",[s._v("integrity")]),s._v("：请求的资源的资源完整度验证值，比如"),t("code",[s._v("sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=")]),s._v("。")]),s._v(" "),t("li",[t("code",[s._v("method")]),s._v("：HTTP 方法，一般为"),t("code",[s._v("GET")]),s._v("、"),t("code",[s._v("POST")]),s._v("、"),t("code",[s._v("DELETE")]),s._v("，默认是"),t("code",[s._v("GET")]),s._v("。")]),s._v(" "),t("li",[t("code",[s._v("mode")]),s._v("：请求模式，比如 cors、no-cors、navigate，默认为 cors。")]),s._v(" "),t("li",[t("code",[s._v("redirect")]),s._v("：请求所用的模式，可以设为 error、follow、manual，默认为 follow。")]),s._v(" "),t("li",[t("code",[s._v("referrer")]),s._v("：请求的来源，默认为 about:client。")])]),s._v(" "),t("p",[s._v("下面是两个示例。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 示例一")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" request "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Request")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'flowers.jpg'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 示例二")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" myInit "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("method")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GET"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("headers")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"Content-Type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"image/jpeg"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("mode")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cors"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("cache")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"default"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" request "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Request")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'flowers.jpg'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" myInit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[t("code",[s._v("Request()")]),s._v("还有另一种语法，第一个参数是另一个 Request 对象，第二个参数还是一个配置对象。它返回一个新的 Request 对象，相当于对第一个参数 Request 对象进行修改。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Request")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("init"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Object"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Request\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"实例属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例属性"}},[s._v("#")]),s._v(" 实例属性")]),s._v(" "),t("p",[s._v("Request 实例对象的属性，大部分就是它的构造函数第二个参数配置对象的属性。")]),s._v(" "),t("p",[s._v("（1）"),t("code",[s._v("body")])]),s._v(" "),t("p",[t("code",[s._v("body")]),s._v("属性返回 HTTP 请求的数据体，它的值是一个 ReadableStream 对象或 null（"),t("code",[s._v("GET")]),s._v("或"),t("code",[s._v("HEAD")]),s._v("请求时没有数据体）。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" request "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Request")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/myEndpoint'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("method")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"POST"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("body")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello world"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nrequest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ReadableStream 对象")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("注意，Firefox 不支持该属性。")]),s._v(" "),t("p",[s._v("（2）"),t("code",[s._v("bodyused")])]),s._v(" "),t("p",[t("code",[s._v("bodyUsed")]),s._v("属性是一个布尔值，表示"),t("code",[s._v("body")]),s._v("是否已经被读取了。")]),s._v(" "),t("p",[s._v("（3）"),t("code",[s._v("cache")])]),s._v(" "),t("p",[t("code",[s._v("cache")]),s._v("属性是一个只读字符串，表示请求的缓存模式，可能的值有 default、force-cache、no-cache、no-store、only-if-cached、reload。")]),s._v(" "),t("p",[s._v("（4）"),t("code",[s._v("credentials")])]),s._v(" "),t("p",[t("code",[s._v("credentials")]),s._v("属性是一个只读字符串，表示跨域请求时是否携带其他域的 cookie。可能的值有 omit（不携带）、 include（携带）、same-origin（只携带同源 cookie）。")]),s._v(" "),t("p",[s._v("（5）"),t("code",[s._v("destination")])]),s._v(" "),t("p",[t("code",[s._v("destination")]),s._v("属性是一个字符串，表示请求内容的类型，可能的值有 ''、'audio'、'audioworklet'、'document'、'embed'、'font'、'frame'、'iframe'、'image'、'manifest'、'object'、'paintworklet'、 'report'、'script'、'sharedworker'、'style'、'track'、'video'、'worker'、'xslt' 等。")]),s._v(" "),t("p",[s._v("（6）"),t("code",[s._v("headers")])]),s._v(" "),t("p",[t("code",[s._v("headers")]),s._v("属性是一个只读的 Headers 实例对象，表示请求的数据头。")]),s._v(" "),t("p",[s._v("（7）"),t("code",[s._v("integrity")])]),s._v(" "),t("p",[t("code",[s._v("integrity")]),s._v("属性表示所请求资源的完整度的验证值。")]),s._v(" "),t("p",[s._v("（8）"),t("code",[s._v("method")])]),s._v(" "),t("p",[t("code",[s._v("method")]),s._v("属性是一个只读字符串，表示请求的方法（GET、POST 等）。")]),s._v(" "),t("p",[s._v("（9）"),t("code",[s._v("mode")])]),s._v(" "),t("p",[t("code",[s._v("mode")]),s._v("属性是一个只读字符串，用来验证是否可以有效地发出跨域请求，可能的值有 same-origin、no-cors、cors。")]),s._v(" "),t("p",[s._v("（10）"),t("code",[s._v("redirect")])]),s._v(" "),t("p",[t("code",[s._v("redirect")]),s._v("属性是一个只读字符串，表示重定向时的处理模式，可能的值有 follow、error、manual。")]),s._v(" "),t("p",[s._v("（11）"),t("code",[s._v("referrer")])]),s._v(" "),t("p",[t("code",[s._v("referrer")]),s._v("属性是一个只读字符串，表示请求的引荐 URL。")]),s._v(" "),t("p",[s._v("（12）"),t("code",[s._v("referrerPolicy")])]),s._v(" "),t("p",[t("code",[s._v("referrerPolicy")]),s._v("属性是一个只读字符串，决定了"),t("code",[s._v("referrer")]),s._v("属性是否要包含在请求里面的处理政策。")]),s._v(" "),t("p",[s._v("（13）"),t("code",[s._v("signal")])]),s._v(" "),t("p",[t("code",[s._v("signal")]),s._v("是一个只读属性，包含与当前请求相对应的中断信号 AbortSignal 对象。")]),s._v(" "),t("p",[s._v("（14）"),t("code",[s._v("url")])]),s._v(" "),t("p",[t("code",[s._v("url")]),s._v("是一个只读字符串，包含了当前请求的字符串。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" myRequest "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Request")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'flowers.jpg'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" myURL "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" myRequest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("url"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"实例方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例方法"}},[s._v("#")]),s._v(" 实例方法")]),s._v(" "),t("h3",{attrs:{id:"取出数据体的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#取出数据体的方法"}},[s._v("#")]),s._v(" 取出数据体的方法")]),s._v(" "),t("ul",[t("li",[s._v("arrayBuffer()：返回一个 Promise 对象，将 Request 的数据体作为 ArrayBuffer 对象返回。")]),s._v(" "),t("li",[s._v("blob()：返回一个 Promise 对象，将 Request 的数据体作为 Blob 对象返回。")]),s._v(" "),t("li",[s._v("json()：返回一个 Promise 对象，将 Request 的数据体作为 JSON 对象返回。")]),s._v(" "),t("li",[s._v("text()：返回一个 Promise 对象，将 Request 的数据体作为字符串返回。")]),s._v(" "),t("li",[s._v("formData()：返回一个 Promise 对象，将 Request 的数据体作为表单数据 FormData 对象返回。")])]),s._v(" "),t("p",[s._v("下面是"),t("code",[s._v("json()")]),s._v("方法的一个示例。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" obj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("hello")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"world"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" request "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Request")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/myEndpoint"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("method")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"POST"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("body")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("stringify")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nrequest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("json")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("data")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 处理 JSON 数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[t("code",[s._v(".formData()")]),s._v("方法返回一个 Promise 对象，最终得到的是一个 FormData 表单对象，里面是用键值对表示的各种表单元素。该方法很少使用，因为需要拦截发给服务器的请求的场景不多，一般用在 Service Worker 拦截和处理网络请求，以修改表单数据，然后再发送到服务器。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fetch'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("event")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 拦截表单提交请求")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    event"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("method "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'POST'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("\n    event"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("headers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'application/x-www-form-urlencoded'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    event"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("respondWith")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("handleFormSubmission")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("event"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("handleFormSubmission")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("request")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" formData "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("formData")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  formData"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("append")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'extra-field'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'extra-value'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" newRequest "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Request")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("url"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("method")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("method"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("headers")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("headers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("body")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("URLSearchParams")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("formData"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fetch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("newRequest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("p",[s._v("上面示例中，Service Worker 拦截表单请求以后，添加了一个表单成员，再调用"),t("code",[s._v("fetch()")]),s._v("向服务器发出修改后的请求。")]),s._v(" "),t("h3",{attrs:{id:"clone"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clone"}},[s._v("#")]),s._v(" clone()")]),s._v(" "),t("p",[t("code",[s._v("clone()")]),s._v("用来复制 HTTP 请求对象。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" myRequest "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Request")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'flowers.jpg'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" newRequest "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" myRequest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("clone")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);