<template>
  <div class="em-layout">
    <el-button type="primary" icon="el-icon-plus" @click="userCreateFlag=true">新建用户</el-button>
    <!-- <userCreate :entryCreateFlag.sync="userCreateFlag"></userCreate> -->
    <el-input style="width: 300px; float: right;margin-bottom: 10px;" v-model="searchValue" placeholder="请输入关键词"></el-input>
    <el-table :data="displayData" style="width: 100%" highlight-current-row>
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="name" label="用户名" width="150" show-overflow-tooltip>
        <template slot-scope="scope">{{ scope.row.name}}</template>
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="250" show-overflow-tooltip>
        <template slot-scope="scope">{{ scope.row.email}}</template>
      </el-table-column>
      <el-table-column prop="userGroup" label="用户组" width="150" show-overflow-tooltip>
        <template slot-scope="scope">{{ scope.row.userGroup}}</template>
      </el-table-column>
      <el-table-column prop="role" label="角色" width="150" show-overflow-tooltip>
        <template slot-scope="scope">{{ scope.row.role}}</template>
      </el-table-column>
      <el-table-column align="right">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="deleteUser(scope.row.name)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="passed-page">
      <el-pagination @current-change="handleCurrentChange"
        :current-page="currentPage" :page-size="pagesize"
        layout="total, prev, pager, next, jumper" :total="tableData.length" 
        style="width: 300px; max-width: 550px;margin: 0 auto"> </el-pagination>
        <!-- <el-pagination @current-change="handleCurrentChange"
        :current-page="1" 
        :page-size="1"
        layout="total, prev, pager, next, jumper" :total="tableData.length" 
        style="width: 300px; max-width: 550px;margin: 0 auto"> </el-pagination> -->
    </div>
  </div>
</template>

<script>

import moment from 'moment'

export default {
  name: "userManagement",
//   components:{
//     userCreate,

//   },
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
      userCreateFlag: false,
    //   rejectFlag: false,
      searchValue: '',
    //   drawerFlag: false,
    //   relationData: [],
    //   reason:"",
      form: {
        name: "",
        email: "",
        userGroup: "",
        role: ""
      },
      timeout: null,
      currentPage: 1,
      pagesize: 5,
      applications: [{
            name: "sxc",
            email: "887283y@qq.com",
            userGroup: "外包A",
            role: "普通用户"
          },
          {
            name: "石原里美",
            email: "21092830@qq.com",
            userGroup: "外包A",
            role: "普通用户"
          },
          {
            name: "新垣结衣",
            email: "eq8wueqwu@qq.com",
            userGroup: "外包A",
            role: "普通用户"
          },
          {
            name: "长泽雅美",
            email: "887283y@qq.com",
            userGroup: "外包A",
            role: "普通用户"
          },
          {
            name: "妻夫木聪",
            email: "21092830@qq.com",
            userGroup: "外包A",
            role: "普通用户"
          },
          {
            name: "柏原崇",
            email: "eq8wueqwu@qq.com",
            userGroup: "外包A",
            role: "普通用户"
          }],
      displayData: [],
      tableData: [],
    };
  },
  mounted() {
    this.init();
  },
  filters: {
      formatDate: function (value) {
        return moment(value).format('YYYY-MM-DD HH:mm:ss')
      }
  },
  methods: {
    init() {
      this.remoteMethod("");
    },
    stateChange(state){
      this.$emit('stateChange', state)
    },
    // 分页功能
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
    deleteUser(name){
        this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
            let index = 0;
            for(var i = 0; i < this.applications.length; i++){
                if(this.applications[i].name === name){
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
    handleClose(done) {
      this.drawerFlag = false;
    }
  }
};
</script>

<style scoped>
.em-layout{
    width: 80%;
    height: 100%;
    margin: 0 auto;
    margin-top: 50px;
}
.passentry-version{
  text-decoration: underline;
  cursor: pointer;
  color: #1296db;
}
.passed-page{
  width: 100%;
  margin-top: 25px;
}
</style>