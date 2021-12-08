<template>
	<div class="form-group">
		<v-select :options="options" v-model="initialValue" />
	</div>
</template>

<script>
export default {
	props: {
		options: Array,
		initialValue: String,
		selected: {
			type: String | Object | Array,
		},
	},
};
</script>

<style lang="scss" scoped></style>
