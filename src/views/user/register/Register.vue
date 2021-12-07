<template>
	<div class="password">
		<div class="row justify-content-between align-items-center">
			<div class="col-md-6">
				<h1>Register</h1>
				<p class="subTitle">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna arcu tempor et tellus, lobortis interdu.
				</p>
				<validation-observer ref="observer" v-slot="{ handleSubmit }">
                    <b-form @submit.stop.prevent="handleSubmit(userLogin)">
                        <base-input
                            className="email"
                            placeholder="Email"
                            type="text"
                            :required="true"
                            v-model="registerEmail"
                            @input="emailInput"
                        />
                        <div class="button-row">
                            <button type="submit" class="btn btn-primary large">
                                Continue
                            </button>
                        </div>
                    </b-form>
                </validation-observer>
			</div>
			<div class="col-md-6">
				<div class="image">
					<img
						src="@/assets/images/hi-to-followers.png"
						class="img-fluid"
						alt="hi-to-followers-img"
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
			title: 'Password',
			subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna arcu tempor et tellus, lobortis interdu.',
            registerEmail: ''
		};
	},
	components: { SocialLinks },
    methods: {
		// ...mapActions(['login']),
		// userLogin: function () {
		// 	this.login(this.loginDetails)
		// 		.then(() => {
		// 			this.$router.push('/user');
		// 		})
		// 		.catch((error) => {
		// 			console.log(error.message);
		// 		});
		// },
		emailInput(email) {
			this.registerEmail = email;
		},
	},
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
