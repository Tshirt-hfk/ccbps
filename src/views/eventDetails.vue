<template>
    <div class="ed-layout">
    <div class="ed-main">
        <div class="ed-title">网络诈骗/案件详情</div>
        <div class="ed-main-title">承德市刘某微信诈骗事件</div>
        <div class="ed-main-event">
            <div class="ed-main-overview">
                <div class="ed-main-subtitle">案件概览</div>
                <el-card class="box-card" :body-style="{ padding: '15px' }" shadow="never">
                    <div class="ed-main-overview-content" v-for="item in overviewData" :key="item">
                        <span class="ed-main-overview-label">{{item.category}}:</span>
                        <span class="ed-main-overview-name">{{item.name}}</span>
                    </div>
                </el-card>
            </div>
            <div class="ed-main-details">
                <div class="ed-main-subtitle">案件详情</div>
                <el-card class="box-card" :body-style="{ padding: '15px' }">
                    <div class="ed-main-details-title">犯罪过程</div>
                    <el-steps :active="crimeStep" align-center class="temp">
                        <el-step title="2019/12/25" description="团伙成立"></el-step>
                        <el-step title="2020/01/30" description="作案准备"></el-step>
                        <el-step title="2020/05/22" description="案件实施"></el-step>
                        <el-step title="2020/06/01" description="嫌疑人被捕"></el-step>
                    </el-steps>
                </el-card>
                <el-card class="box-card-small" :body-style="{ padding: '15px' }" style="float:left;margin-right: 25px">
                    <div class="ed-main-details-title">涉案组织</div>
                    <span class="ed-main-details-content">主要描述诈骗主题信息，具体包括组织成员、组织人员数量、组织注册地等</span>
                </el-card>
                <el-card class="box-card-small" :body-style="{ padding: '15px' }">
                    <div class="ed-main-details-title">组织人员</div>
                    <span class="ed-main-details-content">列出涉及的组织成员列表，字段包括、序号、姓名、涉及金额、被害人等</span>
                </el-card>
                <el-card class="box-card-small" :body-style="{ padding: '15px' }" style="float:left;margin-right: 25px">
                    <div class="ed-main-details-title">被害人员</div>
                    <span class="ed-main-details-content">组织诈骗人员清单，字段包括、序号、姓名、涉及金额、被害人等</span>
                </el-card>
                <el-card class="box-card-small" :body-style="{ padding: '15px' }">
                    <div class="ed-main-details-title">资金流向</div>
                    <span class="ed-main-details-content">采用拓扑图，绘制人员关系，边上表明涉及的诈骗金额</span>
                </el-card>
            </div>
        </div>
    </div>
    </div>
</template>

<script>

import echarts from 'echarts';

export default {
    name: "eventDetails",
    watch:{
        searchValue:{
        handler(n, o){
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
            this.remoteMethod(n);
            }, 300);
        }
        }
    },
    data() {
        return {
            overviewData:[{
                category: '诈骗类型',
                name: '微信中奖'
            },{
                category: '地区',
                name: '河北省 承德市'
            },{
                category: '涉案金额',
                name: '55,000元'
            },{
                category: '来源',
                name: '微信'
            },{
                category: '案发时间',
                name: '2020/05/22 19:45:56'
            },{
                category: '涉案人数',
                name: '3人'
            }],
            crimeStep: '1',
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init(){
            this.applications = this.displayData
            this.tableData = this.displayData
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            let indexleft = val - 1;
            let size = this.pagesize;
            this.displayData = this.tableData.slice(indexleft*size, val*size);
        },
        // filter
        remoteMethod(query) {
            if (query !== "") {
                this.tableData = this.applications.filter(entry => {
                return entry.source.toLowerCase().indexOf(query.toLowerCase()) > -1;
                });
                this.displayData = this.tableData.slice(0, this.pagesize);
            } else {
                this.tableData = this.applications;
                this.displayData = this.tableData.slice(0, this.pagesize);
            }
        },
    }
}
</script>

<style scoped>
.ed-layout{
    width: 100%;
    position: absolute;
    top: 85px;
}
.ed-main{
    width: 1280px;
    min-height: 860px;
    background-color: #FFFFFF;
    margin: 0 auto;
    margin-bottom: 15px;
}
.ed-title{
    margin-left: 50px;
    color: #909399;
    padding-top: 25px;
}
.ed-main-title{
  height: 80px;
  line-height: 80px;
  font-size: 25px;
  font-weight: bold;
  margin: 0 40px 10px 50px;
  border-bottom: solid 2px #DCDFE6;
}
.ed-main-event{
    width: 1200px;
    margin: 0 auto;
}
.ed-main-subtitle{
  height: 30px;
  color: #666;
  line-height: 30px;
  font-size: 18px;
  margin: 25px 0 30px 50px;
  font-weight: bold;
}
.ed-main-subtitle::before{
  content: "";
  display: inline-block;
  width: 10px;
  height: 25px;
  background-color: #4d95dc;
  position: absolute;
  margin-left: -40px;
  margin-top: 4px;
}
.box-card{
    border: 1px solid #ccc;
    margin-bottom: 20px;
}
.box-card-small{
    border: 1px solid #ccc;
    margin-bottom: 20px;
    width: 585px;
    height: 250px;
}
.ed-main-overview-content{
    width: 380px;
    font-size: 18px;
    float: left;
    margin-bottom: 20px;
}
.ed-main-overview-name{
    color: #909399;
}
.ed-main-details{
    min-height: 780px;
}
.ed-main-details-title{
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
}
.ed-main-details-content{
    color: #909399;
    font-size: 15px;
    margin-left: 5px;
}
</style>