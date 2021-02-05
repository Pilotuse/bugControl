import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import dayjs from "dayjs"
import VueI18n from 'vue-i18n'

import './styles/normalize.css'
Vue.prototype.dayjs = dayjs;//可以全局使用dayjs

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
