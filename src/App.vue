<template>
  <div id="app">
    <myHeader />
    <router-view />
  </div>
</template>

<script>
import myHeader from "@/components/myHeader";

export default {
  name: "App",
  components: {
    myHeader
  }
};
</script>
  
<style>
html,
body,
#app {
  margin: 0px;
  height: 100%;
  width: 100%;
  background-color: #F0F2F5;
}
</style>
