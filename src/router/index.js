import Vue from 'vue'
import Router from 'vue-router'
import Info from '@/components/info/Info'
import Overview from '@/components/info/Overview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'NetbarInfo'}
    },
    {
      path: '/netbarinfo',
      name: 'NetbarInfo',
      component: Info,
      children: [
        {
          path: 'overview',
          component: Overview
        }
      ]
    }
  ]
})
