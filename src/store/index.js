import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app: {
      namespaced: true,
      state: {},
      mutations: {},
      actions: {},
      getters: {},
    },
  },
  strict: process.env.NODE_ENV !== 'production',
});
