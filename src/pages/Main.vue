<script lang="ts">
export default {
  name: "Main",
  methods: {
    gotoLogin() {
      this.$router.push('/')
    }
  }
}
</script>


<template>
  <!-- 页面背景图片 -->
  <div class="absolute inset-0  bg-cover bg-center bg-background2 -z-50"></div>
  <!-- 页面最上方导航栏 -->
  <div class="absolute inset-0">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ml-0">
      <div class="flex items-center h-16">
        <div class="flex-shrink-0">
          <h1 class="text-white text-lg font-semibold">共享单车调度系统</h1>
        </div>
        <div class="hidden md:block ml-20">
          <div class="flex items-baseline space-x-10">
            <a href="#/Import"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
              导入共享单车数据
            </a>
            <a href="#/Visualize"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
              可视化分析单车数据
            </a>
            <a href="#/Predict"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
              预测单车需求
            </a>
            <a href="#/Price"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
              动态定价
            </a>
          </div>
        </div>

        <div class="absolute top-3 right-5">
          <button @click="gotoLogin" class="bg-exit bg-cover bg-center py-4 px-4 rounded" title="退出登录">
          </button>
        </div>
      </div>
    </nav>
    <div class="mt-20 font-bold text-gray-300 text-4xl text-center">
      欢迎来到共享单车调度系统！
    </div>
  </div>
</template>