<template>
	<div class="profile">
		<div class="row align-items-center justify-content-between">
			<div class="col-md-6">
				<h1>{{ title }}</h1>
				<p>{{ subTitle }}</p>
				<validation-observer ref="observer" v-slot="{ handleSubmit }">
					<b-form @submit.stop.prevent="handleSubmit(onSubmit)">
						<base-input placeholder="Email" type="email" />
						<div class="button-row">
							<button type="submit" class="btn btn-primary large">Continue</button>
						</div>
					</b-form>
				</validation-observer>
			</div>
			<div class="col-md-6">
				<div class="image">
					<img
						src="@/assets/images/young-woman-with-smartphone.png"
						class="img-fluid"
						alt="young-woman-with-smartphone-img"
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
			title: 'Email',
			subTitle: 'You will receive an email with a numeric code',
			selected: { value: 'null', text: 'Select the country' },
			country: [
				{ value: null, text: 'Pakistan' },
				{ value: 'a', text: 'Kuwait' },
				{ value: 'b', text: 'Other' },
			],
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
