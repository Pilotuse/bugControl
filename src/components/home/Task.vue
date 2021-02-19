<template>
  <div class="body">
    <el-row>
      <el-col :span="24" class="header">
        <h2>任务</h2>
        <el-button type="primary" @click="changeshowtask">新建任务</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10" class="search">
        <el-select v-model="value1" multiple placeholder="排序方式">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select
          v-model="value2"
          multiple
          collapse-tags
          style="margin: 0 20px"
          placeholder="标签"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-input
          placeholder="请输入内容"
          v-model="input3"
          class="input-with-select"
          ><el-button slot="append" icon="el-icon-search"></el-button
        ></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col class="operation">
        <div style="cursor: pointer">
          <i class="el-icon-edit" style="color: deepskyblue"></i>批量操作
        </div>
        <p style="margin-left: 20px">共有{{}}个任务</p>
      </el-col>
    </el-row>
    <el-row v-for="items in taskall" :key="items" class="task">
      <el-col :span="1"><el-checkbox v-model="checked"></el-checkbox></el-col>
      <el-col :span="2">任务编号</el-col>
      <el-col :span="4">任务名称</el-col>
      <el-col :span="5">任务描述</el-col>
      <el-col :span="2">重要</el-col>
      <el-col :span="6">任务标签</el-col>
      <el-col :span="4"
        ><el-button
          type="success"
          icon="el-icon-message"
          circle
          size="small"
        ></el-button
        ><el-button
          type="danger"
          icon="el-icon-delete"
          circle
          size="small"
        ></el-button
      ></el-col>
    </el-row>
    <div class="establishall" v-show="showtask">
      <div class="establish">
        <el-page-header @back="goBack" content="任务创建" title="">
        </el-page-header>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="任务名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="指派负责人" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择开发人员">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="期限设置" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="ruleForm.date1"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="ruleForm.date2"
                  style="width: 100%"
                ></el-time-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="标签设定" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="bug" name="type"></el-checkbox>
              <el-checkbox label="需求" name="type"></el-checkbox>
              <el-checkbox label="样式" name="type"></el-checkbox>
              <el-checkbox label="兼容" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="重要程度" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="重要"></el-radio>
              <el-radio label="次要"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="任务详情" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >立即创建</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      taskall: [1, 2, 3],
      showtask: false,
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    changeshowtask() {
      this.showtask = true;
    },
    goBack() {
      this.showtask = false;
    },
  },
};
</script>
<style scoped>
.body {
  height: 700px;
  background-color: #f1f1f1;
  position: relative;
}
.establishall {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  z-index: 99;
}
.establish {
  width: 800px;
  height: 500px;
  background-color: #fff;
  margin: auto;
  margin-top: 100px;
  padding: 0 20px;
}
.el-page-header {
  height: 40px;
  line-height: 40px;
}
.el-row {
  padding: 0 20px;
}
.header {
  width: 93vw;
  display: flex;
  /* border-bottom: 1px solid #b3b3b3; */
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 10px;
  padding: 0 20px;
}
.search {
  display: flex;
  margin-top: 20px;
  /* margin-bottom: 20px; */
}
.operation {
  display: flex;
  align-items: center;
}
.task {
  height: 40px;
  border-bottom: 1px dashed #000000;
  display: flex;
  align-items: center;
  margin: 0 20px;
}
</style>