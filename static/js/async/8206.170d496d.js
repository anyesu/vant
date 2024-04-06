/*! For license information please see 8206.170d496d.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["8206"],{66817:function(e,t,r){"use strict";r.r(t);var o=r("16099");r.es(o,t),r("20891");let a=o.default;t.default=a},16099:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o.default}});var o=r("50939");r.es(o,t)},50939:function(e,t,r){"use strict";r.r(t),r("72846");var o=r("97700"),a=r("68079"),l=r("99497"),n=r("99742"),i=r("1829"),c=r("24647"),u=r("64911");t.default=(0,o.defineComponent)({__name:"index",setup(e){var t=(0,c.useTranslate)({"zh-CN":{select:"\u9009\u62E9",delete:"\u5220\u9664",collect:"\u6536\u85CF",title:"\u5355\u5143\u683C",confirm:"\u786E\u5B9A\u5220\u9664\u5417\uFF1F",cardTitle:"\u5546\u54C1\u6807\u9898",beforeClose:"\u5F02\u6B65\u5173\u95ED",customContent:"\u81EA\u5B9A\u4E49\u5185\u5BB9"},"en-US":{select:"Select",delete:"Delete",collect:"Collect",title:"Cell",confirm:"Are you sure to delete?",cardTitle:"Title",beforeClose:"Before Close",customContent:"Custom Content"}}),r=(0,c.cdnURL)("ipad.jpeg"),s=e=>{var{position:r}=e;switch(r){case"left":case"cell":case"outside":return!0;case"right":return new Promise(e=>{(0,u.showConfirmDialog)({title:t("confirm")}).then(()=>e(!0)).catch(()=>e(!1))})}};return(e,c)=>{var u=(0,o.resolveComponent)("demo-block");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(u,{title:(0,o.unref)(t)("basicUsage")},{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(a.default),null,{left:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(l.default),{square:"",type:"primary",text:(0,o.unref)(t)("select")},null,8,["text"])]),right:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(l.default),{square:"",type:"danger",text:(0,o.unref)(t)("delete")},null,8,["text"]),(0,o.createVNode)((0,o.unref)(l.default),{square:"",type:"primary",text:(0,o.unref)(t)("collect")},null,8,["text"])]),default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(n.default),{border:!1,title:(0,o.unref)(t)("title"),value:(0,o.unref)(t)("content")},null,8,["title","value"])]),_:1})]),_:1},8,["title"]),(0,o.createVNode)(u,{title:(0,o.unref)(t)("customContent")},{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(a.default),null,{right:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(l.default),{square:"",type:"danger",class:"delete-button",text:(0,o.unref)(t)("delete")},null,8,["text"])]),default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(i.default),{num:"2",price:"2.00",desc:(0,o.unref)(t)("desc"),title:(0,o.unref)(t)("cardTitle"),thumb:(0,o.unref)(r)},null,8,["desc","title","thumb"])]),_:1})]),_:1},8,["title"]),(0,o.createVNode)(u,{title:(0,o.unref)(t)("beforeClose")},{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(a.default),{"before-close":s},{left:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(l.default),{square:"",type:"primary",text:(0,o.unref)(t)("select")},null,8,["text"])]),right:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(l.default),{square:"",type:"danger",text:(0,o.unref)(t)("delete")},null,8,["text"])]),default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(n.default),{border:!1,title:(0,o.unref)(t)("title"),value:(0,o.unref)(t)("content")},null,8,["title","value"])]),_:1})]),_:1},8,["title"])],64)}}})},1829:function(e,t,r){"use strict";r.r(t);var o=r("37704"),a=r("54930"),l=(0,o.withInstall)(a.default);t.default=l},7197:function(e,t,r){"use strict";r.r(t),r.d(t,{Image:function(){return l}});var o=r("37704"),a=r("8534"),l=(0,o.withInstall)(a.default);t.default=l},68079:function(e,t,r){"use strict";r.r(t);var o=r("37704"),a=r("60333"),l=(0,o.withInstall)(a.default);t.default=l},88102:function(e,t,r){"use strict";r.r(t),r.d(t,{Tag:function(){return l}});var o=r("37704"),a=r("60458"),l=(0,o.withInstall)(a.default);t.default=l},54930:function(e,t,r){"use strict";r.r(t),r("54525"),r("74943"),r("15930"),r("31851");var o=r("97700"),a=r("37704"),l=r("88102"),n=r("7197"),[i,c]=(0,a.createNamespace)("card"),u={tag:String,num:a.numericProp,desc:String,thumb:String,title:String,price:a.numericProp,centered:Boolean,lazyLoad:Boolean,currency:(0,a.makeStringProp)("\xa5"),thumbLink:String,originPrice:a.numericProp};t.default=(0,o.defineComponent)({name:i,props:u,emits:["clickThumb"],setup(e,t){var{slots:r,emit:i}=t,u=()=>r.title?r.title():e.title?(0,o.createVNode)("div",{class:[c("title"),"van-multi-ellipsis--l2"]},[e.title]):void 0,s=()=>{if(r.tag||e.tag)return(0,o.createVNode)("div",{class:c("tag")},[r.tag?r.tag():(0,o.createVNode)(l.Tag,{mark:!0,type:"primary"},{default:()=>[e.tag]})])},d=()=>r.thumb?r.thumb():(0,o.createVNode)(n.Image,{src:e.thumb,fit:"cover",width:"100%",height:"100%",lazyLoad:e.lazyLoad},null),f=()=>{if(r.thumb||e.thumb)return(0,o.createVNode)("a",{href:e.thumbLink,class:c("thumb"),onClick:e=>i("clickThumb",e)},[d(),s()])},v=()=>r.desc?r.desc():e.desc?(0,o.createVNode)("div",{class:[c("desc"),"van-ellipsis"]},[e.desc]):void 0,p=()=>{var t=e.price.toString().split(".");return(0,o.createVNode)("div",null,[(0,o.createVNode)("span",{class:c("price-currency")},[e.currency]),(0,o.createVNode)("span",{class:c("price-integer")},[t[0]]),(0,o.createTextVNode)("."),(0,o.createVNode)("span",{class:c("price-decimal")},[t[1]])])};return()=>{var t,l,n,i=r.num||(0,a.isDef)(e.num),s=r.price||(0,a.isDef)(e.price),d=r["origin-price"]||(0,a.isDef)(e.originPrice),m=i||s||d||r.bottom,g=s&&(0,o.createVNode)("div",{class:c("price")},[r.price?r.price():p()]),h=d&&(0,o.createVNode)("div",{class:c("origin-price")},[r["origin-price"]?r["origin-price"]():"".concat(e.currency," ").concat(e.originPrice)]),N=i&&(0,o.createVNode)("div",{class:c("num")},[r.num?r.num():"x".concat(e.num)]),V=r.footer&&(0,o.createVNode)("div",{class:c("footer")},[r.footer()]),C=m&&(0,o.createVNode)("div",{class:c("bottom")},[null===(t=r["price-top"])||void 0===t?void 0:t.call(r),g,h,N,null===(l=r.bottom)||void 0===l?void 0:l.call(r)]);return(0,o.createVNode)("div",{class:c()},[(0,o.createVNode)("div",{class:c("header")},[f(),(0,o.createVNode)("div",{class:c("content",{centered:e.centered})},[(0,o.createVNode)("div",null,[u(),v(),null===(n=r.tags)||void 0===n?void 0:n.call(r)]),C])]),V])}}})},8534:function(e,t,r){"use strict";r.r(t),r("54525"),r("74943");var o=r("97700"),a=r("37704"),l=r("96528"),[n,i]=(0,a.createNamespace)("image"),c={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:a.numericProp,height:a.numericProp,radius:a.numericProp,lazyLoad:Boolean,iconSize:a.numericProp,showError:a.truthProp,errorIcon:(0,a.makeStringProp)("photo-fail"),iconPrefix:String,showLoading:a.truthProp,loadingIcon:(0,a.makeStringProp)("photo"),crossorigin:String,referrerpolicy:String};t.default=(0,o.defineComponent)({name:n,props:c,emits:["load","error"],setup(e,t){var{emit:r,slots:n}=t,c=(0,o.ref)(!1),u=(0,o.ref)(!0),s=(0,o.ref)(),{$Lazyload:d}=(0,o.getCurrentInstance)().proxy,f=(0,o.computed)(()=>{var t={width:(0,a.addUnit)(e.width),height:(0,a.addUnit)(e.height)};return(0,a.isDef)(e.radius)&&(t.overflow="hidden",t.borderRadius=(0,a.addUnit)(e.radius)),t});(0,o.watch)(()=>e.src,()=>{c.value=!1,u.value=!0});var v=e=>{u.value&&(u.value=!1,r("load",e))},p=()=>{var e=new Event("load");Object.defineProperty(e,"target",{value:s.value,enumerable:!0}),v(e)},m=e=>{c.value=!0,u.value=!1,r("error",e)},g=(t,r,a)=>a?a():(0,o.createVNode)(l.Icon,{name:t,size:e.iconSize,class:r,classPrefix:e.iconPrefix},null),h=()=>u.value&&e.showLoading?(0,o.createVNode)("div",{class:i("loading")},[g(e.loadingIcon,i("loading-icon"),n.loading)]):c.value&&e.showError?(0,o.createVNode)("div",{class:i("error")},[g(e.errorIcon,i("error-icon"),n.error)]):void 0,N=()=>{if(!c.value&&e.src){var t={alt:e.alt,class:i("img"),style:{objectFit:e.fit,objectPosition:e.position},crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy};return e.lazyLoad?(0,o.withDirectives)((0,o.createVNode)("img",(0,o.mergeProps)({ref:s},t),null),[[(0,o.resolveDirective)("lazy"),e.src]]):(0,o.createVNode)("img",(0,o.mergeProps)({ref:s,src:e.src,onLoad:v,onError:m},t),null)}},V=e=>{var{el:t}=e,r=()=>{t===s.value&&u.value&&p()};s.value?r():(0,o.nextTick)(r)},C=e=>{var{el:t}=e;t===s.value&&!c.value&&m()};return d&&a.inBrowser&&(d.$on("loaded",V),d.$on("error",C),(0,o.onBeforeUnmount)(()=>{d.$off("loaded",V),d.$off("error",C)})),(0,o.onMounted)(()=>{(0,o.nextTick)(()=>{var t;(null===(t=s.value)||void 0===t?void 0:t.complete)&&!e.lazyLoad&&p()})}),()=>{var t;return(0,o.createVNode)("div",{class:i({round:e.round,block:e.block}),style:f.value},[N(),h(),null===(t=n.default)||void 0===t?void 0:t.call(n)])}}})},60333:function(e,t,r){"use strict";r.r(t),r("54525"),r("74943");var o=r("97700"),a=r("37704"),l=r("22300"),n=r("29609"),i=r("10023"),[c,u]=(0,a.createNamespace)("swipe-cell"),s={name:(0,a.makeNumericProp)(""),disabled:Boolean,leftWidth:a.numericProp,rightWidth:a.numericProp,beforeClose:Function,stopPropagation:Boolean};t.default=(0,o.defineComponent)({name:c,props:s,emits:["open","close","click"],setup(e,t){var r,c,s,d,{emit:f,slots:v}=t,p=(0,o.ref)(),m=(0,o.ref)(),g=(0,o.ref)(),h=(0,o.reactive)({offset:0,dragging:!1}),N=(0,n.useTouch)(),V=e=>e.value?(0,l.useRect)(e).width:0,C=(0,o.computed)(()=>(0,a.isDef)(e.leftWidth)?+e.leftWidth:V(m)),b=(0,o.computed)(()=>(0,a.isDef)(e.rightWidth)?+e.rightWidth:V(g)),w=t=>{h.offset="left"===t?C.value:-b.value,!r&&(r=!0,f("open",{name:e.name,position:t}))},x=t=>{h.offset=0,r&&(r=!1,f("close",{name:e.name,position:t}))},y=e=>{var t=Math.abs(h.offset),o=r?.85:.15,a="left"===e?C.value:b.value;a&&t>a*o?w(e):x(e)},P=t=>{!e.disabled&&(s=h.offset,N.start(t))},k=()=>{h.dragging&&(h.dragging=!1,y(h.offset>0?"left":"right"),setTimeout(()=>{c=!1},0))},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"outside";!d&&(f("click",t),r&&!c&&(d=!0,(0,a.callInterceptor)(e.beforeClose,{args:[{name:e.name,position:t}],done:()=>{d=!1,x(t)},canceled:()=>d=!1,error:()=>d=!1})))},T=(e,t)=>r=>{t&&r.stopPropagation(),S(e)},B=(e,t)=>{var r=v[e];if(r)return(0,o.createVNode)("div",{ref:t,class:u(e),onClick:T(e,!0)},[r()])};return(0,i.useExpose)({open:w,close:x}),(0,l.useClickAway)(p,()=>S("outside"),{eventName:"touchstart"}),(0,l.useEventListener)("touchmove",t=>{if(!e.disabled){var{deltaX:o}=N;N.move(t),N.isHorizontal()&&(c=!0,h.dragging=!0,(!r||o.value*s<0)&&(0,a.preventDefault)(t,e.stopPropagation),h.offset=(0,a.clamp)(o.value+s,-b.value,C.value))}},{target:p}),()=>{var e,t={transform:"translate3d(".concat(h.offset,"px, 0, 0)"),transitionDuration:h.dragging?"0s":".6s"};return(0,o.createVNode)("div",{ref:p,class:u(),onClick:T("cell",c),onTouchstartPassive:P,onTouchend:k,onTouchcancel:k},[(0,o.createVNode)("div",{class:u("wrapper"),style:t},[B("left",m),null===(e=v.default)||void 0===e?void 0:e.call(v),B("right",g)])])}}})},60458:function(e,t,r){"use strict";r.r(t),r("54525"),r("74943");var o=r("97700"),a=r("37704"),l=r("96528"),[n,i]=(0,a.createNamespace)("tag"),c={size:String,mark:Boolean,show:a.truthProp,type:(0,a.makeStringProp)("default"),color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean};t.default=(0,o.defineComponent)({name:n,props:c,emits:["close"],setup(e,t){var{slots:r,emit:n}=t,c=e=>{e.stopPropagation(),n("close",e)},u=()=>e.plain?{color:e.textColor||e.color,borderColor:e.color}:{color:e.textColor,background:e.color},s=()=>{var t,{type:n,mark:s,plain:d,round:f,size:v,closeable:p}=e,m={mark:s,plain:d,round:f};v&&(m[v]=v);var g=p&&(0,o.createVNode)(l.Icon,{name:"cross",class:[i("close"),a.HAPTICS_FEEDBACK],onClick:c},null);return(0,o.createVNode)("span",{style:u(),class:i([m,n])},[null===(t=r.default)||void 0===t?void 0:t.call(r),g])};return()=>(0,o.createVNode)(o.Transition,{name:e.closeable?"van-fade":void 0},{default:()=>[e.show?s():null]})}})},20891:function(e){},64780:function(e){}}]);