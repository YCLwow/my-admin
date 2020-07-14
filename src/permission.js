// import router from './router'
// import store from './store'
// import { Message } from 'element-ui'
// import { getToken } from '@/utils/auth' // get token from cookie

// router.beforeEach(async (to, from, next) => {
//   const hasToken = getToken()
//   console.log(hasToken)
//   if (hasToken) {
//     if (to.path === '/login') {
//       next('/home')
//     } else {
//       next()
//     }
//   } else {
//     console.log('未登录,请去登录')
//     if (to.name === 'login') {
//       next()
//     } else {
//       next('login')
//     }
//   }
// })