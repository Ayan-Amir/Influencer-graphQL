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
							:price="this.mediaAccounts[0].priceRecommendations.story.value"
							text=".00"
						/>
					</div>
					<p class="subTitle">
						{{ subTitle }}
					</p>
					<div class="checkbox">
						<label>
							<input type="checkbox" name="all" checked />
							<span>My price is negotiable</span>
						</label>
					</div>
					<div class="button-row">
						<router-link to="profile-photo" class="btn btn-primary large">Save</router-link>
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
export default {
	data() {
		return {
			title: 'Modify Story Price',
			subTitle: 'We recommend choosing this price ',
			type: 'instagram',
		};
	},
	apollo: {
		mediaAccounts: {
			query: STORY_RECOMENDED_PRICE,
			variables() {
				return {
					type: 'instagram',
				};
			},
			result(data) {
				console.log(data);
			},
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
