import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: '/globalScan'
    },
    {
      path: '/globalScan',
      name: 'globalScan',
      component: () => import('../views/globalScan')
    },
    {
      path: '/internetfraud',
      name: 'internetFraud',
      component: () => import('../views/internetFraud')
    },
    {
      path: '/illegalfund',
      name: 'illegalFund',
      component: () => import('../views/illegalFund')
    },
    {
      path: '/gatheringcenter',
      name: 'gatheringCenter',
      component: () => import('../views/gatheringCenter')
    },
    {
      path: '/systemoptions',
      name: 'systemOptions',
      component: () => import('../views/systemOptions')
    }
  ]
})
