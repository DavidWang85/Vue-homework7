(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7943a20c"],{1799:function(e,t,c){"use strict";var a=c("7a23"),r={"aria-label":"Page navigation example"},o={class:"pagination justify-content-center"},n=Object(a["createVNode"])("span",{"aria-hidden":"true"},"«",-1),l={key:0,class:"page-link"},d=Object(a["createVNode"])("span",{"aria-hidden":"true"},"»",-1);function i(e,t,c,i,s,b){return Object(a["openBlock"])(),Object(a["createBlock"])("nav",r,[Object(a["createVNode"])("ul",o,[Object(a["createVNode"])("li",{class:[{disabled:!c.pages.has_pre},"page-item"]},[Object(a["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[1]||(t[1]=Object(a["withModifiers"])((function(e){return b.updatePage(c.pages.current_page-1)}),["prevent"]))},[n])],2),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(c.pages.total_pages,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:["page-item",{active:c.pages.current_page===e}],key:e},[e===c.pages.current_page?(Object(a["openBlock"])(),Object(a["createBlock"])("span",l,Object(a["toDisplayString"])(e),1)):(Object(a["openBlock"])(),Object(a["createBlock"])("a",{key:1,class:"page-link",href:"#",onClick:Object(a["withModifiers"])((function(t){return b.updatePage(e)}),["prevent"])},Object(a["toDisplayString"])(e),9,["onClick"]))],2)})),128)),Object(a["createVNode"])("li",{class:["page-item",{disabled:!c.pages.has_next}]},[Object(a["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[2]||(t[2]=Object(a["withModifiers"])((function(e){return b.updatePage(c.pages.current_page+1)}),["prevent"]))},[d])],2)])])}var s={props:["pages"],methods:{updatePage:function(e){this.$emit("emitPages",e)}}},b=c("d959"),O=c.n(b);const p=O()(s,[["render",i]]);t["a"]=p},5651:function(e,t,c){"use strict";c.r(t);var a=c("7a23"),r={class:"table mt-4"},o=Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("th",null,"購買時間"),Object(a["createVNode"])("th",null,"Email"),Object(a["createVNode"])("th",null,"購買款項"),Object(a["createVNode"])("th",null,"應付金額"),Object(a["createVNode"])("th",null,"是否付款"),Object(a["createVNode"])("th",null,"編輯")])],-1),n={class:"list-unstyled"},l={class:"text-right"},d={class:"form-check form-switch"},i={key:0},s={key:1},b={class:"btn-group"};function O(e,t,c,O,p,u){var j=Object(a["resolveComponent"])("Loading"),h=Object(a["resolveComponent"])("OrderModal"),g=Object(a["resolveComponent"])("DelModal"),m=Object(a["resolveComponent"])("Pagination");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])(j,{active:p.isLoading,"z-index":1060},null,8,["active"]),Object(a["createVNode"])("table",r,[o,Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(p.orders,(function(t,c){return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:c},[p.orders.length?(Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:0,class:{"text-secondary":!t.is_paid}},[Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(e.$filters.date(t.create_at)),1),Object(a["createVNode"])("td",null,[t.user?(Object(a["openBlock"])(),Object(a["createBlock"])("span",{key:0,textContent:Object(a["toDisplayString"])(t.user.email)},null,8,["textContent"])):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("ul",n,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(t.products,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{key:t},Object(a["toDisplayString"])(e.product.title)+" 數量："+Object(a["toDisplayString"])(e.qty)+" "+Object(a["toDisplayString"])(e.product.unit),1)})),128))])]),Object(a["createVNode"])("td",l,Object(a["toDisplayString"])(t.total),1),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("div",d,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{class:"form-check-input",type:"checkbox",id:"paidSwitch".concat(t.id),"onUpdate:modelValue":function(e){return t.is_paid=e},onChange:function(e){return u.updatePaid(t)}},null,40,["id","onUpdate:modelValue","onChange"]),[[a["vModelCheckbox"],t.is_paid]]),Object(a["createVNode"])("label",{class:"form-check-label",for:"paidSwitch".concat(t.id)},[t.is_paid?(Object(a["openBlock"])(),Object(a["createBlock"])("span",i,"已付款")):(Object(a["openBlock"])(),Object(a["createBlock"])("span",s,"未付款"))],8,["for"])])]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("div",b,[Object(a["createVNode"])("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:function(e){return u.openModal(t)}}," 檢視 ",8,["onClick"]),Object(a["createVNode"])("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:function(e){return u.openDelOrderModal(t)}}," 刪除 ",8,["onClick"])])])],2)):Object(a["createCommentVNode"])("",!0)],64)})),128))])]),Object(a["createVNode"])(h,{order:p.tempOrder,ref:"orderModal",onUpdatePaid:u.updatePaid},null,8,["order","onUpdatePaid"]),Object(a["createVNode"])(g,{item:p.tempOrder,ref:"delModal",onDelItem:u.delOrder},null,8,["item","onDelItem"]),Object(a["createVNode"])(m,{pages:p.pagination,onEmitPages:u.getOrders},null,8,["pages","onEmitPages"])],64)}var p=c("5530"),u=(c("99af"),c("6ff1")),j=(c("b0c0"),{class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),h={class:"modal-dialog modal-xl",role:"document"},g={class:"modal-content border-0"},m=Object(a["createVNode"])("div",{class:"modal-header bg-dark text-white"},[Object(a["createVNode"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(a["createVNode"])("span",null,"訂單細節")]),Object(a["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),N={class:"modal-body"},V={class:"row"},k={class:"col-md-4"},f=Object(a["createVNode"])("h3",null,"用戶資料",-1),y={class:"table"},v={key:0},B=Object(a["createVNode"])("th",{style:{width:"100px"}},"姓名",-1),D=Object(a["createVNode"])("th",null,"Email",-1),M=Object(a["createVNode"])("th",null,"電話",-1),x=Object(a["createVNode"])("th",null,"地址",-1),S={class:"col-md-8"},C=Object(a["createVNode"])("h3",null,"訂單細節",-1),P={class:"table"},_=Object(a["createVNode"])("th",{style:{width:"100px"}},"訂單編號",-1),w=Object(a["createVNode"])("th",null,"下單時間",-1),L=Object(a["createVNode"])("th",null,"付款時間",-1),$={key:0},F={key:1},U=Object(a["createVNode"])("th",null,"付款狀態",-1),E={key:0,class:"text-success"},q={key:1,class:"text-muted"},I=Object(a["createVNode"])("th",null,"總金額",-1),J=Object(a["createVNode"])("h3",null,"選購商品",-1),z={class:"table"},A=Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr")],-1),G={class:"text-end"},H={class:"d-flex justify-content-end"},K={class:"form-check"},Q={class:"form-check-label",for:"flexCheckDefault"},R={key:0},T={key:1},W={class:"modal-footer"},X=Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Y(e,t,c,r,o,n){return Object(a["openBlock"])(),Object(a["createBlock"])("div",j,[Object(a["createVNode"])("div",h,[Object(a["createVNode"])("div",g,[m,Object(a["createVNode"])("div",N,[Object(a["createVNode"])("div",V,[Object(a["createVNode"])("div",k,[f,Object(a["createVNode"])("table",y,[o.tempOrder.user?(Object(a["openBlock"])(),Object(a["createBlock"])("tbody",v,[Object(a["createVNode"])("tr",null,[B,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(o.tempOrder.user.name),1)]),Object(a["createVNode"])("tr",null,[D,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(o.tempOrder.user.email),1)]),Object(a["createVNode"])("tr",null,[M,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(o.tempOrder.user.tel),1)]),Object(a["createVNode"])("tr",null,[x,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(o.tempOrder.user.address),1)])])):Object(a["createCommentVNode"])("",!0)])]),Object(a["createVNode"])("div",S,[C,Object(a["createVNode"])("table",P,[Object(a["createVNode"])("tbody",null,[Object(a["createVNode"])("tr",null,[_,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(o.tempOrder.id),1)]),Object(a["createVNode"])("tr",null,[w,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(e.$filters.date(o.tempOrder.create_at)),1)]),Object(a["createVNode"])("tr",null,[L,Object(a["createVNode"])("td",null,[o.tempOrder.paid_date?(Object(a["openBlock"])(),Object(a["createBlock"])("span",$,Object(a["toDisplayString"])(e.$filters.date(o.tempOrder.paid_date)),1)):(Object(a["openBlock"])(),Object(a["createBlock"])("span",F,"時間不正確"))])]),Object(a["createVNode"])("tr",null,[U,Object(a["createVNode"])("td",null,[o.tempOrder.is_paid?(Object(a["openBlock"])(),Object(a["createBlock"])("strong",E,"已付款")):(Object(a["openBlock"])(),Object(a["createBlock"])("span",q,"尚未付款"))])]),Object(a["createVNode"])("tr",null,[I,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(e.$filters.currency(o.tempOrder.total)),1)])])]),J,Object(a["createVNode"])("table",z,[A,Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(o.tempOrder.products,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:t.id},[Object(a["createVNode"])("th",null,Object(a["toDisplayString"])(t.product.title),1),Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(t.qty)+" / "+Object(a["toDisplayString"])(t.product.unit),1),Object(a["createVNode"])("td",G,Object(a["toDisplayString"])(e.$filters.currency(t.final_total)),1)])})),128))])]),Object(a["createVNode"])("div",H,[Object(a["createVNode"])("div",K,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.tempOrder.is_paid=e})},null,512),[[a["vModelCheckbox"],o.tempOrder.is_paid]]),Object(a["createVNode"])("label",Q,[o.tempOrder.is_paid?(Object(a["openBlock"])(),Object(a["createBlock"])("span",R,"已付款")):(Object(a["openBlock"])(),Object(a["createBlock"])("span",T,"未付款"))])])])])])]),Object(a["createVNode"])("div",W,[X,Object(a["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[2]||(t[2]=function(t){return e.$emit("update-paid",o.tempOrder)})}," 修改付款狀態 ")])])])],512)}var Z=c("e0ae"),ee={props:{order:{type:Object,default:function(){return{}}}},data:function(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},emits:["update-paid"],mixins:[Z["a"]],inject:["emitter"],watch:{order:function(){this.tempOrder=this.order}}},te=c("d959"),ce=c.n(te);const ae=ce()(ee,[["render",Y]]);var re=ae,oe=c("1799"),ne={data:function(){return{orders:{},isNew:!1,pagination:{},isLoading:!1,tempOrder:{},currentPage:1}},components:{Pagination:oe["a"],DelModal:u["a"],OrderModal:re},methods:{getOrders:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.currentPage=t;var c="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("david-frontend","/admin/orders?page=").concat(t);this.isLoading=!0,this.$http.get(c,this.tempProduct).then((function(t){e.orders=t.data.orders,e.pagination=t.data.pagination,e.isLoading=!1})).catch((function(t){e.isLoading=!1,e.$httpMessageState(t.response,"錯誤訊息")}))},openModal:function(e){this.tempOrder=Object(p["a"])({},e),this.isNew=!1;var t=this.$refs.orderModal;t.openModal()},openDelOrderModal:function(e){this.tempOrder=Object(p["a"])({},e);var t=this.$refs.delModal;t.openModal()},updatePaid:function(e){var t=this;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("david-frontend","/admin/order/").concat(e.id),a={is_paid:e.is_paid};this.$http.put(c,{data:a}).then((function(e){t.isLoading=!1;var c=t.$refs.orderModal;c.hideModal(),t.getOrders(t.currentPage),t.$httpMessageState(e,"更新付款狀態")})).catch((function(e){t.isLoading=!1,t.$httpMessageState(e.response,"錯誤訊息")}))},delOrder:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("david-frontend","/admin/order/").concat(this.tempOrder.id);this.isLoading=!0,this.$http.delete(t).then((function(){e.isLoading=!1;var t=e.$refs.delModal;t.hideModal(),e.getOrders(e.currentPage)})).catch((function(t){e.isLoading=!1,e.$httpMessageState(t.response,"錯誤訊息")}))}},created:function(){this.getOrders()}};const le=ce()(ne,[["render",O]]);t["default"]=le},b0c0:function(e,t,c){var a=c("83ab"),r=c("9bf2").f,o=Function.prototype,n=o.toString,l=/^\s*function ([^ (]*)/,d="name";a&&!(d in o)&&r(o,d,{configurable:!0,get:function(){try{return n.call(this).match(l)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-7943a20c.bfd6690f.js.map