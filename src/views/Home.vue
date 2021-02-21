<template>
    <div class="home">
        <headers></headers>
        <div class="container clearfix">
            <div class="navbar">
                <router-link :to="item.path" v-for="item in navbar" :key="item.id">
                    <i :class="item.icon" class="iconfont"></i>
                    <div>{{item.describe}}</div>
                </router-link>
            </div>
            <div class="context">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import headers from "../components/home/Header";
import { mapActions } from 'vuex'
export default {
    name: 'Home',
    components: {
        headers
    },
    data() {
        return {
            navbar: [],
            currentID:'1'
        }
    },
    methods: {
        ...mapActions(["getUserMenu"]),
        getColorId(id){
            console.log(id);
        }
    },
    created() {
        this.getUserMenu({
            callback: ({ params: { result: { msg } } }) => {
                this.navbar = msg
            }
        })
    }
}
</script>


<style scoped lang="scss">
.navbar {
    position: fixed;
    top: 46px;
    left: 0;
    width: 60px;
    height: 100%;
    background: #F7F7F7;
    z-index: 9999;
}

.navbar a {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    color: #95afc0;
    text-decoration: none;
    text-align: center;
}

.navbar a i {
    padding: 10px 0;
    font-size: 20px;
    width: 100%;
    color: #95afc0;
}

.navbar a div {
    font-size: 12px;
}

.context {
    width: calc(100% - 60px);
    height: calc(100vh - 46px);
    position: absolute;
    left: 60px;
    top: 46px;
    box-sizing: border-box;
}

.context > div {
    height: 100%;
}

.router-link-exact-active.router-link-active {
    color: #FF8F00 !important;

    i {
        color: #FF8F00 !important;
    }

    div {
        color: #FF8F00 !important;
    }
}

.el-dialog .el-dialog__body {
    padding: 0 20px !important;
}
</style>
