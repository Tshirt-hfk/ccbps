<template>
    <div class="ed-layout">
    <div class="ed-main">
        <div class="ed-title">非法集资/案件详情</div>
        <div class="ed-main-title">{{item.name}}</div>
        <div class="ed-main-event">
            <div class="ed-main-overview">
                <div class="ed-main-subtitle">案件概览</div>
                <el-card class="box-card" :body-style="{ padding: '15px' }" shadow="never">
                    <div class="ed-main-overview-content">
                        <span class="ed-main-overview-label">诈骗类型:</span>
                        <span class="ed-main-overview-name">{{item.type}}</span>
                    </div>
                    <div class="ed-main-overview-content">
                        <span class="ed-main-overview-label">地区:</span>
                        <span class="ed-main-overview-name">{{item.pos}}</span>
                    </div>
                    <div class="ed-main-overview-content">
                        <span class="ed-main-overview-label">涉案金额:</span>
                        <span class="ed-main-overview-name">{{item.money}}</span>
                    </div>
                    <div class="ed-main-overview-content">
                        <span class="ed-main-overview-label">来源:</span>
                        <span class="ed-main-overview-name">{{item.source}}</span>
                    </div>
                    <div class="ed-main-overview-content">
                        <span class="ed-main-overview-label">案发时间:</span>
                        <span class="ed-main-overview-name">{{item.date | handleTime}}</span>
                    </div>
                    <div class="ed-main-overview-content">
                        <span class="ed-main-overview-label">涉案人数:</span>
                        <span class="ed-main-overview-name">{{item.num}}</span>
                    </div>
                    <div class="ed-main-overview-content">
                        <span class="ed-main-overview-label">链接:</span>
                        <el-link type="primary" :href="item.link" target="_blank" style="font-size: 15px;padding-bottom: 4px;">点击查看原文</el-link>
                    </div>
                </el-card>
            </div>
            <div class="ed-main-details">
                <div class="ed-main-subtitle">案件详情</div>
                <el-card class="box-card" :body-style="{ padding: '15px' }">
                    <div class="ed-main-details-title">犯罪过程</div>
                    <el-steps :active="4" align-center class="temp">
                        <el-step :title="item.establish" description="团伙成立"></el-step>
                        <el-step :title="item.eventPrepare" description="作案准备"></el-step>
                        <el-step :title="item.eventDone" description="案件实施"></el-step>
                        <el-step :title="item.arrested" description="嫌疑人被捕"></el-step>
                    </el-steps>
                </el-card>
                <el-card class="box-card-small" :body-style="{ padding: '15px' }" style="float:left;margin-right: 25px">
                    <div class="ed-main-details-title">涉案组织</div>
                    <span class="ed-main-details-content" v-html="item.origination"></span>
                </el-card>
                <el-card class="box-card-small" :body-style="{ padding: '15px' }">
                    <div class="ed-main-details-title">组织人员</div>
                    <span class="ed-main-details-content" v-html="item.orMember"></span>
                </el-card>
                <el-card class="box-card-small" :body-style="{ padding: '15px' }" style="float:left;margin-right: 25px">
                    <div class="ed-main-details-title">被害人员</div>
                    <span class="ed-main-details-content" v-html="item.hurtedMember"></span>
                </el-card>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import echarts from 'echarts';
import data from "@/data/illegalFundData.js";
export default {
    name: "illegalfundEventDetails",
    data() {
        return {
            crimeStep: 1,
            id: "ID43321433",
            data: data.data,
            item: data.data[0],
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        init(){
            this.id = this.$route.query.id
            for (var item of this.data){
                if (item.id==this.id){
                    this.item = item
                    return;
                }
            }
        },
    },
    filters: {
    handleTime(timestamp) {
      var date = new Date(timestamp);
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      var d = date.getDate();
      return (
        y +
        "-" +
        (m < 10 ? "0" + m : m) +
        "-" +
        (d < 10 ? "0" + d : d) +
        " " +
        date.toTimeString().substr(0, 8)
      );
    }
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
    min-height: 250px;
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
    font-size: 16px;
    line-height: 25px;
}
</style>