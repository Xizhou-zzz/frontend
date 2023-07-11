<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router'
import { getUser } from '../lib/axios'
import { deleteRow } from '../lib/axios'
import { addRow } from '../lib/axios'
const router = useRouter()

onMounted(() => {
    getUserData()
})

function gotoLogin() {
    router.push('/');
}

let isEditable = false;
function toggleEdit() {
    isEditable = !isEditable;
}

async function getUserData() {
    people.value = await getUser()
    dataLoaded.value = true
}
//刷新删除后的数据
async function refreshdeleteddata(person) {
    await deleteRow({ username: person.username })
    await getUserData()
}
//刷新新增后的数据
async function refreshaddeddata() {
    await addRow({name:emptyRow.name,password:emptyRow.password,type:emptyRow.type})
    await getUserData()
    emptyRow = { name: '', password: '' ,type:''}
    showEmptyRow.value = false
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
                    </div>
                </div>


                <div class="absolute top-3 right-5">
                    <button @click="gotoLogin" class="bg-exit bg-cover bg-center py-4 px-4 rounded" title="退出登录">
                    </button>
                </div>
            </div>
        </nav>
        <el-button type="primary" round class="absolute left-4 top-32" @click="addOne">
            增加用户
        </el-button>

        <div class="flex justify-center table-container max-h-full overflow-y-auto space-x-10">
            <table v-if="dataLoaded" class="table bg-white h-full w-5/6 my-4 border-collapse border border-slate-400 table-fixed">
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
                        <td class="px-4 py-2 text-center border border-slate-300">
                            <input v-if="isEditable" v-model="person.username" />
                            <span v-else>{{ person.username }}</span>
                        </td>

                        <td class="px-4 py-2 text-center border border-slate-300">
                            <input v-if="isEditable" v-model="person.password" />
                            <span v-else class="disabled">{{ person.password }}</span>
                        </td>
                        <td class="px-4 py-2 text-center border border-slate-300">
                            <input v-if="isEditable" v-model="person.typology" />
                            <span v-else>{{ person.typology }}</span>
                        </td>
                        <td class="px-4 py-2 text-center border border-slate-300 space-x-1">
                            <el-button type="primary" round  @click="refreshdeleteddata(person)">删除</el-button>
                            <el-button type="primary" round>修改</el-button>
                            <!-- <button @click="refreshdeleteddata(person)"
                                class="rounded bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">删除
                            </button>
                            <button @click="toggleEdit"
                                class="rounded bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">修改
                            </button> -->
                            <!-- <button @click=""
                                class="rounded bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">增加
                            </button> -->


                        </td>
                    </tr>
                    <tr v-if="showEmptyRow">
                        <!-- 新增加的一行 -->
                        <td class="text-center border border-slate-300"><input class="px-4 py-2 border border-slate-300 mx-auto" v-model="emptyRow.name" placeholder="Enter name"></td>
                        <td class="text-center border border-slate-300"><input class="px-4 py-2 border border-slate-300 mx-auto" v-model="emptyRow.password" placeholder="Enter password"></td>
                        <td class="text-center border border-slate-300"><input class="px-4 py-2 border border-slate-300 mx-auto" v-model="emptyRow.type" placeholder="Enter type"></td>
                        <!-- 确认增加或取消增加 -->
                        <td class="px-4 py-2 space-x-1 text-center border border-slate-300">
                            <el-button type="primary" round @click="refreshaddeddata">
                                确认
                             </el-button>
                             <el-button type="primary" round @click="canceladd">
                                取消
                             </el-button>
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