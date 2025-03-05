<template>
    <div class="brands-container">
        <Nav />
        <Banner />
        <Bred :mdata="[
            {name:'首页',path: $store.state.type==='aspice'?'/aspice':'/home'},
            {name:'认证服务',path:'/rzservice'},
            ]" />
        <div class="wp1360">
            <div class="hsHeader">
                <!-- <h3>培训服务</h3> -->
            </div>
            <div style="display:flex;">
                <div class="fwwrap" @click="$router.push('/whatCMMI')">
                    <el-card class="box-card">
                        <div class="fwheader">什么是CMMI资质认证</div>
                        <img src="@/assets/images/fw2.jpg" alt="" width="270" height="210">
                    </el-card>
                </div>
                <div class="fwwrap" @click="$router.push('/pglc')">
                    <el-card class="box-card">
                        <div class="fwheader">CMMI资质认证流程
                        </div>
                        <img src="@/assets/images/al1.jpg" alt="" width="270" height="210">
                    </el-card>
                </div>
                <div class="fwwrap" @click="$router.push('/condition')">
                    <el-card class="box-card">
                        <div class="fwheader">CMMI资质申请条件</div>
                        <img src="@/assets/images/fw1.jpg" alt="" width="270" height="210">
                    </el-card>
                </div>
            </div>

        </div>

        <Footer class="top" />
    </div>
</template>
  
  <script>
import { addBrand } from '@/api/index.js'

export default {
    name: 'Brands',
    data() {
        return {}
    },
    mounted() {},
    methods: {},
}
</script>
  
  <style lang="less" scoped>
.fwwrap {
    cursor: pointer;
    margin-right: 40px;
}
.fwheader {
    height: 60px;
    font-size: 22px;
    text-align: center;
}
</style>