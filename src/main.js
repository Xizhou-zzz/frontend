import './assets/main.css'
import router from './router.js'
import { createApp } from 'vue'
import App from './App.vue'
import { BaiduMap } from 'vue-baidu-map'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'



const app = createApp(App)
app.use(router);
app.use(ElementPlus)

app.use(ElementPlus, { size: 'big', zIndex: 3000 })
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(BaiduMap, {
    ak: 'CgkyRPYGymELr4NVG5OH85ouDopzC1E6',
})

app.mount('#app')
