import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
   {
      path: '/',
      redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/home.vue')
  },
  {
   path: '/login',
   name: 'login',
   component: () => import('../views/login/login.vue')
 },{
    path: '/my',
    name: 'my',
    component: () => import('../views/my/my.vue')
  },
  {
    path: '/strategy',
    name: 'strategy',
    component: () => import('../views/strategy/strategy.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/search/search.vue')
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router