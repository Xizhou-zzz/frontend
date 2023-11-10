<script setup>
import { onMounted, ref } from 'vue'
import axios from "axios";
import * as echarts from 'echarts';
import { useRouter } from 'vue-router'
import 'mapbox-gl/dist/mapbox-gl.css';
import { BMap } from 'vue3-baidu-map-gl'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

let map

onMounted(() => {
    // TO MAKE THE MAP APPEAR YOU MUST
    // ADD YOUR ACCESS TOKEN FROM
    // https://account.mapbox.com
    // mapboxgl.accessToken = 'pk.eyJ1IjoiYXp1cmljZSIsImEiOiJjbGp3NmM5OHkwOWdxM2Vwa2Jjb2tjdzZnIn0.-Ohkio-ahwFWJT3BcckSuA';
    // map = new mapboxgl.Map({
    //     container: 'map', // container ID
    //     style: 'mapbox://styles/mapbox/streets-v12', // style URL
    //     center: [-74.5, 40], // starting position [lng, lat]
    //     zoom: 9, // starting zoom
    // });
})

const router = useRouter()
const activeIndex = ref('2')
const value1 = ref('')
const dialogVisible = ref(false);
const handleMenuSelect = (index) => {
    switch (index) {
        case '0':
            router.push('/Main');
            break;

        case '1':
            router.push('/Visualone');
            break;

        case '2':
            router.push('/predict');
            break;

        default:
            break;
    }
}

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
            data: ['0:00-0:59', '1:00-1:59', '2:00-2:59', '3:00-3:59',
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
    <div class="absolute inset-0">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
            @select="handleMenuSelect" background-color="#ffd04b" text-color="#000000" active-text-color="#000000">
            <el-menu-item index="0"><el-icon>

                </el-icon>作业互评系统</el-menu-item>
            <div class="flex-grow" />
            <el-menu-item index="1">可视化分析单车数据</el-menu-item>
            <el-menu-item index="2">预测单车需求</el-menu-item>
            <el-button color="#ffd04b" icon="SwitchButton" class="mt-3" @click="() => {
                router.push('/')
            }" title="退出登录" circle />
        </el-menu>
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
                    <el-button color="#ffd04b" round @click="goto">预测</el-button>

                    <el-dialog v-model="dialogVisible" title="预测数据" :modal-append-to-body='false' append-to-body>
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

            <div id="map" class="w-full h-80">
                <BMap :center="{ lng: 116.326759, lat: 40.003304 }" :zoom="14" :minZoom="3" />
                <!-- <BMap :zoom="10" :center="{
                    lng: 116.325909,
                    lat: 39.992854
                }" enableScrollWheelZoom mapStyleId="ee66c61531e8df3c2fd0374e96e58e81" /> -->
            </div>
        </div>
    </div>
</template>