import Vue from "vue";
import VueRouter from "vue-router";
import publicLayout from '@/layouts/PublicLayout.vue';
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import user from '@/views/user/router';
Vue.use(VueRouter);

const routes = [
	{
		path: "/login",
		component: () =>
        import ("@/views/common/Login.vue")
	},
	{
		path: "/user",
		component: DashboardLayout,
		children:[...user]
	},
  	
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
