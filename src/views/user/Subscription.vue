<template>
	<div class="subscription container">
		<div class="row">
			<div class="col-md-6">
				<!-- <div class="orderID">{{ orderId }}</div> -->
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
					<label
						v-if="campaign.subscription.state != active"
						class="btn btn-primary small"
						:class="campaign.subscription.state"
						for=""
						>Delivery</label
					>
					<input class="subscription__control--upload" type="file" />
				</div>
				<!-- <a href="#" class="btn btn-primary small">Delivery</a> -->
				<div class="subscription__delivery">
					<h3>You delivered:</h3>
					<span class="subscription__delivery--date">Sep 10 ,2021</span>
					<deleivery-images />
				</div>
				<div class="subscription__revision">
					<h3>Revision</h3>
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
	</div>
</template>

<script>
import { CAMPAIGN_DETAILS } from '@/graphql/user/query';
import BaseSocialLink from '@/components/base/BaseSocialLink.vue';
import DeleiveryImages from '@/components/user/partials/DeleiveryImages.vue';
export default {
	data() {
		return {
			campaign: [],
			id: 0,
		};
	},
	components: { BaseSocialLink, DeleiveryImages },
	created() {
		this.id = parseInt(this.$route.params.id);
	},
	apollo: {
		campaign: {
			query: CAMPAIGN_DETAILS,
			variables() {
				return {
					id: parseInt(this.$route.params.id),
				};
			},
			data(e) {
				console.log(e);
			},
			errror(err) {
				console.log(err);
			},
		},
	},
	mounted() {
		console.log('apollo Data', this.campaign);
	},
	updated() {
		console.log('apollo Data', this.campaign);
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
	// .orderID {
	// 	font-size: rem(20px);
	// 	font-weight: 700;
	// 	color: var(--textPrimary);
	// 	margin-bottom: rem(30px);
	// }
	p {
		font-family: $secondary-font;
	}
	h3 {
		font-size: rem(18px);
		font-weight: 500;
		color: var(--textPrimary);
		margin-bottom: rem(6px);
	}
	.btn.btn-primary {
		font-size: rem(14px);
		font-weight: 700;
		border-radius: 6px;
		padding-left: rem(42px);
		padding-right: rem(42px);
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
