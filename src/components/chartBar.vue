<template>
  <div ref="chartBar" class="chart-line"></div>
</template>

<script>
import echarts from "echarts";
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
            data: ["大庆", "武汉", "北京", "合肥", "苏州", "菏泽", "长沙"],
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
            data: [10, 52, 200, 334, 390, 330, 220],
            stack: 'a',
            color: "#ffdddd"
          },
          {
            name: "非法集资",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 200, 334, 390, 330, 220],
            stack: 'a',
            color: "#ffdd77"
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