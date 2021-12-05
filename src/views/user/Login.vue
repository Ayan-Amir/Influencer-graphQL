<template>
	<div class="login">
		<div class="row justify-content-between">
			<div class="col-lg-5 col-md-6">
				<h1>{{ title }}</h1>
				<p class="subTitle">
					{{ subTitle }}
				</p>
				<div v-if="alert.message" :class="'alert ' + alert.type">{{alert.message}}</div>
				<validation-observer ref="observer" v-slot="{ handleSubmit }">
					<b-form @submit.stop.prevent="handleSubmit(userLogin)">
						<base-input
							className="userName"
							placeholder="Username"
							type="text"
							:required="true"
							v-model="loginDetails.email"
							@input="userInput"
						/>
						<base-input
							className="email"
							placeholder="Email"
							type="text"
							:required="true"
							v-model="loginDetails.password"
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
import { mapActions, mapGetters, mapState } from 'vuex';
import alert from '@/mixin/alert';
export default {
	data() {
		return {
			loginDetails: {
				email: 'ciprian',
				password: '123321',
			},
			title: 'Welcome',
			subTitle:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna arcu tempor et tellus, lobortis interdu.',
		};
	},
    mixins:['alert'],
	computed:{
		...mapState({
			alert: state => state.alert
		})
	},
	methods: {
		...mapActions(['login']),
		userLogin: function () {
			this.login(this.loginDetails)
			.then(()=>{
				if(this.$store.state.auth.authStatus){
                    this.$router.push('/user')
                }
			})
			.catch((error)=>{
				console.log(error.message);
			});
		},
		userInput(data) {
			this.loginDetails.email = data;
		},
		passwordInput(data) {
			this.loginDetails.password = data;
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
