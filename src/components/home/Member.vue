<template>
    <div class="content">
        <h3 class="title">成员管理</h3>
        <el-button type="success" class="add">新增用户</el-button>

        <div class="table">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="用户管理" name="first">
                    <template>
                        <el-table :data="tableData" style="width: 100%">
                            <el-table-column prop="id" label="成员编号" width="180">
                            </el-table-column>
                            <el-table-column prop="username" label="姓名" width="180">
                            </el-table-column>

                            <el-table-column prop="user" label="用户名" width="180">
                            </el-table-column>
                            <el-table-column prop="pwd" label="密码" width="180">
                            </el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </template>
                </el-tab-pane>
                <el-tab-pane label="测试人员" name="second">
                    <template>
                        <el-table :data="testDate" style="width: 100%">
                            <el-table-column prop="id" label="序列号" width="180"> </el-table-column>
                            <el-table-column prop="id" label="用户名" width="180"> </el-table-column>
                            <el-table-column prop="username" label="联系方式" width="180"> </el-table-column>
                            <el-table-column prop="user" label="状态" width="180"> </el-table-column>
                            <el-table-column prop="pwd" label="所属" width="180"> </el-table-column>
                            <el-table-column prop="pwd" label="注册日期" width="180"> </el-table-column>
                            <el-table-column prop="pwd" label="到期时间" width="180"> </el-table-column>
                        </el-table>
                    </template>
                </el-tab-pane>
                <el-tab-pane label="开发人员" name="development">
                    <template>
                        <el-table :data="testDate" style="width: 100%">
                            <el-table-column prop="id" label="成员编号" width="180">
                            </el-table-column>
                            <el-table-column prop="username" label="姓名" width="180">
                            </el-table-column>
                            <el-table-column prop="user" label="用户名" width="180">
                            </el-table-column>
                            <el-table-column prop="pwd" label="密码" width="180">
                            </el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </template>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeName: "second",
            tableData: [
                {
                    id: "202102202353001",
                    username: "老范",
                    user: "1056312367@163.com",
                    pwd: "88888888",
                },
            ],

            testDate: [
                {
                    id: "202102202353001",
                    username: "下海",
                    user: "1056312367@163.com",
                    pwd: "88888888",
                },
            ],
            development: [
                {
                    id: "202102202353001",
                    username: "小王",
                    user: "1056312367@163.com",
                    pwd: "88888888",
                },
            ],
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
    },
};
</script>

<style scoped>
.content {
    padding: 24px;
}
.del {
    float: left;
}
h3.title {
    margin: 10px 0;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.8);
}

.add {
    float: left;
    margin-top: -40px;
    margin-left: 750px;
}
</style>
