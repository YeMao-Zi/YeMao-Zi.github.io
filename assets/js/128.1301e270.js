(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{502:function(v,_,e){"use strict";e.r(_);var c=e(5),d=Object(c.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"新的-css-视口单位-svh、lvh、dvh"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#新的-css-视口单位-svh、lvh、dvh"}},[v._v("#")]),v._v(" 新的 CSS 视口单位：svh、lvh、dvh")]),v._v(" "),_("p",[_("code",[v._v("CSS")]),v._v(" 的 "),_("code",[v._v("Viewport")]),v._v("单位听起来很棒。")]),v._v(" "),_("p",[v._v("如果你想将一个元素设置成 "),_("code",[v._v("全屏高度")]),v._v("，你可以设置高度:"),_("code",[v._v("100vh")]),v._v("，这样你就有了一个完美的 "),_("code",[v._v("全屏元素")]),v._v("，它会随着视口的改变而改变大小！！！")]),v._v(" "),_("p",[v._v("遗憾的是，事实并非如此！！！")]),v._v(" "),_("h2",{attrs:{id:"vw、vh-的问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vw、vh-的问题"}},[v._v("#")]),v._v(" vw、vh 的问题")]),v._v(" "),_("p",[v._v("要调整 "),_("code",[v._v("视口大小")]),v._v("，可以使用 "),_("code",[v._v("vw")]),v._v(" 和 "),_("code",[v._v("vh")]),v._v(" 单位。")]),v._v(" "),_("p",[_("code",[v._v("vw")]),v._v("=视口大小 "),_("code",[v._v("宽度")]),v._v("的 "),_("code",[v._v("1%")]),v._v("。")]),v._v(" "),_("p",[_("code",[v._v("vh")]),v._v("=视口大小 "),_("code",[v._v("高度")]),v._v("的 "),_("code",[v._v("1%")]),v._v("。")]),v._v(" "),_("p",[v._v("给一个元素 "),_("code",[v._v("100vw")]),v._v("的宽度和 "),_("code",[v._v("100vh")]),v._v(" 的高度，它将完全 "),_("code",[v._v("覆盖视口")]),v._v("。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://static.developers.pub/8df8568939e54bb6b531fff09b962e53",alt:"图片"}})]),v._v(" "),_("p",[v._v("虽然现有的设备在桌面上运行良好，但在 "),_("code",[v._v("移动设备")]),v._v("上则不同。在那里，视口大小受动态 "),_("code",[v._v("工具栏")]),v._v("的存在或不存在的影响。这些是用户界面，如 "),_("code",[v._v("地址栏")]),v._v("和 "),_("code",[v._v("选项卡")]),v._v("栏。")]),v._v(" "),_("p",[v._v("虽然视口大小可以更改，但 "),_("code",[v._v("vw")]),v._v(" 和 "),_("code",[v._v("vh")]),v._v(" 大小不会更改。因此，大小为 "),_("code",[v._v("100vh")]),v._v(" 的元素将从视口中 "),_("code",[v._v("溢出")]),v._v("。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://static.developers.pub/63ebaf16d3aa4291afabc93eae09576c",alt:"图片"}})]),v._v(" "),_("p",[v._v("向下滚动时，这些动态 "),_("code",[v._v("工具栏")]),v._v("将 "),_("code",[v._v("缩回")]),v._v("。在此状态下，大小为 "),_("code",[v._v("100vh")]),v._v(" 的元素将 "),_("code",[v._v("覆盖")]),v._v("整个视口。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://static.developers.pub/6a6eed79b86845d6ab668c1165e62910",alt:"图片"}})]),v._v(" "),_("p",[v._v("为了解决这个问题，在 "),_("code",[v._v("CSS")]),v._v(" 中指定了视口的各种状态。")]),v._v(" "),_("h2",{attrs:{id:"新的视口单位"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#新的视口单位"}},[v._v("#")]),v._v(" 新的视口单位")]),v._v(" "),_("p",[_("code",[v._v("小视口")]),v._v("：这些动态工具栏是展开的")]),v._v(" "),_("p",[_("code",[v._v("大视口")]),v._v("：这些动态工具栏是缩回的")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://static.developers.pub/2cbc8fc677f241f387c02f322f272a3f",alt:"图片"}})]),v._v(" "),_("p",[v._v("表示 "),_("code",[v._v("大视口")]),v._v("的单位具有 "),_("code",[v._v("lv")]),v._v(" 前缀。单位为 "),_("code",[v._v("lvw")]),v._v("、"),_("code",[v._v("lvh")]),v._v("、"),_("code",[v._v("lvi")]),v._v("、"),_("code",[v._v("lvb")]),v._v("、"),_("code",[v._v("lvmin")]),v._v(" 和 "),_("code",[v._v("lvmax")]),v._v("。")]),v._v(" "),_("p",[v._v("表示 "),_("code",[v._v("小视口")]),v._v("的单位具有 "),_("code",[v._v("sv")]),v._v(" 前缀。单位为 "),_("code",[v._v("svw")]),v._v("、"),_("code",[v._v("svh")]),v._v("、"),_("code",[v._v("svi")]),v._v("、"),_("code",[v._v("svb")]),v._v("、"),_("code",[v._v("svmin")]),v._v(" 和 "),_("code",[v._v("svmax")]),v._v("。")]),v._v(" "),_("p",[v._v("除非调整视口本身的大小，否则这些视口百分比单位的大小是固定的（因此是稳定的）。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://static.developers.pub/591882f7f0c344ce99dafe3b0a60fd0d",alt:"图片"}})]),v._v(" "),_("h2",{attrs:{id:"动态视口"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#动态视口"}},[v._v("#")]),v._v(" 动态视口")]),v._v(" "),_("p",[v._v("除了 "),_("code",[v._v("大视口")]),v._v("和 "),_("code",[v._v("小视口")]),v._v("，还有一个 "),_("code",[v._v("动态视口")]),v._v("，它动态考虑了动态工具栏。")]),v._v(" "),_("p",[v._v("展开动态工具栏时，动态视口等于小视口的大小。")]),v._v(" "),_("p",[v._v("当动态工具栏缩回时，动态视口等于大视口的大小。")]),v._v(" "),_("p",[v._v("其附带的单位具有 "),_("code",[v._v("dv")]),v._v(" 前缀："),_("code",[v._v("dvw")]),v._v("、"),_("code",[v._v("dvh")]),v._v("、"),_("code",[v._v("dvi")]),v._v("、"),_("code",[v._v("dvb")]),v._v("、"),_("code",[v._v("dvmin")]),v._v(" 和 "),_("code",[v._v("dvmax")]),v._v("。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://static.developers.pub/a26cb8cbac0b49dfb377a565366a2832",alt:"图片"}})]),v._v(" "),_("p",[v._v("这些单位在 "),_("code",[v._v("Chrome108")]),v._v(" 中发布，加入了已经支持的 "),_("code",[v._v("Safari")]),v._v(" 和 "),_("code",[v._v("Firefox")]),v._v("。")])])}),[],!1,null,null,null);_.default=d.exports}}]);