<template>
	<div class="login">
		<div class="row justify-content-between">
			<div class="col-lg-5 col-md-6">
				<h1>{{ title }}</h1>
				<p class="subTitle">
					{{ subTitle }}
				</p>
				<validation-observer ref="observer" v-slot="{ handleSubmit }">
					<b-form @submit.stop.prevent="handleSubmit(userLogin)">
						<base-input
							className="userName"
							placeholder="Username"
							type="text"
							:required="true"
							v-model="loginDetails.email"
							:value="loginDetails.email"
							@input="userInput"
						/>
						<base-input
							className="email"
							placeholder="Email"
							type="text"
							:required="true"
							v-model="loginDetails.password"
							:value="loginDetails.password"
							@input="passwordInput"
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
import { mapActions } from 'vuex';
export default {
	data() {
		return {
			loginDetails: {
				email: 'ddd',
				password: 'ddd',
			},
			title: 'Welcome',
			subTitle:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna arcu tempor et tellus, lobortis interdu.',
		};
	},
	methods: {
		...mapActions(['login']),
		userLogin: function () {
			// this.$store.dispatch('login', this.loginDetails)
			// {
			// 	email: this.loginDetails.email,
			// 	password: this.loginDetails.password
			// });
			this.login(this.loginDetails).then(() =>
				this.$router.push('/dashboard')
			);
		},
		userInput(data) {
			this.loginDetails.email = data;
			console.log('user', this.loginDetails.email);
		},
		passwordInput(data) {
			this.loginDetails.password = data;
			console.log('password', this.loginDetails.password);
		},
	},
	// mounted() {
	// 	console.log('v', this.loginDetails.email);
	// },
	// updated() {
	// 	console.log('v', this.loginDetails.email);
	// },
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
