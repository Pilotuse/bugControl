<template>
  <div>
    <el-row class="tac">
      <el-col :span="2">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#F7F7F7" text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="1">
            <i class="iconfont icon-dashboard"></i>
            <span slot="title">工作台</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="iconfont icon-slack"></i>
            <span slot="title">项目</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="iconfont  icon-git"></i>
            <span slot="title">版本</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="iconfont icon-trello"></i>
            <span slot="title">任务</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="iconfont icon-bookmark"></i>
            <span slot="title">文档</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="iconfont icon-stats-up"></i>
            <span slot="title">统计</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="iconfont icon-user"></i>
            <span slot="title">成员</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="iconfont icon-cogs"></i>
            <span slot="title">设置</span>
          </el-menu-item>

        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>


<style scoped>
.el-menu-vertical-demo.el-menu {
  padding-top: 46px;
  box-sizing: border-box;
  height: 100vh;
  width: 60px;
}

.el-submenu__icon-arrow {
  position: absolute;
  top: 50%;
  right: 6px;
  margin-top: -7px;
  transition: transform 0.3s;
  font-size: 12px;
}

.el-submenu .el-menu-item {
  min-width: 100%;
}

.el-menu-item {
  height: auto;
  padding: 0;
  padding-left: 0 !important;
}

.el-menu-item i {
  display: block;
  font-size: 24px;
  width: 100%;
  height: 24px;
  text-align: center;
}

.el-menu-item span {
  display: block;
  width: 100%;
  text-align: center;
  color: #40485b;
  font-size: 12px;
}
</style>