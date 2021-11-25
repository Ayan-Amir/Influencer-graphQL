<template>
	<validation-provider
		:rules="`${[required ? 'required' : '']}`"
		v-slot="validationContext"
	>
		<b-form-group :class="className">
			<b-form-input
				:type="type"
				class="form-control"
				:placeholder="placeholder"
				:state="getValidationState(validationContext)"
				v-model="value"
				autocomplete="off"
			></b-form-input>
			<b-form-invalid-feedback
				>This is a required field</b-form-invalid-feedback
			>
		</b-form-group>
	</validation-provider>
</template>

<script>
export default {
	props: {
		className: String,
		placeholder: String,
		type: String,
		required: Boolean,
	},
	data() {
		return {
			value: '',
		};
	},
	methods: {
		getValidationState({ dirty, validated, valid = null }) {
			return dirty || validated ? valid : null;
		},
	},
	mounted() {
		// this.getValidationState();
		// this.onSubmit();
	},
};
</script>

<style></style>
