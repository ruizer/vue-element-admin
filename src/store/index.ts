import Vue from 'vue';
import Vuex from 'vuex';
import State from './store';

Vue.use(Vuex);

export default new Vuex.Store<State>({
  state: {
    menuList: [],
    subTitle: [],
  },
  mutations: {},
  actions: {},
});
