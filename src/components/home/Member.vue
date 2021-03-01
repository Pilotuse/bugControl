<template>
  <div class="content">
    <h3 class="title">成员信息</h3>
    <div class="button-list">
      <div class="add" v-permission="'admin'">
        <el-button type="success" class="add-one" @click="dialogTableControl">新增用户</el-button>
        <!-- <el-button type="success" class="add-manny" @click="batchTableControl">批量新增</el-button> -->
      </div>
    </div>

    <div class="options">
      <div class="team">
        小组：
        <el-select v-model="search.team" placeholder="请选择小组信息">
          <el-option label="开发" value="开发"></el-option>
        </el-select>
      </div>
      <div class="status">
        状态：
        <el-select v-model="search.status" placeholder="请选择成员状态">
          <el-option label="暂停" value="0"></el-option>
          <el-option label="正常" value="1"></el-option>
        </el-select>
      </div>
      <div class="search-area">
        <span>搜索：</span>
        <el-input v-model="search.desciber" placeholder="请输入用户名"></el-input>
        <el-button type="primary">搜索</el-button>
      </div>
    </div>

    <!-- tab栏 -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="userManagement" v-permission="'admin'"></el-tab-pane>
      <el-tab-pane label="开发" name="developer"></el-tab-pane>
      <el-tab-pane label="测试" name="tester"></el-tab-pane>
      <membertabs :tabsName="tabsName"></membertabs>
    </el-tabs>

    <!-- 新增成员信息填写框 -->
    <el-dialog title="新增成员" :visible.sync="dialogFormVisible" width="540px">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="110px">
        <el-form-item label="用户名" prop="cnname">
          <el-input v-model="ruleForm.cnname"></el-input>
        </el-form-item>
        <el-form-item label="用户邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="初始密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="电话号码" prop="contact">
          <el-input v-model="ruleForm.contact"></el-input>
        </el-form-item>
        <el-form-item label="用户类型" prop="roleType">
          <el-select v-model="ruleForm.roleType" placeholder="请选择用户类型">
            <el-option label="开发" value="developer"></el-option>
            <el-option label="测试" value="tester"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="初始激活" prop="status">
          <el-select v-model="ruleForm.status" placeholder="请选择用户类型">
            <el-option label="初始激活" value="activation"></el-option>
            <el-option label="初始不激活" value="unactivation"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>


<script>
import { mapActions } from 'vuex'
import membertabs from '../other/MemberTabs'
export default {
  data() {
    return {
      formLabelWidth: '120px',
      activeName: 'developer',
      batchTableAdd: false,
      dialogFormVisible: false,
      tabsName: '',
      search: {
        team: '',
        status: '',
        desciber: ''
      },
      ruleForm: {
        cnname: '',
        email: '',
        roleType: '',
        password: '',
        status: '',
        contact: '',
      },
      rules: {
        cnname: [
          { required: true, message: '请输入用户姓名', trigger: 'blur' },
          { pattern: /[\u4e00-\u9fa5]/, min: 2, max: 5, message: '长度在 3 到 5 个中文字符', trigger: 'blur' },
        ],
        email: [
          { required: true, message: '请输入用户邮箱', trigger: 'blur' },
          { pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '请输入用户邮箱', trigger: 'change' },
        ],
        roleType: [
          { required: true, message: '请选择用户类型', trigger: 'change' },
        ],
        status: [
          { required: true, message: '请选择激活状态', trigger: 'change' },
        ],
        contact: [
          { required: true, pattern: /^1[3-9][0-9]{9}$/, message: '请输入手机号码', trigger: 'blur' },
        ],
        password: [
          { required: true, max: 16, min: 6, message: '请输入密码', trigger: 'change' },
        ]
      }
    }
  },
  methods: {
    ...mapActions(["register"]),
    dialogTableControl() {
      this.dialogFormVisible = true
    },
    batchTableControl() {
      this.batchTableAdd = true
    },
    handleClick(tab) {
      this.tabsName = tab.name
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        let that = this
        if (valid) {
          this.register({
            ...this.ruleForm, callback({ params: { result: { status, msg } } }) {
              if (status == '0000') {
                that.$notify({ title: '提示', message: msg, showClose: false, type: 'success' });
                that.resetForm("ruleForm")
                that.dialogFormVisible = false
                setTimeout(() => { that.$router.go(0) }, 2000);  // 优化自动请求数据 不做重新刷新页面
              } else {
                that.$notify({ title: '错误', message: msg, showClose: false, type: 'error' });
              }
            }
          })
        } else {
          this.$notify({ title: '错误', message: '请完善信息后再次发起注册！', showClose: false, type: 'error' });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  components: {
    membertabs
  },
  created() {
    this.tabsName = this.activeName
    this.buttonPermission = JSON.parse(localStorage.getItem('users')).author == 'admin' ? true : false
  }
};
</script>

<style scoped>
.content {
  box-sizing: border-box;
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
  float: right;
  margin-top: -40px;
}

.options {
  padding: 20px 0;
  border-radius: 2px;
  margin-top: 20px;
  display: flex;
  width: 100%;
  box-sizing: border-box;
}

.el-pagination {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.options > div {
  margin-right: 20px;
  display: flex;
  line-height: 40px;
}

.search-area {
  width: 368px;
}

.search-area input {
  width: 300px;
}

.search-area > span {
  width: 60px;
  line-height: 40px;
}

.search-area button {
  margin-left: 10px;
}

.el-input {
  width: 80%;
}

.registeralert {
  top: 60px !important;
  margin-top: 100px !important;
}
</style>
