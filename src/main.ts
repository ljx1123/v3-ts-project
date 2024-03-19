import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

//引入Element-Plus
import ElementPlus from 'element-plus'

//引入icon图标
import useIcon from './utils/setGloloabl'
//引入中文语言包
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

//引入pinia
import pinia from './stores'

//引入scss
import '@/styles/index.scss'

// 引入页面权限文件
import './permission'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn
})
app.use(useIcon)
app.use(router)
app.use(pinia)
app.mount('#app')
