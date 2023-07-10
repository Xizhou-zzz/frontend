<script setup>
import * as echarts from 'echarts';
import axios from "axios";

import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router'
import { getVisualOneData } from '../lib/axios'
import { getVisualTwoData } from '../lib/axios'
import { getVisualThreeData } from '../lib/axios'

const tab = ref('one')

const router = useRouter()

let echart
const chart = ref(null)

onMounted(() => {
  echart = echarts.init(chart.value);
  renderChart();
})

async function renderChart() {
  echart.dispose();
  echart = echarts.init(chart.value);
  echart.showLoading();//显示加载动画
  const data = await getVisualOneData()
  // console.log(data)
  const options = {
    series: [
      {
        type: 'pie',
        data: data
      }
    ]
  };
  echart.hideLoading();//隐藏加载动画
  echart.setOption(options);//渲染图表
}

async function renderChart2() {
  echart.dispose();
  echart = echarts.init(chart.value);
  echart.showLoading();//显示加载动画
  const data = await getVisualTwoData()
  const options = {
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
        type: 'line',
        data: data
      }
    ]
  };
  echart.hideLoading();//隐藏加载动画
  echart.setOption(options);//渲染图表
}

async function renderChart3() {
  echart.dispose();
  echart = echarts.init(chart.value);
  const options = {
    xAxis: {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'category',
      data: ['早上', '中午', '下午', '晚上']
    },
    visualMap: {
      min: 0,
      max: 100,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: 10
    },
    series: [
      {
        name: '热力图示例',
        type: 'heatmap',
        data: [
          [0, 0, 30],
          [0, 1, 40],
          [0, 2, 50],
          [0, 3, 60],
          [1, 0, 70],
          [1, 1, 80],
          [1, 2, 90],
          [1, 3, 100],
          [2, 0, 50],
          [2, 1, 60],
          [2, 2, 70],
          [2, 3, 80],
          [3, 0, 90],
          [3, 1, 100],
          [3, 2, 30],
          [3, 3, 40],
          [4, 0, 60],
          [4, 1, 70],
          [4, 2, 80],
          [4, 3, 90],
          [5, 0, 40],
          [5, 1, 50],
          [5, 2, 60],
          [5, 3, 70],
          [6, 0, 80],
          [6, 1, 90],
          [6, 2, 100],
          [6, 3, 50]
        ],
        label: {
          show: false,
        },
      }
    ]
  };
  echart.setOption(options);
}


</script>

<template>
  <!-- 页面背景图片 -->
  <div class="absolute inset-0  bg-cover bg-center bg-fixed bg-background2 -z-50"></div>
  <div class="absolute inset-0">
    <!-- 页面最上方的导航栏 -->
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

            <a href="#/Visualone" class="text-gray-300 px-3 py-2 rounded-md text-sm font-bold bg-gray-700">
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
          <button @click="() => { router.push('/') }" class="bg-exit bg-cover bg-center py-4 px-4 rounded" title="退出登录">
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
            <button class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold"
              @click="renderChart">
              订单数按星期分布饼状图
            </button>
            <button class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold"
              @click="renderChart2">
              不同时间单车需求散点图
            </button>
            <button class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold"
              @click="renderChart3">
              不同位置单车需求热力图
            </button>
          </div>

        </div>
      </div>

    </nav>
  </div>
  <!-- 图表一 -->
  <div class="bg-slate-300 ml-20">
    <div ref="chart" style="width: 700px; height: 300px;"></div>
  </div>
</template>