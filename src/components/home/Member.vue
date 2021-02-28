<template>
  <div class="content">
    <h3 class="title">成员信息</h3>
    <div class="button-list">
      <div class="add" v-if="buttonPermission">
        <el-button type="success" class="add-one" @click="dialogTableControl">新增用户</el-button>
        <el-button type="success" class="add-manny" @click="batchTableControl">批量新增</el-button>
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
      <el-tab-pane label="用户管理" name="userManagement" v-if="buttonPermission"></el-tab-pane>
      <el-tab-pane label="开发" name="developer"></el-tab-pane>
      <el-tab-pane label="测试" name="tester"></el-tab-pane>
      <membertabs :tabsName="tabsName"></membertabs>
    </el-tabs>

    <!-- 新增按钮 -->
    <el-dialog title="新增成员" :visible.sync="dialogFormVisible" width="30%">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.nikename" autocomplete="off" prop="nikename" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.username" autocomplete="off" placeholder="请输入邮箱" prop="username"></el-input>
        </el-form-item>
        <el-form-item label="初始密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off" placeholder="初始密码" prop="password" disabled></el-input>
        </el-form-item>
        <el-form-item label="初始激活" :label-width="formLabelWidth" prop="activation">
          <el-select v-model="form.activation" disabled>
            <el-option label="是" value="1"></el-option>
            <el-option label="否" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="小组" :label-width="formLabelWidth" prop="teamType">
          <el-select v-model="form.teamType">
            <el-option label="开发" value="developer"></el-option>
            <el-option label="测试" value="tester"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <!-- <el-dialog title="批量新增" :visible.sync="batchTableAdd" width="30%">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="文件序号" :label-width="formLabelWidth">
          <el-input v-model="form.username" autocomplete="off" prop="username" disabled></el-input>
        </el-form-item>
        <el-form-item label="选择文件" :label-width="formLabelWidth">
          <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消新增</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">批量新增</el-button>
      </div>
    </el-dialog> -->

  </div>
</template>


<script>
import membertabs from '../other/MemberTabs'
export default {
  data() {
    return {
      search: {
        team: '',
        status: '',
        desciber: ''
      },
      form: {
        nikename: '',
        username: '',
        password: '88888888',
        teamType: '',
        activation: '1'
      },
      rules:'',
      ruleForm:'',
      formLabelWidth: '120px',
      activeName: 'developer',
      buttonPermission: '',
      batchTableAdd: false,
      dialogFormVisible: false,
      tabsName: '',
    };
  },
  methods: {
    dialogTableControl() {
      this.dialogFormVisible = true
    },
    batchTableControl() {
      this.batchTableAdd = true
    },
    handleClick(tab) {
      this.tabsName = tab.name
      
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
</style>
