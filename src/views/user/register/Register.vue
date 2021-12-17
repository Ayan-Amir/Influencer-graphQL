<template>
	<div class="password loginForm">
		<div class="row justify-content-between align-items-center col-gap-70">
			<div class="col-lg-5 col-md-6">
				<register-email :user-type="0"></register-email>
			</div>
			<div class="col-lg-7 col-md-6">
				<div class="image">
					<img src="@/assets/images/hi-to-followers.png" class="img-fluid" alt="hi-to-followers-img" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SocialLinks from '@/components/user/layout/SocialLinks.vue';
import RegisterEmail from '@/components/common/RegisterEmail.vue';
export default {
	components: { SocialLinks, RegisterEmail },
};
</script>
<style lang="scss">
.LoginRegister {
	.contentWrapper {
		padding-top: 0 !important;
	}
	@media screen and (max-width: 1600px) and (min-width: 992px) {
		.image {
			img {
				max-width: 450px;
			}
		}
	}
}
</style>
