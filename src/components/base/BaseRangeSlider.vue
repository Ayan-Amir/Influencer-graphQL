<template>
	<div class="multiSelectSlider">
		<MultiRangeSlider
			:min="min"
			:max="max"
			:step="1"
			:ruler="false"
			:label="false"
			:minValue="start"
			:maxValue="end"
			@input="UpdateValues"
		/>
	</div>
</template>

<script>
export default {
	props: {
		min: Number,
		max: Number,
		start: Number,
		end: Number,
	},
	components: {
		MultiRangeSlider: () => import(/* webpackChunkName: "multiRangeSlider" */ 'multi-range-slider-vue'),
	},
	methods: {
		UpdateValues(e) {
			this.$emit('rangeValue', e.minValue, e.maxValue);
		},
	},
};
</script>

<style lang="scss" scoped>
// multi range slider
/deep/ {
	.multi-range-slider {
		border: 0 !important;
		box-shadow: none !important;
		.bar-left,
		.bar-right {
			background-color: #eeeef2 !important;
			border-radius: none !important;
			box-shadow: none !important;
			padding: 1px 0px !important;
		}
		.thumb {
			&::before {
				background-color: #fff !important;
				width: 24px !important;
				height: 24px !important;
				border: solid 2px var(--primary) !important;
				box-shadow: none !important;
				margin: -11px !important;
			}
			.max-value {
				display: none !important;
			}
			.min-value {
				display: none !important;
			}
		}
		.bar-inner {
			background-color: var(--primary) !important;
			border: 0 !important;
			box-shadow: none !important;
		}
	}
}
</style>
