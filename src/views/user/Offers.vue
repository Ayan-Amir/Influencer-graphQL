<template>
	<div class="freeOffers container">
		<base-filters
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
		<!-- <infinite-loading @infinite="infiniteHandler" force-use-infinite-wrapper></infinite-loading> -->
	</div>
</template>

<script>
import OffersCard from '@/components/user/OffersCard.vue';
import InfiniteLoading from 'vue-infinite-loading';
export default {
	components: { 
		OffersCard,
		InfiniteLoading
	},
	//components: { OffersCardBaseSkeletonLoader },
	data() {
		return {
			offers: [],
			locations: '',
			category: '',
			page: 1,
		};
	},
	apollo: {
		offers: {
			query: require('../../graphql/offers.gql'),
			variables() {
				return {
					page: this.page,
				};
			},
			// update(data) {
			// 	this.offers.push(data.offers);
			// 	console.log(this.offers);
			// },
		},
	},
	methods: {
		locationValue: function (e) {
			this.locations = e;
			// console.log(this.locations);
		},
		categoryValue: function (e) {
			this.category = e;
			// console.log(this.category);
		},
		infiniteHandler($state) {
			this.page++
			this.$apollo.queries.offers.fetchMore({
				variables: {
					page: this.page,
				},
				updateQuery: (previousResult, { fetchMoreResult }) => {
					const mewoffers = fetchMoreResult.tagsPage
					//const hasMore = fetchMoreResult.tagsPage.hasMore

					//this.showMoreEnabled = hasMore
					// console.log(previousResult);
					return {
						
						offers: {
						__typename: previousResult.offers.__typename,
						// Merging the tag list
						offers: [...previousResult.offers, ...mewoffers],
						},
					}
				},
			});
			$state.loaded();
		}
	},
};
</script>

<style lang="scss" scoped></style>
