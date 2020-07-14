import { login } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
  token: getToken()
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

const actions = {
  login({ commit }, userInfo) {
    const { name, password } = userInfo
    // 当请求的方法执行完毕后才执行后面的方法
    return new Promise((resolve, reject) => {
      login({ name, password }).then(response => {
        const data = response
        console.log(data.token)
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
}

// 开启命名，使用时模块名+模块中的方法名 防止冲突
export default { state, actions, mutations, namespaced: true, }