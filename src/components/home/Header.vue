<template>
    <div class="headers-list clearfix">
        <div class="left">
            <div class="brand">代码质量与版本控制中心</div>
        </div>
        <div class="right">
            <div>
                <el-badge is-dot class="item"> <i class="iconfont icon-alarm"></i></el-badge>
            </div>
            <div><i class="iconfont icon-plus"></i></div>
            <div class="role">下海</div>
        </div>
    </div>
</template>

<style scoped>
.headers-list {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 666;
    width: 100vw;
    min-width: 800px;
    height: 46px;
    background: #2c3e50 !important;
}

.left {
    float: left;
    margin-left: 10px;
}

.left > div,
.right > div {
    display: inline-block;
    color: #fff;
    height: 100%;
    line-height: 46px;
    vertical-align: bottom;
}

.left .brand {
    padding-left: 10px;
    font-size: 18px;
    line-height: 46px;
}

.left i {
    font-size: 26px;
    color: #8c92a4;
    color: #ffd04b;
}

.right {
    margin-right: 20px;
    float: right;
    height: 100%;
}

.right i {
    cursor: pointer;
}

.right .role {
    margin-bottom: 3px;
    border-radius: 50%;
    background: #545C64;
    color: #f1f1f1;
    text-align: center;
    font-size: 14px;
    line-height: 40px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    user-select: none;
    box-shadow: 0 0 2px 1px #ccc;
}

.iconfont {
    font-size: 14px;
    color: #fff;
}

.right > div {
    margin: 0 8px;
}


</style>