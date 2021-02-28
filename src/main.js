import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueClipBoard from 'vue-clipboard2'


Vue.use(VueClipBoard);

import dayjs from "dayjs"
import VueI18n from 'vue-i18n'
import './styles/iconfont.css'
import './styles/normalize.css'

import AMap from 'vue-amap';
Vue.use(AMap);

// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德key
  key: 'd25328f514d63a7079b19f202ea6d395',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Geolocation']
});

Vue.prototype.dayjs = dayjs;//可以全局使用dayjs


import 'github-markdown-css/github-markdown.css'
import hljs from 'highlight.js'
// 如果开启了typescript 需要额外安装 npm install @types/highlight.js
// 通过 import * as hljs from 'highlight.js' 引入
Vue.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  })
})


// 权限校验模块  自定义指令，只有为admin 的时候才会显示信息或元素
Vue.directive('permission', {
  inserted(el, binding) {
    let permission = binding.value
    if (permission) {
      let roleType = JSON.parse(localStorage.getItem('users')).author
      let result = permission == roleType
      if (!result) el.parentNode && el.parentNode.removeChild(el);
    }
  }
})

Vue.use(ElementUI)

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh', // 语言标识 //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'en': require('./vueI18n/en'),  //
    'zh': require('./vueI18n/zh'),
    'kr': require('./vueI18n/kr')
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
