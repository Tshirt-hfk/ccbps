<template>
  <div class="if-layout">
    <div class="if-main">
      <div class="if-main-title">网络诈骗/案件概览</div>
      <div class="if-main-classification">
        <el-scrollbar style="height:100%" >
          <el-tree :data="categories" default-expand-all></el-tree>
        </el-scrollbar>
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
        <el-input
          style="width: 300px; float: right;margin-bottom: 30px;margin-top: -40px"
          v-model="searchValue"
          placeholder="请输入关键词"
        ></el-input>
        <el-table :data="displayData">
          <el-table-column prop="id" label="序号" width="120">
            <template slot-scope="scope">{{ scope.row.id}}</template>
          </el-table-column>
          <el-table-column prop="name" label="事件名称" width="180">
            <template slot-scope="scope">{{ scope.row.name}}</template>
          </el-table-column>
          <el-table-column prop="field" label="类别" width="120">
            <template slot-scope="scope">{{ scope.row.type}}</template>
          </el-table-column>
          <el-table-column prop="source" label="来源" width="120">
            <template slot-scope="scope">{{ scope.row.source}}</template>
          </el-table-column>
          <el-table-column prop="date" label="发现日期" width="200">
            <template slot-scope="scope">{{ scope.row.date | handleTime}}</template>
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
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pagesize"
            layout="total, prev, pager, next, jumper"
            :total="tableData.length"
            style="width: 300px; max-width: 550px;margin: 0 auto"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mydata from "@/data/data.js"
export default {
  name: "internetFraud",
  watch: {
    searchValue: {
      handler(n, o) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.remoteMethod();
        }, 300);
      }
    },
    radio1: {
      handler(n, o) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.remoteMethod();
        }, 300);
      }
    },
    radio2: {
      handler(n, o) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.remoteMethod();
        }, 300);
      }
    },
    radio3: {
      handler(n, o) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.remoteMethod();
        }, 300);
      }
    }
  },
  data() {
    return mydata.internetFraud
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.remoteMethod();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      let indexleft = val - 1;
      let size = this.pagesize;
      this.displayData = this.tableData.slice(indexleft * size, val * size);
    },
    // filter
    remoteMethod() {
      this.tableData = this.applications.filter(entry => {
        return this.filterData(
          entry.name,
          entry.date,
          entry.source,
          entry.money
        );
      });
      this.displayData = this.tableData.slice(0, this.pagesize);
    },
    filterData(name, date, source, money) {
      if (
        this.searchValue !== "" &&
        name.toLowerCase().indexOf(this.searchValue.toLowerCase()) == -1
      )
        return false;
      var now = new Date();
      var t = 1;
      if (this.radio1 == "近24小时") t = 1;
      else if (this.radio1 == "近7天") t = 7;
      else if (this.radio1 == "近30天") t = 30;
      if (now.setDate(now.getDate() - t) > date) return false;
      if (this.radio2 !== "全部" && source !== this.radio2) return false;
      if (this.radio3 == "5千元以下" && money > 5000) return false;
      else if (this.radio3 == "5千元-5万元" && (5000 >= money || money > 50000))
        return false;
      else if (this.radio3 == "5万-50万" && (50000 >= money || money > 500000))
        return false;
      else if (this.radio3 == "50万以上" && money <= 500000) return false;
      return true;
    },
    getTaskContent(id) {
      this.$router.push({
        path: "/internetFraudEventDetails",
        query: { id: id }
      });
    }
  },
  filters: {
    handleTime(timestamp) {
      var date = new Date(timestamp);
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      var d = date.getDate();
      return (
        y +
        "-" +
        (m < 10 ? "0" + m : m) +
        "-" +
        (d < 10 ? "0" + d : d) +
        " " +
        date.toTimeString().substr(0, 8)
      );
    }
  }
};
</script>

<style scoped>
.if-layout {
  width: 100%;
  position: absolute;
  top: 85px;
}
.if-main {
  width: 1280px;
  min-height: 860px;
  background-color: #ffffff;
  margin: 0 auto;
  margin-bottom: 15px;
}
.if-main-title {
  line-height: 60px;
  height: 60px;
  margin-left: 40px;
  padding-top: 10px;
  font-size: 18px;
  font-weight: bold;
}
.if-main-classification {
  width: 220px;
  border-right: solid 2px #DCDFE6;
  position: absolute;
  top: 90px;
  bottom: 40px;
  padding-left: 20px;
}
.if-main-event {
  width: 1000px;
  margin-left: 260px;
}
.if-main-radio {
  width: 600px;
  margin-left: 5px;
  margin-top: 15px;
}
.if-main-radio-title {
  float: left;
  width: 80px;
  text-align: right;
  margin-top: 4px;
}
.passed-page {
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