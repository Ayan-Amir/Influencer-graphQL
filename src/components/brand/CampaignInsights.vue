<template>
	<div class="campaignInsights">
		<div class="campaignInsights__summary">
			<h3>Campaing summary</h3>
			<p>Influencer accepted: 2</p>
		</div>
		<a href="#" class="btn btn-primary">View all stories</a>
	</div>
</template>

<script>
export default {
	components: {},
};
</script>

<style lang="scss" scoped>
.campaignInsights {
	&__summary {
		@media screen and (max-width: 767px) {
			padding: rem(24px) rem(16px);
			border-radius: 16px;
			background: #fff;
			margin-bottom: rem(16px);
			p {
				margin: 0;
			}
		}
		p {
			font-size: rem(18px);
			color: var(--textPrimary);
			font-weight: 500;
		}
	}
}
</style>
