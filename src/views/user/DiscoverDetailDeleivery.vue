<template>
	<div class="contentWrapper discoverDetailDeleivery">
		<div class="container">
			<div class="row col-gap-40">
				<div class="col-md-6">
					<div class="pageHead">
						<h1>Palas Mall</h1>
						<span class="pageHead__price">$250</span>
					</div>
					<h3>Palas Mall</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco
					</p>
					<base-social-link />
					<a href="#" class="btn btn-primary">Delivery</a>
					<div class="delivery">
						<h3>You delivered:</h3>
						<span class="delivery__date">Sep 10, 2021</span>
						<div class="row col-gap-40">
							<div class="col-md-4">
								<div class="image">
									<img
										src="@/assets/images/instaStatusScreen.png"
										alt=""
										class="img-fluid"
									/>
								</div>
							</div>
							<div class="col-md-4">
								<div class="image">
									<img
										src="@/assets/images/instaPhotoUpload.png"
										alt=""
										class="img-fluid"
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="revision">
						<h3>Revision</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco
						</p>
					</div>
				</div>
				<div class="col-md-6">
					<div class="image">
						<img
							src="@/assets/images/discoveryDetailDeleivery.png"
							alt=""
							class="img-fluid"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BaseSocialLink from '@/components/base/BaseSocialLink.vue';
export default {
	data() {
		return {};
	},
	components: { BaseSocialLink },
};
</script>

<style lang="scss" scoped>
.discoverDetailDeleivery {
	.pageHead {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: rem(24px);
		h1 {
			margin: 0;
		}
		&__price {
			color: var(--primary);
			font-size: rem(27px);
			margin: 0;
			font-weight: 700;
		}
	}
	.col-gap-40 .col-md-4 {
		.image {
			border-radius: 25px;
			overflow: hidden;
		}
	}

	h3 {
		font-size: rem(18px);
		font-weight: 500;
		color: var(--textPrimary);
		margin-bottom: rem(6px);
	}
	.btn.btn-primary {
		font-size: rem(14px);
		font-weight: 700;
		border-radius: 8px;
		padding-left: rem(40px);
		padding-right: rem(40px);
	}
	.delivery {
		margin-top: rem(26px);
		&__date {
			color: var(--primary);
			font-size: rem(14px);
			font-weight: 600;
		}
		> .row {
			margin-top: rem(20px);
		}
	}
	.revision {
		margin-top: rem(26px);
		h3 {
			margin-bottom: rem(18px);
		}
	}
	.image {
		overflow: hidden;
		border-radius: 40px;
	}
}
</style>
