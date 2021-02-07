import Vue from 'vue'
import Vuex from 'vuex'
import loginModule from '../module/loginModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    login(context, info) {
      loginModule.login(info).then(res => info.callback(res.data))
    }
  },
  modules: {}
})
