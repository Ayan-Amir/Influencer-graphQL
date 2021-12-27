<template>
	<div class="paymentDetail">
		<div class="row justify-content-between align-items-center">
			<div class="col-md-5">
				<h1>{{ title }}</h1>
				<validation-observer ref="observer" v-slot="{ handleSubmit }">
					<b-form @submit.stop.prevent="handleSubmit(onSubmit)">
						<base-input
							placeholder="Instagram"
							v-model="mediaAccount.username"
							type="text"
							name="Instagram Username"
							rules="required"
						/>
						<div class="button-row">
							<button type="submit" class="btn btn-primary large" :class="processing ? 'processing' : ''">
								Save
							</button>
						</div>
					</b-form>
				</validation-observer>
			</div>
			<div class="col-md-7">
				<div class="image">
					<img src="@/assets/images/payment-detail.png" class="img-fluid" alt="payment-detail.png-img" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { MEDIA_ACCOUNT } from '@/graphql/user/mutations';
export default {
	data() {
		return {
			title: 'Connect Social',
			processing: false,
			mediaAccount: {
				type: 'instagram',
				username: null,
			},
		};
	},
	methods: {
		onSubmit() {
			this.updateMediaAccount();
		},
		async updateMediaAccount() {
			this.processing = true;
			await this.$apollo
				.mutate({
					mutation: MEDIA_ACCOUNT,
					variables: this.mediaAccount,
				})
				.then((data) => {
					// console.log(data);
					if (data) {
						if (data.data.mediaAccount.state == 'added' || data.data.mediaAccount.state == 'updated') {
							this.$router.push('story-price');
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
/deep/.invalid-feedback {
	position: static !important;
}
</style>
<style lang="scss">
.LoginRegister {
	@media screen and (max-width: 1600px) {
		min-height: calc(100vh + 150px) !important;
	}
	@media screen and (max-width: 1350px) {
		min-height: calc(100vh + 250px) !important;
	}
	@media screen and (max-width: 991px) {
		min-height: 100vh !important;
	}
	.paymentDetail {
		// padding-top: rem(35px);
		width: 100%;
		h1 {
			margin-bottom: rem(28px);
		}
		p {
			margin-bottom: 10px;
		}
		.alertMessage {
			color: var(--warning);
			background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='27' height='28' viewBox='0 0 27 28'%3E%3Cg id='Group_1341' data-name='Group 1341' transform='translate(-108 -329)'%3E%3Cg id='Component_1_1' data-name='Component 1 – 1' transform='translate(108 329)'%3E%3Cpath id='Polygon_1' data-name='Polygon 1' d='M11.74,3.259a2,2,0,0,1,3.52,0L25.407,22.05A2,2,0,0,1,23.647,25H3.353a2,2,0,0,1-1.76-2.95Z' fill='%23eeae2b'/%3E%3C/g%3E%3Ctext id='_' data-name='!' transform='translate(119 351)' fill='%23fff' font-size='18' font-family='NunitoSans-Bold, Nunito Sans' font-weight='700'%3E%3Ctspan x='0' y='0'%3E!%3C/tspan%3E%3C/text%3E%3C/g%3E%3C/svg%3E");
		}
		@media screen and (max-width: 767px) {
			.image {
				max-width: 450px;
			}
		}
	}
	.button-row {
		margin-top: 10px;
	}
}
</style>
