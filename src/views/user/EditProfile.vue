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
					</div>
					<social-links :linkItem="linkItems" />
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
import SocialLinks from '../../components/user/layout/SocialLinks.vue';
export default {
	data() {
		return {
			linkItems: [
				{
					index: 1,
					icon: 'google-icon.svg',
					title: 'Google',
				},
				{
					index: 2,
					icon: 'facebook-icon.svg',
					title: 'Facebook',
				},
			],
		};
	},
	components: { BaseSocialLink, DeleiveryImages, SocialLinks },
};
</script>

<style lang="scss" scoped>
.editProfile {
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
}
</style>
