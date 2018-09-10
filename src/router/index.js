import Vue from 'vue'
import Router from 'vue-router'

import Hooke from '@/components/Hooke'
import HookeStyle from '@/components/Hooke/HookeStyle'
import HookeHome from '@/components/Hooke/HookeHome'
import HookeAction from '@/components/Hooke/HookeAction'
import HookePlug from '@/components/Hooke/HookePlug'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hooke',
      component: Hooke,
      children: [
        {
          path: '/home',
          component: HookeHome
        },
        {
          path: '/plug',
          component: HookePlug
        },
        {
          path: '/action',
          component: HookeAction
        },
        {
          path: '/style',
          component: HookeStyle
        }
      ]
    }
  ]
})
