<template>
  <div>
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
      <el-table-column prop="describer" label="描述">
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="totalCase" :page-size="12" @current-change="handleCurrentChange"></el-pagination>
    <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false" size='400px'>
      <memberinfo></memberinfo>
    </el-drawer>
  </div>
</template>

<script>
import memberinfo from './MemberInfo'
export default {
  data() {
    return {
      totalCase: 20,
      drawer: false,
      tableData: [{
        id: 'wsit-001',
        account: '范鸿宇',
        username: 'fanhngyu126@126.com',
        contact: '13426192877',
        status: '正常',
        registerTime: '2020-02-22',
        describer: '正常'
      }, {
        id: 2,
        account: '范鸿宇',
        username: 'fanhngyu126@126.com',
        contact: '13426192877',
        status: '正常',
        registerTime: '2020-02-22',
        describer: '正常'
      }, {
        id: 3,
        account: '范鸿宇',
        username: 'fanhngyu126@126.com',
        contact: '13426192877',
        status: '正常',
        registerTime: '2020-02-22',
        describer: '正常'
      }, {
        id: 4,
        account: '范鸿宇',
        username: 'fanhngyu126@126.com',
        contact: '13426192877',
        status: '正常',
        registerTime: '2020-02-22',
        describer: '正常'
      }, {
        id: 5,
        account: '范鸿宇',
        username: 'fanhngyu126@126.com',
        contact: '13426192877',
        status: '正常',
        registerTime: '2020-02-22',
        describer: '正常'
      }, {
        id: 6,
        account: '范鸿宇',
        username: 'fanhngyu126@126.com',
        contact: '13426192877',
        status: '正常',
        registerTime: '2020-02-22',
        describer: '正常'
      }, {
        id: 7,
        account: '范鸿宇',
        username: 'fanhngyu126@126.com',
        contact: '13426192877',
        status: '正常',
        registerTime: '2020-02-22',
        describer: '正常'
      }, {
        id: 8,
        account: '范鸿宇',
        username: 'fanhngyu126@126.com',
        contact: '13426192877',
        status: '正常',
        registerTime: '2020-02-22',
        describer: '正常'
      }, {
        id: 9,
        account: '范鸿宇',
        username: 'fanhngyu126@126.com',
        contact: '13426192877',
        status: '正常',
        registerTime: '2020-02-22',
        describer: '正常'
      }, {
        id: 10,
        account: '范鸿宇',
        username: 'fanhngyu126@126.com',
        contact: '13426192877',
        status: '正常',
        registerTime: '2020-02-22',
        describer: '正常'
      }, {
        id: 11,
        account: '范鸿宇',
        username: 'fanhngyu126@126.com',
        contact: '13426192877',
        status: '正常',
        registerTime: '2020-02-22',
        describer: '正常'
      }, {
        id: 12,
        account: '范鸿宇',
        username: 'fanhngyu126@126.com',
        contact: '13426192877',
        status: '正常',
        registerTime: '2020-02-22',
        describer: '正常'
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
  components:{
    memberinfo
  }
}
</script>


<style scoped>
.el-pagination {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.drawer-content {
  padding: 60px 20px 20px 30px;
  background: #000;
  width: 100%;
  height: 100%;
}
</style>