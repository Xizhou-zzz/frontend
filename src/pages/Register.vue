<script lang="ts">
import axios from "axios";
 export default {
  name:"Register",
  data() {
    return {
      username: '',
      password: '',
      againpassword: ''
    };
  },
  methods: {
    gotoLogin() {
      this.$router.push('/')
    },

    goReguster(){
        axios.post('/api/Register',
        {
          username:this.username,
          password:this.password,
        }
        )
      .then(response => {
        // 处理成功响应
        console.log(response.data);
      })
      .catch(error => {
        // 处理错误响应
        console.error(error);
      });
    }
  }
}

</script>

<template>
  <div class="absolute inset-0 bg-cover bg-center bg-background -z-50"></div>
    <Card
    class="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-2/5 h-2/5 flex flex-col gap-2"
  >
    <div class="absolute inset-0 bg-white/75 -z-20 dark:bg-black/40"></div>
    
    <span class="text-2xl text-center font-semibold basis-1/4">共享单车调度系统</span>

    <div class="m-2 flex flex-col gap-2 basis-1/2">

      <div class="text-center basis-1/3">
        <label for="username" class="mb-2">账号</label>
        <input
          class = " rounded" 
          type="text"
          placeholder="请输入账号..."
          v-model="username"
        />
      </div>

      <div class = "text-center basis-1/3">
        <label for="password" class="mb-2">密码</label>
        <input
          rounded
          class = " rounded"
          type="password"
          placeholder="请输入密码..."
          v-model="password"
        />
      </div>

      <div class = "text-center basis-1/3 mr-20">
        <label for="password" class="mb-2">请再次输入密码</label>
        <input
          rounded
          class = " rounded"
          type="password"
          placeholder="请再次输入密码..."
          v-model="againpassword"
        />
      </div>

    </div>
 
    <div class="flex gap-4 justify-center basis-1/4">
      <button  @click="gotoLogin" class="rounded bg-indigo-500 ... ... w-1/4 h-1/2">登录</button>
      <button class= "rounded outline outline-offset-2 outline-cyan-500 ... w-1/4 h-1/2" color="alternative" >注册</button>
    </div>
  </Card>
</template>