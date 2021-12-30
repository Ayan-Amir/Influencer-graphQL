<template>
	<div class="campaignDetail container">
		<h1>Paid Campaign 1</h1>
		<b-tabs content-class="mt-3">
			<b-tab title="Overview"><campaign-overview /></b-tab>
			<b-tab title="Promoters"><campaign-promoters /></b-tab>
			<b-tab title="Insights">
				<campaign-insights />
			</b-tab>
		</b-tabs>
	</div>
</template>

<script>
export default {
	components: {
		CampaignOverview: () =>
			import(/* webpackChunkName: "CampaignOverview" */ '@/components/brand/CampaignOverview.vue'),
		CampaignPromoters: () =>
			import(/* webpackChunkName: "CampaignPromoters" */ '@/components/brand/CampaignPromoters.vue'),
		CampaignInsights: () =>
			import(/* webpackChunkName: "CampaignInsights" */ '@/components/brand/CampaignInsights.vue'),
	},
};
</script>

<style lang="scss" scoped>
.campaignDetail {
	/deep/ {
		.nav.nav-tabs {
			margin: rem(24px) 0;
		}
	}
}
</style>
