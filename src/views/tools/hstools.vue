<template>
    <div class="brands-container">
        <Nav />
        <Banner />
        <Bred :mdata="[
            {name:'首页',path:'/home'},
            {name:'华赛工具',path:''},
            ]" />
        <div class="wp1360">
            <div class="wp1360">
                <div class="hsHeader">
                    <!-- <h3>培训服务</h3> -->
                </div>
                <div style="display:flex;">
                    <div class="fwwrap" @click="$router.push('/gjjs')">
                        <el-card class="box-card">
                            <div class="fwheader">工具介绍</div>
                            <img src="@/assets/images/fw1.jpg" alt="" width="270" height="210">
                        </el-card>
                    </div>
                    <div class="fwwrap" @click="$router.push('/sslc')">
                        <el-card class="box-card">
                            <div class="fwheader">实施流程
                            </div>
                            <img src="@/assets/images/fw2.jpg" alt="" width="270" height="210">
                        </el-card>
                    </div>

                </div>

            </div>

        </div>

        <Footer class="top" />
    </div>
</template>
  
  <script>
export default {
    name: 'hstools',
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