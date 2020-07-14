import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { getToken } from '@/utils/auth'
import Login from '../views/login/login.vue'
import Home from '../views/home/home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  //路由重定向
  { path: '/', redirect: '/login' },
  {
    path: '/404',
    name: '404',
    // 箭头函数路由懒加载
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach(async (to, from, next) => {
  const hasToken = getToken()
  console.log(hasToken)
  if (hasToken) {
    if (to.path === '/login') {
      next('/home')
    } else {
      next()
    }
  } else {
    console.log('未登录,请去登录')
    if (to.name === 'login') {
      next()
    } else {
      next('login')
    }
  }
})

export default router
