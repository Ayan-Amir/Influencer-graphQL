<template>
	<div class="login">
		<div class="row justify-content-between">
			<div class="col-lg-5 col-md-6">
				<h1>{{ title }}</h1>
				<p class="subTitle">
					{{ subTitle }}
				</p>
				<validation-observer ref="observer" v-slot="{ handleSubmit }">
					<b-form @submit.stop.prevent="handleSubmit(onSubmit)">
						<base-input
							className="userName"
							placeholder="Username"
							type="text"
							:required="true"
						/>
						<base-input
							className="email"
							placeholder="Email"
							type="text"
							:required="true"
						/>
						<div class="button-row">
							<button
								type="submit"
								to="/user"
								class="btn btn-primary large"
							>
								Login to Continue
							</button>
						</div>
						<div class="or"><span>or</span></div>
						<!-- social links -->
						<social-links />
					</b-form>
				</validation-observer>
			</div>
			<div class="col-lg-7 col-md-6">
				<div class="image">
					<img
						src="@/assets/images/influencers-vloggers.png"
						class="img-fluid"
						alt="blogger-img"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SocialLinks from '@/components/user/layout/SocialLinks.vue';
export default {
	data() {
		return {
			title: 'Welcome',
			subTitle:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna arcu tempor et tellus, lobortis interdu.',
		};
	},
	methods: {
		onSubmit() {
			this.$router.push('/user');
		},
	},
	components: { SocialLinks },
};
</script>
<style lang="scss">
.LoginRegister {
	.login {
		.subTitle {
			margin-bottom: rem(70px);
		}
		form {
			max-width: 440px;
			margin: 0;
		}
		.button-row {
			margin-top: rem(40px);
			@include flex(center, center);
			@media screen and (max-width: 767px) {
				margin-top: rem(25px);
			}
		}
		.form-group {
			margin-bottom: rem(25px);
			@media screen and (max-width: 767px) {
				margin-bottom: rem(16px);
			}
		}
	}
}
</style>
