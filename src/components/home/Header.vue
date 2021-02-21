<template>
    <div class="headers-list clearfix">
        <div class="left">
            <div class="brand">代码质量与版本控制中心</div>
        </div>
        <div class="right">
            <div>
                <el-popover placement="bottom" title="标题" width="200" trigger="click" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                    <el-badge is-dot class="item" slot="reference"> <i class="iconfont icon-alarm"></i></el-badge>
                </el-popover>

            </div>
            <div @click="goTask"><i class="iconfont icon-plus"></i></div>
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                    {{username}}
                    <el-tag>{{role}}</el-tag>
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-setting" command="setting"> 设置 </el-dropdown-item>
                    <el-dropdown-item icon="el-icon-service" command="help"> 帮助 </el-dropdown-item>
                    <el-dropdown-item icon="el-icon-guide" command="logout"> 退出 </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            username: '',
            role: ''
        }
    },
    methods: {
        goTask() {
            this.$router.push('/home/task')
        },
        handleCommand(commnd) {
            if (commnd == 'logout') {
                localStorage.removeItem('users')
                this.$router.push('/login')
            }
        }
    },
    created() {
        let userinfo = JSON.parse(localStorage.getItem('users'))
        this.username = userinfo.username
        this.role = userinfo.author == "developer" ? '开发' : userinfo.author == 'admin' ? '管理员' : '测试'
    }
}
</script>

<style scoped>
.headers-list {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 666;
    width: 100vw;
    min-width: 800px;
    height: 46px;
    z-index: 9999;
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
    user-select: none;
}

.left i {
    font-size: 26px;
    color: #8c92a4;
    color: #ffd04b;
}

.right {
    margin-right: 20px;
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
   margin: 0 12px;
}

.el-tag {
    height: 20px;
    padding: 0 2px;
    line-height: 22px;
    text-align: center;
    border-radius: 4px;
    border: none;
    font-size: 12px;
}

.el-tag.el-tag--light {
    background: #6C63FF;
    color: #dcdde1;
}
</style>