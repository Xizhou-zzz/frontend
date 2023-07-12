<script lang="ts">
import axios from "axios";
import { User, Lock } from '@element-plus/icons-vue'
import { ElMessage } from "element-plus";

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
            ElMessage.error(this.message)
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

    <span class="text-4xl text-center font-semibold basis-1/4 mt-8">用户登录</span>

    <div class="m-2 flex flex-col gap-2 basis-1/4">
      <div class="mb-3 text-center mt-5">
        <el-input class="h-9" style="width: 270px" type="text" maxlength=30 placeholder="请输入用户名..." v-model="username"
          prefix-icon="User" round clearable />

      </div>

      <div class="text-center">
        <el-input class="h-9" style="width: 270px" type="password" maxlength=30 placeholder="请输入密码..." v-model="password"
          prefix-icon="Lock" round show-password />
      </div>
    </div>

    <div class="flex flex-col gap-x-12 justify-center basis-1/2">
      <el-button @click="gotoUser" class="mt-0 ml-40" type="primary" style="width: 270px;" size="large"
        round>登录</el-button>
      <el-link class="mt-5 ml-56" @click="gotoRegister" style="width: 140px">还没有账号？立即注册</el-link>
    </div>
  </Card>
</template>
