<template>
	<div class="contentWrapper discover">
		<div class="container">
			<filters />
			<div class="card">
				<div>
					<div class="logo">
						<img
							src="@/assets/images/svg/brand-logo.svg"
							alt=""
							class="img-fluid"
						/>
					</div>
					<div class="title">
						Palas Mall
						<span>Nullam convallis sollicitudin</span>
					</div>
				</div>
				<a href="#" class="btn btn-primary">Apply Now</a>
			</div>
		</div>
	</div>
</template>

<script>
import Filters from '@/components/base/Filters.vue';
export default {
	data() {
		return {};
	},
	components: {
		Filters,
	},
};
</script>

<style lang="scss" scoped>
.discover {
	.card {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: rem(15px);
		> div {
			display: flex;
			align-items: center;
			.title {
				font-size: rem(18px);
				font-weight: 500;
				margin-left: rem(18px);
				color: var(--textPrimary);
				span {
					display: block;
					font-size: rem(14px);
					font-weight: 400;
					color: var(--textSecondary);
				}
			}
		}
		.btn.btn-primary {
			font-size: rem(10px);
			color: #fff;
			min-width: 50px;
		}
	}
}
</style>
