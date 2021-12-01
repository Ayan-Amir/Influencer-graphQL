<template>
	<div class="freeOffers container">
		<base-filters
			v-if="$apollo.data.offersFilters"
			:filters="offersFilters"
			@locationvalue="locationValue"
			@categoryvalue="categoryValue"
			@searchvalue="searchvalue"
		/>
		<div v-if="$apollo.loading">
			<base-skeleton-loader
				type="offer"
				:count="8"
			></base-skeleton-loader>
		</div>
		<div class="row" v-if="$apollo.data.offers">
			<div
				class="col-xl-3 col-lg-4 col-sm-6"
				v-for="offer in offers"
				:key="offer.id"
			>
				<offers-card :offer="offer"></offers-card>
			</div>
		</div>
		<div v-if="norecord">No Record Found</div>
		<!-- <infinite-loading @infinite="infiniteHandler" force-use-infinite-wrapper></infinite-loading> -->
	</div>
</template>

<script>
import OffersCard from '@/components/user/OffersCard.vue';
import InfiniteLoading from 'vue-infinite-loading';
import BaseSelect from '../../components/base/BaseSelect.vue';
import { OFFERS_FILTERS, OFFERS } from '@/graphql/query';
export default {
	components: {
		OffersCard,
		InfiniteLoading,
		BaseSelect,
	},
	//components: { OffersCardBaseSkeletonLoader },
	data() {
		return {
			offersFilters: [],
			offers: [],
			filterLocations: [],
			filterCategories: [],
			saerch: '',
			page: 1,
			selected: '',
			norecord: false,
		};
	},
	apollo: {
		offersFilters: {
			query: OFFERS_FILTERS,
			result(data) {
				if (data) {
					let newLocation =
						data.data.offersFilters.default.locations.map(
							(item) => item.code
						);
					// console.log('new location', newLocation);

					let newCategory =
						data.data.offersFilters.default.categories.map(
							(item) => item.code
						);

					this.filterLocations = newLocation;
					this.filterCategories = newCategory;
					this.$apollo.queries.offers.skip = false;
				}
			},
		},
		offers: {
			query: OFFERS,
			variables() {
				return {
					page: this.page,
					locations: this.filterLocations,
					categories: this.filterCategories,
					// search: this.search,
				};
			},
			result(data) {
				if (data.data.offers.length == 0) {
					this.norecord = true;
				} else {
					this.norecord = false;
				}
			},
			skip() {
				return this.skipQuery;
			},
		},
	},
	methods: {
		locationValue(e) {
			this.filterLocations = [];
			this.filterLocations.push(e);
			// console.log('oldfilter', this.filterLocations);

			let newFilter = this.filterLocations[0].map((item) => item.code);
			// console.log('newfilter', newFilter);
			this.filterLocations = newFilter;
		},
		categoryValue(e) {
			this.categories = [];
			this.filterCategories.push(e);
			let newFilter = this.filterCategories
				.slice(-1)[0]
				.map((item) => item.code);
			// console.log('newfilter', newFilter);
			this.filterCategories = newFilter;
		},
		searchvalue(e) {
			this.search = e;
			console.log(e);
		},

		infiniteHandler($state) {
			this.page++;
			this.$apollo.queries.offers.fetchMore({
				variables: {
					page: this.page,
				},
				updateQuery: (previousResult, { fetchMoreResult }) => {
					const mewoffers = fetchMoreResult.tagsPage;
					//const hasMore = fetchMoreResult.tagsPage.hasMore

					//this.showMoreEnabled = hasMore
					// console.log(previousResult);
					return {
						offers: {
							__typename: previousResult.offers.__typename,
							// Merging the tag list
							offers: [...previousResult.offers, ...mewoffers],
						},
					};
				},
			});
			$state.loaded();
		},
	},
	mounted() {
		console.log('filter value', this.offersFilters);
	},
};
</script>

<style lang="scss" scoped></style>
