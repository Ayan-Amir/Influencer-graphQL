<template>
	<div class="login">
        <div class="row justify-content-between">
            <div class="col-md-5">
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
                        <button type="button" class="btn btn-primary">
                            Login to Continue
                        </button>
                    </div>
                    <div class="or"><span>or</span></div>
                    <!-- social links -->
                    <social-links />
                </form>
            </div>
            <div class="col-md-6">
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
            .form-control {
                height: rem(76px);
                padding-left: 90px;
                border: 2px solid transparent;
                border-radius: 15px;
                &::placeholder {
                    color: rgba(37, 56, 88, 0.5);
                }
            }
            .button-row{
                margin-top: rem(40px);
                @include flex(center,
                center);
            }
            .form-group {
                position: relative;
                margin-bottom: rem(25px);
                &.userName {
                    &:before {
                        content: '';
                        position: absolute;
                        background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='16.745' height='17.725' viewBox='0 0 16.745 17.725'%3E%3Cpath id='Vector' d='M16.088,14.465a8.41,8.41,0,0,0-4.456-4.456L11.606,10a5.521,5.521,0,1,0-6.466,0l-.027.011A8.369,8.369,0,0,0,0,17.542a.178.178,0,0,0,.178.183H1.514a.178.178,0,0,0,.178-.174A6.682,6.682,0,0,1,13.1,13a6.639,6.639,0,0,1,1.955,4.549.176.176,0,0,0,.178.174h1.336a.178.178,0,0,0,.178-.183,8.3,8.3,0,0,0-.657-3.077ZM8.373,9.352A3.832,3.832,0,1,1,11.08,8.23,3.805,3.805,0,0,1,8.373,9.352Z' fill='%23253858' opacity='0.5'/%3E%3C/svg%3E%0A");
                        background-repeat: no-repeat;
                        width: 20px;
                        height: 20px;
                        left: 40px;
                        top: 50%;
                        transform: translateY(-50%);
                        z-index: 1;
                    }
                }
                &.email {
                    &:before {
                        content: '';
                        position: absolute;
                        background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='18.197' height='16.814' viewBox='0 0 18.197 16.814'%3E%3Cg id='Group' transform='translate(-151.013 -533.398)' opacity='0.5'%3E%3Cpath id='Vector' d='M0,5.315a.877.877,0,0,1,.42-.747L7.893,0l7.473,4.567a.877.877,0,0,1,.42.747v8.717a.877.877,0,0,1-.877.877H.877A.877.877,0,0,1,0,14.032Z' transform='translate(152.219 534.426)' fill='none' stroke='%23253858' stroke-width='1.754'/%3E%3Cpath id='Vector-2' data-name='Vector' d='M0,0,7.893,4.823,15.786,0' transform='translate(152.219 540.126)' fill='none' stroke='%23253858' stroke-linecap='round' stroke-width='1.754'/%3E%3C/g%3E%3C/svg%3E%0A");
                        background-repeat: no-repeat;
                        width: 20px;
                        height: 20px;
                        left: 40px;
                        top: 50%;
                        transform: translateY(-50%);
                        z-index: 1;
                    }
                }
            }
        }
    }
    
</style>
