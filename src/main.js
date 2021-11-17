import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import '@/assets/sccs/utility/_variables.scss'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import SvgIcon from '@/components/base/BaseSvgIcon.vue'

import VueEllipseProgress from 'vue-ellipse-progress';



Vue.config.productionTip = false;

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('svg-icon', SvgIcon)
Vue.use(VueEllipseProgress);

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
