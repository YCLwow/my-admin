import request from '@/utils/request'
import Cookies from 'js-cookie'

export function login(data) {
  console.log("登录请求")
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
export function registered(data) {
  console.log('注册请求')
  return request({
    url: '/user/register',
    method: 'post',
    data
  })
}