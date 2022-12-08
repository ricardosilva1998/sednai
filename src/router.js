import Vue from "vue";
import Router from "vue-router";

import Home from "./components/Home/Home";
import Home2 from "./components/Home/Home2";
import Sednai from "./components/Sednai/Sednai";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
      name: "Home",
      meta: { title: "Home" },
    },
    {
      path: "/home-2",
      component: Home2,
      name: "Home 2",
      meta: { title: "Home 2" },
    },
    {
      path: "/sednai",
      component: Sednai,
      name: "Sednai",
      meta: { title: "Sednai" },
    },
  ],
});
