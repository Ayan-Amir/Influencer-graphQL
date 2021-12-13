<template>
	<div class="campaignOverview">
		<div class="campaignOverview__left">
			<p>What to do for this deal:</p>
			<p class="green">
				Post 1 Story on your Instagram to promote our brand
			</p>
			<ul class="campaignOverview__left--info">
				<li>
					Campaign type:
					<span>Instagram story</span>
				</li>
				<li>
					Objective
					<span>Tag us: #happyhopes</span>
					<span>Use our images or videos:</span>
				</li>
				<li>
					Budget:
					<span>94,95 RON</span>
				</li>
				<li>
					Target
					<span>Tag us: #happyhopes</span>
					<span>Use our images or videos:</span>
				</li>
			</ul>
			<div class="campaignOverview__left--image">
				<img
					src="@/assets/images/happyHope.png"
					alt=""
					class="img-fluid"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.campaignOverview {
	display: flex;
	&__left {
		flex: 0 0 655px;
		max-width: 655px;
		@media screen and (max-width: 767px) {
			flex: 0 0 100%;
			max-width: 100%;
		}
		p {
			font-size: rem(16px);
			margin: 0;
			color: var(--textPrimary);
			&.green {
				font-weight: 700;
				color: #23d293;
			}
		}
		&--info {
			list-style: none;
			display: flex;
			margin-top: rem(16px);
			padding-bottom: rem(32px);
			border-bottom: 2px solid #c9ced6;
			@media screen and (max-width: 575px) {
				width: 100%;
				flex-wrap: wrap;
				justify-content: flex-start;
				border: 0;
				padding-bottom: rem(0px);
			}
			li {
				font-size: rem(16px);
				font-weight: 600;
				color: var(--textPrimary);
				&:not(:last-child) {
					margin-right: rem(34px);
				}
				@media screen and (max-width: 575px) {
					width: 40%;
					margin-bottom: 8px;
				}
				span {
					display: block;
					color: #b3b9c5;
					font-size: rem(14px);
					font-weight: 300;
				}
			}
		}
		&--image {
			margin-top: rem(18px);
			border-radius: 27px;
			overflow: hidden;
		}
	}
}
</style>
