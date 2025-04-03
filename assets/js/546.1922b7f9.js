(window.webpackJsonp=window.webpackJsonp||[]).push([[546],{914:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"page-lifecycle-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#page-lifecycle-api"}},[t._v("#")]),t._v(" Page Lifecycle API")]),t._v(" "),s("p",[t._v("Android、iOS 和最新的 Windows 系统可以随时自主地停止后台进程，及时释放系统资源。也就是说，网页可能随时被系统丢弃掉。以前的浏览器 API 完全没有考虑到这种情况，导致开发者根本没有办法监听到系统丢弃页面。")]),t._v(" "),s("p",[t._v("为了解决这个问题，W3C 新制定了一个 Page Lifecycle API，统一了网页从诞生到卸载的行为模式，并且定义了新的事件，允许开发者响应网页状态的各种转换。")]),t._v(" "),s("p",[t._v("有了这个 API，开发者就可以预测网页下一步的状态，从而进行各种针对性的处理。Chrome 68 支持这个 API，对于老式浏览器可以使用谷歌开发的兼容库 "),s("a",{attrs:{href:"https://github.com/GoogleChromeLabs/page-lifecycle",target:"_blank",rel:"noopener noreferrer"}},[t._v("PageLifecycle.js"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"生命周期阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期阶段"}},[t._v("#")]),t._v(" 生命周期阶段")]),t._v(" "),s("p",[t._v("网页的生命周期分成六个阶段，每个时刻只可能处于其中一个阶段。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://www.wangbase.com/blogimg/asset/201811/bg2018110401.png",alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("（1）Active 阶段")])]),t._v(" "),s("p",[t._v("在 Active 阶段，网页处于可见状态，且拥有输入焦点。")]),t._v(" "),s("p",[s("strong",[t._v("（2）Passive 阶段")])]),t._v(" "),s("p",[t._v("在 Passive 阶段，网页可见，但没有输入焦点，无法接受输入。UI 更新（比如动画）仍然在执行。该阶段只可能发生在桌面同时有多个窗口的情况。")]),t._v(" "),s("p",[s("strong",[t._v("（3）Hidden 阶段")])]),t._v(" "),s("p",[t._v("在 Hidden 阶段，用户的桌面被其他窗口占据，网页不可见，但尚未冻结。UI 更新不再执行。")]),t._v(" "),s("p",[s("strong",[t._v("（4）Terminated 阶段")])]),t._v(" "),s("p",[t._v("在 Terminated 阶段，由于用户主动关闭窗口，或者在同一个窗口前往其他页面，导致当前页面开始被浏览器卸载并从内存中清除。注意，这个阶段总是在 Hidden 阶段之后发生，也就是说，用户主动离开当前页面，总是先进入 Hidden 阶段，再进入 Terminated 阶段。")]),t._v(" "),s("p",[t._v("这个阶段会导致网页卸载，任何新任务都不会在这个阶段启动，并且如果运行时间太长，正在进行的任务可能会被终止。")]),t._v(" "),s("p",[s("strong",[t._v("（5）Frozen 阶段")])]),t._v(" "),s("p",[t._v("如果网页处于 Hidden 阶段的时间过久，用户又不关闭网页，浏览器就有可能冻结网页，使其进入 Frozen 阶段。不过，也有可能，处于可见状态的页面长时间没有操作，也会进入 Frozen 阶段。")]),t._v(" "),s("p",[t._v("这个阶段的特征是，网页不会再被分配 CPU 计算资源。定时器、回调函数、网络请求、DOM 操作都不会执行，不过正在运行的任务会执行完。浏览器可能会允许 Frozen 阶段的页面，周期性复苏一小段时间，短暂变回 Hidden 状态，允许一小部分任务执行。")]),t._v(" "),s("p",[s("strong",[t._v("（6）Discarded 阶段")])]),t._v(" "),s("p",[t._v("如果网页长时间处于 Frozen 阶段，用户又不唤醒页面，那么就会进入 Discarded 阶段，即浏览器自动卸载网页，清除该网页的内存占用。不过，Passive 阶段的网页如果长时间没有互动，也可能直接进入 Discarded 阶段。")]),t._v(" "),s("p",[t._v("这一般是在用户没有介入的情况下，由系统强制执行。任何类型的新任务或 JavaScript 代码，都不能在此阶段执行，因为这时通常处在资源限制的状况下。")]),t._v(" "),s("p",[t._v("网页被浏览器自动 Discarded 以后，它的 Tab 窗口还是在的。如果用户重新访问这个 Tab 页，浏览器将会重新向服务器发出请求，再一次重新加载网页，回到 Active 阶段。")]),t._v(" "),s("h2",{attrs:{id:"常见场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见场景"}},[t._v("#")]),t._v(" 常见场景")]),t._v(" "),s("p",[t._v("以下是几个常见场景的网页生命周期变化。")]),t._v(" "),s("p",[t._v("（1）用户打开网页后，又切换到其他 App，但只过了一会又回到网页。")]),t._v(" "),s("p",[t._v("网页由 Active 变成 Hidden，又变回 Active。")]),t._v(" "),s("p",[t._v("（2）用户打开网页后，又切换到其他 App，并且长时候使用后者，导致系统自动丢弃网页。")]),t._v(" "),s("p",[t._v("网页由 Active 变成 Hidden，再变成 Frozen，最后 Discarded。")]),t._v(" "),s("p",[t._v("（3）用户打开网页后，又切换到其他 App，然后从任务管理器里面将浏览器进程清除。")]),t._v(" "),s("p",[t._v("网页由 Active 变成 Hidden，然后 Terminated。")]),t._v(" "),s("p",[t._v("（4）系统丢弃了某个 Tab 里面的页面后，用户重新打开这个 Tab。")]),t._v(" "),s("p",[t._v("网页由 Discarded 变成 Active。")]),t._v(" "),s("h2",{attrs:{id:"事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),s("p",[t._v("生命周期的各个阶段都有自己的事件，以供开发者指定监听函数。这些事件里面，只有两个是新定义的（"),s("code",[t._v("freeze")]),t._v("事件和"),s("code",[t._v("resume")]),t._v("事件），其它都是现有的。")]),t._v(" "),s("p",[t._v("注意，网页的生命周期事件是在所有帧（frame）触发，不管是底层的帧，还是内嵌的帧。也就是说，内嵌的"),s("code",[t._v("<iframe>")]),t._v("网页跟顶层网页一样，都会同时监听到下面的事件。")]),t._v(" "),s("h3",{attrs:{id:"focus-事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#focus-事件"}},[t._v("#")]),t._v(" focus 事件")]),t._v(" "),s("p",[s("code",[t._v("focus")]),t._v("事件在页面获得输入焦点时触发，比如网页从 Passive 阶段变为 Active 阶段。")]),t._v(" "),s("h3",{attrs:{id:"blur-事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blur-事件"}},[t._v("#")]),t._v(" blur 事件")]),t._v(" "),s("p",[s("code",[t._v("blur")]),t._v("事件在页面失去输入焦点时触发，比如网页从 Active 阶段变为 Passive 阶段。")]),t._v(" "),s("h3",{attrs:{id:"visibilitychange-事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#visibilitychange-事件"}},[t._v("#")]),t._v(" visibilitychange 事件")]),t._v(" "),s("p",[s("code",[t._v("visibilitychange")]),t._v("事件在网页可见状态发生变化时触发，一般发生在以下几种场景。")]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("用户隐藏页面（切换 Tab、最小化浏览器），页面由 Active 阶段变成 Hidden 阶段。")]),t._v(" "),s("li",[t._v("用户重新访问隐藏的页面，页面由 Hidden 阶段变成 Active 阶段。")]),t._v(" "),s("li",[t._v("用户关闭页面，页面会先进入 Hidden 阶段，然后进入 Terminated 阶段。")])])]),t._v(" "),s("p",[t._v("可以通过"),s("code",[t._v("document.onvisibilitychange")]),t._v("属性指定这个事件的回调函数。")]),t._v(" "),s("h3",{attrs:{id:"freeze-事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#freeze-事件"}},[t._v("#")]),t._v(" freeze 事件")]),t._v(" "),s("p",[s("code",[t._v("freeze")]),t._v("事件在网页进入 Frozen 阶段时触发。")]),t._v(" "),s("p",[t._v("可以通过"),s("code",[t._v("document.onfreeze")]),t._v("属性指定在进入 Frozen 阶段时调用的回调函数。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleFreeze")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Handle transition to FROZEN")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'freeze'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handleFreeze"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n# 或者\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onfreeze")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" … "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("这个事件的监听函数，最长只能运行500毫秒。并且只能复用已经打开的网络连接，不能发起新的网络请求。")]),t._v(" "),s("p",[t._v("注意，从 Frozen 阶段进入 Discarded 阶段，不会触发任何事件，无法指定回调函数，只能在进入 Frozen 阶段时指定回调函数。")]),t._v(" "),s("h3",{attrs:{id:"resume-事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resume-事件"}},[t._v("#")]),t._v(" resume 事件")]),t._v(" "),s("p",[s("code",[t._v("resume")]),t._v("事件在网页离开 Frozen 阶段，变为 Active / Passive / Hidden 阶段时触发。")]),t._v(" "),s("p",[s("code",[t._v("document.onresume")]),t._v("属性指的是页面离开 Frozen 阶段、进入可用状态时调用的回调函数。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleResume")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// handle state transition FROZEN -> ACTIVE")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"resume"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handleResume"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n# 或者\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onresume")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" … "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h3",{attrs:{id:"pageshow-事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pageshow-事件"}},[t._v("#")]),t._v(" pageshow 事件")]),t._v(" "),s("p",[s("code",[t._v("pageshow")]),t._v("事件在用户加载网页时触发。这时，有可能是全新的页面加载，也可能是从缓存中获取的页面。如果是从缓存中获取，则该事件对象的"),s("code",[t._v("event.persisted")]),t._v("属性为"),s("code",[t._v("true")]),t._v("，否则为"),s("code",[t._v("false")]),t._v("。")]),t._v(" "),s("p",[t._v("这个事件的名字有点误导，它跟页面的可见性其实毫无关系，只跟浏览器的 History 记录的变化有关。")]),t._v(" "),s("h3",{attrs:{id:"pagehide-事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pagehide-事件"}},[t._v("#")]),t._v(" pagehide 事件")]),t._v(" "),s("p",[s("code",[t._v("pagehide")]),t._v("事件在用户离开当前网页、进入另一个网页时触发。它的前提是浏览器的 History 记录必须发生变化，跟网页是否可见无关。")]),t._v(" "),s("p",[t._v("如果浏览器能够将当前页面添加到缓存以供稍后重用，则事件对象的"),s("code",[t._v("event.persisted")]),t._v("属性为"),s("code",[t._v("true")]),t._v("。 如果为"),s("code",[t._v("true")]),t._v("。如果页面添加到了缓存，则页面进入 Frozen 状态，否则进入 Terminatied 状态。")]),t._v(" "),s("h3",{attrs:{id:"beforeunload-事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beforeunload-事件"}},[t._v("#")]),t._v(" beforeunload 事件")]),t._v(" "),s("p",[s("code",[t._v("beforeunload")]),t._v("事件在窗口或文档即将卸载时触发。该事件发生时，文档仍然可见，此时卸载仍可取消。经过这个事件，网页进入 Terminated 状态。")]),t._v(" "),s("h3",{attrs:{id:"unload-事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unload-事件"}},[t._v("#")]),t._v(" unload 事件")]),t._v(" "),s("p",[s("code",[t._v("unload")]),t._v("事件在页面正在卸载时触发。经过这个事件，网页进入 Terminated 状态。")]),t._v(" "),s("h2",{attrs:{id:"获取当前阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取当前阶段"}},[t._v("#")]),t._v(" 获取当前阶段")]),t._v(" "),s("p",[t._v("如果网页处于 Active、Passive 或 Hidden 阶段，可以通过下面的代码，获得网页当前的状态。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getState")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("visibilityState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hidden'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hidden'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasFocus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'active'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'passive'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("如果网页处于 Frozen 和 Terminated 状态，由于定时器代码不会执行，只能通过事件监听判断状态。进入 Frozen 阶段，可以监听"),s("code",[t._v("freeze")]),t._v("事件；进入 Terminated 阶段，可以监听"),s("code",[t._v("pagehide")]),t._v("事件。")]),t._v(" "),s("h2",{attrs:{id:"document-wasdiscarded"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#document-wasdiscarded"}},[t._v("#")]),t._v(" document.wasDiscarded")]),t._v(" "),s("p",[t._v("如果某个选项卡处于 Frozen 阶段，就随时有可能被系统丢弃，进入 Discarded 阶段。如果后来用户再次点击该选项卡，浏览器会重新加载该页面。")]),t._v(" "),s("p",[t._v("这时，开发者可以通过判断"),s("code",[t._v("document.wasDiscarded")]),t._v("属性，了解先前的网页是否被丢弃了。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wasDiscarded"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 该网页已经不是原来的状态了，曾经被浏览器丢弃过")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 恢复以前的状态")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPersistedState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("discardedClientId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("同时，"),s("code",[t._v("window")]),t._v("对象上会新增"),s("code",[t._v("window.clientId")]),t._v("和"),s("code",[t._v("window.discardedClientId")]),t._v("两个属性，用来恢复丢弃前的状态。")]),t._v(" "),s("h2",{attrs:{id:"参考链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://developers.google.com/web/updates/2018/07/page-lifecycle-api",target:"_blank",rel:"noopener noreferrer"}},[t._v("Page Lifecycle API"),s("OutboundLink")],1),t._v(", Philip Walton")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/WICG/page-lifecycle",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lifecycle API for Web Pages"),s("OutboundLink")],1),t._v(", W3C")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://wicg.github.io/page-lifecycle/spec.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Page Lifecycle 1 Editor’s Draft"),s("OutboundLink")],1),t._v(", W3C")])])])}),[],!1,null,null,null);s.default=n.exports}}]);