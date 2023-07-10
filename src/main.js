import './assets/main.css'
import router from './router.js'
import { createApp } from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';


// Vue.use(ElementUI);


const app = createApp(App)
app.use(router);
app.mount('#app')



// new Vue({
//     el: '#app',
//     render: h => h(App)
//   });

