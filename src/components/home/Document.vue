<template>
  <div class="content">
    <h3 class="title">查阅文档</h3>
    <div class="doc">
      <el-card class="box-card" shadow="hover" tag="a">
        需求文档
        <i class="iconfont icon-haiwai"></i>
      </el-card>
      <el-card class="box-card" shadow="hover">
        接口规范
        <i class="iconfont icon-qudaoguanlixitong"></i>
      </el-card>
      <el-card class="box-card" shadow="hover">
        我的文档
        <i class="iconfont icon-shenpizhongxin"></i>
      </el-card>

    </div>
    <h3 class="title">在线文档</h3>
    <div class="service">
      <el-card class="box-card" shadow="hover">
        在线查看
        <i class="iconfont icon-huodongguanlipingtai"></i>
      </el-card>
      <el-card class="box-card" shadow="hover">
        在线编辑
        <i class="iconfont icon-xintubiao-17"></i>
      </el-card>
    </div>

    <h3 class="title">技术文章</h3>
    <div class="service">
      <el-card class="box-card" shadow="hover">
        html & css
        <i class="iconfont icon-HTML"></i>
      </el-card>
      <el-card class="box-card" shadow="hover">
        JavaScript
        <i class="iconfont icon-javascript"></i>
      </el-card>
      <el-card class="box-card" shadow="hover">
        React
        <i class="iconfont icon-react"></i>
      </el-card>
      <el-card class="box-card" shadow="hover">
        Vue
        <i class="iconfont icon-Vue"></i>
      </el-card>
      <el-card class="box-card" shadow="hover">
        Node.js & webpack
        <i class="iconfont icon-nodejs"></i>
      </el-card>

    </div>
  </div>
</template>


<style scoped>
.content {
  padding: 10px 20px;
  box-sizing: border-box;
}

.doc,
.service {
  width: 100%;
  display: flex;
}

.doc .box-card,
.service .box-card {
  position: relative;
  margin-left: 20px;
  width: 300px;
  height: 200px;
  cursor: pointer;
  font-size: 18px;
  user-select: none;
}

.box-card i {
  position: absolute;
  bottom: 0;
  right: 20px;
  font-size: 120px;
  color: rgba(52, 73, 94, 0.08);
}
</style>