import Vue from 'vue'
import Vuex from 'vuex'
import {
  Hooke
} from './modules/Hooke'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    Erate: 1,
    clientWidth: 1920,
    clientHeight: 1080,
    url: '',
    UserName: '',
    UserPassWord: '',
    ShowPopwindow: false,
    num: 1
  },
  getters: {},
  actions: {},
  mutations: {
    setChartRation (state, Erate) {
      state.Erate = Erate
    },
    setClientWidth (state, width) {
      state.clientWidth = width
    },
    setClientHeight (state, height) {
      state.clientHeight = height
    },
    setShowPopwindow (state, type) {
      state.ShowPopwindow = type
    },
    setNun (state, num) {
      state.num = num
    },
    setUserName (state, name) {
      state.UserName = name
    },
    setUserPassWord (state, password) {
      state.UserPassWord = password
    }
  },
  modules: {
    Hooke
  }
})
export default store
