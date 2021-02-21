<template>
    <div class="contexts">
        <div class="container clearfix">
            <div class="left">
                <img src="http://img.duoziwang.com/2016/10/27/1424346542.jpg" alt="">
                <router-link to="/home/microChat/chart"> <i class="iconfont icon-liaotian12"></i> </router-link>
                <router-link to="/home/microChat/contact"> <i class="iconfont icon-pengyou"></i> </router-link>
                <router-link to="/home/microChat/collection"> <i class="iconfont icon-caidan_hezi"></i> </router-link>
                <router-link to="/home/microChat/setting"> <i class="iconfont icon-Setting"></i> </router-link>
            </div>
            <div class="middle">
                <div class="search">
                    <el-input placeholder="搜索" prefix-icon="el-icon-search" v-model="input2" size="mini"></el-input>
                    <div class="el-icon-plus buttons"></div>
                </div>
                <router-view class="show-box"></router-view>
            </div>
            <div class="right"></div>
        </div>
    </div>
</template>

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
    width: cala(100%-300px);
    height: 100%;
    background: #f5f5f5;
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