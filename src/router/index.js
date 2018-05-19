import Vue from 'vue'
import Router from 'vue-router'
import BottomNav from '@/components/BottomNav'
import HeadCon from '@/components/HeadCon'
import Home from '@/components/Home'
import Wap from '@/components/Wap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/all/__all__',
      components: Home
    },
    {
      path: '/home',
      name: 'Home',
      components: {
        top: HeadCon,
        main: Home,
        bottom: BottomNav
      },
      children: [{
        path: 'all/:type',
        name: 'all',
        component: Wap
      }
      ]
    }
  ]
})
