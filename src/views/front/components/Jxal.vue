<template>
    <div class="banner_wrap">
        <!-- <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
                <h3 class="medium">111</h3>
            </el-carousel-item>
        </el-carousel> -->
        <div class="wp1360 hheader">
            <h3>精选行业应用案例</h3>
            <div class="dec_box">

                <div>专业的软件定制能力，深度匹配企业需求</div>
                <div>
                    <img src="@/assets/images/banners/l.png" alt="" width="20" @click="prev">
                    <img src="@/assets/images/banners/r.png" alt="" width="20" @click="next">

                </div>
            </div>
        </div>
        <el-carousel :interval="5000" :height="carouselHeight" :initial-index="banner_index" type="card" arrow="nerver" indicator-position="none" ref="banner1">
            <el-carousel-item v-for="(item, index) in swiperList" :key="index">
                <div class="inner">
                    <el-image :src="item.imageUrl" alt="" style="width:100%;height:100%" fit="cover" @error="handleImageError" />
                    <div class="dec">
                        <h3 class="header">{{item.title}}</h3>
                        <div>{{item.dec}}}</div>
                    </div>
                </div>

                <!-- <div> -->
                <!-- <div class="banner_info" v-if="(index===0 &&type=== 0)||type===1">
                        <p class="big_font">Capability Maturity Model (Integration)</p>
                        <p class="big_font">能力成熟度模型（集成）</p>
                        <p class="small_font">研发管理提升之道，过程改进指导模型、研发管理国际标准</p>
                        <div class="read_more" @click="()=>{$router.push('/cmmijs')}">了解CMMI</div>
                    </div>
                    <div class="banner_info" v-if="(index===1&&type=== 0)||type===2">
                        <p class="big_font">CMMI资质认证</p>
                        <p class="small_font" style="margin-top:20px">研发管理国际标准、研发能力水平认定、研发类供应商的必备资质</p>
                        <div class="read_more" @click="()=>{$router.push('/whatCMMI')}">【查看更多】</div>
                    </div> -->
                <!-- </div> -->

            </el-carousel-item>

        </el-carousel>

    </div>
</template>

<script>
import { getSwiperList } from '@/api/index.js' // 导入API方法

export default {
    name: 'Banner',
    components: {},
    props: {
        type: 0,
    },
    watch: {},
    data() {
        return {
            banner_index: 0,
            swiperList: [
                {
                    imageUrl: require('@/assets/images/banners/bb1.jpg'),
                    index: 0,
                    title: '湖北家庭医生项目',
                    dec: '为响应国家分级诊疗的要求，配合推进全民家庭医生随访工作落地，提升家庭医生工作效率，为一线工作人员配备工作手机。通过和各地市卫计局沟通家庭医生项目情况，确定号卡套餐、搭载终端型号、APP 应用等，并推进卫计局针对相关卫生服务中心等发文通知。',
                },
                {
                    imageUrl: require('@/assets/images/banners/bb2.jpg'),
                    index: 1,
                    title: '温州和家宝校园项目',
                    dec: '代步车代步车代步车代步车代步车代步车代步车代步车代步车代步车代步车代步车代步车代步车代步车代步车代步车',
                },
                {
                    imageUrl: require('@/assets/images/banners/bb3.jpg'),
                    index: 3,
                    title: '平安银行内购项目',
                    dec: '银行项目 应用等，并推进卫计局针对相关卫生服务中心等发文通知用等，并推进卫计局针对相关卫生服务中心等发文通知用等，并推进卫计局针对相关卫生服务中心等发文通知。',
                },
                // {
                //     imageUrl: require('@/assets/images/banner3.jpg'),
                //     index: 2,
                // },
            ],
            carouselHeight: '500px', // 默认高度
        }
    },

    mounted() {
        // console.log('Component mounted') // 确认组件挂载
        if (this.type === 1) {
            this.swiperList = [this.swiperList[0]]
        }
        if (this.type === 2) {
            this.swiperList = [this.swiperList[1]]
        }
        window.addEventListener('resize', this.setCarouselHeight)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.setCarouselHeight)
    },
    methods: {
        prev() {
            this.$refs.banner1.prev()
        },
        next() {
            this.$refs.banner1.next()
        },
        handleImageError(event) {
            console.error('图片加载失败:', event.target.src)
            event.target.src = require('@/assets/banner/default.jpg') // 替换为默认图片路径
        },
        setCarouselHeight() {
            if (window.innerWidth <= 768) {
                this.carouselHeight = '200px' // 将移动端高度调整为200px
            } else {
                this.carouselHeight = '500px'
            }
        },
    },
}
</script>

<style lang="less" scoped>
.inner {
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    .dec {
        padding: 50px 72px 80px;
        width: 50%;
        h3 {
            font-size: 30px;
            margin: 0 0 20px;
        }
        div {
            font-size: 14px;
            color: #666;
            margin-bottom: 120px;
        }
    }
}
.banner_wrap {
    background: #f5f6f7;
    position: relative;
    padding: 40px 0;
    .hheader {
        h3 {
            font-size: 38px;
        }
        .dec_box {
            color: #666;
            margin-bottom: 50px;
            margin-top: 15px;
            display: flex;
            justify-content: space-between;
            img {
                cursor: pointer;
            }
        }
    }
    .banner_info {
        position: absolute;
        padding: 20px;
        right: 0;
        bottom: 0;
        z-index: 999;
        height: 230px;
        width: 700px;
        color: #fff;
        .big_font {
            font-size: 36px;
        }
        .read_more {
            position: absolute;
            bottom: 30px;
            right: 100px;
            cursor: pointer;
        }
    }
}
.banner_box {
    img {
        width: 100%;
        height: 600px;
    }
}
.banner {
    width: 100%;
    overflow: hidden;
}

.el-carousel {
    width: 100%;
}

.el-carousel__item {
    display: flex;
    justify-content: center;
    align-items: center;
}

.el-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 768px) {
    .el-carousel {
        height: 200px;
    }

    .el-image {
        object-position: center; // 确保图片居中显示
    }
}
</style>