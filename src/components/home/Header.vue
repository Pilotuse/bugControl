<template>
  <div class="headers-list clearfix">
    <div class="left">
      <div class="brand">代码质量与版本控制中心</div>
    </div>
    <div class="right">
      <div><i class="iconfont icon-alarm"></i></div>
      <div><i class="iconfont icon-plus"></i></div>
      <div>下海</div>
    </div>
  </div>
</template>

<style scoped>
.headers-list {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 666;
  width: 100vw;
  min-width: 800px;
  height: 46px;
  background: #303643 !important;
}

.left {
  float: left;
  margin-left: 10px;
}

.left > div,
.right > div {
  display: inline-block;
  color: #fff;
  height: 100%;
  line-height: 46px;
  vertical-align: bottom;
}

.left .brand {
  padding-left: 10px;
  font-size: 18px;
  line-height: 46px;
}

.left i {
  font-size: 26px;
  color: #8c92a4;
  color: #ffd04b;
}

.right {
  float: right;
  height: 100%;
}

.right i {
  cursor: pointer;
}

.iconfont {
  font-size: 14px;
  color: #fff;
}

.right > div {
  padding: 0 8px;
}
</style>