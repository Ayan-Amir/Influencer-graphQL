<template>
	<div class="offerCard">
		<div class="offerCard__image">
			<img
				:src="`${require(`@/assets/images/${cardData.mainImage}`)}`"
				class="img-fluid"
				alt=""
			/>
			<span>{{ cardData.time }}</span>
		</div>
		<div class="offerCard__detail">
			<div class="d-flex justify-content-between">
				<div class="offerCard__detail--title">{{ cardData.title }}</div>
				<div class="offerCard__detail--brandLogo">
					<img
						:src="`${require(`@/assets/images/brandlogo/${cardData.brandLogo}`)}`"
						class="img-fluid"
						alt=""
					/>
				</div>
			</div>
			<div class="offerCard__detail--viewers">
				<router-link to="" class="btn btn-primary">
					<svg-icon
						class="arrow"
						icon-id="watch_icon"
						icon-viewbox="0 0 11.999 9"
					>
					</svg-icon>
					Watch Now
				</router-link>
				<div class="d-flex align-items-center">
					<ul>
						<li
							v-for="(data, i) in cardData.imageLists"
							:key="i + 1"
						>
							<img
								v-if="data.img !== ''"
								:src="`${require(`@/assets/images/${data.img}`)}`"
								class="img-fluid"
								alt=""
							/>
						</li>
					</ul>
					<span class="offerCard__detail--viewers--numbers">{{
						cardData.number
					}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		cardData: Object,
	},
};
</script>

<style lang="scss" scoped>
.offerCard {
	$self: &;
	border-radius: 20px;
	overflow: hidden;
	margin-bottom: rem(25px);
	cursor: pointer;
	&__image {
		position: relative;
		overflow: hidden;
		img {
			width:100%;
			transition: 0.5s ease-in-out all;
		}
		span {
			position: absolute;
			color: #fff;
			bottom: 22px;
			left: 42px;
			&:before {
				content: '';
				position: absolute;
				width: 20px;
				height: 20px;
				background-image: url("data:image/svg+xml,%3Csvg id='time' xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath id='Path_115' data-name='Path 115' d='M7.992,0A8,8,0,1,0,16,8,8,8,0,0,0,7.992,0ZM8,14.4A6.4,6.4,0,1,1,14.4,8,6.4,6.4,0,0,1,8,14.4ZM8.4,4H7.2V8.8l4.2,2.52.6-.984L8.4,8.2Z' fill='%23fff'/%3E%3C/svg%3E");
				background-repeat: no-repeat;
				left: -25px;
				top: 50%;
				transform: translateY(-50%);
			}
		}
	}
	&__detail {
		padding: rem(15px);
		padding-bottom: rem(22px);
		background: #fff;
		&--title {
			font-size: rem(17px);
			color: var(--textPrimary);
			font-weight: 700;
			line-height: 1.3;
		}
		&--brandLogo {
			padding-left: 10px;
		}
		&--viewers {
			@include flex(center, space-between);
			padding-top: rem(15px);
			.btn {
				padding: 11px 15px;
				font-size: 10px;
				font-weight: 600;
				border-radius: 8px;
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
					width: rem(32px);
					min-width: rem(32px);
					height: rem(32px);
					border-radius: 100%;
					background: #e8e8f0;
					border: 2px solid #fff;
					overflow: hidden;
					position: relative;
					&:not(:first-child) {
						margin-left: -10px;
					}
				}
			}
			&--numbers {
				color: #4c4f57;
				font-size: rem(12px);
				font-weight: 600;
				margin-left: 5px;
				display: inline-block;
			}
		}
	}
	@media screen and (min-width: 1025px) {
		&:hover {
			#{$self}__image {
				img {
					transform: scale(1.2);
				}
			}
		}
	}
	@media screen and (max-width:575px){
		max-width:375px;
		margin:auto auto rem(25px) auto;
	}
}
</style>
