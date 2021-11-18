<template>
	<vue-ellipse-progress
		:progress="progress"
		:color="color"
		emptyColor="#D8D8D8	"
		:size="65"
		fontColor="#253858"
		fontSize="14px"
		:thickness="5"
		emptyThickness="5"
	/>
</template>

<script>
export default {
	props: {
		progress: Number,
		color: String,
	},
};
</script>

<style lang="scss" scoped>
/deep/ {
	.ep-circle--progress {
		stroke-linecap: square;
	}
	.ep-legend--value__counter {
		font-weight: 700;
		position: relative;
		left: 5px;
		&::before {
			position: absolute;
			content: '%';
			font-weight: 900;
			left: -13px;
		}
	}
}
</style>
