import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 作用：创建一个 Vue 应用实例。
// createApp 是 Vue 3 提供的全局 API，它接收一个根组件（通常是 App.vue 导出的组件对象）作为参数。
// 返回的应用实例 app 包含了全局配置、插件安装、组件注册等功能，是整个 Vue 应用的“管理者”。
const app = createApp(App)

// 作用：为 Vue 应用安装 Pinia 状态管理插件。
// createPinia() 是 Pinia 提供的函数，用于生成一个 Pinia 实例（即状态管理容器）。
// app.use() 是 Vue 应用的插件安装方法，它会调用传入插件的 install 方法，将 Pinia 注入到整个 Vue 应用中。
// 安装之后，你可以在任意组件中使用 useStore() 来访问和管理全局状态。
app.use(createPinia())

// 作用：为 Vue 应用安装 路由插件。
// router 通常是从 router/index.js 导入的 Vue Router 实例（通过 createRouter() 创建）。
// app.use(router) 会将路由系统整合进 Vue 应用，使得应用支持多页面导航、动态路由匹配、路由守卫等能力。
// 安装后，可以在组件中通过 this.$router（选项式 API）或 useRouter()（组合式 API）来操作路由。
app.use(router)

// 作用：将 Vue 应用挂载到真实的 DOM 节点上，启动应用。
// app 是一个 `CSS ID 选择器`，通常对应 public/index.html 中的 <div id="app"></div>。
// mount 方法会接管该 DOM 元素，将之前配置好的应用实例（包含根组件、Pinia、router 等）渲染到该元素内部。
// 只有调用了 mount 之后，Vue 应用才会真正生效并显示在页面上。这也是整个启动过程的最后一步。
app.mount('#app')

