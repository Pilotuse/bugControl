<template>
    <div class="online ">
        <div class="notice clearfix">
            <div class="left">
                <i class="iconfont icon-yonghu"></i> 在线：<el-tag type="success">59人</el-tag>
            </div>
            <div class="right">
                 <i class="iconfont icon-laba"></i>
                 消息：春节放假日期为 2020-02-07至2020-02-19
            </div>
        </div>
    </div>
</template>



<style scoped>
.online {
    box-sizing: border-box;
    margin-bottom: 14px;
    padding: 8px 4px;
    width: 100%;
    box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
}

.left,.right {
    padding: 0 10px;
    float: left;
    position: relative;
    font-size: 14px;
    line-height: 18px;
    
}

.left i {
    margin-right: 4px;
}

.left::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0%;
    transform: translateY(10%);
    width: 2px;
    height: 26px;
    background: #FFCE51;
    box-shadow: 2px 0 10px -2px rgba(255,206,81, 0.4);
}

.right {
    float: left;
    line-height: 32px;
}
</style>