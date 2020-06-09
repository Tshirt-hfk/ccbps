<template>
  <header class="header" id="header">
    <div class="header-middle">
      <div class="header-l">
        <div class="header-l-logo">
          <img class="header-l-logo-1" src="/static/images/index-logo-1.png" />
          <img class="header-l-logo-2" src="/static/images/index-logo-2.png" />
        </div>
        <div class="header-l-title">网络空间行为犯罪系统</div>
      </div>
      <div class="header-m">
        <el-menu
          :default-active="activeIndex"
          class="header-el-menu"
          mode="horizontal"
          text-color="#ffffff"
          background-color="#0000ff"
          active-text-color="#00ff00"
          @select="handleSelect"
        >
          <el-menu-item index="1">全域扫描</el-menu-item>
          <el-menu-item index="2">网络诈骗</el-menu-item>
          <el-menu-item index="3">非法集资</el-menu-item>
          <el-menu-item index="4">采集中心</el-menu-item>
          <el-menu-item index="5">系统设置</el-menu-item>
        </el-menu>
      </div>
      <div class="header-r">
          <div class="header-r-image">
            <el-avatar :src="circleUrl"></el-avatar>
          </div>
          <div class="header-r-name">
            {{username}}
          </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "myHeader",
  data() {
      return {
        activeIndex: '1',
        username: "欧阳诚",
        circleUrl: "https://i2.hdslb.com/bfs/face/62325a7fa7aab0e2e49d7e755d4a15145489c382.jpg_64x64.jpg"
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>

<style scoped>
.header {
  height: 50px;
  width: 100%;
  background: blue;
}
.header-middle {
  margin: auto auto;
  width: 1600px;
  height: 40px;
  position: relative;
  top: 5px;
}

.header-l {
  float: left;
  height: 40px;
}
.header-l-logo, .header-r-image {
  float: left;
  height: 40px;
  width: 40px;
}
.header-l-logo-1 {
  position: absolute;
  height: 40px;
  width: 40px;
  z-index: 98;
}
.header-l-logo-2 {
  position: absolute;
  height: 19px;
  width: 16px;
  z-index: 97;
  top: 9px;
  left: 9px;
}
.header-l-title, .header-r-name {
  float: left;
  margin-left: 8px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: white;
  font-size: 22px;
}

.header-m {
  float: left;
  margin-left: 350px;
  height: 40px;
}

.header-el-menu {
  height: 40px;
}

.el-menu {
  border: 0px;
}

.el-menu-item  {
  height: 40px;
  line-height: 40px;
  font-size: 15px;
}

.header-r {
  float: left;
  margin-left: 150px;
  height: 40px;
}

.header-r-name {
  font-size: 16px;
}
</style>