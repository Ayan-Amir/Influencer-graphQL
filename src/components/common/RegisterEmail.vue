<template>
	<div>
        <validation-observer ref="observer" v-slot="{ handleSubmit }">
            <b-form @submit.stop.prevent="handleSubmit(registerUser)">
                <div v-if="currentStep=='email'">
                    <h1>Email</h1>
                    <p class="subTitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna arcu tempor et tellus, lobortis interdu.
                    </p>
                    <base-input
                        name="Email"
                        className="email"
                        placeholder="Email/Username"
                        type="text"
                        rules="required"
                        v-model="email"
                    />
                </div>
                <div id="password" v-if="currentStep=='password'">
                    <h1>Password</h1>
                    <p class="subTitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna arcu tempor et tellus, lobortis interdu.
                    </p>
                    <base-input
                        name="Password"
                        className="password"
                        placeholder="Password"
                        type="password"
                        rules="required|length:8"
                        v-model="password"
                    />
                </div>
                <base-alerts :alert="alert"></base-alerts>
                <div class="button-row">
                    <button type="submit" class="btn btn-primary large">
                        Continue
                    </button>
                </div>
            </b-form>
        </validation-observer>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import {CHECK_USERNAME} from '@/graphql/user/query';

export default {
    props:{
        userType: 0
    },
	data() {
		return {
			email: '',
            password: '',
            currentStep: 'email'
		};
	},
	computed: {
		...mapState({
			alert: (state) => state.alert,
		}),
	},
	methods: {
        ...mapActions ('alert', ['error','clear']),
		async registerUser () {
            if(this.currentStep=="email"){
                let alert = ""
                const {data, error} = await this.$apollo.query({
                    query : CHECK_USERNAME,
                    variables:{
                        email: this.email
                    },
                });
                if(data.usernameAvailable.state=="fail"){
                    alert = data.usernameAvailable.msg
                    let email = document.querySelector(".form-group.email input");
                    email.classList.remove("is-valid")
                    email.classList.add("is-invalid")
                }
                else{
                    this.clear();
                    this.currentStep='password';
                }
                if(error){
                    alert = error.message
                }
                if(alert!=""){
                    this.error(alert);
                }
            }
            else{

            }
            
		}
	}
};
</script>

<style lang="scss">
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
</style>
