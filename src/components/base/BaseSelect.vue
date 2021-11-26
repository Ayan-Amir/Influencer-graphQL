<template>
	<div class="form-group">
		<v-select :options="options" v-model="selected" />
	</div>
</template>

<script>
export default {
	props: {
		options: Array,
		selected: {
			type: String | Object | Array,
		},
	},
};
</script>

<style lang="scss" scoped></style>
