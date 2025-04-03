(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{590:function(t,r,e){"use strict";e.r(r);var v=e(5),s=Object(v.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"controller"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#controller"}},[t._v("#")]),t._v(" Controller")]),t._v(" "),r("h3",{attrs:{id:"声明url"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#声明url"}},[t._v("#")]),t._v(" 声明url")]),t._v(" "),r("p",[t._v("Nest 是对标 Java 的 Spring 框架的后端框架，它有很多概念。")]),t._v(" "),r("p",[t._v("对于新手来说，上来就接触这些概念可能会有点懵。")]),t._v(" "),r("p",[t._v("这节我们集中来过一下（这节不用实践，理解概念就好）：")]),t._v(" "),r("p",[t._v("我们通过不同的 url 来访问后端接口：")]),t._v(" "),r("p",[t._v("/user/create")]),t._v(" "),r("p",[t._v("/user/list")]),t._v(" "),r("p",[t._v("/book/create")]),t._v(" "),r("p",[t._v("/book/list")]),t._v(" "),r("p",[t._v("不同的 url 是不同的路由。")]),t._v(" "),r("p",[t._v("这些路由在 Controller 里声明：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s2.loli.net/2025/03/11/rZ5PWeuh9U2NiFz.png",alt:""}})]),t._v(" "),r("p",[t._v("比如这里就是声明了一个 /user/create 的 post 接口，声明了一个 /user/list 的 get 接口。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s2.loli.net/2025/03/11/EGc1qajLQ6MISDB.png",alt:""}})]),t._v(" "),r("p",[t._v("在 class 上和它方法的方法上加上 @Controller、@Get、@Post 的装饰器就可以了。")]),t._v(" "),r("p",[t._v("controller 的方法叫做 handler，是处理路由的。")]),t._v(" "),r("h3",{attrs:{id:"获取参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#获取参数"}},[t._v("#")]),t._v(" 获取参数")]),t._v(" "),r("p",[t._v("post 的请求体，get 的请求参数，都可以通过装饰来取：")]),t._v(" "),r("p",[t._v("通过 @Param 取 url 中的参数，比如 /user/111 里的 111")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s2.loli.net/2025/03/11/Delr7wP1Jgo4sfa.png",alt:""}})]),t._v(" "),r("p",[t._v("通过 @Query 来取 url 中的 query 参数，比如 /user/xx?id=222 里的 222")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s2.loli.net/2025/03/11/GHJeRBzEpoXVD4A.png",alt:""}})]),t._v(" "),r("p",[t._v("通过 @Body 取 /book/create 的请求体内容：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s2.loli.net/2025/03/11/ULdn3NeKAzXlQCO.png",alt:""}})]),t._v(" "),r("p",[t._v("请求体一般会传递 json，比如 { username: 'xxx', password: 'xxx' }")]),t._v(" "),r("p",[t._v("我们会通过 dto （data transfer object）来接收。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s2.loli.net/2025/03/11/gZ7knysfwqbDPSY.png",alt:""}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s2.loli.net/2025/03/11/G72altEzueTJk9L.png",alt:""}})]),t._v(" "),r("p",[t._v("传递到 handler 的就已经是 dto 对象了。")]),t._v(" "),r("p",[t._v("也就是说 "),r("strong",[t._v("controller 是处理路由和解析请求参数的")]),t._v("。")]),t._v(" "),r("h3",{attrs:{id:"接入service业务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#接入service业务"}},[t._v("#")]),t._v(" 接入service业务")]),t._v(" "),r("p",[t._v("请求参数解析出来了，下一步就是做业务逻辑的处理了，这些东西不写在 controller 里，而是放在 service 里。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s2.loli.net/2025/03/11/Q4vtGozEibg8edN.png",alt:""}})]),t._v(" "),r("p",[r("strong",[t._v("service 里做业务逻辑的具体实现，比如操作数据库等")])]),t._v(" "),r("p",[t._v("同理，/book/list、/book/create 接口是在另一个 BookController 里：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s2.loli.net/2025/03/11/l3QiJa9XAU1O2IG.png",alt:""}})]),t._v(" "),r("p",[t._v("它的业务逻辑实现也是在 BookService 里。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s2.loli.net/2025/03/11/AnzMhWquKvXD6GJ.png",alt:""}})]),t._v(" "),r("p",[t._v("很明显，UserController 和 UserService 是一块的，BookController 和 BookService 是一块的。")]),t._v(" "),r("h2",{attrs:{id:"module模块"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#module模块"}},[t._v("#")]),t._v(" module模块")]),t._v(" "),r("p",[t._v("所以，Nest 有了模块的划分，每个模块里都包含 controller 和 service：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s2.loli.net/2025/03/11/eVrpUl13EPSBJZR.png",alt:""}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s2.loli.net/2025/03/11/B6cG5vApPrLNhok.png",alt:""}})]),t._v(" "),r("p",[t._v("通过 @Module 声明模块，它包含 controllers 和 providers。")]),t._v(" "),r("h3",{attrs:{id:"ioc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ioc"}},[t._v("#")]),t._v(" IoC")]),t._v(" "),r("p",[t._v("为啥不是 services 而是 providers 呢？")]),t._v(" "),r("p",[t._v("因为 Nest 实现了一套依赖注入机制，叫做 IoC（Inverse of Control 反转控制）。")]),t._v(" "),r("p",[t._v("简单说就是你只需要声明依赖了啥就行，不需要手动去 new 依赖，Nest 的 IoC 容器会自动给你创建并注入依赖。")]),t._v(" "),r("p",[t._v("比如这个 UserController 依赖了 JwtService，那只需要通过 @Inject 声明依赖，然后就可以在方法里用了：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s2.loli.net/2025/03/11/6dNgYFOreZK2RaB.png",alt:""}})]),t._v(" "),r("p",[t._v("运行的时候会自动查找这个 JwtServcie 的实例来注入。")]),t._v(" "),r("p",[t._v("在 @Module 里的 providers 数组里，就是声明要往 IoC 容器里提供的对象，所以这里叫做 providers。")]),t._v(" "),r("p",[t._v("provider 有很多种写法：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s2.loli.net/2025/03/11/A9Z1KYPJjXTDavo.png",alt:""}})]),t._v(" "),r("p",[t._v("默认的 XxxService 只是一种简化的写法。")]),t._v(" "),r("p",[t._v("还可以直接 useValue 创建，通过 useFactory 创建等。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s2.loli.net/2025/03/11/XzH8KklyodbhFcG.png",alt:""}})]),t._v(" "),r("h3",{attrs:{id:"注入方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#注入方式"}},[t._v("#")]),t._v(" 注入方式")]),t._v(" "),r("p",[t._v("刚才提到了 IoC 会自动从容器中查找实例来注入，注入的方式有两种：")]),t._v(" "),r("p",[t._v("属性注入和构造器注入。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s2.loli.net/2025/03/11/w4abFeHDAcJZY6R.png",alt:""}})]),t._v(" "),r("p",[t._v("这种写在构造器里的依赖，就是构造器注入。")]),t._v(" "),r("p",[t._v("@Inject 写在属性上的依赖，就是属性注入。")]),t._v(" "),r("p",[t._v("效果是一样的，只是注入的时机不同。")]),t._v(" "),r("h3",{attrs:{id:"模块功能文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#模块功能文件"}},[t._v("#")]),t._v(" 模块功能文件")]),t._v(" "),r("p",[t._v("每个模块都会包含 controller、service、module、dto、entities 这些东西：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s2.loli.net/2025/03/11/1jE4OK6YZCciBsS.png",alt:""}})]),t._v(" "),r("p",[t._v("controller 是处理路由，解析请求参数的。")]),t._v(" "),r("p",[t._v("service 是处理业务逻辑的，比如操作数据库。")]),t._v(" "),r("p",[t._v("dto 是封装请求参数的。")]),t._v(" "),r("p",[t._v("entities 是封装对应数据库表的实体的。")]),t._v(" "),r("h3",{attrs:{id:"mvc-模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mvc-模式"}},[t._v("#")]),t._v(" MVC 模式")]),t._v(" "),r("p",[t._v("nest 应用跑起来后，会从 AppModule 开始解析，初始化 IoC 容器，加载所有的 service 到容器里，然后解析 controller 里的路由，接下来就可以接收请求了。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s2.loli.net/2025/03/11/xNnDiRTk4muWcyg.png",alt:""}})]),t._v(" "),r("p",[t._v("其实这种架构叫做 MVC 模式，也就是 model、view、controller。")]),t._v(" "),r("p",[t._v("controller 接收请求参数，交给 model 处理（model 就是处理 service 业务逻辑，处理 repository 数据库访问），然后返回 view，也就是响应。")]),t._v(" "),r("h3",{attrs:{id:"aop-机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aop-机制"}},[t._v("#")]),t._v(" AOP 机制")]),t._v(" "),r("p",[t._v("应用中会有很多 controller、service，那如果是跨多个 controller 的逻辑呢？")]),t._v(" "),r("p",[t._v("这种在 Nest 提供了 AOP （Aspect Oriented Programming 面向切面编程）的机制")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s2.loli.net/2025/03/11/bvhK8DPoSZOtWNI.png",alt:""}})]),t._v(" "),r("p",[t._v("具体来说，有 Middleware、Guard、Interceptor、Pipe、Exception Filter 这五种。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s2.loli.net/2025/03/11/XZntz3PT5f91Uuo.png",alt:""}})]),t._v(" "),r("p",[t._v("它们都是在目标 controller 的 handler 前后，额外加一段逻辑的。")]),t._v(" "),r("p",[t._v("比如你可以通过 interceptor 实现请求到响应的时间的记录：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s2.loli.net/2025/03/11/e7SxdCTlELAiBHN.png",alt:""}})]),t._v(" "),r("p",[t._v("这种逻辑适合放在 controller 里么？")]),t._v(" "),r("p",[t._v("不适合，这种通用逻辑应该通过 interceptor 等方式抽离出来，然后需要用的时候在 controller 上声明一下：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s2.loli.net/2025/03/11/FbfOToCMNVI7rQX.png",alt:""}})]),t._v(" "),r("p",[t._v("这些就是 Nest 的核心概念了。")]),t._v(" "),r("p",[t._v("此外，创建 Nest 项目自然也是有 cli 工具的。")]),t._v(" "),r("p",[t._v("比如创建新项目：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s2.loli.net/2025/03/11/4OtwZNeXJfvgEcz.png",alt:""}})]),t._v(" "),r("p",[t._v("创建项目里的某个新模块：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s2.loli.net/2025/03/11/BXupo89gmvUqhs6.png",alt:""}})]),t._v(" "),r("p",[t._v("都可以通过 @nestjs/cli 来做。")]),t._v(" "),r("p",[t._v("所以我们后面的学习顺序是先学会 cli 的使用，然后学习 Nest 的核心概念，之后学下涉及到的数据库、orm 框架等，最后来做项目实战。")]),t._v(" "),r("h2",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),r("p",[t._v("这节我们讲了很多 Nest 里的概念。")]),t._v(" "),r("p",[t._v("比如 controller、handler、service、dto、module、entity、ioc、aop、nest cli 等。")]),t._v(" "),r("p",[r("strong",[t._v("controller")]),t._v("：控制器，用于处理路由，解析请求参数")]),t._v(" "),r("p",[r("strong",[t._v("handler")]),t._v("：控制器里处理路由的方法")]),t._v(" "),r("p",[r("strong",[t._v("service")]),t._v("：实现业务逻辑的地方，比如操作数据库等")]),t._v(" "),r("p",[r("strong",[t._v("dto")]),t._v("：data transfer object，数据传输对象，用于封装请求体里数据的对象")]),t._v(" "),r("p",[r("strong",[t._v("module")]),t._v("：模块，包含 controller、service 等，比如用户模块、书籍模块")]),t._v(" "),r("p",[r("strong",[t._v("entity")]),t._v("：对应数据库表的实体")]),t._v(" "),r("p",[r("strong",[t._v("ioc")]),t._v("：Inverse of Controller，反转控制或者叫依赖注入，只要声明依赖，运行时 Nest 会自动注入依赖的实例")]),t._v(" "),r("p",[r("strong",[t._v("aop")]),t._v("：Aspect Oriented Programming 面向切面编程，在多个请求响应流程中可以复用的逻辑，比如日志记录等，具体包含 middleware、interceotor、guard、exception filter、pipe")]),t._v(" "),r("p",[r("strong",[t._v("nest cli")]),t._v("：创建项目、创建模块、创建 controller、创建 service 等都可以用这个 cli 工具来做")]),t._v(" "),r("p",[t._v("现在只要能大概理解概念就行，后面我们会深入学习这些。")])])}),[],!1,null,null,null);r.default=s.exports}}]);