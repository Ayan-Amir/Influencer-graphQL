import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/sccs/utility/_variables.scss";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import SvgIcon from "@/components/base/BaseSvgIcon.vue";
import VueScrollbar from 'vue-scrollbar-live';
import VueEllipseProgress from "vue-ellipse-progress";
import VSelect from "@alfsnd/vue-bootstrap-select";
import "@/components/global_components";
import utilities from "@/mixin/utilities";
import Multiselect from 'vue-multiselect'
import StarRating from 'vue-star-rating'
import { createProvider } from "./vue-apollo";
import {config} from "@/config.js";
Vue.prototype.$config = config;
Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.component('star-rating', StarRating);
Vue.use(IconsPlugin);
Vue.component('scrollbar', VueScrollbar);
Vue.component('multiselect', Multiselect)
Vue.component("svg-icon", SvgIcon);
Vue.use(VueEllipseProgress);
Vue.component("VSelect", VSelect);
Vue.mixin(utilities)

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount("#app");
