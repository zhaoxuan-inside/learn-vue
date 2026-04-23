import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './components/_070_index';

const app = createApp(App);
// Router-5: 使用指定的路由
app.use(router);
app.mount('#app');
