<template>
  <div class="gc-layout">
    <div class="gc-main">
      <div class="gc-main-title">犯罪活动情况全域扫描</div>
      <div class="gc-main-event">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="全部" name="first"></el-tab-pane>
          <el-tab-pane label="网络诈骗" name="second"></el-tab-pane>
          <el-tab-pane label="非法集资" name="third"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="gc-main-data">
        <div>
          <div class="gc-main-left">
            <div class="gc-main-left-norm">
              <div class='gc-main-left-normTitle' v-for='title in normTitle' :key='title'>
                {{title}}
              </div>
              <div class='gc-main-left-normData' v-for='data in normData' :key='data'>
                {{data}}
              </div>
            </div>
            <myMap></myMap>
          </div>
          <div class="gc-main-right">
            <div class="smooth-line">
              <div class='gc-main-right-title' style="margin-bottom: 20px">近一周趋势</div>
              <chartLine></chartLine>
            </div>
            <div>
              <div class='gc-main-right-title'>高发区域排行</div>
              <chartBar></chartBar>
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <div>
          <div class="one-three">
            <div class="one-three-title">诈骗模式统计</div>
            <div class="one-three-ranking" v-for="data in ranking" :key='data.name'>
                <el-col :span="4">
                  <img class="one-three-icon" :src="data.image" />
                </el-col>
                <el-col :span="12">
                  <div class="line-center">{{data.name}}</div>
                </el-col>
                <el-col :span="8">
                  <div class="line-center">{{data.num}}</div>
                </el-col>
            </div>
          </div>
          <div class="one-three">
            <div class="one-three-title">来源占比</div>
            <chartPie></chartPie>
          </div>
          <div class="one-three">
            <div class="one-three-title">热词</div>
            <wordCloud></wordCloud>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myMap from "@/components/myMap";
import chartLine from "@/components/chartLine";
import chartBar from "@/components/chartBar";
import chartPie from "@/components/chartPie";
import wordCloud from "@/components/wordCloud";
import mydata from "@/data/data.js";
export default {
  name: "globalScan",
  components: {
    myMap,
    chartLine,
    chartBar,
    chartPie,
    wordCloud
  },
  data() {
    return {
      activeName: "first",
      normTitle: mydata.normData.data[0],
      normData: mydata.normData.data[1],
      ranking: mydata.myRanking.data
    };
  },
  mounted() {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style scoped>
.gc-layout {
  width: 100%;
  position: absolute;
  top: 85px;
}
.gc-main {
  width: 1280px;
  min-height: 860px;
  background-color: #ffffff;
  margin: 0 auto;
  margin-bottom: 15px;
}
.gc-main-title {
  line-height: 60px;
  height: 60px;
  margin-left: 40px;
  padding-top: 10px;
  font-size: 18px;
  font-weight: bold;
}
.gc-main-event {
  width: 1200px;
  margin: 0 auto;
}

.gc-main-left {
  width: 68%;
  float: left;
}
.gc-main-left-norm{
  width: 800px;
  height: 80px;
  margin-left: 8px;
}
.gc-main-left-normTitle{
  color: #909399;
  float: left;
  width: 200px;
  font-size: 16px;
  margin-bottom: 10px;
}
.gc-main-left-normData{
  float: left;
  width: 200px;
  font-size: 25px;
}
.gc-main-right {
  width: 32%;
  float: left;
}
.gc-main-right-title{
  height: 30px;
  color: #666;
  line-height: 30px;
  font-size: 18px;
  margin: 25px 0 0 35px;
  font-weight: bold;
}
.gc-main-right-title::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 25px;
  background-color: #4d95dc;
  position: absolute;
  margin-left: -25px;
  margin-top: 4px;
}

.gc-main-data {
  width: 95%;
  margin: 0 auto;
}

.smooth-line {
  border: black 1px;
}

.one-three {
  float: left;
  width: 390px;
  margin-right: 15px;
}
.one-three-title{
  font-size: 18px;
  font-weight: bold;
  border-bottom: solid 2px #DCDFE6;
  padding-bottom: 10px;
}
.one-three-ranking{
  width: 380px;
  height: 40px;
  margin: 8px 0 0 5px;
}
.one-three-icon{
  height: 20px;
  width: 20px;
  margin-top: 9px;
}
.line-center {
  line-height: 36px;
}

.clear {
  clear: both;
}

.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>