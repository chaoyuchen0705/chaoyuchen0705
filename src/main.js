import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
import i18n from './i18n'

// 导入所有样式文件
import './assets/styles/style.css'
import './assets/styles/style-demo.css'
// import './assets/styles/utilities.css'

// 导入插件初始化函数
import { initPlugins } from './utils/plugins'

import checkRedirect from './utils/checkRedirect'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(i18n)

app.mount('#app')

// 在 Vue 应用挂载后初始化插件
router.isReady().then(() => {
  initPlugins()
  checkRedirect(router)
})
