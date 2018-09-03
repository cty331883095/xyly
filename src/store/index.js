import Vue from 'vue'
import Vuex from 'vuex'
import {HomePage} from './modules/HomePage.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    Erate: 1,
    clientWidth: 1920,
    clientHeight: 1080,
    url: '',
    UserName: ''
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
    }
  },
  modules: {
    HomePage
  }
})
export default store
