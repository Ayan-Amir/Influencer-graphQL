export default [
    {
		path: "free-offer",
		name: "Free Offer",
		component: () =>
        import ("@/views/user/FreeOffers.vue"),
	},
	{
		path: "discover",
		name: "Discover",
		component: () =>
        import ("@/views/user/Discover.vue"),
	},
	{
		path: "discover-detail",
		name: "Discover Detail",
		component: () =>
        import ("@/views/user/DiscoverDetail.vue"),
	},
	{
		path: "discover-detail-deleivery",
		name: "Discover Detail Deleivery",
		component: () =>
        import ("@/views/user/DiscoverDetailDeleivery.vue"),
	},
	{
		path: "influencer-complete",
		name: "Influencer Complete",
		component: () =>
        import ("@/views/user/InfluencerComplete.vue"),
	},
	{
		path: "notification",
		name: "Notification",
		component: () =>
        import ("@/views/user/Notification.vue"),
	}
]
