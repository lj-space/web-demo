import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Hello from "../views/Hello.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Hello",
    name: "Hello",
    component: Hello,
  },
  {
    path: "/About",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
