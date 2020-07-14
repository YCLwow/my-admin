import axios from 'axios'
import { messageBox, Message } from 'element-ui'
import store from "../store"
import { getToken } from '@/utils/auth'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,//url =本地地址+ baseurl(三个生产文件中的配置) + request url(api请求的地址)
  // 超时时间
  timeout: 4000
})

service.interceptors.request.use(
  // config
  config => {
    // 如果是登录不需要携带token
    if (config.url === 'login') {
      return config
    } else {
      // 其他情况都需要携带token
      if (store.getters.token) {
        // 请求头中token的自定义携带参数
        config.headers['L-Token'] = getToken()
      }
      return config
    }
  },
  error => {
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 20000) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
    }
    // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
    if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      // to re-login
      MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
        confirmButtonText: '重新登陆',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 移除token，防止bug
        store.dispatch('user/resetToken').then(() => {
          // 为了重新实例化vue-router对象 避免bug
          location.reload()
        })
      })
      // 如果相应错误，则返回一个错误状态的promise对象
      console.log('响应错误')
      return Promise.reject(new Error(res.message || 'Error'))
    }
    else {
      return res
    }
  },
  error => {
    console.log('err' + error)
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service