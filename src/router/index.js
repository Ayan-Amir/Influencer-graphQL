import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  	{
		path: "/free-offer",
		name: "Free Offer",
		component: () =>
        import ("../views/user/FreeOffers.vue"),
	},
	{
		path: "/discover",
		name: "Discover",
		component: () =>
        import ("../views/user/Discover.vue"),
	},
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
