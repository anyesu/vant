/*! For license information please see 7239.6e062cca.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["7239"],{8043:function(e,t,a){"use strict";a.r(t);var r=a("19523");a.es(r,t),a("95755");let n=r.default;t.default=n},19523:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return r.default}});var r=a("9807");a.es(r,t)},9807:function(e,t,a){"use strict";a.r(t);var r=a("97700"),n=a("99497"),o=a("91752"),i=a("24647"),l={class:"demo-watermark-wrapper"},c={class:"demo-watermark-wrapper"},u={class:"demo-watermark-wrapper"},d={class:"demo-watermark-wrapper"},s={class:"demo-watermark-wrapper"},m={class:"demo-watermark-wrapper"},p=(0,r.createElementVNode)("div",{style:{background:"linear-gradient(45deg, #000 0, #000 50%, #fff 50%)"}},[(0,r.createElementVNode)("p",{style:{"mix-blend-mode":"difference",color:"#fff"}}," Vant watermark ")],-1);t.default=(0,r.defineComponent)({__name:"index",setup(e){var t=(0,i.useTranslate)({"zh-CN":{switch:"\u5207\u6362",customOpacity:"\u81EA\u5B9A\u4E49\u900F\u660E\u5EA6",customGap:"\u81EA\u5B9A\u4E49\u95F4\u9694",customImage:"\u81EA\u5B9A\u4E49\u56FE\u7247",customRotate:"\u81EA\u5B9A\u4E49\u503E\u659C\u89D2\u5EA6",displayRange:"\u663E\u793A\u8303\u56F4",htmlWatermark:"HTML \u6C34\u5370",textWatermark:"\u6587\u5B57\u6C34\u5370",imageWatermark:"\u56FE\u7247\u6C34\u5370"},"en-US":{switch:"Switch",customOpacity:"Custom opacity",customGap:"Custom Gap",customRotate:"Custom Rotate",displayRange:"Display Range",htmlWatermark:"HTML Watermark",textWatermark:"Text Watermark",imageWatermark:"Image Watermark"}}),a=(0,r.ref)(!1);return(e,i)=>{var f=(0,r.resolveComponent)("demo-block");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(f,{title:(0,r.unref)(t)("textWatermark")},{default:(0,r.withCtx)(()=>[(0,r.createElementVNode)("div",l,[(0,r.createVNode)((0,r.unref)(o.default),{content:"Vant","full-page":!1})])]),_:1},8,["title"]),(0,r.createVNode)(f,{title:(0,r.unref)(t)("imageWatermark")},{default:(0,r.withCtx)(()=>[(0,r.createElementVNode)("div",c,[(0,r.createVNode)((0,r.unref)(o.default),{image:"https://fastly.jsdelivr.net/npm/@vant/assets/vant-watermark.png",opacity:"0.2","full-page":!1})])]),_:1},8,["title"]),(0,r.createVNode)(f,{title:(0,r.unref)(t)("customGap")},{default:(0,r.withCtx)(()=>[(0,r.createElementVNode)("div",u,[(0,r.createVNode)((0,r.unref)(o.default),{image:"https://fastly.jsdelivr.net/npm/@vant/assets/vant-watermark.png","gap-x":30,"gap-y":10,opacity:"0.2","full-page":!1})])]),_:1},8,["title"]),(0,r.createVNode)(f,{title:(0,r.unref)(t)("customRotate")},{default:(0,r.withCtx)(()=>[(0,r.createElementVNode)("div",d,[(0,r.createVNode)((0,r.unref)(o.default),{image:"https://fastly.jsdelivr.net/npm/@vant/assets/vant-watermark.png",rotate:"22",opacity:"0.2","full-page":!1})])]),_:1},8,["title"]),(0,r.createVNode)(f,{title:(0,r.unref)(t)("displayRange")},{default:(0,r.withCtx)(()=>[(0,r.createElementVNode)("div",s,[(0,r.createVNode)((0,r.unref)(n.default),{type:"primary",onClick:i[0]||(i[0]=e=>a.value=!a.value)},{default:(0,r.withCtx)(()=>[(0,r.createTextVNode)((0,r.toDisplayString)((0,r.unref)(t)("switch")),1)]),_:1}),(0,r.createVNode)((0,r.unref)(o.default),{"full-page":a.value,opacity:"0.2",image:"https://fastly.jsdelivr.net/npm/@vant/assets/vant-watermark.png"},null,8,["full-page"])])]),_:1},8,["title"]),(0,r.createVNode)(f,{title:(0,r.unref)(t)("htmlWatermark")},{default:(0,r.withCtx)(()=>[(0,r.createElementVNode)("div",m,[(0,r.createVNode)((0,r.unref)(o.default),{width:150,"full-page":!1},{content:(0,r.withCtx)(()=>[p]),_:1})])]),_:1},8,["title"])],64)}}})},72555:function(e,t,a){"use strict";a.r(t),a.d(t,{Badge:function(){return o}});var r=a("37704"),n=a("48865"),o=(0,r.withInstall)(n.default);t.default=o},99497:function(e,t,a){"use strict";a.r(t),a.d(t,{Button:function(){return o}});var r=a("37704"),n=a("30014"),o=(0,r.withInstall)(n.default);t.default=o},14517:function(e,t,a){"use strict";a.r(t),a.d(t,{setGlobalZIndex:function(){return o},useGlobalZIndex:function(){return n}});var r=2e3,n=()=>++r,o=e=>{r=e}},6149:function(e,t,a){"use strict";a.r(t),a.d(t,{route:function(){return o},routeProps:function(){return n},useRoute:function(){return i}}),a("36232"),a("31851");var r=a("97700"),n={to:[String,Object],url:String,replace:Boolean};function o(e){var{to:t,url:a,replace:r,$router:n}=e;t&&n?n[r?"replace":"push"](t):a&&(r?location.replace(a):location.href=a)}function i(){var e=(0,r.getCurrentInstance)().proxy;return()=>o(e)}},96528:function(e,t,a){"use strict";a.r(t),a.d(t,{Icon:function(){return o}});var r=a("37704"),n=a("80396"),o=(0,r.withInstall)(n.default);t.default=o},95786:function(e,t,a){"use strict";a.r(t),a.d(t,{Loading:function(){return o}});var r=a("37704"),n=a("41077"),o=(0,r.withInstall)(n.default);t.default=o},91752:function(e,t,a){"use strict";a.r(t);var r=a("37704"),n=a("64535"),o=(0,r.withInstall)(n.default);t.default=o},48865:function(e,t,a){"use strict";a.r(t),a("54525"),a("74943"),a("36232"),a("31851"),a("15930");var r=a("97700"),n=a("37704"),[o,i]=(0,n.createNamespace)("badge"),l={dot:Boolean,max:n.numericProp,tag:(0,n.makeStringProp)("div"),color:String,offset:Array,content:n.numericProp,showZero:n.truthProp,position:(0,n.makeStringProp)("top-right")};t.default=(0,r.defineComponent)({name:o,props:l,setup(e,t){var{slots:a}=t,o=()=>{if(a.content)return!0;var{content:t,showZero:r}=e;return(0,n.isDef)(t)&&""!==t&&(r||0!==t&&"0"!==t)},l=()=>{var{dot:t,max:r,content:i}=e;if(!t&&o())return a.content?a.content():(0,n.isDef)(r)&&(0,n.isNumeric)(i)&&+i>+r?"".concat(r,"+"):i},c=e=>e.startsWith("-")?e.replace("-",""):"-".concat(e),u=(0,r.computed)(()=>{var t={background:e.color};if(e.offset){var[r,o]=e.offset,{position:i}=e,[l,u]=i.split("-");a.default?("number"==typeof o?t[l]=(0,n.addUnit)("top"===l?o:-o):t[l]="top"===l?(0,n.addUnit)(o):c(o),"number"==typeof r?t[u]=(0,n.addUnit)("left"===u?r:-r):t[u]="left"===u?(0,n.addUnit)(r):c(r)):(t.marginTop=(0,n.addUnit)(o),t.marginLeft=(0,n.addUnit)(r))}return t}),d=()=>{if(o()||e.dot)return(0,r.createVNode)("div",{class:i([e.position,{dot:e.dot,fixed:!!a.default}]),style:u.value},[l()])};return()=>{if(a.default){var{tag:t}=e;return(0,r.createVNode)(t,{class:i("wrapper")},{default:()=>[a.default(),d()]})}return d()}}})},30014:function(e,t,a){"use strict";a.r(t),a("54525"),a("74943"),a("47266");var r=a("97700"),n=a("37704"),o=a("6149"),i=a("96528"),l=a("95786"),[c,u]=(0,n.createNamespace)("button"),d=(0,n.extend)({},o.routeProps,{tag:(0,n.makeStringProp)("button"),text:String,icon:String,type:(0,n.makeStringProp)("default"),size:(0,n.makeStringProp)("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:(0,n.makeStringProp)("button"),loadingSize:n.numericProp,loadingText:String,loadingType:String,iconPosition:(0,n.makeStringProp)("left")});t.default=(0,r.defineComponent)({name:c,props:d,emits:["click"],setup(e,t){var{emit:a,slots:c}=t,d=(0,o.useRoute)(),s=()=>c.loading?c.loading():(0,r.createVNode)(l.Loading,{size:e.loadingSize,type:e.loadingType,class:u("loading")},null),m=()=>e.loading?s():c.icon?(0,r.createVNode)("div",{class:u("icon")},[c.icon()]):e.icon?(0,r.createVNode)(i.Icon,{name:e.icon,class:u("icon"),classPrefix:e.iconPrefix},null):void 0,p=()=>{var t;if(t=e.loading?e.loadingText:c.default?c.default():e.text)return(0,r.createVNode)("span",{class:u("text")},[t])},f=()=>{var{color:t,plain:a}=e;if(t){var r={color:a?t:"white"};return!a&&(r.background=t),t.includes("gradient")?r.border=0:r.borderColor=t,r}},g=t=>{e.loading?(0,n.preventDefault)(t):!e.disabled&&(a("click",t),d())};return()=>{var{tag:t,type:a,size:o,block:i,round:l,plain:c,square:d,loading:s,disabled:v,hairline:h,nativeType:w,iconPosition:k}=e,x=[u([a,o,{plain:c,block:i,round:l,square:d,loading:s,disabled:v,hairline:h}]),{[n.BORDER_SURROUND]:h}];return(0,r.createVNode)(t,{type:w,class:x,style:f(),disabled:v,onClick:g},{default:()=>[(0,r.createVNode)("div",{class:u("content")},["left"===k&&m(),p(),"right"===k&&m()])]})}}})},19595:function(e,t,a){"use strict";a.r(t),a.d(t,{CONFIG_PROVIDER_KEY:function(){return c}}),a("54525"),a("74943"),a("47487"),a("36232"),a("31851"),a("99465"),a("8689"),a("17326");var r=a("97700"),n=a("37704"),o=a("14517"),[i,l]=(0,n.createNamespace)("config-provider"),c=Symbol(i),u={tag:(0,n.makeStringProp)("div"),theme:(0,n.makeStringProp)("light"),zIndex:Number,themeVars:Object,themeVarsDark:Object,themeVarsLight:Object,themeVarsScope:(0,n.makeStringProp)("local"),iconPrefix:String};function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.keys(e).forEach(a=>{e[a]!==t[a]&&document.documentElement.style.setProperty(a,e[a])}),Object.keys(t).forEach(t=>{!e[t]&&document.documentElement.style.removeProperty(t)})}t.default=(0,r.defineComponent)({name:i,props:u,setup(e,t){var{slots:a}=t,i=(0,r.computed)(()=>{var t,a;return t=(0,n.extend)({},e.themeVars,"dark"===e.theme?e.themeVarsDark:e.themeVarsLight),a={},Object.keys(t).forEach(e=>{var r=(0,n.kebabCase)(e).replace(/([a-zA-Z])(\d)/g,"$1-$2");a["--van-".concat(r)]=t[e]}),a});if(n.inBrowser){var u=()=>{document.documentElement.classList.add("van-theme-".concat(e.theme))},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.theme;document.documentElement.classList.remove("van-theme-".concat(t))};(0,r.watch)(()=>e.theme,(e,t)=>{t&&s(t),u()},{immediate:!0}),(0,r.onActivated)(u),(0,r.onDeactivated)(s),(0,r.onBeforeUnmount)(s),(0,r.watch)(i,(t,a)=>{"global"===e.themeVarsScope&&d(t,a)}),(0,r.watch)(()=>e.themeVarsScope,(e,t)=>{"global"===t&&d({},i.value),"global"===e&&d(i.value,{})}),"global"===e.themeVarsScope&&d(i.value,{})}return(0,r.provide)(c,e),(0,r.watchEffect)(()=>{void 0!==e.zIndex&&(0,o.setGlobalZIndex)(e.zIndex)}),()=>(0,r.createVNode)(e.tag,{class:l(),style:"local"===e.themeVarsScope?i.value:void 0},{default:()=>{var e;return[null===(e=a.default)||void 0===e?void 0:e.call(a)]}})}})},80396:function(e,t,a){"use strict";a.r(t),a("54525"),a("74943"),a("47266");var r=a("97700"),n=a("37704"),o=a("72555"),i=a("19595"),[l,c]=(0,n.createNamespace)("icon"),u=e=>null==e?void 0:e.includes("/"),d={dot:Boolean,tag:(0,n.makeStringProp)("i"),name:String,size:n.numericProp,badge:n.numericProp,color:String,badgeProps:Object,classPrefix:String};t.default=(0,r.defineComponent)({name:l,props:d,setup(e,t){var{slots:a}=t,l=(0,r.inject)(i.CONFIG_PROVIDER_KEY,null),d=(0,r.computed)(()=>e.classPrefix||(null==l?void 0:l.iconPrefix)||c());return()=>{var{tag:t,dot:i,name:l,size:s,badge:m,color:p}=e,f=u(l);return(0,r.createVNode)(o.Badge,(0,r.mergeProps)({dot:i,tag:t,class:[d.value,f?"":"".concat(d.value,"-").concat(l)],style:{color:p,fontSize:(0,n.addUnit)(s)},content:m},e.badgeProps),{default:()=>{var e;return[null===(e=a.default)||void 0===e?void 0:e.call(a),f&&(0,r.createVNode)("img",{class:c("image"),src:l},null)]}})}}})},41077:function(e,t,a){"use strict";a.r(t),a("54525"),a("74943"),a("41216"),a("47857");var r=a("97700"),n=a("37704"),[o,i]=(0,n.createNamespace)("loading"),l=Array(12).fill(null).map((e,t)=>(0,r.createVNode)("i",{class:i("line",String(t+1))},null)),c=(0,r.createVNode)("svg",{class:i("circular"),viewBox:"25 25 50 50"},[(0,r.createVNode)("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),u={size:n.numericProp,type:(0,n.makeStringProp)("circular"),color:String,vertical:Boolean,textSize:n.numericProp,textColor:String};t.default=(0,r.defineComponent)({name:o,props:u,setup(e,t){var{slots:a}=t,o=(0,r.computed)(()=>(0,n.extend)({color:e.color},(0,n.getSizeStyle)(e.size))),u=()=>{var t="spinner"===e.type?l:c;return(0,r.createVNode)("span",{class:i("spinner",e.type),style:o.value},[a.icon?a.icon():t])},d=()=>{if(a.default){var t;return(0,r.createVNode)("span",{class:i("text"),style:{fontSize:(0,n.addUnit)(e.textSize),color:null!==(t=e.textColor)&&void 0!==t?t:e.color}},[a.default()])}};return()=>{var{type:t,vertical:a}=e;return(0,r.createVNode)("div",{class:i([t,{vertical:a}]),"aria-live":"polite","aria-busy":!0},[u(),d()])}}})},64535:function(e,t,a){"use strict";a.r(t),a("54525"),a("74943"),a("34983"),a("44041"),a("47348"),a("54797"),a("7533");var r=a("97700"),n=a("37704"),[o,i]=(0,n.createNamespace)("watermark"),l={gapX:(0,n.makeNumberProp)(0),gapY:(0,n.makeNumberProp)(0),image:String,width:(0,n.makeNumberProp)(100),height:(0,n.makeNumberProp)(100),rotate:(0,n.makeNumericProp)(-22),zIndex:n.numericProp,content:String,opacity:n.numericProp,fullPage:n.truthProp,textColor:(0,n.makeStringProp)("#dcdee0")};t.default=(0,r.defineComponent)({name:o,props:l,setup(e,t){var{slots:a}=t,o=(0,r.ref)(),l=(0,r.ref)(""),c=(0,r.ref)(""),u=()=>{var t={transformOrigin:"center",transform:"rotate(".concat(e.rotate,"deg)")},n=e.width+e.gapX,o=e.height+e.gapY;return(0,r.createVNode)("svg",{viewBox:"0 0 ".concat(n," ").concat(o),width:n,height:o,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",style:{padding:"0 ".concat(e.gapX,"px ").concat(e.gapY,"px 0"),opacity:e.opacity}},[e.image&&!a.content?(0,r.createVNode)("image",{href:c.value,"xlink:href":c.value,x:"0",y:"0",width:e.width,height:e.height,style:t},null):(0,r.createVNode)("foreignObject",{x:"0",y:"0",width:e.width,height:e.height},[(0,r.createVNode)("div",{xmlns:"http://www.w3.org/1999/xhtml",style:t},[a.content?a.content():(0,r.createVNode)("span",{style:{color:e.textColor}},[e.content])])])])},d=e=>{var t=document.createElement("canvas"),a=new Image;a.crossOrigin="anonymous",a.referrerPolicy="no-referrer",a.onload=()=>{t.width=a.naturalWidth,t.height=a.naturalHeight;var e=t.getContext("2d");null==e||e.drawImage(a,0,0),c.value=t.toDataURL()},a.src=e},s=e=>{var t=new Blob([e],{type:"image/svg+xml"});return URL.createObjectURL(t)};return(0,r.watchEffect)(()=>{e.image&&d(e.image)}),(0,r.watch)(()=>[c.value,e.content,e.textColor,e.height,e.width,e.rotate,e.gapX,e.gapY],()=>{(0,r.nextTick)(()=>{o.value&&(l.value&&URL.revokeObjectURL(l.value),l.value=s(o.value.innerHTML))})},{immediate:!0}),(0,r.onUnmounted)(()=>{l.value&&URL.revokeObjectURL(l.value)}),()=>{var t=(0,n.extend)({backgroundImage:"url(".concat(l.value,")")},(0,n.getZIndexStyle)(e.zIndex));return(0,r.createVNode)("div",{class:i({full:e.fullPage}),style:t},[(0,r.createVNode)("div",{class:i("wrapper"),ref:o},[u()])])}}})},95755:function(e){},1137:function(e){}}]);