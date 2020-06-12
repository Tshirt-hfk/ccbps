<template>
    <div class="so-layout">
    <div class="so-main">
        <div class="so-main-title">系统设置</div>
        <div class="so-main-tabs">
            <el-tabs v-model="tabActiveName" @tab-click="handleTabClick">
            <el-tab-pane label="网络诈骗" name="first"></el-tab-pane>
            <el-tab-pane label="非法集资" name="second"></el-tab-pane>
            </el-tabs>
        </div>
        <div class="so-main-classification">
            <el-tree :data="data" default-expand-all></el-tree>
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
                    <el-button size="mini" type="danger" @click="getTaskContent(scope.row.id)">删除</el-button>
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
                    <el-button size="mini" type="danger" @click="getTaskContent(scope.row.id)">删除</el-button>
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
    </div>
</template>

<script>

export default {
    name: "systemOptions",
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
        return {
            data: [{
                id: 1,
                label: '模型列表',
                children: [{
                    id: 2,
                    label: '微信中奖',
                    children: [{
                    id: 3,
                    label: '三级 1-1-1'
                    }, {
                    id: 4,
                    label: '三级 1-1-2'
                    }]
                }, {
                    id: 5,
                    label: '彩票中奖',
                    children: [{
                        id: 6,
                        label: '三级 1-2-1'
                    }, {
                        id: 7,
                        label: '三级 1-2-2'
                    }]
                }, {
                    id: 8,
                    label: '二级 2-2'
                }, {
                    id: 9,
                    label: '二级 2-3'
                }]
            }],
            modelDescription: '微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖微信中奖',
            tabActiveName: 'first',   // 标签页选项卡
            radio1: '近24小时',  // 筛选选项
            radio2: '全部',
            radio3: '5千元以下',
            //  规则配置
            ruleSearchValue: '',    // 规则配置搜索框数据
            ruleCurrentPage: 1,    // 规则配置当前页
            rulePagesize: 10,      // 规则配置每页条目数
            ruleApplications: [],   // 规则配置所有数据
            ruleTableData: [],   // 规则配置目前列表数据
            ruleDisplayData: [{   // 规则配置当前页显示数据
                id: 'ID43321432',
                name: '微信',
                regular: '//*[@id="cnblogs_post_body"]/p[39]/',
                weight: '50000.00'
            }],
            // 模型
            modelSearchValue: '',    // 模型搜索框数据
            modelCurrentPage: 1,    // 模型当前页
            modelPagesize: 10,      // 模型每页条目数
            modelApplications: [],   // 模型所有数据
            modelTableData: [],   // 模型目前列表数据
            modelDisplayData: [{   // 模型当前页显示数据
                id: 'ID43321432',
                name: '微信',
                dataset: 'dataset-2020-05-06.zip',
                trainingTime: '2020-05-22 19:45:32'
            }],
            releaseValue: false,     // 模型是否发布
            ruleValue: false,  // 模型规则是否启用
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init(){
            this.ruleApplications = this.ruleDisplayData
            this.ruleTableData = this.ruleDisplayData
            this.modelApplications = this.modelDisplayData
            this.modelTableData = this.modelDisplayData
        },
        handleRuleCurrentChange(val) {
            this.ruleCurrentPage = val;
            let indexleft = val - 1;
            let size = this.rulePagesize;
            this.ruleDisplayData = this.ruleTableData.slice(indexleft*size, val*size);
        },
        // filter
        ruleRemoteMethod(query) {
            if (query !== "") {
                this.ruleTableData = this.ruleApplications.filter(entry => {
                return entry.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
                });
                this.ruleDisplayData = this.ruleTableData.slice(0, this.rulePagesize);
            } else {
                this.ruleTableData = this.ruleApplications;
                this.ruleDisplayData = this.ruleTableData.slice(0, this.rulePagesize);
            }
        },
        handleModelCurrentChange(val) {
            this.modelCurrentPage = val;
            let indexleft = val - 1;
            let size = this.modelPagesize;
            this.modelDisplayData = this.modelTableData.slice(indexleft*size, val*size);
        },
        // filter
        modelRemoteMethod(query) {
            if (query !== "") {
                this.modelTableData = this.modelApplications.filter(entry => {
                return entry.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
                });
                this.modelDisplayData = this.modelTableData.slice(0, this.modelPagesize);
            } else {
                this.modelTableData = this.modelApplications;
                this.modelDisplayData = this.modelTableData.slice(0, this.modelPagesize);
            }
        },
        handleTabClick(){

        },
    }
}
</script>

<style scoped>
.so-layout{
    width: 100%;
    position: absolute;
    top: 85px;
}
.so-main{
    width: 1280px;
    min-height: 860px;
    background-color: #FFFFFF;
    margin: 0 auto;
    margin-bottom: 15px;
}
.so-main-title{
  height: 80px;
  text-align: center;
  line-height: 80px;
  font-size: 25px;
  color: #666;
  margin: 0 0 20px 0;
  padding: 25px 0 0 0;
}
.so-main-classification{
    width: 200px;
    border-right: solid 1px #409eff;
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
    margin-left: 250px;
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