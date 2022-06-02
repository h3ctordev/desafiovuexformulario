import Vue from "vue";
import Vuex from "vuex";

import forms from "../modules/forms";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // forms: forms.state,
  },
  getters: {
    // forms: forms.getters,
  },
  mutations: {
    // forms: forms.mutations,
  },
  actions: {
    // ...forms.actions,
  },
  modules: { forms },
});
