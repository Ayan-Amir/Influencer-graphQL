<template>
	<div class="campaignPromoters">
		<ul class="campaignPromoters__links">
			<li class="active">
				<router-link to="#">
					Awaiting
					<span>1</span>
				</router-link>
			</li>
			<li>
				<router-link to="#"> In progress </router-link>
			</li>
			<li>
				<router-link to="#"> Completed </router-link>
			</li>
		</ul>
		<h2>1 local influencer</h2>
		<campaign-promoters-card />
		<div class="campaignPromoters__budget">
			<p>Budget: <span>0.00 Ron / 1.000</span></p>
			<a href="#" class="btn btn-green">Accept All</a>
		</div>
	</div>
</template>

<script>
import CampaignPromotersCard from './partials/CampaignPromotersCard.vue';
export default {
	components: {
		CampaignPromotersCard,
	},
};
</script>

<style lang="scss" scoped>
.campaignPromoters {
	position: relative;
	&__links {
		list-style: none;
		position: absolute;
		right: 0;
		top: -62px;
		margin-bottom: rem(25px);
		@include flex(center, start);
		li {
			&:not(:last-child) {
				margin-right: rem(14px);
			}
			a {
				position: relative;
				@include flex(center, center);
				font-size: rem(14px);
				font-weight: 700;
				color: #060606;
				background: transparent;
				padding: 8px;
				border-radius: 6px;
				border: 2px solid #e0e5ec;
				min-width: 120px;
				height: 40px;
				text-decoration: unset !important;
				span {
					position: absolute;
					right: 15px;
					top: 8px;
					width: 12px;
					height: 12px;
					background: #fc1524;
					border-radius: 50%;
					@include flex(center, center);
					font-size: 8px;
					font-weight: 700;
					color: #fff;
				}
			}
			&.active {
				a {
					border: 2px solid #9637f1;
				}
			}
		}
	}
	h2 {
		font-size: rem(18px);
		padding-left: rem(16px);
		margin-bottom: rem(20px);
	}
	&__budget {
		margin-top: rem(16px);
		display: flex;
		align-items: center;
		justify-content: space-between;
		p {
			font-size: rem(18px);
			font-family: $secondary-font;
			color: var(--textPrimary);
			font-weight: 700;
			span {
				font-weight: 500;
			}
		}
		.btn-green {
			padding-left: rem(25px);
			padding-right: rem(25px);
		}
	}
}
</style>
