<template>
	<div class="promotersCard card">
		<router-link to="/brand/influencer-detail" class="abs-link"></router-link>
		<ul class="promotersCard__user">
			<li class="promotersCard__user--image">
				<img src="@/assets/images/icons/user.png" alt="" class="img-fluid" />
			</li>
			<li>
				Dorian Popa
				<span>2.000.000 Followers</span>
			</li>
		</ul>
		<ul class="promotersCard__actions">
			<li>1.000 Ron</li>
			<li>
				<div class="inline-btns">
					<a href="#" class="btn btn-secondary">Decline</a>
					<a href="#" class="btn btn-green">Accept</a>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.promotersCard {
	position: relative;
	padding: rem(14px) rem(22px);
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	border-radius: 10px !important;
	&__user {
		display: flex;
		align-items: center;
		list-style: none;
		&--image {
			position: relative;
			width: 50px;
			min-width: 50px;
			height: 50px;
			background: #d8b4fa;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-right: rem(15px);
			// img {
			// 	height: 100%;
			// 	width: 100%;
			// }
			.status {
				position: absolute;
				width: 14px;
				height: 14px;
				background: #24d694;
				border-radius: 50%;
				right: 0;
				bottom: 0;
			}
		}
		li {
			font-size: rem(18px);
			font-weight: 500;
			color: var(--textPrimary);
			span {
				display: block;
				color: var(--textSecondary);
				font-size: rem(14px);
				font-weight: 400;
			}
		}
	}
	&__actions {
		list-style: none;
		display: flex;
		align-items: center;
		li {
			font-size: rem(14px);
			font-weight: 400;
			color: var(--primary);
			padding: 0 rem(12px);
			font-weight: 700;
			&:first-child {
				position: relative;
				&::before {
					position: absolute;
					content: '';
					height: 60px;
					top: -20px;
					right: 0;
					background: #c9ced6;
					border: 1px solid #c9ced6;
					border-radius: 50px;
					overflow: hidden;
				}
			}
			.inline-btns {
				display: flex;
				.btn-secondary {
					margin-right: 6px;
				}
			}
		}
	}
}
</style>
