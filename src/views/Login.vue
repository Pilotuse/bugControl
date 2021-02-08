<template>
  <div class="container clearfix">
    <div class="display-box">
      <div class="left">
        <div class="desc">{{$t('lang.brandTitle')}}</div>
        <div class="enc">{{$t('lang.brandEng')}}</div>
      </div>
      <div class="right clearfix">
        <div class="login">
          <div class="current-box">
            <h2>{{$t('lang.slogan')}}</h2>

            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                {{currentLang}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="zh">中文</el-dropdown-item>
                <el-dropdown-item command="en">English</el-dropdown-item>
                <el-dropdown-item command="kr">한국어</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm">
              <el-form-item :label="$t('lang.username')" prop="username">
                <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item :label="$t('lang.password')" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">{{$t('lang.loginSubimt')}}</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      langValue: false,
      currentLang: '中文',
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
    ...mapActions(["login"]),
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
        let passFlag = /^[0-9a-zA-Z]{6,16}$/.test(value)
        passFlag ? callback() : callback(new Error('密码输入有误，请重试'));
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let that = this
          this.login({
            username: this.ruleForm.username, password: this.ruleForm.pass, callback(data) {
              let { status, msg, token } = data.params.result
              if (status == '0000') {
                localStorage.setItem('users', JSON.stringify({ date: new Date(), token }))
                that.$router.push("/");
              } else {
                that.$notify.error({
                  title: `错误 [ ${status} ]`,
                  message: msg,
                  showClose: false
                });
              }
            }
          })
        } else {
          this.$notify.error({
            title: '错误 [ 20324 ]',
            message: '用户信息校验未通过，请重新输入信息',
            showClose: false
          });

        }
      });
    },
    handleCommand(command) {
      this.currentLang = command == 'zh' ? '中文' : command == 'en' ? 'English' : '한국어'
      this.$i18n.locale = command == 'zh' ? 'zh' : command == 'en' ? 'en' : 'kr'
    }
  },
  computed: {
    ...mapState(["navbarStatus"])
  },
  created() {
    this.navbarStatus = false
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
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
}

.display-box > .right {
  flex: 8 !important;
}
.display-box > .left {
  flex: 9 !important;
}

.left {
  position: relative;
  float: left;
  box-sizing: border-box;
  background-image: url("../assets/img/bgimg.svg");
  background-repeat: no-repeat;
  background-size: 76%;
  background-position: 70% 80%;
  user-select: none;
  border-radius: 6px;
}

.left .desc,
.left .enc {
  position: absolute;
  top: 10%;
  left: 10%;
  font-size: 30px;
  transform: translateY(-50%);
  color: #000;
}

.left .desc {
  top: 10%;
  font-size: 24px;
}

.left .enc {
  top: 18%;
  font-size: 18px;
}

.right {
  position: relative;
}

.login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  float: right;
  width: 84%;
  height: 98%;
  box-sizing: border-box;
  border-radius: 6px;
  overflow: hidden;
  min-width: 320px;
}

.login h2 {
  padding-bottom: 40px;
}

.el-dropdown {
  position: absolute;
  top: 9%;
  right: 7%;
  cursor: pointer;
  user-select: none;
  color: #ccc;
  outline: none;
}
</style>
