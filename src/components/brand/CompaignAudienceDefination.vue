<template>
	<div class="contentBox audienceDefinition">
		<div class="row">
			<div class="col-md-5">
				<h2>Audience Definition</h2>
				<ul>
					<li>
						Location:
						{{ campaignEstimate.location }}
					</li>
					<li>Age: 1-65+</li>
					<li>Potential Reach:</li>
				</ul>
				<h2>{{ campaignEstimate.potential }} people</h2>
			</div>
			<div class="col-md-7">
				<!-- Chart -->
				<!-- <chart /> -->
			</div>
		</div>
		<!-- Statistics -->
		<statics :campaignEstimate="campaignEstimate" />
	</div>
</template>

<script>
import { CAMPAIGN_FILTER, CAMPAIGN_ESTIMATE } from '@/graphql/brand/query';
import Statics from '@/components/brand/partials/Statics.vue';

export default {
	data() {
		return {
			newCampaignFilters: [],
			campaignEstimate: [],
		};
	},
	apollo: {
		newCampaignFilters: {
			query: CAMPAIGN_FILTER,
			update(data) {
				this.loaded = true;
				return data.newCampaignFilters;
			},
		},
		campaignEstimate: {
			query: CAMPAIGN_ESTIMATE,
		},
	},
	watch: {
		newCampaignFilters: {
			handler() {
				if (this.newCampaignFilters.influencers) {
					this.loaded = true;
				}
			},
		},
	},
	components: { Statics },
};
</script>

<style lang="scss" scoped>
.audienceDefinition {
	padding: rem(35px);
	h2 {
		font-size: rem(20px);
		font-weight: 700;
		margin: rem(17px) 0;
	}
	ul {
		list-style: none;
		padding: 0;
		li {
			font-size: rem(15px);
			color: #494e5a;
			line-height: 1;
			&:not(:last-child) {
				margin-bottom: rem(12px);
			}
		}
	}
	.image {
		margin-top: -25px;
		@media screen and (max-width: 767px) {
			margin: 20px auto;
			text-align: center;
		}
	}
}
</style>
