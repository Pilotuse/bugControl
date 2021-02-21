<template>
  <div>
    <component :is="showComponent"></component>
  </div>
</template>
<script>
import tester from "../role/Tester";
import admin from "../role/Admin";
import developer from "../role/Developer";

export default {
  data() {
    return {
      showComponent: "",
    };
  },
  components: {
    tester,
    admin,
    developer,
  },
  mounted() {
    this.showComponent = JSON.parse(localStorage.getItem("users")).author;
  },
};
</script>

<style>
.establishall {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  z-index: 99;
}
.establish {
  width: 800px;
  height: 500px;
  background-color: #fff;
  margin: auto;
  margin-top: 100px;
  padding: 0 20px;
}
.el-page-header {
  height: 40px;
  line-height: 40px;
}
.el-row {
  padding: 0 20px;
}
.header {
  width: 93vw;
  display: flex;
  /* border-bottom: 1px solid #b3b3b3; */
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 10px;
  padding: 0 20px;
}
.search {
  display: flex;
  margin-top: 20px;
  /* margin-bottom: 20px; */
}
.operation {
  display: flex;
  align-items: center;
}
.task {
  height: 40px;
  border-bottom: 1px dashed #000000;
  display: flex;
  align-items: center;
  margin: 0 20px;
}
</style>
