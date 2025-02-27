<template>
    <div class="brands-container">
        <Nav />
        <Banner />
        <div class="wp1360">
            <div class="hsHeader">
                <h3>培训服务</h3>
            </div>
            <div style="display:flex;">
                <div class="fwwrap" @click="$router.push('/qynx')">
                    <el-card class="box-card">
                        <div class="fwheader">企业内训</div>
                        <img src="@/assets/images/fw1.jpg" alt="" width="270" height="210">
                    </el-card>
                </div>
                <div class="fwwrap" @click="$router.push('/gkkc')">
                    <el-card class="box-card">
                        <div class="fwheader">公开课程
                        </div>
                        <img src="@/assets/images/fw2.jpg" alt="" width="270" height="210">
                    </el-card>
                </div>
                <div class="fwwrap" @click="$router.push('/kcml')">
                    <el-card class="box-card">
                        <div class="fwheader">课程⽬录</div>
                        <img src="@/assets/images/al1.jpg" alt="" width="270" height="210">
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