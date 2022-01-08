<template>
	<validation-provider :name="name" mode="eager" :rules="rules" v-slot="{ errors }">
		<b-form-group :label="label">
            <b-form-radio-group
                :options="options"
                :name="name"
                @input="input"
                :checked="value"
                plain
            ></b-form-radio-group>
			<b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
		</b-form-group>
	</validation-provider>
</template>

<script>
export default {
	props: {
		name: String,
		value: String,
		rules: String,
        label: String,
        options: Array
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
