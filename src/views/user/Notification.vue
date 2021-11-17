<template>
	<div class="contentWrapper notification">
		<div class="container">
			<h1>Notification</h1>
			<h3>Today</h3>
			<div class="card">
				<div>
					<div class="card__image">
						<img
							src="@/assets/images/user.png"
							alt=""
							class="img-fluid"
						/>
					</div>
					<div class="card__title">
						5 Min Ago
						<p>Your <span>Campaign</span> 1 performs well.</p>
					</div>
				</div>
			</div>
			<div class="card">
				<div>
					<div class="card__image">
						<img
							src="@/assets/images/user.png"
							alt=""
							class="img-fluid"
						/>
					</div>
					<div class="card__title">
						1 Hour Ago
						<p><span>Dorian Popa</span> has sent you a message.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	components: {},
};
</script>

<style lang="scss" scoped>
.notification {
	h3 {
		margin-bottom: rem(16px);
	}
	.card {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: rem(13px) rem(25px);
		border-radius: 8px;
		border: 0;
		margin-bottom: rem(15px);
		> div {
			display: flex;
			align-items: flex-start;
		}
		&__title {
			font-size: rem(14px);
			font-weight: 400;
			margin-left: rem(18px);
			color: var(--textSecondary);
			p {
				display: block;
				font-size: rem(16px);
				font-weight: 400;
				color: var(--textPrimary);
				margin: 0;
				span {
					font-weight: 500;
				}
			}
		}
	}
}
</style>
