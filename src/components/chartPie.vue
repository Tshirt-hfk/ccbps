<template>
  <div ref="chartPie" class="chart-line"></div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "chartPie",
  data() {
    return {
      chartPie: null
    };
  },
  mounted() {
    this.chartPieInit();
  },
  methods: {
    chartPieInit() {
      this.chartPie = echarts.init(this.$refs.chartPie);
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: 320,
          data: ["微博", "微信", "论坛", "短信", "其他"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 335, name: "微博" },
              { value: 310, name: "微信" },
              { value: 234, name: "论坛" },
              { value: 135, name: "短信" },
              { value: 1548, name: "其他" }
            ]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      this.chartPie.setOption(option);
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