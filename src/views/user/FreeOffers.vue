<template>
	<div class="freeOffers container">
		<base-filters
			@locationvalue="locationValue"
			@categoryvalue="categoryValue"
		/>
		<div v-if="$apollo.loading">Loading...</div>
		<div class="row" v-if="$apollo.data">
			<div
				class="col-xl-3 col-lg-4 col-sm-6"
				v-for="offer in offers"
				:key="offer.id"
			>
				<offers-card :offer="offer" />
			</div>
		</div>
	</div>
</template>

<script>
import OffersCard from '@/components/user/OffersCard.vue';
export default {
	components: { OffersCard },
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
			// 	console.log(data);
			// },
		},
	},
	methods: {
		locationValue: function (e) {
			this.locations = e;
			console.log(this.locations);
		},
		categoryValue: function (e) {
			this.category = e;
			console.log(this.category);
		},
	},
};
</script>

<style lang="scss" scoped></style>
