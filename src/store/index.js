import Vue from 'vue'
import Vuex from 'vuex'
import {HomePage} from './modules/HomePage.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    Rate: window.screen.availWidth / 1920
  },
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    HomePage
  }
})
export default store
