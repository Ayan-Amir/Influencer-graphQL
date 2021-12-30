<template>
	<div class="row">
		<div class="col-lg-4 col-md-5 col-6" v-for="img in images" :key="img.id">
			<div class="image">
				<img :src="`${$config.IMG_HOST}/190x330/${img.value}`" alt="" class="img-fluid" />
				<button @click="submit(img.id, $event)">
					<svg-icon class="cross" icon-id="trash" icon-viewbox="0 0 448  512"> </svg-icon>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { REMOVE_DELIVERY } from '@/graphql/user/mutations';

export default {
	props: {
		images: Array,
	},
	methods: {
		submit(id, event) {
			this.deleteAction(id, event);
		},
		async deleteAction(id, event) {
			await this.$apollo
				.mutate({
					mutation: REMOVE_DELIVERY,
					variables: {
						id: parseInt(id),
					},
				})
				.then((data) => {
					if (data) {
						if (
							data.data.removeDelivery.state == 'success' ||
							data.data.removeDelivery.state == 'updated'
						) {
							let parentEle = event.target.parentNode.closest('.col-lg-4');
							parentEle.classList.add('d-none');
						}
					}
				})
				.catch((e) => {
					this.handleError(e);
				});
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
		position: absolute;
		background: #fff;
		border-radius: 50%;
		right: 12px;
		top: 10px;
		height: 30px;
		width: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0;
		color: var(--primary);
		.cross {
			width: 15px;
			height: 15px;
			transition: 0.4s all;
		}
		&:hover {
			.cross {
				opacity: 0.8;
			}
		}
	}
}
</style>
