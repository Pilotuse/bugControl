<template>
  <div class="container clearfix">
    <div class="body">
      <el-row>
        <el-col :span="24" class="headers">
          <h3 class="title">任务与派发</h3>
          <el-button type="primary" @click="dialogVisible = true">新建任务</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10" class="search">
          <el-select v-model="screen.sortby" multiple placeholder="排序方式">
            <el-option v-for="item in options1" :key="item.id" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="screen.lable" multiple collapse-tags style="margin: 0 20px" placeholder="标签">
            <el-option v-for="item in options2" :key="item.id" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-input placeholder="请输入内容" v-model="screen.search" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <el-row class="issue">
        <tr class="tr-header">
          <th colspan="3">
            <div class="operation">
              <div style="cursor: pointer"> <i class="iconfont icon-bi"></i> 批量操作</div>
              <div style="margin-left:20px">共有{{library.length}}个任务</div>
            </div>
          </th>
          <th class="issue-time" style="text-align:left;">创建时间</th>
          <th class="issue-time" style="text-align:left;">时间安排</th>
          <th class="issue-assignee" style="text-align:right;">处理人</th>
        </tr>
        <tr v-for="items in library" :key="items.id">
          <td class="issue-status"><i class="el-icon-loading"></i></td>
          <td class="issue-id">
            <span>#CQVC{{ items.id  }}</span>
          </td>
          <td class="issue-detail">
            <span @click="getIssueInfo(items.id)" style="display: inline-block;">{{ items.taskname }}</span>
            <el-tag type="danger" effect="plain"> {{ items.degree }}</el-tag>
            <el-tag type="warning" effect="plain" v-for="list in items.label" :key="list"> {{ list }}</el-tag>
          </td>
          <td class="issue-time"> {{items.createdate}}</td>
          <td class="issue-time"> {{items.endtime}} </td>
          <td class="issue-assignee"> {{ items.handler }}</td>
        </tr>
      </el-row>

      <!-- 任务输入框 -->
      <el-dialog title="新建信息" :visible.sync="dialogVisible" width="700px" :before-close="handleClose">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="名称" prop="taskname">
            <el-input v-model="ruleForm.taskname"></el-input>
          </el-form-item>
          <el-form-item label="指派给" prop="handler" class="person">
            <el-select v-model="ruleForm.handler" placeholder="请选择开发人员">
              <el-option v-for="name in developer" :label="name" :value="name" :key="name"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="期限" required>
            <el-col :span="11">
              <el-form-item prop="endtime">
                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.endtime" style="width: 100%" :picker-options="pickerOptions"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="标签" prop="label">
            <el-checkbox-group v-model="ruleForm.label">
              <el-checkbox label="bug" name="type"></el-checkbox>
              <el-checkbox label="需求" name="type"></el-checkbox>
              <el-checkbox label="样式" name="type"></el-checkbox>
              <el-checkbox label="兼容" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="优先级" prop="degree">
            <el-radio-group v-model="ruleForm.degree">
              <el-radio label="高"></el-radio>
              <el-radio label="中"></el-radio>
              <el-radio label="低"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="详情" prop="details">
            <el-input type="textarea" v-model="ruleForm.details"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">确认提交</el-button>
            <el-button type="primary" @click="handleCancel">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>

    <div class="analysis">
      <h4 class="title">概览报表</h4>
    </div>
    <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false" size='62%' :modal="false">
      <div class="drawer-container">
        <bugorderdetails :bugordershow="bugordershow" @closeMask="closeMask"></bugorderdetails>
      </div>
    </el-drawer>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import bugorderdetails from '../other/BugOrderDetails'
export default {
  data() {
    return {
      dialogVisible: false,
      developer: [],
      screen: { lable: '', sortby: '', search: '' },
      drawer: false,
      selected: { checked: [] },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
      options1: [
        { id: 1, value: "选项1", label: "重要程度", },
        { id: 2, value: "选项2", label: "到期时间", }
      ],
      options2: [{
        id: 1,
        value: "选项1",
        label: "bug",
      },
      {
        id: 2,
        value: "选项2",
        label: "需求",
      },
      {
        id: 3,
        value: "选项2",
        label: "样式",
      },
      {
        id: 4,
        value: "选项2",
        label: "兼容",
      }],
      library: [],
      bugordershow: [],
      flagtask: false,
      ruleForm: {
        taskname: "", //名称
        handler: "",  // 处理人
        endtime: "",  // 结束时间
        label: [],   // 标签
        degree: "",  // 程度
        details: "",  // 详情
      },
      rules: {
        taskname: [
          { required: true, message: "请输入标题", trigger: "blur" },
          { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" }
        ],
        handler: [{ required: true, message: "请选择实际处理人", trigger: "change" }],
        endtime: [{
          type: "date",
          required: true,
          message: "请选择日期",
          trigger: "change",
        }],
        label: [{
          type: "array",
          required: true,
          message: "请至少选择一个标签",
          trigger: "change",
        }],
        degree: [{ required: true, message: "请选择优先级", trigger: "change" }],
        details: [{ required: true, message: "请填写详细信息，以方便开发迅速定位", trigger: "blur" }],
      },
    };
  },
  methods: {
    ...mapActions(["insertBugOrder", "queryUser", "queryBugOrder"]),
    handleClose(done) {
      this.$confirm('确认关闭?').then(() => done()).catch(() => { });
    },
    handleCancel() {
      this.dialogVisible = false
      this.$refs['ruleForm'].resetFields();
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getIssueInfo(issueid) {
      this.drawer = true
      this.bugordershow = this.library.filter(el => el.id == issueid)
    },
    closeMask() {
      this.drawer = false
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let { taskname, handler, endtime, label, degree, details } = this.ruleForm;
          let that = this;
          endtime = this.dayjs(endtime).format('YYYY-MM-DD')
          label = Array.from(label).join(',')
          this.insertBugOrder({
            taskname, handler, endtime, label, degree, details, callback(data) {
              let { code } = data.params.result;
              if (code == "0000") {
                that.queryBugInfo()
                that.dialogVisible = false
              } else {
                this.$message.error('数据提交失败，请稍后再试！');
              }
            },
          });
        } else {
          return false;
        }
      });
    },
    queryBugInfo() {
      let that = this
      this.queryBugOrder({
        callback({ params: { result: { msg } } }) {
          if (typeof msg == 'object') {
            that.library = msg.map(el => {
              return {
                id: el.id,
                createdate: that.dayjs(el.create_date).format('YYYYMMDD'),
                degree: el.degree,
                label: el.label.split(','),
                details: el.details,
                status: el.status,
                taskname: el.taskname,
                endtime: `${that.dayjs(el.create_date).format('MM.DD')} ~ ${that.dayjs(el.end_time).format('MM.DD')}`,
                handler: el.handler
              }
            })
          } else {
            that.library = ''
          }
        }
      })
    }
  },
  created() {
    let that = this;
    this.queryUser({
      author_power: 'developer',
      callback({ params: { result: { msg } } }) {
        if (typeof msg == 'object') msg.forEach(el => that.developer.push(el.username))
      }
    });
    this.queryBugInfo()
  },
  components: {
    bugorderdetails
  }
};
</script>


<style scoped>
.container {
  width: 100%;
  height: 100%;
}

.body {
  position: relative;
  height: 100%;
  width: 82%;
  float: left;
}

.analysis {
  float: right;
  width: 18%;
  background: #f7f7f7;
  height: 100%;
  border-left: 1px solid #e4eaed;
  box-sizing: border-box;
}

.right {
  float: right;
}

.el-dialog {
  position: relative;
  margin: 0 auto 50px;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  width: 50%;
  /* height: 550px; */
}

.el-page-header {
  height: 40px;
  line-height: 40px;
}

.el-row {
  padding: 0 20px;
}

.headers {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  margin-top: 10px;
  border-radius: 10px;
}

.search {
  display: flex;
  margin-top: 20px;
  margin-bottom: 6px;
}
.operation {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #5c7b8b;
}
.issue {
  align-items: center;
  border-bottom: 0;
  align-items: center;
  margin: 0 20px;
  padding: 0;
  color: #666;
  height: calc(100% - 116px);
  overflow: scroll;
}

.issue-number {
  position: absolute;
}

.issue th {
  color: #8c92a4;
  font-weight: 400;
}

.issue tr:not(:first-child):hover {
  background-color: #f1f1f1;
}

.issue tr {
  width: 100%;
  font-size: 14px;
  line-height: 40px;
}

.issue tr td:last-child {
  text-align: right;
}

.issue-status {
  width: 20px;
}

.issue-id {
  width: 1% !important;
}

.issue-id span {
  display: inline-block;
  width: 53px;
  height: 18px;
  background: #f5f6f8;
  color: #8c92a4;
  border-radius: 4px;
  line-height: 18px;
  font-size: 12px;
  cursor: pointer;
  text-align: center;
  margin: 0 10px;
}

.issue-detail {
  width: 50%;
  cursor: pointer;
  color: #005980;
}

.el-tag {
  line-height: 20px;
  height: 20px;
  margin-left: 4px;
}

h4.title {
  margin: 20px 20px;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.8);
}

.el-card {
  margin: 0 20px;
}

.drawer-container {
  padding: 60px 20px 20px 30px;
  width: 100%;
  height: 100%;
}
</style>