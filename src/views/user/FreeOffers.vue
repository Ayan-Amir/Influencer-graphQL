<template>
	<div class="freeOffers container">
		<base-filters
			@locationvalue="locationValue"
			@categoryvalue="categoryValue"
		/>
		<div class="row">
			<div
				class="col-xl-3 col-lg-4 col-sm-6"
				v-for="cardData in offers"
				:key="cardData.id"
			>
				<offers-card
					:cardData="cardData"
					v-for="offerCard in offerCard"
					:key="offerCard.index"
					:offerCard="offerCard"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import OffersCard from '@/components/user/OffersCard.vue';
export default {
	data() {
		return {
			offers: [],
			locations: '',
			category: '',
			offerCard: [
				{
					index: 0,
					mainImage: 'offers-img1.png',
					time: '33 : 16 : 02',
					title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
					brandLogo: 'logo1.png',
					imageLists: [
						{
							id: 1,
							img: 'user-img.jpg',
						},
						{
							id: 2,
							img: '',
						},
						{
							id: 3,
							img: 'user-img.jpg',
						},
						{
							id: 4,
							img: '',
						},
					],
					number: '+152',
				},
				{
					index: 1,
					mainImage: 'offers-img1.png',
					time: '33 : 16 : 02',
					title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
					brandLogo: 'logo1.png',
					imageLists: [
						{
							id: 1,
							img: 'user-img.jpg',
						},
						{
							id: 2,
							img: '',
						},
						{
							id: 3,
							img: 'user-img.jpg',
						},
						{
							id: 4,
							img: '',
						},
					],
					number: '+152',
				},
				{
					index: 2,
					mainImage: 'offers-img1.png',
					time: '33 : 16 : 02',
					title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
					brandLogo: 'logo1.png',
					imageLists: [
						{
							id: 1,
							img: '',
						},
						{
							id: 2,
							img: '',
						},
						{
							id: 3,
							img: '',
						},
						{
							id: 4,
							img: '',
						},
					],
					number: '+152',
				},
				{
					index: 3,
					mainImage: 'offers-img1.png',
					time: '33 : 16 : 02',
					title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
					brandLogo: 'logo1.png',
					imageLists: [
						{
							id: 1,
							img: '',
						},
						{
							id: 2,
							img: '',
						},
						{
							id: 3,
							img: '',
						},
						{
							id: 4,
							img: '',
						},
					],
					number: '+152',
				},
				{
					index: 4,
					mainImage: 'offers-img1.png',
					time: '33 : 16 : 02',
					title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
					brandLogo: 'logo1.png',
					imageLists: [
						{
							id: 1,
							img: '',
						},
						{
							id: 2,
							img: '',
						},
						{
							id: 3,
							img: '',
						},
						{
							id: 4,
							img: '',
						},
					],
					number: '+152',
				},
				{
					index: 5,
					mainImage: 'offers-img1.png',
					time: '33 : 16 : 02',
					title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
					brandLogo: 'logo1.png',
					imageLists: [
						{
							id: 1,
							img: '',
						},
						{
							id: 2,
							img: '',
						},
						{
							id: 3,
							img: '',
						},
						{
							id: 4,
							img: '',
						},
					],
					number: '+152',
				},
				{
					index: 6,
					mainImage: 'offers-img1.png',
					time: '33 : 16 : 02',
					title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
					brandLogo: 'logo1.png',
					imageLists: [
						{
							id: 1,
							img: '',
						},
						{
							id: 2,
							img: '',
						},
						{
							id: 3,
							img: '',
						},
						{
							id: 4,
							img: '',
						},
					],
					number: '+152',
				},
				{
					index: 7,
					mainImage: 'offers-img1.png',
					time: '33 : 16 : 02',
					title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
					brandLogo: 'logo1.png',
					imageLists: [
						{
							id: 1,
							img: '',
						},
						{
							id: 2,
							img: '',
						},
						{
							id: 3,
							img: '',
						},
						{
							id: 4,
							img: '',
						},
					],
					number: '+152',
				},
			],
		};
	},
	apollo: {
		offers: {
			query: require('../../graphql/offers.gql'),
			variables: {
				// locations,
			},
			update(data) {
				return data.offers;
			},
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
	components: {
		OffersCard,
	},
};
</script>

<style lang="scss" scoped></style>
