import Vue from 'vue'
import Router from 'vue-router'

// import Hooke from '@/components/Hooke'
const Hooke = () => import('@/components/Hooke')
// import Home from '@/components/Hooke/Home'
const Home = () => import('@/components/Hooke/Home')
// import HookeRegister from '@/components/Hooke/HookeRegister'
const HookeRegister = () => import('@/components/Hooke/HookeRegister')
// import HookeStyle from '@/components/Hooke/HookeStyle'
const HookeStyle = () => import('@/components/Hooke/HookeStyle')
// import HookeHome from '@/components/Hooke/HookeHome'
const HookeHome = () => import('@/components/Hooke/HookeHome')
// import HookeAction from '@/components/Hooke/HookeAction'
const HookeAction = () => import('@/components/Hooke/HookeAction')
// import HookePlug from '@/components/Hooke/HookePlug'
const HookePlug = () => import('@/components/Hooke/HookePlug')
// import HookeDetail from '@/components/Hooke/HookeDetail'
const HookeDetail = () => import('@/components/Hooke/HookeDetail')
// import UserSpace from '@/components/Hooke/UserSpace'
const UserSpace = () => import('@/components/Hooke/UserSpace')
// import HookeForget from '@/components/Hooke/HookeForget'
const HookeForget = () => import('@/components/Hooke/HookeForget')
// import HookeRevisePsw from '@/components/Hooke/HookeRevisePsw'
const HookeRevisePsw = () => import('@/components/Hooke/HookeRevisePsw')
// import HookeRegisterSuccess from '@/components/Hooke/HookeRegisterSuccess'
const HookeRegisterSuccess = () => import('@/components/Hooke/HookeRegisterSuccess')
// import HookeChangePsw from '@/components/Hooke/HookeChangePsw'
const HookeChangePsw = () => import('@/components/Hooke/HookeChangePsw')
// import HookeAbout from '@/components/HookeAbout'
const HookeAbout = () => import('@/components/HookeAbout')
// import HookeProtocol from '@/components/HookeProtocol'
const HookeProtocol = () => import('@/components/HookeProtocol')
// import HookeLegal from '@/components/HookeLegal'
const HookeLegal = () => import('@/components/HookeLegal')

Vue.use(Router)

export default new Router({
  mode: 'hash',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
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
        component: HookeDetail,
        props: true
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
    },
    {
      path: '/HookeChangePsw',
      name: 'HookeChangePsw',
      component: HookeChangePsw
    },
    {
      path: '/about',
      name: 'HookeAbout',
      component: HookeAbout
    },
    {
      path: '/protocol',
      name: 'HookeProtocol',
      component: HookeProtocol
    },
    {
      path: '/legal',
      name: 'HookeLegal',
      component: HookeLegal
    }
    ]
  }
  ]
})
