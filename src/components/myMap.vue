<template>
  <div ref="map" class="my-map"></div>
</template>
<script>
import echarts from "echarts";
import "echarts/map/js/china.js"; 
import option from "./myMap-option.js";
import mydata from "@/data/data.js";
export default {
  name: "myMap",
  data() {
    return {
      geoCoordMap: mydata.myMap.geoCoordMap,
      rawData: mydata.myMap.rawData,
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
            data: mydata.myMap.title
          },
          series: []
        };

        echarts.util.each(this.rawData, (dataItem, idx) => {
          var geoCoord = this.geoCoordMap[dataItem[0]];
          var coord = myChart.convertToPixel("geo", geoCoord);
          idx += "";
          var inflationData = [
            { name: mydata.myMap.title[0], value: dataItem[1] },
            { name: mydata.myMap.title[1], value: dataItem[2] } 
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
                  var colorList = ["#fcae91", "#fb6a4a"];
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