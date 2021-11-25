<template>
	<div class="row products">
		<div class="col-md-3">
			<div class="image">
				<img
					src="@/assets/images/offers.png"
					alt=""
					class="img-fluid"
				/>
			</div>
		</div>
		<div class="col-md-3">
			<div class="image">
				<img
					src="@/assets/images/offers.png"
					alt=""
					class="img-fluid"
				/>
			</div>
		</div>
		<div class="col-md-3">
			<div class="image">
				<img
					src="@/assets/images/offers.png"
					alt=""
					class="img-fluid"
				/>
			</div>
		</div>
		<div class="col-md-3">
			<div class="image">
				<img
					src="@/assets/images/offers.png"
					alt=""
					class="img-fluid"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		gallery: {
			type: Object | Array,
		},
	},
	mounted() {
		// console.log(this.$config);
	},
};
</script>

<style lang="scss" scoped>
.products {
	margin: rem(18px) 0;
	.col-md-3 {
		padding-left: 0;
		padding-right: 0;
	}
	.image {
		height: 345px;
		width: 295px;
		border-radius: 28px;
		overflow: hidden;
	}
}
</style>
