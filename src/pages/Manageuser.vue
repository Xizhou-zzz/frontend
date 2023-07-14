<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router'
import { getUser } from '../lib/axios'
import { deleteRow } from '../lib/axios'
import { addRow } from '../lib/axios'
import { updateRow } from '../lib/axios'
const router = useRouter()
const activeIndex = ref('2')
onMounted(() => {
    getUserData()
})

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

let people = ref([])//表格数据
let dataLoaded = ref(false)//数据是否加载完成
let showEmptyRow = ref(false)// 控制是否显示空行
let emptyRow = { name: '', password: '', type: '' }// 空行数据对象

let editingRow = ref(-1)
const editUserName = ref('')
const editPassword = ref('')
const editType = ref(0)



function addOne() {
    showEmptyRow.value = true
}
//点击取消后取消增加一行
function canceladd() {
    emptyRow = { name: '', password: '', type: '' }
    showEmptyRow.value = false
}

async function getUserData() {
    people.value = await getUser()
    dataLoaded.value = true
}
//刷新删除一行后的数据
async function refreshdeleteddata(person) {
    await deleteRow({ username: person.username })
    await getUserData()
}
//刷新增加一行后的数据
async function refreshaddeddata() {
    await addRow({ name: emptyRow.name, password: emptyRow.password, type: emptyRow.type })
    await getUserData()
    emptyRow = { name: '', password: '', type: '' }
    showEmptyRow.value = false
}
//刷新更改一行后的数据
async function refreshupdateddata(person) {
    await updateRow({ name: person.username, password: person.password, type: person.typology })
    await getUserData()
    editingRow.value = -1
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
        <!-- 增加用户按钮 -->
        <el-button color="#ffd04b" round class="absolute left-4 top-32" @click="addOne">
            增加用户
        </el-button>
        <!-- 表格 -->
        <div class="flex justify-center table-container max-h-full overflow-y-auto space-x-10">
            <table v-if="dataLoaded"
                class="table bg-white h-full w-5/6 my-4 border-collapse border border-slate-400 table-fixed">
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

                        <td class="px-4 py-2 text-center border border-slate-300" v-if="editingRow == index">
                            <input v-model="person.username" class="px-4 py-2 border border-slate-300 mx-auto" />
                        </td>
                        <td class="px-4 py-2 text-center border border-slate-300" v-else>
                            {{ person.username }}
                        </td>

                        <td class="px-4 py-2 text-center border border-slate-300" v-if="editingRow == index">
                            <input v-model="person.password" class="px-4 py-2 border border-slate-300 mx-auto" />
                        </td>
                        <td class="px-4 py-2 text-center border border-slate-300" v-else>
                            {{ person.password }}
                        </td>

                        <td class="px-4 py-2 text-center border border-slate-300" v-if="editingRow == index">
                            <input v-model="person.typology" class="px-4 py-2 border border-slate-300 mx-auto" />
                        </td>
                        <td class="px-4 py-2 text-center border border-slate-300" v-else>
                            {{ person.typology }}
                        </td>

                        <td class="px-4 py-2 text-center border border-slate-300 space-x-1">
                            <el-button color="#ffd04b" round @click="refreshdeleteddata(person)">删除</el-button>

                            <el-button color="#ffd04b" round @click="
                                editUserName = person.username,
                                editPassword = person.password,
                                editType = person.typology,
                                editingRow = index
                                " v-if="editingRow != index">修改</el-button>

                            <el-button color="#ffd04b" round @click="refreshupdateddata(person)" v-else>确定</el-button>

                        </td>
                    </tr>
                    <tr v-if="showEmptyRow">
                        <!-- 新增加的一行 -->
                        <td class="text-center border border-slate-300"><input
                                class="px-4 py-2 border border-slate-300 mx-auto" v-model="emptyRow.name"
                                placeholder="Enter name"></td>
                        <td class="text-center border border-slate-300"><input
                                class="px-4 py-2 border border-slate-300 mx-auto" v-model="emptyRow.password"
                                placeholder="Enter password"></td>
                        <td class="text-center border border-slate-300"><input
                                class="px-4 py-2 border border-slate-300 mx-auto" v-model="emptyRow.type"
                                placeholder="Enter type"></td>
                        <!-- 确认增加或取消增加 -->
                        <td class="px-4 py-2 space-x-1 text-center border border-slate-300">
                            <el-button color="#ffd04b" round @click="refreshaddeddata">
                                确认
                            </el-button>
                            <el-button color="#ffd04b" round @click="canceladd">
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