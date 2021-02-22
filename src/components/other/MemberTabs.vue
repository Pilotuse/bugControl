<template>
  <div>
    {{tabsName}}
    <el-table :data="tableData" stripe style="width: 100%" @row-click="showDrawer">
      <el-table-column prop="id" label="编号" width="120">
      </el-table-column>
      <el-table-column prop="account" label="用户名" width="140">
      </el-table-column>
      <el-table-column prop="username" label="账号" width="360">
      </el-table-column>
      <el-table-column prop="contact" label="联系方式">
      </el-table-column>
      <el-table-column prop="status" label="账户状态">
      </el-table-column>
      <el-table-column prop="registerTime" label="注册时间">
      </el-table-column>
      <el-table-column prop="registerTime" label="结束时间">
      </el-table-column>
      <el-table-column prop="describer" label="描述">
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="totalCase" page-size="12" @current-change="handleCurrentChange"></el-pagination>
    <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false" size='700px'>
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalCase: 20,
      drawer: false,
      tableData: [{
        id: 1,
        account: '范鸿宇',
        username: 'fanhngyu126@126.com',
        contact: '13426192877',
        status: '正常',
        registerTime: '2020-02-22',
        describer: '注册'
      }, {
        id: 2,
        account: '范鸿宇',
        username: 'fanhngyu126@126.com',
        contact: '13426192877',
        status: '正常',
        registerTime: '2020-02-22',
        describer: '注册'
      }, {
        id: 3,
        account: '范鸿宇',
        username: 'fanhngyu126@126.com',
        contact: '13426192877',
        status: '正常',
        registerTime: '2020-02-22',
        describer: '注册'
      }, {
        id: 4,
        account: '范鸿宇',
        username: 'fanhngyu126@126.com',
        contact: '13426192877',
        status: '正常',
        registerTime: '2020-02-22',
        describer: '注册'
      }, {
        id: 5,
        account: '范鸿宇',
        username: 'fanhngyu126@126.com',
        contact: '13426192877',
        status: '正常',
        registerTime: '2020-02-22',
        describer: '注册'
      }, {
        id: 6,
        account: '范鸿宇',
        username: 'fanhngyu126@126.com',
        contact: '13426192877',
        status: '正常',
        registerTime: '2020-02-22',
        describer: '注册'
      }, {
        id: 7,
        account: '范鸿宇',
        username: 'fanhngyu126@126.com',
        contact: '13426192877',
        status: '正常',
        registerTime: '2020-02-22',
        describer: '注册'
      }, {
        id: 8,
        account: '范鸿宇',
        username: 'fanhngyu126@126.com',
        contact: '13426192877',
        status: '正常',
        registerTime: '2020-02-22',
        describer: '注册'
      }, {
        id: 9,
        account: '范鸿宇',
        username: 'fanhngyu126@126.com',
        contact: '13426192877',
        status: '正常',
        registerTime: '2020-02-22',
        describer: '注册'
      }, {
        id: 10,
        account: '范鸿宇',
        username: 'fanhngyu126@126.com',
        contact: '13426192877',
        status: '正常',
        registerTime: '2020-02-22',
        describer: '注册'
      }, {
        id: 11,
        account: '范鸿宇',
        username: 'fanhngyu126@126.com',
        contact: '13426192877',
        status: '正常',
        registerTime: '2020-02-22',
        describer: '注册'
      }, {
        id: 12,
        account: '范鸿宇',
        username: 'fanhngyu126@126.com',
        contact: '13426192877',
        status: '正常',
        registerTime: '2020-02-22',
        describer: '注册'
      }]
    }
  },
  props: ["tabsName"],
  methods: {
    showDrawer(row) {
      console.log(row);
      this.drawer = true
    },
    handleCurrentChange(current) {
      console.log(current);
    }
  },
}
</script>


<style scoped>
.el-pagination {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
</style>