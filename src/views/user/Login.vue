<template>
	<div class="login">
        <div class="row justify-content-between">
            <div class="col-lg-5 col-md-6">
                <h1>{{ title }}</h1>
                <p class="subTitle">
                    {{ subTitle }}
                </p>
                <form>
                    <div class="form-group userName">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Username"
                        />
                    </div>
                    <div class="form-group email">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Email"
                        />
                    </div>
                    <div class="button-row">
                        <router-link to="/user" class="btn btn-primary">
                            Login to Continue
                        </router-link>
                    </div>
                    <div class="or"><span>or</span></div>
                    <!-- social links -->
                    <social-links />
                </form>
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
	components: { SocialLinks },
};
</script>
<style lang="scss" >
    .LoginRegister{
        .login{
            form {
            max-width: 440px;
            margin:0;
        }
            .button-row{
                margin-top: rem(40px);
                @include flex(center,
                center);
                @media screen and (max-width:767px){
                    margin-top: rem(25px);
                }
            }
            .form-group {
                margin-bottom: rem(25px);
                @media screen and (max-width:767px){
                    margin-bottom:rem(16px);
                }
                
            }
        }
    }
    
</style>
