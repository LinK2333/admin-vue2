import Vue from "vue";
import VueRouter from "vue-router";
import Demo from "../views/Demo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Demo",
    component: Demo,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
