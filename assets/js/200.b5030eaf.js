(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{573:function(s,t,a){"use strict";a.r(t);var e=a(5),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"高级查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高级查询"}},[s._v("#")]),s._v(" 高级查询")]),s._v(" "),t("h2",{attrs:{id:"案例数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例数据"}},[s._v("#")]),s._v(" "),t("strong",[s._v("案例数据")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2024/11/01/HtLBQWkzfiOgaGJ.jpg",alt:"{%}"}})]),s._v(" "),t("h2",{attrs:{id:"模糊查询-like"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模糊查询-like"}},[s._v("#")]),s._v(" 模糊查询：like")]),s._v(" "),t("p",[s._v("在MySQL中，我们可以在where子句中使用like运算符来实现模糊查询。like运算符都是放在where子句中使用，并且它一般需要结合通配符来一起使用。")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[t("strong",[s._v("通配符")])]),s._v(" "),t("th",[t("strong",[s._v("说明")])])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("%")]),s._v(" "),t("td",[s._v("0个或多个字符")])]),s._v(" "),t("tr",[t("td",[s._v("_")]),s._v(" "),t("td",[s._v("1个字符")])])])]),s._v(" "),t("h3",{attrs:{id:"通配符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通配符"}},[s._v("#")]),s._v(" 通配符：%")]),s._v(" "),t("p",[s._v("在SQL中，通配符 "),t("code",[s._v("%")]),s._v(" 代表的是一个任何长度的字符串（0个或多个字符）。对于“%”来说，它的常用方式有以下3种。")]),s._v(" "),t("p",[s._v("（1）where 列名 like 'string%'")]),s._v(" "),t("p",[s._v("（2）where 列名 like '%string'")]),s._v(" "),t("p",[s._v("（3）where 列名 like '%string%'")]),s._v(" "),t("p",[t("strong",[s._v("示例")])]),s._v(" "),t("p",[s._v("查询所有 "),t("code",[s._v("name")]),s._v(" 以“瓜”结尾的数据")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("fruit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%瓜'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2025/02/07/1QpSoJmPIBliNGz.png",alt:"image-20250207132540672"}})]),s._v(" "),t("h3",{attrs:{id:"通配符-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通配符-2"}},[s._v("#")]),s._v(" 通配符：_")]),s._v(" "),t("p",[s._v("在SQL中，通配符“"),t("em",[s._v("”代表的是一个字符，也就是长度为1的字符串。对于“")]),s._v("”来说，它的常用方式有以下3种。")]),s._v(" "),t("p",[s._v("（1）where 列名 like 'string_'。")]),s._v(" "),t("p",[s._v("（2）where 列名 like '_string'。")]),s._v(" "),t("p",[s._v("（3）where 列名 like '"),t("em",[s._v("string")]),s._v("'")]),s._v(" "),t("p",[t("strong",[s._v("示例")])]),s._v(" "),t("p",[s._v("查询所有 "),t("code",[s._v("name")]),s._v(" 为两个长度且第二个为“瓜”的数据")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("fruit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'_瓜'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2025/02/07/CHWbxLfK7nQvB5J.png",alt:"image-20250207132931833"}})]),s._v(" "),t("h3",{attrs:{id:"转义通配符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#转义通配符"}},[s._v("#")]),s._v(" 转义通配符：\\")]),s._v(" "),t("p",[s._v("我们可以在“%”或“_”的前面加上一个反斜杠“\\”，此时该字符就变成了一个普通字符，而不具备通配符的功能。这一点和大多数编程语言中的转义字符是一样的。")]),s._v(" "),t("h2",{attrs:{id:"随机查询-rand"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#随机查询-rand"}},[s._v("#")]),s._v(" 随机查询：rand()")]),s._v(" "),t("p",[s._v("对于 MySQL 来说，我们可以使用 "),t("code",[s._v("rand()")]),s._v(" 函数来实现随机查询。其中，"),t("code",[s._v("rand")]),s._v(" 是“random（随机）”的缩写。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" 列名\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 表名\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" rand"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"子查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#子查询"}},[s._v("#")]),s._v(" 子查询")]),s._v(" "),t("p",[s._v("子查询，指的是在一条 "),t("code",[s._v("select")]),s._v(" 语句中使用另一条 "),t("code",[s._v("select")]),s._v(" 语句。一般来说，另一条 "),t("code",[s._v("select")]),s._v(" 语句查询的结果往往会作为第一条 "),t("code",[s._v("select")]),s._v(" 语句的查询条件。")]),s._v(" "),t("p",[s._v("（1）单值子查询。")]),s._v(" "),t("p",[s._v("（2）多值子查询。")]),s._v(" "),t("p",[s._v("（3）关联子查询。")]),s._v(" "),t("h3",{attrs:{id:"单值子查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单值子查询"}},[s._v("#")]),s._v(" 单值子查询")]),s._v(" "),t("p",[t("strong",[s._v("单值子查询，指的是作为子查询的select语句返回的结果是“单个值”，也就是返回1行1列的结果。")])]),s._v(" "),t("p",[s._v("**示例：**先查询出最大价格字段，再查询所有数据中匹配最大价值的数据")]),s._v(" "),t("p",[s._v("其中 "),t("code",[s._v("SELECT MAX(price) FROM fruit")]),s._v(" 是单值子查询")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("fruit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" price "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("MAX")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("price"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" fruit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2025/02/07/wZ8MexNmzYdj9qU.png",alt:"image-20250207135535694"}})]),s._v(" "),t("h3",{attrs:{id:"多值子查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多值子查询"}},[s._v("#")]),s._v(" 多值子查询")]),s._v(" "),t("ul",[t("li",[s._v("多值子查询，指的是作为子查询的 "),t("code",[s._v("select")]),s._v(" 语句返回的结果是“多个值”，一般是一列多行。")]),s._v(" "),t("li",[s._v("对于多值子查询来说，一般是放在 "),t("code",[s._v("where")]),s._v(" 子句中，结合 in、all、any、some 这4个关键字来一起使用。")])]),s._v(" "),t("blockquote",[t("ol",[t("li",[s._v("all、any、some 这3个关键字必须要和比较运算符一起使用。")]),s._v(" "),t("li",[s._v("“=any” 等价于 “in”。")]),s._v(" "),t("li",[s._v("“<>all” 等价于 “not in”")])])]),s._v(" "),t("h4",{attrs:{id:"操作符-in"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作符-in"}},[s._v("#")]),s._v(" 操作符 in")]),s._v(" "),t("p",[t("code",[s._v("in")]),s._v(" 操作符用于检查一个值是否存在于子查询返回的结果集中。")]),s._v(" "),t("p",[s._v("新增一张表 popular_types 存最受欢迎的水果类型")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" popular_types "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" popular_types "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'浆果'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'瓜果'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2025/02/07/Z4Dgmk1LfrtMiQl.png",alt:"image-20250207143757229"}})]),s._v(" "),t("p",[s._v("以下是一个示例：查询所有属于受欢迎类型的水果（浆果、瓜果）")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" fruit\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" popular_types"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"操作符-all"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作符-all"}},[s._v("#")]),s._v(" 操作符 all")]),s._v(" "),t("p",[s._v("用于比较某个值与子查询返回的结果集中的所有值。如果外部查询中的值满足与子查询返回的所有值进行比较的条件，则 "),t("code",[s._v("ALL")]),s._v(" 操作符返回 "),t("code",[s._v("TRUE")]),s._v("。")]),s._v(" "),t("p",[s._v("**示例:**查找价格低于表中所有“浆果”类型水果价格的“瓜果”类型水果")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" fruits f1\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" f1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'瓜果'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" f1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("price "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" f2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("price "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" fruits f2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" f2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'浆果'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2025/02/07/5i3s6lvcP78taAD.png",alt:"image-20250207144538890"}})]),s._v(" "),t("h4",{attrs:{id:"操作符-any"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作符-any"}},[s._v("#")]),s._v(" 操作符 any")]),s._v(" "),t("p",[s._v("用于比较某个值与子查询返回的结果集中的任意一个值。如果外部查询中的值满足与子查询返回的任意一个值进行比较的条件，则 "),t("code",[s._v("ANY")]),s._v(" 操作符返回 "),t("code",[s._v("TRUE")]),s._v("。")]),s._v(" "),t("p",[s._v("**示例：**查找价格低于表中任意一个“浆果”类型水果价格的“瓜果”类型水果。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" fruit f1\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" f1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'瓜果'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" f1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("price "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ANY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" f2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("price "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" fruit f2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" f2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'浆果'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2025/02/07/l68x4L9AGCtQXph.png",alt:"image-20250207145805131"}})]),s._v(" "),t("h4",{attrs:{id:"操作符-some"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作符-some"}},[s._v("#")]),s._v(" 操作符 some")]),s._v(" "),t("p",[s._v("在 SQL 标准中，"),t("code",[s._v("SOME")]),s._v(" 操作符实际上是 "),t("code",[s._v("ANY")]),s._v(" 操作符的一个同义词。这意味着在大多数数据库系统（包括 MySQL）中，"),t("code",[s._v("SOME")]),s._v(" 和 "),t("code",[s._v("ANY")]),s._v(" 可以互换使用，而不会产生不同的结果。")]),s._v(" "),t("p",[s._v("因此，使用 "),t("code",[s._v("SOME")]),s._v(" 操作符的多值子查询与使用 "),t("code",[s._v("ANY")]),s._v(" 操作符的多值子查询在语法和功能上是相同的。")]),s._v(" "),t("h3",{attrs:{id:"关联子查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关联子查询"}},[s._v("#")]),s._v(" 关联子查询")]),s._v(" "),t("p",[s._v("关联子查询，指的是父查询和子查询是“相关联”的，子查询的条件需要依赖于父查询。")]),s._v(" "),t("blockquote",[t("p",[s._v("特别注意，关联子查询的关联条件判断一定要写在子查询中，而不是写在父查询中")])]),s._v(" "),t("p",[s._v("**示例：**查询每种类型中价格最高的水果")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" fruit f1\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" f1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("price "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("MAX")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("price"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" fruit f2\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" f2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" f1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2025/02/07/PxLE8rYsfIwFzCj.png",alt:"image-20250207151044629"}})]),s._v(" "),t("p",[s._v("在这个查询中：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("f1")]),s._v(" 是外部查询的别名，用于引用 "),t("code",[s._v("fruit")]),s._v(" 表。")]),s._v(" "),t("li",[s._v("子查询是一个关联子查询，因为它引用了外部查询中的 "),t("code",[s._v("f1.type")]),s._v(" 列。")]),s._v(" "),t("li",[s._v("子查询查找与 "),t("code",[s._v("f1")]),s._v(" 相同类型的水果中的最高价格。")]),s._v(" "),t("li",[s._v("外部查询选择那些其价格等于子查询返回的最高价格的水果。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);