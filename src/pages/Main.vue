<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const activeIndex = ref('0')
const handleMenuSelect = (index) => {
  switch (index) {
    case '0':
      router.push('/Main');
      break;

    case '1':
      router.push('/Visualone');
      break;

    case '2':
      router.push('/predict');
      break;

    default:
      break;
  }
}
</script>

<template>
  <!-- 页面最上方导航栏 -->
  <div class="absolute inset-0 ">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
      @select="handleMenuSelect" background-color="#409EFF" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="0">共享单车调度系统</el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1">可视化分析单车数据</el-menu-item>
      <el-menu-item index="2">预测单车需求</el-menu-item>
      <el-button type="primary" icon="SwitchButton" class="mt-3" @click="() => {
        router.push('/')
      }" title="退出登录" circle />
    </el-menu>
    <!-- <nav class="w-full mx-auto px-4 sm:px-6 lg:px-8 ml-0">
      <div class="flex items-center h-16">
        <div class="flex-shrink-0">
          <h1 class="text-white text-lg font-semibold">共享单车调度系统</h1>
        </div>
        <div class="hidden md:block ml-20">
          <div class="flex items-baseline space-x-10">
            <a href="#/Visualone"
              class="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
              可视化分析单车数据
            </a>
            <a href="#/Predict"
              class="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
              预测单车需求
            </a>
            <a href="#/Price"
              class="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
              单车调度
            </a>
          </div>
        </div>
        <div class="absolute top-4 right-5">
          <el-button icon="SwitchButton" @click="gotoLogin" title="退出登录" circle />
        </div>
      </div>
    </nav> -->
    <div class="mt-10 font-bold text-black text-4xl text-center font-serif">
      欢迎来到共享单车调度系统！
    </div>
  </div>
</template>