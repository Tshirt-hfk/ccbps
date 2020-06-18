<template>
  <div ref="word_cloud_view" class="wordCloud"></div>
</template>

<script>
let echarts = require("echarts/lib/echarts");
require("echarts-wordcloud");
import "echarts/theme/macarons.js";
import mydata from "@/data/data.js";
export default {
  name: "wordCloud",
  props: ["word_list"],
  data: () => ({
    word_cloud_view: null,
    word_cloud_options: {},
  }),
  methods: {
    init_view_data() {
      this.word_cloud_view = echarts.init(this.$refs.word_cloud_view, "macarons");
      let word_cloud_series = [
        {
          type: "wordCloud",
          shape: "circle",
          //maskImage: maskImage,
          left: "center",
          top: "center",
          width: "100%",
          height: "100%",
          right: null,
          bottom: null,
          sizeRange: [6, 60],
          rotationRange: [-45, 90],
          autoSize: {
            enable: true,
            minSize: 6
          },
          textPadding: 0,
          // rotationStep: 45,
          // gridSize: 8,
          drawOutOfBound: false,
          textStyle: {
            normal: {
              fontFamily: "sans-serif",
              fontWeight: "bold",
              // Color can be a callback function or a color string
              color: function() {
                // Random color
                return (
                  "rgb(" +
                  [
                    Math.round(Math.random() * 256),
                    Math.round(Math.random() * 256),
                    Math.round(Math.random() * 256)
                  ].join(",") +
                  ")"
                );
              }
            },
            emphasis: {
              shadowBlur: 10,
              shadowColor: "#333"
            }
          },
          data: this.word_list
        }
      ];
      this.word_cloud_options = {
        series: word_cloud_series
      };
      this.word_cloud_view.setOption(this.word_cloud_options);
    }
  },
  mounted() {
    this.init_view_data();
  },
  render(h) {
    return h("div", {
      attrs: { id: "word_cloud_view_id" },
      style: {
        height: "400px",
        width: "400px"
      }
    });
  }
};
</script>

<style scoped>
.wordCloud {
  width: 400px;
  height: 300px;
}
</style>