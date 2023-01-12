import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/index.scss'


// svg注册脚本
import 'virtual:svg-icons-register'

const app = createApp(App)

// svg
import SvgIcon from '@/components/SvgIcon.vue';
app.component('SvgIcon', SvgIcon)

// 路由
import router from '@/router/index';
app.use(router)

// 引入Vant组件样式
import 'vant/lib/index.css';

// pinia
import { createPinia } from 'pinia';
const pinia = createPinia()
app.use(pinia)

app.mount('#app')
