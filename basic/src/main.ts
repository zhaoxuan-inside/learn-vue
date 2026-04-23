import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './components/_070_index';
// State-1: 引用pinia
import { createPinia } from 'pinia';

const app = createApp(App);
// Router-5: 使用指定的路由
app.use(router);

const pinia = createPinia();
app.use(pinia);

app.mount('#app');
