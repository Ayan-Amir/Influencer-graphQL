<template>
	<div class="login">
		<div class="row justify-content-between">
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
					link: '#',
				},
				{
					index: 2,
					icon: 'facebook-icon.svg',
					title: 'Facebook',
					link: '#',
				},
				{
					index: 3,
					icon: 'phone.svg',
					title: 'phone',
					link: 'register/number-registration',
				},
				{
					index: 4,
					icon: 'email-icon.svg',
					title: 'Email',
					link: '',
				},
			],
			loginDetails: {
				email: 'ciprian',
				password: '123321',
			},
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
	.login {
		.subTitle {
			margin-bottom: rem(70px);
		}
	}
}
</style>
