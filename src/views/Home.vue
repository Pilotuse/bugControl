<template>
    <div class="home">
        <headers></headers>
        <!-- 侧边栏组件 -->
        <navbar></navbar>
        <div class="context">
            <component :is="showModule" class="type-box"></component>
        </div>
    </div>
</template>

<script>


// @ is an alias to /src
import { mapState } from 'vuex'
import headers from '../components/home/Header'
import navbar from '../components/home/NavbarSelector'
import dashboard from '../components/home/Dashboard'
import project from '../components/home/Project'
import version from '../components/home/Version'
import task from '../components/home/Task'
import document from '../components/home/Document'
import statistics from '../components/home/Statistics'
import member from '../components/home/Member'
import microChat from '../components/home/MicroChat'

export default {
    name: 'Home',
    computed: {
        ...mapState(["showModule"])
    },
    components: {
        headers,
        navbar,
        dashboard,
        project,
        version,
        task,
        document,
        statistics,
        member,
        microChat
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
    width: calc(100% - 59px);
    height: calc(100% - 46px);
    overflow: scroll;
    box-sizing: border-box;
}

/* .context > div {
    width: 100%;
} */
</style>
