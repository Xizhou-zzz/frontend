<script lang="ts">
export default {
    name: "Price",
    methods: {
        gotoLogin() {
            this.$router.push('/')
        }
    }
}
</script>

<template>
    <div class="absolute inset-0  bg-cover bg-center bg-background2 -z-50"></div>
    <div class="absolute inset-0">
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ml-0">
            <div class="flex items-center h-16">
                <div class="flex-shrink-0">
                    <h1 class="text-white text-lg font-semibold">作业互评系统</h1>
                </div>
                <div class="hidden md:block ml-20">
                    <div class="flex items-baseline space-x-10">


                        <a href="#/Visualone"
                            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
                            可视化分析单车数据
                        </a>
                        <a href="#/Predict"
                            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
                            预测单车需求
                        </a>
                        <a href="#/Price" class="text-gray-300 px-3 py-2 rounded-md text-sm font-bold bg-gray-700">
                            单车调度
                        </a>
                    </div>
                </div>

                <div class="absolute top-3 right-5">
                    <el-button icon="SwitchButton" @click="gotoLogin" title="退出登录" circle />
                </div>

            </div>
        </nav>
    </div>
    <div>
        这是动态定价界面
    </div>
</template>