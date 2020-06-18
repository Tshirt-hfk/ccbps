<template>
    <div class="content">
        <div class="so-main-classification">
            <el-scrollbar style="height:100%" >
                <el-tree :data="illegalCate" default-expand-all></el-tree>
            </el-scrollbar>
        </div>
        <div class="so-main-event">
            <div class="so-event-title">中奖类诈骗事件识别模型</div>
            <div class="so-event-subtitle">模型描述</div>
            <div class="so-event-content">{{modelDescription}}</div>
            <div class="so-event-subtitle">模型规则配置</div>
            <el-input style="width: 300px; float: right;margin-bottom: 30px" v-model="ruleSearchValue" placeholder="请输入关键词"></el-input>
            <el-table :data="ruleDisplayData">
                <el-table-column prop="id" label="序号" width="150">
                    <template slot-scope="scope">{{ scope.row.id}}</template>
                </el-table-column>
                <el-table-column prop="name" label="规则名称" width="150">
                    <template slot-scope="scope">{{ scope.row.name}}</template>
                </el-table-column>
                <el-table-column prop="regular" label="正则表达式" width="300">
                    <template slot-scope="scope">{{ scope.row.regular}}</template>
                </el-table-column>
                <el-table-column prop="weight" label="权重" width="150">
                    <template slot-scope="scope">{{ scope.row.weight}}</template>
                </el-table-column>
                <el-table-column align="right">
                    <template slot-scope="scope">
                    <el-button size="mini" type="danger" @click="deleteRule(scope.$index)">删除</el-button>
                    <el-button size="mini" type="primary" @click="getTaskContent(scope.row.id)">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="passed-page">
            <el-pagination @current-change="handleRuleCurrentChange"
                :current-page="ruleCurrentPage" :page-size="rulePagesize"
                layout="total, prev, pager, next, jumper" :total="ruleTableData.length" 
                style="width: 300px; max-width: 550px;margin: 0 auto"> </el-pagination>
            </div>
            <div class="so-event-subtitle">模型实例训练与管理</div>
            <el-input style="width: 300px; float: right;margin-bottom: 30px" v-model="modelSearchValue" placeholder="请输入关键词"></el-input>
            <el-table :data="modelDisplayData" @cell-click='cellClick'>
                <el-table-column prop="id" label="序号" width="150">
                    <template slot-scope="scope">{{ scope.row.id}}</template>
                </el-table-column>
                <el-table-column prop="name" label="模型名称" width="120">
                    <template slot-scope="scope">{{ scope.row.name}}</template>
                </el-table-column>
                <el-table-column prop="dataset" label="数据集" width="200">
                    <template slot-scope="scope">{{ scope.row.dataset}}</template>
                </el-table-column>
                <el-table-column prop="trainingTime" label="训练时间" width="200">
                    <template slot-scope="scope">{{ scope.row.trainingTime}}</template>
                </el-table-column>
                <el-table-column label="发布" width="120">
                    <template slot-scope="scope">
                        <el-switch
                        v-model="releaseValue"
                        @click="getTaskContent(scope.row.id)">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="启用规则" width="120">
                    <template slot-scope="scope">
                        <el-switch
                        v-model="ruleValue"
                        @click="getTaskContent(scope.row.id)">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column align="right">
                    <template slot-scope="scope">
                    <el-button size="mini" type="danger" @click="deleteModel(scope.$index)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="passed-page">
            <el-pagination @current-change="handleModelCurrentChange"
                :current-page="modelCurrentPage" :page-size="modelPagesize"
                layout="total, prev, pager, next, jumper" :total="modelTableData.length" 
                style="width: 300px; max-width: 550px;margin: 0 auto"> </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import mydata from "@/data/data.js";
export default {
    name: "illegalOptions",
    watch:{
        ruleSearchValue:{
        handler(n, o){
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
            this.ruleRemoteMethod(n);
            }, 300);
        }
        },
        modelSearchValue:{
        handler(n, o){
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
            this.modelRemoteMethod(n);
            }, 300);
        }
        }
    },
    data() {
        return mydata.illegalOptions
    },
    mounted() {
        this.init();
    },
    methods: {
        init(){
            this.modelRemoteMethod("");
            this.ruleRemoteMethod("");
        },
        handleRuleCurrentChange(val) {
            this.ruleCurrentPage = val;
            let indexleft = val - 1;
            let size = this.rulePagesize;
            this.ruleDisplayData = this.ruleTableData.slice(indexleft*size, val*size);
        },
        // filter
        ruleRemoteMethod(query) {
            this.ruleTableData = this.ruleApplications.filter(entry => {
                return entry.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
            });
            this.ruleDisplayData = this.ruleTableData.slice(0, this.rulePagesize);
        },
        handleModelCurrentChange(val) {
            this.modelCurrentPage = val;
            let indexleft = val - 1;
            let size = this.modelPagesize;
            this.modelDisplayData = this.modelTableData.slice(indexleft*size, val*size);
        },
        // filter
        modelRemoteMethod(query) {
            this.modelTableData = this.modelApplications.filter(entry => {
                return entry.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
            });
            this.modelDisplayData = this.modelTableData.slice(0, this.modelPagesize);
        },
        deleteRule(index){
            this.$confirm('此操作将永久删除该规则, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.ruleApplications.splice(index, 1);
                this.ruleRemoteMethod(this.ruleSearchValue);
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
        deleteModel(index){
            this.$confirm('此操作将永久删除该模型, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.modelApplications.splice(index, 1);
                this.modelRemoteMethod(this.modelSearchValue);
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
        }
    }
}
</script>

<style scoped>
.so-main-classification{
    width: 220px;
    height: 660px;
    border-right: solid 2px #DCDFE6;
    float: left;
    position: absolute;
    top: 200px;
    bottom: 40px;
    padding-left: 20px;
}
.so-main-tabs{
    width: 1200px;
    margin: 0 auto;
}
.so-main-event{
    width: 1000px;
    margin-left: 260px;
}
.so-event-title{
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  margin: 25px 0 20px 0;
  font-weight: bold;
}
.so-event-subtitle{
  height: 30px;
  color: #666;
  line-height: 30px;
  font-size: 18px;
  margin: 25px 0 20px 35px;
  font-weight: bold;
}
.so-event-subtitle::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 25px;
  background-color: #4d95dc;
  position: absolute;
  margin-left: -25px;
  margin-top: 4px;
}
.so-event-content{
    margin: 0 0 30px 10px;
}
.so-main-radio{
    width: 600px;
    margin-left: 5px;
    margin-top: 15px;
}
.so-main-radio-title{
    float: left;
    width: 80px;
    text-align: right;
    margin-top: 4px;
}
.passed-page{
  width: 100%;
  margin-top: 25px;
}
</style>

<style>
.el-scrollbar__wrap
{
  overflow-x: hidden;
}
</style>