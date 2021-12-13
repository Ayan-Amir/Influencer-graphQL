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
import CampaignOverview from '@/components/brand/CampaignOverview.vue';
import CampaignPromoters from '@/components/brand/CampaignPromoters.vue';
import CampaignInsights from '@/components/brand/CampaignInsights.vue';

export default {
	components: { CampaignOverview, CampaignPromoters, CampaignInsights },
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
