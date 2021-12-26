<template>
    
    <validation-provider :name="name" mode="eager" :rules="rules" v-slot="{ valid, errors }">
        <b-form-group>
            <b-form-datepicker
                placeholder="Birth date"
                :value="value"
                @input="input"
                :state="errors[0] ? false : valid ? true : null"
                locale="en-US"
                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
            ></b-form-datepicker>
            <b-form-invalid-feedback
            >{{errors[0]}}</b-form-invalid-feedback
            >
        </b-form-group>
    </validation-provider>
    
</template>

<script>
export default {
    props: {
		value: String,
        name: String,
        rules: String
	},
	// data() {
	// 	return {
	// 		value: '',
	// 	};
	// },
    methods:{
        input(value) {
            console.log(value)
			this.$emit('input', value);
		}
    }
};
</script>

<style lang="scss" scoped>

</style>
