<template>
  <div ref="map" class="my-map"></div>
</template>
<script>
import echarts from "echarts";
import "echarts/map/js/china.js";
import option from "./myMap-option.js";
export default {
  name: "myMap",
  props: ["geoCoordMap", "rawData", "title", "index"],
  //钩子函数  不了解的话 建议看看 vue的生命周期
  mounted() {
    this.mapEchartsInit();
  },
  watch: {
    index: {
      handler(n, o) {
        this.mapEchartsInit();
      }
    }
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
            data: this.title.slice(this.index[0], this.index[1])
          },
          series: []
        };

        echarts.util.each(this.rawData, (dataItem, idx) => {
          var geoCoord = this.geoCoordMap[dataItem[0]];
          var coord = myChart.convertToPixel("geo", geoCoord);
          idx += "";
          var  inflationData = []
          var total = 0;
          for (var i=0;i<this.index[1]-this.index[0];i++){
            inflationData.push({name: this.title[this.index[0]+i], value: dataItem[i+this.index[0]+1]})
            total = total + dataItem[i+this.index[0]+1]
          }
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
              (total/800).toString()+"%",
            center: coord,
            data: inflationData,
            z: 100,
            itemStyle: {
              normal: {
                color: (params) => {
                  // 柱状图每根柱子颜色
                  var colorList = ["#fcae91", "#fb6a4a"].slice(this.index[0], this.index[1]);
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