import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import dayjs from "dayjs"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Quality Center-首页',
      isLogin: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: 'Quality Center-登录'
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404.vue'),
    meta: {
      title: 'Quality Center-404'
    }
  },
  {
    path: '*',
    name: '404',
    redirect: {
      path: '/404'
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if (to?.meta?.isLogin) {
    let { token, date } = JSON.parse(localStorage.getItem('users')) || '';
    let dateCheck = dayjs(date).isBefore(dayjs(new Date()))
    token && dateCheck ? next() : next({ path: "/login" })
  } else {
    next();
  }
})


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export default router
