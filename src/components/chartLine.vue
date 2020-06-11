<template>
  <div ref="chartLine" class="chart-line"></div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "chartLine",
  data() {
    return {
      chartLine: null
    };
  },
  mounted() {
    this.chartLineInit();
  },
  methods: {
    chartLineInit() {
      this.chartLine = echarts.init(this.$refs.chartLine);
      var option = {
        xAxis: {
          type: "category",
          boundaryGap: false,
        //   data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {},
            smooth: true,
            color: "#ffdddd"
          },
          {
            data: [520, 955, 931, 434, 890, 1440, 1320],
            type: "line",
            areaStyle: {},
            smooth: true,
            color: "#ffdd77"
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      this.chartLine.setOption(option);
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