import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { getToken } from '@/utils/auth'
import Login from '../views/login/login.vue'
import Home from '../views/home/home.vue'
import Management from '../components/account/management.vue'
import Tinymce from '../components/Tinymce/tinymce.vue'


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
    children: [
      {
        path: 'management',
        name: 'management',
        component: Management
      },
      {
        path: 'tinymce',
        name: 'tinymce',
        component: Tinymce
      }
    ]
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
