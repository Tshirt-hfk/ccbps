<template>
    <div class="if-layout">
    <div class="if-main">
        <div class="if-main-title">网络诈骗/案件概览</div>
        <div class="if-main-classification">
            <el-tree :data="data" default-expand-all></el-tree>
        </div>
        <div class="if-main-event">
            <div class="if-main-radio">
                <div class="if-main-radio-title">时间：</div>
                <el-radio-group v-model="radio1" size="small">
                    <el-radio-button label="近24小时"></el-radio-button>
                    <el-radio-button label="近7天"></el-radio-button>
                    <el-radio-button label="近30天"></el-radio-button>
                </el-radio-group>
            </div>
            <div class="if-main-radio">
                <div class="if-main-radio-title">来源：</div>
                <el-radio-group v-model="radio2" size="small">
                    <el-radio-button label="全部"></el-radio-button>
                    <el-radio-button label="微信"></el-radio-button>
                    <el-radio-button label="微博"></el-radio-button>
                    <el-radio-button label="论坛"></el-radio-button>
                </el-radio-group>
            </div>
            <div class="if-main-radio">
                <div class="if-main-radio-title">涉案金额：</div>
                <el-radio-group v-model="radio3" size="small">
                    <el-radio-button label="5千元以下"></el-radio-button>
                    <el-radio-button label="5千元-5万元"></el-radio-button>
                    <el-radio-button label="5万-50万"></el-radio-button>
                    <el-radio-button label="50万以上"></el-radio-button>
                </el-radio-group>
            </div>
            <el-input style="width: 300px; float: right;margin-bottom: 30px;margin-top: -40px" v-model="searchValue" placeholder="请输入关键词"></el-input>
            <el-table :data="displayData">
                <el-table-column prop="id" label="序号" width="120">
                    <template slot-scope="scope">{{ scope.row.id}}</template>
                </el-table-column>
                <el-table-column prop="name" label="事件名称" width="180">
                    <template slot-scope="scope">{{ scope.row.name}}</template>
                </el-table-column>
                <el-table-column prop="field" label="类别" width="120">
                    <template slot-scope="scope">{{ scope.row.field}}</template>
                </el-table-column>
                <el-table-column prop="source" label="来源" width="120">
                    <template slot-scope="scope">{{ scope.row.source}}</template>
                </el-table-column>
                <el-table-column prop="date" label="发现日期" width="200">
                    <template slot-scope="scope">{{ scope.row.date}}</template>
                </el-table-column>
                <el-table-column prop="money" label="涉案金额" width="150">
                    <template slot-scope="scope">{{ scope.row.money}}</template>
                </el-table-column>
                <el-table-column align="right">
                    <template slot-scope="scope">
                    <el-button size="mini" type="primary" @click="getTaskContent(scope.row.id)">查看</el-button>
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
</template>

<script>

export default {
    name: "internetFraud",
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
        return {
            data: [{
                id: 1,
                label: '网络诈骗分类体系',
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
            radio1: '近24小时',  // 筛选选项
            radio2: '全部',
            radio3: '5千元以下',
            searchValue: '',    // 搜索框数据
            currentPage: 1,
            pagesize: 10,      // 每页条目数
            applications: [],   // 所有数据
            tableData: [],   // 目前列表数据
            displayData: [{   // 当前页显示数据
                id: 'ID43321432',
                name: 'xxx诈骗事件',
                field: '微信中奖',
                source: '微信',
                date: '2020-05-22 19:45:32',
                money: '50000.00'
            }],
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init(){
            this.applications = this.displayData
            this.tableData = this.displayData
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
                return entry.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
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
.if-layout{
    width: 100%;
    position: absolute;
    top: 85px;
    bottom: 0px;
}
.if-main{
    width: 1280px;
    height: 100%;
    background-color: #FFFFFF;
    margin: 0 auto;
}
.if-main-title{
  height: 80px;
  text-align: center;
  line-height: 80px;
  font-size: 25px;
  color: #666;
  margin: 0 0 40px 0;
  padding: 25px 0 0 0;
}
.if-main-classification{
    width: 200px;
    border-right: solid 1px #409eff;
    float: left;
    position: absolute;
    top: 150px;
    bottom: 0px;
    padding-left: 20px;
}
.if-main-event{
    width: 1000px;
    margin-left: 250px;
}
.if-main-radio{
    width: 600px;
    margin-left: 5px;
    margin-top: 15px;
}
.if-main-radio-title{
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