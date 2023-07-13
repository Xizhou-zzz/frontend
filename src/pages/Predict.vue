<script setup>
import { ref } from 'vue'
import axios from "axios";
import * as echarts from 'echarts';

const input = ref('')
function gotoLogin() {
    this.$router.push('/')
}
const value1 = ref('')

const dialogVisible = ref(false);

function changeState() {
    dialogVisible.value = !dialogVisible.value
}

function goto() {
    changeState();

    axios.post('http://localhost:5000/api/Predict', {
        date: value1.value,
        id: value.value
    })
    .then(response => {
        const data = response.data;
        
        initEcharts(data); // 将myChart作为参数传递给initEcharts函数
        
    });
     // 显示加载动画
}

function initEcharts(data) {
    const myChart = echarts.init(document.getElementById('newEcharts'));
    const option = {
        title: {
            text: '预测结果'
        },
        xAxis: {
            data:  ['0:00-0:59', '1:00-1:59', '2:00-2:59', '3:00-3:59',
        '4:00-4:59', '5:00-5:59', '6:00-6:59', '7:00-7:59',
        '8:00-8:59', '9:00-9:59', '10:00-10:59', '11:00-11:59',
        '12:00-12:59', '13:00-13:59', '14:00-14:59', '15:00-15:59',
        '16:00-16:59', '17:00-17:59', '18:00-18:59', '19:00-19:59',
        '20:00-20:59', '21:00-21:59', '22:00-22:59', '23:00-23:59']     
        },
        yAxis: {},
        series: [
            {
                data: data,
                type: 'line'
            }
        ]
    }; 
    myChart.setOption(option);
    myChart.hideLoading(); // 隐藏加载动画
}


const disabledDate = (time) => {
    const startDate = new Date('2023-06-30');
    const endDate = new Date('2023-07-31');
    return time < startDate || time > endDate;
};
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

                        <a href="#/Visualone"
                            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
                            可视化分析单车数据
                        </a>
                        <a href="#/Predict" class="text-gray-300 px-3 py-2 rounded-md text-sm font-bold bg-gray-700">
                            预测单车需求
                        </a>
                        <a href="#/Price"
                            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
                            单车调度
                        </a>
                    </div>
                </div>

                <div class="absolute top-3 right-5">
                    <el-button icon="SwitchButton" @click="gotoLogin" title="退出登录" circle />
                </div>

            </div>
        </nav>

        <div class="relative absolute left-64 h-8/12 w-8/12">
            <div class="flex gap-4 mt-6 h-1/9 mb-4">


                <div class="demo-date-picker">
                    <div class="block">
                        <el-date-picker v-model="value1" type="date" placeholder="选择时间" :disabled-date="disabledDate"
                            class="w-full">

                        </el-date-picker>
                    </div>
                </div>

                <el-select v-model="value" placeholder="选择预测地点">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>

                <div class="app-container">
                    <el-button type="primary" round @click="goto">预测</el-button>

                    <el-dialog v-model="dialogVisible" title="预测数据" :modal-append-to-body='false'
                        append-to-body>
                        <el-form :inline="true" size="medium" label-width="80px">
                            <el-row :gutter="10">
                                <el-col :xs="24" :sm="24" :md="24" :lg="24">                 
                                        <div id="newEcharts" style="width:500px;height:400px;padding-top:40px"></div>
                                </el-col>
                            </el-row>
                        </el-form>
                    </el-dialog>
                </div>
            </div>


            <div class="flex h-8/9">
                <img src="../../public/map.jpg" alt="图片" class="w-auto h-auto border-2 border-gray-500">
            </div>
        </div>
    </div>
</template>