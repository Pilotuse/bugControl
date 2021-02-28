<template>
  <div class="contexts">
    <div class="container clearfix">
      <div class="left">
        <img src="http://img.duoziwang.com/2016/10/27/1424346542.jpg" alt="">
        <router-link to="/home/microChat/chart" @click.native="getComponent('chartbox')"> <i class="iconfont icon-liaotian12"></i> </router-link>
        <router-link to="/home/microChat/contact" @click.native="getComponent('ShowContact')"> <i class="iconfont icon-pengyou"></i> </router-link>
        <router-link to="/home/microChat/meeting" @click.native="getComponent('meeting')"> <i class="iconfont icon-huiyi"></i> </router-link>
        <router-link to="/home/microChat/collection" @click.native="getComponent('collectionbox')"> <i class="iconfont icon-ego-boxfull"></i> </router-link>
        <router-link to="/home/microChat/setting" @click.native="getComponent('setting')"> <i class="iconfont icon-Setting"></i> </router-link>
    
      </div>
      <div class="middle">
        <div class="search">
          <el-input placeholder="搜索" prefix-icon="el-icon-search" v-model="serarchvalue" size="mini"></el-input>
          <div class="el-icon-plus buttons"></div>
        </div>
        <router-view class="show-box"></router-view>
      </div>
      <div class="right">
        <div class="box-header" v-if="showHeader">
          范鸿宇
        </div>
        <component :is="comps"></component>
      </div>
    </div>
  </div>
</template>

<script>
import chartbox from '../micoChat/ChartBox'
import ShowContact from '../micoChat/ShowContact'
import collectionbox from '../micoChat/CollectionBox'
import setting from '../micoChat/SettingBox'
export default {
  data() {
    return {
      comps: '',
      showHeader: '',
      serarchvalue:''
    }
  },
  methods: {
    getComponent(comp) {
      this.showHeader = ["chartbox", "collectionbox"].includes(comp) ? true : false
      this.component = comp
    }
  },
  components: {
    chartbox,
    setting,
    ShowContact,
    collectionbox
  }
}
</script>

<style scoped>
.router-link-exact-active.router-link-active > i {
  color: #07c160 !important;
}

.show-box {
  width: 100%;
  height: 700px;
}

.contexts {
  padding: 10px 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.container {
  width: 80%;
  min-width: 80%;
  height: 96%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.6);
}

.container > div {
  float: left;
}

.container .left {
  width: 60px;
  height: 100%;
  background: #28292c;
}

.container .left a {
  display: flex;
  margin-top: 20px;
  width: 100%;
  text-align: center;
  flex-direction: column;
  text-decoration: none;
}

.left a i {
  color: #727272;
  font-size: 24px;
}

.container .middle {
  width: 240px;
  height: 100%;
  background: #e0dfdf;
}

.search {
  position: relative;
  width: 100%;
  margin-top: 0 !important;
  height: 60px;
  background: #eeebe9;
}

.el-input {
  position: absolute;
  top: 16px;
  left: 14px;
  width: 180px;
  height: 26px !important;
  background: #dcd9d8;
  outline: none;
}

.buttons {
  position: absolute;
  top: 17px;
  right: 12px;
  width: 26px;
  height: 26px;
  background: #dcd9d8;
  color: #585858;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.el-input__icon {
  line-height: 26px;
}

.el-input--prefix .el-input__inner {
  height: 26px;
}

.container .right {
  width: calc(100% - 300px);
  height: 100%;
  background: #f5f5f5;
}

.box-header {
  padding-left: 20px;
  width: calc(100%);
  height: 60px;
  background: #f5f5f5;
  border-bottom: 1px solid #e7e7e7;
  line-height: 60px;
  font-size: 20px;
  box-sizing: border-box;
}

img {
  width: 40px;
  height: 40px;
  margin: 10px;
  background: #ccc;
  border-radius: 4px;
  overflow: hidden;
}
</style>