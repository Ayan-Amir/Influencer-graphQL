<template>
	<div class="card profile">
		<div class="profile__image">
			<img
				src="@/assets/images/profile-image.png"
				alt=""
				class="img-fluid"
			/>
		</div>
		<div class="profile__title">Ruby Von Rails</div>
		<p class="profile__subTitle">Influencer</p>
		<div class="button-row">
			<a href="#" class="btn btn-primary small">Edit Profile</a>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.profile {
	padding: rem(24px) rem(16px) rem(16px) rem(16px);
	border-radius: 12px !important;
	text-align: center;
	&__image {
		img {
			border-radius: 50%;
			overflow: hidden;
		}
		margin-bottom: rem(14px);
	}
	&__title {
		font-size: rem(18px);
		color: var(--textPrimary);
		font-weight: 700;
		margin-bottom: rem(4px);
	}
	&__subTitle {
		font-size: rem(16px);
		font-weight: 300;
		margin-bottom: rem(12px);
	}
	.button-row {
		margin: 0;
		.btn.btn-primary {
			font-size: rem(14px);
			padding-right: rem(24px);
			padding-left: rem(24px);
		}
	}
}
</style>
