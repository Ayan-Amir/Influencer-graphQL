<template>
	<div class="row">
		<div class="col-lg-4 col-md-5 col-6">
			<div class="image">
				<img :src="`${$config.IMG_HOST}/190x360/${images.value}`" alt="" class="img-fluid" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		images: Object,
	},
};
</script>

<style lang="scss" scoped>
.image {
	border-radius: 25px;
	overflow: hidden;
	img {
		width: 100%;
	}
}
</style>
