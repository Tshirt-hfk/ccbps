<template>
  <div ref="chartBar" class="chart-line"></div>
</template>

<script>
import echarts from "echarts";
import mydata from "@/data/data.js";
export default {
  name: "chartBar",
  data() {
    return {
      chartBar: null
    };
  },
  mounted() {
    this.chartBarInit();
  },
  methods: {
    chartBarInit() {
      this.chartBar = echarts.init(this.$refs.chartBar);
      var option = {
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: mydata.myBar.data[0],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "网络诈骗",
            type: "bar",
            barWidth: "60%",
            data: mydata.myBar.data[1],
            stack: 'a',
            color: "#fcae91"
          },
          {
            name: "非法集资",
            type: "bar",
            barWidth: "60%",
            data: mydata.myBar.data[2],
            stack: 'a',
            color: "#fb6a4a"
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      this.chartBar.setOption(option);
    }
  }
};
</script>

<style scoped>
.chart-line {
  width: 400px;
  height: 300px;
}
</style>