<template>
	<div class="skeleton">
		<div class="skeleton__offer" v-if="this.type == 'offer'">
			<div class="row">
				<div class="col-xl-3 col-lg-4 col-sm-6" v-for="(item, index) in count" :key="index">
					<div class="offerCard card">
						<div class="offerCard__image">
							<vue-skeleton-loader :width="450" :height="200" animation="wave" />
						</div>
						<div class="offerCard__detail">
							<div class="d-flex justify-content-between">
								<vue-skeleton-loader animation="wave" :width="350" :height="20" />
							</div>
							<div class="offerCard__detail--watcher">
								<vue-skeleton-loader
									:width="100"
									:height="35"
									animation="wave"
									:rounded="true"
									:radius="8"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="skeleton__notification" v-if="this.type == 'notification'">
			<div class="row">
				<div class="col-md-12" v-for="(item, index) in count" :key="index">
					<div class="card notificationCard">
						<div>
							<div class="notificationCard__image">
								<vue-skeleton-loader :width="450" :height="200" :rounded="true" animation="wave" />
							</div>
							<div class="notificationCard__title">
								<vue-skeleton-loader animation="wave" :width="350" :height="15" />
								<span>
									<vue-skeleton-loader animation="wave" :width="0" :height="5" />
								</span>
								<vue-skeleton-loader animation="wave" :width="150" :height="15" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="skeleton__discover" v-if="this.type == 'discover'">
			<div class="card discoverCard" v-for="(item, index) in count" :key="index">
				<div>
					<div class="discoverCard__image">
						<vue-skeleton-loader :width="450" :height="200" :rounded="true" animation="wave" />
					</div>
					<div class="discoverCard__title">
						<vue-skeleton-loader animation="wave" :width="150" :height="20" />
						<span>
							<vue-skeleton-loader animation="wave" :width="0" :height="5" />
						</span>
						<vue-skeleton-loader animation="wave" :width="350" :height="15" />
					</div>
				</div>
				<div v-if="isApply">
					<vue-skeleton-loader :width="110" :height="40" animation="wave" :rounded="true" :radius="8" />
				</div>
			</div>
		</div>
		<div class="skeleton__profile" v-if="this.type == 'dashboard'">
			<div class="card profile">
				<div class="profile__image">
					<vue-skeleton-loader type="circle" :width="160" :height="160" :rounded="true" animation="wave" />
				</div>
				<div class="profile__title">
					<vue-skeleton-loader animation="wave" :width="120" :height="15" />
					<span>
						<vue-skeleton-loader animation="wave" :width="0" :height="5" />
						<vue-skeleton-loader animation="wave" :width="0" :height="5" />
					</span>
					<vue-skeleton-loader animation="wave" :width="70" :height="15" />
					<span>
						<vue-skeleton-loader animation="wave" :width="0" :height="5" />
						<vue-skeleton-loader animation="wave" :width="0" :height="5" />
					</span>
					<div class="button-row">
						<vue-skeleton-loader :width="100" :height="35" animation="wave" :rounded="true" :radius="8" />
					</div>
				</div>
			</div>
		</div>
		<div class="skeleton__header" v-if="this.type == 'header'">
			<div class="header__image">
				<vue-skeleton-loader type="circle" :width="50" :height="50" :rounded="true" animation="wave" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		type: String,
		count: {
			type: Number,
			default: 3,
		},
		isApply: Boolean,
	},
	components: {
		VueSkeletonLoader: () => import(/* webpackChunkName: "vueSkeletonLoader" */ 'skeleton-loader-vue'),
	},
};
</script>

<style lang="scss" scoped>
.offerCard {
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
			font-size: rem(17px);
			color: var(--textPrimary);
			font-weight: 700;
			line-height: 1.3;
			padding-right: 10px;
			@include truncate(2);
		}
		&--brandLogo {
			min-width: 50px;
			border-radius: 50%;
			overflow: hidden;
		}
		&--watcher {
			@include flex(center, space-between);
			padding-top: rem(15px);
			.btn {
				padding: 11px 15px;
				svg {
					width: 12px;
					margin-right: 7px;
				}
			}
		}
	}
	@media screen and (max-width: 575px) {
		max-width: 375px;
		margin: auto auto rem(25px) auto;
	}
}

.notification {
	h3 {
		margin-bottom: rem(16px);
	}
	.notificationCard {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: rem(13px) rem(25px);
		border-radius: 16px;
		margin-bottom: rem(15px);
		border: 2px solid transparent;
		transition: 0.4s ease all;
		cursor: pointer;
		@media screen and (min-width: 1025px) {
			&:hover {
				border: 2px solid var(--primary);
			}
		}
		&.active {
			border: 2px solid var(--primary);
		}
		> div {
			display: flex;
			align-items: flex-start;
		}
		&__image {
			width: 50px;
			height: 50px;
			overflow: hidden;
			border-radius: 50%;
			img {
				height: 100%;
				width: 100%;
			}
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
				@include truncate(1);
				span {
					font-weight: 500;
				}
			}
		}
	}
}

.discoverCard {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: rem(15px);
	border-radius: 8px !important;
	margin-bottom: rem(15px);
	> div {
		display: flex;
		align-items: center;
	}
	&__image {
		width: 50px;
		height: 50px;
		min-width: 50px;
		border-radius: 50%;
		overflow: hidden;
		img {
			height: 100%;
			width: 100%;
		}
	}
	&__title {
		font-size: rem(18px);
		font-weight: 500;
		margin-left: rem(18px);
		color: var(--textPrimary);
		font-family: $secondary-font;
		span {
			display: block;
			font-size: rem(14px);
			font-weight: 400;
			color: var(--textSecondary);
			@include truncate(2);
		}
	}
	.btn.btn-primary {
		margin-left: rem(20px);
	}

	&__price {
		margin: 0;
		font-size: 14px;
		color: var(--primary);
		font-weight: 700;
		position: relative;
		margin-right: rem(42px);
		padding-left: rem(16px);
		font-family: $secondary-font;
		&::before {
			position: absolute;
			content: '';
			height: 24px;
			width: 24px;
			background-image: url(../../assets/images/icons/arrow.png);
			background-repeat: no-repeat;
			top: 50%;
			transform: translateY(-50%);
			right: -25px;
			transition: 0.5s ease all;
		}
		@media screen and (max-width: 1024px) {
			margin-right: rem(30px);
			&::before {
				right: -35px;
			}
		}
	}
	@media screen and (min-width: 1025px) {
		&:hover {
			.discoverCard__price {
				&::before {
					right: -35px;
				}
			}
		}
	}
}

.profile {
	padding: rem(24px) rem(16px) rem(16px) rem(16px);
	border-radius: 12px !important;
	text-align: center;
	&__image {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: rem(14px);
	}
	&__title {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	&__subTitle {
		font-size: rem(16px);
		font-weight: 300;
		margin-bottom: rem(12px);
	}
	.button-row {
		margin: 0;
		.btn.btn-primary {
			font-size: rem(14px);
			padding-right: rem(24px);
			padding-left: rem(24px);
		}
	}
}
</style>
