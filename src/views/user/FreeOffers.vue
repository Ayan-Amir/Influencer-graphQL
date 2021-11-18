<template>
	<div class="contentWrapper freeOffers">
		<div class="container">
			<base-filters />
			<div class="row">
				<div
					class="col-xl-3 col-lg-4 col-sm-6"
					v-for="cardData in offerCard"
					:key="cardData.index"
				>
					<offers-card :cardData="cardData" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BaseFilters from '@/components/base/BaseFilters.vue';
import OffersCard from '@/components/user/OffersCard.vue';
export default {
	data() {
		return {
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
	components: {
		BaseFilters,
		OffersCard,
	},
};
</script>

<style lang="scss" scoped></style>
