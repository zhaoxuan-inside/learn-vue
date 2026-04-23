import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './components/_070_index';
// State-1: 引用 pinia
import { createPinia } from 'pinia';

const app = createApp(App);
// Router-5: 使用指定的路由
app.use(router);

// State-2: 创建 pinia 对象
const pinia = createPinia();
// State-3: 使用 pinia 对象
app.use(pinia);

app.mount('#app');
