(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-321b6036"],{"1dde":function(t,e,a){var c=a("d039"),n=a("b622"),r=a("2d00"),o=n("species");t.exports=function(t){return r>=51||!c((function(){var e=[],a=e.constructor={};return a[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"6c7d":function(t,e,a){"use strict";a.r(e);var c=a("7a23");function n(t,e,a,n,r,o){var i=Object(c["resolveComponent"])("FrontNavbar"),d=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])(i),Object(c["createVNode"])(d)],64)}var r={class:"navbar navbar-expand-lg navbar-light bg-light"},o={class:"container-fluid"},i=Object(c["createTextVNode"])("卡斯伯餐飲店"),d=Object(c["createVNode"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["createVNode"])("span",{class:"navbar-toggler-icon"})],-1),l={class:"collapse navbar-collapse",id:"navbarSupportedContent"},s={class:"navbar-nav me-auto mb-2 mb-lg-0"},b={class:"nav-item"},u=Object(c["createTextVNode"])("產品列表"),v={class:"nav-item"},f=Object(c["createTextVNode"])("購物車"),j={class:"nav-item"},p=Object(c["createTextVNode"])("Blog"),O={class:"nav-item"},g=Object(c["createTextVNode"])("登入後台"),N={class:"nav-item"},h=Object(c["createTextVNode"])("結帳"),V={type:"button",class:"btn btn-primary"},x=Object(c["createTextVNode"])(" 結帳 "),m={class:"badge rounded-pill bg-warning text-dark"};function w(t,e,a,n,w,C){var k=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createBlock"])("nav",r,[Object(c["createVNode"])("div",o,[Object(c["createVNode"])(k,{class:"navbar-brand",to:"/"},{default:Object(c["withCtx"])((function(){return[i]})),_:1}),d,Object(c["createVNode"])("div",l,[Object(c["createVNode"])("ul",s,[Object(c["createVNode"])("li",b,[Object(c["createVNode"])(k,{class:"nav-link",to:"/products"},{default:Object(c["withCtx"])((function(){return[u]})),_:1})]),Object(c["createVNode"])("li",v,[Object(c["createVNode"])(k,{class:"nav-link",to:"/cart"},{default:Object(c["withCtx"])((function(){return[f]})),_:1})]),Object(c["createVNode"])("li",j,[Object(c["createVNode"])(k,{class:"nav-link",to:"/articles"},{default:Object(c["withCtx"])((function(){return[p]})),_:1})]),Object(c["createVNode"])("li",O,[Object(c["createVNode"])(k,{class:"nav-link",to:"/login"},{default:Object(c["withCtx"])((function(){return[g]})),_:1})]),Object(c["createVNode"])("li",N,[Object(c["createVNode"])(k,{class:"nav-link",to:"/checkout/:orderId"},{default:Object(c["withCtx"])((function(){return[h]})),_:1})])])]),Object(c["createVNode"])("button",V,[x,Object(c["createVNode"])("span",m,Object(c["toDisplayString"])(w.cartData.carts.length),1)])])])}a("99af");var C=a("37ca"),k={data:function(){return{cartData:{carts:[]}}},methods:{getCart:function(){var t=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/v2","api/").concat("david-frontend","/cart")).then((function(e){console.log("cart:",e),t.cartData=e.data.data}))}},mounted:function(){var t=this;this.getCart(),C["a"].on("get-cart",(function(){t.getCart()}))}},T=a("d959"),y=a.n(T);const B=y()(k,[["render",w]]);var _=B,S={components:{FrontNavbar:_}};const D=y()(S,[["render",n]]);e["default"]=D},8418:function(t,e,a){"use strict";var c=a("c04e"),n=a("9bf2"),r=a("5c6c");t.exports=function(t,e,a){var o=c(e);o in t?n.f(t,o,r(0,a)):t[o]=a}},"99af":function(t,e,a){"use strict";var c=a("23e7"),n=a("d039"),r=a("e8b5"),o=a("861d"),i=a("7b0b"),d=a("50c4"),l=a("8418"),s=a("65f0"),b=a("1dde"),u=a("b622"),v=a("2d00"),f=u("isConcatSpreadable"),j=9007199254740991,p="Maximum allowed index exceeded",O=v>=51||!n((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),g=b("concat"),N=function(t){if(!o(t))return!1;var e=t[f];return void 0!==e?!!e:r(t)},h=!O||!g;c({target:"Array",proto:!0,forced:h},{concat:function(t){var e,a,c,n,r,o=i(this),b=s(o,0),u=0;for(e=-1,c=arguments.length;e<c;e++)if(r=-1===e?o:arguments[e],N(r)){if(n=d(r.length),u+n>j)throw TypeError(p);for(a=0;a<n;a++,u++)a in r&&l(b,u,r[a])}else{if(u>=j)throw TypeError(p);l(b,u++,r)}return b.length=u,b}})}}]);
//# sourceMappingURL=chunk-321b6036.914253bd.js.map