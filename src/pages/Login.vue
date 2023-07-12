<script lang="ts">
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: '',
      message: ''
    };
  },
  methods: {
    // gotoUser() {
    //   this.$router.push('/Main');
    // },
    gotoRegister() {
      this.$router.push('/Register')
    },
    gotoUser() {
      axios.post('http://localhost:5000/api/login',
        {
          username: this.username,
          password: this.password
        }
      )
        .then(response => {
          // 处理成功响应
          console.log(response.data);
          //如果为单车运营商用户则跳转到Main界面
          if (response.data.result == "success") {
            this.$router.push('/Main');
            this.message = "";
          }
          //如果为用户管理员则跳转到Mainforadmin界面
          else if (response.data.result == "admin") {
            this.$router.push('/Mainforadmin');
            this.message = "";
          }
          //否则有错误
          else {
            this.message = "用户名不存在或密码错误";
          }
        });
    }
  }
}
</script>

<template>
  <div class="absolute inset-0 bg-cover bg-center bg-background5 -z-50"></div>
  <Card class="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-2/5 h-3/5 flex flex-col gap-2">
    <div class="absolute inset-0 bg-white/75 -z-20 dark:bg-black/40 rounded-lg"></div>

    <span class="text-4xl text-center font-semibold basis-1/4 mt-8">共享单车调度系统</span>

    <div class="m-2 flex flex-col gap-2 basis-1/2">
      <div class="mb-3 text-center mt-5">
        <label for="username" class="mb-2 font-semibold">用户名</label>
        <el-input class="h-8 rounded" style="width: 200px;" type="text" maxlength=30 placeholder="请输入用户名..."
          v-model="username" clearable />
      </div>
      <div class="text-center">
        <label for="password" class="mb-2 ml-3 font-semibold">密码</label>
        <el-input rounded class="h-8 rounded" style="width: 200px;" type="password" maxlength=30 placeholder="请输入密码..."
          v-model="password" show-password />
      </div>
      <span class="text-red-400 text-center">{{ message }}</span>
    </div>

    <div class="flex gap-x-12 justify-center basis-1/4">
      <el-button @click="gotoUser" type="primary" class="w-40 h-10 font-bold" size="large">登录</el-button>
      <el-button @click="gotoRegister" type="primary" plain class="w-40 h-10 font-bold " size="large">注册</el-button>
      <!-- <button @click="gotoRegister" class="rounded outline outline-offset-2 outline-sky-400 ... w-20 h-10 font-bold"
        color="alternative">
        注册
      </button> -->
    </div>
  </Card>
</template>
