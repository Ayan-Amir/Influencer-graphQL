<template>
	<div class="freeOffers container">
		<!-- <div class="filters">
			<base-select :options="location" :selected="selected" />
			<base-select :options="category" :selected="selected" />
		</div> -->
		<base-filters
			v-if="$apollo.data"
			:filters="filters"
			@locationvalue="locationValue"
			@categoryvalue="categoryValue"
		/>
		<div v-if="$apollo.loading">
			<base-skeleton-loader
				type="offer"
				:count="8"
			></base-skeleton-loader>
		</div>
		<div class="row" v-if="$apollo.data">
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
export default {
	components: {
		OffersCard,
		InfiniteLoading,
		BaseSelect,
	},
	//components: { OffersCardBaseSkeletonLoader },
	data() {
		return {
			filters: [],
			offers: [],
			locations: 'moscow',
			categories: '1',
			page: 1,
			selected: '',
			norecord: false,
		};
	},
	apollo: {
		filters: {
			query: require('../../graphql/filters.gql'),
			update(data) {
				// this.selected = data.offersFilters.default.locations[0];
				return data.offersFilters;
			},
		},
		offers: {
			query: require('../../graphql/offers.gql'),
			variables() {
				return {
					page: this.page,
					locations: this.locations,
					categories: this.categories,
				};
			},
			result(data) {
				if (data.data.offers.length == 0) {
					this.norecord = true;
				} else {
					this.norecord = false;
				}
			},
		},
	},
	methods: {
		locationValue(e) {
			this.locations = e.value;
			// console.log(this.locations);
		},
		categoryValue(e) {
			this.categories = e.value;
			// console.log(e.value);
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
};
</script>

<style lang="scss" scoped></style>
