export default [
	{
		path: "",
		name: "Dashboard",
		component: () => import(/* webpackChunkName: "dashboard" */"@/views/brand/Dashboard.vue"),
		
	},
	{
		path: "new-campaign",
		name: "New Camapaign",
		component: () => import(/* webpackChunkName: "newCampaign" */"@/views/brand/NewCampaign.vue"),
		
	},
	{
		path: "influencers",
		name: "Influencers",
		component: () => import(/* webpackChunkName: "influencers" */"@/views/brand/Influencers.vue"),
		
	},
	{
		path: "influencer-detail",
		name: "InfluencersDetail",
		component: () => import(/* webpackChunkName: "influencerDetail" */"@/views/brand/InfluencerDetail.vue"),
		
	},
	{
		path: "campaign-detail",
		name: "Campaign Detail",
		component: () => import(/* webpackChunkName: "campaignDetail" */"@/views/brand/CampaignDetail.vue"),
		
	},
	{
		path: "deals",
		name: "Deals",
		component: () => import(/* webpackChunkName: "deals" */"@/views/brand/Deals.vue"),
		
	}
];