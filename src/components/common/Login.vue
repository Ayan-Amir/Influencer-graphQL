<template>
	<div class="loginForm">
		<base-alerts :alert="alert"></base-alerts>
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
					className="password"
					placeholder="Password"
					type="password"
					:required="true"
					v-model="loginDetails.password"
					@input="passwordInput"
				/>
				<div class="button-row">
					<button
						type="submit"
						to="/user"
						:class="processing ? 'processing' : ''"
						class="btn btn-primary large"
					>
						Login to Continue
					</button>
				</div>
				<div class="or"><span>or</span></div>
			</b-form>
		</validation-observer>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
	data() {
		return {
			loginDetails: {
				email: 'ciprian',
				password: '123321',
			},
			processing: false,
		};
	},
	computed: {
		...mapState({
			alert: (state) => state.alert
		}),
	},
	methods: {
		...mapActions(['login', 'logOut']),
		userLogin: function () {
			this.logOut();
			this.processing = true;
			this.login(this.loginDetails);
		},
		userInput(data) {
			this.loginDetails.email = data;
		},
		passwordInput(data) {
			this.loginDetails.password = data;
		},
	},
};
</script>

<style lang="scss" scoped>
.button-row {
	@include flex(center, center);
}
</style>

<style lang="scss">
form {
	max-width: 440px;
	margin: 0;
}
.button-row {
	margin-top: rem(40px);
	// @include flex(center, center);
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
</style>
