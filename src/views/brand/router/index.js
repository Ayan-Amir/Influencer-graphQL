export default [
	{
		path: "",
		name: "Dashboard",
		component: () => import("@/views/brand/Dashboard.vue"),
		
	},
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
		
	},
	{
		path: "campaign-detail",
		name: "Campaign Detail",
		component: () => import("@/views/brand/CampaignDetail.vue"),
		
	},
	{
		path: "deals",
		name: "Deals",
		component: () => import("@/views/brand/Deals.vue"),
		
	}
];