<script lang="ts">
export default {
  name: "Main",
  methods: {
    gotoFunction1() {
      this.$router.push('/Register')
    }

  }
}
</script>

<template>
  <div class="absolute top-0 left-0 flex space-x-28 bg-teal-300 text-2xl font-mono h-20 w-full">
    <span class="text-emerald-50 font-bold mt-6">
      共享单车调度系统
    </span>
    <span class="text-emerald-50 ml-60 mt-6 font-bold" @click="gotoFunction1">
      功能1
    </span>
    <span class="text-emerald-50  mt-6 font-bold">
      功能2
    </span>
    <span class="text-emerald-50  mt-6 font-bold">
      功能3
    </span>
    <span class="absolute top-0 right-0">
      <select name="function" id="function-select" class="h-20">
        <option value="">你好，用户</option>
        <option value="function1">功能1</option>
        <option value="function2">功能2</option>
        <option value="function3">功能3</option>
      </select>
    </span>
  </div>

  <div class="absolute top-20 left-0 bg-slate-200 text-xl font-mono w-48 h-full text-center">
    <ul>
      <li class="mt-5 font-bold">导入共享单车数据</li>
      <li class="mt-5 font-bold">可视化分析单车数据</li>
      <li class="mt-5 font-bold">预测单车需求</li>
      <li class="mt-5 font-bold">动态定价</li>
    </ul>
  </div>

  <div>
    <span class="font-bold text-center">
      欢迎来到共享单车调度系统！
    </span>

  </div>
</template>