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
    ShowPopwindow: false
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
    }

  },
  modules: {
    Hooke
  }
})
export default store
