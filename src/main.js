import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.filter('NumFormat', function (value) {
  if (!value) return '0'
  var intPart = Number(value).toFixed(0)
  var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  return intPartFormat
})
// router.afterEach((to, from, next) => {
//   window.scrollTo(0, 0)
// })
window.Vue = new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
