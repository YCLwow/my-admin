<template>
  <div>
    <el-form
      status-icon
      ref="registerFrom"
      label-width="120px"
      :model="registerfrom"
      class="register_from"
    >
      <el-form-item label="账号" prop="registerName">
        <el-input
          type="name"
          v-model="registerfrom.name"
          autocomplete="off"
          clearable
          style="width:200px;"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="registerPassword">
        <el-input
          type="password"
          v-model="registerfrom.password"
          autocomplete="off"
          clearable
          style="width:200px;"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="againPassword">
        <el-input
          type="password"
          v-model="registerfrom.againPassword"
          autocomplete="off"
          clearable
          style="width:200px;"
        ></el-input>
      </el-form-item>
      <el-form-item class="">
        <el-button type="primary" @click="registerSubmit('registerfrom')"
          >提交</el-button
        >
        <el-button @click="registerReset('registerfrom')" class="register_reset"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { register } from '@/api/user'
export default {
  data() {
    return {
      registerfrom: {
        name: '',
        password: '',
        againPassword: ''
      }
    }
  },
  methods: {
    async registerSubmit() {
      console.log(register)
      const res = await register(this.registerfrom)
      console.log(res)

    },
    registerReset() {

    }
  }
}
</script>

<style lang='scss'>
.register_from {
  .el-form-item__content {
    text-align: left;
  }
  .register_reset {
    margin-left: 62px !important;
  }
}
</style>