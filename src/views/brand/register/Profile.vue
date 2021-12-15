<template>
	<div class="profile">
		<div class="row align-items-center justify-content-between">
			<div class="col-md-6">
				<h1>{{ title }}</h1>
				<validation-observer ref="observer" v-slot="{ handleSubmit }">
					<b-form @submit.stop.prevent="handleSubmit(onSubmit)">
						<div class="row">
							<div class="col-md-6">
								<base-input
									placeholder="First Name"
									type="text"
								/>
							</div>
							<div class="col-md-6">
								<base-input
									placeholder="last Name"
									type="text"
								/>
							</div>
						</div>
						<base-date-picker />
						<base-select :options="Gender" :selected="selected" />
						<div class="button-row">
							<button type="submit" class="btn btn-primary large">
								Save
							</button>
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
			title: 'My Profile',
			selected: { value: 'null', text: 'Male' },
			Gender: [
				{ value: null, text: 'Male' },
				{ value: 'a', text: 'Female' },
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
