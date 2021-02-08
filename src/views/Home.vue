<template>
  <div class="home">
    <headers></headers>
    <!-- 侧边栏组件 -->
    <navbar></navbar>
  </div>
</template>

<script>
// @ is an alias to /src
import headers from '../components/home/Header'
import navbar from '../components/home/NavbarSelector'

export default {
  name: 'Home',
  components: {
    headers,
    navbar
  }
}
</script>


<style scoped>
</style>
