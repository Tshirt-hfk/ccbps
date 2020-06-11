<template>
  <div ref="map" class="my-map"></div>
</template>
<script>
import echarts from "echarts";
import "echarts/map/js/china.js"; //
import option from "./myMap-option.js";

export default {
  name: "myMap",
  data() {
    return {
      geoCoordMap: {
        北京: [116.41667, 39.91667],
        上海: [121.43333, 34.5],
        广州: [113.23333, 23.16667],
        杭州: [120.2, 30.26667],
        重庆: [106.45, 29.56667],
        青岛: [120.33333, 36.06667],
        厦门: [118.1, 24.46667],
        福州: [119.3, 26.08333],
        兰州: [103.73333, 36.03333],
        长沙: [113.0, 28.21667],
        南京: [118.78333, 32.05],
        海外: [130.41667, 36.91667]
      },
      rawData: [
        ["北京", 5, 200],
        ["上海", 10, 100],
        ["广州", 100, 50],
        ["杭州", 100, 20],
        ["重庆", 100, 20],
        ["青岛", 100, 20],
        ["厦门", 10, 200],
        ["福州", 100, 10],
        ["兰州", 10, 105],
        ["长沙", 100, 25],
        ["南京", 10, 200],
        ["海外", 10, 50]
      ]
    };
  },
  //钩子函数  不了解的话 建议看看 vue的生命周期
  mounted() {
    this.mapEchartsInit();
  },
  methods: {
    mapEchartsInit() {
      var myChart = echarts.init(this.$refs.map);
      setTimeout(() => {
        var option_1 = {
          title: [],
          grid: [],
          legend: {
            x: "35%",
            y: "0%",
            orient: "horizontal",
            data: ["网络诈骗", "非法集资"]
          },
          series: []
        };

        echarts.util.each(this.rawData, (dataItem, idx) => {
          var geoCoord = this.geoCoordMap[dataItem[0]];
          var coord = myChart.convertToPixel("geo", geoCoord);
          idx += "";
          var inflationData = [
            { name: "网络诈骗", value: dataItem[1] },
            { name: "非法集资", value: dataItem[2] }
          ];
          var total = dataItem[1] + dataItem[2];
          var title = {
            text: dataItem[0],
            textStyle: {
              fontSize: 10,
              fontWeight: "bold"
            },
            x: coord[0] - 15,
            y: coord[1] + 15
          };
          option_1.title.push(title);
          option_1.grid.push({
            id: idx,
            gridId: idx,
            width: 30,
            height: 40,
            left: coord[0] - 15,
            top: coord[1] - 15,
            z: 100
          });
          option_1.series.push({
            id: idx,
            type: "pie",
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            lableLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            radius:
              total > 50 ? "4%" : total > 40 ? "3%" : total > 30 ? "2%" : "1%",
            center: coord,
            data: inflationData,
            z: 100,
            itemStyle: {
              normal: {
                color: function(params) {
                  // 柱状图每根柱子颜色
                  var colorList = ["#fcae91", "#fb6a4a", "#cb181d"];
                  return colorList[params.dataIndex];
                }
              }
            }
          });
        });
        myChart.setOption(option_1);
      }, 0);
      myChart.setOption(option, true);
    }
  }
};
</script>

<style scoped>
.my-map {
  width: 800px;
  height: 640px;
}
</style>