<template>
	<div class="newCampaign">
		<div class="container">
			<!-- page main Links for Desktop -->
			<ul class="mainLinks hide-on-lg">
				<li>
					<router-link to="#">
						<svg-icon
							icon-id="Influencers"
							icon-viewbox="0 0 20.738 11.668"
						>
						</svg-icon>
						Influencers
					</router-link>
				</li>
				<li class="active">
					<router-link to="#">
						<svg-icon
							icon-id="compaign"
							icon-viewbox="0 0 14.788 13.238"
						>
						</svg-icon>
						Campaign
					</router-link>
				</li>
				<li>
					<router-link to="#">
						<svg-icon
							icon-id="deal"
							icon-viewbox=" 0 0 14.788 13.238"
						>
						</svg-icon>
						Deal
					</router-link>
				</li>
			</ul>
			<div class="innerWrapper">
				<div class="row">
					<div class="col-lg-6">
						<!-- Target Section -->
						<campaign-target />
						<!-- Budget Section -->
						<compaign-budget />
					</div>
					<div class="col-lg-6">
						<!-- Audience Definition Section -->
						<compaign-audience-defination />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CampaignTarget from '@/components/brand/CampaignTarget.vue';
import CompaignBudget from '@/components/brand/CompaignBudget.vue';
import CompaignAudienceDefination from '@/components/brand/CompaignAudienceDefination.vue';

export default {
	components: { CampaignTarget, CompaignBudget, CompaignAudienceDefination },
};
</script>

<style lang="scss" scoped>
.newCampaign {
	@media screen and (max-width: 991px) {
		.row {
			> div {
				&:first-child {
					margin-bottom: rem(17px);
				}
			}
		}
	}
}
</style>
