<template>
  <div class="home">
    <headers></headers>
    <!-- 侧边栏组件 -->
    <navbar></navbar>
    <component :is="component" class="type-box"></component>
  </div>
</template>

<script>
// @ is an alias to /src
import headers from "../components/home/Header";
import navbar from "../components/home/NavbarSelector";
import admin from "../components/home/Admin";
import tester from "../components/home/Tester";

export default {
  name: "Home",
  data() {
    return {
      component: "tester",
    };
  },
  components: {
    headers,
    navbar,
    admin,
    tester,
  },
  created() {
    // 请求用户查询
    console.log(this.$route.params.role);
  },
};
</script>


<style scoped>
.tac.el-row {
  position: fixed;
}
.type-box {
  position: absolute;
  top: 47px;
  left: 61px;
}
</style>
