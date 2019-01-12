import Vue from 'vue'
import Router from 'vue-router'
import Info from '@/components/info/Info'
import Overview from '@/components/info/Overview'
import Analysis from '@/components/info/Analysis'
import Shift from '@/components/info/Shift'

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
          path: '',
          redirect: {name: 'overview'}
        },
        {
          path: 'overview',
          name: 'overview',
          component: Overview
        },
        {
          path: 'analysis',
          component: Analysis
        },
        {
          path: 'shift',
          component: Shift
        },
        {
          path: 'order',
          component: Overview
        }
      ]
    }
  ]
})
