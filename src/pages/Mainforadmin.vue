<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const activeIndex = ref('1')
const handleMenuSelect = (index) => {
    switch (index) {
        case '1':
            router.push('/Mainforadmin');
            break;

        case '2':
            router.push('/Manageuser');
            break;

        default:
            break;
    }
}
</script>

<template>
    <!-- 页面最上方导航栏 -->
    <div class="absolute inset-0">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
            @select="handleMenuSelect" background-color="#ffd04b" text-color="#000000" active-text-color="#000000">
            <el-menu-item index="1"><el-icon>
                    <Bicycle />
                </el-icon>共享单车调度系统</el-menu-item>
            <div class="flex-grow" />
            <el-menu-item index="2">管理用户</el-menu-item>
            <el-button color="#ffd04b" icon="SwitchButton" class="mt-3" @click="() => {
                router.push('/')
            }" title="退出登录" circle />
        </el-menu>
        <div class="mt-56 font-bold text-black
         text-4xl text-center font-bold">
            欢迎来到用户管理员界面！
        </div>
    </div>
</template>