<template>
	<div class="storyPrice">
		<div class="row align-items-center justify-content-between">
			<div class="col-xxl-5 col-md-6">
				<h1>{{ title }}</h1>
				<div v-if="this.$apollo.data.mediaAccounts">
					<p class="alertMessage">
						{{ this.mediaAccounts[0].priceRecommendations.story.description }}
					</p>
					<div>
						<base-touch-spin
							sign="$"
							v-model="storyPrice.price"
							:price="this.mediaAccounts[0].priceRecommendations.story.value"
							text=".00"
						/>
					</div>
					<p class="subTitle">
						{{ subTitle }}
					</p>
					<b-form-checkbox v-model="storyPrice.priceNegotiable" :value="true" :unchecked-value="false">
						My price is negotiable
					</b-form-checkbox>
					<div class="button-row">
						<button
							type="submit"
							class="btn btn-primary large"
							:class="processing ? 'processing' : ''"
							@click="onSubmit"
						>
							Save
						</button>
					</div>
				</div>
				<div v-if="this.$apollo.error">
					{{ this.$apollo.error }}
				</div>
			</div>
			<div class="col-xxl-7 col-md-6">
				<div class="image">
					<img src="@/assets/images/story-price.png" class="img-fluid" alt="story-price-img" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { STORY_RECOMENDED_PRICE } from '@/graphql/user/query';
import { UPDATE_STORY_PRICE } from '@/graphql/user/mutations';
export default {
	data() {
		return {
			title: 'Modify Story Price',
			subTitle: 'We recommend choosing this price ',
			type: 'instagram',
			processing: false,
			storyPrice: {
				type: 'instagram',
				price: null,
				priceNegotiable: true,
			},
		};
	},
	apollo: {
		mediaAccounts: {
			query: STORY_RECOMENDED_PRICE,
			variables() {
				return {
					type: this.storyPrice.type,
				};
			},
		},
	},
	methods: {
		onSubmit() {
			this.updateStoryPrice();
		},
		async updateStoryPrice() {
			this.processing = true;
			await this.$apollo
				.mutate({
					mutation: UPDATE_STORY_PRICE,
					variables: this.storyPrice,
				})
				.then((data) => {
					if (data) {
						if (data.data.mediaAccount.state == 'added' || data.data.mediaAccount.state == 'updated') {
							this.$router.push('profile-photo');
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
<style lang="scss">
.LoginRegister {
	.contentWrapper {
		padding-top: 0 !important;
	}
	.storyPrice {
		@media screen and (max-width: 1850px) {
			.image {
				img {
					max-width: 440px;
				}
			}
		}
		@media screen and (max-width: 1400px) {
			.image {
				img {
					max-width: 385px;
				}
			}
		}
		@media screen and (max-width: 991px) {
			.image {
				img {
					max-width: 100%;
				}
			}
		}
		@media screen and (max-width: 767px) {
			.button-row {
				justify-content: start !important;
			}
		}
	}
}
</style>
