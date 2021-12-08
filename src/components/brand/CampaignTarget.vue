<template>
	<div class="contentBox">
		<div class="contentBox__head">Target</div>
		<div class="contentBox__body">
			<template v-if="this.loaded">
				<div class="contentBox__body--title">
					<span>45</span>
					Local influencers availabe
				</div>
				<div
					class="
						d-flex
						align-items-center
						justify-content-between
						mb-15
					"
				>
					<p class="heading m-0">Followers</p>
					<span class="range">600+</span>
				</div>
				<!-- Rang slider -->
				<!-- <base-slider
					:min="1"
					:max="2000"
					:input="campaignDefaultFilter.followers"
					@value="selectedValue"
				/> -->
			</template>
		</div>
	</div>
</template>

<script>
import { CAMPAIGN_DEFAULT_FILTER } from '@/graphql/brand/query';

export default {
	data() {
		return {
			gender: [],
			campaignDefaultFilter: [],
			data: '1000',
			initialValue: '1',
			endValue: '5',
			loaded: true,
			genderloaded: false,
			followers: 0,
			priceMin: 0,
			priceMax: 0,
			campaignFilterLimits: [],
		};
	},
	// apollo: {
	// 	campaignDefaultFilter: {
	// 		query: CAMPAIGN_DEFAULT_FILTER,
	// 		update(data) {
	// 			this.loaded = true;
	// 			this.followers = data.campaignDefaultFilter.followers;
	// 			this.priceMin = data.campaignDefaultFilter.priceStart;
	// 			this.priceMax = data.campaignDefaultFilter.priceEnd;
	// 			return data.campaignDefaultFilter;
	// 		},
	// 	},
	// },

	methods: {
		selectedValue(e) {
			this.followers = e;
		},
		selectedRangeValue(start, end) {
			this.priceMin = start;
			this.priceMax = end;
		},
	},
};
</script>

<style lang="scss" scoped></style>
