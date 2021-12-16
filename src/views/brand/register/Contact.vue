<template>
	<div class="profile">
		<div class="row align-items-center justify-content-between">
			<div class="col-lg-6 col-md-6">
				<h1>{{ title }}</h1>
				<validation-observer ref="observer" v-slot="{ handleSubmit }">
					<b-form @submit.stop.prevent="handleSubmit(onSubmit)">
						<div class="row">
							<div class="col-md-6">
								<base-input placeholder="First Name" type="text" />
							</div>
							<div class="col-md-6">
								<base-input placeholder="Last Name" type="text" />
							</div>
						</div>
						<base-input placeholder="Email" type="email" />
						<base-input placeholder="Phone" type="tel" />
						<div class="button-row">
							<button type="submit" class="btn btn-primary large">Save</button>
						</div>
					</b-form>
				</validation-observer>
			</div>
			<div class="col-lg-6 col-md-6">
				<div class="image">
					<img src="@/assets/images/contact.png" class="img-fluid" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: 'Contact',
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
	.profile {
		width: 100%;
	}
}
</style>
