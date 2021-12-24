<template>
	<div class="dealCard card">
		<div class="dealCard__image">
			<img :src="require(`@/assets/images/${deal.image}`)" class="img-fluid" alt="" />
			<span class="timeValue">{{ deal.time }}</span>
		</div>
		<div class="dealCard__detail">
			<div class="d-flex justify-content-between align-items-center">
				<a href="#" class="dealCard__detail--title">{{ deal.title }}</a>
				<div class="dealCard__detail--brandLogo">
					<img :src="require(`@/assets/images/svg/${deal.icon}`)" class="img-fluid" alt="" />
				</div>
			</div>
			<div class="dealCard__detail--watcher">
				<router-link to="" class="btn btn-primary small">
					<svg-icon class="arrow" icon-id="watch_icon" icon-viewbox="0 0 11.999 9"> </svg-icon>
					Watch Now
				</router-link>
				<div class="d-flex">
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<span>+149</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		deal: {
			type: Object | Array,
		},
	},
};
</script>

<style lang="scss" scoped>
.dealCard {
	$self: &;
	margin-bottom: rem(25px);
	&__image {
		position: relative;
		overflow: hidden;
		img {
			width: 100%;
			transition: 0.5s ease-in-out all;
		}
		span {
			position: absolute;
			color: #fff;
			bottom: 15px;
			left: 42px;
			&:before {
				content: '';
				position: absolute;
				width: 18px;
				height: 18px;
				background-image: url("data:image/svg+xml,%3Csvg id='time' xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath id='Path_115' data-name='Path 115' d='M7.992,0A8,8,0,1,0,16,8,8,8,0,0,0,7.992,0ZM8,14.4A6.4,6.4,0,1,1,14.4,8,6.4,6.4,0,0,1,8,14.4ZM8.4,4H7.2V8.8l4.2,2.52.6-.984L8.4,8.2Z' fill='%23fff'/%3E%3C/svg%3E");
				background-repeat: no-repeat;
				left: -25px;
				top: 7px;
			}
		}
		@media screen and (min-width: 1025px) {
			&:hover {
				cursor: pointer;
				img {
					transform: scale(1.2);
				}
			}
		}
	}
	&__detail {
		padding: rem(15px);
		padding-bottom: rem(22px);
		background: #fff;
		&--title {
			font-size: rem(15px);
			color: var(--textPrimary);
			font-weight: 700;
			line-height: 1.3;
			padding-right: 10px;
			@include truncate(2);
		}
		&--brandLogo {
			width: 40px;
			min-width: 40px;
			height: 40px;
			border-radius: 50%;
			overflow: hidden;
			img {
				height: 100%;
				width: 100%;
			}
		}
		&--watcher {
			@include flex(center, space-between);
			padding-top: rem(15px);
			.btn {
				padding: 11px 15px;
				@media screen and (max-width: 767px) and (min-width: 575px) {
					padding: 11px 5px;
					&.small {
						min-width: 90px;
					}
				}
				svg {
					width: 12px;
					margin-right: 7px;
				}
			}
			ul {
				list-style: none;
				display: flex;
				align-items: center;
				li {
					position: relative;
					font-size: 10px;
					font-weight: 500;
					color: #4c4f57;
					width: 31px;
					height: 31px;
					border-radius: 50%;
					background: #e8e8f0;
					border: 2px solid #fff;
					@media screen and (max-width: 767px) and (min-width: 575px) {
						width: 28px;
						height: 28px;
					}
					&:not(:first-child) {
						margin-left: -10px;
					}
					// &:nth-child(1) {
					// 	left: 30px;
					// }
					// &:nth-child(2) {
					// 	left: 20px;
					// }
					// &:nth-child(3) {
					// 	left: 10px;
					// }
					// &:last-child {
					// 	left: 5px;
					// 	top: -3px;
					// }
				}
			}
		}
	}
	@media screen and (max-width: 575px) {
		max-width: 375px;
		margin: auto auto rem(25px) auto;
	}
}
</style>
