<template>
  <header class="header" id="header">
    <div class="header-middle">
      <div class="header-l">
        <div class="header-l-logo">
          <img class="header-l-logo-1" src="/static/images/index-logo-1.png" />
          <img class="header-l-logo-2" src="/static/images/index-logo-2.png" />
        </div>
        <div class="header-l-title">网络空间XX监测系统</div>
      </div>
      <div class="header-m">
        <el-menu
          :default-active="activeIndex"
          class="header-el-menu"
          mode="horizontal"
          text-color="#ffffff"
          background-color="#0066CC"
          active-text-color="#00ff00"
          router
        >
          <el-menu-item index="/globalScan">全域扫描</el-menu-item>
          <el-menu-item index="/internetfraud">网络诈骗</el-menu-item>
          <el-menu-item index="/illegalfund">非法集资</el-menu-item>
          <el-menu-item index="/gatheringcenter">采集中心</el-menu-item>
          <el-menu-item index="/systemoptions">系统设置</el-menu-item>
        </el-menu>
      </div>
      <div class="header-r">
        <div class="header-r-image">
          <el-avatar :src="circleUrl"></el-avatar>
        </div>
        <div class="header-r-name">{{username}}</div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "myHeader",
  data() {
    return {
      activeIndex: "",
      username: "admin",
      circleUrl:
        "https://i2.hdslb.com/bfs/face/62325a7fa7aab0e2e49d7e755d4a15145489c382.jpg_64x64.jpg",
    };
  },
  mounted() {
    this.activeIndex = "/" + window.location.href.split('/')[3]
  }
};
</script>

<style scoped>
.header {
  height: 70px;
  width: 100%;
  background: #0066cc;
}
.header-middle {
  margin: auto;
  width: 1300px;
  height: 60px;
  position: relative;
  top: 5px;
}

.header-l {
  float: left;
  height: 60px;
  margin-top: 5px;
}
.header-l-logo,
.header-r-image {
  float: left;
  height: 60px;
  width: 40px;
}
.header-l-logo-1 {
  position: absolute;
  height: 50px;
  width: 50px;
  z-index: 98;
}
.header-l-logo-2 {
  position: absolute;
  height: 23px;
  width: 19px;
  z-index: 97;
  top: 16px;
  left: 12px;
}
.header-l-title {
  float: left;
  margin-left: 15px;
  height: 40px;
  line-height: 45px;
  text-align: center;
  color: white;
  font-size: 22px;
  font-weight: bold;
}
.header-r-name {
  float: left;
  margin-left: 10px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: white;
  font-size: 16px;
}

.header-m {
  float: left;
  margin-left: 150px;
  height: 60px;
}

.header-el-menu {
  height: 60px;
}

.el-menu {
  border: 0px;
}

.el-menu-item {
  height: 60px;
  line-height: 60px;
  font-size: 18px;
}

.header-r {
  float: right;
  height: 60px;
  padding-top: 10px;
}
</style>