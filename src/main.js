import './assets/main.css'
import router from './router.js'
import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'



const app = createApp(App)
app.use(router);
app.use(ElementPlus)
app.mount('#app')
app.use(ElementPlus, { size: 'big', zIndex: 3000 })
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}



// new Vue({
//     el: '#app',
//     render: h => h(App)
//   });

