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
            <myMap></myMap>
          </div>
          <div class="gc-main-right">
            <div class="smooth-line">
              <div>总量</div>
              <chartLine></chartLine>
            </div>
            <div>
              <div>高发区域排行</div>
              <chartBar></chartBar>
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <div>
          <div class="one-three">
            <div>诈骗模式统计</div>
            <div>
                <el-col :span="4">
                  <div class="line-center">1</div>
                </el-col>
                <el-col :span="12">
                  <div class="line-center">微信中奖</div>
                </el-col>
                <el-col :span="8">
                  <div class="line-center">26</div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="one-three">
            <div>来源占比</div>
            <chartPie></chartPie>
          </div>
          <div></div>
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
export default {
  name: "globalScan",
  components: {
    myMap,
    chartLine,
    chartBar,
    chartPie
  },
  data() {
    return {
      activeName: "first"
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
  height: 80px;
  text-align: center;
  line-height: 80px;
  font-size: 25px;
  color: #666;
  margin: 0 0 40px 0;
  padding: 25px 0 0 0;
}
.gc-main-event {
  width: 1200px;
  margin: 0 auto;
}

.gc-main-left {
  width: 68%;
  float: left;
}
.gc-main-right {
  width: 32%;
  float: left;
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
  width: 30%;
}
.line-center {
  line-height: 36px;
  text-align: center;
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