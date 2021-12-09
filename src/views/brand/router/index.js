export default [
	{
		path: "new-campaign",
		name: "New Camapaign",
		component: () => import("@/views/brand/NewCampaign.vue"),
		
	},
	{
		path: "influencers",
		name: "Influencers",
		component: () => import("@/views/brand/Influencers.vue"),
		
	},
	{
		path: "influencer-detail",
		name: "InfluencersDetail",
		component: () => import("@/views/brand/InfluencerDetail.vue"),
		
	}
];