// state 计算属性等效于return state.user.token
const getters = {
  token: (state) => state.user.token,
  // 头像
  avatar: (state) => state.user.avatar,
  name: (state) => state.user.name,
  roles: state => state.user.roles,
}
export default getters
// 获取用户信息
