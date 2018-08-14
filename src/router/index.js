import Vue from 'vue'
import Router from 'vue-router'

import Hoook from '@/components/Hoook'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hoook',
      component: Hoook
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
})
