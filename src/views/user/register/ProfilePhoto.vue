<template> 
	<div class="row justify-content-between">
		<div class="col-md-5">
			<h1>Add Your <br>Profile Photo</h1>
			<div class="profilePhoto">
				<base-profile-upload />
			</div>
			<p class="subTitle">
				By continuing you accept our <br><span>Terms and Conditions</span> and <span>Privacy Policy </span>
			</p>
			<div class="button-row">
				<a href="#" class="btn btn-primary">Finish</a>
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
</template>

<script>
import BaseProfileUpload from '@/components/base/BaseProfileUpload.vue';
export default {
	
	components: {BaseProfileUpload },
};
</script>

<style lang="scss" scoped>
	.profilePhoto{
		margin:rem(25px) 0 rem(15px) 0;
	}
</style>
