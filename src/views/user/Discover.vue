<template>
	<div class="discover container">
		<base-filters
			v-if="$apollo.data.campaigns"
			:filters="campaigns"
			@locationvalue="locationValue"
			@categoryvalue="categoryValue"
			@searchvalue="searchvalue"
		/>
		<discover-card
			v-for="campaign in campaigns"
			:key="campaign.id"
			:campaign="campaign"
			:isApply="true"
		/>
	</div>
</template>

<script>
import DiscoverCard from '@/components/user/DiscoverCard.vue';
import { CAMPAIGNS } from '@/graphql/query';
export default {
	data() {
		return {
			campaigns: [],
			filterLocations: [],
			filterCategories: [],
			search: '',
			page: 1,
			selected: '',
		};
	},
	components: {
		DiscoverCard,
	},
	apollo: {
		campaigns: {
			query: CAMPAIGNS,
			variables() {
				return {
					page: this.page,
					// locations: this.filterLocations,
					// categories: this.filterCategories,
					// search: this.search,
				};
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
