(function(e){function t(t){for(var r,a,c=t[0],u=t[1],i=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==s[c]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},s={app:0},o=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-07a92b27":"7bcd8182","chunk-1770ae8c":"e93224b8","chunk-2d0aa599":"761d0738","chunk-2d0b33df":"e1703010","chunk-2d0b8af4":"66bb05e3","chunk-3d390780":"15aa93cd","chunk-45ea6307":"bf4b8e73","chunk-58a8cebe":"46820da2","chunk-5c46f2b8":"29d6a8d8","chunk-61b75cde":"7d5249e1","chunk-704f3792":"c19b88b7","chunk-737a555f":"61394702","chunk-5ae7d843":"2a5d9295","chunk-6d6838da":"ee3885b9","chunk-980f04de":"8d7962ff","chunk-9c38def2":"13ef8f4e","chunk-c53d13b8":"b1339638","chunk-d16d0260":"08e74e5d","chunk-dc243f1a":"57112b31","chunk-f3d772a8":"bfcbfe8e","chunk-f8328d18":"3069b21f"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-07a92b27":1,"chunk-1770ae8c":1,"chunk-3d390780":1,"chunk-58a8cebe":1,"chunk-5c46f2b8":1,"chunk-61b75cde":1,"chunk-704f3792":1,"chunk-737a555f":1,"chunk-5ae7d843":1,"chunk-6d6838da":1,"chunk-980f04de":1,"chunk-9c38def2":1,"chunk-c53d13b8":1,"chunk-d16d0260":1,"chunk-dc243f1a":1,"chunk-f3d772a8":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-07a92b27":"9048f2af","chunk-1770ae8c":"d533da27","chunk-2d0aa599":"31d6cfe0","chunk-2d0b33df":"31d6cfe0","chunk-2d0b8af4":"31d6cfe0","chunk-3d390780":"ce84b066","chunk-45ea6307":"31d6cfe0","chunk-58a8cebe":"fca90665","chunk-5c46f2b8":"72706d6f","chunk-61b75cde":"f6b6b7af","chunk-704f3792":"3d60fd21","chunk-737a555f":"3dbfd44d","chunk-5ae7d843":"504fb14d","chunk-6d6838da":"43bf131d","chunk-980f04de":"c49a8915","chunk-9c38def2":"266b7862","chunk-c53d13b8":"6f3b5e70","chunk-d16d0260":"d73446e4","chunk-dc243f1a":"91720db0","chunk-f3d772a8":"ffbcd4b5","chunk-f8328d18":"31d6cfe0"}[e]+".css",s=u.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var i=o[c],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===s))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){i=d[c],l=i.getAttribute("data-href");if(l===r||l===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=s[e]=[t,n]}));t.push(r[2]=o);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}s[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e94":function(e,t,n){e.exports=n.p+"img/fav.715916eb.png"},"0f9a":function(e,t,n){"use strict";n.r(t);n("d9e2"),n("14d9"),n("e9f5"),n("7d54");var r=n("c24f"),a=n("5f87"),s=n("a18c");n("5c96"),n("8237"),n("c1df");const o={token:Object(a["a"])(),name:"游客",avatar:"",introduction:"",roles:[],mobile:"",id:"",isPay:!1},c={SET_TOKEN:(e,t)=>{e.token=t},SET_INTRODUCTION:(e,t)=>{e.introduction=t},SET_NAME:(e,t)=>{e.name=t},SET_AVATAR:(e,t)=>{e.avatar=t},SET_ROLES:(e,t)=>{e.roles=t},SET_MOBILE:(e,t)=>{e.mobile=t},SET_LOGIN_ID:(e,t)=>{e.id=t},SET_IS_PAY:(e,t)=>{e.isPay=t}},u={login({commit:e},t){const{userName:n,password:s}=t;return e("SET_PASSWORD",s),localStorage.setItem("SET_NAME",n),e("SET_NAME",n),new Promise((n,s)=>{Object(r["b"])(t).then(t=>{const{data:r}=t;console.log("Store login response:",t),0===t.code?(localStorage.setItem("token",r.token),e("SET_TOKEN",r.token),Object(a["c"])(r.token),n(t)):(console.error("Store login error:",error),s(new Error("账号或密码错误！")))}).catch(e=>{s(e)})})},getInfo({commit:e,state:t}){return new Promise((t,n)=>{const s=Object(a["a"])();Object(r["a"])(s).then(r=>{const a=r.body.sessionSubject.roleList,s=[];a.forEach(e=>{s.push(e.id)});const o={roles:s,name:r.body.nickname,mobile:r.body.mobile};sessionStorage.setItem("supId",a[0].supId),sessionStorage.setItem("supName",a[0].supName),sessionStorage.setItem("loginNum",r.body.loginNum),0!=r.status&&n("请重新登录！");const{roles:c,name:u,mobile:i}=o;(!c||c.length<=0)&&n("getInfo: roles must be a non-null array!"),e("SET_ROLES",c),e("SET_NAME",u),e("SET_MOBILE",i),e("SET_LOGIN_ID",r.body.id),t(o)}).catch(e=>{console.log(e),n(e)})})},logout({commit:e,state:t,dispatch:n}){return new Promise((o,c)=>{Object(r["c"])(t.token).then(()=>{e("SET_TOKEN",""),e("SET_ROLES",[]),Object(a["b"])(),Object(s["b"])(),n("tagsView/delAllViews",null,{root:!0}),o()}).catch(e=>{c(e)})})},resetToken({commit:e}){return new Promise(t=>{e("SET_TOKEN",""),e("SET_ROLES",[]),Object(a["b"])(),t()})},async changeRoles({commit:e,dispatch:t},n){const r=n+"-token";e("SET_TOKEN",r),Object(a["c"])(r);const{roles:o}=await t("getInfo");Object(s["b"])();const c=await t("permission/generateRoutes",o,{root:!0});s["a"].addRoutes(c),t("tagsView/delAllViews",null,{root:!0})}};t["default"]={namespaced:!0,state:o,mutations:c,actions:u}},1048:function(e,t,n){e.exports=n.p+"img/beian.d0289dc0.png"},"114b":function(e,t,n){e.exports=n.p+"img/banner3.811a03ec.jpg"},1784:function(e,t,n){"use strict";n("26ed")},1863:function(e,t,n){},2652:function(e,t,n){"use strict";n("1863")},"26ed":function(e,t,n){},"2ccf":function(e,t,n){"use strict";n("f2fe")},"365c":function(e,t,n){"use strict";n.d(t,"t",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"y",(function(){return o})),n.d(t,"g",(function(){return c})),n.d(t,"q",(function(){return u})),n.d(t,"w",(function(){return i})),n.d(t,"p",(function(){return l})),n.d(t,"o",(function(){return d})),n.d(t,"A",(function(){return f})),n.d(t,"l",(function(){return h})),n.d(t,"a",(function(){return b})),n.d(t,"m",(function(){return m})),n.d(t,"u",(function(){return p})),n.d(t,"f",(function(){return g})),n.d(t,"x",(function(){return j})),n.d(t,"r",(function(){return v})),n.d(t,"k",(function(){return k})),n.d(t,"e",(function(){return w})),n.d(t,"s",(function(){return y})),n.d(t,"i",(function(){return _})),n.d(t,"C",(function(){return I})),n.d(t,"d",(function(){return O})),n.d(t,"n",(function(){return P})),n.d(t,"z",(function(){return S})),n.d(t,"v",(function(){return C})),n.d(t,"h",(function(){return A})),n.d(t,"B",(function(){return E})),n.d(t,"b",(function(){return x})),n.d(t,"j",(function(){return q}));var r=n("b775");function a(){return Object(r["a"])({url:"/v1/carousels/getAllCarousels",method:"get"}).then(e=>(console.log("API request successful:",e),e)).catch(e=>{throw console.error("API request failed:",e),e})}function s(e){return Object(r["a"])({url:"/v1/carousels/addCarousel",method:"post",data:e}).then(e=>(console.log("API request successful:",e),e)).catch(e=>{throw console.error("API request failed:",e),e})}function o(e){return Object(r["a"])({url:"/v1/carousels/updateCarousel",method:"put",data:e}).then(e=>(console.log("API request successful:",e),e)).catch(e=>{throw console.error("API request failed:",e),e})}function c(e){return Object(r["a"])({url:"/v1/carousels/deleteCarousel/"+e,method:"delete"}).then(e=>(console.log("API request successful:",e),e)).catch(e=>{throw console.error("API request failed:",e),e})}function u(e){return Object(r["a"])({url:"/v1/productsCarousels/getProductsCarouselsById/"+e,method:"get"}).then(e=>(console.log("API request successful:",e),e)).catch(e=>{throw console.error("API request failed:",e),e})}function i(e){return Object(r["a"])({url:"/v1/products/searchProductsByName",method:"get",params:{name:e}}).then(e=>(console.log("API request successful:",e),e)).catch(e=>{throw console.error("API request failed:",e),e})}function l(e){return Object(r["a"])({url:"/v1/products/getProductById/"+e,method:"get"}).then(e=>(console.log("API request successful:",e),e)).catch(e=>{throw console.error("API request failed:",e),e})}function d(){return Object(r["a"])({url:"/v1/basicInformation/getAllBasicInformation",method:"get"}).then(e=>(console.log("API request successful:",e),e)).catch(e=>{throw console.error("API request failed:",e),e})}function f(e){return Object(r["a"])({url:"/v1/basicInformation/updateBasicInformation",method:"put",data:e}).then(e=>(console.log("API request successful:",e),e)).catch(e=>{throw console.error("API request failed:",e),e})}function h(){return Object(r["a"])({url:"/v1/brands/getAllBrands",method:"get"}).then(e=>(console.log("API request successful:",e),e)).catch(e=>{throw console.error("API request failed:",e),e})}function b(e){return Object(r["a"])({url:"/v1/brands/addBrand",method:"post",data:e})}function m(e,t,n){return Object(r["a"])({url:`/v1/brands/?page=${e}&size=${t}&sortField=${n}`,method:"get"}).then(e=>(console.log("API request successful:",e),e)).catch(e=>{throw console.error("API request failed:",e),e})}function p(e){return Object(r["a"])({url:"/v1/brands/search",method:"get",params:{name:e}}).then(e=>(console.log("API request successful:",e),e)).catch(e=>{throw console.error("API request failed:",e),e})}function g(e){return Object(r["a"])({url:"/v1/brands/deleteBrand/"+e,method:"delete"})}function j(e){return Object(r["a"])({url:"/v1/brands/updateBrand",method:"put",data:e})}function v(){return Object(r["a"])({url:"/v1/productCategories/getAllProductCategories",method:"get"}).then(e=>(console.log("API request successful:",e),e)).catch(e=>{throw console.error("API request failed:",e),e})}function k(){return Object(r["a"])({url:"/v1/products/getAllProducts",method:"get"}).then(e=>(console.log("API request successful:",e),e)).catch(e=>{throw console.error("API request failed:",e),e})}function w(e){return Object(r["a"])({url:"/v1/products/addProduct",method:"post",data:e}).then(e=>(console.log("API request successful:",e),e)).catch(e=>{throw console.error("API request failed:",e),e})}function y(e,t,n){return Object(r["a"])({url:`/v1/products/getProductsPaged?page=${e}&size=${t}&sortField=${n}`,method:"get"}).then(e=>(console.log("API request successful:",e),e)).catch(e=>{throw console.error("API request failed:",e),e})}function _(e){return Object(r["a"])({url:"/v1/products/deleteProduct/"+e,method:"delete"}).then(e=>(console.log("API request successful:",e),e)).catch(e=>{throw console.error("API request failed:",e),e})}function I(e){return Object(r["a"])({url:"/v1/fileUpload/upload",method:"post",data:e}).then(e=>(console.log("API request successful:",e),e)).catch(e=>{throw console.error("API request failed:",e),e})}async function O(e){try{const t=await Object(r["a"])({url:"/v1/certificates/addCertificate",method:"post",data:e});return t}catch(error){throw console.error("Error adding certificate:",error),error}}async function P(e,t,n){try{const a=await Object(r["a"])({url:"/v1/certificates/page",method:"get",params:{page:e,size:t,sortField:n}});return a}catch(error){throw console.error("Error fetching certificates:",error),error}}async function S(e){try{const t=await Object(r["a"])({url:"/v1/certificates/updateCertificate",method:"put",data:e});return t}catch(error){throw console.error("Error updating certificate:",error),error}}async function C(e){try{const t=await Object(r["a"])({url:"/v1/certificates/search",method:"get",params:{name:e}});return t}catch(error){throw console.error("Error searching certificates:",error),error}}async function A(e){try{const t=await Object(r["a"])({url:"/v1/certificates/deleteCertificate/"+e,method:"delete"});return t}catch(error){throw console.error("Error deleting certificate:",error),error}}async function E(e){try{const t=await Object(r["a"])({url:"/v1/productsCarousels/updateProductsCarousels",method:"put",data:e});return t}catch(error){throw console.error("Error updating carousel:",error),error}}function x(e){return Object(r["a"])({url:"/v1/businesses/addBusiness",method:"post",data:e}).then(e=>(console.log("API request successful:",e),e)).catch(e=>{throw console.error("API request failed:",e),e})}function q(e){return Object(r["a"])({url:"/v1/abouts/getAboutById/"+e,method:"get"}).then(e=>(console.log("API request successful:",e),e)).catch(e=>{throw console.error("API request failed:",e),e})}},"3ccc":function(e,t,n){},4678:function(e,t,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-ps":"4c98","./ar-ps.js":"4c98","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku-kmr":"7558","./ku-kmr.js":"7558","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("el-backtop",{attrs:{bottom:60}}),t("router-view")],1)},s=[],o=(n("b6da"),n("2877")),c={},u=Object(o["a"])(c,a,s,!1,null,null,null),i=u.exports,l=n("a18c"),d=(n("13d5"),n("e9f5"),n("9485"),n("2f62"));const f={sidebar:e=>e.app.sidebar,size:e=>e.app.size,device:e=>e.app.device,visitedViews:e=>e.tagsView.visitedViews,cachedViews:e=>e.tagsView.cachedViews,token:e=>e.user.token,avatar:e=>e.user.avatar,name:e=>e.user.name,user_id:e=>e.user.user_id,introduction:e=>e.user.introduction,roles:e=>e.user.roles,permission_routes:e=>e.permission.routes,buttons:e=>e.permission.buttons,errorLogs:e=>e.errorLog.logs,isPay:e=>e.user.isPay,mobile:e=>e.user.mobile,id:e=>e.user.id};var h=f;r["default"].use(d["a"]);const b=n("d307"),m=b.keys().reduce((e,t)=>{const n=t.replace(/^\.\/(.*)\.\w+$/,"$1"),r=b(t);return e[n]=r.default,e},{}),p=new d["a"].Store({modules:m,getters:h});var g=p,j=(n("a4b1"),n("6821")),v=n.n(j),k=n("5c96"),w=n.n(k),y=(n("0fae"),n("323e")),_=n.n(y);n("a5d8"),n("5f87");function I(e){const t="华赛咨询信息有限公司";return e?`${t} - ${e}`:""+t}_.a.configure({showSpinner:!1});l["a"].beforeEach(async(e,t,n)=>{_.a.start(),document.title=I(e.meta.title),n()}),l["a"].afterEach(()=>{_.a.done()});var O=function(){var e=this,t=e._self._c;return t("div",{staticClass:"search"},[e._l(e.options,(function(n,r){return t("div",{key:n.searchValue,class:0!=r?"item":""},[t("el-input",{attrs:{clearable:"",placeholder:n.label,size:"small"},model:{value:n.value,callback:function(t){e.$set(n,"value",t)},expression:"item.value"}})],1)})),e._t("default"),t("div",{staticClass:"item"},[t("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.search}},[e._v("搜索")])],1),e._t("add")],2)},P=[],S={name:"Search",components:{},props:{options:{type:Array}},data(){return{value:"",searchValue:""}},created(){},methods:{search(){this.$emit("search",this.options)}}},C=S,A=(n("2652"),Object(o["a"])(C,O,P,!1,null,"46872624",null)),E=A.exports,x=n("f8d9"),q=n("c683"),T=n("fcf6");n("7d54");function L(e,t){let n="";return t&&t.forEach(t=>{t.searchValue===e&&(n=t.value)}),n}function z(){r["default"].component("Search",E),r["default"].component("Nav",x["a"]),r["default"].component("Footer",q["a"]),r["default"].component("Banner",T["a"]),r["default"].prototype.returnValue=L}var M=z;console.log(["%c","      写字楼里写字间，写字间里程序员；","      程序人员写程序，又拿程序换酒钱。","      酒醒只在网上坐，酒醉还来网下眠；","      酒醉酒醒日复日，网上网下年复年。","      但愿老死电脑间，不愿鞠躬老板前；","      奔驰宝马贵者趣，公交自行程序员。","      别人笑我忒疯癫，我笑自己命太贱；","      不见满街漂亮妹，哪个归得程序员？"].join("\n"),"color:green"),r["default"].config.productionTip=!1,r["default"].prototype.$md5=v.a,r["default"].use(M),r["default"].use(w.a),new r["default"]({router:l["a"],store:g,render:e=>e(i)}).$mount("#app")},"5f87":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return i}));var r=n("852e"),a=n.n(r);const s="admin",o=s+"token";function c(){return localStorage.getItem("token")}function u(e){return a.a.set(o,e)}function i(){return a.a.remove(o)}},9106:function(e,t,n){e.exports=n.p+"img/default.013dcd37.jpg"},a18c:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));n("14d9");var r=n("2b0e"),a=n("8c4f");r["default"].use(a["a"]);const s=[{path:"/",redirect:"/home"},{path:"/ProductDetail/:id",name:"ProductDetail",component:()=>n.e("chunk-3d390780").then(n.bind(null,"6ab1")),props:!0},{path:"/login",component:()=>n.e("chunk-c53d13b8").then(n.bind(null,"dc3f")),meta:{title:"登录"}},{path:"/register",component:()=>n.e("chunk-45ea6307").then(n.bind(null,"b953")),meta:{title:"注册"}},{path:"/home",name:"Home",component:()=>Promise.all([n.e("chunk-737a555f"),n.e("chunk-5ae7d843")]).then(n.bind(null,"ec5a")),meta:{title:"首页"}},{path:"/service",name:"service",component:()=>n.e("chunk-2d0b8af4").then(n.bind(null,"3078")),meta:{title:"行业覆盖"}},{path:"/aboutHS",name:"aboutHS",component:()=>n.e("chunk-f8328d18").then(n.bind(null,"8c9d")),meta:{title:"关于华赛"}},{path:"/noPage",name:"noPage",component:()=>n.e("chunk-2d0b33df").then(n.bind(null,"2814")),meta:{title:"暂无"}},{path:"/consultingService",name:"consultingService",component:()=>n.e("chunk-2d0aa599").then(n.bind(null,"1147")),meta:{title:"咨询服务"}},{path:"/cmmi",name:"cmmi",component:()=>Promise.all([n.e("chunk-737a555f"),n.e("chunk-6d6838da")]).then(n.bind(null,"79db")),meta:{title:"CMMI评估"}},{path:"/productService",name:"ProductService",component:()=>n.e("chunk-9c38def2").then(n.bind(null,"0cdc")),meta:{title:"产品与服务"}},{path:"/business",name:"Business",component:()=>n.e("chunk-1770ae8c").then(n.bind(null,"6da7")),meta:{title:"招商"}},{path:"/about",name:"About",component:()=>n.e("chunk-61b75cde").then(n.bind(null,"9cbb")),meta:{title:"关于我们"}},{path:"/admin",name:"Admin",component:()=>n.e("chunk-07a92b27").then(n.bind(null,"0a09")),meta:{title:"后台首页"},children:[{path:"/info",name:"Info",component:()=>n.e("chunk-980f04de").then(n.bind(null,"82fe")),meta:{title:"基本信息"}},{path:"/Brands",name:"Brands",component:()=>n.e("chunk-5c46f2b8").then(n.bind(null,"0a93")),meta:{title:"品牌配置"}},{path:"/Products",name:"Products",component:()=>n.e("chunk-dc243f1a").then(n.bind(null,"d416")),meta:{title:"商品配置"}},{path:"/Carousel",name:"Carousel",component:()=>n.e("chunk-d16d0260").then(n.bind(null,"eedc")),meta:{title:"轮播图配置"}},{path:"/ProductsCarousels",name:"ProductsCarousels",component:()=>n.e("chunk-f3d772a8").then(n.bind(null,"29ba")),meta:{title:"轮播图配置"}},{path:"/ProductsWaterfall",name:"ProductsWaterfall",component:()=>n.e("chunk-704f3792").then(n.bind(null,"1c04")),meta:{title:"瀑布流商品配置"}},{path:"/BrandAuthorizationCertificate",name:"BrandAuthorizationCertificate",component:()=>n.e("chunk-58a8cebe").then(n.bind(null,"b90d")),meta:{title:"品牌授权证书配置"}}]}],o=new a["a"]({mode:"hash",base:"/",routes:s});function c(){o.push({path:"/login"})}t["a"]=o},a4b1:function(e,t,n){},b6da:function(e,t,n){"use strict";n("3ccc")},b775:function(e,t,n){"use strict";const r=()=>{console.log(1)};t["a"]=r},bc6a:function(e,t,n){"use strict";n("bf37")},bf37:function(e,t,n){},c24f:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return c}));var r=n("b775");function a(e){return Object(r["a"])({url:"/v1/admins/login",method:"post",data:e}).then(e=>(console.log("API request successful:",e),e)).catch(e=>{throw console.error("API request failed:",e),e})}const s=()=>Object(r["a"])({url:"/api/user/logout",method:"post"}),o=e=>Object(r["a"])({url:"/client/anno/getRoles",method:"get",params:{token:e}}),c=e=>Object(r["a"])({url:"/client/customer/register",method:"post",data:e})},c683:function(e,t,n){"use strict";var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"footer"},[t("div",{staticClass:"container"},[t("div",{staticClass:"flex",staticStyle:{"align-items":"flex-start"}},e._l(e.footList,(function(n,r){return t("div",{key:r,staticClass:"info"},[t("div",{staticClass:"aMenu"},[e._v(e._s(n.name))]),n.subMenu?t("div",{staticClass:"bMenu"},e._l(n.subMenu,(function(n){return t("div",[e._v(e._s(n.name))])})),0):e._e()])})),0)]),t("div",{staticClass:"other"},[t("div",{staticClass:"center"},[t("div",[e._v("咨询热线：0755-29656825 ")]),t("div",[e._v(" 法律声明     知识产权     ©2010-2022    深圳华赛版权所有 "),t("a",{staticClass:"item",attrs:{href:"https://beian.mps.gov.cn/#/query/webSearch",target:"_blank"}},[e._v("粤ICP备 10030527 号")]),t("img",{staticClass:"img",staticStyle:{width:"20px",height:"20px"},attrs:{src:n("1048"),alt:""}})])])])])},a=[],s=n("365c"),o=n("f121"),c={name:"Footer",data(){return{footList:o["b"],footerData:{phone:"123-456-7890",email:"example@example.com",address:"默认地址",weChatImage:"default-wechat-image.png",icp:"默认ICP",beianImage:"default-beian-image.png",publicSecurity:"默认公安信息",copyright:"© 2023 默认版权"}}},mounted(){const e=localStorage.getItem("footerData");e?this.footerData=JSON.parse(e):this.fetchFooterData()},methods:{async fetchFooterData(){try{const e=await Object(s["o"])();0===e.code&&e.data.length>0?(this.footerData=e.data[0],localStorage.setItem("footerData",JSON.stringify(this.footerData))):console.error("Failed to fetch footer data:",e.message)}catch(error){console.error("Failed to fetch footer data:",error)}}}},u=c,i=(n("bc6a"),n("2877")),l=Object(i["a"])(u,r,a,!1,null,"ce3c371e",null);t["a"]=l.exports},d15f:function(e,t,n){e.exports=n.p+"img/banner1.11c4c3f3.jpg"},d307:function(e,t,n){var r={"./user.js":"0f9a"};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id="d307"},f121:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));const r="http://81.71.17.188:8088",a=[{name:"CMMI实施",path:"/home"},{name:"CMMI评估认证",path:"/cmmi"},{name:"关于华赛",path:"/ProductService",subMenu:[{name:"了解华赛",path:"/aboutHS"},{name:"行业覆盖",path:"/service"},{name:"典型案例",path:"/noPage"}]},{name:"华赛业务",path:"/Business",subMenu:[{name:"咨询服务",path:"/consultingService"},{name:"培训服务",path:"/a"},{name:"认证服务",path:"/a"}]},{name:"华赛研究",path:"/Business",subMenu:[{name:"华赛工具",path:"/a"},{name:"华赛文库",path:"/a"},{name:"参考资料",path:"/a"}]},{name:"社区建设",path:"/Business",subMenu:[{name:"社区活动",path:"/a"},{name:"上午合作",path:"/a"},{name:"廉洁申明",path:"/a"},{name:"信息安全",path:"/a"},{name:"服务政策",path:"/a"}]},{name:"联系我们",path:"/about",subMenu:[{name:"在线方式",path:"/a"},{name:"在线客服",path:"/a"}]}]},f2fe:function(e,t,n){},f8d9:function(e,t,n){"use strict";var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"nav",on:{mouseleave:e.menuhide}},[t("div",{staticClass:"container"},[e._m(0),t("div",{staticClass:"nav-items"},e._l(e.navList,(function(n,r){return t("div",{key:r,class:["nav-item",{active:e.$route.path===n.path}],on:{click:function(t){return e.toDetail(n,r)},mouseover:function(t){return e.menuChange(n)}}},[e._v(" "+e._s(n.name)+" ")])})),0),e._m(1)]),e.showSub?t("div",{staticClass:"subBox"},[t("div",{staticStyle:{width:"50%","text-align":"right",margin:"40px",display:"flex","justify-content":"flex-end","align-self":"center"}},[t("div",{},e._l(e.subList,(function(n){return t("div",{staticClass:"subItem",on:{click:function(t){return e.routeto(n.path)}}},[e._v(" "+e._s(n.name)+" ")])})),0)]),e._m(2)]):e._e()])},a=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"logo"},[t("img",{attrs:{src:n("0e94"),alt:"logo",height:"50px",width:"50px"}}),t("div",[t("p",{staticClass:"cn"},[e._v("深圳华赛信息咨询有限公司")]),t("p",{staticClass:"en"},[e._v("Shenzhen Huasai lnformation Gonsulting Co..Ltd")])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"tel_box"},[t("div",[t("label",[e._v("咨询热线：")]),t("div",{staticClass:"tel"},[e._v("0755-29656825")])]),t("div",[t("label",[e._v("CMMI专线：")]),t("div",{staticClass:"tel"},[e._v("14737222742")])])])},function(){var e=this,t=e._self._c;return t("div",{staticStyle:{width:"50%","margin-left":"40px",background:"#eee",padding:"40px"}},[t("img",{staticStyle:{margin:"60px"},attrs:{src:n("d15f"),alt:"",width:"400",height:"200"}})])}],s=(n("14d9"),n("2f62")),o=n("f121"),c={name:"Nav",data(){return{navList:o["b"],showSub:!1,subList:[{}],register:{},isLogin:null,logoImage:null}},computed:{...Object(s["b"])(["avatar","name","roles","isPay"])},mounted(){this.isLogin=!!localStorage.getItem("token");const e=localStorage.getItem("footerData");if(e){const t=JSON.parse(e);this.$nextTick(()=>{this.logoImage=t.beianImage})}},methods:{logout(){this.$message.success("退出成功"),localStorage.removeItem("token"),this.isLogin=!1,this.$router.replace({path:"/login"})},menuChange(e){e.subMenu?(this.subList=e.subMenu,this.showSub=!0):this.showSub=!1},menuhide(){this.subList=[],this.showSub=!1},routeto(e){this.$router.push(e)},login(e){"add"==e?this.$router.push("/register"):this.$router.push("/login")},info(){this.$router.push({path:"/info"})},toDetail(e,t){this.$router.push({path:e.path})}}},u=c,i=(n("1784"),n("2877")),l=Object(i["a"])(u,r,a,!1,null,"c37a25d8",null);t["a"]=l.exports},fcf6:function(e,t,n){"use strict";var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"banner_wrap"},[t("el-carousel",{attrs:{interval:5e3,height:e.carouselHeight,"initial-index":e.banner_index,arrow:"nerver","indicator-position":"none"}},e._l(e.swiperList,(function(n,r){return t("el-carousel-item",{key:r},[t("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:n.imageUrl,alt:"",fit:"cover"},on:{error:e.handleImageError}}),t("div",[0===r?t("div",{staticClass:"banner_info"},[t("p",{staticClass:"big_font"},[e._v("Capability Maturity Model (Integration)")]),t("p",{staticClass:"big_font"},[e._v("能力成熟度模型（集成）")]),t("p",{staticClass:"small_font"},[e._v("研发管理提升之道，过程改进指导模型、研发管理国际标准")]),t("div",{staticClass:"read_more"},[e._v("了解CMMI")])]):e._e(),1===r?t("div",{staticClass:"banner_info"},[t("p",{staticClass:"big_font"},[e._v("CMMI资质认证")]),t("p",{staticClass:"small_font",staticStyle:{"margin-top":"20px"}},[e._v("研发管理国际标准、研发能力水平认定、研发类供应商的必备资质")]),t("div",{staticClass:"read_more"},[e._v("【查看更多】")])]):e._e()])],1)})),1)],1)},a=[],s=(n("365c"),{name:"Banner",components:{},props:{type:0},watch:{},data(){return{banner_index:0,swiperList:[{imageUrl:n("d15f"),index:0},{imageUrl:n("114b"),index:1}],carouselHeight:"500px"}},mounted(){console.log("Component mounted"),1===this.type&&(this.swiperList=[this.swiperList[0]]),2===this.type&&(this.swiperList=[this.swiperList[1]]),window.addEventListener("resize",this.setCarouselHeight)},beforeDestroy(){window.removeEventListener("resize",this.setCarouselHeight)},methods:{handleImageError(e){console.error("图片加载失败:",e.target.src),e.target.src=n("9106")},setCarouselHeight(){window.innerWidth<=768?this.carouselHeight="200px":this.carouselHeight="500px"}}}),o=s,c=(n("2ccf"),n("2877")),u=Object(c["a"])(o,r,a,!1,null,"1616c72f",null);t["a"]=u.exports}});
//# sourceMappingURL=app.d887aa42.js.map