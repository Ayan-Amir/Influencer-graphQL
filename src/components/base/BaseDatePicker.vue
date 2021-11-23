<template>
	<b-form-datepicker
		placeholder="Birth date"
		v-model="value"
	></b-form-datepicker>
</template>

<script>
export default {
	data() {
		return {
			value: '',
		};
	},
};
</script>

<style lang="scss" scoped>
.form-control {
	margin-bottom: 10px;
}
</style>
