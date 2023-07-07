<script lang="ts">
import * as echarts from 'echarts';

export default {
    name: "Visualize",

    mounted() {
        this.chart = echarts.init(this.$refs.chart);
        this.renderChart();
    },
    methods: {
        renderChart() {
            const options = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'bar'
                }]
            };

            this.chart.setOption(options);

        }
    }
}
</script>

<template>
    <div class="absolute inset-0  bg-cover bg-center bg-fixed bg-background2 -z-50"></div>
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

    <div class="absolute top-48 left-0">
        <nav class="max-h-7xl mx-auto px-4 sm:px-6 lg:px-8 ml-0">
            <div class="flex items-center h-16">
                <div class="hidden md:block ml-20">
                    <div class="flex items-baseline space-y-10 flex flex-col">
                        <a href="#"
                            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
                            同一地点不同时间的单车需求量
                        </a>

                        <a href="#"
                            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
                            同一时间不同地点的单车需求量
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    <div class="bg-slate-300">
        <div ref="chart" style="width: 400px; height: 300px;"></div>
    </div>
    <div class="text-gray-300 font-bold">
        请选择左侧你想获得的图表
    </div>
</template>