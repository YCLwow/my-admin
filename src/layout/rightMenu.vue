<template>
  <el-container style="height:100%;">
    <el-header>
      <div class="avatar"></div>
    </el-header>
    <el-main>
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo">
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
          <router-link :to="{ name: 'management' }" slot="title">
            <span>账号管理</span>
          </router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <router-link :to="{ name: 'tinymce' }" slot="title">
            <span>富文本</span>
          </router-link>
        </el-menu-item>
      </el-menu>
    </el-main>
  </el-container>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.avatar {
  height: 100%;
  width: 100%;
  background-color: skyblue;
}
.el-menu {
  height: 100%;
}
.el-header {
  padding: 0px;
}
.el-main {
  padding: 0px;
}

/*包含以下五种的链接*/
a {
  text-decoration: none;
}
/*正常的未被访问过的链接*/
a:link {
  text-decoration: none;
}
/*已经访问过的链接*/
a:visited {
  text-decoration: none;
}
/*鼠标划过(停留)的链接*/
a:hover {
  text-decoration: none;
}
/* 正在点击的链接，鼠标在元素上按下还没有松开*/
a:active {
  text-decoration: none;
}
/* 获得焦点的时候 鼠标松开时显示的颜色*/
a:focus {
  text-decoration: none;
}
a {
  color: black;
}
.router-link-active {
  color: #409eff;
}
.el-menu-item.is-active {
  color: black;
}
span {
  display: inline-block;
  width: 100%;
  height: 100;
}
</style>