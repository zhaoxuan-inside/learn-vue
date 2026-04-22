import { createRouter, createWebHistory } from 'vue-router';

// Router-1: 导入需要路由的 page
import home from '../_070_router_page/_070_home_page.vue';
import about from '../_070_router_page/_070_about_page.vue';

// Router-2: 定义路由的地址和需要路由的 page 的绑定关系
const routes = [
    { path: '/home', name: 'home', component: home },
    { path: '/about', name: 'about', component: about },
];

// Router-3: 创建路由对象
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Router-4: 将路由对象公布出去
export default router;
