<script lang="ts">
import axios from 'axios';

 export default {
  name:"LoginPage",
  methods: {
    gotoRegister() {
      this.$router.push('/Register')
    },

    gotoUser(){
      axios
      .post(
        "http://127.0.0.1:5000/api/login",
        JSON.stringify({
          username,
          password,
        })
      )
      .then((res) => {
        console.log("[then]: ", res);
        res = res.data;
        this.$router.push('/User')
      })
      .catch((err) => {
        console.log("[error]: ", err);
        console.log("error info: ", err.response.data.error);
        Err();
      });
    }
  }
}
  function Err() {
    message = "用户名不存在或密码错误";
  }

  let message = "";
  let username = "";
  let password = "";

</script>

<template>
  <div class="absolute inset-0 bg-tjw-sb -z-50"></div>
    <Card
    class="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-2/5 h-2/5 flex flex-col gap-2"
  >
    <div class="absolute inset-0 bg-white/75 -z-20 dark:bg-black/40"></div>
    
    <span class="text-2xl text-center font-semibold basis-1/4">共享单车1.0调度系统</span>

    <div class="m-2 flex flex-col gap-2 basis-1/2">
      <div class="mb-3 text-center ">
        <Label for="username" class="mb-2">账号</Label>
        <Input
          class = "h-8 rounded" 
          type="text"
          placeholder="请输入账号..."
          bind:value={{username}}
        />
      </div>
      <div class = "text-center ">
        <Label for="password" class="mb-2 ">密码</Label>
        <Input
          rounded
          class = "h-8 rounded"
          type="password"
          placeholder="请输入密码..."
          bind:value={{password}}
        />
      </div>
    </div>
 
    <div class="flex gap-4 justify-center basis-1/4">
      <button  @click="gotoUser" class="rounded bg-indigo-500 ... ... w-1/4 h-1/2">登录</button>
      <button @click="gotoRegister" class= "rounded outline outline-offset-2 outline-cyan-500 ... w-1/4 h-1/2" color="alternative" >注册</button>
    </div>
  </Card>
</template>
