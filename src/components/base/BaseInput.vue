<template>
	<validation-provider :name="name" mode="eager" :rules="rules" v-slot="{ valid, errors }">
		<b-form-group :class="className">
			<b-form-input
				:type="type"
				class="form-control"
				:placeholder="placeholder"
				:state="errors[0] ? false : valid ? true : null"
				:value="value"
				@input="input"
				autocomplete="off"
			></b-form-input>
			<b-form-invalid-feedback
            >{{errors[0]}}</b-form-invalid-feedback
			>
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
        rules: String
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
		// this.getValidationState();
		// this.onSubmit();
	},
};
</script>

<style></style>
