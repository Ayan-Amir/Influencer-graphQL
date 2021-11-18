<template>
	<div class="contentWrapper discover">
		<div class="container">
			<base-filters />
			<discover-card
				v-for="card in cardData"
				:key="card.index"
				:card="card"
			/>
		</div>
	</div>
</template>

<script>
import BaseFilters from '@/components/base/BaseFilters.vue';
import DiscoverCard from '@/components/user/DiscoverCard.vue';

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
					isApply: true,
					isPrice: false,
				},
				{
					index: 1,
					icon: 'brand-logo.svg',
					title: '5 TO GO',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
					isApply: true,
					isPrice: false,
				},
				{
					index: 2,
					icon: 'brand-logo.svg',
					title: 'Shop Online',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
					isApply: true,
					isPrice: false,
				},
				{
					index: 3,
					icon: 'brand-logo.svg',
					title: 'Pizza Papa',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
					isApply: true,
					isPrice: false,
				},
				{
					index: 4,
					icon: 'brand-logo.svg',
					title: 'Gsm Iasi',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
					isApply: true,
					isPrice: false,
				},
				{
					index: 5,
					icon: 'brand-logo.svg',
					title: 'Beer Zone',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
					isApply: true,
					isPrice: false,
				},
				{
					index: 6,
					icon: 'brand-logo.svg',
					title: 'Liria',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
					isApply: true,
					isPrice: false,
				},
				{
					index: 7,
					icon: 'brand-logo.svg',
					title: 'Camping',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
					isApply: true,
					isPrice: false,
				},
			],
		};
	},
	components: {
		BaseFilters,
		DiscoverCard,
	},
};
</script>

<style lang="scss" scoped></style>
