<template>
	<div>
		<div class="card" v-for="card in cardData" :key="card.index">
			<div>
				<div class="card__logo">
					<img
						:src="require(`@/assets/images/svg/${card.icon}`)"
						alt=""
						class="img-fluid"
					/>
				</div>
				<div class="card__title">
					{{ card.title }}
					<span>{{ card.subTitle }}</span>
				</div>
			</div>
			<router-link
				v-if="card.isDiscoverBtn"
				to="discover-detail"
				class="btn btn-primary"
				>{{ card.btn }}</router-link
			>
			<p class="card__price" v-if="card.isPrice">{{ card.price }}</p>

			<div class="card__socialActivity" v-if="card.isSocailActivity">
				<div class="card__socialActivity--logo">
					<img
						src="@/assets/images/icons/insta.png"
						alt=""
						class="img-fluid"
					/>
				</div>
				<div class="card__socialActivity--status">
					{{ card.app }}
					<span>{{ card.activity }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		cardData: Array,
	},
};
</script>

<style lang="scss" scoped>
.card {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: rem(15px);
	border-radius: 8px;
	border: 0;
	margin-bottom: rem(15px);
	> div {
		display: flex;
		align-items: center;
	}
	&__logo {
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
		span {
			display: block;
			font-size: rem(14px);
			font-weight: 400;
			color: var(--textSecondary);
			@include truncate(1);
		}
	}
	&__socialActivity {
		display: flex;
		align-items: flex-start;
		&--logo {
			width: 38px;
			height: 38px;
			border-radius: 50%;
			overflow: hidden;
			img {
				height: 100%;
				width: 100%;
			}
		}
		&--status {
			color: #8998ac;
			font-size: rem(9px);
			margin-left: rem(18px);
			font-weight: 400;
			span {
				display: block;
				font-size: rem(16px);
				font-weight: 500;
				color: var(--textPrimary);
			}
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
