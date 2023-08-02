// 引入的不再是 Vue构造函数  而是 createApp 工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 不需要new Vue创建实例了 通过一下方式就可以创建实例并且挂载 另外 vue3 不再支持 vue2 中创建实例的方法了
createApp(App).mount('#app')
