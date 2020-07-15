import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { getToken } from '@/utils/auth'
import Login from '../views/login/login.vue'
import Home from '../views/home/home.vue'


Vue.use(VueRouter)

// 通用路由
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

export default router
