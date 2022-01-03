<template>
	<validation-provider :name="name" mode="eager" :rules="rules" v-slot="{ errors }">
		<b-form-group :class="className">
			<b-form-input
				:type="type"
				:vid="vid"
				class="form-control"
				:placeholder="placeholder"
				:state="errors[0] ? false : null"
				:value="value"
				@input="input"
				autocomplete="off"
			></b-form-input>
			<b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
		</b-form-group>
	</validation-provider>
</template>

<script>
export default {
	props: {
		name: String,
		className: String,
		placeholder: String,
		type: String,
		value: String,
		rules: String,
		vid: String,
	},
	methods: {
		getValidationState({ dirty, validated, valid = null }) {
			return dirty || validated ? valid : null;
		},
		input(value) {
			this.$emit('input', value);
		},
	},
	mounted() {
		console.log('name', this.name);
		// this.getValidationState();
		// this.onSubmit();
	},
};
</script>

<style></style>
