<template>
	<div class="password">
		<div class="row justify-content-between align-items-center">
			<div class="col-md-6">
                <register-email :user-type="0"></register-email>
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
import RegisterEmail from '@/components/common/RegisterEmail.vue';
export default {
	data() {
		return {
			title: 'Password',
			subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna arcu tempor et tellus, lobortis interdu.',
            currentStep: 'email'
            
		};
	},
	components: { SocialLinks, RegisterEmail },
    
};
</script>
RegisterEmail
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
