import Vue from "vue";
import Vuex from "vuex";
import { alert } from "./alert";
import auth from "./auth";
import {campaign} from "./campaign";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";
export default new Vuex.Store({
  modules: {
    alert,
    auth,
    campaign
  },
  plugins: [
    createPersistedState({
      kay: "influencers",
      paths: ["auth"],
    }),
  ],
  strict: debug,
});
