<script lang="ts">
export default {
    name: "Price",
    methods: {
        // gotoFunction1() {
        //     this.$router.push('/Register')
        // }
    }
}
</script>

<template>
    <div class="absolute inset-0  bg-cover bg-center bg-background2 -z-50"></div>
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
                        <a href="#/Price" class="text-gray-300 px-3 py-2 rounded-md text-sm font-bold bg-gray-700">
                            动态定价
                        </a>
                    </div>
                </div>

                <div class="absolute top-3 right-5">
                    <select name="function" id="function-select"
                        class="h-10 rounded-md text-cyan-700 px-3 py-2 text-sm font-bold">

                        <option class="text-cyan-700 px-3 py-2 text-sm font-bold" value="">你好，用户</option>
                        <option class="text-cyan-700 px-3 py-2 text-sm font-bold" value="function1">功能1</option>
                        <option class="text-cyan-700 px-3 py-2 text-sm font-bold" value="function2">功能2</option>
                        <option class="text-cyan-700 px-3 py-2 text-sm font-bold" value="function3">退出登录</option>

                    </select>

                </div>

            </div>
        </nav>
    </div>
    <div>
        这是动态定价界面
    </div>
</template>