<template>
	<div class="welcome">
        <div class="row align-items-center justify-content-between">
            <div class="col-md-5">
                <h1>{{ title }}</h1>
                <p class="alertMessage">
                    {{message}}
                </p>
                <p class="subTitle">
                    {{ subTitle }}
                </p>
                <div class="button-row">
                    <router-link to="password" class="btn btn-primary">Ok, let’s do it</router-link>
                </div>
            </div>
            <div class="col-md-7">
                <div class="image">
                    <img
                        src="@/assets/images/Securitylogo.png"
                        class="img-fluid"
                        alt="Securitylogo-img"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hi Rusu Anda',
			subTitle:'For us to send you money and set-up your bank account, you need to provide some personal details and accept our influencer agreement. Please have your identity card ready. ',
            message:'We value your privacy and we’ll always keep your personal data safe and secure.'
		};
	},
};
</script>

<style lang="scss" >
.LoginRegister{
    .welcome{
        @media screen and (max-width:1600px){
            .image{
                img{
                    max-width:480px
                }
            }
        }
        @media screen and (max-width:1300px){
            .image{
                img{
                    max-width:375px
                }
            }
        }
         @media screen and (max-width:767px){
            .image{
                img{
                    max-width:325px
                }
            }
        }
    }
}
</style>

