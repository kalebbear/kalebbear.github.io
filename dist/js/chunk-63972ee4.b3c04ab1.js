(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63972ee4"],{"16cc":function(t,e,i){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-carousel"},[e("el-carousel",{attrs:{arrow:"always"}},t._l(t.products,(function(i){return e("el-carousel-item",{key:i.id},[e("el-card",{staticClass:"product-card",nativeOn:{click:function(e){return t.goToProductDetail(i.id)}}},[e("img",{staticClass:"product-image",attrs:{src:i.image},on:{error:t.handleImageError}}),e("div",{staticClass:"product-info"},[e("h3",[t._v(t._s(i.name))]),e("p",[t._v(t._s(i.description))])])])],1)})),1)],1)},a=[],c=(i("14d9"),i("365c")),r={name:"ProductCarousel",data(){return{products:[]}},async created(){const t=await Object(c["f"])(1);this.products=t.data},methods:{goToProductDetail(t){this.$router.push({name:"ProductDetail",params:{id:t}})},handleImageError(t){console.error("图片加载失败:",t.target.src),t.target.src=i("3b88")}}},n=r,o=(i("3a85"),i("2877")),l=Object(o["a"])(n,s,a,!1,null,"7bd334f1",null);e["a"]=l.exports},"274d":function(t,e,i){},"2c41":function(t,e,i){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"adv_wrap"},[e("div",{staticClass:"adv_header"},[t._v("实施CMMI的好处")]),e("el-row",{attrs:{gutter:12}},t._l(t.advList,(function(i){return e("el-col",{key:i.key,staticStyle:{"margin-bottom":"20px",padding:"0 10px"},attrs:{span:8}},[e("el-card",{attrs:{shadow:"hover"}},[e("div",{staticClass:"advbox"},[e("img",{attrs:{src:i.icon,alt:"",width:"70",height:"70"}}),e("div",{staticClass:"advInfo"},[e("div",{staticClass:"advtitle"},[t._v(t._s(i.title))]),e("div",{staticClass:"advdec"},[t._v(t._s(i.dec))])]),e("div",{staticClass:"adv_num"},[t._v(t._s(i.key))])])])],1)})),1)],1)},a=[],c={name:"Banner",components:{},props:{},watch:{},data(){return{list:"提升研发效率,降低研发成本,提升产品质量,按时交付,提升客户满意度,提升项目的可控性,规范化管理,提升竞争力,学习和成长",advList:[{title:"提升研发效率",key:"01",dec:"规范研发流程，减少重复工作和低效环节，提高团队协作效率，加速产品开发周期。",icon:i("a5f1")},{title:"降低研发成本",key:"02",dec:"通过优化流程和资源分配，减少浪费和返工，降低研发过程中的不必要开支。",icon:i("3ed8")},{title:"提升产品质量",key:"03",dec:"引入质量控制机制，减少缺陷和错误，提高产品稳定性和可靠性。",icon:i("392f")},{title:"按时交付",key:"04",dec:"明确流程和时间节点，增强项目进度把控能力，确保项目按时交付。",icon:i("05ab")},{title:"提升客户满意度",key:"05",dec:"高质量的产品和按时交付，增强客户信任，提升客户满意度和忠诚度。",icon:i("d477")},{title:"提升项目的可控性",key:"06",dec:"量化指标和标准化流程，让项目进度和风险可控，增强管理透明度。",icon:i("06cb")},{title:"规范化管理",key:"07",dec:"建立标准化流程，提升企业管理水平，减少因人为因素导致的混乱。",icon:i("5c00")},{title:"提升竞争力",key:"08",dec:"获得国际认可的CMMI认证，提升企业形象，增强市场竞争力。",icon:i("52ac")},{title:"学习和成长",key:"09",dec:"员工在实施CMMI过程中学习新知识，提升专业技能，促进个人和团队成长。",icon:i("5640")}]}},mounted(){},beforeDestroy(){},methods:{}},r=c,n=(i("d0e2"),i("2877")),o=Object(n["a"])(r,s,a,!1,null,"7a21d360",null);e["a"]=o.exports},"2d0b":function(t,e,i){},"30e7":function(t,e,i){"use strict";var s=function(){var t=this;t._self._c;return t._m(0)},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"fea_wrap",staticStyle:{"margin-top":"20px"}},[e("div",{staticClass:"fea"},[e("div",{staticClass:"fea_dec"},[e("p",[t._v("1,与商业目标挂钩，强调适用性")]),e("p",[t._v("2,从问题出发，追求实效")]),e("p",[t._v("3,关注员工的学习和成长")])]),e("div",{staticClass:"fea_tit"},[t._v("华赛咨询服务特色 ")])])])}],c={name:"Banner",components:{},props:{},watch:{},data(){return{advList:[]}},mounted(){},beforeDestroy(){},methods:{}},r=c,n=(i("8ce3"),i("2877")),o=Object(n["a"])(r,s,a,!1,null,"70c31ba2",null);e["a"]=o.exports},"3a85":function(t,e,i){"use strict";i("4e8a")},"402d":function(t,e,i){"use strict";i("976d")},"494f":function(t,e,i){},"4e8a":function(t,e,i){},8494:function(t,e,i){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ind_wrap"},[e("div",{staticStyle:{padding:"20px"}},[e("div",{staticClass:"ind_header"},[t._v("全行业解决方案 ")]),e("div",{staticClass:"ind_header2"},[t._v("华赛公司为上千家企业提供过研发管理咨询服务，涉及到各行各业")]),e("div",{staticClass:"hy_box"},[t._l(t.swiperList,(function(i,s){return e("div",{key:s,staticClass:"hy_item",on:{click:function(e){return t.changeBanner(s)}}},[e("img",{attrs:{src:i.icon,alt:"",width:"40",height:"40"}}),e("div",[t._v(t._s(i.label))])])})),e("div",{staticClass:"hy_item",on:{click:t.readMore}},[e("img",{attrs:{src:i("0513"),alt:"",width:"40",height:"40"}}),e("div",[t._v("查看更多")])])],2)]),e("el-carousel",{ref:"banner",attrs:{interval:5e3,arrow:"always",height:t.carouselHeight},on:{change:t.bannerChange}},t._l(t.swiperList,(function(i,s){return e("el-carousel-item",{key:s},[e("el-image",{attrs:{src:i.imageUrl,alt:"",fit:"cover"},on:{error:t.handleImageError}}),e("div",[e("div",{staticClass:"ind_info"},[e("p",{staticClass:"big_font"},[t._v(t._s(t.swiperList[t.banner_index].label)+"行业解决方案")]),e("p",{staticClass:"small_font"},[t._v("研发管理提升之道，过程改进指导模型、研发管理国际标准")])])])],1)})),1)],1)},a=[],c=(i("14d9"),i("365c"),{name:"Banner",components:{},props:{},watch:{},data(){return{banner_index:0,swiperList:[{imageUrl:i("b084"),icon:i("e972"),index:0,label:"汽车",dec:"助力汽车行业业务的展开，提升移动办公效率"},{imageUrl:i("c144"),icon:i("f647"),index:1,label:"金融",dec:"助力汽车行业业务的展开，提升移动办公效率"},{imageUrl:i("822c"),icon:i("6357"),index:2,label:"医疗",dec:"助力汽车行业业务的展开，提升移动办公效率"},{imageUrl:i("5efd"),icon:i("ed44"),index:3,label:"电力",dec:"助力汽车行业业务的展开，提升移动办公效率"},{imageUrl:i("2515"),icon:i("3325"),index:4,label:"互联网",dec:"助力汽车行业业务的展开，提升移动办公效率"},{imageUrl:i("6b1f"),icon:i("3052"),index:5,label:"人工智能",dec:"助力汽车行业业务的展开，提升移动办公效率"}],carouselHeight:"500px"}},mounted(){console.log("Component mounted"),window.addEventListener("resize",this.setCarouselHeight)},beforeDestroy(){window.removeEventListener("resize",this.setCarouselHeight)},methods:{changeBanner(t){this.banner_index=t,this.$refs.banner.setActiveItem(t)},readMore(){this.$router.push("/hy")},bannerChange(t){this.banner_index=t},handleImageError(t){console.error("图片加载失败:",t.target.src),t.target.src=i("9106")},setCarouselHeight(){window.innerWidth<=768?this.carouselHeight="200px":this.carouselHeight="500px"}}}),r=c,n=(i("f653"),i("2877")),o=Object(n["a"])(r,s,a,!1,null,"397ab651",null);e["a"]=o.exports},"8a65":function(t,e,i){},"8ce3":function(t,e,i){"use strict";i("2d0b")},"976d":function(t,e,i){},d0e2:function(t,e,i){"use strict";i("274d")},e4cd:function(t,e,i){"use strict";i("8a65")},ec5a:function(t,e,i){"use strict";i.r(e);i("14d9");var s=function(){var t=this,e=t._self._c;return e("div",[e("Nav"),e("Banner",{attrs:{type:1}}),e("div",{staticClass:"wp1360"},[e("Adv")],1),e("Steps"),e("Fea"),e("ind"),e("div",[e("Jxal")],1),e("div",{staticClass:"wp1360",staticStyle:{overflow:"visible"}},[e("el-card",{staticClass:"top",staticStyle:{background:"#"}},[e("div",{staticStyle:{display:"flex"}},[e("img",{staticClass:"service-icon",attrs:{src:i("a2b7"),alt:"官方商城",height:"420",width:""}}),e("div",{staticStyle:{padding:"20px",position:"relative"}},[e("div",{staticStyle:{"font-size":"36px","text-align":"center"}},[t._v("典型案例")]),e("div",{staticStyle:{"font-size":"16px","text-align":"left","text-indent":"2rem",color:"#666","line-height":"32px"}},[t._v(" 某通讯电子产品研发企业实施IPD三年多来，取得了一定的成效。在产品层面已有了良好的总体规划和掌控，但对专业领域级别工作的可控性不强，经常出现进度一再延期、产品质量不能达标等问题。为了进一步提升其研发管理水平，决定导入CMMI，巩固和深化其IPD实施成效。 ")]),e("div",{staticStyle:{"font-size":"16px","text-align":"right",color:"#666","line-height":"32px",cursor:"pointer"},on:{click:function(e){return t.$router.push("/al")}}},[t._v("更多>>")])])])])],1),e("Footer",{staticClass:"top"})],1)},a=[],c=i("fcf6"),r=i("2c41"),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wl"},[e("div",{staticClass:"steps_wrap"},[e("div",{staticClass:"steps_header"},[t._v("实施流程")]),e("div",{staticClass:"steps_items"},[e("div",{staticClass:"steps_item"},[e("div",{staticClass:"stepHeader"},[t._v("差距分析")]),t._m(0),e("img",{staticClass:"bkicon",attrs:{src:t.icon}})]),e("img",{attrs:{src:t.imageUrl,alt:"",width:"50px",height:"50px"}}),e("div",{staticClass:"steps_item"},[e("div",{staticClass:"stepHeader"},[t._v("改进计划")]),t._m(1),e("img",{staticClass:"bkicon",attrs:{src:t.icon}})]),e("img",{attrs:{src:t.imageUrl,alt:"",width:"50px",height:"50px"}}),e("div",{staticClass:"steps_item"},[e("div",{staticClass:"stepHeader"},[t._v("基础培训")]),t._m(2),e("img",{staticClass:"bkicon",attrs:{src:t.icon}})]),e("img",{attrs:{src:t.imageUrl,alt:"",width:"50px",height:"50px"}}),e("div",{staticClass:"steps_item"},[e("div",{staticClass:"stepHeader"},[t._v("过程定义")]),t._m(3),e("img",{staticClass:"bkicon",attrs:{src:t.icon}})])]),e("div",{staticClass:"steps_items"},[e("div",{staticClass:"steps_item"},[e("div",{staticClass:"stepHeader"},[t._v("过程实施")]),t._m(4),e("img",{staticClass:"bkicon",attrs:{src:t.icon}})]),e("img",{attrs:{src:t.imageUrl,alt:"",width:"50px",height:"50px"}}),e("div",{staticClass:"steps_item"},[e("div",{staticClass:"stepHeader"},[t._v("效果验收")]),t._m(5),e("img",{staticClass:"bkicon",attrs:{src:t.icon}})]),e("img",{attrs:{src:t.imageUrl,alt:"",width:"50px",height:"50px"}}),e("div",{staticClass:"steps_item"},[e("div",{staticClass:"stepHeader"},[t._v("持续改进")]),t._m(6),e("img",{staticClass:"bkicon",attrs:{src:t.icon}})]),e("img",{staticStyle:{visibility:"hidden"},attrs:{src:t.imageUrl,alt:"",width:"50px",height:"50px"}}),e("div",{staticStyle:{"text-align":"center",width:"260px"}},[e("div",{staticClass:"stepHeader",staticStyle:{color:"007DC6","font-size":"20px","line-height":"200px","text-align":"center",cursor:"pointer"},on:{click:()=>{t.$router.push("/shCMMI")}}},[t._v("流程详情 "),e("img",{staticStyle:{margin:"2px 0 0 0"},attrs:{src:i("1b61"),width:"20"}})])])])])])},o=[function(){var t=this,e=t._self._c;return e("div",[e("p",[t._v("识别改进重点")]),e("p",[t._v("设计总体方案")])])},function(){var t=this,e=t._self._c;return e("div",[e("p",[t._v("拟定改进计划")]),e("p",[t._v("组建改进团队")])])},function(){var t=this,e=t._self._c;return e("div",[e("p",[t._v("CMMI模型培训")]),e("p",[t._v("改进要点培训")])])},function(){var t=this,e=t._self._c;return e("div",[e("p",[t._v("过程标准研讨")]),e("p",[t._v("过程标准修订")])])},function(){var t=this,e=t._self._c;return e("div",[e("p",[t._v("过程标准试点")]),e("p",[t._v("过程标准实施")])])},function(){var t=this,e=t._self._c;return e("div",[e("p",[t._v("实施效果总结")]),e("p",[t._v("正式评估认证")])])},function(){var t=this,e=t._self._c;return e("div",[e("p",[t._v("解决遗留问题")]),e("p",[t._v("改进效果跟踪")])])}],l={name:"Banner",components:{},props:{},watch:{},data(){return{icon:i("0f2a"),imageUrl:i("0f66"),list:"提升研发效率,降低研发成本,提升产品质量,按时交付,提升客户满意度,提升项目的可控性,规范化管理,提升竞争力,学习和成长",advList:[{title:"差距分析",key:"01",dec1:"识别改进重点",dec2:"设计总体方案",icon:i("a5f1")}]}},mounted(){},beforeDestroy(){},methods:{}},d=l,v=(i("e4cd"),i("2877")),u=Object(v["a"])(d,n,o,!1,null,"594f56e4",null),p=u.exports,h=i("30e7"),_=i("8494"),m=i("16cc"),f=(i("365c"),{name:"Home",components:{Banner:c["a"],ProductCarousel:m["a"],Adv:r["a"],Steps:p,Fea:h["a"],Ind:_["a"]},props:{},watch:{},data(){return{homeTitle:"",homeDescription:"",hotlineVisible:!1,certificates:[],qrCodeVisible:!1,footerData:null}},mounted(){},created(){},methods:{navigateTo(t){this.$router.push(t)},showHotline(){this.hotlineVisible=!0},copyToClipboard(t){const e=document.createElement("input");e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.$message.success("复制成功")},showQRCode(){this.qrCodeVisible=!0}}}),g=f,C=(i("402d"),Object(v["a"])(g,s,a,!1,null,"2bfacdc3",null));e["default"]=C.exports},f653:function(t,e,i){"use strict";i("494f")}}]);
//# sourceMappingURL=chunk-63972ee4.b3c04ab1.js.map