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
                            <img :src="require('@/assets/images/zxt1.png')" height="380" alt="">
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
                            <img :src="require('@/assets/images/CMMI_tb1.svg')" alt="" width="100%" height="380">
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <el-row :gutter="20" style="margin-top:20px">
                <el-col :span="12">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>中国三年内认证数量<i style="color:red;"></i>
                            </span>
                            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                        </div>
                        <div class="center">
                            <img :src="require('@/assets/images/tb3.png')" alt="" height="380">
                            <!-- <CMMIAssessmentsChart /> -->
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="12">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>全球三年内认证数量<i style="color:red;"></i>
                            </span>
                            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                        </div>
                        <div>
                            <img :src="require('@/assets/images/tb4.png')" alt="" height="380">
                        </div>
                    </el-card>
                </el-col>
            </el-row>

        </div>

        <div class="wp1360 whyBox">
            <el-card class="card" style="padding-bottom:20px">
                <h3>
                    为什么要进行cmmi评估认证?
                </h3>
                <!-- <p class="more" @click="()=>{$router.push('/whyAspice')}" style="font-size:14px;">
                    了解更多>>
                </p> -->
                <!-- 为什么要进行cmmi评估认证
1.竞标需要（上游企业用来判断供应商研发能力水平的资质，常用于竞标必备条件或加分项）
2.提升企业形象（证明企业研发能力达到国际水平，管理规范、研发效率高，产品质量可被信任。）
3.了解企业当前研发管理能力水平（定期进行评估认证确保企业保持有竞争力的研发能力水平）
4.寻找改进机会（收集研发管理相关的改善建议，识别研发流程中的不足，确定后续改进方向。）

华赛优势
1.官方授权审核机构（其它公司大多是中介，接单后还是要转包给审核机构）
2.白金审核机构（最高级别审核机构，全国仅五家，华南地区唯一）
3.市场占有率高（多年来一直是全国前两位，数千个成功案例）
4.知名客户案例多（包括华为、腾讯、艾默生、微软、创维、TCL、美的等）
5.评估师最多（十多位主任评估师和两位高成熟度评估师，其它大多数公司没有自己的评估师。）
6.资质最全（覆盖开发、服务、数据管理、安全所有领域资质） -->
                <el-row :gutter="20">
                    <el-col :span="6">
                        <div class="whyItem">
                            <img src="@/assets/images/icon/i1.png" alt="" width="60">
                            <div class="res">竞标需要</div>
                            <div class="dec">上游企业用来判断供应商研发能力水平的资质，常用于竞标必备条件或加分项
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="whyItem">
                            <img src="@/assets/images/icon/i8.png" alt="" width="60">
                            <div class="res">提升企业形象</div>
                            <div class="dec">证明企业研发能力达到国际水平，管理规范、研发效率高，产品质量可被信任。
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="whyItem">
                            <img src="@/assets/images/icon/i9.png" alt="" width="60">
                            <div class="res">了解企业当前研发管理能力水平</div>
                            <div class="dec">定期进行评估认证确保企业保持有竞争力的研发能力水平
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="whyItem">
                            <img src="@/assets/images/icon/i3.png" alt="" width="60">
                            <div class="res">寻找改进机会
                            </div>
                            <div class="dec">收集研发管理相关的改善建议，识别研发流程中的不足，确定后续改进方向。
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-card>
        </div>

        <Steps2 />
        <!-- <Fea /> -->
        <div class="" style="margin-top:20px">
            <el-card class="box-card wp1360">
                <img :src="require('@/assets/images/hs3.jpg')" alt="" width="" height="">
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

import { getAllCertificates, getFooterData } from '@/api/index' // 引入API方法
export default {
    name: 'Home',
    components: {
        Banner, // 轮播图
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
.whyBox {
    margin: 20px auto;
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
        padding: 20px 30px;
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
            font-size: 14px;
            text-align: left;
        }
    }
}
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