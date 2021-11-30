<template>
	<div class="row products">
		<div class="col-md-3 col-6" v-for="(img, i) in gallery" :key="i + 1">
			<div class="image">
				<img
					:src="`${$config.IMG_HOST}/296x346/${img}`"
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
	mounted() {},
};
</script>

<style lang="scss" scoped>
.products {
	margin: rem(18px) 0;
	.image {
		border-radius: 28px;
		overflow: hidden;
	}
	@media screen and (max-width: 767px) {
		> div {
			margin-bottom: rem(22px);
		}
	}
}
</style>
