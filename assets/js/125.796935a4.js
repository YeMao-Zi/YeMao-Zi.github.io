(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{492:function(n,s,e){"use strict";e.r(s);var a=e(7),t=Object(a.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("p",[n._v("计时器设置延时以及设置超时取消请求")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("app.get('/delay', (request, response) => {\n    //设置响应头,第一部分是头的名字，后面是值。作用是为了允许跨域\n    response.setHeader('Access-Control-Allow-Origin', '*');\n    //设置响应体\n    setTimeout(()=>{response.send(\"延时响应\")},3000)\n    \n});\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br")])]),s("p",[n._v("xhr.timeout为设置时间限制，自动取消请求"),s("br"),n._v("\nxhr.onerror表示网络异常")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("<body>\n    <button>发送请求</button>\n    <div id=\"result\"></div>\n</body>\n<script>\n    let btn = document.querySelector('button');\n    let result = document.querySelector('#result');\n    btn.onclick = function () {\n        // 1.创建对象,为什么命名xhr是因为其英文代表ajax方便理解\n        const xhr = new XMLHttpRequest();\n        //超时设置2秒，2秒后未响应取消请求\n        xhr.timeout=2000;\n        //设置超时提醒\n        xhr.ontimeout=function(){\n            alert('传输失败，请稍后重试')\n        }\n          // 加载时出现问题,网络异常如停网时的提醒\n         xhr.onerror=function(){\n            alert('你的网络似乎出现了一点问题');\n        }\n        // 2.初始化，设置请求方法和url\n        xhr.open('GET','http://127.0.0.1:8000/delay');//?表示传递参数\n        // 3.发送\n        xhr.send();\n        // 4.事件绑定 处理服务端返回的结果,on单词表示当...的时候，\n        xhr.onreadystatechange = function () {\n            // 判断服务端返回所有结果,类似于第三次握手\n            if (xhr.readyState === 4) {\n                // 继续判断响应状态 200 404 403 401 500,2开头表示成功\n                if (xhr.status >= 200 && xhr.status < 300) {\n                    // 处理结果\n                result.innerHTML=xhr.response\n                }\n            }\n        }\n    }\n<\/script>\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br")])]),s("p",[n._v("手动取消请求：abort函数")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("<body>\n    <button>点击发送</button>\n    <button>点击取消</button>\n\n    <script>\n        let send=document.querySelectorAll('button');\n        let xhr=null;//为了两个函数调用同一个变量\n        send[0].onclick=function(){\n            xhr=new XMLHttpRequest();\n            xhr.open('GET','http://127.0.0.1:8000/delay');\n            xhr.send();\n        }\n        //abort()函数，手动取消发送请求\n        send[1].onclick=function(){\n            xhr.abort();\n        }\n    <\/script>\n</body>\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br")])]),s("p",[n._v("解决请求重复问题（防抖或节流阀）"),s("br"),n._v("\n实现逻辑："),s("br"),n._v("\n1.再次点击发送，若状态为true,即发送正在进行时，取消前一次xhr"),s("br"),n._v("\n2.初始状态为false,发送过程中状态改为true"),s("br"),n._v("\n3.发送成功状态改为false")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("<body>\n    <button>点击发送</button>\n    <div id=\"result\"></div>\n    <script>\n        const btn = document.querySelectorAll('button');\n        let result = document.querySelector('#result');\n        let x = null;//为了两个函数调用同一个变量\n        let issending = false;//设置防抖\n        btn[0].onclick = function () {\n            if (issending) x.abort();//如果正在发送请求就取消，必须放在x =new前面，否则第二次点击取消的是第二次的x，但取消后下面代码继续运行第二次x请求不受影响\n            x = new XMLHttpRequest();\n            issending = true;\n            x.open('GET', 'http://127.0.0.1:8000/delay');\n            x.send();\n            x.onreadystatechange = function () {\n                // 判断服务端返回所有结果,类似于第三次握手\n                if (x.readyState === 4) {\n                    issending = false;//响应成功就改变布尔值\n                    if (x.status >= 200 && x.status < 300) {\n                        // 处理结果\n                        // result.innerHTML = xhr.response;\n                        result.innerHTML += x.response\n                    }\n                }\n            }\n        }\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br")])]),s("p",[n._v("防抖，注意防抖判断条件要用==双等于号"),s("br"),n._v("\n防抖：当用户再次触发请求时，如果请求未响应的话取消上次请求，重新发请求")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("<body>\n        <button>点击发送</button>\n        <div id=\"result\"></div>\n        <script>\n            const btn = document.querySelectorAll('button');\n            let result = document.querySelector('#result');\n            let x = null;//为了两个函数调用同一个变量\n            let issending = false;//设置防抖\n            btn[0].onclick = function () {\n                if (issending==false){console.log('成功'); //如果正在发送请求就取消，注意一定要双等于号\n                x = new XMLHttpRequest();\n                issending = true;\n                x.open('GET', 'http://127.0.0.1:8000/delay');\n                x.send();\n                x.onreadystatechange = function () {\n                    // 判断服务端返回所有结果,类似于第三次握手\n                    if (x.readyState === 4) {\n                        issending = false;//响应成功就改变布尔值\n                        if (x.status >= 200 && x.status < 300) {\n                            // 处理结果\n                            // result.innerHTML = xhr.response;\n                            result.innerHTML += x.response\n                        }\n                    }\n                }\n            }}\n    <\/script>\n</body>\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);