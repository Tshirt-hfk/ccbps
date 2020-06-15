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
                    <el-radio-button label="论坛"></el-radio-button>
                </el-radio-group>
            </div>
            <div class="gc-main-gatherTrend">
                <div class="gc-main-gatherTrend-title">采集量趋势</div>
                <div id="chartLineBox" class="gc-main-gatherTrend-image"> </div>
            </div>
            <div class="gc-main-dataSource">
                <div class="gc-main-dataSource-title">数据源设置</div>
                <el-input style="width: 300px; float: right;margin-bottom: 10px;" v-model="searchValue" placeholder="请输入关键词"></el-input>
                <el-table :data="displayData">
                    <el-table-column prop="id" label="序号" width="150">
                        <template slot-scope="scope">{{ scope.row.id}}</template>
                    </el-table-column>
                    <el-table-column prop="source" label="数据源" width="150">
                        <template slot-scope="scope">{{ scope.row.source}}</template>
                    </el-table-column>
                    <el-table-column prop="address" label="地址" width="200">
                        <template slot-scope="scope">{{ scope.row.address}}</template>
                    </el-table-column>
                    <el-table-column prop="xpath" label="xpath" width="320">
                        <template slot-scope="scope">{{ scope.row.xpath}}</template>
                    </el-table-column>
                    <el-table-column prop="weight" label="权重" width="200">
                        <template slot-scope="scope">{{ scope.row.weight}}</template>
                    </el-table-column>
                    <el-table-column align="right">
                        <template slot-scope="scope">
                        <el-button size="mini" type="danger" @click="getTaskContent(scope.row.id)">删除</el-button>
                        <el-button size="mini" type="primary" @click="getTaskContent(scope.row.id)">编辑</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="passed-page">
                <el-pagination @current-change="handleCurrentChange"
                    :current-page="currentPage" :page-size="pagesize"
                    layout="total, prev, pager, next, jumper" :total="tableData.length" 
                    style="width: 300px; max-width: 550px;margin: 0 auto"> </el-pagination>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>

import echarts from 'echarts';
import mydata from "@/data/data.js";
export default {
    name: "gatheringCenter",
    watch:{
        searchValue:{
        handler(n, o){
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
            this.remoteMethod(n);
            }, 300);
        }
        }
    },
    data() {
        return mydata.gatheringCenter
    },
    mounted() {
        this.init();
    },
    methods: {
        init(){
            this.applications = this.displayData
            this.tableData = this.displayData
            this.chartLine = echarts.init(document.getElementById('chartLineBox'));
 
            // 指定图表的配置项和数据
            var option = {
                tooltip: {              //设置tip提示
                    trigger: 'axis'
                },
                
                legend: {               //设置区分（哪条线属于什么）
                    data:['微信','微博','新闻']
                },
                color: ['#8AE09F', '#c23531', '#6e7074'],       //设置区分（每条线是什么颜色，和 legend 一一对应）
                xAxis: {                //设置x轴
                    type: 'category',
                    boundaryGap: false,     //坐标轴两边不留白
                    data: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30'],
                    name: 'DATE',           //X轴 name
                    nameTextStyle: {        //坐标轴名称的文字样式
                        color: '#FA6F53',
                        fontSize: 16,
                        padding: [0, 0, 0, 20]
                    },
                    axisLine: {             //坐标轴轴线相关设置。
                        lineStyle: {
                            color: '#FA6F53',
                        }
                    }
                },
                yAxis: {
                    name: 'SALES VOLUME',
                    nameTextStyle: {
                        color: '#FA6F53',
                        fontSize: 16,
                        padding: [0, 0, 10, 0]
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#FA6F53',
                        }
                    },
                    type: 'value'
                },
                series: [
                {
                    name: '微信',
                    data:  [4500, 200, 3100, 4000, 3100, 2900, 2000, 6000, 5000, 2500],
                    type: 'line',               // 类型为折线图
                    lineStyle: {                // 线条样式 => 必须使用normal属性
                        normal: {
                            color: '#8AE09F',
                        }
                    },
                },
                {
                    name: '微博',
                    data: [1000, 1800, 800, 5000, 4200, 6800, 800, 5800, 4000, 3200],
                    type: 'line',
                    lineStyle: {
                        normal: {
                            color: '#c23531',
                        }
                    },
                },
                {
                    name: '新闻',
                    data: [3000, 1000, 3000, 3000, 5500, 3800, 4500, 7000, 5200, 6000],
                    type: 'line',
                    lineStyle: {
                        normal: {
                            color: '#6e7074',
                        }
                    },
                }
            ]
            };
    
            // 使用刚指定的配置项和数据显示图表。
            this.chartLine.setOption(option);
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            let indexleft = val - 1;
            let size = this.pagesize;
            this.displayData = this.tableData.slice(indexleft*size, val*size);
        },
        // filter
        remoteMethod(query) {
            if (query !== "") {
                this.tableData = this.applications.filter(entry => {
                return entry.source.toLowerCase().indexOf(query.toLowerCase()) > -1;
                });
                this.displayData = this.tableData.slice(0, this.pagesize);
            } else {
                this.tableData = this.applications;
                this.displayData = this.tableData.slice(0, this.pagesize);
            }
        },
    }
}
</script>

<style scoped>
.gc-layout{
    width: 100%;
    position: absolute;
    top: 85px;
}
.gc-main{
    width: 1280px;
    min-height: 860px;
    background-color: #FFFFFF;
    margin: 0 auto;
    margin-bottom: 15px;
}
.gc-main-title{
  line-height: 60px;
  height: 60px;
  margin-left: 40px;
  padding-top: 10px;
  font-size: 18px;
  font-weight: bold;
}
.gc-main-event{
    width: 1200px;
    margin: 0 auto;
}
.gc-main-radio{
    width: 600px;
    margin-left: 5px;
    margin-top: 25px;
}
.gc-main-radio-title{
    float: left;
    width: 60px;
    text-align: right;
    margin-top: 4px;
}
.gc-main-gatherTrend{
    margin-top: 50px;
}
.gc-main-gatherTrend-title, .gc-main-dataSource-title{
    font-size: 25px;
    font-weight: bold;
}
.gc-main-gatherTrend-image{
    height: 500px;
    padding-top: 35px;
}
.gc-main-dataSource{
    margin-top: 50px;
}
.passed-page{
  width: 100%;
  margin-top: 25px;
}
</style>