<template>
    <div class="contact">
        <div class="classify">
            <div class="active"><i class="iconfont icon-tongxunlu "></i> 通讯录</div>
            <div><i class="iconfont icon-yonghu"></i> 群组</div>
            <div><i class="iconfont icon-comments"></i> 消息</div>
            <div><i class="iconfont icon-ux"></i> 工具</div>
        </div>
    </div>
</template>

<style scoped>
.contact {
    position: relative;
    width: 40%;
    box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.4);
    min-height: 80vh;
    overflow: scroll;
    border-radius: 8px;
}

.classify {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    color: #7DC66D;
    display: flex;
    border-top: 1px solid #ececec;
    user-select: none;
    cursor: pointer;
}

.classify > div {
    flex: 1;
    text-align: center;
}

.active {
    color: #FFB243;
}
</style>