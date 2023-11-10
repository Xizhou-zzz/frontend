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
      @select="handleMenuSelect" background-color="#ffd04b" text-color="#000000" active-text-color="#000000">
      <el-menu-item index="0"><el-icon>
        </el-icon>作业互评系统</el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1">可视化分析单车数据</el-menu-item>
      <el-menu-item index="2">预测单车需求</el-menu-item>
      <el-button color="#ffd04b" icon="SwitchButton" class="mt-3" @click="() => {
        router.push('/')
      }" title="退出登录" circle />
    </el-menu>
    <div class="mt-10 font-bold text-black text-4xl text-center font-bold">
      欢迎来到作业互评系统！
    </div>

  </div>
</template>