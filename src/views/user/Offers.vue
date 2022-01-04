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
			<base-skeleton-loader type="offer" :count="8"></base-skeleton-loader>
		</div>
		<div class="row" v-if="$apollo.data.offers && !$apollo.loading">
			<div class="col-xl-3 col-lg-4 col-sm-6" v-for="offer in offers" :key="offer.id">
				<offers-card :offer="offer"></offers-card>
			</div>
		</div>
		<div v-if="norecord">No Record Found</div>
		<!-- <infinite-loading @infinite="infiniteHandler" force-use-infinite-wrapper></infinite-loading> -->
	</div>
</template>

<script>
import { OFFERS_FILTERS, OFFERS } from '@/graphql/user/query';
export default {
	components: {
		OffersCard: () => import(/* webpackChunkName: "offersCard" */ '@/components/user/OffersCard.vue'),
		// InfiniteLoading: () =>
		//   import(/* webpackChunkName: "infiniteLoading" */ "vue-infinite-loading"),
	},
	data() {
		return {
			offersFilters: [],
			offers: [],
			filterLocations: [],
			filterCategories: [],
			search: '',
			page: 1,
			selected: '',
			norecord: false,
			loading: false,
			loadmore: true,
		};
	},
	apollo: {
		offersFilters: {
			query: OFFERS_FILTERS,
			result(data) {
				if (data) {
					let newLocation = data.data.offersFilters.default.locations.map((item) => item.id);

					let newCategory = data.data.offersFilters.default.categories.map((item) => item.id);

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
					search: this.search,
				};
			},
			result(data) {
				if (data.data.offers.length == 0) {
					this.norecord = true;
				} else {
					this.norecord = false;
					if (data.data.offers.length < 8) {
						this.loadmore = false;
					}
				}
			},
			error(e) {
				this.handleError(e);
			},
			skip() {
				return this.skipQuery;
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

		infiniteHandler($state) {
			this.page++;
			this.$apollo.queries.offers.fetchMore({
				variables: {
					page: this.page,
				},
				updateQuery: (previousResult, { fetchMoreResult }) => {
					console.log(fetchMoreResult);

					// const mewoffers = fetchMoreResult.tagsPage;
					// //const hasMore = fetchMoreResult.tagsPage.hasMore

					// //this.showMoreEnabled = hasMore
					// // console.log(previousResult);
					// return {
					// 	offers: {
					// 		__typename: previousResult.offers.__typename,
					// 		// Merging the tag list
					// 		offers: [...previousResult.offers, ...mewoffers],
					// 	},
					// };
				},
			});
			$state.loaded();
		},
	},
	watch: {
		offers() {
			this.loading = false;
		},
	},
};
</script>

<style lang="scss" scoped></style>
