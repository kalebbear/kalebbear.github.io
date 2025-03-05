<template>
    <div>
        <Nav />
        <Banner :type="2" />
        <div class="contain_center">
            <el-row :gutter="20">
                <el-col :span="16">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>历年全球评估数量走势折线图<i style="color:red;"></i>
                            </span>
                            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                        </div>
                        <div class="center">
                            <img :src="require('@/assets/images/zxt1.png')" alt="">
                            <!-- <CMMIAssessmentsChart /> -->
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>去年中国各级别企业数量柱状图<i style="color:red;"></i>
                            </span>
                            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                        </div>
                        <div>
                            <img :src="require('@/assets/images/zzt1.png')" alt="" width="100%" height="380">
                        </div>
                    </el-card>
                </el-col>
            </el-row>

        </div>
        <Steps2 />
        <!-- <Fea /> -->
        <div class="" style="margin-top:20px">
            <el-card class="box-card wp1360">
                <img :src="require('@/assets/images/hs.jpg')" alt="" width="" height="">
            </el-card>
        </div>
        <Hskh />
        <Cjwt />
        <Footer class="top" />
    </div>
</template>

<script>
import Banner from './components/Banner'
import Adv from './components/Adv'
import Steps2 from './components/Steps2'
import Fea from './components/Fea'
import Hskh from './components/Hskh'
import Cjwt from './components/Cjwt'

import ProductCarousel from './components/ProductCarousel' // 引入新组件
// import CMMIAssessmentsChart from './CMMIAssessmentsChart'
import { getAllCertificates, getFooterData } from '@/api/index' // 引入API方法
export default {
    name: 'Home',
    components: {
        Banner, // 轮播图
        ProductCarousel, // 横向商品
        Adv,
        Steps2,
        Fea,
        Hskh,
        Cjwt,
    },
    props: {},
    watch: {},
    data() {
        return {
            homeTitle: '',
            homeDescription: '',
            hotlineVisible: false, // 服务支持弹窗
            certificates: [], // 存储证书数据
            qrCodeVisible: false,
            footerData: null,
        }
    },
    mounted() {},
    created() {},
    methods: {
        navigateTo(url) {
            // window.location.href = url;
            this.$router.push(url)
        },
        showHotline() {
            this.hotlineVisible = true
        },
        copyToClipboard(text) {
            const input = document.createElement('input')
            input.value = text
            document.body.appendChild(input)
            input.select()
            document.execCommand('copy')
            document.body.removeChild(input)
            this.$message.success('复制成功')
        },

        showQRCode() {
            this.qrCodeVisible = true
        },
    },
}
</script>

<style lang="less" scoped>
.hotline-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.hotline-text {
    font-size: 18px;
    /* Increase font size */
    user-select: text;
    /* Make text selectable */
}

.page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 20px;
    margin-top: 75px;

    @media (max-width: 768px) {
        padding: 10px;
        margin-top: 60px;
    }

    @media (max-width: 480px) {
        padding: 5px;
    }
}

.container {
    flex: 1;
    margin-bottom: 100px;
}

.introduce {
    margin: 20px 0;
    text-align: center;
}

.center {
    text-align: center;
}

.about-us {
    margin: 40px 0;
    text-align: center;

    h2 {
        font-size: 24px;
        margin-bottom: 20px;
        position: relative;
    }

    h2::after {
        content: '';
        display: block;
        width: 50px;
        height: 2px;
        background: red;
        margin: 10px auto 0;
    }

    p {
        font-size: 16px;
        color: #666;
        margin-bottom: 40px;
    }
}

.features {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .feature {
        width: 200px;
        text-align: center;
        margin-bottom: 20px;

        .feature-icon {
            width: 50px;
            height: 50px;
            margin-bottom: 10px;
        }

        h3 {
            font-size: 18px;
            margin-bottom: 10px;
        }

        p {
            font-size: 14px;
            color: #666;
        }
    }
}

/* 新增样式 */
.info-services {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 20px 0;

    .service {
        width: 200px;
        text-align: center;
        cursor: pointer;
        transition: transform 0.3s;

        &:hover {
            transform: scale(1.05);
        }

        .service-icon {
            width: 50px;
            height: 50px;
            margin-bottom: 10px;
        }

        h3 {
            font-size: 18px;
            margin-bottom: 10px;
        }

        p {
            font-size: 14px;
            color: #666;
        }
    }
}

.full-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.scrolling-container {
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    position: relative;
}

.scrolling-content {
    display: inline-block;
    animation: scroll 20s linear infinite;
    text-align: center;
    margin: 0 10px;
}

.certificate-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    display: block;
    margin: 0 auto;
}

@media (max-width: 768px) {
    .scrolling-content {
        animation: scroll 10s linear infinite;
    }
}

@keyframes scroll {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }
}

.qr-code-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        margin-top: 10px;
        font-size: 14px;
        color: #666;
    }
}
</style>