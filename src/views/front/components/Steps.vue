<template>
    <div class="wl">
        <div class="steps_wrap">
            <div class="steps_header">实施流程</div>
            <div class="steps_items">
                <!-- <div v-for="(item,i) in advList" class="steps_item">
                    <div class="stepHeader">{{item.title}}</div>
                    <div>
                        <p>{{item.dec1}}</p>
                        <p>{{item.dec2}}</p>
                    </div>
                </div> -->
                <div class="steps_item">
                    <div class="stepHeader">差距分析</div>
                    <div>
                        <p>识别改进重点</p>
                        <p>设计总体方案</p>
                    </div>
                    <img :src="icon" class="bkicon">
                </div>
                <img :src="imageUrl" alt="" width="50px" height="50px">
                <div class="steps_item">
                    <div class="stepHeader">改进计划</div>
                    <div>
                        <p>拟定改进计划</p>
                        <p>组建改进团队</p>
                    </div>
                    <img :src="icon" class="bkicon">
                </div>
                <img :src="imageUrl" alt="" width="50px" height="50px">
                <div class="steps_item">
                    <div class="stepHeader">基础培训</div>
                    <div>
                        <p>CMMI模型培训</p>
                        <p>改进要点培训</p>
                    </div>
                    <img :src="icon" class="bkicon">
                </div>
                <img :src="imageUrl" alt="" width="50px" height="50px">
                <div class="steps_item">
                    <div class="stepHeader">过程定义</div>
                    <div>
                        <p>过程标准研讨</p>
                        <p>过程标准修订</p>
                    </div>
                    <img :src="icon" class="bkicon">
                </div>
                <!-- <img :src="imageUrl" alt="" width="50px" height="50px"> -->

            </div>
            <div class="steps_items">
                <div class="steps_item">
                    <div class="stepHeader">过程实施</div>
                    <div>
                        <p>过程标准试点</p>
                        <p>过程标准实施</p>
                    </div>
                    <img :src="icon" class="bkicon">
                </div>
                <img :src="imageUrl" alt="" width="50px" height="50px">
                <div class="steps_item">
                    <div class="stepHeader">效果验收</div>
                    <div>
                        <p>实施效果总结</p>
                        <p>正式评估认证</p>
                    </div>
                    <img :src="icon" class="bkicon">
                </div>
                <img :src="imageUrl" alt="" width="50px" height="50px">
                <div class="steps_item">
                    <div class="stepHeader">持续改进</div>
                    <div>
                        <p>解决遗留问题</p>
                        <p>改进效果跟踪</p>
                    </div>
                    <img :src="icon" class="bkicon">
                </div>
                <img :src="imageUrl" alt="" width="50px" height="50px" style="visibility: hidden;">
                <div class="" style="text-align:center;width:260px;">
                    <!-- <img :src="require('@/assets/images/xq.png')" class="" width="80" height="80"> -->
                    <div class="stepHeader" style="color:007DC6;font-size:20px;line-height:200px;text-align:center;cursor:pointer;">流程详情>></div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    components: {},
    props: {},
    watch: {},
    data() {
        return {
            icon: require('@/assets/images/right.png'),
            imageUrl: require('@/assets/images/next.png'),
            list: '提升研发效率,降低研发成本,提升产品质量,按时交付,提升客户满意度,提升项目的可控性,规范化管理,提升竞争力,学习和成长',
            advList: [
                {
                    title: '差距分析',
                    key: '01',
                    dec1: '识别改进重点',
                    dec2: '设计总体方案',
                    icon: require('@/assets/images/icon/i1.png'),
                },
            ],
        }
    },

    mounted() {},
    beforeDestroy() {},
    methods: {},
}
</script>

<style lang="less" scoped>
.wl {
    background: url(../../../assets/images/all_B.jpg);
}
.steps_wrap {
    margin: 0 auto;
    max-width: 1360px;
    overflow: hidden;
}
.steps_header {
    font-size: 40px;
    text-align: center;
    padding: 40px;
}
.steps_items {
    display: flex;
    margin-bottom: 40px;
    .steps_item {
        width: 260px;
        height: 210px;
        border: 2px solid #ccc;
        position: relative;
        border-radius: 10px;
        padding: 20px;
        .stepHeader {
            font-size: 24px;
        }
        .bkicon {
            width: 80px;
            height: 80px;
            position: absolute;
            bottom: 20px;
            right: 20px;
            margin: 0;
            opacity: 0.3;
        }
        p {
            position: relative;
            color: #666;
            padding-left: 10px;
            margin-top: 18px;
        }
        p::before {
            content: '';
            position: absolute;
            background: #666;
            width: 5px;
            border-radius: 100%;
            height: 5px;
            top: 10px;
            left: 0;
        }
    }
    img {
        margin: 76px 25px;
    }
}
</style>