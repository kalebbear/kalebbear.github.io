<template>
    <div class="brands-container">
        <Nav />
        <Banner />
        <Bred :mdata="[
            {name:'首页',path:'/home'},
            {name:'参考资料',path:''}]" />
        <div class=" wp1360">
            <div class="hsHeader">
                <!-- <h3>暂无页面</h3> -->
            </div>
            <!-- {{wkjson}} -->
        </div>

        <Footer class="top" />
    </div>
</template>
  
  <script>
import { wkjson } from '@/config/wk.js'

export default {
    name: 'Brands',
    data() {
        return {
            wkjson: wkjson,
        }
    },
    mounted() {
        console.log(this.wkjson)
    },
    methods: {},
}
</script>
  
  <style lang="less" scoped>
</style>