(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{583:function(s,a,t){"use strict";t.r(a);var e=t(5),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"安全管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安全管理"}},[s._v("#")]),s._v(" 安全管理")]),s._v(" "),a("p",[s._v("数据库往往是一个系统中最重要的部分，因此对数据的保护也是数据库管理中的重要组成部分。")]),s._v(" "),a("p",[a("code",[s._v("MySQL")]),s._v("为我们提供了一整套的安全机制，主要包括用户管理和权限管理。")]),s._v(" "),a("h2",{attrs:{id:"用户管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户管理"}},[s._v("#")]),s._v(" 用户管理")]),s._v(" "),a("p",[a("code",[s._v("MySQL")]),s._v("的用户主要分为两种：一种是“root用户”，另一种是“普通用户”。root用户拥有所有权限，包括：创建用户、删除用户、修改用户等。而普通用户只拥有被root用户赋予的权限。")]),s._v(" "),a("h3",{attrs:{id:"创建用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建用户"}},[s._v("#")]),s._v(" 创建用户")]),s._v(" "),a("p",[s._v("要创建一个新用户，可以使用"),a("code",[s._v("CREATE USER")]),s._v("命令。例如，创建一个名为"),a("code",[s._v("newuser")]),s._v("的用户，并设置其密码为"),a("code",[s._v("password")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'用户名'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'主机名'")]),s._v("\nidentified "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'密码'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'newuser'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),s._v(" IDENTIFIED "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这里"),a("code",[s._v("'newuser'@'localhost'")]),s._v("指定了用户只能从本地连接到数据库服务器。如果你想让用户能够从任何主机连接，可以用"),a("code",[s._v("'%'")]),s._v("代替"),a("code",[s._v("'localhost'")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"修改用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改用户"}},[s._v("#")]),s._v(" 修改用户")]),s._v(" "),a("h4",{attrs:{id:"更改用户名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更改用户名"}},[s._v("#")]),s._v(" 更改用户名")]),s._v(" "),a("p",[s._v("要重命名一个已有的用户，可以使用"),a("code",[s._v("RENAME USER")]),s._v("命令：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RENAME")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'oldname'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'newname'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"更改用户密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更改用户密码"}},[s._v("#")]),s._v(" 更改用户密码")]),s._v(" "),a("p",[s._v("更改用户的密码可以使用"),a("code",[s._v("ALTER USER")]),s._v("命令：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),s._v(" IDENTIFIED "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'new_password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"修改用户权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改用户权限"}},[s._v("#")]),s._v(" 修改用户权限")]),s._v(" "),a("p",[s._v("新创建的用户只有极少数的权限，一般只能登录MySQL服务器，但不具备访问数据的权限。如果想要使得创建的用户可以访问数据，我们还需要手动赋予用户指定的权限。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("grant")]),s._v(" 权限名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 权限名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" …"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 权限名n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'库名.表名'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'用户名'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'主机名'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" 参数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("你可以通过"),a("code",[s._v("GRANT")]),s._v("命令来给用户授予权限，比如对某个数据库或表进行读写操作：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIVILEGES")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" databasename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" 参数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这会授予"),a("code",[s._v("username")]),s._v("对"),a("code",[s._v("databasename")]),s._v("数据库的所有权限。如果你只想授予特定类型的权限（如只读），可以指定权限类型：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" databasename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("记得在执行这些操作后运行"),a("code",[s._v("FLUSH PRIVILEGES;")]),s._v("以使更改生效。")]),s._v(" "),a("p",[s._v("查看权限")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" grants "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'用户名'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'主机名'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"撤销权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#撤销权限"}},[s._v("#")]),s._v(" 撤销权限")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("revoke")]),s._v(" 权限名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 权限名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" …"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 权限名n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" 库名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("表名\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'用户名'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'主机名'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"删除用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除用户"}},[s._v("#")]),s._v(" 删除用户")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'用户名'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'主机名'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"权限管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#权限管理"}},[s._v("#")]),s._v(" 权限管理")]),s._v(" "),a("p",[s._v("新创建的用户只有极少数的权限，一般只能登录"),a("code",[s._v("MySQL")]),s._v("服务器，但不具备访问数据的权限。如果想要使得创建的用户可以访问数据，我们还需要手动赋予用户指定的权限。")])])}),[],!1,null,null,null);a.default=r.exports}}]);