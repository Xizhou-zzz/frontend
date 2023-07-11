<script lang="ts">
export default {
    name: "Manageuser",
    methods: {
        gotoLogin() {
            this.$router.push('/')
        },
        deleteRow(index) {
            this.people.splice(index, 1);
        }
    },
    data() {
        return {
            people: [
                { id: 1, username: '张三', password: 25, typology: '男' },
                { id: 2, username: '李四', password: 30, typology: '女' },
                { id: 3, username: '王五', password: 28, typology: '男' },
                { id: 3, username: '王五', password: 28, typology: '男' },
                { id: 3, username: '王五', password: 28, typology: '男' },
                { id: 3, username: '王五', password: 28, typology: '男' },
                { id: 3, username: '王五', password: 28, typology: '男' },
                { id: 3, username: '王五', password: 28, typology: '男' },
                { id: 3, username: '王五', password: 28, typology: '男' },
                { id: 3, username: '王五', password: 28, typology: '男' },
                { id: 3, username: '王五', password: 28, typology: '男' },
                { id: 3, username: '王五', password: 28, typology: '男' },
                { id: 3, username: '王五', password: 28, typology: '男' },
                { id: 3, username: '王五', password: 28, typology: '男' },
                { id: 3, username: '王五', password: 28, typology: '男' },
                { id: 3, username: '王五', password: 28, typology: '男' },
                { id: 3, username: '王五', password: 28, typology: '男' },
                { id: 3, username: '王五', password: 28, typology: '男' },
                { id: 3, username: '王五', password: 28, typology: '男' },
                { id: 3, username: '王五', password: 28, typology: '男' },
                { id: 3, username: '王五', password: 28, typology: '男' },
                { id: 3, username: '王五', password: 28, typology: '男' },
                { id: 3, username: '王五', password: 28, typology: '男' },
                { id: 3, username: '王五', password: 28, typology: '男' },

            ]
        }
    },
    mounted() {
        // 在组件挂载后执行的操作
        //getUsers();
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

        <div class="flex justify-center table-container max-h-96 overflow-y-auto">
            <table class="table bg-white w-5/6 my-4 border-collapse border border-slate-400">
                <thead>
                    <tr>
                        <th class="px-4 py-2 border border-slate-300">用户名</th>
                        <th class="px-4 py-2 border border-slate-300">密码</th>
                        <th class="px-4 py-2 border border-slate-300">类型</th>
                        <th class="px-4 py-2 border border-slate-300">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(person, index) in people" :key="index">
                        <td class="px-4 py-2 text-center border border-slate-300">{{ person.username }}</td>
                        <td class="px-4 py-2 text-center border border-slate-300">{{ person.password }}</td>
                        <td class="px-4 py-2 text-center border border-slate-300">{{ person.typology }}</td>
                        <td class="px-4 py-2 text-center border border-slate-300">
                            <button @click="deleteRow(index)"
                                class="rounded bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">删除
                            </button>
                        </td>
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

th,
td {
    @apply px-4 py-2;
}
</style>