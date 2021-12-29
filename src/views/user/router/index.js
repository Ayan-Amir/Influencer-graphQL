export default [
	{
		path: "",
		component: () => import(/* webpackChunkName: "details.chunk" */"@/views/user/Dashboard.vue"),
		meta: { requiresAuth: true, userType: "0" }
	},
	{
		path: "offers",
		name: "Offers",
		component: () => import(/* webpackChunkName: "details.chunk" */"@/views/user/Offers.vue"),
	},
	{
		path: "discover",
		name: "Campaign",
		component: () => import(/* webpackChunkName: "details.chunk" */"@/views/user/Campaign.vue"),
	},
	{
		path: "campaign/:id/:name",
		name: "Campaign Detail",
		component: () => import(/* webpackChunkName: "details.chunk" */"@/views/user/CampaignDetails.vue"),
	},
	{
		path: "discover-detail-deleivery",
		name: "Discover Detail Deleivery",
		component: () => import(/* webpackChunkName: "details.chunk" */"@/views/user/DiscoverDetailDeleivery.vue"),
	},
	{
		path: "subscription/:id/:name",
		name: "subscription",
		component: () => import(/* webpackChunkName: "details.chunk" */"@/views/user/Subscription.vue"),
	},
	{
		path: "notifications",
		name: "Notifications",
		component: () => import(/* webpackChunkName: "details.chunk" */"@/views/user/Notifications.vue"),
	},
	{
		path: "edit-profile",
		name: "Edit Profile",
		component: () => import(/* webpackChunkName: "details.chunk" */"@/views/user/EditProfile.vue"),
	},
	{
		path: "offer/:id/:name",
		name: "Offer Detail",
		component: () => import(/* webpackChunkName: "details.chunk" */"@/views/user/OfferDetail.vue"),
	},
];
