(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{451:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"flex布局和overflow一起使用超出滚动失效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex布局和overflow一起使用超出滚动失效"}},[s._v("#")]),s._v(" flex布局和overflow一起使用超出滚动失效")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://geek-docs.com/css/css-top-articles/1000100_index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("CSS"),t("OutboundLink")],1),s._v(" Flexbox是一种新的布局模式，旨在提供更简单和灵活的方式来排列和对齐元素。使用Flexbox，我们可以轻松地创建响应式布局，而无需使用复杂的CSS定位技巧。但是，特定情况下，Flexbox可能会与overflow: hidden属性相互影响。")]),s._v(" "),t("h2",{attrs:{id:"overflow-hidden属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overflow-hidden属性"}},[s._v("#")]),s._v(" overflow: hidden属性")]),s._v(" "),t("p",[s._v("overflow: hidden是CSS属性之一，用于控制溢出内容的处理方式。当内容超出容器的尺寸时，使用overflow: hidden可以将溢出的内容隐藏起来。然而，在与Flexbox一起使用时，overflow: hidden可能不会按预期工作。")]),s._v(" "),t("h2",{attrs:{id:"overflow-hidden和flexbox的冲突"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overflow-hidden和flexbox的冲突"}},[s._v("#")]),s._v(" overflow: hidden和Flexbox的冲突")]),s._v(" "),t("p",[s._v("当一个容器设置为display: flex并且包含了overflow: hidden属性时，可能会发生一些预期外的行为。在这种情况下，overflow: hidden通常只会隐藏溢出的内容，而不会对Flexbox布局本身产生任何影响。但是在某些情况下，overflow: hidden可能会导致Flexbox的布局出现问题。")]),s._v(" "),t("h3",{attrs:{id:"问题1-内容被截断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题1-内容被截断"}},[s._v("#")]),s._v(" 问题1：内容被截断")]),s._v(" "),t("p",[s._v("当一个容器设置为display: flex，并且内部的内容宽度超过容器宽度，同时设置overflow: hidden时，Flexbox的布局可能不再生效。容器的子元素可能被截断，无法完全显示在父容器内，导致部分内容被隐藏起来。")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".container")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("overflow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hidden"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".container div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("white-space")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nowrap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("overflow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hidden"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("text-overflow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ellipsis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("在上面的示例中，当.container内的div宽度超过.container的宽度时，内部内容将被截断，并使用省略号(…)表示省略的部分。但是，由于overflow: hidden的影响，即使使用了text-overflow: ellipsis，部分内容仍然无法显示。")]),s._v(" "),t("h3",{attrs:{id:"解决方案1-使用flex-shrink属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方案1-使用flex-shrink属性"}},[s._v("#")]),s._v(" 解决方案1：使用flex-shrink属性")]),s._v(" "),t("p",[s._v("解决这个问题的一种方法是将flex-shrink属性设置为0。flex-shrink控制子元素在发生溢出时是否缩小。当flex-shrink值为0时，子元素不会收缩，那么它们将会保持自己的大小并且不会被截断。")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".container")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("overflow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hidden"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".container div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1 0 auto"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("white-space")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nowrap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("overflow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hidden"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("text-overflow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ellipsis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("通过将flex-shrink设置为0，容器的子元素不再收缩，内容将会按原样显示，同时通过overflow: hidden属性进行溢出隐藏。")]),s._v(" "),t("h3",{attrs:{id:"问题2-子元素溢出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题2-子元素溢出"}},[s._v("#")]),s._v(" 问题2：子元素溢出")]),s._v(" "),t("p",[s._v("另一个问题是，当容器设置为display: flex，并且子元素的宽度之和超过容器的宽度时，overflow: hidden可能无法隐藏溢出的子元素。这导致容器的子元素一部分超出容器范围而显示在外部。")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".container")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("overflow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hidden"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".container div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 200px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("在上面的示例中，容器内的div宽度总和超过容器的宽度。然而，由于overflow: hidden的限制，溢出的子元素仍然部分可见。")]),s._v(" "),t("h3",{attrs:{id:"解决方案2-使用flex-wrap属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方案2-使用flex-wrap属性"}},[s._v("#")]),s._v(" 解决方案2：使用flex-wrap属性")]),s._v(" "),t("p",[s._v("解决这个问题的一种方法是将flex-wrap属性设置为wrap。flex-wrap控制子元素是否换行。当flex-wrap值为wrap时，子元素将自动换行以适应容器的宽度。")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".container")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("overflow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hidden"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-wrap")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wrap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".container div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 200px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("通过将flex-wrap设置为wrap，溢出的子元素将会换行显示，并且超出容器范围的部分将被隐藏。")]),s._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("CSS Flexbox是一种强大的布局模式，可以轻松创建响应式布局。然而，在与overflow: hidden一起使用时，可能会导致一些不正常的行为。通过使用flex-shrink和flex-wrap属性，我们可以解决这些问题，确保Flexbox和overflow: hidden正常工作")])])}),[],!1,null,null,null);t.default=e.exports}}]);