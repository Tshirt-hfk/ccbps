<template>
    <div class="so-layout">
    <div class="so-main">
        <div class="so-main-title">系统设置</div>
        <div class="so-main-tabs">
            <el-tabs v-model="tabActiveName" @tab-click="handleTabClick">
            <el-tab-pane label="网络诈骗" name="first"></el-tab-pane>
            <el-tab-pane label="非法集资" name="second"></el-tab-pane>
            <el-tab-pane label="用户管理" name="third"></el-tab-pane>
            </el-tabs>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: "systemOptions",
    data() {
        return {
            tabActiveName: 'first',   // 标签页选项卡
        };
    },
    methods: {
        handleTabClick(){
            if(this.tabActiveName=="first")
                this.$router.push("./internetOptions")
            else if(this.tabActiveName=="second")
                this.$router.push("./illegalOptions")
            else if(this.tabActiveName=="third")
                this.$router.push("./userManagement")
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
  line-height: 60px;
  height: 60px;
  margin-left: 40px;
  padding-top: 10px;
  font-size: 18px;
  font-weight: bold;
}
.so-main-tabs{
    width: 1200px;
    margin: 0 auto;
}
</style>