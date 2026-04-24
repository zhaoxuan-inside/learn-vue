import { createRouter, createWebHistory } from "vue-router";

const rs = [
  {
    path: "/",
    name: "Tasks",
    component: () => import("../pages/Tasks/index.vue"),
  },
  {
    path: "/task/:id",
    name: "Task",
    component: () => import("../pages/Task/index.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: rs,
});
