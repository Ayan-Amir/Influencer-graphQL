import Vue from "vue";
import VueRouter from "vue-router";
import LoginOrRegister from '@/layouts/LoginOrRegister.vue';
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
	{
		path: "/user/login",
		component: LoginOrRegister,
		children:[
			{
				path: "",
				component: () =>
        		import ("@/views/user/Login.vue"),
			}
		]
	},
	{
		path: "/user/register",
		component: LoginOrRegister,
		children:[
			{
				path: "",
				component: () =>
        		import ("@/views/user/register/Register.vue"),
			},
			{
				path: "welcome",
				component: () =>
        		import ("@/views/user/register/Welcome.vue"),
			},
			{
				path: "profile",
				component: () =>
        		import ("@/views/user/register/Profile.vue"),
			},
			{
				path: "profile-photo",
				component: () =>
        		import ("@/views/user/register/ProfilePhoto.vue"),
			},
			{
				path: "payment-details",
				component: () =>
        		import ("@/views/user/register/PaymentDetails.vue"),
			}
		]
	},
  	
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
