export default [
	{
		path: "",
		component: () => import("@/views/user/Dashboard.vue"),
	},
	{
		path: "offers",
		name: "Offers",
		component: () => import("@/views/user/Offers.vue"),
	},
	{
		path: "discover",
		name: "Discover",
		component: () => import("@/views/user/Discover.vue"),
	},
	{
		path: "discover-detail",
		name: "Discover Detail",
		component: () => import("@/views/user/DiscoverDetail.vue"),
	},
	{
		path: "discover-detail-deleivery",
		name: "Discover Detail Deleivery",
		component: () => import("@/views/user/DiscoverDetailDeleivery.vue"),
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
