import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/sccs/utility/_variables.scss";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import SvgIcon from "@/components/base/BaseSvgIcon.vue";

import VueEllipseProgress from "vue-ellipse-progress";
import VSelect from "@alfsnd/vue-bootstrap-select";
import "@/components/global_components";
import { createProvider } from "./vue-apollo";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component("svg-icon", SvgIcon);
Vue.use(VueEllipseProgress);
Vue.component("VSelect", VSelect);

new Vue({
  router,
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount("#app");
