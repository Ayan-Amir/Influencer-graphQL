<template>
	<div class="card discoverCard">
		<div>
			<div class="discoverCard__image">
				<img
					:src="`${$config.IMG_HOST}/304x206/${campaign.image}`"
					alt=""
					class="img-fluid"
				/>
			</div>
			<div class="discoverCard__title">
				{{ campaign.name }}
				<span>{{ campaign.description }}</span>
			</div>
		</div>
		<router-link
			v-if="isApply"
			:to="`discover-detail/${campaign.id}/${friendURL(campaign.name)}`"
			class="btn btn-primary small"
			>Apply Now</router-link
		>
		<p
			class="discoverCard__price"
			v-if="campaign.price != null && isApply == false"
		>
			{{ campaign.price }}
		</p>
		<router-link
			v-if="islink"
			to="/user/discover-detail-deleivery"
			class="abs-link"
			>discover-detail-deleivery</router-link
		>
	</div>
</template>

<script>
export default {
	props: {
		campaign: {
			type: Object | Array,
		},
		isApply: Boolean,
		islink: Boolean,
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
	border-radius: 8px !important;
	margin-bottom: rem(15px);
	> div {
		display: flex;
		align-items: center;
	}
	&__image {
		width: 50px;
		height: 50px;
		min-width: 50px;
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
			@include truncate(2);
		}
	}
	.btn.btn-primary {
		margin-left: rem(20px);
	}

	&__price {
		margin: 0;
		font-size: 14px;
		color: var(--primary);
		font-weight: 700;
		position: relative;
		margin-right: rem(42px);
		padding-left: rem(16px);
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
		@media screen and (max-width: 1024px) {
			margin-right: rem(30px);
			&::before {
				right: -35px;
			}
		}
	}
	@media screen and (min-width: 1025px) {
		&:hover {
			.discoverCard__price {
				&::before {
					right: -35px;
				}
			}
		}
	}
}
</style>
