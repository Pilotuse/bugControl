import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:'首页'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta:{
      title:'登录'
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
    if(to?.meta?.title){
      document.title = to.meta.title
      next()
    }else {
      next()
    }
})

export default router
