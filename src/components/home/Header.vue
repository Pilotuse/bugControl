<template>
  <div class="headers-list clearfix">
    <div class="left">
      <div class="brand">BUG-Control 代码质量控制</div>
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
  height: 46px;
  background: #303643 !important;
}

.left {
  float: left;
}

.left > div,
.right > div {
  display: inline-block;
  color: #fff;
  height: 100%;
  line-height: 46px;
}

.left .brand {
  padding-left: 26px;
  font-size: 18px;
  line-height: 46px;
}

.right {
  float: right;
  height: 100%;
}

.iconfont {
  font-size: 20px;
  color: #8c92a4;
}

.right > div {
  padding: 0 8px;
}
</style>