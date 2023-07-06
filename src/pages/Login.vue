<script lang="ts">
export default {
  name: "Login",
  methods: {
    gotoUser() {
      this.$router.push('/Register')
    },
    gotoUser1() {
      this.$router.push('/Main')
    }
  }
}

</script>

<template>
  <div class="absolute inset-0 bg-cover bg-center bg-background -z-50"></div>

  <Card class="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-2/5 h-2/5 flex flex-col gap-2">
    <div class="rounded-lg border-solid absolute inset-0 bg-white/75 -z-20 dark:bg-black/40"></div>

    <span class="font-serif text-2xl text-center font-semibold basis-1/4 mt-6">共享单车调度系统</span>

    <div class="m-2 flex flex-col gap-2 basis-1/2">
      <div class="font-serif font-bold mb-3 text-center">
        <Label for="username" class="mb-2">用户名</Label>
        <Input type="text" placeholder="请输入用户名..." />
      </div>
      <div class="font-serif font-bold text-center ">
        <Label for="password" class="mb-2 ml-4">密码</Label>
        <Input type="password" placeholder="请输入密码..." />
      </div>
    </div>

    <div class="flex gap-4 justify-center basis-1/4">
      <Button
        class="font-serif font-bold rounded-md border-solid outline outline-offset-2 outline-cyan-500 ... ... w-1/4 h-1/2"
        @click="gotoUser1">登录</Button>

      <Button
        class="font-serif font-bold rounded-md border-solid outline outline-offset-2 outline-cyan-500 ... w-1/4 h-1/2"
        color="alternative" @click="gotoUser">注册</Button>
    </div>

  </Card>
</template>
