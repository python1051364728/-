import Vue from "vue";
import Vuex from "vuex";
import { setLocal, getLocal } from "@/utils/storage";

Vue.use(Vuex);
const tokenKey = "user_token";

export default new Vuex.Store({
  // 用于存储全局状态数据
  state: {
    user: getLocal(tokenKey),
  },
  getters: {},
  mutations: {
    setUserToken(state, token) {
      state.user = token;
      setLocal(tokenKey, token);
    },
  },
  actions: {},
  modules: {},
});
