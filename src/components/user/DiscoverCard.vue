<template>
	<div>
		<div class="card discoverCard">
			<div>
				<div class="discoverCard__image">
					<img
						:src="require(`@/assets/images/svg/${card.icon}`)"
						alt=""
						class="img-fluid"
					/>
				</div>
				<div class="discoverCard__title">
					{{ card.title }}
					<span>{{ card.subTitle }}</span>
				</div>
			</div>
			<router-link
				v-if="card.isDiscoverBtn"
				to="discover-detail"
				class="btn btn-primary small"
				>{{ card.btn }}</router-link
			>
			<p class="discoverCard__price" v-if="card.isPrice">
				{{ card.price }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		card: Object,
	},
};
</script>

<style lang="scss" scoped>
.discoverCard {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: rem(15px);
	border-radius: 12px;
	border: 0;
	margin-bottom: rem(15px);
	> div {
		display: flex;
		align-items: center;
	}
	&__image {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		overflow: hidden;
		img {
			height: 100%;
			width: 100%;
		}
	}
	&__title {
		font-size: rem(18px);
		font-weight: 500;
		margin-left: rem(18px);
		color: var(--textPrimary);
		font-family: $secondary-font;
		span {
			display: block;
			font-size: rem(14px);
			font-weight: 400;
			color: var(--textSecondary);
			@include truncate(1);
		}
	}
	.btn.btn-primary {
		font-size: rem(10px);
		border-radius: 8px;
		font-weight: 600;
		margin-left: rem(20px);
		min-width: 105px;
	}

	&__price {
		margin: 0;
		font-size: rem(14px);
		color: var(--primary);
		font-weight: 700;
		position: relative;
		margin-right: rem(42px);
		font-family: $secondary-font;
		&::before {
			position: absolute;
			content: '';
			height: 24px;
			width: 24px;
			background-image: url(../../assets/images/icons/arrow.png);
			background-repeat: no-repeat;
			top: 50%;
			transform: translateY(-50%);
			right: -25px;
			transition: 0.5s ease all;
		}
	}
	&:hover {
		.card__price {
			&::before {
				right: -35px;
			}
		}
	}
}
</style>
