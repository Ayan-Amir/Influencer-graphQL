<template>
	<div class="form-group">
		<v-select :options="options" v-model="selected" />
	</div>
</template>

<script>
export default {
	props: {
		options: Array,
		selected: String,
	},
};
</script>

<style lang="scss" scoped></style>
