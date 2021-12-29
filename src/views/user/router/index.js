export default [
	{
		path: "",
		component: () => import("@/views/user/Dashboard.vue"),
		meta: { requiresAuth: true, userType: "0" }
	},
	{
		path: "offers",
		name: "Offers",
		component: () => import("@/views/user/Offers.vue"),
	},
	{
		path: "campaign",
		name: "Campaign",
		component: () => import("@/views/user/Campaign.vue"),
	},
	{
		path: "campaign/:id/:name",
		name: "Campaign Detail",
		component: () => import("@/views/user/CampaignDetails.vue"),
	},
	{
		path: "discover-detail-deleivery",
		name: "Discover Detail Deleivery",
		component: () => import("@/views/user/DiscoverDetailDeleivery.vue"),
	},
	{
		path: "subscription/:id/:name",
		name: "subscription",
		component: () => import("@/views/user/Subscription.vue"),
	},
	{
		path: "notifications",
		name: "Notifications",
		component: () => import("@/views/user/Notifications.vue"),
	},
	{
		path: "edit-profile",
		name: "Edit Profile",
		component: () => import("@/views/user/EditProfile.vue"),
	},
	{
		path: "offer/:id/:name",
		name: "Offer Detail",
		component: () => import("@/views/user/OfferDetail.vue"),
	},
];
