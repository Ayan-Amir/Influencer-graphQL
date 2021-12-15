<template>
	<div class="promotersCard card">
		<div class="promotersCard__detail">
			<ul class="promotersCard__detail--user">
				<router-link to="/brand/influencer-detail" class="abs-link"></router-link>
				<li class="promotersCard__detail--image">
					<img src="@/assets/images/icons/user.png" alt="" class="img-fluid" />
				</li>
				<li>
					Dorian Popa
					<span>2.000.000 Followers</span>
				</li>
			</ul>
			<span class="promotersCard__detail--price">1.000 Ron</span>
		</div>
		<ul class="promotersCard__actions">
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
	@media screen and (max-width: 575px) {
		flex-direction: column;
		align-items: unset;
	}
	&__detail {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		&--user {
			position: relative;
			display: flex;
			align-items: center;
			list-style: none;
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
		&--price {
			font-size: rem(14px);
			color: var(--primary);
			padding: 0 rem(12px);
			font-weight: 700;
			font-family: $secondary-font;
		}
	}
	&__actions {
		list-style: none;
		display: flex;
		justify-content: flex-end;
		li {
			position: relative;
			padding-left: rem(12px);
			@media screen and (min-width: 576px) {
				&::before {
					content: '';
					position: absolute;
					height: 60px;
					top: -10px;
					left: 0;
					border: 1px solid #c9ced6;
					border-radius: 50px;
					overflow: hidden;
					@media screen and (max-width: 991px) {
						top: -13px;
					}
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
