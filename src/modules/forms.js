/* eslint-disable no-unreachable */
import axios from "axios";

const URL = "https://628c2339a3fd714fd02d419e.mockapi.io/vuejs/forms";

export default {
  state: {
    forms: [],
  },
  mutations: {
    SET_NEW_FORM(state, data) {
      state.forms.push(data);
    },
    SET_ALL_FORMS(state, data) {
      state.forms = [...data];
    },
  },
  actions: {
    async sendFormData({ commit }, data) {
      try {
        const res = await axios.post(URL, { ...data });
        console.log(res);
        commit("SET_NEW_FORM", res.data);
        return;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async getAllforms({ commit }) {
      try {
        const res = await axios.get(URL);
        console.log(res);

        commit("SET_ALL_FORMS", res.data);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
  getters: {
    getForms: (state) => [...state.forms],
  },
  namespaced: true,
};
