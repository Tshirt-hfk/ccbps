<template>
  <div class="gc-layout">
    <div class="gc-main">
      <div class="gc-main-title">采集中心/概览</div>
      <div class="gc-main-event">
        <div class="gc-main-radio">
          <div class="gc-main-radio-title">时间：</div>
          <el-radio-group v-model="radio1" size="small">
            <el-radio-button label="近24小时"></el-radio-button>
            <el-radio-button label="近7天"></el-radio-button>
            <el-radio-button label="近30天"></el-radio-button>
          </el-radio-group>
        </div>
        <div class="gc-main-radio">
          <div class="gc-main-radio-title">来源：</div>
          <el-radio-group v-model="radio2" size="small">
            <el-radio-button label="全部"></el-radio-button>
            <el-radio-button label="微信"></el-radio-button>
            <el-radio-button label="微博"></el-radio-button>
            <el-radio-button label="新闻"></el-radio-button>
          </el-radio-group>
        </div>
        <div class="gc-main-gatherTrend">
          <div class="gc-main-gatherTrend-title">采集量趋势</div>
          <div id="chartLineBox" class="gc-main-gatherTrend-image"></div>
        </div>
        <div class="gc-main-dataSource">
          <div class="gc-main-dataSource-title">数据源设置</div>
          <el-input
            style="width: 300px; float: right;margin-bottom: 10px;"
            v-model="sourceSearchValue"
            placeholder="请输入关键词"
          ></el-input>
          <el-table :data="sourceDisplayData" highlight-current-row>
            <el-table-column prop="id" label="序号" width="150" show-overflow-tooltip>
              <template slot-scope="scope">{{ scope.row.id}}</template>
            </el-table-column>
            <el-table-column prop="source" label="数据源" width="150" show-overflow-tooltip>
              <template slot-scope="scope">{{ scope.row.source}}</template>
            </el-table-column>
            <el-table-column prop="address" label="地址" width="200" show-overflow-tooltip>
              <template slot-scope="scope">{{ scope.row.address}}</template>
            </el-table-column>
            <el-table-column prop="xpath" label="xpath" width="320" show-overflow-tooltip>
              <template slot-scope="scope">{{ scope.row.xpath}}</template>
            </el-table-column>
            <el-table-column prop="weight" label="权重" width="200" show-overflow-tooltip>
              <template slot-scope="scope">{{ scope.row.weight}}</template>
            </el-table-column>
            <el-table-column align="right">
              <template slot-scope="scope">
                <el-button size="mini" type="danger" @click="deleteSource(scope.row.id)">删除</el-button>
                <el-button
                  size="mini"
                  type="primary"
                  @click="editSource(scope.row.id, scope.$index)"
                >编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="passed-page">
            <el-pagination
              @current-change="handleSourceCurrentChange"
              :current-page="sourceCurrentPage"
              :page-size="sourcePagesize"
              layout="total, prev, pager, next, jumper"
              :total="sourceTableData.length"
              style="width: 300px; max-width: 550px;margin: 0 auto"
            ></el-pagination>
          </div>
        </div>
        <div class="gc-main-allData">
          <div class="gc-main-allData-title">全量数据</div>
          <el-input
            style="width: 300px; float: right;margin-bottom: 10px;"
            v-model="allSearchValue"
            placeholder="请输入关键词"
          ></el-input>
          <el-table :data="allDisplayData" highlight-current-row>
            <el-table-column prop="id" label="序号" width="150" show-overflow-tooltip>
              <template slot-scope="scope">{{ scope.row.id}}</template>
            </el-table-column>
            <el-table-column prop="title" label="标题" width="200" show-overflow-tooltip>
              <template slot-scope="scope">{{ scope.row.title}}</template>
            </el-table-column>
            <el-table-column prop="content" label="正文" width="300" show-overflow-tooltip>
              <template slot-scope="scope">{{ scope.row.content}}</template>
            </el-table-column>
            <el-table-column prop="time" label="时间" width="150" show-overflow-tooltip>
              <template slot-scope="scope">{{ scope.row.time}}</template>
            </el-table-column>
            <el-table-column prop="from" label="来源" width="200" show-overflow-tooltip>
              <template slot-scope="scope">{{ scope.row.from}}</template>
            </el-table-column>
            <el-table-column align="right">
              <template slot-scope="scope">
                <el-button size="mini" type="danger" @click="deleteData(scope.row.id)">删除</el-button>
                <el-button
                  size="mini"
                  type="primary"
                  @click="editData(scope.row.id, scope.$index)"
                >编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="passed-page">
            <el-pagination
              @current-change="handleAllCurrentChange"
              :current-page="allCurrentPage"
              :page-size="allPagesize"
              layout="total, prev, pager, next, jumper"
              :total="allTableData.length"
              style="width: 300px; max-width: 550px;margin: 0 auto"
            ></el-pagination>
          </div>
        </div>
      </div>
      <el-dialog title="编辑数据源" :visible.sync="sourceEditFlag" width="800px" top="12vh" center>
        <el-form ref="form" :model="sourceForm" label-width="100px">
          <el-form-item label="序号">
            <span>{{sourceForm.id}}</span>
          </el-form-item>
          <el-form-item label="数据源">
            <el-input v-model="sourceForm.source"></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="sourceForm.address"></el-input>
          </el-form-item>
          <el-form-item label="xpath">
            <el-input v-model="sourceForm.xpath"></el-input>
          </el-form-item>
          <el-form-item label="权重">
            <el-input v-model="sourceForm.weight"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="sourceEditFlag = false">返 回</el-button>
          <el-button type="primary" @click="publishSource">提 交</el-button>
        </span>
      </el-dialog>
      <el-dialog title="编辑数据源" :visible.sync="allEditFlag" width="800px" top="12vh" center>
        <el-form ref="form" :model="dataForm" label-width="100px">
          <el-form-item label="序号">
            <span>{{dataForm.id}}</span>
          </el-form-item>
          <el-form-item label="标题">
            <el-input v-model="dataForm.title"></el-input>
          </el-form-item>
          <el-form-item label="正文">
            <el-input type="textarea" v-model="dataForm.content" autosize></el-input>
          </el-form-item>
          <el-form-item label="时间">
            <el-input v-model="dataForm.time"></el-input>
          </el-form-item>
          <el-form-item label="来源">
            <el-input v-model="dataForm.from"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="allEditFlag = false">返 回</el-button>
          <el-button type="primary" @click="publishData">提 交</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import data from "@/data/gatheringCenterData.js";
export default {
  name: "gatheringCenter",
  watch: {
    sourceSearchValue: {
      handler(n, o) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.sourceRemoteMethod(n);
        }, 300);
      }
    },
    allSearchValue: {
      handler(n, o) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.allRemoteMethod(n);
        }, 300);
      }
    },
    radio1: {
      handler(n, o) {
        this.lineData = data.lineData[this.radio1];
        this.initLineData();
      }
    },
    radio2: {
      handler(n, o) {
        if (this.radio2 == "全部") {
          this.legend = data.lineData.legend;
          this.color = data.lineData.color;
        } else {
          this.legend = [this.radio2];
          this.color = [
            data.lineData.color[data.lineData.legend.indexOf(this.radio2)]
          ];
        }
        this.initLineData();
      }
    }
  },
  data() {
    return {
      radio1: "近24小时", // 筛选选项
      radio2: "全部",
      lineData: data.lineData["近24小时"], //折线图数据
      legend: data.lineData.legend,
      color: data.lineData.color,
      // 数据源设置
      sourceEditFlag: false, // 编辑框
      sourceEditIndex: 0,
      sourceForm: {
        id: "",
        source: "",
        address: "",
        xpath: "",
        weight: ""
      },
      sourceSearchValue: "", // 搜索框数据
      sourceCurrentPage: 1,
      sourcePagesize: 10, // 每页条目数
      sourceApplications: [
        {
          // 所有数据
          id: "ID43321432",
          source: "虎扑",
          address: "http://baidu.com",
          xpath: '//*[@id="cnblogs_post_body"]/p[39]/img',
          weight: "50000.00"
        }
      ],
      sourceTableData: [], // 目前列表数据
      sourceDisplayData: [], // 当前页显示数据

      // 全量数据
      allEditFlag: false, // 编辑框
      allEditIndex: 0,
      dataForm: {
        id: "",
        title: "",
        content: "",
        time: "",
        from: ""
      },
      allSearchValue: "", // 搜索框数据
      allCurrentPage: 1,
      allPagesize: 10, // 每页条目数
      allApplications: [
        {
          // 所有数据
          id: "ID43321432",
          title: "淮南男子伪造公司证照诈骗 106万钢管与扣件被骗",
          content:
            "日前，淮南大通派出所经艰苦侦查破获一起案值达百万余元的特大合同诈骗案件，抓获犯罪嫌疑人一名。今年6月，大通派出所辖区居民任某来所报案称，其被定远县居民樊某以签订合同的方式诈骗价值达106万元的钢管和扣件。接报案后，鉴于报案价值特别巨大又签订有合同，该所立即组织民警对案情进行分析研究，迅速制定了案件初查方案，确定专人专办。办案民警夏继耘等人克服该案签订合同地在淮南、货物交接地在定远、大量工作需在定远开展的实际困难，经多次往返定远、淮南两地开展多方调查取证终于查明，樊某使用伪造的公司营业执照和税务登记证，于2014年1月与任某签订了租赁价值106万元的钢管55762米和扣件54065个的合同，任某于当月分六次将钢管和扣件全部运至定远交付樊某，其后樊某即以各种借口不履行合同，直至杳无音信。民警又查明樊某因同类案件于2015年被田家庵警方立案侦查。大通派出所将初查情况向大通公安分局相关负责人汇报后，将该案立为合同诈骗案件开展侦查，随后办案民警经多次前往定远对樊某实施抓捕，但都未能找到樊某。案件侦查期间，夏继耘对樊某持续展开工作，终于掌握了其准确行踪。11月6日下午，民警柏礼、夏继耘等人赶赴田家庵区洞山地区将樊某抓获。经连夜突审，樊某如实供述了以签订合同为掩护诈骗任某钢管5万余米和扣件5万余个的犯罪事实。目前，41岁的犯罪嫌疑人樊某已被刑事拘留，该案正在进一步办理中。",
          time: "2016/11/23",
          from: "金蜘蛛紧固件网（中国）—业界信息"
        }
      ],
      allTableData: [], // 目前列表数据
      allDisplayData: [] // 当前页显示数据
    };
  },
  mounted() {
    this.init();
    
    this.initLineData();
  },
  methods: {
    init() {
      this.sourceRemoteMethod("");
      this.allRemoteMethod("");
      this.chartLine = echarts.init(document.getElementById("chartLineBox"));
    },
    initLineData() {
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          //设置tip提示
          trigger: "axis"
        },
        legend: {
          //设置区分（哪条线属于什么）
          data: this.legend
        },
        color: this.color, //设置区分（每条线是什么颜色，和 legend 一一对应）
        xAxis: {
          //设置x轴
          type: "category",
          boundaryGap: false, //坐标轴两边不留白
          data: this.lineData.xData,
          name: "DATE", //X轴 name
          nameTextStyle: {
            //坐标轴名称的文字样式
            color: "#FA6F53",
            fontSize: 16,
            padding: [0, 0, 0, 20]
          },
          axisLine: {
            //坐标轴轴线相关设置。
            lineStyle: {
              color: "#FA6F53"
            }
          }
        },
        yAxis: {
          name: "SALES VOLUME",
          nameTextStyle: {
            color: "#FA6F53",
            fontSize: 16,
            padding: [0, 0, 10, 0]
          },
          axisLine: {
            lineStyle: {
              color: "#FA6F53"
            }
          },
          type: "value"
        },
        series: []
      };
      for (var i = 0; i < this.legend.length; i++) {
        option.series.push({
          name: this.legend[i],
          data: this.lineData.yData[this.legend[i]],
          type: "line", // 类型为折线图
          lineStyle: {
            // 线条样式 => 必须使用normal属性
            normal: {
              color: this.color[i]
            }
          }
        });
      }
      // 使用刚指定的配置项和数据显示图表。
      this.chartLine.setOption(option, true);
    },
    handleSourceCurrentChange(val) {
      this.sourceCurrentPage = val;
      let indexleft = val - 1;
      let size = this.sourcePagesize;
      this.sourceDisplayData = this.sourceTableData.slice(
        indexleft * size,
        val * size
      );
    },
    // filter
    sourceRemoteMethod(query) {
      this.sourceTableData = this.sourceApplications.filter(entry => {
        return entry.source.toLowerCase().indexOf(query.toLowerCase()) > -1;
      });
      this.sourceDisplayData = this.sourceTableData.slice(
        0,
        this.sourcePagesize
      );
    },
    handleAllCurrentChange(val) {
      this.allCurrentPage = val;
      let indexleft = val - 1;
      let size = this.allPagesize;
      this.allDisplayData = this.allTableData.slice(
        indexleft * size,
        val * size
      );
    },
    // filter
    allRemoteMethod(query) {
      this.allTableData = this.allApplications.filter(entry => {
        return entry.title.toLowerCase().indexOf(query.toLowerCase()) > -1;
      });
      this.allDisplayData = this.allTableData.slice(0, this.allPagesize);
    },
    deleteSource(id) {
      this.$confirm("此操作将永久删除该数据源, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let index = 0;
          for (var i = 0; i < this.sourceApplications.length; i++) {
            if (this.sourceApplications[i].id === id) {
              index = i;
              break;
            }
          }
          this.sourceApplications.splice(index, 1);
          this.sourceRemoteMethod(this.sourceSearchValue);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    editSource(id, index) {
      this.sourceEditFlag = true;
      for (var i = 0; i < this.sourceApplications.length; i++) {
        if (this.sourceApplications[i].id === id) {
          this.sourceEditIndex = i;
          break;
        }
      }
      this.sourceForm.id = this.sourceDisplayData[index].id;
      this.sourceForm.source = this.sourceDisplayData[index].source;
      this.sourceForm.address = this.sourceDisplayData[index].address;
      this.sourceForm.xpath = this.sourceDisplayData[index].xpath;
      this.sourceForm.weight = this.sourceDisplayData[index].weight;
    },
    publishSource() {
      this.sourceApplications[this.sourceEditIndex].id = this.sourceForm.id;
      this.sourceApplications[
        this.sourceEditIndex
      ].source = this.sourceForm.source;
      this.sourceApplications[
        this.sourceEditIndex
      ].address = this.sourceForm.address;
      this.sourceApplications[
        this.sourceEditIndex
      ].xpath = this.sourceForm.xpath;
      this.sourceApplications[
        this.sourceEditIndex
      ].weight = this.sourceForm.weight;
      this.sourceRemoteMethod(this.sourceSearchValue);
      this.sourceEditFlag = false;
    },
    deleteData(id) {
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let index = 0;
          for (var i = 0; i < this.allApplications.length; i++) {
            if (this.allApplications[i].id === id) {
              index = i;
              break;
            }
          }
          this.allApplications.splice(index, 1);
          this.allRemoteMethod(this.allSearchValue);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    editData(id, index) {
      this.allEditFlag = true;
      for (var i = 0; i < this.allApplications.length; i++) {
        if (this.allApplications[i].id === id) {
          this.allEditIndex = i;
          break;
        }
      }
      this.dataForm.id = this.allDisplayData[index].id;
      this.dataForm.title = this.allDisplayData[index].title;
      this.dataForm.content = this.allDisplayData[index].content;
      this.dataForm.time = this.allDisplayData[index].time;
      this.dataForm.from = this.allDisplayData[index].from;
    },
    publishData() {
      this.allApplications[this.allEditIndex].id = this.dataForm.id;
      this.allApplications[this.allEditIndex].title = this.dataForm.title;
      this.allApplications[this.allEditIndex].content = this.dataForm.content;
      this.allApplications[this.allEditIndex].time = this.dataForm.time;
      this.allApplications[this.allEditIndex].from = this.dataForm.from;
      this.allRemoteMethod(this.allSearchValue);
      this.allEditFlag = false;
    }
  }
};
</script>

<style scoped>
.gc-layout {
  width: 100%;
  position: absolute;
  top: 85px;
}
.gc-main {
  width: 1280px;
  min-height: 860px;
  background-color: #ffffff;
  margin: 0 auto;
  margin-bottom: 15px;
}
.gc-main-title {
  line-height: 60px;
  height: 60px;
  margin-left: 40px;
  padding-top: 10px;
  font-size: 18px;
  font-weight: bold;
}
.gc-main-event {
  width: 1200px;
  margin: 0 auto;
}
.gc-main-radio {
  width: 600px;
  margin-left: 5px;
  margin-top: 25px;
}
.gc-main-radio-title {
  float: left;
  width: 60px;
  text-align: right;
  margin-top: 4px;
}
.gc-main-gatherTrend {
  margin-top: 50px;
}
.gc-main-gatherTrend-title,
.gc-main-dataSource-title,
.gc-main-allData-title {
  font-size: 25px;
  font-weight: bold;
}
.gc-main-gatherTrend-image {
  height: 500px;
  padding-top: 35px;
}
.gc-main-dataSource,
.gc-main-allData {
  margin-top: 50px;
}
.passed-page {
  width: 100%;
  margin-top: 25px;
}
</style>