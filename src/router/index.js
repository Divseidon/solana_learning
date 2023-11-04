/** @format */

import { createRouter, createWebHashHistory } from "vue-router";
import junoRouter from "@/modules/juno/router";

const routes = [
  {
    path: "/",
    name: "juno",
    ...junoRouter,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.path != "/juno") {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ left: 0, top: 0 });
        }, 500);
      });
    }
  },
});

export default router;
