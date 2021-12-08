<template>
	<div>
        <template id="email" v-if="currentStep=='email'">
            <h1>Email</h1>
            <p class="subTitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna arcu tempor et tellus, lobortis interdu.
            </p>
            <base-alerts :alert="alert"></base-alerts>
            <validation-observer ref="observer" v-slot="{ handleSubmit }">
                <b-form @submit.stop.prevent="handleSubmit(userLogin)">
                    <base-input
                        className="email"
                        placeholder="Email/Username"
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
        </template>
        <template id="password" v-if="currentStep=='password'">
            <h1>Password</h1>
            <p class="subTitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna arcu tempor et tellus, lobortis interdu.
            </p>
            <b-form>
                <base-input
                    className="password"
                    placeholder="Password"
                    type="password"
                    :required="true"
                    v-model="registerPassword"
                    @input="emailInput"
                />
                <div class="button-row">
                    <router-link to="profile" class="btn btn-primary large">
                        Continue
                    </router-link>
                </div>
            </b-form>
        </template>
	</div>
</template>

<script>
import SocialLinks from '@/components/user/layout/SocialLinks.vue';
import { mapActions, mapState } from 'vuex';
import {CHECK_USERNAME} from '@/graphql/user/query';

export default {
    props:{
        userType: 0
    },
	data() {
		return {
			registerEmail: '',
            registerPassword: ''
		};
	},
	components: {
		SocialLinks
	},
	computed: {
		...mapState({
			alert: (state) => state.alert,
		}),
	},
	methods: {
        ...mapActions ('alert', ['error' ]),
		async userLogin () {
            let alert = ""
            const {data, error} = await this.$apollo.query({
                query : CHECK_USERNAME,
                variables:{
                    email: this.registerEmail
                },
            });
            if(data.usernameAvailable.state=="fail"){
                alert = data.usernameAvailable.msg
            }
            if(error){
                alert = error.message
            }
            if(alert!=""){
                this.error(alert);
            }
		},
		emailInput: function(email){
            this.registerEmail = email;
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
