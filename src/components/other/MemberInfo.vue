<template>
    <div class="container">
        <div class="overview clearfix">
            <div class="left photo">
                <img src="https://img2.woyaogexing.com/2019/07/24/1698bd4063cc4e97aae11a291419fc68!400x400.jpeg" alt="">
            </div>
            <div class="right">
                <div>范鸿宇 <span class="post">前端开发</span></div>
                <div class="post-option">
                    <el-tooltip class="item" effect="dark" content="微聊发起沟通" placement="top">
                        <i class="iconfont icon-island"></i>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="发送邮件" placement="top">
                        <i class="iconfont icon-fasong"></i>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="与他合作的需求" placement="top">
                        <i class="iconfont icon-jiedian"></i>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="匿名举报此人" placement="top">
                        <i class="iconfont icon-jubao"></i>
                    </el-tooltip>
                </div>
            </div>
        </div>
        <div class="personnel">
            <el-table :data="tableData" style="width: 100%" :show-header="false">
                <el-table-column prop="title" width="80">
                </el-table-column>
                <el-table-column prop="value">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                { title: '花名', value: '茶都醉何况酒' },
                { title: '生日', value: '07-07' },
                { title: '星座', value: '巨蟹座' },
                { title: '家乡', value: '湖北潜江' },
                { title: '电话', value: '13426192877' },
                { title: '邮箱', value: 'fanhongyu126@126.com' },
                { title: '领导', value: '范鸿宇' },
                { title: '小组', value: '前端-BUG管理系统' },
                { title: '项目', value: '管理系统前端' },
                { title: '工龄', value: '1.y-220.d' },
                { title: '工位', value: 'B213456' },
                { title: '工号', value: 'B213456' },
                { title: '注册时间', value: 'B213456' },
            ]
        }
    }
}
</script>

<style scoped>
.container {
    padding: 60px 20px 20px 30px;
}

.overview .left {
    float: left;
    width: 100px;
    box-sizing: border-box;
}

.overview .left img {
    width: 80px;
    height: 80px;
    background: #000;
    border-radius: 50%;
}

.overview .right {
    float: right;
    padding-left: 20px;
    width: 250px;
    box-sizing: border-box;
}

.overview .right div {
    margin-top: 12px;
    font-size: 22px;
}

.post {
    display: inline-block;
    padding: 2px 4px;
    background: #ccc;
    color: #fff;
    font-size: 12px;
    margin-left: 10px;
}

.post-option {
    font-size: 16px;
    color: #95afc0;
}

.post-option i {
    margin-right: 20px;
    font-size: 18px;
    cursor: pointer;
}

.post-option i:hover {
    color: #48a2ff;
}

.personnel {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    width: 100%;
}

.personnel div {
    width: 120px;
    margin-top: 20px;
}
</style>