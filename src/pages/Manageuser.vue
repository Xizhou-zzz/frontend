<script lang="ts">
export default {
    name: "Manageuser",
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
                        <a href="#/Manageuser" class="text-gray-300 px-3 py-2 rounded-md text-sm font-bold bg-gray-700">
                            管理用户
                        </a>
                        <!-- <a href="#/Visualone"
                            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
                            增加用户数据
                        </a>
                        <a href="#/Predict"
                            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
                            删除用户数据
                        </a>
                        <a href="#/Price"
                            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
                            修改用户数据
                        </a> -->
                    </div>
                </div>

                    
                <div class="absolute top-3 right-5">
                    <button @click="gotoLogin" class="bg-exit bg-cover bg-center py-4 px-4 rounded" title="退出登录">
                    </button>
                </div>
            </div>
        </nav>

        <div class = "flex justify-center">
                <table class="table-auto cmin-w-full bg-white flex justify-center">
                    <thead>
                        <tr>
                        <th>Song</th>
                        <th>Artist</th>
                        <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                        </tr>
                        <tr>
                        <td>Witchy Woman</td>
                        <td>The Eagles</td>
                        <td>1972</td>
                        </tr>
                        <tr>
                        <td>Shining Star</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                        </tr>
                    </tbody>
                    </table>
                </div>

    </div>
</template>