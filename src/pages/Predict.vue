<script setup>
import { ref } from 'vue'
import axios from "axios";
import * as echarts from 'echarts';

const input = ref('')
function gotoLogin() {
    this.$router.push('/')
}
const value1 = ref('')

let dialogVisible =  false;
let newDialogFormVisible = false;




function goto() {
    axios.post('http://localhost:5000/api/Predict',
        {
            data: value1.value,
            location: value.value
        }
    )
        .then(response => {

        });
}

function initEcharts() {
  var echarts = require('echarts');

  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(document.getElementById('newEcharts'));
  // 绘制图表
  const option = {
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  };
  myChart.setOption(option)
}

      function open() {
  this.$nextTick(() => {
    //  执行echarts方法
    initEcharts()
  })
}


const disabledDate = (time) => {
    const startDate = new Date('2023-06-30');
    const endDate = new Date('2023-07-31');
    return time < startDate || time > endDate;
};
// const disabledDate = (time: Date) => {
//     const startDate = new Date('2023-06-30');
//     const endDate = new Date('2023-07-31');
//     return time < startDate || time > endDate;
// }
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
                            单车调度和动态定价
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

                <el-button type="primary" round @click="goto">预测</el-button>
            </div>


            <div class="flex h-8/9">
                <img src="../../public/map.jpg" alt="图片" class="w-auto h-auto border-2 border-gray-500">
            </div>


            <button @click="goto" value=1 class="bg-blue-500  absolute left-16 bottom-64">
                你好,世界1
            </button>

            <button @click="goto" value=2 class="bg-blue-500  absolute left-64 top-32">
                你好,世界2
            </button>

            <button @click="goto" value=3 class="bg-blue-500  absolute left-64 top-80">
                你好,世界3
            </button>

            <button @click="goto" value=4 class="bg-blue-500  absolute right-64 top-48">
                你好,世界4
            </button>

            <button @click="goto" value=5 class="bg-blue-500  absolute right-64 bottom-8">
                你好,世界5
            </button>



        </div>

            <div class="app-container">
     <el-button type="text" @click="newDialogFormVisible = true">点击打开 Dialog</el-button>
<el-dialog title="新建" 
   :modal-append-to-body='false'
   :visible.sync="newDialogFormVisible" 
    @open="open()"
    append-to-body>
    <el-form :inline="true" size="medium" label-width="80px">
       <el-row :gutter="10">
          
          <el-col :xs="24" :sm="24" :md="24" :lg="24">
            <el-form-item label="样本曲线">
              <div id="newEcharts" style="width:500px;height:400px;padding-top:40px"></div>
             </el-form-item>
           </el-col>
         </el-row>
     </el-form>        
</el-dialog>
     <el-button type="primary" @click="dialogVisible = true" icon="el-icon-edit"></el-button>
 


        </div>
    </div>
</template>