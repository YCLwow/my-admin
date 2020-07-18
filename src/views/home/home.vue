<template>
  <div id="home" style="height:100%;">
    <el-container>
      <el-aside width="200px">
        <!-- 左侧菜单栏 -->
        <el-container style="height:100%;">
          <el-header>
            <div class="avatar"></div>
          </el-header>
          <el-main>
            <el-menu
              default-active="1-4-1"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              :collapse="isCollapse"
            >
              <el-submenu index="1">
                <span slot="title">导航一</span>
                <el-menu-item-group>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="2">
                <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <span slot="title">导航四</span>
              </el-menu-item>
            </el-menu>
          </el-main>
        </el-container>
      </el-aside>
      <el-container>
        <el-header>
          <!-- 头部导航栏 -->
          <el-button @click="loginOut">退出登录</el-button>
        </el-header>
        <el-main>
          <!-- 页面内容展示 -->
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

<style lang='scss' scoped>
.avatar {
  height: 100%;
  width: 100%;
  background-color: skyblue;
}
.el-header {
  padding: 0px;
}
.el-main {
  padding: 0px;
}
.el-menu {
  height: 100%;
}
</style>