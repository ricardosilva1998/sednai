import Vue from "vue";
import App from "./App.vue";
import router from "./router";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import specific icons */
import {
  faPlus,
  faMinus,
  faUser,
  faQuoteLeft,
  faCaretRight,
  faChevronRight,
  faChevronLeft,
  faUserGraduate,
  faCertificate,
  faMagnifyingGlass,
  faCar,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import VueParticles from "vue-particles";
Vue.use(VueParticles);

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

/* add icons to the library */
library.add(
  faPlus,
  faMinus,
  faUser,
  faQuoteLeft,
  faMagnifyingGlass,
  faCaretRight,
  faUserGraduate,
  faCertificate,
  faChevronRight,
  faChevronLeft,
  faCar,
  faInstagram,
  faFacebook,
  faLinkedin,
  faXmark,
  faBars
);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
