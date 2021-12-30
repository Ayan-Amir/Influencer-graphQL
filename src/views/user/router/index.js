export default [
	{
		path: "",
		component: () => import(/* webpackChunkName: "dashboard" */"@/views/user/Dashboard.vue"),
		meta: { requiresAuth: true, userType: "0" }
	},
	{
		path: "offers",
		name: "Offers",
		component: () => import(/* webpackChunkName: "offers" */"@/views/user/Offers.vue"),
	},
	{
		path: "discover",
		name: "Campaign",
		component: () => import(/* webpackChunkName: "discover" */"@/views/user/Campaign.vue"),
	},
	{
		path: "campaign/:id/:name",
		name: "Campaign Detail",
		component: () => import(/* webpackChunkName: "campaign" */"@/views/user/CampaignDetails.vue"),
	},
	{
		path: "discover-detail-deleivery",
		name: "Discover Detail Deleivery",
		component: () => import(/* webpackChunkName: "discoverDetails" */"@/views/user/DiscoverDetailDeleivery.vue"),
	},
	{
		path: "subscription/:id/:name",
		name: "subscription",
		component: () => import(/* webpackChunkName: "subscription" */"@/views/user/Subscription.vue"),
	},
	{
		path: "notifications",
		name: "Notifications",
		component: () => import(/* webpackChunkName: "notifications" */"@/views/user/Notifications.vue"),
	},
	{
		path: "edit-profile",
		name: "Edit Profile",
		component: () => import(/* webpackChunkName: "editProfile" */"@/views/user/EditProfile.vue"),
	},
	{
		path: "offer/:id/:name",
		name: "Offer Detail",
		component: () => import(/* webpackChunkName: "offer" */"@/views/user/OfferDetail.vue"),
	},
];
