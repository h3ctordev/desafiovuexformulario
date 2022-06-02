import Vue from "vue";
import store from "./store";
import router from "./router";
import App from "./App.vue";

import "bootstrap";
import { BootstrapVueIcons, BootstrapVue } from "bootstrap-vue";
import VueForm from "vue-form";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueForm, {
  validators: {
    passwd: (value) => {
      return /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
        value
      );
    },
  },
});
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
