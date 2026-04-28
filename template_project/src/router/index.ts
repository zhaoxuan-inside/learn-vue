import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";

const rs = [
  {
    path: "/",
    name: "Tasks",
    component: () => import("../pages/Tasks/index_pinia.vue"),
  },
  {
    path: "/task/:id",
    name: "Task",
    // 异步按需加载
    component: defineAsyncComponent(() => import("../pages/Task/index.vue")),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: rs,
});
