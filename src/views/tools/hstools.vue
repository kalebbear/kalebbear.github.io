<template>
    <div class="brands-container">
        <Nav />
        <Banner />
        <Bred :mdata="[
            {name:'首页',path:'/home'},
            {name:'华赛研究',path:''},
            {name:'华赛工工具',path:'/hstools'}]" />
        <div class="wp1360">
            <div class="hsHeader">
                <h3>华赛工具</h3>
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
</style>