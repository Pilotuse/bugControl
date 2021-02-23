<template>
  <div class="content">
    <h3 class="title">项目中心</h3>
    <div class="banben">
      <div>
        <p>当前版本</p>
        <i class="el-icon-apple"></i>
      </div>
      <div>
        <p>历史版本</p>
        <i class="el-icon-pear"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  padding: 10px 20px;
}
.banben {
  display: flex;
  height: 100%;
  justify-content: space-around;
}
.banben div {
  width: 40%;
  height: 60%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  padding: 0px 0 0 20px;
  font-size: 20px;
}
.banben i {
  width: 50%;
  height: 50%;
  font-size: 200px;
  color: #bdbdbd;
  float: right;
}
</style>