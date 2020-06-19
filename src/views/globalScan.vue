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
              <div class="gc-main-left-normTitle">今日总量</div>
              <div class="gc-main-left-normTitle">较昨日</div>
              <div class="gc-main-left-normTitle">本周总量</div>
              <div class="gc-main-left-normTitle">较上周</div>
              <div
                class="gc-main-left-normData"
                v-for="item in data.normData.data"
                :key="item"
              >{{item}}</div>
            </div>
            <myMap
              :geoCoordMap="data.myMap.geoCoordMap"
              :rawData="data.myMap.rawData"
              :title="data.myMap.title"
              :index="index"
            ></myMap>
          </div>
          <div class="gc-main-right">
            <div class="smooth-line">
              <div class="gc-main-right-title" style="margin-bottom: 20px">近一周趋势</div>
              <chartLine :data="data.myLine.data"></chartLine>
            </div>
            <div>
              <div class="gc-main-right-title">高发区域排行</div>
              <chartBar :data="data.myBar.data"></chartBar>
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <div>
          <div class="one-three">
            <div class="one-three-title">来源占比</div>
            <chartPie :data="data.mySource.data"></chartPie>
          </div>
          <div class="one-three">
            <div class="one-three-title">网络诈骗模式统计</div>
            <div class="one-three-ranking" v-for="item in data.myRanking.data" :key="item.name">
              <el-col :span="4">
                <img class="one-three-icon" :src="item.image" />
              </el-col>
              <el-col :span="12">
                <div class="line-center">{{item.name}}</div>
              </el-col>
              <el-col :span="8">
                <div class="line-center">{{item.value}}</div>
              </el-col>
            </div>
          </div>
          <div class="one-three">
            <div class="one-three-title">非法集资模式统计</div>
            <div class="one-three-ranking" v-for="item in data.myRanking1.data" :key="item.name">
              <el-col :span="4">
                <img class="one-three-icon" :src="item.image" />
              </el-col>
              <el-col :span="12">
                <div class="line-center">{{item.name}}</div>
              </el-col>
              <el-col :span="8">
                <div class="line-center">{{item.value}}</div>
              </el-col>
            </div>
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
import data from "@/data/globalScanData.js";
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
      data: data,
      index: [0, 2]
    };
  },
  mounted() {},
  methods: {
    handleClick(tab, event) {
      var a, b;
      if (this.activeName == "first") {
        (a = 0), (b = 2);
      } else if (this.activeName == "second") {
        (a = 0), (b = 1);
      } else if (this.activeName == "third") {
        (a = 1), (b = 2);
      }
      this.index = [a, b];
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
.gc-main-left-norm {
  width: 800px;
  height: 80px;
  margin-left: 8px;
}
.gc-main-left-normTitle {
  color: #909399;
  float: left;
  width: 200px;
  font-size: 16px;
  margin-bottom: 10px;
}
.gc-main-left-normData {
  float: left;
  width: 200px;
  font-size: 25px;
}
.gc-main-right {
  width: 32%;
  float: left;
}
.gc-main-right-title {
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
.one-three-title {
  font-size: 18px;
  font-weight: bold;
  border-bottom: solid 2px #dcdfe6;
  padding-bottom: 10px;
}
.one-three-ranking {
  width: 380px;
  height: 40px;
  margin: 8px 0 0 5px;
}
.one-three-icon {
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