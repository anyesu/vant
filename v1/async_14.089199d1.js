(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{111:function(o,n,t){"use strict";var s=t(56);t.n(s).a},112:function(o,n,t){(o.exports=t(12)(!1)).push([o.i,".demo-coupon-list .van-popup {\n  height: 100%;\n}\n",""])},219:function(o,n,t){"use strict";t.r(n);var s=t(1),e={i18n:{"zh-CN":{coupon:{name:"优惠券名称",reason:"优惠券不可用原因",description:"描述信息"},exchange:"兑换成功"},"en-US":{coupon:{name:"Coupon name",reason:"Coupon unavailable reason",description:"Description"},exchange:"Success"}},data:function(){return{showList:!1,chosenCoupon:-1,exchangedCoupons:[]}},computed:{coupons:function(){return[this.coupon,this.discountCoupon].concat(this.exchangedCoupons)},disabledCoupons:function(){return[this.disabledCoupon,this.disabledDiscountCoupon]},coupon:function(){return{id:1,condition:"无使用门槛\n最多优惠12元",reason:"",value:150,name:this.$t("coupon.name"),description:this.$t("coupon.description"),startAt:1489104e3,endAt:1514592e3,valueDesc:"1.5",unitDesc:"元"}},discountCoupon:function(){return Object(s.a)({},this.coupon,{id:2,value:12,valueDesc:"8.8",unitDesc:"折"})},disabledCoupon:function(){return Object(s.a)({},this.coupon,{id:3,reason:this.$t("coupon.reason")})},disabledDiscountCoupon:function(){return Object(s.a)({},this.discountCoupon,{valueDesc:"1",unitDesc:"折",id:4,reason:this.$t("coupon.reason")})}},methods:{onChange:function(o){this.showList=!1,this.chosenCoupon=o},onExchange:function(){this.$toast(this.$t("exchange")),this.exchangedCoupons.push(Object(s.a)({},this.coupon,{id:this.randomId()}))},randomId:function(o){return void 0===o&&(o=999999),Math.floor(Math.random()*o)+1}}},c=(t(111),t(7)),i=Object(c.a)(e,function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("demo-section",[t("demo-block",{attrs:{title:o.$t("basicUsage")}},[t("van-coupon-cell",{attrs:{coupons:o.coupons,"chosen-coupon":o.chosenCoupon},on:{click:function(n){o.showList=!0}}}),t("van-popup",{attrs:{position:"bottom"},model:{value:o.showList,callback:function(n){o.showList=n},expression:"showList"}},[t("van-coupon-list",{attrs:{coupons:o.coupons,"chosen-coupon":o.chosenCoupon,"disabled-coupons":o.disabledCoupons},on:{change:o.onChange,exchange:o.onExchange}})],1)],1)],1)},[],!1,null,null,null);n.default=i.exports},56:function(o,n,t){var s=t(112);"string"==typeof s&&(s=[[o.i,s,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};t(13)(s,e);s.locals&&(o.exports=s.locals)}}]);