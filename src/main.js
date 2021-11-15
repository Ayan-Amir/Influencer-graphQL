import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import '@/assets/sccs/utility/_variables.scss'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import SvgIcon from '@/components/base/BaseSvgIcon.vue'


Vue.config.productionTip = false;

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('svg-icon', SvgIcon)

new Vue({
  router,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
