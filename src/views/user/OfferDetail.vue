<template>
	<div class="offerDetail container" v-if="$apollo.data.offer.image">
		<base-alerts />
		<div class="row align-items-center mb-3">
			<div class="col-md-6">
				<div class="image">
					<img v-lazy="`${$config.IMG_HOST}/629x230/${offer.image}`" alt="" class="img-fluid" />
				</div>
			</div>
			<div class="col-md-6">
				<div class="offerDetail__wrapper">
					<div class="offerDetail__purchase">
						<div class="offerDetail__purchase--brandLogo">
							<img v-lazy="`${$config.IMG_HOST}/55x55/${offer.logo}`" alt="" class="img-fluid" />
						</div>
						<p>
							{{ offer.company }}
							<span>{{ locations.name }}</span>
						</p>
					</div>
					<div class="requestOffer__time" v-if="offer.expirationDate !== null">
						Ends in: {{ offer.expirationDate }}
						<span>{{ offer.left }} Left</span>
					</div>
				</div>
				<p class="desc">{{ offer.description }}</p>
				<div class="requestOffer">
					<button @click="onSubmit" :class="processing ? 'processing' : ''" class="btn btn-primary large">
						Apply Now
					</button>
					<div class="requestOffer__time" v-if="offer.expirationDate !== null">
						Ends in: {{ offer.expirationDate }}
						<span>{{ offer.left }} Left</span>
					</div>
				</div>
			</div>
		</div>
		<offer-detail :processing="this.processing" :details="offer.details" v-if="offer.details" />
		<div class="button-row">
			<button @click="onSubmit" class="btn btn-primary" :class="processing ? 'processing' : ''">Apply Now</button>
		</div>
	</div>
</template>

<script>
import { OFFER_DETAILS } from '@/graphql/user/query';
import { OFFER_SUBSCRIBE } from '@/graphql/user/mutations';
import { MESSAGES } from '@/_helpers/notifications';
export default {
	data() {
		return {
			id: 0,
			offer: [],
			locations: [],
			processing: false,
		};
	},
	components: {
		OfferDetail: () => import(/* webpackChunkName: "offerDetail" */ '@/components/user/common/Details.vue'),
	},
	created() {
		this.id = parseInt(this.$route.params.id);
	},
	apollo: {
		offer: {
			query: OFFER_DETAILS,
			variables() {
				return {
					id: parseInt(this.$route.params.id),
				};
			},
		},
	},
	watch: {
		offer: {
			handler() {
				if (this.offer.location) {
					this.locations = this.offer.location;
				}
			},
		},
	},
	methods: {
		async onSubmit() {
			this.processing = true;
			await this.updateDetail().then(() => {
				this.scrollTop();
				this.processing = false;
			});
		},
		scrollTop() {
			document.body.scrollTop = 0; // For Safari
			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		},
		async updateDetail() {
			await this.$apollo
				.mutate({
					mutation: OFFER_SUBSCRIBE,
					variables: {
						idOffer: parseInt(this.$route.params.id),
					},
				})
				.then((data) => {
					if (data) {
						if (data.data.offerSubscribe.state == 'success') {
							this.$store.commit('alert/success', MESSAGES.SUBSCRIBED);
						}
					}
				})
				.catch((e) => {
					this.handleError(e);
				});
		},
	},
};
</script>

<style lang="scss" scoped>
.offerDetail {
	.pageHead {
		margin-bottom: rem(20px);
		&__icon {
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
	}
	.desc {
		font-size: rem(15px);
		color: #77838f;
		font-family: $secondary-font;
	}
	&__wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 8px;
		.requestOffer__time {
			display: none;
		}
		@media screen and (max-width: 767px) {
			margin-bottom: rem(16px);

			.requestOffer__time {
				display: block !important;
			}
		}
	}
	.image {
		height: 225px;
		border-radius: 30px;
		overflow: hidden;
		@media screen and (max-width: 767px) {
			margin-bottom: rem(30px);
		}
		img {
			height: 100%;
			width: 100%;
		}
	}
	&__purchase {
		display: flex;
		align-items: center;
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
		margin-top: rem(22px);
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
			@media screen and (max-width: 767px) {
				display: none;
			}
		}
		.btn.btn-primary {
			min-height: 40px;
			width: 142px;
			padding-top: 6px;
			padding-bottom: 6px;
			font-size: rem(14px);
			font-weight: 700;
			border-radius: 6px;
		}
	}
}
</style>
