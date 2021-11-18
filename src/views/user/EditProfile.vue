<template>
	<div class="editProfile container">
		<div class="row col-gap-60">
			<div class="col-md-6">
				<h1>Edit Profile</h1>
				<form>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<input
									type="text"
									class="form-control"
									placeholder="First name"
								/>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<input
									type="text"
									class="form-control"
									placeholder="Last name"
								/>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="form-group">
							<input
								type="email"
								class="form-control"
								placeholder="Email"
							/>
						</div>
						<div class="form-group">
							<input
								type="text"
								class="form-control"
								placeholder="Birthday Day"
							/>
						</div>
						<div class="form-group">
							<input
								type="password"
								class="form-control"
								placeholder="Change the password"
							/>
						</div>
						<div class="form-group">
							<input
								type="text"
								class="form-control"
								placeholder="Adress"
							/>
						</div>
						<div class="form-group">
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
									<img
										src="@/assets/images/svg/insta.svg"
										class="img-fluid"
										alt="Instagram"
									/>
									Instagram
								</router-link>
							</li>
							<li>
								<router-link to="#" target="_blank">
									<img
										src="@/assets/images/svg/facebook.svg"
										class="img-fluid"
										alt="Facebook"
									/>
									Facebook
								</router-link>
							</li>
						</ul>
						<div class="button-row">
							<button class="btn btn-primary">Save</button>
						</div>
					</div>
				</form>
			</div>
			<div class="col-md-6 text-right">
				<div class="editProfile__image">
					<img
						src="@/assets/images/edit-profile.png"
						alt=""
						class="img-fluid"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BaseSocialLink from '@/components/base/BaseSocialLink.vue';
import DeleiveryImages from '@/components/user/partials/DeleiveryImages.vue';
export default {
	methods: {
		upload: function (e) {
			let wrapper = document.querySelector('.UploadImage');
			let image = document.querySelector('UploadImage img');
			if (image) {
				image.src = URL.createObjectURL(e.target.files[0]);
			} else {
				let img = document.createElement('img');
				img.src = URL.createObjectURL(e.target.files[0]);
				wrapper.appendChild(img);
			}
			// let img = document.createElement('img');
			// img.src = URL.createObjectURL(e.target.files[0]);
			// wrapper.appendChild(img);
		},
	},
	components: { BaseSocialLink, DeleiveryImages },
};
</script>

<style lang="scss" scoped>
.editProfile {
	.UploadImage {
		height: 50px;
		width: 50px;
		overflow: hidden;
		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}
	h1 {
		font-size: rem(20px);
		margin-bottom: rem(16px);
	}
	.form-control {
		height: 42px;
		padding: rem(14px) rem(10px);
		border: 1px solid #ccd4e0;
		border-radius: 8px;
		font-size: rem(14px);
		font-weight: 400;
		color: var(--textPrimary);
		&:focus {
			border: 1px solid var(--primary) !important;
		}
	}
	input[type='file'] {
		width: 100%;
		height: 100%;
		// opacity: 0;
	}
	.socialLinks {
		list-style: none;
		@include flex(center, space-between);
		padding: 0;
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
	}
	.button-row {
		margin-top: 0;
		padding: 0;
		.btn {
			width: 100%;
		}
	}
}
</style>
