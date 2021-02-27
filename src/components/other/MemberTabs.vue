<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%" @row-click="showDrawer">
      <el-table-column prop="jobNum" label="编号" width="120">
      </el-table-column>
      <el-table-column prop="cnname" label="用户名" width="140">
      </el-table-column>
      <el-table-column prop="username" label="账号" width="360">
      </el-table-column>
      <el-table-column prop="tellphone" label="联系方式">
      </el-table-column>
      <el-table-column prop="status" label="账户状态">
      </el-table-column>
      <el-table-column prop="createDate" label="注册时间">
      </el-table-column>
      <el-table-column prop="project" label="项目">
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="totalCase" :page-size="12" @current-change="handleCurrentChange"></el-pagination>
    <el-drawer :visible.sync="drawer" :with-header="false" size='400px'>
      <memberinfo :tabledata="curPerson"></memberinfo>
    </el-drawer>
  </div>
</template>

<script>
import memberinfo from './MemberInfo'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      totalCase: 20,
      drawer: false,
      tableData: [],
      curPerson: []
    }
  },
  props: ["tabsName"],
  methods: {
    ...mapActions(["queryMember"]),
    showDrawer(row) {
      this.drawer = true
      this.curPerson = this.tableData.filter(el => el.jobNum == row.jobNum)
    },
    handleCurrentChange(current) {
      console.log(current);
    }
  },
  components: {
    memberinfo
  },
  created() {
    let that = this
    this.queryMember({
      roleType: 'developer', page: '1', callback({ params: { result: { msg } } }) {
        msg.forEach(el => {
          el.status = el.status == 1 ? '正常' : '暂停';
          el.createDate = that.dayjs(el.createDate).format('YYYY-MM-DD')
        });
        that.tableData = msg
      }
    })
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