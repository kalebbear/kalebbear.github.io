(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1770ae8c"],{"32d5":function(t,e,s){t.exports=s.p+"img/加盟优势.33f2a757.png"},"3ab0":function(t,e,s){t.exports=s.p+"img/加盟流程.c490c1ef.png"},"6da7":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t._self._c;return e("div",[e("Nav"),e("Banner"),e("div",{staticClass:"container"},[e("el-breadcrumb",{staticClass:"top",attrs:{separator:"/"}},[e("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),e("el-breadcrumb-item",[t._v("招商")])],1),e("el-card",{staticClass:"top"},[e("div",{staticClass:"left"},[e("div",{staticClass:"business-sections"},[e("h2",{staticClass:"center"},[t._v("商业前景 ")]),e("p",{staticClass:"text"},[t._v("xxxxxxxxxxxxxxx")]),e("div",{staticClass:"features"})])])]),e("el-card",{staticClass:"top"},[e("div",{staticClass:"left"},[e("img",{staticClass:"top5 full-image",attrs:{src:s("32d5")}})])]),e("el-card",{staticClass:"top"},[e("div",{staticClass:"left"},[e("img",{staticClass:"top5 full-image",attrs:{src:s("3ab0")}})])]),e("el-card",{staticClass:"top"},[e("div",{staticClass:"form-container"},[e("h2",{staticClass:"join-title"},[t._v("加盟申请")]),e("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"80px"}},[e("el-form-item",{attrs:{label:"姓名",prop:"name"}},[e("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e("el-form-item",{attrs:{label:"电话",prop:"contactInfo"}},[e("el-input",{attrs:{placeholder:"请输入电话"},model:{value:t.form.contactInfo,callback:function(e){t.$set(t.form,"contactInfo",e)},expression:"form.contactInfo"}})],1),e("el-form-item",{attrs:{label:"备注",prop:"description"}},[e("el-input",{attrs:{type:"textarea",placeholder:"请输入备注"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("form")}}},[t._v("立即申请")])],1)],1)],1)])],1),e("Footer",{staticClass:"top"})],1)},a=[],o=(s("d9e2"),s("fcf6")),i=s("f8d9"),c=s("c683"),n=s("365c"),l={name:"About",components:{Nav:i["a"],Footer:c["a"],Banner:o["a"]},data(){const t=(t,e,s)=>{""===e?s(new Error("请输入手机号码")):/^1[3-9]\d{9}$/.test(e)?s():s(new Error("请输入正确的手机号码"))};return{form:{name:"",contactInfo:"",description:""},rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],contactInfo:[{required:!0,message:"请输入手机号码",trigger:"blur"},{validator:t,trigger:"blur"}],description:[{required:!0,message:"请输入备注",trigger:"blur"}]}}},methods:{submitForm(t){this.$refs[t].validate(e=>{if(!e)return console.log("表单验证失败"),!1;{const e={name:this.form.name,contactInfo:this.form.contactInfo,description:this.form.description,isDeleted:!1};Object(n["b"])(e).then(e=>{console.log("API请求成功:",e),this.$message.success("申请提交成功"),this.resetForm(t)}).catch(t=>{console.error("API请求失败:",t),this.$message.error("申请提交失败")})}})},resetForm(t){this.$refs[t].resetFields()}}},m=l,f=(s("949b"),s("2877")),p=Object(f["a"])(m,r,a,!1,null,"bd9f481c",null);e["default"]=p.exports},"949b":function(t,e,s){"use strict";s("996e")},"996e":function(t,e,s){}}]);
//# sourceMappingURL=chunk-1770ae8c.e93224b8.js.map