/*! For license information please see 1756.58f63065.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["1756"],{73010:function(e,a,t){"use strict";t.r(a);var l=t("33577");t.es(l,a),t("90617");let r=l.default;a.default=r},33577:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return l.default}});var l=t("11417");t.es(l,a)},11417:function(e,a,t){"use strict";t.r(a),t("54525"),t("74943"),t("10623");var l=t("97700"),r=t("24129"),i=t("99497"),u=t("38588"),n=t("24647"),o=t("22300"),d=(0,l.createElementVNode)("div",{class:"video"},null,-1),s=(0,l.createElementVNode)("div",{class:"video"},null,-1);a.default=(0,l.defineComponent)({__name:"index",setup(e){var a=(0,n.useTranslate)({"zh-CN":{barrage:"\u5F39\u5E55",play:"\u5F00\u59CB",pause:"\u6682\u505C",videoBarrage:"\u6A21\u4EFF\u89C6\u9891\u5F39\u5E55",lightweight:"\u8F7B\u91CF",customizable:"\u53EF\u5B9A\u5236\u7684",mobile:"\u79FB\u52A8\u7AEF",library:"\u7EC4\u4EF6\u5E93"},"en-US":{barrage:"barrage",play:"play",pause:"pause",videoBarrage:"Imitate video barrage",lightweight:"Lightweight",customizable:"Customizable",mobile:"Mobile",library:"Library"}}),t=[{id:100,text:a("lightweight")},{id:101,text:a("customizable")},{id:102,text:a("mobile")},{id:103,text:"Vue"},{id:104,text:a("library")},{id:105,text:"VantUI"},{id:106,text:"666"}],c=(0,l.ref)([...t]),f=()=>{c.value.push({id:Math.random(),text:"Barrage"})},m=(0,l.ref)([...t]),p=(0,l.ref)(),v=()=>{m.value.push({id:Math.random(),text:"Barrage"})},[y,g]=(0,o.useToggle)(!1);return(0,l.watch)(y,()=>{var e,a;y.value?null===(e=p.value)||void 0===e||e.play():null===(a=p.value)||void 0===a||a.pause()}),(e,t)=>{var n=(0,l.resolveComponent)("demo-block");return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.createVNode)(n,{title:(0,l.unref)(a)("basicUsage")},{default:(0,l.withCtx)(()=>[(0,l.createVNode)((0,l.unref)(r.default),{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=e=>c.value=e)},{default:(0,l.withCtx)(()=>[d]),_:1},8,["modelValue"]),(0,l.createVNode)((0,l.unref)(u.default),{style:{"margin-top":"10px"}},{default:(0,l.withCtx)(()=>[(0,l.createVNode)((0,l.unref)(i.default),{onClick:f,type:"primary",size:"small"},{default:(0,l.withCtx)(()=>[(0,l.createTextVNode)((0,l.toDisplayString)((0,l.unref)(a)("barrage")),1)]),_:1})]),_:1})]),_:1},8,["title"]),(0,l.createVNode)(n,{title:(0,l.unref)(a)("videoBarrage")},{default:(0,l.withCtx)(()=>[(0,l.createVNode)((0,l.unref)(r.default),{modelValue:m.value,"onUpdate:modelValue":t[1]||(t[1]=e=>m.value=e),ref_key:"videoBarrage",ref:p,"auto-play":!1},{default:(0,l.withCtx)(()=>[s]),_:1},8,["modelValue"]),(0,l.createVNode)((0,l.unref)(u.default),{style:{"margin-top":"10px"}},{default:(0,l.withCtx)(()=>[(0,l.createVNode)((0,l.unref)(i.default),{onClick:v,type:"primary",size:"small",disabled:!(0,l.unref)(y)},{default:(0,l.withCtx)(()=>[(0,l.createTextVNode)((0,l.toDisplayString)((0,l.unref)(a)("barrage")),1)]),_:1},8,["disabled"]),(0,l.createVNode)((0,l.unref)(i.default),{onClick:t[2]||(t[2]=e=>(0,l.unref)(g)()),size:"small"},{default:(0,l.withCtx)(()=>[(0,l.createTextVNode)((0,l.toDisplayString)((0,l.unref)(y)?(0,l.unref)(a)("pause"):(0,l.unref)(a)("play")),1)]),_:1})]),_:1})]),_:1},8,["title"])],64)}}})},24129:function(e,a,t){"use strict";t.r(a);var l=t("37704"),r=t("26947"),i=(0,l.withInstall)(r.default);a.default=i},10023:function(e,a,t){"use strict";t.r(a),t.d(a,{useExpose:function(){return i}});var l=t("97700"),r=t("37704");function i(e){var a=(0,l.getCurrentInstance)();a&&(0,r.extend)(a.proxy,e)}},26947:function(e,a,t){"use strict";t.r(a),t("54525"),t("74943"),t("10623"),t("89711"),t("80680"),t("17326"),t("37231"),t("69436"),t("31379"),t("4326"),t("28534"),t("2911"),t("67855"),t("49690"),t("20980"),t("34921"),t("85556"),t("81654"),t("93825"),t("4447"),t("41216"),t("47857"),t("99465"),t("8689");var l=t("73839"),r=t("97700"),i=t("10023"),u=t("37704"),n={top:(0,u.makeNumericProp)(10),rows:(0,u.makeNumericProp)(4),duration:(0,u.makeNumericProp)(4e3),autoPlay:u.truthProp,delay:(0,u.makeNumberProp)(300),modelValue:(0,u.makeArrayProp)()},[o,d]=(0,u.createNamespace)("barrage");a.default=(0,r.defineComponent)({name:o,props:n,emits:["update:modelValue"],setup(e,a){var{emit:t,slots:u}=a,n=(0,r.ref)(),o=d("item"),s=(0,r.ref)(0),c=[],f=function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.delay,l=document.createElement("span");return l.className=o,l.innerText=String(a),l.style.animationDuration="".concat(e.duration,"ms"),l.style.animationDelay="".concat(t,"ms"),l.style.animationName="van-barrage",l.style.animationTimingFunction="linear",l},m=(0,r.ref)(!0),p=(0,r.ref)(e.autoPlay),v=(a,l)=>{var r,{id:i,text:u}=a,o=f(u,m.value?l*e.delay:void 0);!e.autoPlay&&!1===p.value&&(o.style.animationPlayState="paused"),null===(r=n.value)||void 0===r||r.append(o),s.value++;var d=(s.value-1)%+e.rows*o.offsetHeight+ +e.top;o.style.top="".concat(d,"px"),o.dataset.id=String(i),c.push(o),o.addEventListener("animationend",()=>{t("update:modelValue",[...e.modelValue].filter(e=>String(e.id)!==o.dataset.id))})},y=(e,a)=>{var t=new Map(a.map(e=>[e.id,e]));e.forEach((e,a)=>{t.has(e.id)?t.delete(e.id):v(e,a)}),t.forEach(e=>{var a=c.findIndex(a=>a.dataset.id===String(e.id));a>-1&&(c[a].remove(),c.splice(a,1))}),m.value=!1};(0,r.watch)(()=>e.modelValue.slice(),(e,a)=>y(null!=e?e:[],null!=a?a:[]),{deep:!0});var g=(0,r.ref)({});return(0,r.onMounted)((0,l._)(function*(){var a;g.value["--move-distance"]="-".concat(null===(a=n.value)||void 0===a?void 0:a.offsetWidth,"px"),yield(0,r.nextTick)(),y(e.modelValue,[])})),(0,i.useExpose)({play:()=>{p.value=!0,c.forEach(e=>{e.style.animationPlayState="running"})},pause:()=>{p.value=!1,c.forEach(e=>{e.style.animationPlayState="paused"})}}),()=>{var e;return(0,r.createVNode)("div",{class:d(),ref:n,style:g.value},[null===(e=u.default)||void 0===e?void 0:e.call(u)])}}})},90617:function(e){},35396:function(e){}}]);