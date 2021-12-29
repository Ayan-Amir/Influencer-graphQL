<template>
	<div class="discover container">
		<div>
			<base-filters
				v-if="$apollo.data.campaignsFilters"
				:filters="campaignsFilters"
				@locationvalue="locationValue"
				@categoryvalue="categoryValue"
				@searchvalue="searchvalue"
			/>
			<div v-if="$apollo.loading">
				<base-skeleton-loader
					type="discover"
					:count="8"
					:isApply="true"
				></base-skeleton-loader>
			</div>
			<compaign-card
				v-for="campaign in campaigns"
				:key="campaign.id"
				:campaign="campaign"
				:isApply="true"
			/>
		</div>
		<div v-if="norecord">No Record Found</div>
	</div>
</template>

<script>
import CompaignCard from '@/components/user/CompaignCard.vue';
import { CAMPAIGNS, COMPAIGNS_FILTER } from '@/graphql/user/query';
export default {
	data() {
		return {
			campaignsFilters: [],
			campaigns: [],
			filterLocations: [],
			filterCategories: [],
			search: '',
			page: 1,
			selected: '',
			norecord: false,
		};
	},
	components: {
		CompaignCard,
	},
	apollo: {
		campaigns: {
			query: CAMPAIGNS,
			variables() {
				return {
					page: this.page,
					locations: this.filterLocations,
					categories: this.filterCategories,
					search: this.search,
					subscriptions: null,
				};
			},
			result(data) {
				if (data.data.campaigns.length == 0) {
					this.norecord = true;
				} else {
					this.norecord = false;
				}
			},
		},
		campaignsFilters: {
			query: COMPAIGNS_FILTER,
			result(data) {
				if (data) {
					let newLocation =
						data.data.campaignsFilters.default.locations.map(
							(item) => item.id
						);

					let newCategory =
						data.data.campaignsFilters.default.categories.map(
							(item) => item.id
						);

					this.filterLocations = newLocation;
					this.filterCategories = newCategory;
					this.$apollo.queries.campaigns.skip = false;
				}
			},
		},
	},
	methods: {
		locationValue(data) {
			this.filterLocations = data;

			let newFilter = this.filterLocations.map((item) => item.id);
			if (this.filterLocations.length == 0) {
				this.filterLocations = null;
			} else {
				this.filterLocations = newFilter;
			}
		},
		categoryValue(data) {
			this.filterCategories = data;

			let newFilter = this.filterCategories.map((item) => item.id);

			if (this.filterCategories.length == 0) {
				this.filterCategories = null;
			} else {
				this.filterCategories = newFilter;
			}
		},
		searchvalue(data) {
			this.search = data;
		},
	},
};
</script>

<style lang="scss" scoped></style>
