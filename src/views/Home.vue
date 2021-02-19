<template>
    <div class="home">
        <headers></headers>
        <!-- 侧边栏组件 -->
        <navbar></navbar>
        <div class="context">
             <component :is="component" class="type-box"></component>
        </div>
    </div>
</template>

<script>


// @ is an alias to /src
import headers from '../components/home/Header'
import navbar from '../components/home/NavbarSelector'
import admin from '../components/home/Admin'

export default {
    name: 'Home',
    data() {
        return {
            component: 'admin'
        }
    },
    components: {
        headers,
        navbar,
        admin
    },
    created() {
        // 请求用户查询
        console.log(this.$route.params.role);
    }
}
</script>


<style scoped>
.context {
    position: absolute;
    top: 46px;
    left: 59px;
    padding:  10px 20px;
    width: calc(100% - 59px);
    height: calc(100% - 46px);
    overflow: scroll;
    background: #ccc;
    box-sizing: border-box;
}

.context> div {
  width: 100%;
}
</style>
