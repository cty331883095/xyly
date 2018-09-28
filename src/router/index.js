import Vue from 'vue'
import Router from 'vue-router'

import Hooke from '@/components/Hooke'
import Home from '@/components/Hooke/Home'
import Register from '@/components/Hooke/Register'
import HookeStyle from '@/components/Hooke/HookeStyle'
import HookeHome from '@/components/Hooke/HookeHome'
import HookeAction from '@/components/Hooke/HookeAction'
import HookePlug from '@/components/Hooke/HookePlug'
import HookeDetail from '@/components/Hooke/HookeDetail'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/Hooke',
    name: 'Hooke',
    component: Hooke,
    children: [
      {
        path: '/home',
        component: Home,
        name: 'Home',
        children: [
          {
            path: '/hookehome',
            component: HookeHome
          },
          {
            path: '/hookeplug',
            component: HookePlug
          },
          {
            path: '/hookeaction',
            component: HookeAction
          },
          {
            path: '/hookestyle',
            component: HookeStyle
          },
          {
            path: '/hookedetail/:id',
            component: HookeDetail
          }
        ]
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
      }
    ]
  }]
})
