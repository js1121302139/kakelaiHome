import Vue from 'vue'
import Router from 'vue-router'

import IndexView from '@/pages/indexView.vue'
import Home from '@/pages/home/home.vue'
import Service from '@/pages/service/service.vue'
import Cooperation from '@/pages/cooperation/cooperation.vue'
import HelpCenter from '@/pages/helpCenter/helpCenter.vue'
import AboutUs from '@/pages/aboutUs/aboutUs.vue'

Vue.use(Router)
let Route = new Router({
  routes: [
    {
      path: '/',
      redirect: '/IndexView'
    },
    {
      path: '/IndexView',
      name: 'IndexView',
      component: IndexView,
      children: [
        {
          path: '/',
          redirect: '/IndexView/home'
        },
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'service',
          name: 'Service',
          component: Service
        },
        {
          path: 'cooperation',
          name: 'Cooperation',
          component: Cooperation
        },
        {
          path: 'helpCenter',
          name: 'HelpCenter',
          component: HelpCenter
        },
        {
          path: 'aboutUs',
          name: 'AboutUs',
          component: AboutUs
        },
        {
          path: 'appDow',
          name: 'AppDow',
          component: Home
        }
      ]
    }
  ]
})
Route.beforeEach((to, from, next) => {
  if (to.name === 'AppDow') {
    next({name: from.name})
  } else {
    next()
  }
})
export default Route
