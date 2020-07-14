<template>
  <div id="home">
    <el-container>
      <el-aside width="200px">
        <!-- 左侧菜单栏 -->
        aside
      </el-aside>
      <el-container>
        <el-header>
          <!-- 头部导航栏 -->
          Header
          <el-button @click="loginOut">退出登录</el-button>
        </el-header>
        <el-main>
          <!-- 页面内容展示 -->
          Main
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { removeToken } from '@/utils/auth'
import Cookies from 'js-cookie'
export default {
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

<style>
</style>