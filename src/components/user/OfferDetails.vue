<template>
	<div class="offers__details">
		<div v-for="(detail, i) in details" :key="i + 1">
			<h2 v-html="detail.title"></h2>
			<h2 v-html="detail.description"></h2>
			<gallery v-if="detail.gallery" :gallery="detail.gallery" />
		</div>
		<div class="button-row">
			<router-link to="#" class="btn btn-primary">Apply Now</router-link>
		</div>
	</div>
</template>

<script>
import Gallery from './partials/Gallery.vue';
export default {
	components: { Gallery },
	props: {
		details: Array,
	},
};
</script>

<style lang="scss" scoped>
.offers__details {
	h2 {
		font-size: rem(18px);
		font-weight: 500;
		color: var(--textPrimary);
		font-family: $secondary-font;
		margin: 10px 0;
		/deep/ p {
			margin: 0;
		}
	}
	.button-row {
		@media screen and (max-width: 575px) {
			text-align: center;
		}
	}
}
</style>
