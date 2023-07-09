<script>
export default {
    name: "Visualize",
    methods: {
        gotoLogin() {
            this.$router.push('/')
        }
    }
}
</script>

<template>
    <!-- 页面背景图片 -->
    <div class="absolute inset-0  bg-cover bg-center bg-fixed bg-background2 -z-50"></div>
    <!-- 页面最上方的导航栏 -->
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
                        <a href="#/Visualize" class="text-gray-300 px-3 py-2 rounded-md text-sm font-bold bg-gray-700">
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
    </div>
    <!-- 页面左方的导航栏 -->
    <div class="absolute top-48 left-0">
        <nav class="max-h-7xl mx-auto px-4 sm:px-6 lg:px-8 ml-0">

            <div class="flex items-center h-16">
                <div class="hidden md:block ml-20">

                    <div class="absolute left-5 top-0 flex items-baseline space-y-8 flex flex-col w-56">
                        <div class="absolute left-1 ml-2 text-white rounded-md text-sm font-bold">
                            请选择图表类型:
                        </div>
                        <a href="#/Visualone"
                            class="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
                            同一地点不同时间的单车需求量
                        </a>

                        <a href="#/Visualtwo"
                            class="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
                            同一时间不同地点的单车需求量
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>