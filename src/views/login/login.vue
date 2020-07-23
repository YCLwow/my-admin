/*
 * @Author: liuyichen 
 * @Date: 2020-07-04 15:19:06 
 * @Last Modified by: liuyichen
 * @Last Modified time: 2020-07-20 17:50:46
 */
<template>
  <div class="login-container">
    <el-form
      status-icon
      ref="loginForm"
      label-width="100px"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <el-form-item label="账号" prop="name">
        <el-input
          type="name"
          v-model="loginForm.name"
          autocomplete="off"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          autocomplete="off"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="loginSubmit('loginForm')"
          >提交</el-button
        >
        <el-button @click="oginReset('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// @ is an alias to /src
import { validUsername } from '@/utils/validate'
import { setToken } from '@/utils/auth'
import { login, register } from "../../api/user"
import MSchool from '../../common/extend'
import { debounce } from '../../common/common'

export default {
  name: "login",
  components: {
  },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不得少于6位数'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        name: '',
        password: ''
      },
      loginRules: {
        name: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      index: 0,
      flag: true,
      timer: '',
      arr: [
        {
          'id': '1',
          'name': '系统',
          'pid': '0'
        },
        {
          'id': '2',
          'name': '我的面板',
          'pid': '1'
        },
        {
          'id': '3',
          'name': '内容管理',
          'pid': '1'
        },
        {
          'id': '4',
          'name': '个人信息',
          'pid': '2'
        },
        {
          'id': '5',
          'name': '文件管理',
          'pid': '2'
        },
        {
          'id': '6',
          'name': '统计分析',
          'pid': '3',
          children: [{
            'id': '6',
            'name': '统计分析',
            'pid': '3',
          }]
        }
      ]
    }
  },
  methods: {
    loginSubmit: debounce(function () {
      console.log('提交')
      this.$refs.loginForm.validate(vaild => {
        if (vaild) {
          console.log('校验通过')
          // 加载完毕
          this.loading = true
          // 保证登录后获得的token,全局都可以调用我们应该存储在cookie和vuex中
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            // 跳转页面到首页
            this.$router.push({ path: '/home' })
          }).catch((error) => {
            console.log(error)
          })
          this.loading = false
        } else {
          console.log('错误的提交')
          return false
        }
      })
      // const testEx = new MSchool('构造名字')
      // testEx.sayName('参数名字')
    }, 2000, true),
    oginReset() {
      // 防抖
      // console.log('重置')
      // this.loginForm = {
      //   name: '',
      //   password: ''
      // }
    },
    async register() {
      const res = await this.register(this.loginForm)
      console.log(res)
    }
  }
}
</script>

<style lang="scss">
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  .el-form-item__label {
    color: skyblue;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-form {
  position: relative;
  width: 520px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;
}
.svg-container {
  padding: 6px 5px 6px 15px;
  color: $dark_gray;
  vertical-align: middle;
  width: 30px;
  display: inline-block;
}
</style>
