<template>
	<div class="profile">
		<div class="row justify-content-between align-items-center col-gap-120">
			<div class="col-xxl-4 col-md-5">
				<base-alerts />
				<h1>Add Your <br />Profile Photo</h1>
				<validation-observer ref="observer" v-slot="{ handleSubmit }">
					<b-form @submit.stop.prevent="handleSubmit(uploadImage)" enctype="multipart/form-data">
						<div class="profile__Photo">
							<base-profile-upload
								:rules="`${image == null ? 'required' : 'ext:jpg,png'}`"
								v-model="image"
							/>
						</div>
						<p class="subTitle">
							By continuing you accept our <br /><span>Terms and Conditions</span>
							and
							<span>Privacy Policy </span>
						</p>
						<div class="button-row">
							<button type="submit" class="btn btn-primary large" :class="processing ? 'processing' : ''">
								{{ btnText }}
							</button>
						</div>
					</b-form>
				</validation-observer>
			</div>
			<div class="col-xxl-8 col-md-7">
				<div class="image">
					<img src="@/assets/images/profile-img.png" class="img-fluid" alt="profile-img" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { UPLOAD_IMAGE } from '@/graphql/user/mutations';
import register from '../../../mixin/register.js';
import { mapActions } from 'vuex';
export default {
	mixins: [register],
	data() {
		return {
			image: null,
			processing: false,
			btnText: 'Finish',
		};
	},
	methods: {
		...mapActions(['setUser']),
		uploadImage() {
			this.uploadProfilePhoto();
		},
		uploadProfilePhoto() {
			if (this.image != null) {
				this.btnText = 'Processing...';
				this.processing = true;
			}
			this.$apollo
				.mutate({
					mutation: UPLOAD_IMAGE,
					variables: {
						image: this.image,
					},
				})
				.then((data) => {
					if (data.data.uploadProfile.value != '') {
						this.setUser().then(() => {
							this.$router.push('/user/');
							this.processing = false;
							this.btnText = 'Finish';
						});
						return;
					}
				})
				.catch((e) => {
					this.handleError(e);
					this.processing = false;
					this.btnText = 'Finish';
				});
		},
	},
};
</script>

<style lang="scss">
.LoginRegister {
	@media screen and (max-width: 1199px) {
		min-height: calc(100vh + 60px) !important;
	}
	p span {
		font-weight: 700 !important;
	}
	.contentWrapper {
		padding-top: 0 !important;
	}
	.profile {
		&__Photo {
			margin: rem(25px) 0 rem(15px) 0;
		}
		@media screen and (max-width: 1700px) {
			.image {
				img {
					max-width: 540px;
				}
			}
		}
		@media screen and (max-width: 1400px) {
			.image {
				img {
					max-width: 475px;
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
				justify-content: start;
			}
		}
	}
}
</style>
