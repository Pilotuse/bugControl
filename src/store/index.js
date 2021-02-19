import Vue from 'vue'
import Vuex from 'vuex'
import loginModule from '../module/loginModule'
import homeModule from '../module/homeModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginUserType: ''
  },
  mutations: {
    changeUserType(state, playload) {
      state.loginUserType = playload
    }
  },
  actions: {
    login(context, info) {
      loginModule.login(info).then(res => info.callback(res.data))
    },
    loginout(context, info) {
      loginModule.loginout().then(res => info.callback(res.data))
    },
    getUserRole(context, info) {
      homeModule.userRole().then(res => info.callback(res.data))
    }
  },
  modules: {}
})
