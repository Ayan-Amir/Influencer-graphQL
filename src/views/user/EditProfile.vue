<template>
	<div class="editProfile container">
		<div class="row col-gap-60">
			<div class="col-md-6">
				<h1>Edit Profile</h1>
				<validation-observer ref="observer" v-slot="{ handleSubmit }">
					<b-form @submit.stop.prevent="handleSubmit(onSubmit)">
						<div class="row">
							<div class="col-md-6">
								<base-input
									placeholder="First Name"
									type="text"
									rules="required"
									v-model="user.first_name"
									name="First Name"
								/>
							</div>
							<div class="col-md-6">
								<base-input
									placeholder="Last Name"
									type="text"
									rules="required"
									v-model="user.last_name"
									name="Last Name"
								/>
							</div>
						</div>
						<div class="row">
							<base-date-picker @input="getDate" v-model="user.birth_date" name="DOB" rules="required" />
							<div class="form-group">
								<input
									type="password"
									class="form-control"
									v-model="editProfile.password"
									name="Password"
									placeholder="Password"
								/>
							</div>
							<base-input
								placeholder="Address"
								type="text"
								rules="required"
								v-model="user.address"
								name="Address"
							/>
							<div class="form-group upload">
								<input
									type="file"
									class="form-control"
									placeholder="Add Profile Image"
									@change="upload"
								/>
								<span>Add Profile Images</span>
							</div>
							<div class="UploadImage"></div>

							<ul class="socialLinks">
								<li>
									<router-link to="#" target="_blank">
										<img src="@/assets/images/svg/insta.svg" class="img-fluid" alt="Instagram" />
										Instagram
									</router-link>
								</li>
								<li>
									<router-link to="#" target="_blank">
										<img src="@/assets/images/svg/facebook.svg" class="img-fluid" alt="Facebook" />
										Facebook
									</router-link>
								</li>
							</ul>
							<div class="button-row">
								<button class="btn btn-primary">Save</button>
							</div>
						</div>
					</b-form>
				</validation-observer>
			</div>
			<div class="col-md-6 text-right">
				<div class="editProfile__image">
					<img src="@/assets/images/edit-profile.png" alt="" class="img-fluid" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { UPDATE_USER, UPDATE_PASSWORD } from '@/graphql/user/mutations';
import BaseSocialLink from '@/components/base/BaseSocialLink.vue';
import DeleiveryImages from '@/components/user/partials/DeleiveryImages.vue';
export default {
	data() {
		return {
			editProfile: {
				firstName: '',
				lastName: '',
				birthdate: '',
				password: null,
				retype: null,
				address: null,
			},
		};
	},
	methods: {
		upload: function (e) {
			let wrapper = document.querySelector('.UploadImage');
			let image = document.querySelector('.UploadImage img');
			if (image) {
				image.src = URL.createObjectURL(e.target.files[0]);
			} else {
				let img = document.createElement('img');
				img.src = URL.createObjectURL(e.target.files[0]);
				wrapper.appendChild(img);
			}
		},
		getDate(date) {
			this.editProfile.birthdate = date;
		},
		onSubmit() {
			this.updateProfile();
		},
		async updateProfile() {
			if (this.editProfile.password != null) {
				alert('password update');
				await this.$apollo
					.mutate({
						mutation: UPDATE_PASSWORD,
						variables: { password: this.editProfile.password },
					})
					.then((data) => {
						console.log('data', data);
						// if (data) {
						// 	if (data.data.updatePassword.state == 'success') {
						// 		this.$router.push('/user');
						// 	}
						// }
					})
					.catch((e) => {
						this.handleError(e);
					});
			} else {
				alert('password null');
				await this.$apollo
					.mutate({
						mutation: UPDATE_USER,
						variables: this.user,
					})
					.then((data) => {
						console.log('data', data);
						// if (data) {
						// 	if (data.data.updatePassword.state == 'success') {
						// 		this.$router.push('/user');
						// 	}
						// }
					})
					.catch((e) => {
						this.handleError(e);
					});
			}
		},
	},
	computed: {
		...mapGetters(['user']),
	},
	components: { BaseSocialLink, DeleiveryImages },
	mounted() {
		console.log(this.editProfile.password);
	},
	updated() {
		console.log(this.editProfile.password);
	},
};
</script>

<style lang="scss" scoped>
/deep/.invalid-feedback {
	position: static !important;
}
.editProfile {
	.UploadImage {
		overflow: hidden;
		text-align: center;
		@include flex(center, center);
		/deep/img {
			width: 150px;
			height: 150px;
			object-fit: cover;
			border-radius: 100%;
			margin: 10px;
			@media screen and (max-width: 767px) {
				width: 150px;
				height: 150px;
			}
		}
	}
	h1 {
		font-size: rem(20px);
		margin-bottom: rem(16px);
	}
	.form-control {
		height: 42px;
		padding: rem(14px) rem(10px);
		border: 1px solid #caced5;
		border-radius: 4px;
		font-size: rem(16px);
		font-weight: 400;
		color: var(--textPrimary);
		&:focus {
			border: 1px solid var(--primary) !important;
		}
	}
	.socialLinks {
		list-style: none;
		@include flex(center, space-between);
		padding: 0 10px;
		li {
			flex: 0 0 48%;
			max-width: 48%;
			margin-bottom: 12px;
			img {
				margin-right: 13px;
			}
			a {
				font-size: 14px;
				font-weight: 600;
				color: var(--textPrimary);
				border: 1px solid #caced5;
				border-radius: 50px;
				@include flex(center, center);
				padding: rem(18px) rem(10px);
				text-decoration: none;
				min-width: 213px;
				min-height: 65px;
				background-color: #fff;
				img {
					width: 21px;
					height: 21px;
				}
				@media screen and (min-width: 1025px) {
					&:hover {
						border-color: var(--primary);
					}
				}
			}
		}
		@media screen and (max-width: 991px) {
			li {
				a {
					min-width: auto;
				}
			}
		}
		@media screen and (max-width: 575px) {
			li {
				flex: 0 0 100%;
				max-width: 100%;
				a {
					min-height: 55px;
				}
			}
		}
	}
	.button-row {
		margin-top: 0;
		padding: 0 10px;
		.btn {
			width: 100%;
		}
	}
	.form-group {
		&.upload {
			background: #e8e8f0;
			border-radius: 8px;
			height: 52px;
			position: relative;
			margin: 0;
			width: 96%;
			margin: auto;
			margin-bottom: rem(16px);
			transition: 0.4s ease all;
			span {
				position: absolute;
				font-size: rem(20px);
				font-weight: 600;
				color: var(--textPrimary);
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 100%;
				text-align: center;
				@media screen and (max-width: 767px) {
					font-size: rem(18px);
				}
			}
			input {
				width: 100%;
				height: 100%;
				opacity: 0;
				z-index: 2;
			}
			@media screen and (min-width: 1025px) {
				&:hover {
					background: var(--primary);
					span {
						color: #fff;
					}
				}
			}
		}
	}
	@media screen and (max-width: 767px) {
		> .row {
			flex-direction: column-reverse;
		}
		&__image {
			max-width: 300px;
			margin: auto auto rem(30px) auto;
		}
	}
}
/deep/ {
	.b-form-btn-label-control {
		border-radius: 4px;
		border: 1px solid #ced4da !important;
	}
	.b-form-datepicker.b-form-btn-label-control.form-control > .form-control {
		border-radius: 8px;
		color: #6c757d !important;
		font-size: rem(16px) !important;
		font-weight: 400 !important;
	}
}
</style>
