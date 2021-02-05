<template>
  <div class="container clearfix">
    <div class="display-box">
      <div class="left">
        <div class="desc">代码质量管理中心</div>
        <div class="enc">Quality Center</div>
      </div>
      <div class="right clearfix">
        <div class="login">
          <h2>登录</h2>
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="60px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
              <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
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
    return {
      ruleForm: {
        username: '',
        pass: '',
      },
      rules: {
        username: [{ validator: this.validateUser, trigger: 'blur' }],
        pass: [{ validator: this.validatePass, trigger: 'blur' }],
      }
    };
  },
  methods: {
    validateUser(rule, value, callback) {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        // 对邮箱进行验证只允许邮箱进行登录
        let countFlag = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)
        countFlag ? callback() : callback(new Error('用户名非法，请输入邮箱用户名'));
      }
    },
    validatePass(rule, value, callback) {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        let passFlag = /^[0-9a-zA-Z]{8,16}$/.test(value)
        passFlag ? callback() : callback(new Error('密码输入有误，请重试'));

      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  }
}
</script>



<style scoped>
.el-form-item {
  margin-bottom: 26px;
}
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
  width: 50%;
  min-width: 700px;
  height: 60vh;
  min-height: 300px;
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
  width: 84%;
  min-height: 56vh;
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;
}

.login h2 {
  padding-bottom: 40px;
}
</style>
