<template>
	<div class="discoverDetailDeleivery container">
		<div class="row">
			<div class="col-md-6">
				<div class="pageHead">
					<h1>{{title}}</h1>
					<span class="pageHead__price">{{price}}</span>
				</div>
				<h3>{{subTitle}}</h3>
				<p>
					{{desc}}
				</p>
				<base-social-link />
				<a href="#" class="btn btn-primary small">Delivery</a>
				<div class="delivery">
					<h3>You delivered:</h3>
					<span class="delivery__date">{{deliveryDate}}</span>
					<deleivery-images />
				</div>
				<div class="revision">
					<h3>Revision</h3>
					<p>
						{{desc}}
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
</template>

<script>
import BaseSocialLink from '@/components/base/BaseSocialLink.vue';
import DeleiveryImages from '@/components/user/partials/DeleiveryImages.vue';
export default {
	data() {
		return {
			title:'Palas Mall',
			price:'$250',
			subTitle:'Palas Mall',
			deliveryDate:'Sep 10, 2021',
			desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
		};
	},
	components: { BaseSocialLink, DeleiveryImages },
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
			font-family: $secondary-font;
		}
	}
	p {
		font-family: $secondary-font;
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
		padding-left: rem(42px);
		padding-right: rem(42px);
	}
	.delivery {
		margin-top: rem(20px);
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
		margin-top: rem(24px);
		h3 {
			margin-bottom: rem(18px);
		}
	}
	.image {
		overflow: hidden;
		border-radius: 30px;
	}
}
</style>
