<template>
	<div class="campaignDetail container">
		<h1>Paid Campaign 1</h1>
		<b-tabs content-class="mt-3">
			<b-tab title="Overview"><campaign-overview /></b-tab>
			<b-tab title="Promoters"><campaign-promoters /></b-tab>
			<b-tab title="Insights">
				<p>I'm the Completed tab</p>
			</b-tab>
		</b-tabs>
	</div>
</template>

<script>
import CampaignOverview from '@/components/brand/CampaignOverview.vue';
import CampaignPromoters from '@/components/brand/CampaignPromoters.vue';

export default {
	components: { CampaignOverview, CampaignPromoters },
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
