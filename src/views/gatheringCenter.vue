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
                <el-input style="width: 300px; float: right;margin-bottom: 10px;" v-model="sourceSearchValue" placeholder="请输入关键词"></el-input>
                <el-table :data="sourceDisplayData">
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
                        <el-button size="mini" type="danger" @click="deleteSource(scope.row.id)">删除</el-button>
                        <el-button size="mini" type="primary" @click="editSource(scope.row.id, scope.$index)">编辑</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="passed-page">
                <el-pagination @current-change="handleSourceCurrentChange"
                    :current-page="sourceCurrentPage" :page-size="sourcePagesize"
                    layout="total, prev, pager, next, jumper" :total="sourceTableData.length" 
                    style="width: 300px; max-width: 550px;margin: 0 auto"> </el-pagination>
                </div>
            </div>
            <div class="gc-main-allData">
                <div class="gc-main-allData-title">全量数据</div>
                <el-input style="width: 300px; float: right;margin-bottom: 10px;" v-model="allSearchValue" placeholder="请输入关键词"></el-input>
                <el-table :data="allDisplayData">
                    <el-table-column prop="id" label="序号" width="150">
                        <template slot-scope="scope">{{ scope.row.id}}</template>
                    </el-table-column>
                    <el-table-column prop="title" label="标题" width="150">
                        <template slot-scope="scope">{{ scope.row.title}}</template>
                    </el-table-column>
                    <el-table-column prop="content" label="正文" width="200">
                        <template slot-scope="scope">{{ scope.row.content}}</template>
                    </el-table-column>
                    <el-table-column prop="time" label="时间" width="320">
                        <template slot-scope="scope">{{ scope.row.time}}</template>
                    </el-table-column>
                    <el-table-column prop="from" label="来源" width="200">
                        <template slot-scope="scope">{{ scope.row.from}}</template>
                    </el-table-column>
                    <el-table-column align="right">
                        <template slot-scope="scope">
                        <el-button size="mini" type="danger" @click="deleteSource(scope.row.id)">删除</el-button>
                        <el-button size="mini" type="primary" @click="editSource(scope.row.id, scope.$index)">编辑</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="passed-page">
                <el-pagination @current-change="handleAllCurrentChange"
                    :current-page="allCurrentPage" :page-size="allPagesize"
                    layout="total, prev, pager, next, jumper" :total="allTableData.length" 
                    style="width: 300px; max-width: 550px;margin: 0 auto"> </el-pagination>
                </div>
            </div>
        </div>
        <el-dialog title="编辑数据源" :visible.sync="editFlag" width="800px" top="30vh" center>
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
                    <el-input v-model="sourceForm.xpath" autosize></el-input>
                </el-form-item>
                <el-form-item label="权重">
                    <el-input v-model="sourceForm.weight"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editFlag = false">返 回</el-button>
                <el-button type="primary" @click="publishSource">提 交</el-button>
            </span>
        </el-dialog>
    </div>
    </div>
</template>

<script>

import echarts from 'echarts';
import mydata from "@/data/data.js";
export default {
    name: "gatheringCenter",
    watch:{
        sourceSearchValue:{
            handler(n, o){
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                this.sourceRemoteMethod(n);
                }, 300);
            }
        },
        allSearchValue:{
            handler(n, o){
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                this.allRemoteMethod(n);
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
            this.sourceRemoteMethod("");
            this.allRemoteMethod("");
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
        handleSourceCurrentChange(val) {
            this.sourceCurrentPage = val;
            let indexleft = val - 1;
            let size = this.sourcePagesize;
            this.sourceDisplayData = this.sourceTableData.slice(indexleft*size, val*size);
        },
        // filter
        sourceRemoteMethod(query) {
            this.sourceTableData = this.sourceApplications.filter(entry => {
                return entry.source.toLowerCase().indexOf(query.toLowerCase()) > -1;
            });
            this.sourceDisplayData = this.sourceTableData.slice(0, this.sourcePagesize);
        },
        handleAllCurrentChange(val) {
            this.allCurrentPage = val;
            let indexleft = val - 1;
            let size = this.allPagesize;
            this.allDisplayData = this.allTableData.slice(indexleft*size, val*size);
        },
        // filter
        allRemoteMethod(query) {
            this.allTableData = this.allApplications.filter(entry => {
                return entry.title.toLowerCase().indexOf(query.toLowerCase()) > -1;
            });
            this.allDisplayData = this.allTableData.slice(0, this.allPagesize);
        },
        deleteSource(id){
            this.$confirm('此操作将永久删除该数据源, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                let index = 0;
                for(var i = 0; i < this.applications.length; i++){
                    if(this.applications[i].id === id){
                        index = i
                        break;
                    }
                }
                this.applications.splice(index, 1);
                this.remoteMethod(this.searchValue);
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
                });
        },
        editSource(idt, index){
            this.editFlag = true;
            for(var i = 0; i < this.applications.length; i++){
                if(this.applications[i].id === idt){
                    this.editIndex = i
                    break;
                }
            }
            this.sourceForm.id = this.displayData[index].id;
            this.sourceForm.source = this.displayData[index].source;
            this.sourceForm.address = this.displayData[index].address;
            this.sourceForm.xpath = this.displayData[index].xpath;
            this.sourceForm.weight = this.displayData[index].weight;
        },
        publishSource(){
            this.applications[this.editIndex].id = this.sourceForm.id;
            this.applications[this.editIndex].source = this.sourceForm.source;
            this.applications[this.editIndex].address = this.sourceForm.address;
            this.applications[this.editIndex].xpath = this.sourceForm.xpath;
            this.applications[this.editIndex].weight = this.sourceForm.weight;
            this.remoteMethod(this.searchValue);
            this.editFlag = false;
        }
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
.gc-main-gatherTrend-title, .gc-main-dataSource-title, .gc-main-allData-title{
    font-size: 25px;
    font-weight: bold;
}
.gc-main-gatherTrend-image{
    height: 500px;
    padding-top: 35px;
}
.gc-main-dataSource, .gc-main-allData{
    margin-top: 50px;
}
.passed-page{
  width: 100%;
  margin-top: 25px;
}
</style>