import Vue from "vue";
import Vuex from "vuex";
import { alert } from "./alert";
import auth from "./auth";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";
export default new Vuex.Store({
  modules: {
    alert,
    auth,
  },
  plugins: [
    createPersistedState({
      kay: "influencers",
      paths: ["auth"],
    }),
  ],
  strict: debug,
});
