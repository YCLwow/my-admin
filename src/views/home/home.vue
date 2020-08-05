<template>
  <div id="home" style="height:100%;">
    <el-container>
      <el-aside width="200px">
        <!-- 左侧菜单栏 -->
        <Menu></Menu>
      </el-aside>
      <el-container>
        <el-header>
          <!-- 头部导航栏 -->
          <el-button @click="loginOut" class="layout">退出登录</el-button>
          <Navbar> </Navbar>
        </el-header>
        <el-main>
          <!-- 页面内容展示 -->
          <!-- 占位可视路由窗口 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { removeToken } from '@/utils/auth'
import Cookies from 'js-cookie'
import Menu from '../../layout/rightMenu'
import Navbar from '../../layout/navigation'
export default {
  components: {
    Menu: Menu,
    Navbar: Navbar
  },
  data() {
    return {

    }
  },
  methods: {
    loginOut() {
      removeToken()
      this.$router.push({ path: '/login' })
    },
    handleChange(value) {
      console.log(value);
    }
  }
}
</script>

<style lang='scss' scoped>
.layout {
  float: right;
  margin-right: 20px;
}
</style>

<style lang="scss" >
</style>