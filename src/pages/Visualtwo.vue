<script>
import * as echarts from 'echarts';
import axios from "axios";
export default {
    name: "Visualtwo",

    mounted() {
        this.chart = echarts.init(this.$refs.chart);
        this.renderChart();
    },
    methods: {
        gotoLogin() {
            this.$router.push('/')
        },
        getDataFromServer1() {
            this.$router.push('/Visualone')
            // axios.get('http://localhost:5000/api/Visualone')
            //     .then(response => {
            //         const data = response.data;  // 获取后端发送的数据
            //         this.renderChart(data);  // 将数据传递给renderChart方法
            //     })
            //     .catch(error => {
            //         console.error(error);
            //     });
        },
        getDataFromServer2() {
            this.$router.push('/Visualtwo')
            // axios.get('http://localhost:5000/api/Visualtwo')
            //     .then(response => {
            //         const data = response.data;  // 获取后端发送的数据
            //         this.renderChart(data);  // 将数据传递给renderChart方法
            //     })
            //     .catch(error => {
            //         console.error(error);
            //     });
        },
        getDataFromServer3() {
            this.$router.push('/Visualthree')
            // axios.get('http://localhost:5000/api/Visualthree')
            //     .then(response => {
            //         const data = response.data;  // 获取后端发送的数据
            //         this.renderChart(data);  // 将数据传递给renderChart方法
            //     })
            //     .catch(error => {
            //         console.error(error);
            //     });
        },
        renderChart(data) {
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
                        type: 'scatter',
                        data: data
                    }
                ]
            };
            this.chart.setOption(options);
        },

    }
}
</script>

<template>
    <!-- 页面背景图片 -->
    <div class="absolute inset-0  bg-cover bg-center bg-fixed bg-background2 -z-50"></div>
    <!-- 页面最上方的导航栏 -->
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

                        <a href="#/Visualize" class="text-gray-300 px-3 py-2 rounded-md text-sm font-bold bg-gray-700">
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
                    <button @click="gotoLogin" class="bg-exit bg-cover bg-center py-4 px-4 rounded" title="退出登录">
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
                        <button class="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                            @click="getDataFromServer1">
                            订单数按星期分布饼状图
                        </button>
                        <button class="text-gray-300 px-3 py-2 rounded-md text-sm font-bold bg-gray-700"
                            @click="getDataFromServer2">
                            不同时间单车需求散点图
                        </button>
                        <button class="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                            @click="getDataFromServer3">
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