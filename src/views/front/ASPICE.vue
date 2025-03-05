<template>
    <div>
        <Nav />
        <div class="sp">
            <!-- <el-image src="@/assets/images/wbq/qc.png" alt="" style="width:100%;height:100%" fit="cover" @error="handleImageError" /> -->
            <div class="wp1360 banner_wrap">
                <div class="banner_info">
                    <p class="en_font">Automotive Software Process Improvement and Capacity dEtermination</p>
                    <p class="big_font">汽车软件过改进和能力认定</p>
                    <p class="small_font">汽车行业软件开发过程标准、汽车行业软件研发能力水平认定、汽车行业研发类型供应商的必备资质</p>
                    <div class="read_more" @click="()=>{$router.push('/whatAspice')}">【进一步了解ASPICE】</div>
                </div>
            </div>
        </div>

        <Steps />
        <!-- <el-card class="top"> -->
        <div class="wp1360 whyBox">
            <el-card class="card">
                <h3>
                    为什么要做ASPICE?
                </h3>
                <p class="more" @click="()=>{$router.push('/whyAspice')}">
                    了解更多>>
                </p>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <div class="whyItem">
                            <img src="@/assets/images/icon/i1.png" alt="" width="60">
                            <div class="res">内部管理改善</div>
                            <div class="dec">实施ASPICE提升软件产品质量和软件项目的可控性。
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="whyItem">
                            <img src="@/assets/images/icon/i3.png" alt="" width="60">
                            <div class="res">主机厂要求</div>
                            <div class="dec">上游车厂对下游供应商的软件开发流程的检查标准。
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="whyItem">
                            <img src="@/assets/images/icon/i9.png" alt="" width="60">
                            <div class="res">相关标准要求</div>
                            <div class="dec">为满足相关研发管理标准提供软件开发流程支撑。
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="whyItem">
                            <img src="@/assets/images/icon/i8.png" alt="" width="60">
                            <div class="res">企业形象
                            </div>
                            <div class="dec">建立规范化管理的企业形象，为客户提供产品质量信心。
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-card>
        </div>

        <div class="wp1360">
            <div class="infoBox">
                <el-card>
                    <div class="card">
                        <div class="lbox">
                            <img src="@/assets/images/wbq/p144.png" alt="" width="100%">
                        </div>
                        <div class="rbox">
                            <div class="rboxi">
                                <el-button type="text" style="font-size:22px;"  @click="()=>{$router.push('/whatAspicerz')}"><i class="el-icon-thumb"></i>了解ASPICE认证</el-button>
                            </div>
                            <div class="rboxi">
                                <el-button type="text" style="font-size:22px;"  @click="()=>{$router.push('/carryAspicerz')}"><i class="el-icon-discount"></i>ASPICE认证流程</el-button>

                            </div>
                        </div>
                    </div>

                </el-card>
            </div>

        </div>

        <!-- <ind /> -->
        <div>
            <!-- <Adv /> -->
            <Jxal2 />
        </div>

        <div class="wp1360">
            <el-card style="padding:30px">
                <h3 style="font-size:30px">ASPICE与其它标准</h3>
                <div class="center">
                    <img src="@/assets/images/wbq/aspice1.jpg" alt="" width="650">
                </div>

            </el-card>
        </div>

        <div class="wp1360">
            <div class="ljbox">
                <div class="main_header" style="margin-bottom:30px;">相关链接</div>
                <el-row>
                    <el-col :span="8">
                        <div class="lj_box">
                            <a href="https://vdaqmc.de/en/" target="_blank">
                                <div class="img_box">
                                    <img src="@/assets/images/icon/lj1.png" alt="" width="280">
                                </div>

                                <div>
                                    <el-button type="text" style="font-size:22px;">VDA-QMC</el-button>
                                </div>

                                <div class="lj_dec">ASPICE版权方，考试管理、书籍发行</div>
                                <div class="lj_site">https://vdaqmc.de/en/</div>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="lj_box">
                            <a href="https://intacs.info" target="_blank">
                                <div class="img_box">
                                    <img src="@/assets/images/icon/lj2.png" alt="" width="280">
                                </div>
                                <div>
                                    <el-button type="text" style="font-size:22px;">iNtacs</el-button>
                                </div>

                                <div class="lj_dec">ASPIC官方、资质管理、活动发布、社区发展</div>
                                <div class="lj_site">https://intacs.info</div>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="lj_box">
                            <a href="https://www.automotivespice.com" target="_blank">
                                <div class="img_box">
                                    <img src="@/assets/images/icon/lj3.png" alt="" width="280">
                                </div>
                                <div>
                                    <el-button type="text" style="font-size:22px;">AutomotiveSpice</el-button>
                                </div>

                                <div class="lj_dec">ASPCIE标准发布网站</div>
                                <div class="lj_site">https://www.automotivespice.com</div>
                            </a>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <Footer class="top" />
    </div>
</template>

<script>
import Banner from './components/Banner'
import Adv from './components/Adv'
import Steps from './components/Steps3'
import Fea from './components/Fea'
import Ind from './components/Ind'
import Jxal2 from './components/Jxal2'
import ProductCarousel from './components/ProductCarousel' // 引入新组件
import { getAllCertificates, getFooterData } from '@/api/index' // 引入API方法
// import Adv from './components/Adv.vue'
export default {
    name: 'Home',
    components: {
        Banner, // 轮播图
        ProductCarousel, // 横向商品
        Adv,
        Steps,
        Fea,
        Jxal2,
        Ind,
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
    },
}
</script>

<style lang="less" scoped>
.sp {
    width: 100%;
    height: 500px;
    background-image: url(../../assets/images/wbq/qcff.jpg);
    background-size: 100% 100%;
}
.ljbox {
    margin-bottom: 40px;
}
.lj_box {
    text-align: center;
    .img_box {
        height: 130px;
        line-height: 150px;
    }
    .lj_dec {
        color: #999;
    }
    .lj_site {
        color: #999;
    }
}
.infoBox {
    margin: 40px 0;
    .card {
        display: flex;
        .lbox {
            width: 65%;
        }
        .rbox {
            width: 35%;
            .rboxi {
                height: 200px;
                line-height: 200px;
                text-align: center;
            }
        }
    }
}
/deep/ .infoBox .el-card__body {
    padding: 0;
}
.whyBox {
    margin-top: 40px;

    .card {
        background: #f5f6f7;
    }
    h3 {
        font-size: 32px;
        margin: 20px 0 40px;
    }
    .more {
        text-align: right;
        color: #666;
        margin: 0 0 20px;
        cursor: pointer;
    }
    .whyItem {
        background: #fff;
        text-align: center;
        padding: 20px 50px;
        height: 230px;
        cursor: pointer;
        img {
            margin-top: 20px;
        }
        .res {
            color: #000;
            margin: 0 0 20px;
        }
        .dec {
            color: #666;
            text-align: left;
        }
    }
}
.banner_wrap {
    position: relative;
    color: #fff;
    height: 480px;
    width: 1360px;
    .banner_info {
        position: absolute;
        padding: 20px;
        left: 0;
        top: 30px;
        z-index: 9;
        height: 480px;
        width: 100%;
        color: #fff;
        .en_font {
            font-size: 30px;
        }
        .big_font {
            font-size: 36px;
        }
        .read_more {
            position: absolute;
            bottom: 30px;
            right: 20px;
            cursor: pointer;
        }
    }
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