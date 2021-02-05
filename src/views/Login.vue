<template>
  <div class="container clearfix">
    <div class="display-box">
      <div class="left">
        <div class="desc">代码质量管理中心</div>
        <div class="enc">Quality Center</div>

      </div>
      <div class="right clearfix">
        <div class="login" v-if="displayBox">
          <h2>登录</h2>
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="60px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      displayBox: true,
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
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
  },
};
</script>



<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/img/MojaveNight.jpg");
  background-size: cover;
}

.display-box {
  display: flex;
  padding: 20px;
  min-width: 50vw;
  min-height: 56vh;
  background: #fff;
  box-sizing: border-box;
  border-radius: 8px;
}

.display-box > .right,
.display-box > .left {
  flex: 1 !important;
}

.left {
  position: relative;
  min-height: 56vh;
  background: #fff;
  float: left;
  box-sizing: border-box;
  background-image: url("../assets/img/bgimg.svg");
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: 70% 80%;
}

.left .desc,
.left .enc {
  position: absolute;
  top: 10%;
  left: 10%;
  font-size: 30px;
  transform: translateY(-50%);
}

.left .desc {
  top: 10%;
  font-size: 24px;
}

.left .enc {
  top: 17%;
  font-size: 18px;
}

.login {
  padding: 10px 20px;
  float: right;
  /* width: 80%; */
  min-height: 56vh;
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;
}
</style>
