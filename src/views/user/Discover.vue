<template>
	<div class="contentWrapper discover">
		<div class="container">
			<filters />
			<div class="card" v-for="card in cardData" :key="card.index">
				<div>
					<div class="logo">
						<img
							:src="require(`@/assets/images/svg/${card.icon}`)"
							alt=""
							class="img-fluid"
						/>
					</div>
					<div class="title">
						{{ card.title }}
						<span>{{ card.subTitle }}</span>
					</div>
				</div>
				<router-link to="discover-detail" class="btn btn-primary">{{
					card.btn
				}}</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import Filters from '@/components/base/Filters.vue';
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
				},
				{
					index: 1,
					icon: 'brand-logo.svg',
					title: '5 TO GO',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
				},
				{
					index: 2,
					icon: 'brand-logo.svg',
					title: 'Shop Online',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
				},
				{
					index: 3,
					icon: 'brand-logo.svg',
					title: 'Pizza Papa',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
				},
				{
					index: 4,
					icon: 'brand-logo.svg',
					title: 'Gsm Iasi',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
				},
				{
					index: 5,
					icon: 'brand-logo.svg',
					title: 'Beer Zone',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
				},
				{
					index: 6,
					icon: 'brand-logo.svg',
					title: 'Liria',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
				},
				{
					index: 7,
					icon: 'brand-logo.svg',
					title: 'Camping',
					subTitle: 'Nullam convallis sollicitudin',
					btn: 'Apply Now',
				},
			],
		};
	},
	components: {
		Filters,
	},
};
</script>

<style lang="scss" scoped>
.discover {
	.card {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: rem(15px);
		border-radius: 10px;
		border: 0;
		margin-bottom: rem(15px);
		> div {
			display: flex;
			align-items: flex-start;
			.title {
				font-size: rem(18px);
				font-weight: 500;
				margin-left: rem(18px);
				color: var(--textPrimary);
				span {
					display: block;
					font-size: rem(14px);
					font-weight: 400;
					color: var(--textSecondary);
				}
			}
		}
		.btn.btn-primary {
			font-size: rem(10px);
			border-radius: 6px;
			font-weight: 600;

			// &:hover {
			// 	&::before {
			// 		content: '';
			// 		position: absolute;
			// 		width: 80%;
			// 		height: 100%;
			// 		// background-color: var(--primary);
			// 		background-color: inherit;
			// 		border-radius: 6px;
			// 		z-index: -1;
			// 		animation: ripple 1.5s ease-out;
			// 		animation-delay: -0.5s;
			// 	}
			// }
		}
		// @keyframes ripple {
		// 	from {
		// 		opacity: 1;
		// 		transform: scale(0);
		// 	}
		// 	to {
		// 		opacity: 0;
		// 		transform: scale(1.8);
		// 	}
		// }
	}
}
</style>
