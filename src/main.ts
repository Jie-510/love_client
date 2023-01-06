import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/index.scss'

// svg注册脚本
import 'virtual:svg-icons-register'

const app = createApp(App)

// svg
import SvgIcon from '@/components/SvgIcon.vue';
app.component('SvgIcon', SvgIcon)


app.mount('#app')
