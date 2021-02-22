<template>
  <div>
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
            <el-option label="需求" value="demander"></el-option>
            <el-option label="运维" value="operations"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>