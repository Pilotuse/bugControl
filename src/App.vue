<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions(["loginout"]),
        async beforeunloadFn() {
            // await this.loginout(data =>  console.log(data))
            // localStorage.removeItem('users')   
        }

    },
    mounted() {
        window.addEventListener('beforeunload', e => {
          this.beforeunloadFn(e)
          return  alert('确认退出')
        })
    },
    destroyed() {
        window.removeEventListener('beforeunload', e => this.beforeunloadFn(e))
    }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
