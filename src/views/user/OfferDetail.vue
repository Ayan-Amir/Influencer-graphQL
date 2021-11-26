<template>
	<div class="offerDetail container" v-if="$apollo.data">
		<div class="row col-gap-40 align-items-center mb-3">
			<div class="col-md-6">
				<div class="image">
					<img
						:src="`${$config.IMG_HOST}/629x230/${offer.image}`"
						alt=""
						class="img-fluid"
					/>
				</div>
			</div>
			<div class="col-md-6">
				<h1>{{ offer.name }}</h1>
				<div class="offerDetail__purchase">
					<div class="offerDetail__purchase--brandLogo">
						<img
							:src="`${$config.IMG_HOST}/55x55/${offer.logo}`"
							alt=""
							class="img-fluid"
						/>
					</div>
					<p>
						{{ offer.company }}
						<span>{{ offer.location.name }}</span>
					</p>
				</div>
				<span>{{ offer.description }}</span>
				<div class="requestOffer">
					<router-link to="#" class="btn btn-primary large"
						>Request offer
					</router-link>
					<div
						class="requestOffer__time"
						v-if="offer.expirationDate !== null"
					>
						Ends in: {{ offer.expirationDate }}
						<span>{{ offer.left }} Left</span>
					</div>
				</div>
			</div>
		</div>
		<offer-details :details="offer.details" />
	</div>
</template>

<script>
import OfferDetails from '@/components/user/OfferDetails.vue';
export default {
	data() {
		return {
			offer: [],
			id: 0,
		};
	},
	components: { OfferDetails },
	created() {
		this.id = parseInt(this.$route.params.id);
	},
	apollo: {
		offer: {
			query: require('../../graphql/OfferDetails.gql'),
			variables() {
				return {
					id: parseInt(this.$route.params.id),
				};
			},
		},
	},
};
</script>

<style lang="scss">
.btn.btn-primary {
	min-height: 40px;
	width: 142px;
	padding-top: 6px;
	padding-bottom: 6px;
	font-size: rem(14px);
	font-weight: 700;
	border-radius: 8px;
}
</style>

<style lang="scss" scoped>
.offerDetail {
	.image {
		height: 225px;
		border-radius: 30px;
		overflow: hidden;
	}
	&__purchase {
		display: flex;
		align-items: center;
		margin-bottom: 8px;
		&--brandLogo {
			margin-right: 10px;
			width: 50px;
			height: 50px;
			border-radius: 50%;
			overflow: hidden;
			img {
				height: 100%;
				width: 100%;
			}
		}
		p {
			font-size: rem(18px);
			font-weight: 500;
			color: var(--textPrimary);
			font-family: $secondary-font;
			margin: 0;
		}
		span {
			display: block;
			font-size: rem(14px) !important;
			font-weight: 400;
			color: #9798b4 !important;
			margin: 0;
		}
	}
	span {
		font-size: rem(15px);
		color: #77838f;
		font-family: $secondary-font;
	}
	.requestOffer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: rem(18px);
		&__time {
			position: relative;
			font-family: $primary-font;
			font-size: rem(14px);
			color: #9798b4;
			span {
				color: #9798b4;
				margin-left: rem(22px);
			}
			&::before {
				content: '';
				position: absolute;
				background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='time' width='16.141' height='16.141' viewBox='0 0 16.141 16.141'%3E%3Cpath id='Path_64' data-name='Path 64' d='M8.062,0a8.071,8.071,0,1,0,8.079,8.071A8.067,8.067,0,0,0,8.062,0Zm.008,14.527a6.456,6.456,0,1,1,6.456-6.456A6.455,6.455,0,0,1,8.071,14.527Zm.4-10.492H7.263V8.878L11.5,11.42l.605-.993L8.474,8.272Z' fill='%239798b4'/%3E%3C/svg%3E");
				background-repeat: no-repeat;
				height: 17px;
				width: 17px;
				top: 50%;
				transform: translateY(-50%);
				left: -24px;
			}
		}
		.btn.btn-primary {
			min-height: 40px;
			width: 142px;
			padding-top: 6px;
			padding-bottom: 6px;
			font-size: rem(14px);
			font-weight: 700;
			border-radius: 8px;
		}
	}
}
</style>
