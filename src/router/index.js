import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home/star",
  },
  {
    path: "/home",
    component: () => import("@/views/Home"),
    children: [
      {
        path: "/home/star",
        component: () => import("@/views/Star"),
      },
      {
        path: "/home/list",
        component: () => import("@/views/List"),
      },
      {
        path: "/home/news",
        component: () => import("@/views/News"),
      },
      {
        path: "/home/profile",
        component: () => import("@/views/Profile"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/login"),
  },
  {
    path: "/favorate",
    component: () => import("@/views/favorate"),
  },
  {
    path: "/rent",
    component: () => import("@/views/rent"),
  },
  {
    path: "/city",
    component: () => import("@/views/city"),
  },
  {
    path: "/addProfile",
    component: () => import("@/views/addProfile"),
  },
  {
    path: "/rentadd",
    component: () => import("@/views/rentadd"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
