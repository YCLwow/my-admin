import Cookies from 'js-cookie'
const TokenKey = 'vue_admin_template_token'

// 获取token
export function getToken() {
  return Cookies.get(TokenKey)
}

// 重新设置从cookies中的token值
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

// 移除
export function removeToken() {
  return Cookies.remove(TokenKey)
}
