<template>
  <div class="body">
    <el-row>
      <el-col :span="24" class="header">
        <h2>任务</h2>
        <el-button type="primary" @click="showtask">新建任务</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10" class="search">
        <el-select v-model="value1" multiple placeholder="排序方式">
          <el-option
            v-for="item in options1"
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
            v-for="item in options2"
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
    <div class="taskall">
      <el-row v-for="items in library" :key="items" class="task">
        <el-col :span="1"><el-checkbox v-model="checked"></el-checkbox></el-col>
        <el-col :span="2">{{ items.tasknumber }}</el-col>
        <el-col :span="4">{{ items.taskname }}</el-col>
        <el-col :span="5">{{ items.taskdetails }}</el-col>
        <el-col :span="2">
          <el-tag type="danger">{{ items.Degree }}</el-tag></el-col
        >
        <el-col :span="5">
          <el-tag type="success">{{ items.tasklabel }}</el-tag></el-col
        >
        <el-col :span="2">{{ items.taskperson }}</el-col>
        <el-col :span="2">{{ items.tasktime }}</el-col>
        <el-col :span="2"
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
    </div>
    <div class="establishall" v-show="flagtask">
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
          <el-form-item label="指派负责人" prop="region" class="person">
            <el-select v-model="ruleForm.region" placeholder="请选择开发人员">
              <el-option label="小王" value="小王"></el-option>
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
            <!-- <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="ruleForm.date2"
                  style="width: 100%"
                ></el-time-picker>
              </el-form-item>
            </el-col> -->
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
          <el-upload
            class="upload-demo"
            action="/api/uploads"
            name="filename"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :on-exceed="handleExceed"
            :file-list="fileList"
            :auto-upload="false"
            ref="upload"
            :on-success="success"
            :on-change="change"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
          <el-form-item class="right">
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
import { mapActions } from "vuex";
export default {
  data() {
    return {
      options1: [
        {
          value: "选项1",
          label: "重要程度",
        },
        {
          value: "选项2",
          label: "到期时间",
        },
      ],
      options2: [
        {
          value: "选项1",
          label: "bug",
        },
        {
          value: "选项2",
          label: "需求",
        },
        {
          value: "选项2",
          label: "样式",
        },
        {
          value: "选项2",
          label: "兼容",
        },
      ],
      library: [
        {
          tasknumber: "#abc",
          taskname: "淘宝bug",
          taskdetails: "解决bug",
          Degree: "重要",
          tasklabel: "bug",
          taskperson: "小王",
          tasktime: "2月25日",
        },
        {
          tasknumber: "#zxc",
          taskname: "天猫bug",
          taskdetails: "解决bug",
          Degree: "重要",
          tasklabel: "样式",
          taskperson: "小王",
          tasktime: "2月26日",
        },
      ],
      flagtask: false,
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
    ...mapActions(["tester"]),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.tester({
            taskname: this.ruleForm.name,
            taskdetail: this.ruleForm.desc,
            degree: this.ruleForm.resource,
            tasklabel: this.ruleForm.type,
            tasktime: this.ruleForm.date1,
            callback(data) {
              let { status } = data.params.result;
              if (status == "0000") {
                alert("chenggong");
              } else {
                alert("shibai");
              }
            },
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    goBack() {
      this.flagtask = false;
    },
    showtask() {
      this.flagtask = true;
    },
  },
};
</script>
<style scoped>
.body {
  height: 700px;
  /* background-color: #f1f1f1; */
  position: relative;
}
.upload-demo {
  float: left;
  margin: auto;
  margin-bottom: 40px;
  text-align: center;
}
.right {
  float: right;
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
  margin-top: 50px;
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
  height: 40px;
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
  height: 50px;
  border-bottom: 0;
  display: flex;
  align-items: center;
  margin: 0 20px;
}
.task:hover {
  background-color: #f1f1f1;
}
.taskall {
  width: 93vw;
  margin-left: 20px;
  box-shadow: 0px 2px 12px 0px rgb(0 0 0 / 10%);
}
</style>