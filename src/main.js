import './assets/main.css'
import router from './router.js'
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import Vue3BaiduMapGL from 'vue3-baidu-map-gl'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'



const app = createApp(App)
app.use(router);
app.use(ElementPlus)
app.use(Vue3BaiduMapGL, {
    ak: 'CgkyRPYGymELr4NVG5OH85ouDopzC1E6',
    plugins: ['TrackAnimation']
})
app.use(ElementPlus, { size: 'big', zIndex: 3000 })
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')
