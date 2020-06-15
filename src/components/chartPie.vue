<template>
  <div ref="chartPie" class="chart-line"></div>
</template>

<script>
import echarts from "echarts";
import mydata from "@/data/data.js";
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
          data: mydata.mySource.data[0]
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
            data: mydata.mySource.data[1] 
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