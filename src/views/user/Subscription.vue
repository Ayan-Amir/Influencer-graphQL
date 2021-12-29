<template>
	<div class="subscription container">
		<div class="row" v-if="$apollo.data.campaign">
			<div class="col-md-6">
				<div class="pageHead">
					<div class="d-flex align-items-center">
						<div class="pageHead__icon">
							<img :src="`${$config.IMG_HOST}/50x50/${campaign.logo}`" alt="" class="img-fluid" />
						</div>
						<h1>{{ campaign.name }}</h1>
					</div>
					<span class="pageHead__price">{{ campaign.price }}</span>
				</div>
				<base-social-link />
				<p>
					{{ campaign.description }}
				</p>
				<div class="subscription__control">
					<label v-if="state != 'active'" class="btn btn-primary small" :class="state" for="">{{
						state == 'completed' ? 'Completed' : 'Delivery'
					}}</label>
					<div
						class="form-group btn btn-primary ld-ext-left"
						:class="processing ? 'processing' : ''"
						v-if="state == 'active'"
					>
						Upload
						<input type="file" multiple @change="submitDelivery" />
					</div>
					<button type="submit" class="btn btn-primary" v-if="state == 'active' && images.length">
						Finish Delivery
					</button>
				</div>
				<div class="subscription__delivery" v-if="this.images.length">
					<h3>You delivered:</h3>
					<span class="subscription__delivery--date">Sep 10 ,2021</span>
					<deleivery-images :images="images" />
				</div>
				<div class="subscription__revision">
					<h3>Revision 1</h3>
					<p>
						{{ campaign.description }}
					</p>
				</div>
			</div>
			<div class="col-md-6">
				<div class="subscription__image">
					<img :src="`${$config.IMG_HOST}/625x730/${campaign.image}`" alt="" class="img-fluid" />
				</div>
			</div>
		</div>
		<div v-if="$apollo.loading">Loading ...</div>
	</div>
</template>

<script>
import { CAMPAIGN_DETAILS } from '@/graphql/user/query';
import { CAMPAIGN_DELIVERY } from '@/graphql/user/mutations';
import BaseSocialLink from '@/components/base/BaseSocialLink.vue';
import DeleiveryImages from '@/components/user/partials/DeleiveryImages.vue';
export default {
	data() {
		return {
			campaign: [],
			id: 0,
			state: '',
			images: [],
			processing: false,
		};
	},
	components: { BaseSocialLink, DeleiveryImages },
	created() {
		this.id = parseInt(this.$route.params.id);
	},
	apollo: {
		campaign: {
			query: CAMPAIGN_DETAILS,
			fetchPolicy: 'network-only',
			variables() {
				return {
					id: parseInt(this.$route.params.id),
				};
			},
			error(err) {
				this.$router.push('/404');
			},
		},
	},
	methods: {
		async submitDelivery(e) {
			if (e.target.files.length > 0) {
				this.processing = true;
				e.target.files.forEach((element) => {
					this.$apollo
						.mutate({
							mutation: CAMPAIGN_DELIVERY,
							variables: {
								image: element,
								idCampaign: parseInt(this.$route.params.id),
							},
						})
						.then((data) => {
							this.$apollo.queries.campaign.refetch();
							this.processing = false;
						})
						.catch((e) => {
							console.log(e);
							this.handleError(e);
						});
				});
			}
		},
	},
	watch: {
		campaign() {
			// setTimeout(() => {

			// }, 1000);
			if (this.campaign.subscription.state) {
				this.state = this.campaign.subscription.state;
				this.images = this.campaign.subscription.images;
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.subscription {
	.pageHead {
		&__icon {
			height: 50px;
			width: 50px;
			border-radius: 50%;
			overflow: hidden;
		}
	}
	p {
		font-family: $secondary-font;
	}
	h3 {
		font-size: rem(18px);
		font-weight: 500;
		color: var(--textPrimary);
		margin-bottom: rem(6px);
	}
	&__control {
		.btn.btn-primary {
			font-size: rem(14px);
			font-weight: 700;
			border-radius: 6px;
			width: 142px;
			min-height: 42px;
			height: 42px;
			&.completed {
				background: #24d694 !important;
				border: 2px solid #24d694 !important;
			}
		}
		.form-group {
			margin-bottom: 0 !important;
			position: relative;
			&:not(:last-child) {
				margin-right: rem(16px);
			}
			&::before {
				content: '';
				position: absolute;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #fff;
				font-size: rem(14px);
				font-weight: 700;
			}
			&.btn.btn-primary {
				width: 142px;
				min-height: 42px;
				height: 42px;
				color: #fff !important;

				input {
					position: absolute;
					opacity: 0;
					height: 100%;
					width: 100%;
				}
			}
		}
	}
	&__delivery {
		margin-top: rem(20px);
		&--date {
			color: var(--primary);
			font-size: rem(14px);
			font-weight: 600;
		}
		> .row {
			margin-top: rem(20px);
		}
	}
	&__revision {
		margin-top: rem(24px);
		h3 {
			margin-bottom: rem(18px);
		}
	}
	&__image {
		overflow: hidden;
		border-radius: 30px;
		@media screen and (min-width: 768px) {
			margin-top: rem(20px);
		}
		@media screen and (max-width: 767px) {
			margin-bottom: rem(24px);
		}
	}
	@media screen and (max-width: 767px) {
		> .row {
			flex-direction: column-reverse;
		}
		.image {
			margin-bottom: rem(18px);
		}
	}
	@media screen and (max-width: 575px) {
		.btn {
			width: 100%;
		}
	}
}
</style>
