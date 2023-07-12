<script lang="ts" setup>
import { ref } from 'vue'
import axios from "axios";
import { Line } from 'vue-chartjs';
const input = ref('')
function gotoLogin(){
    this.$router.push('/')
}

const value1 = ref('')
let isChartVisible = false;
function goto(){
    axios.post('http://localhost:5000/api/Predict',
        {
            
        }
      )
        .then(response => {
          
        });
}

const disabledDate = (time: Date) => {
    const startDate = new Date('2023-06-30');
    const endDate = new Date('2023-07-31');
    return time < startDate || time > endDate;
}
const value = ref('')
const options = [
  {
    value: '1',
    label: '赛克勒博物馆',
  },
  {
    value: '2',
    label: '清华天文台',
  },
  {
    value: '3',
    label: '万圣书园',
  },
  {
    value: '4',
    label: '林大银杏大道',
  },
  {
    value: '5',
    label: '清华园火车站',
  },
]
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

                        <a href="#/Visualone"
                            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
                            可视化分析单车数据
                        </a>
                        <a href="#/Predict" class="text-gray-300 px-3 py-2 rounded-md text-sm font-bold bg-gray-700">
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

    <div class="relative absolute left-64 h-8/12 w-8/12">
        <div class="flex gap-4 mt-6 h-1/9 mb-4">

            
        <div class="demo-date-picker">
        <div class="block">
            <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择时间"
            :disabled-date="disabledDate"
            class="w-full"
            >
            
            </el-date-picker>
        </div>
        </div>

        <el-select v-model="value" placeholder="选择预测地点">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            />
        </el-select>

        <el-button type="primary" round @click="goto">预测</el-button>
        </div>


        <div class="flex h-8/9">
            <img src="../../public/map.jpg" alt="图片" class="w-auto h-auto border-2 border-gray-500">
        </div>

        <div v-if="isChartVisible" class="mt-4 border border-gray-300 rounded">
            <canvas ref="chart"></canvas>
        </div>

        <button class="bg-blue-500  absolute left-16 bottom-64">
            你好，世界1
        </button>

        <button class="bg-blue-500  absolute left-64 top-32">
            你好，世界2
        </button>

        <button class="bg-blue-500  absolute left-64 top-80">
            你好，世界3
        </button>

        <button class="bg-blue-500  absolute right-64 top-48">
            你好，世界4
        </button>

        <button class="bg-blue-500  absolute right-64 bottom-8">
            你好，世界5
        </button>



    </div>
    </div>

</template>