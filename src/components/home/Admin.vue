<template>
  <div class="admin">
    这是管理员页面
    ---{{loginUserType}} ---
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(["loginUserType"])
  },
}
</script>


<style scoped>
.admin {
  height: 2000px;
  background: #ccc;
  width: 96%;
}
</style>