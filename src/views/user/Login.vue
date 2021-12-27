<template>
	<div class="login">
		<div class="row align-items-center justify-content-between col-gap-40">
			<div class="col-lg-5 col-md-6">
				<h1>{{ title }}</h1>
				<p class="subTitle">
					{{ subTitle }}
				</p>
				<login />
				<social-links :linkItems="linkItems" />
			</div>
			<div class="col-lg-7 col-md-6">
				<div class="image">
					<img src="@/assets/images/influencers-vloggers.png" class="img-fluid" alt="blogger-img" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SocialLinks from '@/components/user/layout/SocialLinks.vue';
import Login from '@/components/common/Login.vue';
import alert from '@/mixin/alert';
export default {
	data() {
		return {
			linkItems: [
				{
					index: 1,
					icon: 'google-icon.svg',
					title: 'Google',
					link: 'register/welcome',
				},
				{
					index: 2,
					icon: 'facebook-icon.svg',
					title: 'Facebook',
					link: 'register/welcome',
				},
				{
					index: 3,
					icon: 'ios-icon.svg',
					title: 'Apple',
					link: 'register/welcome',
				},
				{
					index: 4,
					icon: 'email-icon.svg',
					title: 'Email',
					link: 'register',
				},
			],
			title: 'Welcome',
			subTitle:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna arcu tempor et tellus, lobortis interdu.',
		};
	},
	mixins: ['alert'],
	components: { Login, SocialLinks },
};
</script>
<style lang="scss">
.LoginRegister {
	min-height: calc(100vh + 150px) !important;
	@media screen and (max-width: 1600px) {
		min-height: calc(100vh + 290px) !important;
	}
	@media screen and (max-width: 1350px) {
		min-height: calc(100vh + 350px) !important;
	}
	@media screen and (max-width: 991px) {
		min-height: calc(100vh + 250px) !important;
	}
	@media screen and (max-width: 767px) {
		min-height: calc(100vh + 200px) !important;
	}
	.login {
		h1 {
			@media screen and (min-width: 768px) {
				margin-top: rem(64px);
			}
		}
	}
}
</style>
