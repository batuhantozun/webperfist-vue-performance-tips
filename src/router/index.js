import { createRouter, createWebHistory } from "vue-router";

import Reactivity from "../views/Reactivity.vue";
import ListRender from "../views/ListRender.vue";
import FunctionalComponents from "../views/Functional.vue";
import AsyncComponents from "../views/AsyncComponents.vue";
import KeepingAlive from "../views/KeepingAlive.vue";

const routes = [
  {
    path: "/",
    name: "Reactivity",
    component: Reactivity,
  },
  {
    path: "/list-rendering",
    name: "List Rendering",
    component: ListRender,
  },
  {
    path: "/functional-components",
    name: "Functional Components",
    component: FunctionalComponents,
  },
  {
    path: "/async-components",
    name: "Async Components",
    component: AsyncComponents,
  },
  {
    path: "/keeping-alive",
    name: "Keeping Alive",
    component: KeepingAlive,
  },
  {
    path: "/lazy-routing",
    name: "Lazy Route",
    component: () =>
      import(/* webpackChunkName: "lazy" */ "../views/LazyRoute.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
