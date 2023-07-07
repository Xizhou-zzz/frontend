<script lang="ts">
import axios from "axios";

// import { ref } from "vue";

// const username = ref("");
// const password = ref("");
// const message = ref("");

// function gotoRegister() {
//   this.$router.push("/Register");
// }

// function gotoUser() {
//   axios
//     .post("/api/login", {
//       username: username.value,
//       password: password.value,
//     })
//     .then((response) => {
//       // 处理成功响应
//       console.log(response.data);
//       this.$router.push("/Main");
//     })
//     .catch((error) => {
//       // 处理错误响应
//       console.error(error);
//       Err();
//     });
// }
// function Err() {
//   message.value = "用户名不存在或密码错误";
// }

// function printUsername() {
//   console.log(username.value);
//   console.log("hello,world");
// }

<<<<<<< HEAD
export default {
  name: "Login",
=======
 export default {
  name:"LoginPage",
  data() {
    return {
      username: '',
      password: '',
      message: ''
    };
  },
>>>>>>> c1d86d5df5f29a2eceae91ab6be1f5c97e0f74f5
  methods: {
    gotoRegister() {
      this.$router.push('/Register')
    },

<<<<<<< HEAD
    // gotoUser() {
    //   axios.post('/api/login',
    //     {
    //       username,
    //       password,
    //     }
    //   )
    //     .then(response => {
    //       // 处理成功响应
    //       console.log(response.data);
    //       this.$router.push('/Main');
    //     })
    //     .catch(error => {
    //       // 处理错误响应
    //       console.error(error);
    //       Err()
    //     });
    // }
    gotoUser() {
      this.$router.push('/Main');
    }
  }
}
function Err() {
  message = "用户名不存在或密码错误";
}

let message = "";
let username = "";
let password = "";

=======
    gotoUser(){
        axios.post('/api/login',
        {
          username:this.username,
          password:this.password
        }
        )
      .then(response => {
        // 处理成功响应
        console.log(response.data);
        this.$router.push('/Main');
      })
      .catch(error => {
        // 处理错误响应
        console.error(error);
        Err()
      });
    },

    printUsername() {
      console.log(this.username);
      console.log("hello,world");
  }
  }
}
  function Err() {
    this.message = "用户名不存在或密码错误";
  }
>>>>>>> c1d86d5df5f29a2eceae91ab6be1f5c97e0f74f5
</script>

<template>
  <div class="absolute inset-0 bg-cover bg-center bg-background -z-50"></div>
<<<<<<< HEAD
  <Card class="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-2/5 h-2/5 flex flex-col gap-2">
    <div class="absolute inset-0 bg-white/75 -z-20 dark:bg-black/40"></div>

    <span class="text-2xl text-center font-semibold basis-1/4">共享单车调度系统</span>

    <div class="m-2 flex flex-col gap-2 basis-1/2">
      <div class="mb-3 text-center ">
        <Label for="username" class="mb-2">账号</Label>
        <Input class="h-8 rounded" type="text" placeholder="请输入账号..." bind:value={{username}} />
      </div>
      <div class="text-center ">
        <Label for="password" class="mb-2 ">密码</Label>
        <Input rounded class="h-8 rounded" type="password" placeholder="请输入密码..." bind:value={{password}} />
=======
  <Card
    class="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-2/5 h-2/5 flex flex-col gap-2"
  >
    <div class="absolute inset-0 bg-white/75 -z-20 dark:bg-black/40"></div>

    <span class="text-2xl text-center font-semibold basis-1/4"
      >共享单车调度系统</span
    >

    <div class="m-2 flex flex-col gap-2 basis-1/2">
      <div class="mb-3 text-center">
        <label for="username" class="mb-2">账号{{ username }}</label>
        <input
          class="h-8 rounded"
          type="text"
          placeholder="请输入账号..."
          v-model="username"
        />
      </div>
      <div class="text-center">
        <label for="password" class="mb-2">密码</label>
        <input
          rounded
          class="h-8 rounded"
          type="password"
          placeholder="请输入密码..."
          v-model="password"
        />
>>>>>>> c1d86d5df5f29a2eceae91ab6be1f5c97e0f74f5
      </div>
    </div>

    <div class="flex gap-4 justify-center basis-1/4">
<<<<<<< HEAD
      <button @click="gotoUser" class="rounded outline outline-offset-2 outline-cyan-500 ... w-1/4 h-1/2">登录</button>
      <button @click="gotoRegister" class="rounded outline outline-offset-2 outline-cyan-500 ... w-1/4 h-1/2"
        color="alternative">注册</button>
=======
      <button
        @click="gotoUser"
        class="rounded bg-indigo-500 ... ... w-1/4 h-1/2"
      >
        登录
      </button>
      <button
        @click="gotoRegister"
        class="rounded outline outline-offset-2 outline-cyan-500 ... w-1/4 h-1/2"
        color="alternative"
      >
        注册
      </button>
>>>>>>> c1d86d5df5f29a2eceae91ab6be1f5c97e0f74f5
    </div>
  </Card>
</template>
