(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d390780"],{"059d":function(t,r,e){},"6ab1":function(t,r,e){"use strict";e.r(r);var a=function(){var t=this,r=t._self._c;return r("div",{staticClass:"product-detail"},[r("Nav"),r("el-card",[r("img",{staticClass:"product-image",attrs:{src:t.product.coverImage}}),r("div",{staticClass:"product-info"},[r("h1",[t._v(t._s(t.product.name))]),r("p",[t._v(t._s(t.product.description))]),t._l(t.product.detailImages,(function(t,e){return r("div",{key:e},[r("img",{staticClass:"product-image",attrs:{src:t,alt:"商品图片"}})])}))],2)]),t.error?r("el-alert",{attrs:{title:t.error,type:"error",closable:!1}}):t._e(),r("Footer",{staticClass:"top"})],1)},o=[],c=(e("d9e2"),e("f8d9")),s=e("c683"),i=e("365c"),d={name:"ProductDetail",data(){return{product:{},error:null}},components:{Nav:c["a"],Footer:s["a"]},async created(){try{const t=this.$route.params.id;console.log("Fetching product with ID:",t);const r=await Object(i["p"])(t);if(console.log("Product data received:",r),0!==r.code)throw new Error(r.message||"获取产品详情失败");this.product=r.data}catch(t){console.error("获取产品详情失败:",t),this.error="获取产品详情失败，请稍后再试"}}},n=d,u=(e("aa10"),e("2877")),l=Object(u["a"])(n,a,o,!1,null,"266593e1",null);r["default"]=l.exports},aa10:function(t,r,e){"use strict";e("059d")}}]);
//# sourceMappingURL=chunk-3d390780.15aa93cd.js.map