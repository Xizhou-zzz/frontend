<script lang="ts">
export default {
    name: "Manageuser",
    methods: {
        gotoLogin() {
            this.$router.push('/')
        }
    },
    data() {
    return {
      people: [
        { id: 1, name: '张三', age: 25, gender: '男' },
        { id: 2, name: '李四', age: 30, gender: '女' },
        { id: 3, name: '王五', age: 28, gender: '男' },
      ]
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

                <div>
                <table class="table bg-white border border-gray-300 w-full my-4">
                <thead>
                    <tr>
                    <th class="px-4 py-2 border-b border-r">姓名</th>
                    <th class="px-4 py-2 border-b border-r">年龄</th>
                    <th class="px-4 py-2 border-b border-r">性别</th>
                    <th class="px-4 py-2 border-b border-r">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="person in people" :key="person.id">
                    <td class="px-4 py-2 border-b border-r text-center">{{ person.name }}</td>
                    <td class="px-4 py-2 border-b border-r text-center">{{ person.age }}</td>
                    <td class="px-4 py-2 border-b border-r text-center">{{ person.gender }}</td>
                    <td class="px-4 py-2 border-b border-r text-center"><button class="rounded bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">删除</button></td>
                    </tr>
                </tbody>
                </table>
            </div>

    </div>
</template>

<style>
/* 使用 Tailwind 提供的样式 */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

th, td {
  @apply px-4 py-2;
}

</style>