webpackJsonp([1],{"0G6y":function(t,a){},"3hq0":function(t,a,s){"use strict";(function(t){a.a={name:"navbar",mounted:function(){t(window).width()<992&&t(".navbar a").on("click",function(){t(".navbar-toggler").click()})}}}).call(a,s("7t+N"))},Aiex:function(t,a){},FURr:function(t,a){},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("7+uW"),n=s("3hq0"),i={render:function(){var t=this.$createElement,a=this._self._c||t;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark fixed-top coffee"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[a("i",{staticClass:"fa fa-diamond",attrs:{"aria-hidden":"true"}}),this._v("\n    咖啡巨匠\n  ")]),this._v(" "),this._m(0),this._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[a("div",{staticClass:"navbar-nav ml-auto"},[a("router-link",{staticClass:"nav-item nav-link simon-nav",attrs:{to:"/coffeeCart"}},[this._v("特選咖啡")]),this._v(" "),a("router-link",{staticClass:"nav-item nav-link simon-nav",attrs:{to:"/coffeeOrder"}},[this._v("商品結帳")])],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}]};var o=function(t){s("nRdo")},c=s("VU/8")(n.a,i,!1,o,"data-v-50c0972c",null).exports,r=s("Dd8w"),l=s.n(r),u=s("NYxO"),v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("section",{staticClass:"jumbotron jumbotron-fluid text-center mb-0 my-style"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"jumbotron-heading"},[this._v("咖啡巨匠")]),this._v(" "),a("p",{staticClass:"lead"},[this._v("業界巨匠精選咖啡豆，讓您享受暖心滋味、體驗職人咖啡")])])])}]};var m=s("VU/8")({name:"coffeejumbotron"},v,!1,function(t){s("0G6y")},"data-v-256824a4",null).exports,d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"mt-5 ml-auto mr-auto"},[a("div",{staticClass:"cssload-loader"},[a("div",{staticClass:"cssload-inner cssload-one"}),this._v(" "),a("div",{staticClass:"cssload-inner cssload-two"}),this._v(" "),a("div",{staticClass:"cssload-inner cssload-three"})]),this._v(" "),a("h3",{staticClass:"mt-3 mb-5"},[this._v("載入中..")])])}]};var f={name:"coffeeCart",components:{coffeejumbotron:m,loading:s("VU/8")({name:"loading"},d,!1,function(t){s("mlV0")},"data-v-5c9cb6e0",null).exports},methods:l()({},Object(u.d)(["minus","add","addToCart"]),Object(u.b)(["callCoffeeApi"])),computed:l()({},Object(u.e)(["coffeeList"]),Object(u.c)(["howMany"])),mounted:function(){this.callCoffeeApi()}},_={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("coffeejumbotron"),t._v(" "),s("main",{staticClass:"my-main",attrs:{role:"main"}},[s("div",{staticClass:"album py-5"},[s("div",{staticClass:"container"},[s("h2",{staticClass:"pb-3 text-center"},[t._v("特選咖啡")]),t._v(" "),0==t.coffeeList.length?s("div",{staticClass:"row"},[s("loading")],1):t._e(),t._v(" "),0!=t.coffeeList.length?s("div",{staticClass:"row"},[t._l(t.coffeeList,function(a){return s("div",{staticClass:"col-12 col-sm-6 col-lg-4"},[s("div",{staticClass:"card mb-4 box-shadow"},[s("div",{staticClass:"my-box"},[s("img",{staticClass:"card-img-top",attrs:{src:a.img}})]),t._v(" "),s("div",{staticClass:"card-body"},[s("h2",{staticClass:"h4"},[t._v(t._s(a.name))]),t._v(" "),s("h3",{staticClass:"h5"},[t._v("$"+t._s(a.price))]),t._v(" "),s("div",{staticClass:"d-flex justify-content-between align-items-center flex-wrap"},[s("div",{staticClass:"input-group pl-0 col-12 col-md-6 amount"},[s("div",{staticClass:"input-group-prepend"},[s("button",{staticClass:"btn amount-btn",attrs:{type:"button"},on:{click:function(s){t.minus(a)}}},[t._v("-")])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:a.amountShow,expression:"coffee.amountShow"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:a.amountShow},on:{input:function(s){s.target.composing||t.$set(a,"amountShow",s.target.value)}}}),t._v(" "),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn amount-btn",attrs:{type:"button"},on:{click:function(s){t.add(a)}}},[t._v("+")])])]),t._v(" "),s("button",{staticClass:"btn col-12 col-md-6 amount-btn",attrs:{type:"button"},on:{click:function(s){t.addToCart(a)}}},[t._v("購買")])])])])])}),t._v(" "),s("router-link",{staticClass:"btn ml-auto mr-auto next",attrs:{to:"/coffeeOrder",role:"button","aria-pressed":"true"}},[t._v("下一步"),s("span",{staticClass:"badge badge-light text-right ml-2 my-badge-style"},[t._v(t._s(t.howMany))])])],2):t._e()])])])],1)},staticRenderFns:[]};var p=s("VU/8")(f,_,!1,function(t){s("hIh7")},"data-v-71c74644",null).exports,h={name:"coffeeOrder",components:{coffeejumbotron:m},methods:l()({},Object(u.d)(["remove"]),{noCheck:function(){alert("此網頁無結帳與金流功能")}}),computed:l()({},Object(u.c)(["coffeeInCart","total"])),mounted:function(){}},C={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("coffeejumbotron"),t._v(" "),s("main",{staticClass:"my-main",attrs:{role:"main"}},[s("div",{staticClass:"album py-5"},[s("div",{staticClass:"container text-center"},[s("h2",{staticClass:"pb-3"},[t._v("目前訂單")]),t._v(" "),s("div",{staticClass:"row"},[s("table",{staticClass:"table table-bordered"},[t._m(0),t._v(" "),s("tbody",[t._m(1),t._v(" "),t._l(t.coffeeInCart,function(a){return s("tr",[s("td",[t._v(t._s(a.name))]),t._v(" "),s("td",[t._v(t._s(a.amount))]),t._v(" "),s("td",[t._v(t._s(a.price))]),t._v(" "),s("td",[t._v(t._s(a.sum))]),t._v(" "),s("td",{staticClass:"remove-cart"},[s("button",{on:{click:function(s){t.remove(a)}}},[t._v("×")])])])})],2),t._v(" "),s("tfoot",[s("tr",[s("td",{attrs:{colspan:"5"}},[s("span",{staticClass:"float-left"},[t._v("總計")]),s("h3",{staticClass:"total-price float-right"},[t._v("$"+t._s(t.total))])])])])])]),t._v(" "),s("router-link",{staticClass:"btn ml-1 mr-1 mt-3 check-out",attrs:{to:"/coffeeCart"},on:{click:function(a){t.noCheck()}}},[t._v("上一步")]),t._v(" "),s("button",{staticClass:"btn ml-1 mr-1 mt-3 check-out",on:{click:function(a){t.noCheck()}}},[t._v("確認結帳")])],1)])])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",{attrs:{colspan:"5"}},[this._v("已放入購物車")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",{staticClass:"table-title"},[s("td",[t._v("品項")]),t._v(" "),s("td",[t._v("數量")]),t._v(" "),s("td",[t._v("單價")]),t._v(" "),s("td",[t._v("小計")]),t._v(" "),s("td")])}]};var b=s("VU/8")(h,C,!1,function(t){s("gp+O")},"data-v-c0575694",null).exports,g={render:function(){var t=this.$createElement,a=this._self._c||t;return a("section",{staticClass:"jumbotron jumbotron-fluid mb-0 my-style"},[a("div",{staticClass:"container my-text"},[a("h1",[this._v("咖啡巨匠")]),this._v(" "),a("p",{staticClass:"lead"},[this._v("業界巨匠精選咖啡豆，讓您享受暖心滋味、體驗職人咖啡")]),this._v(" "),a("router-link",{staticClass:"btn ml-auto mr-auto buy",attrs:{to:"/coffeeCart",role:"button","aria-pressed":"true"}},[this._v("購買咖啡")])],1)])},staticRenderFns:[]};var w=s("VU/8")({name:"coffeejumbotron"},g,!1,function(t){s("Aiex")},"data-v-b3913fbe",null).exports,x={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"row pt-4 pb-4"},[s("h2",{staticClass:"col-12 text-center"},[t._v("達人推薦")]),t._v(" "),s("div",{staticClass:"col-lg-4 pt-3 text-center"},[s("img",{staticClass:"rounded-circle mb-3",attrs:{src:"https://randomuser.me/api/portraits/men/77.jpg",alt:"燙姆·柯魯斯",width:"140",height:"140"}}),t._v(" "),s("h3",{staticClass:"mb-1"},[t._v("燙姆·柯魯斯")]),t._v(" "),s("span",[t._v("不可能的咖啡店店長")]),t._v(" "),s("p",{staticClass:"mt-3"},[t._v("咖啡巨匠真是神奇的地方，參加咖啡巨匠的活動前，我是一位水電工，參加咖啡巨匠的活動後，我現在是一位咖啡店長了呢！")])]),t._v(" "),s("div",{staticClass:"col-lg-4 pt-3 text-center"},[s("img",{staticClass:"rounded-circle mb-3",attrs:{src:"https://randomuser.me/api/portraits/women/75.jpg",alt:"喵麗·格爛傑",width:"140",height:"140"}}),t._v(" "),s("h3",{staticClass:"mb-1"},[t._v("喵麗·格爛傑")]),t._v(" "),s("span",[t._v("霍格滑滋咖啡魔女")]),t._v(" "),s("p",{staticClass:"mt-3"},[t._v("這裡的咖啡豆品質真的沒話說，彷彿有魔法誘惑一般，讓人一杯接著一杯喝下去，最近還和肯亞合作推出血汗耶加雪菲呢！")])]),t._v(" "),s("div",{staticClass:"col-lg-4 pt-3 text-center"},[s("img",{staticClass:"rounded-circle mb-3",attrs:{src:"https://randomuser.me/api/portraits/women/27.jpg",alt:"郭·踩劫",width:"140",height:"140"}}),t._v(" "),s("h3",{staticClass:"mb-1"},[t._v("郭·踩劫")]),t._v(" "),s("span",[t._v("逮灣咖啡推廣大使")]),t._v(" "),s("p",{staticClass:"mt-3"},[t._v("逮灣最近開了咖啡巨匠旗艦店，自從在這裡買咖啡豆後，我現在考試都100分呢，真要感恩咖啡、讚嘆咖啡！")])])]),t._v(" "),s("hr"),t._v(" "),s("section",[s("h2",{staticClass:"col-12 text-center pt-4 pb-4"},[t._v("我們的特色")]),t._v(" "),s("div",{staticClass:"row info-row mb-4"},[s("div",{staticClass:"col-md-7"},[s("h3",{staticClass:"pb-4"},[t._v("品味咖啡、享受人生")]),t._v(" "),s("p",{staticClass:"lead"},[t._v("細細品味手上的咖啡，我們提供優良實惠的咖啡給您享用，當您沮喪、難過時，咖啡巨匠一直都在，提供您一處避風港，讓你在這裡休息放鬆，品味酸、苦、甘的滋味")])]),t._v(" "),s("div",{staticClass:"col-md-5"},[s("img",{staticClass:"img-fluid mx-auto",attrs:{src:"https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2016/09/27/15/well-good-morning.jpg",alt:"享受咖啡、品味人生"}})])]),t._v(" "),s("div",{staticClass:"row info-row mb-4"},[s("div",{staticClass:"col-md-7 order-md-2"},[s("h3",{staticClass:"pb-4"},[t._v("多種精選咖啡豆")]),t._v(" "),s("p",{staticClass:"lead"},[t._v("從世界各國精選各種咖啡豆，從淺焙到深焙、非洲到美洲...，嚴選新鮮、優良咖啡豆，只為給喜愛咖啡的同好一杯溫暖宜人的瓊漿玉液。")]),t._v(" "),s("p",{staticClass:"lead"},[t._v("咖啡豆優惠活動進行中，選購請至特選咖啡專區！")])]),t._v(" "),s("div",{staticClass:"col-md-5 order-md-1"},[s("img",{staticClass:"img-fluid mx-auto",attrs:{src:"https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2017/1-coffee.jpg",alt:"各種嚴選咖啡豆"}})])]),t._v(" "),s("div",{staticClass:"row info-row mb-4"},[s("div",{staticClass:"col-md-7"},[s("h3",{staticClass:"pb-4"},[t._v("多場咖啡講座活動")]),t._v(" "),s("p",{staticClass:"lead"},[t._v("我們會不定期舉辦各種咖啡相關講座，舉凡咖啡器具的新手操作、分享活動與各種推廣，希望給台灣的咖啡愛好者一個交流平台。")]),t._v(" "),s("p",{staticClass:"lead"},[t._v("目前與血汗咖啡社合作一系列講座，有興趣請關注我們!")])]),t._v(" "),s("div",{staticClass:"col-md-5"},[s("img",{staticClass:"img-fluid mx-auto",attrs:{src:"http://www.lifestyleproduction.com.tw/wp-content/uploads/2017/09/%E8%8A%B1%E8%97%9D%E6%B4%BB%E5%8B%95%E5%92%96%E5%95%A1%E8%AC%9B%E5%BA%A7.jpg",alt:"不定期咖啡講座活動"}})])]),t._v(" "),s("div",{staticClass:"row  info-row mb-4"},[s("div",{staticClass:"col-md-7 order-md-2"},[s("h3",{staticClass:"pb-4"},[t._v("絕佳地理環境")]),t._v(" "),s("p",{staticClass:"lead"},[t._v("遠離都市喧囂，適當的地理位置，在充滿異國情調的環境享受濃醇咖啡，離巴士、捷運站步行約3分鐘距離，逢周六日還有專屬的接泊車。")]),t._v(" "),s("p",{staticClass:"lead"},[t._v("我們不希望交通造成您的困擾，您只需攜帶對咖啡的熱情過來即可！")])]),t._v(" "),s("div",{staticClass:"col-md-5 order-md-1"},[s("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.6522954469274!2d-65.26228501636142!3d-19.0350373267021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAyJzA2LjciUyA2NcKwMTUnNDQuMyJX!5e0!3m2!1szh-TW!2stw!4v1524895066326",width:"100%",height:"300",frameborder:"0",allowfullscreen:""}})])])])])}]};var y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("footer",[a("div",{staticClass:"container"},[a("p",[this._v("2018 By SimonAllen")])])])}]};var k={name:"info",components:{introduce:s("VU/8")({name:"introduce"},x,!1,function(t){s("FURr")},"data-v-32375170",null).exports,myfooter:s("VU/8")({name:"myfooter",data:function(){return{}}},y,!1,function(t){s("sosV")},"data-v-5caf2a5b",null).exports,mainjumbotron:w}},j={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("main",{attrs:{role:"main"}},[a("mainjumbotron"),this._v(" "),a("introduce")],1),this._v(" "),a("myfooter")],1)},staticRenderFns:[]};var E=s("VU/8")(k,j,!1,function(t){s("cn+X")},"data-v-5c7681e6",null).exports,A={name:"App",components:{info:E,navbar:c,coffeeCart:p,coffeeOrder:b}},$={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("navbar"),this._v(" "),a("Keep-alive",[a("router-view")],1)],1)},staticRenderFns:[]},O=s("VU/8")(A,$,!1,null,null,null).exports,S=s("/ocq");e.a.use(S.a);var R=new S.a({routes:[{path:"/",name:"info",component:E},{path:"/coffeeCart",name:"coffeeCart",component:p},{path:"/coffeeOrder",name:"coffeeOrder",component:b}]}),U=s("cDPk"),V=s.n(U);e.a.use(u.a,V.a);var F=new u.a.Store({state:{coffeeList:[]},mutations:{minus:function(t,a){a.amountShow--,a.amountShow=a.amountShow<1?1:a.amountShow},add:function(t,a){a.amountShow++,a.amountShow=a.amountShow>9?9:a.amountShow},addToCart:function(t,a){a.amount+=a.amountShow},remove:function(t,a){a.amount=0},setjson:function(t,a){t.coffeeList=a,console.log("這是我用node.js部署在heroku的假資料API"),console.log("如果你不知道，現在讓你看看"),console.log(t.coffeeList)}},getters:{coffeeInCart:function(t){return t.coffeeList.filter(function(t){return t.amount}).map(function(t){return t.sum=t.amount*t.price,t})},total:function(t,a){return a.coffeeInCart.reduce(function(t,a){return t+a.sum},0)},howMany:function(t,a){return a.coffeeInCart.reduce(function(t,a){return t+a.amount},0)}},actions:{callCoffeeApi:function(t){var a=t.commit;V.a.get("https://fake-coffee-api.herokuapp.com/coffeeAPI").then(function(t){a("setjson",t.data)}).catch(function(t){console.log("哎呀出錯了，可能是heroku免費方案每天啟動server需要一段時間"),console.log(t)})}}});s("qb6w"),s("Bb4J"),s("OF5A");e.a.config.productionTip=!1,new e.a({el:"#app",router:R,store:F,components:{App:O},template:"<App/>"})},"cn+X":function(t,a){},"gp+O":function(t,a){},hIh7:function(t,a){},mlV0:function(t,a){},nRdo:function(t,a){},qb6w:function(t,a){},sosV:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.d4ff5afaa8235e940cdf.js.map