<template>
    <div class="contexts">
        <online></online>
        <div class="contents clearfix">
            <contact class="contact"></contact>
            <chartbox class="chartbox"></chartbox>
            <membership></membership>
        </div>
        <div class="invention clearfix">
            <div class="left"><i class="iconfont icon-invention"></i> 严禁发送用户数据和非法信息，所有聊天均进行云端数据保存，请知悉！ </div>
            <div class="right">{{timer}}</div>
        </div>
    </div>
</template>

<script>

import contact from '../micoChat/Contact'
import online from '../micoChat/OnlineCount'
import chartbox from '../micoChat/ChartBox'
import membership from '../micoChat/Membership'

export default {
    data() {
        return {
            timer: ''
        }
    },
    methods: {
        clock() {
            setInterval(() =>  this.timer = this.dayjs().format('YYYY-MM-DD HH:mm:ss'), 1000)
            console.log(this.timer);
        }
    },
    mounted(){
        this.clock()
    },
    components: {
        contact,
        online,
        chartbox,
        membership
    }
}
</script>


<style scoped>
.contexts{
    padding: 10px 20px;
}

.contents {
    display: flex;
}

.contents > div:first-child,
.contents > div:nth-child(2) {
    flex: 4;
    margin-right: 20px;
}

.contents > div:last-child {
    flex: 2;
}

.invention {
    margin-top: 10px;
    font-size: 14px;
    color: #999;
}

.invention .left {
    float: left;
}

.invention .right {
    float: right;
}
</style>