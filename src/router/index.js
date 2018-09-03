import Vue from 'vue'
import Router from 'vue-router'

import Hooke from '@/components/Hooke'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hooke',
      component: Hooke
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
})
