<template>
	<div class="row">
		<div class="col-lg-4 col-md-5 col-6" v-for="img in images" :key="img.id">
			<div class="image">
				<img :src="`${$config.IMG_HOST}/190x360/${img.value}`" alt="" class="img-fluid" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		images: Array,
	},
};
</script>

<style lang="scss" scoped>
.row > div {
	margin-bottom: rem(24px);
}
.image {
	border-radius: 25px;
	overflow: hidden;
	img {
		width: 100%;
	}
}
</style>
