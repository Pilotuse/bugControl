<template>
  <div class="container">
    <div class="overview clearfix">
      <div class="left photo">
        <img src="https://img2.woyaogexing.com/2019/07/24/1698bd4063cc4e97aae11a291419fc68!400x400.jpeg" alt="">
      </div>
      <div class="right">
        <div> {{tabledata[0].cnname}} <span class="post">{{tabledata[0].group}}</span></div>
        <div class="post-option">
          <el-tooltip class="item" effect="dark" content="微聊发起沟通" placement="top">
            <i class="iconfont icon-island"></i>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="发送邮件" placement="top">
            <i class="iconfont icon-fasong"></i>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="与他合作的需求" placement="top">
            <i class="iconfont icon-jiedian"></i>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="匿名举报此人" placement="top">
            <i class="iconfont icon-jubao"></i>
          </el-tooltip>
        </div>
      </div>
    </div>
    <div class="personnel">
      <el-table :data="inforsValue" style="width: 100%" :show-header="false">
        <el-table-column prop="title" width="80">
        </el-table-column>
        <el-table-column prop="value">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tabledata"],
  data() {
    return {
      tableData: []
    }
  },
  computed: {
    inforsValue() {
      let value = this.tabledata.map(el => Object.entries(el))[0].map(el => {
        let obj = {}
        obj.title = this.formartKeys(el[0])
        obj.value = el[1] || '无信息'
        return obj
      })
      return value
    }
  },
  methods: {
    formartKeys(keysName) {
      switch (keysName) {
        case 'cnname':
          return '姓名';
        case 'address':
          return '家乡';
        case 'birthday':
          return '生日';
        case 'createDate':
          return '注册时间';
        case 'group':
          return '小组';
        case 'jobNum':
          return '工号';
        case 'leader':
          return '领导';
        case 'nickname':
          return '花名';
        case 'project':
          return '项目';
        case 'station':
          return '工位';
        case 'status':
          return '状态';
        case 'tellphone':
          return '电话';
        case 'username':
          return '邮箱';
        default:
          break;
      }
    },

  }
}
</script>

<style scoped>
.container {
  padding: 60px 20px 20px 30px;
}

.overview .left {
  float: left;
  width: 100px;
  box-sizing: border-box;
}

.overview .left img {
  width: 80px;
  height: 80px;
  background: #000;
  border-radius: 50%;
}

.overview .right {
  float: right;
  padding-left: 20px;
  width: 250px;
  box-sizing: border-box;
}

.overview .right div {
  margin-top: 12px;
  font-size: 22px;
}

.post {
  display: inline-block;
  padding: 2px 4px;
  background: #ccc;
  color: #fff;
  font-size: 12px;
  margin-left: 10px;
}

.post-option {
  font-size: 16px;
  color: #95afc0;
}

.post-option i {
  margin-right: 20px;
  font-size: 18px;
  cursor: pointer;
}

.post-option i:hover {
  color: #48a2ff;
}

.personnel {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 100%;
}

.personnel div {
  width: 120px;
  margin-top: 20px;
}
</style>