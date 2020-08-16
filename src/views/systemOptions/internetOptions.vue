<template>
    <div class="content">
        <div class="so-main-classification">
            <el-scrollbar style="height:100%" >
                <el-tree :data="internetCate" default-expand-all @node-click="nodeClick"></el-tree>
            </el-scrollbar>
        </div>
        <div class="so-main-event">
            <div class="so-event-title">{{modelName}}</div>
            <div class="so-event-subtitle">模型描述</div>
            <div class="so-event-content">{{modelDescription}}</div>
            <div class="so-event-subtitle">模型规则配置</div>
            <el-input style="width: 300px; float: right;margin-bottom: 30px" v-model="ruleSearchValue" placeholder="请输入关键词"></el-input>
            <el-table :data="ruleDisplayData" highlight-current-row>
                <el-table-column prop="id" label="序号" width="150" show-overflow-tooltip>
                    <template slot-scope="scope">{{ scope.row.id}}</template>
                </el-table-column>
                <el-table-column prop="name" label="规则名称" width="200" show-overflow-tooltip>
                    <template slot-scope="scope">{{ scope.row.name}}</template>
                </el-table-column>
                <el-table-column prop="regular" label="模型特征" width="300" show-overflow-tooltip>
                    <template slot-scope="scope">{{ scope.row.regular}}</template>
                </el-table-column>
                <el-table-column prop="weight" label="权重" width="150" show-overflow-tooltip>
                    <template slot-scope="scope">{{ scope.row.weight}}</template>
                </el-table-column>
                <el-table-column align="right">
                    <template slot-scope="scope">
                    <el-button size="mini" type="danger" @click="deleteRule(scope.row.id)">删除</el-button>
                    <el-button size="mini" type="primary" @click="editRule(scope.row.id, scope.$index)">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="passed-page">
            <el-pagination @current-change="handleRuleCurrentChange"
                :current-page="ruleCurrentPage" :page-size="rulePagesize"
                layout="prev, pager, next, jumper" :total="ruleTableData.length" 
                style="width: 300px; max-width: 550px;margin: 0 auto"> </el-pagination>
            </div>
            <div class="so-event-subtitle">模型实例训练与管理</div>
            <el-input style="width: 300px; float: right;margin-bottom: 30px" v-model="modelSearchValue" placeholder="请输入关键词"></el-input>
            <el-table :data="modelDisplayData" highlight-current-row>
                <el-table-column prop="id" label="序号" width="150" show-overflow-tooltip>
                    <template slot-scope="scope">{{ scope.row.id}}</template>
                </el-table-column>
                <el-table-column prop="name" label="模型名称" width="120" show-overflow-tooltip>
                    <template slot-scope="scope">{{ scope.row.name}}</template>
                </el-table-column>
                <el-table-column prop="dataset" label="数据集" width="200" show-overflow-tooltip>
                    <template slot-scope="scope">{{ scope.row.dataset}}</template>
                </el-table-column>
                <el-table-column prop="trainingTime" label="训练时间" width="200" show-overflow-tooltip>
                    <template slot-scope="scope">{{ scope.row.trainingTime}}</template>
                </el-table-column>
                <el-table-column label="发布" width="120">
                    <template slot-scope="scope">
                        <el-switch
                        v-model="scope.row.releaseValue"
                        @click="getTaskContent(scope.row.id)">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="启用规则" width="120">
                    <template slot-scope="scope">
                        <el-switch
                        v-model="scope.row.ruleValue"
                        @click="getTaskContent(scope.row.id)">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column align="right">
                    <template slot-scope="scope">
                    <el-button size="mini" type="danger" @click="deleteModel(scope.row.id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="passed-page">
            <el-pagination @current-change="handleModelCurrentChange"
                :current-page="modelCurrentPage" :page-size="modelPagesize"
                layout="prev, pager, next, jumper" :total="modelTableData.length" 
                style="width: 300px; max-width: 550px;margin: 0 auto"> </el-pagination>
            </div>
        </div>
        <el-dialog title="编辑模型规则" :visible.sync="editFlag" width="800px" top="30vh" center>
            <el-form ref="form" :model="ruleForm" label-width="100px">
                <el-form-item label="序号">
                    <span>{{ruleForm.id}}</span>
                </el-form-item>
                <el-form-item label="规则名称">
                    <el-input v-model="ruleForm.name" maxlength="20" show-word-limit></el-input>
                </el-form-item>
                <el-form-item label="模型特征">
                    <el-input type="textarea" v-model="ruleForm.regular" autosize></el-input>
                </el-form-item>
                <el-form-item label="权重">
                    <el-input v-model="ruleForm.weight"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editFlag = false">返 回</el-button>
                <el-button type="primary" @click="publishRule">提 交</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import mydata from "@/data/data.js";
export default {
    name: "internetOptions",
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
        return mydata.internetOptions
    },
    mounted() {
        this.init();
    },
    methods: {
        init(){
            this.modelRemoteMethod("");
            this.ruleRemoteMethod("");
            this.modelName = this.models[0].name
            this.modelDescription = this.models[0].description
        },
        nodeClick(data){
            if(data.id === 1)
                return;
            let index = 0;
            for(var i = 0; i < this.models.length; i++){
                if(data.label === this.models[i].name){
                    index = i;
                    break;
                }
            }
            this.modelName = this.models[index].name;
            this.modelDescription = this.models[index].description
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
        deleteRule(id){
            this.$confirm('此操作将永久删除该规则, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                let index = 0;
                for(var i = 0; i < this.ruleApplications.length; i++){
                    if(this.ruleApplications[i].id === id){
                        index = i
                        break;
                    }
                }
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
        deleteModel(id){
            this.$confirm('此操作将永久删除该模型, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                let index = 0;
                for(var i = 0; i < this.modelApplications.length; i++){
                    if(this.modelApplications[i].id === id){
                        index = i
                        break;
                    }
                }
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
        },
        editRule(idt, index){
            this.editFlag = true;
            for(var i = 0; i < this.ruleApplications.length; i++){
                if(this.ruleApplications[i].id === idt){
                    this.editIndex = i
                    break;
                }
            }
            this.ruleForm.id = this.ruleDisplayData[index].id;
            this.ruleForm.name = this.ruleDisplayData[index].name;
            this.ruleForm.regular = this.ruleDisplayData[index].regular;
            this.ruleForm.weight = this.ruleDisplayData[index].weight;
        },
        publishRule(){
            this.ruleApplications[this.editIndex].id = this.ruleForm.id;
            this.ruleApplications[this.editIndex].name = this.ruleForm.name;
            this.ruleApplications[this.editIndex].regular = this.ruleForm.regular;
            this.ruleApplications[this.editIndex].weight = this.ruleForm.weight;
            this.ruleRemoteMethod(this.ruleSearchValue);
            this.editFlag = false;
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
    line-height: 30px;
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