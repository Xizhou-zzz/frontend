<script lang="ts">
import axios from "axios";
import { ElMessage } from "element-plus";


export default {
  name: "Register",
  data() {
    return {
      username: '',
      password: '',
      againpassword: '',
      message: ''
    };
  },
  methods: {
    gotoLogin() {
      this.$router.push('/')
    },

    goRegister() {
      if (this.password != this.againpassword) {
        this.message = '前后两次输入密码不同'
        ElMessage.error(this.message)
      }

      else if (this.username == "") {
        this.message = '用户名不能为空'
        ElMessage.error(this.message)
      }
      else if (this.password == "") {
        this.message = '密码不能为空'
        ElMessage.error(this.message)
      }
      else {
        this.message = ''
        axios.post('http://localhost:5000/api/Register',
          {
            username: this.username,
            password: this.password,
          }
        )
          .then(response => {
            console.log(response.data);
            if (response.data.result == "NOTFOUND") {
              this.message = "注册成功！";
              ElMessage({
                message: this.message,
                type: 'success',
              })
            }
            else {
              this.message = "用户名已存在，请输入新的用户名";
              ElMessage.error(this.message)
            }
          });
      }

    }
  }
}
</script>

<template>
  <div class="absolute inset-0 bg-cover bg-center bg-background5 -z-50"></div>
  <div class="absolute left-1/3 top-8 text-6xl font-semibold">共享单车调度系统</div>
  <Card class="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-2/5 h-3/5 flex flex-col gap-2">
    <div class="absolute inset-0 bg-white/75 -z-20 dark:bg-black/40 rounded-lg"></div>

    <span class="text-4xl text-center font-semibold basis-1/4 mt-8">用户注册</span>

    <div class="m-2 flex flex-col gap-2 basis-1/4 space-y-2">

      <div class="text-center basis-1/4">
        <el-input class="h-9 rounded-full pl-2 w-60" style="max-width: 270px" type="text" maxlength=30
          placeholder="请输入用户名..." v-model="username" prefix-icon="User" />
      </div>

      <div class="text-center basis-1/4">
        <el-input class="h-9 rounded-full pl-2 w-60" style="max-width: 270px" type="password" maxlength=30
          placeholder="请输入密码..." v-model="password" prefix-icon="Lock" round show-password />
      </div>

      <div class="text-center basis-1/4">
        <el-input class="h-9 rounded-full pl-2 w-60" style="max-width: 270px" type="password" maxlength=30
          placeholder="请再次输入密码..." v-model="againpassword" prefix-icon="Lock" round show-password />
      </div>
    </div>

    <div class="flex flex-col gap-x-12 justify-center basis-1/2">
      <el-button @click="goRegister" class="mt-0 ml-40" type="primary" style="max-width: 270px;" size="large"
        round>确认</el-button>
      <el-link class="mt-5 ml-56" @click="gotoLogin" style="max-width: 140px">已有账号？点击此登录</el-link>
    </div>
  </Card>
</template>