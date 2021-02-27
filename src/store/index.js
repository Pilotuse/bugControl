import Vue from 'vue'
import Vuex from 'vuex'
import loginModule from '../module/loginModule'
import homeModule from '../module/homeModule'
import taskModule from '../module/taskModule'
import memberModule from '../module/memberModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginUserType: '',
    showModule: 'dashboard',
    markdownValue: ''
  },
  mutations: {
    changeUserType(state, playload) {
      state.loginUserType = playload
    },
    changeShowModule(state, playload) {
      state.showModule = playload
    },
    changeMarkdownValue(state, playload) {
      state.markdownValue = playload
    }
  },
  actions: {
    login(context, info) {
      loginModule.login(info).then(res => info.callback(res))
    },
    loginout(context, info) {
      loginModule.loginout().then(res => info.callback(res))
    },
    getUserRole(context, info) {
      homeModule.userRole().then(res => info.callback(res))
    },
    getUserMenu(context, info) {
      homeModule.getUserMenu().then(res => info.callback(res))
    },
    insertBugOrder(context, info) {
      taskModule.insertBugOrder(info).then(res => info.callback(res))
    },
    queryUser(context, info) {
      taskModule.queryUser(info).then(res => info.callback(res))
    },
    queryBugOrder(context, info) {
      taskModule.queryBugOrder(info).then(res => info.callback(res))
    },
    queryOwnBug(context, info) {
      taskModule.queryOwnOrder(info).then(res => info.callback(res))
    },
    queryMember(context, info) {
      memberModule.queryMember(info).then(res => info.callback(res))
    }
  },
  modules: {}
})
