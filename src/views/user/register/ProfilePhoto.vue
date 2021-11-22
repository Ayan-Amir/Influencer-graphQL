<template> 
	<div class="profile">
		<div class="row justify-content-between">
			<div class="col-md-5">
				<h1>Add Your <br>Profile Photo</h1>
				<div class="profile__Photo">
					<!-- profile Photo upload -->
					<base-profile-upload />
				</div>
				<p class="subTitle">
					By continuing you accept our <br><span>Terms and Conditions</span> and <span>Privacy Policy </span>
				</p>
				<div class="button-row">
					<a href="/user" class="btn btn-primary">Finish</a>
				</div>
			</div>
			<div class="col-md-7">
				<div class="image">
					<img
						src="@/assets/images/profile-img.png"
						class="img-fluid"
						alt="profile-img"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BaseProfileUpload from '@/components/base/BaseProfileUpload.vue';
export default {
	
	components: {BaseProfileUpload },
};
</script>

<style lang="scss">
	 .LoginRegister{
        .contentWrapper{
            padding-top: 0 !important;
        }
        .profile{
			&__Photo{
				margin:rem(25px) 0 rem(15px) 0;
			}
            @media screen and (max-width:1700px){
                .image{
                    img{
                        max-width:540px;
                    }
                }
            }
            @media screen and (max-width:1400px){
                .image{
                    img{
                        max-width:475px;
                    }
                }
            }
			@media screen and (max-width:991px){
                .image{
                    img{
                        max-width:100%;
                    }
                }
            }
			@media screen and (max-width:767px){
				.button-row{
					justify-content: start;
				}
			}
        }
    }
</style>
