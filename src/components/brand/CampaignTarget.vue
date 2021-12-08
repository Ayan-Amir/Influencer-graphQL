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
				<base-slider
					:min="1"
					:max="2000"
					:input="600"
					@value="selectedValue"
				/>
				<div
					class="
						d-flex
						align-items-center
						justify-content-between
						mb-15
					"
				>
					<p class="heading m-0">Price rage / post</p>
					<span class="range">1 - 50</span>
				</div>
				<!-- MultiRang slider -->
				<base-range-slider
					:min="1"
					:max="50"
					:start="1"
					:end="40"
					@rangeValue="selectedRangeValue"
				/>
				<!-- rating -->
				<p class="heading">Rating</p>
				<star-rating :rating="4" />
				<!-- rating -->
			</template>
			<!-- Accordions -->
			<div class="accordion" role="tablist">
				<!-- (1 Age and Gender) -->
				<age-and-gender :ageStart="16" :ageEnd="65" />
				<!-- (2 Location) -->
				<location />
				<!-- (3 Interests) -->
				<interest />
				<!-- (4 Quality Filters) -->
				<filters />
			</div>
			<!-- End Accordions -->
		</div>
	</div>
</template>

<script>
import StarRating from './partials/StarRating.vue';
import AgeAndGender from '@/components/brand/partials/AgeAndGender.vue';
import Location from '@/components/brand/partials/Location.vue';
import Interest from '@/components/brand/partials/Interest.vue';
import Filters from '@/components/brand/partials/Filters.vue';

import { CAMPAIGN_DEFAULT_FILTER } from '@/graphql/brand/query';

export default {
	components: {
		StarRating,
		AgeAndGender,
		Location,
		Interest,
		Filters,
	},
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
