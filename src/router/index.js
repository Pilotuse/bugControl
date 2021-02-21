import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import dayjs from "dayjs"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: { path: '/login' },
    meta: {
      title: 'Quality Center - 首页',
      isLogin: true
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Quality Center - 首页',
      isLogin: true
    },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('../components/home/Dashboard.vue'),
        meta: {
          title: 'Quality Center - 工作台',
          isLogin: true
        }
      },
      {
        path: 'project',
        name: 'project',
        component: () => import('../components/home/Project.vue'),
        meta: {
          title: 'Quality Center - 项目',
          isLogin: true
        }
      },
      {
        path: 'version',
        name: 'version',
        component: () => import('../components/home/Version.vue'),
        meta: {
          title: 'Quality Center - 版本',
          isLogin: true
        }
      },
      {
        path: 'task',
        name: 'task',
        component: () => import('../components/home/Task.vue'),
        meta: {
          title: 'Quality Center - 任务',
          isLogin: true
        }
      },
      {
        path: 'document',
        name: 'document',
        component: () => import('../components/home/Document.vue'),
        meta: {
          title: 'Quality Center - 文档',
          isLogin: true
        }
      },
      {
        path: 'statistics',
        name: 'statistics',
        component: () => import('../components/home/Statistics.vue'),
        meta: {
          title: 'Quality Center - 统计',
          isLogin: true
        }
      },
      {
        path: 'member',
        name: 'member',
        component: () => import('../components/home/Member.vue'),
        meta: {
          title: 'Quality Center - 成员',
          isLogin: true
        }
      },
      {
        path: 'microChat',
        name: 'microChat',
        component: () => import('../components/home/MicroChat.vue'),
        meta: {
          title: 'Quality Center - 微聊',
          isLogin: true
        },
        children: [
          {
            path: 'chart',
            name: 'chart',
            component: () => import('../components/micoChat/Chart.vue'),
            meta: {
              title: 'Quality Center - 聊天',
              isLogin: true
            },
          },
          {
            path: 'contact',
            name: 'contact',
            component: () => import('../components/micoChat/Contact.vue'),
            meta: {
              title: 'Quality Center - 同事',
              isLogin: true
            },
          },
          {
            path: 'collection',
            name: 'collection',
            component: () => import('../components/micoChat/Collection.vue'),
            meta: {
              title: 'Quality Center - 收藏',
              isLogin: true
            },
          },
          {
            path: 'setting',
            name: 'setting',
            component: () => import('../components/micoChat/Settings.vue'),
            meta: {
              title: 'Quality Center - 设置',
              isLogin: true
            },
          }
        ]
      },
      {
        path: 'demand',
        name: 'demand',
        component: () => import('../components/home/Demand.vue'),
        meta: {
          title: 'Quality Center - 需求中心',
          isLogin: true
        }
      }, {
        path: 'settings',
        name: 'settings',
        component: () => import('../components/home/Settings.vue'),
        meta: {
          title: 'Quality Center - 设置',
          isLogin: true
        }
      }, {
        path: 'help',
        name: 'help',
        component: () => import('../components/home/Help.vue'),
        meta: {
          title: 'Quality Center - 帮助中心',
          isLogin: true
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: 'Quality Center - 登录'
    }
  },
  {
    path: '/404',
    name: 'notfound',
    component: () => import('../views/404.vue'),
    meta: {
      title: 'Quality Center - 404'
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
