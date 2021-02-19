<template>
    <div>
        <div class="membership">
            <div><img src="../../assets/img/stc.svg">查找同事</div>
            <div><img src="../../assets/img/stc.svg">历史记录</div>
            <div><img src="../../assets/img/stc.svg">文档资料</div>
            <div><img src="../../assets/img/stc.svg">BUG单快查</div>
            <div><img src="../../assets/img/stc.svg">快速组群</div>
            <div><img src="../../assets/img/stc.svg">需求信息</div>
            <div><img src="../../assets/img/stc.svg">快速邮件</div>
        </div>
        <div class="swiper">
            <el-carousel height="100%">
                <el-carousel-item v-for="item in imgSrc" :key="item.id">
                    <img :src="require(`../../assets/img/${item.src}.svg`)">
                    {{item.desc}}
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            imgSrc: [{ src: "undraw_Code_review_re_woeb", id: 1 },
            { src: "undraw_Goals_re_lu76", id: 2 },
            { src: "undraw_security_o890", id: 3 },
            { src: "undraw_Fingerprint_re_uf3f", id: 4 }]
        }
    }
}
</script>


<style scoped>
.membership {
    padding: 10px;
    box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    height: 40vh;
    overflow: scroll;
}

.membership img {
    width: 20px;
}

.swiper {
    margin-top: 20px;
    box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    height: 38vh;
    overflow: hidden;
}

.swiper > div {
    height: 100%;
}

.swiper img {
    height: 100%;
}
</style>