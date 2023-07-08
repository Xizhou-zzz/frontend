<script>
import * as echarts from 'echarts';

export default {
    name: "Visualone",

    mounted() {
        this.chart = echarts.init(this.$refs.chart);
        this.renderChart();
    },
    methods: {
        renderChart() {

            const options = {
                series: [
                    {
                        type: 'pie',
                        data: [
                            {
                                value: 335,
                                name: '直接访问'
                            },
                            {
                                value: 234,
                                name: '联盟广告'
                            },
                            {
                                value: 1548,
                                name: '搜索引擎'
                            }
                        ]
                    }
                ]
            };
            this.chart.setOption(options);
        },
        // login() {
        //     const url = 'http://localhost:5000/Visualize'; // Flask服务器的地址
        //     const data = {
        //         username: this.username,
        //         password: this.password
        //     };
        //     fetch(url, {
        //         method: 'GET',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(data)
        //     })
        //         .then(response => response.json())
        //         .then(response => {
        //             this.result = response.result;
        //         })
        //         .catch(error => {
        //             console.error('Error:', error);
        //         });
        // }

    }
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
                    <select name="function" id="function-select"
                        class="h-10 rounded-md text-cyan-700 px-3 py-2 text-sm font-bold">

                        <option class="text-cyan-700 px-3 py-2 text-sm font-bold" value="">你好，用户</option>
                        <option class="text-cyan-700 px-3 py-2 text-sm font-bold" value="function1">功能1</option>
                        <option class="text-cyan-700 px-3 py-2 text-sm font-bold" value="function2">功能2</option>
                        <option class="text-cyan-700 px-3 py-2 text-sm font-bold" value="function3">退出登录</option>

                    </select>

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
                        <a href="#/Visualone" class="text-gray-300 px-3 py-2 rounded-md text-sm font-bold bg-gray-700">
                            同一地点不同时间的单车需求量
                        </a>

                        <a href="#/Visualtwo"
                            class="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
                            同一时间不同地点的单车需求量
                        </a>
                    </div>

                </div>
            </div>

        </nav>
    </div>
    <!-- 图表一 -->
    <div class="bg-slate-300">
        <div ref="chart" style="width: 400px; height: 300px;"></div>
    </div>
</template>