<template>
    <div class="brands-container">
        <Nav />
        <Banner />
        <Bred :mdata="[
            {name:'首页',path: $store.state.type==='aspice'?'/aspice':'/home'},
            {name:'华赛文库',path:''}]" />
        <div class=" wp1360">
            <div class="hsHeader">
                <!-- <h3>暂无页面</h3> -->
            </div>
            <div style="margin: 15px 0;">
                <el-input placeholder="请输入搜索内容" v-model="searchTxt" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search" type="primary" primary @click="search"></el-button>
                </el-input>
            </div>
            <!-- {{wkjson}} -->
            <el-collapse accordion v-model="active">
                <el-collapse-item v-for="(item,index) in wkjson" :name="item.key" :key="item.key">
                    <template slot="title">
                        <!-- <div> -->
                        <div style="font-size:20px;color:#666;">{{item.title}}<i class="header-icon el-icon-info"></i></div>

                    </template>
                    <div v-html="item.html">
                    </div>
                </el-collapse-item>
            </el-collapse>
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
            active: '',
            searchTxt: '',
        }
    },
    mounted() {
        console.log(this.wkjson)
    },
    methods: {
        search() {
            if (this.searchTxt) {
                console.log(this.searchTxt)
                this.wkjson = wkjson.filter((e) => {
                    return e.title.includes(this.searchTxt)
                    // e.html.includes(this.searchTxt)
                })

                console.log(this.wkjson)
            } else {
                this.wkjson = wkjson
            }
            this.active = ''
        },
    },
}
</script>
  
<style lang="less" scoped>
</style>