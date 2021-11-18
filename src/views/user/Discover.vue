<template>
	<div class="contentWrapper discover">
		<div class="container">
			<filters />
			<base-shoping-card
				v-for="card in cardData"
				:key="card.index"
				:card="card"
			/>
		</div>
	</div>
</template>

<script>
import Filters from '@/components/base/Filters.vue';
import BaseShopingCard from '@/components/base/BaseShopingCard.vue';

export default {
	data() {
		return {
			cardData: [
				{
					index: 0,
					icon: 'brand-logo.svg',
					title: 'Palas Mall',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
					isDiscoverBtn: true,
					isPrice: false,
				},
				{
					index: 1,
					icon: 'brand-logo.svg',
					title: '5 TO GO',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
					isDiscoverBtn: true,
					isPrice: false,
				},
				{
					index: 2,
					icon: 'brand-logo.svg',
					title: 'Shop Online',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
					isDiscoverBtn: true,
					isPrice: false,
				},
				{
					index: 3,
					icon: 'brand-logo.svg',
					title: 'Pizza Papa',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
					isDiscoverBtn: true,
					isPrice: false,
				},
				{
					index: 4,
					icon: 'brand-logo.svg',
					title: 'Gsm Iasi',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
					isDiscoverBtn: true,
					isPrice: false,
				},
				{
					index: 5,
					icon: 'brand-logo.svg',
					title: 'Beer Zone',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
					isDiscoverBtn: true,
					isPrice: false,
				},
				{
					index: 6,
					icon: 'brand-logo.svg',
					title: 'Liria',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
					isDiscoverBtn: true,
					isPrice: false,
				},
				{
					index: 7,
					icon: 'brand-logo.svg',
					title: 'Camping',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
					isDiscoverBtn: true,
					isPrice: false,
				},
			],
		};
	},
	components: {
		Filters,
		BaseShopingCard,
	},
};
</script>

<style lang="scss" scoped></style>
