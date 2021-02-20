<template>
    <div>
        <el-row class="tac">
            <el-col :span="2">
                <el-menu default-active="dashboard" class="el-menu-vertical-demo" @select="handleSelect" background-color="#545C64" text-color="#fff" active-text-color="#ffd04b">
                    <el-menu-item index="dashboard">
                        <i class="iconfont icon-dashboard"></i>
                        <span slot="title">工作台</span>
                    </el-menu-item>
                    <el-menu-item index="project">
                        <i class="iconfont icon-slack"></i>
                        <span slot="title">项目</span>
                    </el-menu-item>
                    <el-menu-item index="version">
                        <i class="iconfont icon-git"></i>
                        <span slot="title">版本</span>
                    </el-menu-item>
                    <el-menu-item index="task">
                        <i class="iconfont icon-trello"></i>
                        <span slot="title">任务</span>
                    </el-menu-item>
                    <el-menu-item index="document">
                        <i class="iconfont icon-bookmark"></i>
                        <span slot="title">文档</span>
                    </el-menu-item>
                    <el-menu-item index="statistics">
                        <i class="iconfont icon-stats-up"></i>
                        <span slot="title">统计</span>
                    </el-menu-item>
                    <el-menu-item index="member">
                        <i class="iconfont icon-user"></i>
                        <span slot="title">成员</span>
                    </el-menu-item>
                    <el-menu-item index="microChat">
                        <i class="iconfont icon-island"></i>
                        <span slot="title">微聊</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>


<script>
import { mapMutations } from "vuex";
export default {
    // 查询用户返回当前的权限是否满足路由跳转后对应的角色
    data() {
        return {};
    },
    methods: {
        ...mapMutations(["changeShowModule"]),
        handleSelect(index) {
            this.changeShowModule(index);
        },
    }
};
</script>


<style scoped>
.el-menu-vertical-demo.el-menu {
    position: fixed;
    padding-top: 46px;
    box-sizing: border-box;
    height: 100vh;
    left: 0;
    width: 60px;
    user-select: none;
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
    font-size: 12px;
}
</style>