import Vue from 'vue'
import Router from 'vue-router'

import Hooke from '@/components/Hooke'
import Home from '@/components/Hooke/Home'
import HookeRegister from '@/components/Hooke/HookeRegister'
import HookeStyle from '@/components/Hooke/HookeStyle'
import HookeHome from '@/components/Hooke/HookeHome'
import HookeAction from '@/components/Hooke/HookeAction'
import HookePlug from '@/components/Hooke/HookePlug'
import HookeDetail from '@/components/Hooke/HookeDetail'
import UserSpace from '@/components/Hooke/UserSpace'
import HookeForget from '@/components/Hooke/HookeForget'
import HookeRevisePsw from '@/components/Hooke/HookeRevisePsw'
import HookeRegisterSuccess from '@/components/Hooke/HookeRegisterSuccess'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [{
    path: '/',
    redirect: '/hookehome'
  },
  {
    path: '/Hooke',
    name: 'Hooke',
    component: Hooke,
    children: [{
      path: '/home',
      component: Home,
      name: 'Home',
      children: [{
        path: '/hookehome',
        name: 'HookeHome',
        component: HookeHome
      },
      {
        path: '/hookeplug',
        name: 'HookePlug',
        component: HookePlug
      },
      {
        path: '/hookeaction',
        name: 'HookeAction',
        component: HookeAction
      },
      {
        path: '/hookestyle',
        name: 'HookeStyle',
        component: HookeStyle
      },
      {
        path: '/hookedetail/:id',
        name: 'HookeDetail',
        component: HookeDetail
      },
      {
        path: '/userspace',
        name: 'UserSpace',
        component: UserSpace
      }
      ]
    },
    {
      path: '/hookeregister',
      name: 'HookeRegister',
      component: HookeRegister
    },
    {
      path: '/hookeregistersuccess',
      name: ' HookeRegisterSuccess',
      component: HookeRegisterSuccess
    },

    {
      path: '/hookeforget',
      name: 'HookeForget',
      component: HookeForget
    },
    {
      path: '/hookerevisepsw',
      name: 'HookeRevisePsw',
      component: HookeRevisePsw
    }
    ]
  }
  ]
})
