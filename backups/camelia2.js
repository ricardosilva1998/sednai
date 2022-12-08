import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueParticles from "vue-particles";
import routes from "./routes";
import VueRouter from "vue-router";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueParticles);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  routes
});

const app = new Vue({
  el: "#app",
  router,
  data: {
    loading: true
  }
});

router.beforeEach((to, from, next) => {
  app.loading = true;
  next();
});

router.afterEach(to => {
  app.updateWindowTitle(to);
  app.loading = false;
});
