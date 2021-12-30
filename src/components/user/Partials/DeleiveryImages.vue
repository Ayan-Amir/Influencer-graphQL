<template>
	<div class="row">
		<div class="col-lg-4 col-md-5 col-6" v-for="img in images" :key="img.id">
			<div class="image">
				<img :src="`${$config.IMG_HOST}/190x330/${img.value}`" alt="" class="img-fluid" />
				<button @click="submit">
					<svg-icon class="cross" icon-id="cross" icon-viewbox="0 0 352 542"> </svg-icon>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		images: Array,
	},
	methods: {
		submit() {
			// alert();
		},
	},
};
</script>

<style lang="scss" scoped>
.row > div {
	margin-bottom: rem(24px);
}
.image {
	position: relative;
	border-radius: 25px;
	overflow: hidden;
	img {
		width: 100%;
	}
	button {
		.cross {
			position: absolute;
			width: 25px;
			height: 25px;
			right: 12px;
			top: 10px;
			color: #000;
			transition: 0.4s all;
			&:hover {
				opacity: 0.8;
			}
		}
	}
}
</style>
