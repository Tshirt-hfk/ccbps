import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

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
      path: '/login',
      name: 'login',
      component: () => import('../views/login')
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
      component: () => import('../views/illegalFund'),
    },
    {
      path: '/gatheringcenter',
      name: 'gatheringCenter',
      component: () => import('../views/gatheringCenter')
    },
    {
      path: '/internetFraudEventDetails',
      name: 'internetFraudEventDetails',
      component: () => import('../views/internetFraudEventDetails')
    },
    {
      path: '/illegalfundEventDetails',
      name: 'illegalfundEventDetails',
      component: () => import('../views/illegalfundEventDetails')
    },
    {
      path: '/systemoptions',
      name: 'systemOptions',
      component: () => import('../views/systemOptions'),
      redirect: '/systemoptions/internetOptions',
          children: [
            {
              path: 'internetOptions',
              name: 'internetOptions',
              component: () => import('../views/systemOptions/internetOptions')
            },
            {
              path: 'illegalOptions',
              name: 'illegalOptions',
              component: () => import('../views/systemOptions/illegalOptions')
            },
            {
              path: 'userManagement',
              name: 'userManagement',
              component: () => import('../views/systemOptions/userManagement')
            }
          ]
    }
  ]
})
