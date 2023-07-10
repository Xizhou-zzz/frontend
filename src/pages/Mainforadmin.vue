<script lang="ts">
export default {
    name: "Mainforadmin",
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
                        <a href="#/Manageuser"
                            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
                            管理用户
                        </a>
                    </div>
                </div>

                <div class="absolute top-3 right-5">
                    <button @click="gotoLogin" class="bg-exit bg-cover bg-center py-4 px-4 rounded" title="退出登录">
                    </button>
                </div>
            </div>
        </nav>
        <div class="mt-56 font-bold text-white text-4xl text-center font-serif">
            欢迎来到用户管理员界面！
        </div>
    </div>
</template>