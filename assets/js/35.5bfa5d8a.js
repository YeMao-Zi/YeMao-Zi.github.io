(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{403:function(t,s,a){"use strict";a.r(s);var n=a(7),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"函数注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数注释"}},[t._v("#")]),t._v(" 函数注释")]),t._v(" "),s("p",[t._v("不一定说任何函数方法都必须使用JSDoc，但是有一点要注意如果是自己封装的方法，有必要使用JSDoc，理由是可以让其他成员更容易的去了解你封装的方法的属性或返回值，这样可以降低维护成本和提高开发效率")]),t._v(" "),s("p",[s("strong",[t._v("语法")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** \n* 函数说明 \n* @关键字 \n*/")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[s("strong",[t._v("常用注释关键字")]),t._v("：(只列出一部分，并不是全部)")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("注释名")]),t._v(" "),s("th",[t._v("语法")]),t._v(" "),s("th",[t._v("含义")]),t._v(" "),s("th",[t._v("示例")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("@function")]),t._v(" "),s("td",[t._v("@function 简要描述")]),t._v(" "),s("td",[t._v("用于定义当前对象是一个函数，后面可跟描述")]),t._v(" "),s("td",[t._v("@function 处理表格的行")])]),t._v(" "),s("tr",[s("td",[t._v("@description")]),t._v(" "),s("td",[t._v("@description 描述信息")]),t._v(" "),s("td",[t._v("用于描述")]),t._v(" "),s("td",[t._v("@description 合并Grid的行")])]),t._v(" "),s("tr",[s("td",[t._v("@param")]),t._v(" "),s("td",[t._v("@param 参数名 {参数类型} 描述信息")]),t._v(" "),s("td",[t._v("描述参数的信息")]),t._v(" "),s("td",[t._v("@param name {String} 传入名称")])]),t._v(" "),s("tr",[s("td",[t._v("@return")]),t._v(" "),s("td",[t._v("@return {返回类型} 描述信息")]),t._v(" "),s("td",[t._v("描述返回值的信息")]),t._v(" "),s("td",[t._v("@return {Boolean} true:可执行;false:不可执行")])]),t._v(" "),s("tr",[s("td",[t._v("@author")]),t._v(" "),s("td",[t._v("@author 作者信息 [附属信息：如邮箱、日期]")]),t._v(" "),s("td",[t._v("描述此函数作者的信息")]),t._v(" "),s("td",[t._v("@author 张三 2015/07/21")])]),t._v(" "),s("tr",[s("td",[t._v("@version")]),t._v(" "),s("td",[t._v("@version XX.XX.XX")]),t._v(" "),s("td",[t._v("描述此函数的版本号")]),t._v(" "),s("td",[t._v("@version 1.0.3")])]),t._v(" "),s("tr",[s("td",[t._v("@example")]),t._v(" "),s("td",[t._v("@example 示例代码")]),t._v(" "),s("td",[t._v("演示函数的使用")]),t._v(" "),s("td",[t._v("@example setTitle(‘测试’)")])])])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* @function 处理表格的行\n* @description 合并Grid的行\n* @param grid {Ext.Grid.Panel} 需要合并的Grid\n* @param cols {Array} 需要合并列的Index(序号)数组；从0开始计数，序号也包含。\n* @param isAllSome {Boolean} ：是否2个tr的cols必须完成一样才能进行合并。true：完成一样；false(默认)：不完全一样\n* @return void\n* @author polk6 2015/07/21 \n* @example\n* _________________ _________________\n* | 年龄 | 姓名 | | 年龄 | 姓名 |\n* ----------------- mergeCells(grid,[0]) -----------------\n* | 18 | 张三 | => | | 张三 |\n* ----------------- - 18 ---------\n* | 18 | 王五 | | | 王五 |\n* ----------------- -----------------\n*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeCells")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("grid")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Panel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("cols")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("isAllSome")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" boolean "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do Something")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);