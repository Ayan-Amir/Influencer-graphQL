export default [
	{
		path: "",
		name: "Dashboard",
		component: () => import(/* webpackChunkName: "dashboard.chunk" */"@/views/brand/Dashboard.vue"),
		
	},
	{
		path: "new-campaign",
		name: "New Camapaign",
		component: () => import(/* webpackChunkName: "newCampaign.chunk" */"@/views/brand/NewCampaign.vue"),
		
	},
	{
		path: "influencers",
		name: "Influencers",
		component: () => import(/* webpackChunkName: "influencers.chunk" */"@/views/brand/Influencers.vue"),
		
	},
	{
		path: "influencer-detail",
		name: "InfluencersDetail",
		component: () => import(/* webpackChunkName: "influencerDetail.chunk" */"@/views/brand/InfluencerDetail.vue"),
		
	},
	{
		path: "campaign-detail",
		name: "Campaign Detail",
		component: () => import(/* webpackChunkName: "campaignDetail.chunk" */"@/views/brand/CampaignDetail.vue"),
		
	},
	{
		path: "deals",
		name: "Deals",
		component: () => import(/* webpackChunkName: "deals.chunk" */"@/views/brand/Deals.vue"),
		
	}
];