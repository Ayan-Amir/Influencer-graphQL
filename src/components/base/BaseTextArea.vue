<template>
	<validation-provider :name="name" mode="eager" :rules="rules" v-slot="{ errors }">
		<b-form-group>
            <label v-if="label!=null" class="control-label">{{label}}</label>
			<b-form-textarea
				:vid="vid"
				class="form-control"
				:placeholder="placeholder"
				:state="errors[0] ? false : null"
				:value="value"
				@input="input"
				autocomplete="off"
			></b-form-textarea>
			<b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
		</b-form-group>
	</validation-provider>
</template>

<script>
export default {
	props: {
		name: String,
		placeholder: String,
		type: String,
		value: String,
		rules: String,
		vid: String,
        label: String,
        rows: Number
	},
	methods: {
		getValidationState({ dirty, validated, valid = null }) {
			return dirty || validated ? valid : null;
		},
		input(value) {
			this.$emit('input', value);
		},
	},
};
</script>

<style></style>
