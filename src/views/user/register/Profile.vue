<template>
	<div class="profile">
		<div class="row align-items-center justify-content-between col-gap-50">
			<div class="col-xxl-5 col-md-6">
				<h1>{{ title }}</h1>

				<validation-observer ref="observer" v-slot="{ handleSubmit }">
					<b-form @submit.stop.prevent="handleSubmit(onSubmit)">
						<div class="row">
							<div class="col-md-6">
								<base-input
									placeholder="First Name"
									type="text"
									rules="required"
									v-model="profile.firstName"
									name="First Name"
								/>
							</div>
							<div class="col-md-6">
								<base-input
									placeholder="Last Name"
									type="text"
									rules="required"
									v-model="profile.lastName"
									name="Last Name"
								/>
							</div>
						</div>
						<base-date-picker @input="getDate" v-model="profile.birthdate" name="DOB" rules="required" />
						<base-select :options="gender" v-model="selected" name="Gender" rules="required" />
						<div class="button-row">
							<button type="submit" class="btn btn-primary large" :class="processing ? 'processing' : ''">
								{{ btnText }}
							</button>
						</div>
					</b-form>
				</validation-observer>
			</div>
			<div class="col-xxl-7 col-md-6">
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

}
<script>
import { mapState } from 'vuex';
import { UPDATE_USER } from '@/graphql/user/mutations';
import register from '../../../mixin/register';
export default {
	mixins: [register],
	data() {
		return {
			title: 'My Profile',
			btnText: 'Save',
			processing: false,
			myGender: [],
			selected: 'M',
			gender: [
				{ value: 'M', text: 'Male' },
				{ value: 'F', text: 'Female' },
			],
			profile: {
				firstName: '',
				lastName: '',
				birthdate: '',
				gender: '',
			},
		};
	},
	computed: {
		...mapState({
			alert: (state) => state.alert,
		}),
	},
	methods: {
		onSubmit() {
			this.updateProfile();
		},
		getDate(date) {
			this.profile.birthdate = date;
		},
		async updateProfile() {
			this.btnText = 'Saving...';
			this.processing = true;

			await this.$apollo
				.mutate({
					mutation: UPDATE_USER,
					variables: this.profile,
				})
				.then((data) => {
					if (data) {
						if (data.data.updateUser.state == 'success') {
							this.$router.push('connect-social');
							this.processing = false;
							this.btnText = 'Save';
						}
					}
				})
				.catch((e) => {
					this.handleError(e);
					this.processing = false;
					this.btnText = 'Save';
				});
		},
	},
};
</script>
<style lang="scss" scoped>
.profile {
	/deep/ {
		.v-select-toggle {
			padding-left: 12px;
		}
		.form-control {
			padding-left: 12px;
		}
	}
}
/deep/.invalid-feedback {
	position: static !important;
}
</style>
<style lang="scss">
.LoginRegister {
	@media screen and (max-width: 1400px) {
		min-height: calc(100vh + 60px) !important;
	}
	.contentWrapper {
		padding-top: 0 !important;
	}
	.profile {
		width: 100%;
	}
}
</style>
