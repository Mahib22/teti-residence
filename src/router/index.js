import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  linkActiveClass: "border-b-2 border-blue-500 md:pb-11",
  history: createWebHistory(),
  routes,
});

export default router;
