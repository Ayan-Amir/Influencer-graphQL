<template>
	<div class="details">
		<div v-for="(detail, i) in details" :key="i + 1">
			<h2 v-html="detail.title"></h2>
			<h2 v-html="detail.description"></h2>
			<details-gallery v-if="detail.gallery" :gallery="detail.gallery" />
		</div>
		<div class="button-row">
			<button @click="$emit('handleSubmit')" class="btn btn-primary" :class="processing ? 'processing' : ''">
				Apply Now
			</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			id: 0,
		};
	},
	components: {
		DetailsGallery: () => import('./partials/DetailsGallery.vue'),
	},
	created() {
		this.id = parseInt(this.$route.params.id);
	},
	props: {
		details: Array,
		processing: Boolean,
	},
	methods: {
		handleSubmit() {
			this.updateDetail();
		},
		async updateDetail() {
			this.processing = true;
			await this.$apollo
				.mutate({
					mutation: CAMPAIGN_SUBSCRIBE,
					variables() {
						return {
							idCampaign: parseInt(this.$route.params.id),
						};
					},
				})
				.then((data) => {
					console.log('data', data);
				})
				.catch((e) => {
					console.log(e);
				});
		},
	},
};
</script>

<style lang="scss" scoped>
.details {
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
