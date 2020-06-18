<template>
  <div ref="chartLine" class="chart-line"></div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "chartLine",
  props: ["data"],
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
        tooltip: {              //设置tip提示
          trigger: 'axis'
        },
        legend:{
          data:['网络诈骗', '非法集资']
        },
        color: ['#ffdddd', '#ffdd77'],
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
            name: '网络诈骗',
            data: this.data[0],
            type: "line",
            areaStyle: {},
            smooth: true,
            color: "#fcae91"
          },
          {
            name: '非法集资',
            data: this.data[1],
            type: "line",
            areaStyle: {},
            smooth: true,
            color: "#fb6a4a"
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