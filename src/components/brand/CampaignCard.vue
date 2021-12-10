<template>
	<div class="campaignCard card">
		<ul class="campaignCard__user">
			<li class="campaignCard__user--image active">
				<img
					src="@/assets/images/icons/user.png"
					alt=""
					class="img-fluid"
				/>
			</li>
			<li>
				Paid Campaign 1
				<span>Active</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.campaignCard {
	&__user {
		display: flex;
		&--image {
			width: 50px;
			min-width: 50px;
			height: 50px;
			background: #d8b4fa;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			img {
				height: 100%;
				width: 100%;
			}
		}
	}
}
</style>
