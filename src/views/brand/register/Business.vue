<template>
	<div class="business">
		<div class="row align-items-center justify-content-between">
			<div class="col-lg-5 col-md-6">
				<h1>{{ title }}</h1>
				<p>{{ subTitle }}</p>
				<validation-observer ref="observer" v-slot="{ handleSubmit }">
					<b-form @submit.stop.prevent="handleSubmit(userLogin)">
						<base-input className="house" placeholder="Business Name" type="text" />
						<base-input className="password" placeholder="Password" type="password" />
						<div class="button-row">
							<button type="submit" to="/user" class="btn btn-primary large">Continue</button>
						</div>
					</b-form>
				</validation-observer>
			</div>
			<div class="col-lg-7 col-md-6">
				<div class="image">
					<img src="@/assets/images/blogger-image.png" class="img-fluid" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: 'Business Name',
			subTitle:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna arcu tempor et tellus, lobortis interdu.',
		};
	},
	methods: {
		onSubmit() {
			this.$router.push('connect-social');
		},
	},
};
</script>
<style lang="scss">
.LoginRegister {
	.contentWrapper {
		padding-top: 0 !important;
	}
	.business {
		.form-group {
			margin-bottom: rem(25px);
			@media screen and (max-width: 767px) {
				margin-bottom: rem(16px);
			}
			&.house:before {
				content: '';
				position: absolute;
				background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='23.483' height='24.59' viewBox='0 0 23.483 24.59'%3E%3Cpath id='Path_965' data-name='Path 965' d='M28.273,15.558,17.565,4.85a1.071,1.071,0,0,0-1.5,0L5.359,15.558a1.071,1.071,0,0,0,.707,1.8H7.372V28.064a1.071,1.071,0,0,0,1.071,1.071h6V21.95a1.071,1.071,0,0,1,1.071-1.071H18.1a1.071,1.071,0,0,1,1.071,1.071v7.174h6a1.071,1.071,0,0,0,1.071-1.071V17.346H27.6a1.071,1.071,0,0,0,.675-1.788Z' transform='translate(-5.071 -4.544)' fill='%23c8cdd5' opacity='0.996'/%3E%3C/svg%3E%0A");
				background-repeat: no-repeat;
				width: 25px;
				height: 25px;
				left: 40px;
				top: 46%;
				transform: translateY(-50%);
				z-index: 1;
			}
			.form-control {
				height: 76px;
				padding-left: 90px;
			}
		}
	}
}
</style>
