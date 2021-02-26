<template>
  <div class="content">
    <div class="version-header clearfix">
      <div class="left">
        <h3 class="title">版本管理
          <el-tooltip class="item" effect="dark" content="点击查看当前版本所有需求" placement="top">
            <span>当前版本 AC8</span>
          </el-tooltip>
        </h3>
      </div>
      <div class="right">
        <el-button type="primary" @click="dialogFormVisible = true">新增版本线</el-button>
      </div>
    </div>

    <el-dialog title="新增版本线：" :visible.sync="dialogFormVisible" width="500px">
      <el-form :model="form">
        <el-form-item label="新增人：" :label-width="formLabelWidth"> {{form.username}} </el-form-item>
        <el-form-item label="版本编码：" :label-width="formLabelWidth">
          <el-input v-model="form.versionNumber" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="抄送审批：" :label-width="formLabelWidth">
          <el-select v-model="form.approval" placeholder="请选择活动区域">
            <el-option label="组长审批" value="groupLeaderApproval"></el-option>
            <el-option label="管理员审批" value="managementApproval"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="创建时间：" :label-width="formLabelWidth"> {{form.createDate}} </el-form-item>
        <el-form-item label="上线时间：" :label-width="formLabelWidth">
          <el-date-picker v-model="form.onlineDate" type="date" placeholder="选择上线日期" :picker-options="pickerOptions">
          </el-date-picker>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '90px',
      form: {
        username: '范鸿宇',
        versionNumber: '',
        createDate: this.dayjs().format('YYYY-MM-DD HH:mm:ss'),
        onlineDate: '',
        approval: '管理审批'
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
    }
  }
}
</script>



<style scoped>
.content {
  padding: 10px 20px;
}

.title span {
  display: inline-block;
  padding: 2px 4px;
  font-size: 12px;
  font-weight: 400;
  background: #ececec;
  color: #8c92a4;
  cursor: pointer;
  user-select: none;
}

.version-header .left {
  float: left;
}

.version-header .right {
  float: right;
  margin: 10px 0;
}

label.el-form-item__label {
  padding: 0 20px 0 0 !important;
}

.el-input__inner {
  width: 220px !important;
}
</style>